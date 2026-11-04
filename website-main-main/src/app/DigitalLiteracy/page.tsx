"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./DigitalLiteracy.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import BookDemoModal from "@/components/Bookademo/BookDemoModal";
import TalkToExpertButton from "@/components/TalkToOurExpert/TalkToExpertButton";
function TopographicPattern({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 574 703" fill="none" aria-hidden="true" focusable="false">
      <path d="M338.961 315.628C305.711 334.658 287.785 400.165 301.138 433.653C315.892 470.635 408.145 465.018 418.731 456C429.317 446.982 342.776 418.127 354.585 384.099C367.7 346.329 433.556 346.278 431.763 330.15C430.001 314.282 377.395 293.635 338.961 315.628Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M328.551 310.975C289.579 327.558 272.669 406.85 289.848 444.205C309.319 486.515 409.546 470.832 424.423 464.137C437.248 458.374 353.994 419.568 363.948 378.451C374.751 333.778 434.148 326.523 429.711 316.158C424.941 305.047 374.284 291.561 328.551 310.975Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M318.142 306.331C273.508 320.417 257.583 413.525 278.557 454.746C302.787 502.424 410.146 476.512 430.114 472.283C444.63 469.173 365.284 421.06 373.298 372.779C381.852 321.287 436.076 306.185 427.657 302.237C421.375 295.24 371.339 289.53 318.142 306.331Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M307.733 301.645C257.469 313.337 242.529 420.157 267.298 465.265C296.328 518.209 412.169 489.675 435.838 480.398C450.664 474.583 376.648 422.531 382.682 367.12C389.037 308.807 437.362 286.13 425.636 288.274C417.061 285.714 368.384 287.559 307.733 301.645Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M297.323 297.023C241.451 306.352 227.496 426.833 255.977 475.848C289.817 534.099 411.495 495.936 441.499 488.567C458.336 484.42 387.98 424.076 392.013 361.504C396.161 296.37 439.705 268.728 423.551 274.356C413.205 277.952 365.451 285.643 297.323 297.023Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M286.925 292.37C225.433 299.386 212.474 433.488 244.686 486.39C283.368 549.937 411.008 491.095 447.202 496.755C465.957 499.668 399.386 425.631 401.376 355.886C403.449 283.954 441.293 248.184 421.5 260.457C409.183 268.044 362.527 283.757 286.925 292.37Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M276.515 287.727C209.415 292.432 197.461 440.09 233.385 496.941C276.93 565.765 411.452 495.366 452.883 504.85C473.152 509.493 410.779 427.114 410.716 350.195C410.654 271.423 442.545 227.683 419.436 246.464C404.942 258.249 359.603 281.891 276.515 287.727Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M266.105 283.073C193.394 285.498 182.478 446.755 222.093 507.493C270.47 581.592 412.011 499.481 458.573 512.997C480.408 519.329 422.203 428.607 420.077 344.546C417.911 258.974 443.717 207.348 417.382 232.523C400.627 248.527 356.658 280.057 266.105 283.073Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M255.695 278.42C177.376 278.575 167.444 453.389 210.802 518.045C264.03 597.419 412.664 503.534 464.265 521.154C487.716 529.166 433.638 430.131 429.429 338.909C425.168 246.517 444.867 187.106 415.329 218.583C396.272 238.867 353.743 278.234 255.695 278.42Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M245.286 273.775C161.306 271.703 152.442 460.012 199.512 528.585C257.572 613.226 413.401 507.472 469.957 529.281C495.068 538.961 445.074 431.622 438.781 333.25C432.436 234.037 446.038 166.883 413.266 204.621C391.908 229.239 350.81 276.43 245.286 273.775Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M234.878 269.121C145.321 264.758 137.421 466.634 188.223 539.137C251.176 629.042 414.242 511.4 475.651 537.427C502.451 548.765 456.533 433.125 448.145 327.6C439.715 221.557 447.17 146.712 411.215 190.679C387.535 219.63 347.867 274.635 234.878 269.121Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M224.467 264.467C129.289 257.855 122.457 473.256 176.93 549.688C244.757 644.847 415.038 515.297 481.34 545.541C509.842 558.559 467.976 434.637 457.495 321.919C446.992 209.056 448.319 126.531 409.159 176.707C383.167 210.03 344.92 272.841 224.467 264.467Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M214.059 259.824C113.253 250.963 107.467 479.923 165.642 560.23C238.34 660.654 415.922 519.185 487.045 553.711C517.277 568.387 479.445 436.12 466.859 316.292C454.272 196.464 449.471 106.414 407.109 162.757C378.795 200.444 341.978 271.071 214.059 259.824Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M203.65 255.171C97.2135 244.07 92.4754 486.493 154.34 570.781C231.923 676.503 416.843 523.103 492.726 561.857C524.711 578.202 490.901 437.613 476.21 310.643C461.561 184.119 450.633 86.2958 405.045 148.838C374.419 190.867 339.033 269.287 203.65 255.171Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M193.239 250.516C81.1737 237.176 77.6486 492.992 143.081 581.331C225.743 692.11 417.828 526.915 498.449 569.993C532.186 588.017 502.398 439.104 485.592 304.993C468.879 171.639 451.825 66.1659 403.023 134.886C370.043 181.288 336.067 267.524 193.239 250.516Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M182.831 245.872C65.1344 230.294 62.6461 499.615 131.758 591.863C219.273 707.949 418.751 530.71 504.109 578.119C539.619 597.812 513.834 440.577 494.913 299.304C476.147 159.108 452.955 46.017 400.938 120.893C365.667 171.712 333.113 265.753 182.831 245.872Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M172.42 241.219C49.0429 223.413 47.6328 506.249 120.467 602.425C212.834 723.694 419.724 534.628 509.801 586.276C547.125 607.659 525.55 442.059 504.264 293.686C483.683 146.629 454.115 25.941 398.885 106.994C361.292 162.146 330.146 263.99 172.42 241.219Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M162.013 236.566C33.0055 216.759 32.6219 512.883 109.178 612.977C206.397 739.573 420.722 538.483 515.505 594.423C554.561 617.475 536.966 443.551 513.627 288.037C490.933 134.151 455.277 5.84353 396.824 93.0432C356.918 152.579 327.142 262.52 162.013 236.566Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M151.603 231.922C16.9657 209.824 17.6292 519.505 97.8867 623.528C199.948 755.39 421.726 542.329 521.196 602.57C562.034 627.3 548.39 445.023 522.979 282.388C498.179 121.671 456.449 -14.2645 394.77 79.1023C352.51 143.064 324.185 260.694 151.603 231.922Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M141.193 227.268C0.926574 202.89 2.60616 526.139 86.5961 634.069C193.509 771.175 422.753 546.185 526.887 610.707C569.52 637.126 559.868 446.547 532.331 276.771C505.374 109.223 457.444 -34.445 392.717 65.1822C348.042 133.373 321.231 258.86 141.193 227.268Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M130.785 222.614C-15.1111 195.924 -12.4361 532.782 75.307 644.619C187.073 787.021 423.781 550.04 532.581 618.811C577.018 646.92 571.243 447.997 541.694 271.049C512.674 96.7007 458.7 -54.5123 390.666 51.1989C343.731 123.857 318.298 257.077 130.785 222.614Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
      <path d="M388.602 37.2592C339.417 114.332 315.311 255.201 120.375 217.971C-31.1617 189.022 -27.4189 539.396 64.0047 655.171C180.633 802.85 424.806 553.896 538.272 626.989C630.027 686.111 532.435 -188.146 388.602 37.2592Z" stroke="#2D4CC8" strokeOpacity="0.5" strokeMiterlimit="10" />
    </svg>
  );
}
function StarSolidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 2L14.85 8.36L22 9.27L16.7 14.14L18.18 21L12 17.27L5.82 21L7.3 14.14L2 9.27L9.15 8.36L12 2Z" />
    </svg>
  );
}
function DigitalLiteracyBreadcrumb() {
  return (
    <nav className={styles["dl-breadcrumb"]} aria-label="Breadcrumb">
      <span className={styles["dl-breadcrumb-label"]}>NeuroLXP 2.1</span>
      <span className={styles["dl-breadcrumb-current"]}>
        <Image className={styles["dl-breadcrumb-arrow"]} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" unoptimized />
        Digital Literacy
      </span>
    </nav>
  );
}
function DigitalLiteracyHero({ onBookDemoClick, bookDemoButtonRef }: { onBookDemoClick: () => void; bookDemoButtonRef: React.RefObject<HTMLButtonElement | null> }) {
  return (
    <section className={styles["dl-hero-section"]}>
      <div className={styles["dl-hero-card"]}>
        <div className={styles["dl-hero-content"]}>
          <span className={styles["dl-hero-badge"]}>Digital Literacy</span>
          <h1 className={styles["dl-hero-heading"]}>
            Empower Every Employee with <span className={styles["dl-hero-heading-accent"]}>Digital Skills</span>
          </h1>
          <p className={styles["dl-hero-subtext"]}>
            NeuroLXP delivers engaging digital skills training from basics to advanced workplace tools.
          </p>
          <div className={styles["dl-hero-buttons"]}>
            <button type="button" className={`${styles["dl-hero-button"]} ${styles["dl-hero-button-secondary"]}`} onClick={onBookDemoClick} ref={bookDemoButtonRef}>
              Book a Demo
            </button>
            {/* <button type="button" className={`${styles["dl-hero-button"]} ${styles["dl-hero-button-primary"]}`} onClick={() => { window.location.href = "/HomePage"; }}>
              Start Learning
            </button> */}
          </div>
        </div>
        <div className={styles["dl-hero-media"]}>
          <TopographicPattern className={styles["dl-hero-pattern"]} />
          <div className={styles["dl-hero-image-frame"]}>
            <Image
              src="/images/horizontal-shot-joyful-young-woman-with-glasses-posing-against-white-wall.png"
              alt="Employee learning digital skills"
              fill
              priority
              sizes="(max-width: 767px) 90vw, (max-width: 1023px) 400px, 460px"
              className={styles["dl-hero-image"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["dl-hero-stats"]}>
        <div className={styles["dl-hero-stats-bg"]} aria-hidden="true">
          <span className={styles["dl-hero-stats-bg-pink"]} />
          <span className={styles["dl-hero-stats-bg-green"]} />
        </div>
        <div className={`${styles["dl-hero-stat"]} ${styles["dl-hero-stat-pink"]}`}>
          <span className={styles["dl-hero-stat-value"]}>87%</span>
          <span className={styles["dl-hero-stat-label"]}>Skill Adoption</span>
        </div>
        <div className={`${styles["dl-hero-stat"]} ${styles["dl-hero-stat-neutral"]}`}>
          <span className={styles["dl-hero-stat-value"]}>3x</span>
          <span className={styles["dl-hero-stat-label"]}>Faster Upskilling</span>
        </div>
        <div className={`${styles["dl-hero-stat"]} ${styles["dl-hero-stat-green"]}`}>
          <span className={styles["dl-hero-stat-value"]}>
            4.7 <StarSolidIcon className={styles["dl-hero-stat-star"]} />
          </span>
          <span className={styles["dl-hero-stat-label"]}>Learner Score</span>
        </div>
      </div>
    </section>
  );
}
function DigitalLiteracySkillBanner() {
  return (
    <section className={styles["dl-skill-banner-section"]}>
      <div className={styles["dl-skill-banner"]} style={{ containerType: "inline-size" }}>
        <p className={styles["dl-skill-banner-sr-text"]}>
          <span>
            Because Every Skill Learned{" "}
            <em className={styles["dl-skill-banner-accent"]}>Today</em>
          </span>{" "}
          <span>
            Shapes the World of{" "}
            <em className={styles["dl-skill-banner-accent"]}>Tomorrow</em>
          </span>
        </p>
        <svg className={styles["dl-skill-banner-svg"]} style={{ pointerEvents: "none" }} focusable="false" viewBox="0 0 1280 360" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <g filter="url(#filter0_ii_903_9541)">
            <path d="M637.772 0.313325C639.25 0.105465 640.75 0.105464 642.228 0.313323L1266.23 88.0633C1274.13 89.174 1280 95.9317 1280 103.907V256.093C1280 264.068 1274.13 270.826 1266.23 271.937L642.228 359.687C640.75 359.895 639.25 359.895 637.772 359.687L13.7719 271.937C5.8739 270.826 0 264.068 0 256.093V103.907C0 95.9317 5.87393 89.174 13.7719 88.0633L637.772 0.313325Z" fill="#DFE6E9" />
            <path d="M637.772 0.313325C639.25 0.105465 640.75 0.105464 642.228 0.313323L1266.23 88.0633C1274.13 89.174 1280 95.9317 1280 103.907V256.093C1280 264.068 1274.13 270.826 1266.23 271.937L642.228 359.687C640.75 359.895 639.25 359.895 637.772 359.687L13.7719 271.937C5.8739 270.826 0 264.068 0 256.093V103.907C0 95.9317 5.87393 89.174 13.7719 88.0633L637.772 0.313325Z" fill="url(#pattern0_903_9541)" fillOpacity="0.5" />
          </g>
          <defs>
            <filter id="filter0_ii_903_9541" x="-4" y="-4" width="1288" height="368" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-4" dy="-4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_903_9541" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_903_9541" result="effect2_innerShadow_903_9541" />
            </filter>
            <pattern id="pattern0_903_9541" patternUnits="userSpaceOnUse" width="1280" height="360">
              <image
                href="/images/polygon 18.webp"
                x="0"
                y="0"
                width="1280"
                height="360"
                preserveAspectRatio="none"
              />
            </pattern>
          </defs>
        </svg>
      </div>
      {/* Real HTML text replaces the non-selectable SVG letter outlines. */}
      <style jsx>{`
        p {
          position: absolute;
          inset: 0;
          z-index: 1;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0 8%;
          overflow: visible;
          clip: auto;
          clip-path: none;
          white-space: normal;
          font-family: "Segoe UI", "Inter", sans-serif;
          font-size: clamp(18px, 4.6875cqw, 60px);
          font-weight: 700;
          line-height: 1.333333;
          color: #31344b;
          text-align: center;
          cursor: text;
          pointer-events: auto;
        }
        p, p span, p em {
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          user-select: text !important;
          -webkit-touch-callout: default;
          text-shadow: none !important;
        }
        p > span {
          display: block;
        }
        p em {
          color: #2d4cc8;
          font-style: normal;
        }
        @media (max-width: 767px) {
          p {
            font-size: clamp(18px, 3.8vw, 24px);
            line-height: 1.4;
          }
        }
      `}</style>
    </section>
  );
}
function AdvantageCard({
  number,
  color,
  title,
  description,
  mirrored,
}: {
  number: string;
  color: string;
  title: string;
  description?: string;
  mirrored?: boolean;
}) {
  return (
    <div
      className={`${styles["dl-adv-card"]}${mirrored ? ` ${styles["dl-adv-card-mirrored"]}` : ""}`}
      style={{ "--adv-color": `${color}33` } as React.CSSProperties}
    >
      <span
        className={styles["dl-adv-card-shadow"]}
        style={{ background: color }}
      />

      <div className={styles["dl-adv-card-front"]}>
        <span
          className={styles["dl-adv-card-badge"]}
          style={{ background: `${color}80` }}
        >
          {number}
        </span>

        <h3 className={styles["dl-adv-card-title"]}>{title}</h3>

        {description && (
          <p className={styles["dl-adv-card-desc"]}>{description}</p>
        )}
      </div>
    </div>
  );
}
function DigitalLiteracyAdvantage() {
  return (
    <section className={styles["dl-advantage-section"]}>
      <svg className={styles["dl-advantage-wedge"]} viewBox="0 0 897 862" fill="none" aria-hidden="true">
        <g filter="url(#filter0_ii_903_9069)">
          <path d="M896.364 549.026L-165.898 861.837L-65.3121 -0.000246233L896.364 549.026Z" fill="#DFE6E9" />
        </g>
        <defs>
          <filter id="filter0_ii_903_9069" x="-173.898" y="-8" width="1078.26" height="877.837" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="8" dy="8" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0.8 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_903_9069" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-8" dy="-8" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="effect1_innerShadow_903_9069" result="effect2_innerShadow_903_9069" />
          </filter>
        </defs>
      </svg>
      <div className={styles["dl-advantage-text"]}>
        
<span className={styles["dl-hero-badge"]}>
  The{" "}
  <span style={{ whiteSpace: "nowrap" }}>
    NeuroLXP
    <sup className={styles["nlxp-footer-heading-tm"]}>TM</sup>
  </span>
  {"\u00A0"}Advantage
</span>  
 
 <h2 className={styles["dl-section-heading"]}>Equip Every Workforce for a Digital Future</h2>
        <p className={styles["dl-hero-subtext"]}>From foundational skills to advanced expertise skills in one platform.</p>
      </div>
     <div className={styles["dl-advantage-grid"]}>
  <AdvantageCard number="01" color="#BF1869" title="Digital Skill Training" />
  <AdvantageCard number="02" color="#0B9BA0" title="Personalized Learning" />
  <AdvantageCard number="03" color="#67096E" title="Progress Tracking" />
  <AdvantageCard number="04" color="#BCCF10" title="Mobile First Access" />
</div>
    </section>
  );
}
function PillLabel({ text, color }: { text: string; color: string }) {
  return (
    <span className={styles["dl-pill-label"]} style={{ "--pill-color": color } as React.CSSProperties}>
      <span className={styles["dl-pill-label-text"]}>{text}</span>
    </span>
  );
}
function DigitalLiteracyTransformIcons() {
  return (
    <div className={styles["dl-transform-icons"]}>
      <h2 className={styles["dl-transform-heading"]}>Future-Ready-Learning</h2>
      <PillLabel text="Transform" color="#0B9BA0" />
      <div className={styles["dl-transform-row"]}>
        <PillLabel text="Upskill" color="#67096E" />
        <PillLabel text="Adapt" color="#907507" />
      </div>
    </div>
  );
}
function CheckPill({ text, color }: { text: string; color: string }) {
  return (
    <div
      className={styles["dl-check-pill-outer"]}
      style={
        {
          "--pill-color": color,
          "--pill-glow": `${color}66`,
          "--pill-bg": `${color}4D`,
          "--pill-bg-hover": `${color}8C`,
        } as React.CSSProperties
      }>
      <div className={styles["dl-check-pill"]}>
        <span className={styles["dl-check-pill-icon"]}>
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
            <path className={styles["dl-check-icon-check"]} d="M3 8l3.5 3.5L13 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className={styles["dl-check-icon-arrow"]} d="M3 8h9M8.5 4.5L13 8l-4.5 3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className={styles["dl-check-pill-text"]}>{text}</span>
      </div>
    </div>
  );
}
function DigitalLiteracyAccelerate() {
  return (
    <section className={styles["dl-accelerate-section"]}>
      <div className={styles["dl-accelerate"]}>
        <div className={styles["dl-accelerate-media"]}>
          <div className={styles["dl-accelerate-image-frame"]}>




<div className={styles["dl-accelerate-video-frame"]}>
  <iframe
    className={styles["dl-accelerate-image"]}
    src="https://www.youtube.com/embed/kqUto9tIsws?autoplay=1&mute=1&loop=1&playlist=kqUto9tIsws&playsinline=1&controls=0&rel=0"
    title="Accelerate Digital Learning"
    allow="autoplay; encrypted-media; picture-in-picture"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>



          </div>
        </div>
        <div className={styles["dl-accelerate-content"]}>
          <span className={styles["dl-hero-badge"]}>Build Future Ready Skills</span>
          <h2 className={`${styles["dl-section-heading"]} ${styles["dl-accelerate-heading"]}`}>Accelerate Digital Transformation</h2>
          <p className={styles["dl-hero-subtext"]}>Smart skill mapping identifies gaps before they slow you down and fills them fast.</p>
          <div className={styles["dl-check-list"]}>
            <CheckPill text="Role-Based Skill Gap Analysis Framework" color="#67096E" />
            <CheckPill text="Automated Learning Assignments" color="#0B9BA0" />
            <CheckPill text="Compliance, Certification Tracking" color="#09248F" />
          </div>
        </div>
      </div>
    </section>
  );
}
function AnalyticsCard({ value, label, description, color, textColor = color, icon, singleLine = false }: { value: string; label: string; description: string; color: string; textColor?: string; icon: React.ReactNode; singleLine?: boolean }) {
  return (
    <div className={styles["dl-analytics-card"]} style={{ "--analytics-color": color } as React.CSSProperties}>
      <svg className={styles["dl-analytics-card-border"]} aria-hidden="true">
        <rect x="0" y="0" width="100%" height="100%" ry="50%" />
      </svg>
      <span className={styles["dl-analytics-card-icon"]} aria-hidden="true">
        {icon}
      </span>
      <div className={styles["dl-analytics-card-text"]}>
        <span className={styles["dl-analytics-card-value"]} style={{ color: textColor }}>
          {value}
        </span>
        <span className={styles["dl-analytics-card-label"]}>{label}</span>
        <span className={`${styles["dl-analytics-card-desc"]}${singleLine ? ` ${styles["dl-single-line"]}` : ""}`}>{description}</span>
      </div>
    </div>
  );
}
function DigitalLiteracyAnalytics() {
  return (
    <section className={styles["dl-analytics-section"]}>
      <div className={styles["dl-analytics-header"]}>
        <span className={styles["dl-hero-badge"]}>Real-Time Analytics</span>
        <h2 className={`${styles["dl-section-heading"]} ${styles["dl-center"]}`}>Track Every Learner Improve Every Outcome</h2>
        <p className={`${styles["dl-hero-subtext"]} ${styles["dl-center"]} ${styles["dl-insights-summary"]}`}>
          <span>Turn learning data into actionable insights with live dashboards,</span>{" "}
          <span>competency tracking, and compliance reporting.</span>
        </p>
      </div>
      <div className={styles["dl-analytics-grid"]}>
        <AnalyticsCard
          value="Live"
          label="Dashboard"
          description="Monitor learner progress instantly"
          color="#BF1869"
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M7.5 27.5L13.75 21.25C16.2927 18.7073 17.5639 17.436 19.0931 17.154C19.6926 17.0434 20.3074 17.0434 20.9069 17.154C22.4361 17.436 23.7074 18.7074 26.25 21.25C28.7927 23.7926 30.064 25.064 31.593 25.346C32.1928 25.4565 32.8072 25.4565 33.407 25.346C34.936 25.064 36.2073 23.7926 38.75 21.25L52.5 7.5" stroke="#BF1869" strokeWidth="2.81" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 37.5V52.5M22.5 32.5V52.5M37.5 40V52.5M52.5 22.5V52.5" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
        <AnalyticsCard
          value="99%"
          label="Learner Insights"
          description="View skills in one place."
          singleLine
          color="#2A7308"
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M30 20C41.0457 20 50 16.6421 50 12.5C50 8.35786 41.0457 5 30 5C18.9543 5 10 8.35786 10 12.5C10 16.6421 18.9543 20 30 20Z" stroke="#2A7308" strokeWidth="2" />
              <path d="M17.5 27.1055C19.004 27.5577 20.6858 27.93 22.5 28.2055" stroke="#2A7308" strokeWidth="2" strokeLinecap="round" />
              <path d="M50 30C50 34.1423 41.0458 37.5 30 37.5C18.9543 37.5 10 34.1423 10 30" stroke="#2A7308" strokeWidth="2" />
              <path d="M17.5 44.6055C19.004 45.0577 20.6858 45.43 22.5 45.7055" stroke="#2A7308" strokeWidth="2" strokeLinecap="round" />
              <path d="M50 12.5V47.5C50 51.6423 41.0458 55 30 55C18.9543 55 10 51.6423 10 47.5V12.5" stroke="#2A7308" strokeWidth="2" />
            </svg>
          }
        />
        <AnalyticsCard
          value="Auto"
          label="Compliance"
          description="Generate audit-ready reports"
          color="#67096E"
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M43.645 22.7004L42.9173 21.4155C42.367 20.4437 42.0918 19.9579 41.6235 19.7641C41.1555 19.5704 40.6258 19.7232 39.5668 20.029L37.7678 20.5446C37.0915 20.7032 36.3823 20.6132 35.7648 20.2905L35.268 19.9989C34.7388 19.6539 34.3315 19.1453 34.106 18.5474L33.6138 17.0513C33.29 16.0613 33.128 15.5663 32.7428 15.2831C32.3575 15 31.8455 15 30.8218 15H29.1783C28.1545 15 27.6425 15 27.2573 15.2831C26.872 15.5663 26.71 16.0613 26.3863 17.0513L25.894 18.5474C25.6685 19.1453 25.2613 19.6539 24.7319 19.9989L24.2352 20.2905C23.6178 20.6132 22.9085 20.7032 22.2323 20.5446L20.4332 20.029C19.3742 19.7232 18.8446 19.5704 18.3764 19.7641C17.9082 19.9579 17.633 20.4437 17.0826 21.4155L16.3549 22.7004C15.839 23.6112 15.5811 24.0667 15.6311 24.5515C15.6812 25.0363 16.0265 25.427 16.7172 26.2085L18.2373 27.9375C18.6088 28.416 18.8726 29.25 18.8726 29.9997C18.8726 30.75 18.6089 31.5837 18.2373 32.0622L16.7172 33.7915C16.0265 34.5727 15.6812 34.9635 15.6311 35.4483C15.5811 35.9333 15.839 36.3887 16.3549 37.2995L17.0826 38.5842C17.633 39.556 17.9082 40.042 18.3764 40.2357C18.8446 40.4295 19.3742 40.2765 20.4333 39.9708L22.2322 39.4552C22.9085 39.2965 23.618 39.3867 24.2355 39.7095L24.7321 40.001C25.2615 40.346 25.6685 40.8547 25.894 41.4525L26.3863 42.9488C26.71 43.9388 26.872 44.4337 27.2573 44.7167C27.6425 45 28.1545 45 29.1783 45H30.8218C31.8455 45 32.3575 45 32.7428 44.7167C33.128 44.4337 33.29 43.9388 33.6138 42.9488L34.106 41.4525C34.3315 40.8547 34.7385 40.346 35.268 40.001L35.7645 39.7095C36.382 39.3867 37.0915 39.2965 37.7678 39.4552L39.5668 39.9708C40.6258 40.2765 41.1553 40.4295 41.6235 40.2357C42.0918 40.042 42.367 39.556 42.9175 38.5845L43.645 37.2995C44.161 36.3887 44.419 35.9333 44.3688 35.4483C44.3188 34.9635 43.9735 34.5727 43.2828 33.7915L41.7628 32.0622C41.391 31.5837 41.1275 30.75 41.1275 29.9997C41.1275 29.25 41.3913 28.416 41.7628 27.9375L43.2828 26.2085C43.9735 25.427 44.3188 25.0363 44.3688 24.5515C44.419 24.0667 44.161 23.6112 43.645 22.7004Z" stroke="#67096E" strokeWidth="2" strokeLinecap="round" />
              <path d="M30 34.375C32.4162 34.375 34.375 32.4162 34.375 30C34.375 27.5838 32.4162 25.625 30 25.625C27.5838 25.625 25.625 27.5838 25.625 30C25.625 32.4162 27.5838 34.375 30 34.375Z" stroke="#67096E" strokeWidth="2" />
              <path d="M47.5 5V12.1464C42.9905 7.7258 36.8137 5 30 5C16.1929 5 5 16.1929 5 30C5 33.5555 5.74222 36.9377 7.08022 40M12.5 55V47.8535C17.0094 52.2742 23.1864 55 30 55C43.807 55 55 43.807 55 30C55 26.4445 54.2577 23.0623 52.9197 20" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
        <AnalyticsCard
          value="Role-Based"
          label="Analytics"
          description="Compare teams and departments"
          color="#0B9BA0"
          textColor="#08888E"
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M38.75 27.5C38.75 22.6675 34.8325 18.75 30 18.75C25.1675 18.75 21.25 22.6675 21.25 27.5C21.25 32.3325 25.1675 36.25 30 36.25C34.8325 36.25 38.75 32.3325 38.75 27.5Z" stroke="#0B9BA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M38.7065 28.3748C39.5115 28.6188 40.3652 28.75 41.2497 28.75C46.0822 28.75 49.9997 24.8325 49.9997 20C49.9997 15.1675 46.0822 11.25 41.2497 11.25C36.7125 11.25 32.9817 14.7035 32.543 19.1253" stroke="#0B9BA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M27.4568 19.1253C27.018 14.7035 23.2873 11.25 18.75 11.25C13.9175 11.25 10 15.1675 10 20C10 24.8325 13.9175 28.75 18.75 28.75C19.6345 28.75 20.4884 28.6188 21.2932 28.3748" stroke="#0B9BA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M55 41.25C55 34.3465 48.844 28.75 41.25 28.75" stroke="#0B9BA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M43.75 48.75C43.75 41.8465 37.594 36.25 30 36.25C22.4061 36.25 16.25 41.8465 16.25 48.75" stroke="#0B9BA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.75 28.75C11.1561 28.75 5 34.3465 5 41.25" stroke="#0B9BA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
function StepCard({
  number,
  color,
  textColor = color,
  title,
  description,
}: {
  number: string;
  color: string;
  textColor?: string;
  title: string;
  description?: React.ReactNode;
}) {
  return (
    <div
      className={styles["dl-step-card"]}
      style={
        {
          "--step-color": color,
          "--step-glow": `${color}55`,
        } as React.CSSProperties
      }
    >
      <span className={styles["dl-step-card-badge"]}>
        <span style={{ color: textColor }}>{number}</span>
      </span>

      <h3 className={styles["dl-step-card-title"]}>{title}</h3>

      {description && (
        <p className={styles["dl-step-card-desc"]}>{description}</p>
      )}
    </div>
  );
}
function DigitalLiteracyHowItWorks() {
  return (
    <section className={styles["dl-howitworks-section"]}>
      <div className={styles["dl-analytics-header"]}>
        <span className={styles["dl-hero-badge"]}>How it Works</span>
        <h2 className={`${styles["dl-section-heading"]} ${styles["dl-center"]}`}>From Assessment to Mastery in Four Steps</h2>
        <p className={`${styles["dl-hero-subtext"]} ${styles["dl-center"]} ${styles["dl-insights-summary"]}`}>
          <span>Turn learning data into actionable insights with live dashboards,</span>{" "}
          <span>competency tracking, and compliance reporting.</span>
        </p>
      </div>
      <div className={styles["dl-step-grid"]}>
        <StepCard number="01" color="#BF1869" title="Assess"  />
        <StepCard number="02" color="#67096E" title="Assign" />
        <StepCard number="03" color="#0B9BA0" textColor="#08888E" title="Learn"  />
        <StepCard number="04" color="#907507" title="Optimize"  />
      </div>
    </section>
  );
}
function BulletItem({ text, color }: { text: string; color: string }) {
  return (
    <div className={styles["dl-bullet-item"]} style={{ "--bullet-color": color } as React.CSSProperties}>
      <svg className={styles["dl-bullet-arrow"]} width="37" height="31" viewBox="0 0 37 31" fill="none" aria-hidden="true" focusable="false">
        <path d="M19.5 8.41494V9.50294H7.5C5.63624 9.50294 4.70436 9.50294 3.96926 9.80734C2.98916 10.2133 2.21046 10.9921 1.80448 11.9721C1.5 12.7073 1.5 13.6391 1.5 15.5029C1.5 17.3667 1.5 18.2985 1.80448 19.0337C2.21046 20.0138 2.98916 20.7925 3.96926 21.1985C4.70436 21.5029 5.63624 21.5029 7.5 21.5029H19.5V22.591C19.5 26.7565 19.5 28.8392 20.7006 29.3874C21.9012 29.9355 23.3366 28.5081 26.2072 25.6532L33.3344 18.5651C34.7782 17.1293 35.5 16.4113 35.5 15.5029C35.5 14.5945 34.7782 13.8765 33.3344 12.4407L26.2072 5.35274C23.3366 2.49774 21.9012 1.07034 20.7006 1.61854C19.5 2.16674 19.5 4.24934 19.5 8.41494Z" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={styles["dl-bullet-text"]}>
        {text}
        <svg className={styles["dl-bullet-underline"]} aria-hidden="true">
          <line x1="0" y1="1" x2="100%" y2="1" pathLength="1" />
        </svg>
      </span>
    </div>
  );
}
function CalloutCard({ title, description, color, singleLine = false }: { title: string; description: React.ReactNode; color: string; singleLine?: boolean }) {
  return (
    <div
      className={styles["dl-callout-card"]}
      style={
        {
          "--callout-color": color,
          "--callout-glow": `${color}40`,
        } as React.CSSProperties
      }>
      <h4 className={styles["dl-callout-title"]}>{title}</h4>
      <p className={`${styles["dl-callout-desc"]}${singleLine ? ` ${styles["dl-single-line"]}` : ""}`}>{description}</p>
    </div>
  );
}
function DigitalLiteracyWhyNeuroLXP() {
  return (
    <section className={styles["dl-why-section"]}>
      <div className={styles["dl-why-content"]}>
        <span className={styles["dl-hero-badge"]}>
          Why NeuroLXP<sup className={styles["nlxp-footer-heading-tm"]}>TM</sup>
        </span>
        <h2 className={styles["dl-section-heading"]}>The Smarter Way to Build a Digitally-Ready Workforce</h2>
        <p className={styles["dl-hero-subtext"]}>Built around the learner driving engagement, closing gaps, and proving ROI from day one.</p>
        <div className={styles["dl-bullet-list"]}>
          <BulletItem text="Skill Mapping" color="#BF1869" />
          <BulletItem text="Personalized Paths" color="#67096E" />
          <BulletItem text="Competency Tracking" color="#0B9BA0" />
          <BulletItem text="Gap Analysis" color="#907507" />
        </div>
      </div>
      <div className={styles["dl-why-callouts"]}>
        <CalloutCard title="Faster Tool Adoption" description="Get teams productive with new tech in record time" color="#861109" />
        <CalloutCard
          title="Compliance Built-In"
          singleLine
          description={
            <>
              <span className={styles["dl-certification-line"]}>Automatically track</span>{" "}
              <span className={styles["dl-certification-line"]}>every certification.</span>
            </>
          }
          color="#0B9BA0"
        />
      </div>
    </section>
  );
}
function DigitalLiteracyCTA({ onBookDemoClick, bookDemoButtonRef }: { onBookDemoClick: () => void; bookDemoButtonRef: React.RefObject<HTMLButtonElement | null> }) {
  return (
    <section className={styles["dl-cta-section"]}>
      <div className={styles["dl-cta-card"]}>
<h2 className={styles["dl-cta-heading"]}>
  Ready to Build a Digitally-Skilled <span style={{ color: "#2d4cc8" }}>Workforce</span>
</h2>        <p className={styles["dl-cta-subtext"]}>
          Build a future-ready workforce with NeuroLXP
          {/* <sup className={styles["nlxp-footer-heading-tm"]}>TM</sup> */}
          <br />
          Empower every learner with digital skills that drive business success
        </p>
        <div className={styles["dl-hero-buttons"]}>
          {/* <button type="button" className={`${styles["dl-hero-button"]} ${styles["dl-hero-button-primary"]}`} onClick={onBookDemoClick} ref={bookDemoButtonRef}>
            Book a Demo
          </button> */}
          <button type="button" className={`${styles["dl-hero-button"]} ${styles["dl-hero-button-secondary"]}`} onClick={() => { window.location.href = "/HomePage"; }}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
export default function DigitalLiteracyPage() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const bookDemoButtonRef = useRef<HTMLButtonElement>(null);
  const openBookDemo = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsBookDemoOpen(true);
  };
  const closeBookDemo = () => {
    setIsBookDemoOpen(false);
    bookDemoButtonRef.current?.focus();
  };
  return (
    <>
      <Header />
      <main id="main-content" className={styles["digital-literacy"]}>
        <DigitalLiteracyBreadcrumb />
        <DigitalLiteracyHero onBookDemoClick={openBookDemo} bookDemoButtonRef={bookDemoButtonRef} />
        <DigitalLiteracySkillBanner />
        <DigitalLiteracyAdvantage />
        <DigitalLiteracyTransformIcons />
        <DigitalLiteracyAccelerate />
        <DigitalLiteracyAnalytics />
        <DigitalLiteracyHowItWorks />
        <DigitalLiteracyWhyNeuroLXP />
        <DigitalLiteracyCTA onBookDemoClick={openBookDemo} bookDemoButtonRef={bookDemoButtonRef} />
      </main>
      {isBookDemoOpen && <BookDemoModal onClose={closeBookDemo} />}
        <TalkToExpertButton />
      <Footer />
    </>
  );
}
