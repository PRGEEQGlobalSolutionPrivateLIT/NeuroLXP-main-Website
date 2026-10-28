"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import BookDemoModal from "@/components/Bookademo/BookDemoModal";

export default function BookDemoTrigger({ className, children }: { className?: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        {children}
      </button>
      {isOpen && <BookDemoModal onClose={() => setIsOpen(false)} />}
    </>
  );
}