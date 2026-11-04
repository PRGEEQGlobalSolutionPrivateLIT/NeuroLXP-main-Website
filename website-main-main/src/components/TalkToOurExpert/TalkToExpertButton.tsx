
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import TalkToOurExpert from "@/components/TalkToOurExpert/TalkToOurExpert";
import { HeadphonesIcon } from "@/components/icons/Icons";
import styles from "./TalkToOurExpert.module.css";

const GlobalExpertContext = createContext(false);

/** Installed once in the root layout; older page instances become redundant. */
export function GlobalExpertProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <GlobalExpertContext.Provider value={true}>
      {children}
      <ExpertLauncher />
    </GlobalExpertContext.Provider>
  );
}

function ExpertLauncher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [pageAnchor, setPageAnchor] = useState<HTMLElement | null>(null);

  const openExpert = useCallback(() => setIsOpen(true), []);
  const closeExpert = useCallback(() => setIsOpen(false), []);

  /* Hide the expert button on the root Home Page and existing excluded pages. */
  const hideExpertButton =
    pathname === "/" ||
    pathname === "/HomePage" ||
    pathname.startsWith("/HomePage/") ||
    pathname === "/content_managment" ||
    pathname.startsWith("/content_managment") ||
    pathname === "/careerpathways-skilling" ||
    pathname.startsWith("/careerpathways-skilling") ||
    pathname === "/employee-induction" ||
    pathname.startsWith("/employee-induction") ||
    pathname === "/standards-training" ||
    pathname.startsWith("/standards-training") ||
    pathname === "/blended-learning" ||
    pathname.startsWith("/blended-learning") ||
    pathname === "/media-presence" ||
    pathname.startsWith("/media-presence") ||
    pathname === "/university" ||
    pathname.startsWith("/university/") ||
    pathname === "/bfsi" ||
    pathname.startsWith("/bfsi/") ||
    pathname === "/learning_community" ||
    pathname.startsWith("/learning_community/") ||
    pathname === "/assessments" ||
    pathname.startsWith("/assessments/") ||
    pathname === "/mobile-learning" ||
    pathname.startsWith("/mobile-learning/") ||
    pathname === "/interconnectivity" ||
    pathname.startsWith("/interconnectivity/") ||
    pathname === "/customer-training" ||
    pathname.startsWith("/customer-training/");

  /* Insert only a button mount point immediately BEFORE the page footer.
     This keeps the button in the document, centered above the footer,
     instead of fixed to the viewport or attached to a page-specific slot. */
  useEffect(() => {
    if (hideExpertButton) {
      setPageAnchor(null);
      return;
    }

    const anchor = document.createElement("div");
    anchor.className = styles["talk-to-expert-page-anchor"];

    const placeAnchor = () => {
      const footers = document.querySelectorAll<HTMLElement>("footer");
      const footer = footers[footers.length - 1];
      if (!footer?.parentNode) return false;
      footer.parentNode.insertBefore(anchor, footer);
      setPageAnchor(anchor);
      return true;
    };

    if (!placeAnchor()) {
      const observer = new MutationObserver(() => {
        if (placeAnchor()) observer.disconnect();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
        anchor.remove();
        setPageAnchor(null);
      };
    }

    return () => {
      anchor.remove();
      setPageAnchor(null);
    };
  }, [pathname, hideExpertButton]);

  if (hideExpertButton) {
    return null;
  }

  const launcherButton = (
    <button
      type="button"
      className={styles["talk-to-expert-fab"]}
      onClick={openExpert}
      aria-label="Talk to our Expert"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      title="Talk to our Expert"
    >
      <span
        className={styles["talk-to-expert-fab-icon-ring"]}
        aria-hidden="true"
      >
        <span className={styles["talk-to-expert-fab-icon-circle"]}>
          <HeadphonesIcon
            className={styles["talk-to-expert-fab-icon"]}
          />
        </span>
      </span>

      <span className={styles["talk-to-expert-fab-label"]}>
        Talk to Our Expert
      </span>
    </button>
  );

  return (
    <>
      {pageAnchor ? (
        createPortal(launcherButton, pageAnchor)
      ) : (
        <div className={styles["talk-to-expert-page-anchor"]}>
          {launcherButton}
        </div>
      )}

      <TalkToOurExpert isOpen={isOpen} onClose={closeExpert} />
    </>
  );
}

/** Retain this export so existing page imports continue to work. */
export default function TalkToExpertButton() {
  const hasGlobalExpert = useContext(GlobalExpertContext);

  return hasGlobalExpert ? null : <ExpertLauncher />;
}
