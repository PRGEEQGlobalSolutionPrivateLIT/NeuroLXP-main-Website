"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import type { SimpleLink } from "../../data/navigation";
import styles from "./footer.module.css";

const cardTitles: Record<string, string> = {
  "our-story": "Our Story",
  "our-mission": "Our Mission",
  "our-vision": "Our Vision",
};
let cancelActiveHighlight: (() => void) | undefined;

const normalizeText = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

function cardIdForLink(link: SimpleLink): string | undefined {
  // Labels distinguish cards even when all three links use one section hash.
  const label = normalizeText(link.label);
  const hash = normalizeText(link.href.split("#")[1] ?? "");
  return Object.keys(cardTitles).find((id) => label === normalizeText(cardTitles[id]))
    ?? Object.keys(cardTitles).find((id) => hash === normalizeText(id));
}

function samePage(first: string, second: string) {
  const clean = (path: string) => {
    const trimmed = path.replace(/\/+$/, "") || "/";
    // Preserve other routes; tolerate the existing home-page spelling variants.
    return /^\/homepage$/i.test(trimmed) ? "/HomePage" : trimmed;
  };
  return clean(first) === clean(second);
}

function findCard(id: string): HTMLElement | null {
  const title = cardTitles[id];
  if (!title) return null;
  const headings = Array.from(document.querySelectorAll<HTMLElement>("h2, h3, h4"));
  const heading = headings.find((item) =>
    normalizeText(item.textContent ?? "") === normalizeText(title));
  if (!heading) return null;

  // Do not depend on CSS module class names, which can be hashed in production.
  // The card encloses its heading, description and image, but no other card title.
  let parent = heading.parentElement;
  while (parent && parent !== document.body) {
    const titlesInside = headings.filter((item) => parent!.contains(item) &&
      Object.values(cardTitles).some((name) =>
        normalizeText(item.textContent ?? "") === normalizeText(name)));
    if (titlesInside.length > 1) return null;
    if (parent.querySelector("p") && parent.querySelector("img, picture")) return parent;
    parent = parent.parentElement;
  }
  return null;
}

function highlightCard(card: HTMLElement) {
  cancelActiveHighlight?.();
  let frame = 0;
  let animation: Animation | undefined;
  const cancel = () => {
    cancelAnimationFrame(frame);
    animation?.cancel();
    if (cancelActiveHighlight === cancel) cancelActiveHighlight = undefined;
  };
  cancelActiveHighlight = cancel;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  card.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "center" });
  let lastTop = card.getBoundingClientRect().top;
  let stableSince = performance.now();
  const started = stableSince;

  const waitForScroll = (now: number) => {
    if (!card.isConnected) return cancel();
    const top = card.getBoundingClientRect().top;
    if (Math.abs(top - lastTop) > 0.5) stableSince = now;
    lastTop = top;
    if (now - stableSince < 140 && now - started < 3000) {
      frame = requestAnimationFrame(waitForScroll);
      return;
    }

    const original = getComputedStyle(card);
    const shadow = original.boxShadow === "none" ? "" : `${original.boxShadow}, `;
    const glow = `${shadow}0 0 0 4px rgba(45, 76, 200, 0.85), 0 14px 30px rgba(45, 76, 200, 0.28)`;
    const base = original.transform === "none" ? "" : original.transform;
    const keyframes: Keyframe[] = reducedMotion
      ? [{ boxShadow: glow }, { boxShadow: glow }]
      : [
          { transform: `${base} translateY(0)`, boxShadow: original.boxShadow, offset: 0 },
          { transform: `${base} translateY(-8px)`, boxShadow: glow, offset: 0.25 },
          { transform: `${base} translateY(-8px)`, boxShadow: glow, offset: 0.65 },
          { transform: `${base} translateY(0)`, boxShadow: original.boxShadow, offset: 1 },
        ];
    animation = card.animate(keyframes, { duration: 1800, easing: "ease-in-out" });
    animation.onfinish = cancel;
  };
  frame = requestAnimationFrame(waitForScroll);
  return cancel;
}

export default function FooterAboutLink({ link }: { link: SimpleLink }) {
  const pathname = usePathname();
  const cleanup = useRef<(() => void) | undefined>(undefined);

  // Handles arriving from another page, as well as browser hash navigation.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const tryDestination = () => {
      clearTimeout(timer);
      const destination = new URL(link.href, window.location.href);
      const id = cardIdForLink(link);
      if (!id || destination.origin !== window.location.origin ||
          window.location.hash !== `#${id}`) return;
      const deadline = performance.now() + 3000;
      const findWhenMounted = () => {
        if (window.location.hash !== `#${id}`) return;
        const card = findCard(id);
        if (card) {
          cleanup.current = highlightCard(card);
        } else if (performance.now() < deadline) {
          timer = setTimeout(findWhenMounted, 100);
        }
      };
      findWhenMounted();
    };
    tryDestination();
    window.addEventListener("hashchange", tryDestination);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", tryDestination);
      cleanup.current?.();
    };
  }, [pathname, link.href, link.label]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
        event.ctrlKey || event.shiftKey || event.altKey) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin) return;
    const selectedId = cardIdForLink(link);
    const targetId = selectedId ?? decodeURIComponent(destination.hash.slice(1));
    const card = selectedId ? findCard(selectedId) : null;
    if (!card && !samePage(destination.pathname, pathname)) return;
    const target = card ?? document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    const hash = selectedId ? `#${selectedId}` : destination.hash;
    if (window.location.hash !== hash) {
      // Retain the current route, including its correct casing and query string.
      window.history.pushState(window.history.state, "", `${window.location.pathname}${window.location.search}${hash}`);
    }
    if (card) {
      cleanup.current = highlightCard(card);
    } else {
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "center",
      });
    }
  };

  // Give each card its own hash when navigating from another page.
  const selectedId = cardIdForLink(link);
  const href = selectedId ? `${link.href.split("#")[0]}#${selectedId}` : link.href;

  return (
    <Link href={href} className={styles["nlxp-footer-link"]} onClick={handleClick}>
      {link.label}
    </Link>
  );
}
