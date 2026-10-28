
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "@/components/Footer/footer.module.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [arrowAnimationData, setArrowAnimationData] =
    useState<object | null>(null);

  useEffect(() => {
    fetch("/animations/arrow-down-purple.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load arrow animation");
        }

        return response.json();
      })
      .then((data) => setArrowAnimationData(data))
      .catch(() => setArrowAnimationData(null));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`${styles["scroll-top-button"]}${
        isVisible
          ? ` ${styles["scroll-top-button-visible"]}`
          : ""
      }`}
      onClick={handleClick}
      aria-label="Scroll to top"
      tabIndex={isVisible ? 0 : -1}
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
        translate: "none",
        zIndex: 10000,
      }}
    >
      <span
        className={styles["scroll-top-button-inner"]}
        aria-hidden="true"
      >
        {arrowAnimationData && (
          <Lottie
            animationData={arrowAnimationData}
            loop
            autoplay
            className={styles["scroll-top-button-icon"]}
          />
        )}
      </span>
    </button>
  );
}
