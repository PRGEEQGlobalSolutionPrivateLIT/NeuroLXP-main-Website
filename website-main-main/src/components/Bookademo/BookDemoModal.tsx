"use client";

import { useEffect, useRef } from "react";
import BookADemo from "@/components/Bookademo/Bookademo";
import { CloseIcon } from "@/components/icons/Icons";
import styles from "./Bookademo.module.css";

export default function BookDemoModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dialogRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  return (
    <div
      className={styles["book-demo-modal-overlay"]}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}>
      <div className={styles["book-demo-modal-dialog"]} role="dialog" aria-modal="true" aria-label="Book a demo" ref={dialogRef} tabIndex={-1}>
        <button type="button" className={styles["book-demo-modal-close"]} onClick={onClose} aria-label="Close book a demo form">
          <CloseIcon className={styles["book-demo-modal-close-icon"]} />
        </button>
        <div className={styles["book-demo-modal-scroll"]}>
          <BookADemo />
        </div>
      </div>
    </div>
  );
}