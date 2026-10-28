
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
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  const openExpert = useCallback(() => setIsOpen(true), []);
  const closeExpert = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const syncSlot = () => {
      const nextSlot = document.querySelector<HTMLElement>(
        "[data-expert-button-slot]"
      );

      setSlot((currentSlot) =>
        currentSlot === nextSlot ? currentSlot : nextSlot
      );
    };

    syncSlot();

    const observer = new MutationObserver(syncSlot);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [pathname]);

  /*
   * Hide the global Talk to Our Expert button on:
   * - University
   * - BFSI
   * - Learning Community
   * - Assessments
   * - Mobile Learning
   * - Interconnectivity
   * - Customer Training
   * - Blogs
   *
   * The button remains available on all other pages.
   */
  const hideExpertButton =
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
    pathname.startsWith("/customer-training/") ||
    pathname === "/blogs" ||
    pathname.startsWith("/blogs/");

  if (hideExpertButton) {
    return null;
  }

  const launcherButton = (
    <button
      type="button"
      className={`${styles["talk-to-expert-fab"]} ${
        slot ? styles["talk-to-expert-fab-slotted"] : ""
      }`}
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
    </button>
  );

  return (
    <>
      {slot ? createPortal(launcherButton, slot) : launcherButton}

      <TalkToOurExpert
        isOpen={isOpen}
        onClose={closeExpert}
      />
    </>
  );
}

/** Retain this export so existing page imports continue to work. */
export default function TalkToExpertButton() {
  const hasGlobalExpert = useContext(GlobalExpertContext);

  return hasGlobalExpert ? null : <ExpertLauncher />;
}
