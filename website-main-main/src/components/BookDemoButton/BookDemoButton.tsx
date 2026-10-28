"use client";

import { useEffect, useState } from "react";
import BookDemoModal from "@/components/Bookademo/BookDemoModal";
import styles from "./BookDemoButton.module.css";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3"
        y="4.5"
        width="14"
        height="12.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M6.5 3V6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M13.5 3V6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M3 8.5H17"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M7.5 12.5L9.1 14L13 10.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BookDemoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [footerOffset, setFooterOffset] = useState(0);

  useEffect(() => {
    const updateButtonPosition = () => {
      const footer = document.querySelector("footer");

      if (!footer) {
        setFooterOffset(0);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * When the footer enters the viewport,
       * push the floating button upward.
       */
      if (footerRect.top < viewportHeight) {
        const overlap = viewportHeight - footerRect.top;

        setFooterOffset(overlap);
      } else {
        setFooterOffset(0);
      }
    };

    updateButtonPosition();

    window.addEventListener("scroll", updateButtonPosition, {
      passive: true,
    });

    window.addEventListener("resize", updateButtonPosition);

    return () => {
      window.removeEventListener("scroll", updateButtonPosition);
      window.removeEventListener("resize", updateButtonPosition);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className={styles["book-demo-fab"]}
        style={{
          transform: `translateY(-${footerOffset}px)`,
        }}
        onClick={() => setIsOpen(true)}
        aria-label="Book a Demo"
      >
        <span
          className={styles["book-demo-fab-icon-ring"]}
          aria-hidden="true"
        >
          <span className={styles["book-demo-fab-icon-circle"]}>
            <CalendarIcon className={styles["book-demo-fab-icon"]} />
          </span>
        </span>
      </button>

      {isOpen && (
        <BookDemoModal
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}