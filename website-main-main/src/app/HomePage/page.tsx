"use client";

import Image from "next/image";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { createPortal, flushSync } from "react-dom";
import { useEffect, useRef, useState, type JSX, type CSSProperties, type RefObject } from "react";
import dynamic from "next/dynamic";
import { GraduationCapOutlineIcon, LightbulbIcon, CursorClickIcon, TargetIcon, UsersIcon, SmartphoneIcon, GraduationCapIcon, SettingsGearIcon, LibraryIcon, BuildingIcon, ContentWritingIcon, BrainIcon, AnalyticsUpIcon, UniversityIcon, HandshakeIcon, LandmarkIcon, UserIcon, PlayIcon, CloseIcon, HeadphonesIcon } from "@/components/icons/Icons";
import BookDemoModal from "@/components/Bookademo/BookDemoModal";
import ContactUs from "@/components/contact/page";
import styles from "./home-page.module.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type HeroSlide = (
  | { id: number; type: "image"; image: string; heading: string }
  | { id: number; type: "video"; src: string; heading: string }
) & { mobileLines: readonly [string, string] };

const heroSlides: HeroSlide[] = [
  { id: 1, type: "image", image: "/images/hero_home1.jpeg", heading: "Empowering Lifelong Learning", mobileLines: ["Empowering", "Lifelong Learning"] },
  { id: 2, type: "image", image: "/images/Copy of student-online-young-cute-girl-glasses-orange-sweater-studying-computer-with-headphones.png", heading: "Built for Education That Goes Beyond Classroom", mobileLines: ["Built for Education That", "Goes Beyond Classroom"] },
{ id: 3, type: "video", src: "/images/Home-spark.mp4", heading: "Every Question Leads to Growth", mobileLines: ["Every Question", "Leads to Growth"] },
  { id: 4, type: "image", image: "/images/Copy of business-people-using-tablet-office-4 1.png", heading: "Beyond the Classroom, Beyond Limits", mobileLines: ["Beyond the Classroom,", "Beyond Limits"] },
  { id: 5, type: "image", image: "/images/Copy of college-graduates-smiling-camera copy.png", heading: "Designed for Minds That Refuse to Average", mobileLines: ["Designed for Minds", "That Refuse to Average"] },
  { id: 6, type: "video", src: "/images/hero-video2.mp4", heading: "Where Great Ideas Take Shape Together", mobileLines: ["Where Great Ideas", "Take Shape Together"] },
  { id: 7, type: "image", image: "/images/group-different-people-volunteering-foodbank 1.webp", heading: "Reimagine How the World Learns", mobileLines: ["Reimagine How", "the World Learns"] },
  { id: 8, type: "image", image: "/images/hero_7image.jpg", heading: "Transform the Way the World Learns", mobileLines: ["Transform the Way", "the World Learns"] },
];

function ChevronsLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M11 17L6 12L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 17L13 12L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronsRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M6 17L11 12L6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 17L18 12L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const [videoNeedsPlay, setVideoNeedsPlay] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isPaused = isHovered || isKeyboardFocused;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heroMobileViewportRef = useRef<HTMLDivElement | null>(null);
  const heroMobileSlideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroMobileScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHeroMobileViewport = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

  const scrollHeroMobileToSlide = (index: number, behavior: ScrollBehavior = "smooth") => {
    const viewport = heroMobileViewportRef.current;
    const slide = heroMobileSlideRefs.current[index];
    if (!viewport || !slide || !isHeroMobileViewport()) return;
    viewport.scrollTo({ left: slide.offsetLeft, behavior });
  };

  const settleHeroMobileScroll = () => {
    const viewport = heroMobileViewportRef.current;
    if (!viewport || !isHeroMobileViewport()) return;
    let nearestIndex = activeSlide;
    let nearestDistance = Number.POSITIVE_INFINITY;
    heroMobileSlideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const distance = Math.abs(slide.offsetLeft - viewport.scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    if (nearestIndex !== activeSlide) setActiveSlide(nearestIndex);
  };

  const handleHeroMobileScroll = () => {
    if (!isHeroMobileViewport()) return;
    if (heroMobileScrollTimerRef.current) clearTimeout(heroMobileScrollTimerRef.current);
    heroMobileScrollTimerRef.current = setTimeout(settleHeroMobileScroll, 120);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    intervalRef.current = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, activeSlide, prefersReducedMotion]);

  useEffect(() => {
    let cancelled = false;
    setVideoNeedsPlay(false);

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index !== activeSlide || prefersReducedMotion) {
        video.pause();
        return;
      }
      // Mobile browsers may pause hidden videos. Resume only the visible one.
      video.muted = true;
      video.playsInline = true;
      video.play().catch((error: DOMException) => {
        if (!cancelled && error.name === "NotAllowedError") setVideoNeedsPlay(true);
      });
    });
    if (prefersReducedMotion && heroSlides[activeSlide].type === "video") {
      setVideoNeedsPlay(true);
    }
    return () => { cancelled = true; };
  }, [activeSlide, prefersReducedMotion]);

  const playActiveVideo = () => {
    const video = videoRefs.current[activeSlide];
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    video.play().then(() => setVideoNeedsPlay(false)).catch(() => setVideoNeedsPlay(true));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    requestAnimationFrame(() => scrollHeroMobileToSlide(index));
  };

  const goToPrevious = () => {
    setActiveSlide((current) => {
      const next = (current - 1 + heroSlides.length) % heroSlides.length;
      requestAnimationFrame(() => scrollHeroMobileToSlide(next));
      return next;
    });
  };

  const goToNext = () => {
    setActiveSlide((current) => {
      const next = (current + 1) % heroSlides.length;
      requestAnimationFrame(() => scrollHeroMobileToSlide(next));
      return next;
    });
  };

  return (
    <section
      data-home-hero
      className={styles["hero-section"]}
      aria-roledescription="carousel"
      aria-label="NeuroLXP highlights"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) setIsHovered(true);
      }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setIsHovered(false); }}
      onPointerDownCapture={(event) => {
        setIsKeyboardFocused(false);
        if (event.pointerType !== "mouse") setIsHovered(false);
      }}
      onFocusCapture={(event) => setIsKeyboardFocused(event.target.matches(":focus-visible"))}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsKeyboardFocused(false);
      }}
    >
      <div className={styles["hero-frame"]}>
        <div
          className={styles["hero-image-stage"]}
          ref={heroMobileViewportRef}
          onScroll={handleHeroMobileScroll}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(element) => { heroMobileSlideRefs.current[index] = element; }}
              className={`${styles["hero-slide"]}${index === activeSlide ? ` ${styles["hero-slide-active"]}` : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${heroSlides.length}`}
              aria-hidden={index !== activeSlide}
            >
              {slide.type === "video" ? (
                <video
                  ref={(video) => { videoRefs.current[index] = video; }}
                  className={`${styles["hero-slide-image"]} ${styles["hero-slide-video"]}`}
                  autoPlay={index === activeSlide && !prefersReducedMotion}
                  preload={index === activeSlide ? "auto" : "metadata"}
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <Image src={slide.image} alt="" fill priority={index === 0} loading={index === 0 || index === activeSlide || index === (activeSlide + 1) % heroSlides.length ? "eager" : "lazy"} sizes="(min-width: 1312px) 1208px, 100vw" className={styles["hero-slide-image"]} />
              )}
            </div>
          ))}
          {heroSlides[activeSlide].type === "video" && videoNeedsPlay && (
            <button type="button" className={styles["hero-video-play-button"]} onClick={playActiveVideo} aria-label="Play slide video">
              <PlayIcon className={styles["hero-video-play-icon"]} />
            </button>
          )}
          <button type="button" className={`${styles["hero-nav-button"]} ${styles["hero-nav-button-prev"]}`} onClick={goToPrevious} aria-label="Previous slide">
            <ChevronsLeftIcon className={styles["hero-nav-icon"]} />
          </button>
          <button type="button" className={`${styles["hero-nav-button"]} ${styles["hero-nav-button-next"]}`} onClick={goToNext} aria-label="Next slide">
            <ChevronsRightIcon className={styles["hero-nav-icon"]} />
          </button>
        </div>

        <div data-hero-caption-stage className={styles["hero-caption-stage"]}>
          {heroSlides.map((slide, index) => (
            <div data-hero-caption key={slide.id} className={`${styles["hero-caption"]}${index === activeSlide ? ` ${styles["hero-caption-active"]}` : ""}`} aria-hidden={index !== activeSlide}>
              <h1 className={styles["hero-heading"]}>
                {slide.mobileLines[0]}{" "}
                <br className={styles["hero-mobile-break"]} />
                {slide.mobileLines[1]}
              </h1>
            </div>
          ))}
          <div className={styles["hero-dots"]}>
            {heroSlides.map((dotSlide, dotIndex) => (
              <button key={dotSlide.id} type="button" aria-label={`Go to slide ${dotIndex + 1}`} aria-current={dotIndex === activeSlide ? "true" : undefined} className={`${styles["hero-dot"]}${dotIndex === activeSlide ? ` ${styles["hero-dot-active"]}` : ""}`} onClick={() => goToSlide(dotIndex)} />
            ))}
          </div>
        </div>

        {/* Keep full mobile captions visible even with older carousel CSS. */}
        <style jsx global>{`
          @media (max-width: 767px) {
            [data-home-hero] [data-hero-caption-stage] {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              max-height: none !important;
              overflow: visible !important;
              grid-template-rows: auto auto !important;
            }

            [data-home-hero] [data-hero-caption] {
              width: 100% !important;
              height: auto !important;
              max-height: none !important;
              align-self: stretch !important;
              overflow: visible !important;
            }

            [data-home-hero] [data-hero-caption] h1 {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              max-height: none !important;
              margin: 0 !important;
              padding: 0 8px !important;
              box-sizing: border-box !important;
              white-space: normal !important;
              overflow: visible !important;
              text-overflow: clip !important;
              -webkit-line-clamp: unset !important;
              line-clamp: none !important;
              word-break: normal !important;
              overflow-wrap: anywhere !important;
              line-height: 1.3 !important;
            }
          }
        `}</style>

        <span className={styles["sr-only"]} aria-live="polite" aria-atomic="true">
          {`Slide ${activeSlide + 1} of ${heroSlides.length}: ${heroSlides[activeSlide].heading}`}
        </span>
      </div>
    </section>
  );
}

const odysseyCards = [
  { id: 1, title: "Personalized Learning", description: "Personalized learning tailored to every learner", color: "#2D4CC8", Icon: LightbulbIcon },
  { id: 2, title: "Interactive Content", description: "Interactive learning that inspires active participation", color: "#BF1869", Icon: CursorClickIcon },
  { id: 3, title: "Skill Development", description: "Build practical skills for future success", color: "#861109", Icon: TargetIcon },
  { id: 4, title: "Collaborative Learning", description: "Collaborate, learn, and grow together seamlessly", color: "#907507", Icon: UsersIcon },
  { id: 5, title: "Mobile-First Design", description: "Learn anytime, anywhere, on any device", color: "#2A7308", Icon: SmartphoneIcon },
  { id: 6, title: "Career Pathways", description: "Build skills. Advance your career confidently", color: "#67096E", Icon: GraduationCapIcon },
  { id: 7, title: "Customizable Interface", description: "Customize learning your way, effortlessly", color: "#8D0884", Icon: SettingsGearIcon },
  { id: 8, title: "Learning Insights", description: "Turn insights into smarter learning decisions", color: "#052C74", Icon: LibraryIcon },
  { id: 9, title: "Multi-Tenant", description: "Manage multiple organizations from one platform", color: "#3B1D5A", Icon: BuildingIcon },
  { id: 10, title: "Content Management", description: "Manage content with complete version control", color: "#09248F", Icon: ContentWritingIcon },
  { id: 11, title: "Adaptive Learning", description: "Personalized learning that adapts to everyone", color: "#134E4A", Icon: BrainIcon },
  { id: 12, title: "Learner Tracking", description: "Track every learner's complete learning journey", color: "#4E342E", Icon: AnalyticsUpIcon },
];

function OdysseyCard({ title, description, color, Icon }: { title: string; description: string; color: string; Icon: (props: { className?: string }) => JSX.Element }) {
  return (
    <div className={styles["odyssey-card"]}>
      <div className={styles["odyssey-card-inner"]} style={{ borderColor: color }}>
        <div className={styles["odyssey-card-bar"]} style={{ background: color }} />
        <div className={styles["odyssey-card-icon-ring"]} aria-hidden="true">
          <div className={styles["odyssey-card-icon-circle"]}>
            <Icon className={styles["odyssey-card-icon"]} />
          </div>
        </div>
        <div className={styles["odyssey-card-text"]} style={{ color }}>
          <h3 className={styles["odyssey-card-title"]}>{title}</h3>
          <p className={styles["odyssey-card-description"]}>{description}</p>
        </div>
      </div>
    </div>
  );
}

function LearningOdyssey({ onBookDemoClick, bookDemoButtonRef }: { onBookDemoClick: () => void; bookDemoButtonRef: RefObject<HTMLButtonElement | null> }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [arrowAnimationData, setArrowAnimationData] = useState<object | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    fetch("/animations/arrow-down-purple.json")
      .then((response) => response.json())
      .then((data) => setArrowAnimationData(data))
      .catch(() => setArrowAnimationData(null));
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const visibleCards = odysseyCards.slice(0, 4);
  const extraCards = odysseyCards.slice(4);

  // Remember the exact page position where View More was clicked.
  // This works on desktop, tablet and mobile.
  const viewMoreScrollPositionRef = useRef<number | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const restoreViewMorePosition = () => {
    const savedScrollPosition = viewMoreScrollPositionRef.current;
    if (savedScrollPosition === null) return;

    // Restore after the collapsing content has been removed/reflowed.
    window.scrollTo({
      top: savedScrollPosition,
      behavior: "auto",
    });
  };

  const handleOdysseyToggle = () => {
    if (!isExpanded) {
      // Save the ORIGINAL screen shown when View More is clicked.
      viewMoreScrollPositionRef.current = window.scrollY;
      setIsExpanded(true);
      return;
    }

    // Close the extra cards first.
    flushSync(() => {
      setIsExpanded(false);
    });

    // The extra-card wrapper can have a CSS collapse transition.
    // Keep restoring during that collapse so the browser cannot leave
    // the user at the following section.
    restoreViewMorePosition();

    requestAnimationFrame(() => {
      restoreViewMorePosition();

      requestAnimationFrame(() => {
        restoreViewMorePosition();
      });
    });

    window.setTimeout(restoreViewMorePosition, 150);
    window.setTimeout(restoreViewMorePosition, 300);
    window.setTimeout(() => {
      restoreViewMorePosition();
      viewMoreScrollPositionRef.current = null;
    }, 500);
  };

  return (
    <section className={styles["odyssey-section"]} aria-labelledby="odyssey-heading">
      <div className={styles["odyssey-heading-block"]}>
        <h2 className={styles["odyssey-heading"]} id="odyssey-heading">
          Embark on a <span className={styles["odyssey-heading-accent"]}>Learning Odyssey</span> with NeuroLXP
        </h2>
        <p className={styles["odyssey-subtext"]}>NeuroLXP is more than a learning platform it's an intelligent platform that helps learners grow, adapt, and succeed.</p>
        <button type="button" className={styles["odyssey-demo-button"]} onClick={onBookDemoClick} ref={bookDemoButtonRef}>
          Book a Demo
        </button>
      </div>

      <div className={styles["odyssey-grid"]}>
        {visibleCards.map((card) => (
          <OdysseyCard key={card.id} {...card} />
        ))}
      </div>

      <div className={`${styles["odyssey-extra-wrapper"]}${isExpanded ? ` ${styles["odyssey-extra-open"]}` : ""}`} id="odyssey-extra-cards" aria-hidden={!isExpanded}>
        <div className={styles["odyssey-extra-inner"]}>
          <div className={styles["odyssey-grid"]}>
            {extraCards.map((card) => (
              <OdysseyCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>

      <button ref={toggleButtonRef} type="button" className={styles["odyssey-toggle-button"]} onClick={handleOdysseyToggle} aria-expanded={isExpanded} aria-controls="odyssey-extra-cards">
        <span className={styles["odyssey-toggle-pill"]}>
          <span className={styles["odyssey-toggle-label"]}>{isExpanded ? "View Less" : "View More"}</span>
        </span>
        <span className={styles["odyssey-toggle-badge"]} aria-hidden="true">
          <span className={styles["odyssey-toggle-badge-inner"]}>{arrowAnimationData && <Lottie animationData={arrowAnimationData} loop autoplay={!prefersReducedMotion} className={`odyssey-toggle-icon${isExpanded ? " odyssey-toggle-icon-flipped" : ""}`} />}</span>
        </span>
      </button>
    </section>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M16 8C16 8 12 5 6 5V24C12 24 16 27 16 27C16 27 20 24 26 24V5C20 5 16 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8V27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GoalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M2 16C2 16 7 7 16 7C25 7 30 16 30 16C30 16 25 25 16 25C7 25 2 16 2 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="4.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function UsersGroupIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 25C9 20.5817 12.134 17 16 17C19.866 17 23 20.5817 23 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 23C2 19.6863 3.79086 17 6 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="26" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 23C30 19.6863 28.2091 17 26 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SchoolIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M4 28V10L16 4L28 10V28" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 28H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 28V19H21V28" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 13V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

type StoryMissionVisionCardData = {
  id: number;
  title: string;
  description: string;
  image: string;
  accentColor: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const storyMissionVisionCards: StoryMissionVisionCardData[] = [
  {
    id: 1,
    title: "Our Story",
    description: "NeuroLXP transforms learning with an intelligent platform for future ready digital skills",
    image: "/images/Copy of finger-pointing-bulb-draw.png",
    accentColor: "#2D4CC8",
    Icon: BookOpenIcon,
  },
  {
    id: 2,
    title: "Our Mission",
    description: "Intelligent learning and skilling for measurable, future ready success across learners and organizations",
    image: "/images/Copy of success-concept-target-book.png",
    accentColor: "#2A7308",
    Icon: GoalIcon,
  },
  {
    id: 3,
    title: "Our Vision",
    description: "A digital learning ecosystem shaping lifelong learning through innovation and inclusive growth",
    image: "/images/Copy of 30747 1.png",
    accentColor: "#67096E",
    Icon: EyeIcon,
  },
];

type PlatformStatData = {
  id: number;
  value: string;
  label: string;
  accentColor: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const platformStats: PlatformStatData[] = [
  { id: 1, value: "1M+", label: "Active Learners", accentColor: "#2D4CC8", Icon: UsersGroupIcon },
  { id: 2, value: "1000+", label: "Organizations", accentColor: "#2A7308", Icon: SchoolIcon },
  { id: 3, value: "10K+", label: "Courses & Modules", accentColor: "#BF1869", Icon: BookOpenIcon },
];

function StoryMissionVisionCard({ title, description, image, accentColor, Icon }: StoryMissionVisionCardData) {
  return (
    <div className={styles["smv-card"]}>
      <div className={styles["smv-card-icon-ring"]} aria-hidden="true">
        <div className={styles["smv-card-icon-circle"]} style={{ borderColor: accentColor, color: accentColor }}>
          <Icon className={styles["smv-card-icon"]} />
        </div>
      </div>
      <div className={styles["smv-card-underline"]} style={{ background: accentColor }}>
        <span className={styles["smv-card-underline-dot"]} style={{ background: accentColor }} />
      </div>
      <h3 className={styles["smv-card-title"]} style={{ color: accentColor }}>
        {title}
      </h3>
      <p className={styles["smv-card-description"]}>{description}</p>
      <div className={styles["smv-card-image-frame"]}>
        <Image src={image} alt={title} fill sizes="(max-width: 480px) 100vw, 348px" className={styles["smv-card-image"]} />
      </div>
    </div>
  );
}

function PlatformStat({ value, label, accentColor, Icon }: PlatformStatData) {
  return (
    <div className={styles["smv-stat"]}>
      <div className={styles["smv-stat-icon-ring"]} style={{ borderColor: accentColor }} aria-hidden="true">
        <span className={styles["smv-stat-icon-wrap"]} style={{ color: accentColor }}>
          <Icon className={styles["smv-stat-icon"]} />
        </span>
      </div>
      <div className={styles["smv-stat-text"]}>
        <span className={styles["smv-stat-value"]} style={{ color: accentColor }}>
          {value}
        </span>
        <span className={styles["smv-stat-label"]}>{label}</span>
      </div>
    </div>
  );
}

function StoryMissionVision() {
  return (
    <section className={styles["smv-section"]} id="story-mission-vision" aria-labelledby="smv-heading">
      <div className={styles["smv-heading-block"]}>
        <span className={styles["smv-badge"]}>
          About NeuroLXP<sup className={styles["smv-badge-tm"]}>TM</sup>
        </span>
        <h2 className={styles["smv-heading"]} id="smv-heading">
          <span className={styles["smv-heading-lead"]}>Our Story! Our Mission!</span>{" "}
          <span className={styles["smv-heading-vision"]}>Our Vision</span>
        </h2>
        <p className={styles["smv-subtext"]}>
          At NeuroLXP
          {/* <sup className={styles["smv-badge-tm"]}>TM</sup> */}
          , we&apos;re driven by purpose and a bold vision to transform learning, empowering learners and organizations to achieve more.
        </p>
      </div>

      <div className={styles["smv-cards"]}>
        {storyMissionVisionCards.map((card) => (
          <StoryMissionVisionCard key={card.id} {...card} />
        ))}
      </div>

      <div className={styles["smv-stats"]}>
        <div className={styles["smv-stats-inner"]}>
          {platformStats.map((stat) => (
            <PlatformStat key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

const platformOverviewItems = [
  { id: 1, label: "Universities", color: "#2D4CC8", Icon: GraduationCapOutlineIcon },
  { id: 2, label: "Colleges", color: "#861109", Icon: UniversityIcon },
  { id: 3, label: "Corporates", color: "#67096E", Icon: BuildingIcon },
  { id: 4, label: "NGOs", color: "#BF1869", Icon: HandshakeIcon },
  { id: 5, label: "Governments", color: "#2A7308", Icon: LandmarkIcon },
  { id: 6, label: "Individuals", color: "#0B9BA0", Icon: UserIcon },
];

type EmbeddedYouTubePlayer = {
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  mute: () => void;
  destroy: () => void;
};

type EmbeddedYouTubeAPI = {
  Player: new (
    element: HTMLIFrameElement,
    options: {
      events: {
        onReady: (event: { target: EmbeddedYouTubePlayer }) => void;
        onStateChange: (event: { data: number; target: EmbeddedYouTubePlayer }) => void;
      };
    }
  ) => EmbeddedYouTubePlayer;
  PlayerState: { ENDED: number };
};

function PlatformOverview() {
  const youtubeFrameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    let disposed = false;
    let player: EmbeddedYouTubePlayer | null = null;
    const youtubeWindow = window as typeof window & {
      YT?: EmbeddedYouTubeAPI;
      onYouTubeIframeAPIReady?: () => void;
    };
    const previousReady = youtubeWindow.onYouTubeIframeAPIReady;

    const initializePlayer = () => {
      if (disposed || player || !youtubeFrameRef.current || !youtubeWindow.YT?.Player) return;
      const api = youtubeWindow.YT;
      player = new api.Player(youtubeFrameRef.current, {
        events: {
          onReady: ({ target }) => {
            if (disposed) return;
            target.mute();
            target.playVideo();
          },
          onStateChange: ({ data, target }) => {
            if (disposed || data !== api.PlayerState.ENDED) return;
            // Restart the same player in place rather than reloading the iframe.
            target.seekTo(0, true);
            target.playVideo();
          },
        },
      });
    };

    if (youtubeWindow.YT?.Player) {
      initializePlayer();
    } else {
      const readyHandler = () => {
        previousReady?.();
        initializePlayer();
      };
      youtubeWindow.onYouTubeIframeAPIReady = readyHandler;
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      disposed = true;
      player?.destroy();
      if (youtubeWindow.onYouTubeIframeAPIReady !== previousReady) {
        youtubeWindow.onYouTubeIframeAPIReady = previousReady;
      }
    };
  }, []);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const raw = 1 - rect.top / window.innerHeight;
      const clamped = Math.min(Math.max(raw, 0), 1);
      setScrollProgress(clamped);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseWidth = 548;
  const maxWidth = 900;

  return (
    <section className={styles["platform-overview-section"]} id="our-customers" aria-labelledby="platform-overview-heading">
      <div className={styles["platform-overview-inner"]}>
        <div className={styles["platform-overview-media"]}>
          <div className={styles["platform-overview-media-frame"]}>


<div className={styles["platform-overview-frame"]}>
  <iframe
    ref={youtubeFrameRef}
    className={styles["platform-overview-video"]}
    src="https://www.youtube.com/embed/nCheHJs0_QI?autoplay=1&mute=1&loop=1&playlist=nCheHJs0_QI&playsinline=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&enablejsapi=1"
    title="Platform Overview Video"
    allow="autoplay; encrypted-media; picture-in-picture"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen={false}
  />
</div>

          </div>
        </div>

        <div className={styles["platform-overview-content"]}>
          <span className={styles["platform-overview-tag"]}>Platform Overview</span>
         <h2
  className={styles["platform-overview-heading"]}
  id="platform-overview-heading"
>
  NeuroLXP
  {/* <sup className={styles["smv-badge-tm"]}>TM</sup> */}

  <span className={styles["platform-overview-heading-text"]}>
    {" "}One Platform!
    <br />
    Many Missions!
    <span className={styles["mobile-one-break"]}> </span>
    One Future
  </span>
</h2>
          <div className={styles["platform-hex-grid"]}>
  <svg className={styles["platform-hex-defs"]} aria-hidden="true">
    <defs>
      <filter id="hexInsetShadow" x="-4" y="-4" width="265" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="-4" dy="-4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
      </filter>
      <filter id="hexOuterShadow" x="-8" y="-8" width="270" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="-4" dy="-4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
  {platformOverviewItems.map((item) => (
  <PlatformHexCard
    key={item.id}
    label={item.label}
    color={item.color}
    Icon={item.Icon}
  />
))}
</div>
        </div>
      </div>
    </section>
  );
}

function PlatformHexCard({ label, color, Icon }: { label: string;  color: string; Icon: (props: { className?: string }) => JSX.Element }) {
  return (
    <div className={styles["platform-hex-card"]}>
      <div className={styles["platform-hex-icon-ring"]} aria-hidden="true">
        <div className={styles["platform-hex-icon-circle"]} style={{ color }}>
          <Icon className={styles["platform-hex-icon"]} />
        </div>
      </div>
      <svg className={styles["platform-hex-back"]} viewBox="0 0 257 116" aria-hidden="true">
        <polygon points="128.5,0 257,29 257,87 128.5,116 0,87 0,29" fill="#dfe6e9" filter="url(#hexInsetShadow)" />
      </svg>
      <svg className={styles["platform-hex-front-shape"]} viewBox="0 0 254 100" aria-hidden="true">
        <polygon points="127,0 254,25 254,75 127,100 0,75 0,25" fill="#dfe6e9" filter="url(#hexOuterShadow)" />
      </svg>
      <div className={styles["platform-hex-front-text"]}>
        <div className={styles["platform-hex-text"]}>
          <span className={styles["platform-hex-label"]} style={{ color }}>
            {label}
          </span>
          {/* <span className={styles["platform-hex-description"]}>{title}</span> */}
        </div>
      </div>
    </div>
  );
}

type PurposePillarData = {
  id: number;
  lines: [string, string];
  color: string;
};

const purposePillars: PurposePillarData[] = [
  { id: 1, lines: ["Every Institution has a", "Mission"], color: "#BF1869" },
  { id: 2, lines: ["Every Learner has a", "Dream"], color: "#67096E" },
  { id: 3, lines: ["Every Organization Needs", "Future-Ready Talent"], color: "#861109" },
];

function PurposePill({ lines, color }: { lines: [string, string]; color: string }) {
  return (
    <div className={styles["purpose-pill"]} style={{ borderColor: color }}>
      <span className={styles["purpose-pill-line"]}>{lines[0]}</span>
      <span className={styles["purpose-pill-highlight"]} style={{ color }}>
        {lines[1]}  
      </span>
    </div>
  );
}

function PlatformPurpose() {
  const [topPillar, leftPillar, rightPillar] = purposePillars;

  return (
    <section className={styles["platform-purpose-section"]} aria-labelledby="platform-purpose-heading">
      <h2 className={styles["platform-purpose-heading"]} id="platform-purpose-heading">
        One Platform! Every Learning and Skilling Purpose
      </h2>
      <div className={styles["platform-purpose-pillars"]}>
        <div className={styles["platform-purpose-top"]}>
          <PurposePill lines={topPillar.lines} color={topPillar.color} />
        </div>
        <div className={styles["platform-purpose-bottom"]}>
          <PurposePill lines={leftPillar.lines} color={leftPillar.color} />
          <PurposePill lines={rightPillar.lines} color={rightPillar.color} />
        </div>
      </div>
    </section>
  );
}

function MeetNeuroLXP() {
  return (
    <section data-meet-neurolxp className={styles["meet-neurolxp-section"]} aria-labelledby="meet-neurolxp-heading">
      <div data-meet-frame className={styles["meet-neurolxp-frame"]}>
        <div data-meet-media className={styles["meet-neurolxp-overlay"]}>
          <Image src="/images/friends-learning-with-laptop.png" alt="Students collaborating on a laptop" fill sizes="(min-width: 1312px) 1216px, 100vw" className={styles["meet-neurolxp-image"]} />
        </div>
        <div data-meet-text className={styles["meet-neurolxp-text"]}>
          <span className={styles["meet-neurolxp-badge"]}>
            Meet NeuroLXP<sup className={styles["smv-badge-tm"]}>TM</sup>
          </span>
          <h2 className={styles["meet-neurolxp-heading"]} id="meet-neurolxp-heading">
            Next-Generation Neomorphism<br />
Learning Platform
          </h2>
          <p className={styles["meet-neurolxp-subtext"]}>Neomorphic platform for smarter learning</p>
        </div>
      </div>
    </section>
  );
}

type WhyChooseCardData = {
  id: number;
  title: string;
  description: string;
  dashColor: string;
  iconBg: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

function WhyChooseDiscoverIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M20.5708 3.13932C19.2574 2.70672 17.854 2.47266 16.3958 2.47266C9.03203 2.47266 3.0625 8.44219 3.0625 15.806C3.0625 23.1697 9.03203 29.1393 16.3958 29.1393C23.7596 29.1393 29.7292 23.1697 29.7292 15.806C29.7292 14.4124 29.5153 13.0687 29.1188 11.806" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22.6663 16.0007C22.6663 19.6825 19.6815 22.6673 15.9997 22.6673C12.3178 22.6673 9.33301 19.6825 9.33301 16.0007C9.33301 12.3188 12.3178 9.33398 15.9997 9.33398" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 5.99935L16 15.9993M26 5.99935V2.66602M26 5.99935H29.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WhyChooseExcellenceIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M6 12.666C6 18.1888 10.4771 22.666 16 22.666C21.5228 22.666 26 18.1888 26 12.666C26 7.14316 21.5228 2.66602 16 2.66602C10.4771 2.66602 6 7.14316 6 12.666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13.5556C12 13.5556 13 13.5556 14 15.3333C14 15.3333 17.1765 10.8889 20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.51 20L23.4036 24.2799C23.9777 27.0297 24.2648 28.4047 23.6751 29.0564C23.0855 29.708 22.0613 29.1475 20.0132 28.0264L16.9819 26.3671C16.4979 26.1021 16.2559 25.9697 16 25.9697C15.7441 25.9697 15.5021 26.1021 15.0181 26.3671L11.9868 28.0264C9.93863 29.1475 8.91456 29.708 8.32487 29.0564C7.73519 28.4047 8.02225 27.0297 8.59641 24.2799L9.49003 20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function WhyChooseEngageIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M17.3337 9.33333C17.3337 12.2789 14.9458 14.6667 12.0003 14.6667C9.05481 14.6667 6.66699 12.2789 6.66699 9.33333C6.66699 6.38781 9.05481 4 12.0003 4C14.9458 4 17.3337 6.38781 17.3337 9.33333Z" stroke="currentColor" strokeWidth="2" />
      <path d="M20 14.6667C22.9455 14.6667 25.3333 12.2789 25.3333 9.33333C25.3333 6.38781 22.9455 4 20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.667 18.666H9.33366C5.65177 18.666 2.66699 21.6508 2.66699 25.3327C2.66699 26.8055 3.8609 27.9993 5.33366 27.9993H18.667C20.1398 27.9993 21.3337 26.8055 21.3337 25.3327C21.3337 21.6508 18.3489 18.666 14.667 18.666Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22.667 18.666C26.3489 18.666 29.3337 21.6508 29.3337 25.3327C29.3337 26.8055 28.1398 27.9993 26.667 27.9993H24.667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhyChooseAnalyticsIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M9.33301 24.0007V21.334M15.9997 24.0007V20.0007M22.6663 24.0007V17.334M3.33301 16.0007C3.33301 10.0295 3.33301 7.04397 5.18799 5.18897C7.04299 3.33398 10.0286 3.33398 15.9997 3.33398C21.9707 3.33398 24.9563 3.33398 26.8114 5.18897C28.6663 7.04397 28.6663 10.0295 28.6663 16.0007C28.6663 21.9717 28.6663 24.9573 26.8114 26.8124C24.9563 28.6673 21.9707 28.6673 15.9997 28.6673C10.0286 28.6673 7.04299 28.6673 5.18799 26.8124C3.33301 24.9573 3.33301 21.9717 3.33301 16.0007Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.98926 15.3157C10.8627 15.4115 17.3785 14.9777 21.0846 9.09575M18.6561 8.38512L21.1567 7.98264C21.4615 7.94383 21.909 8.18445 22.019 8.47129L22.6802 10.6559" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const whyChooseCards: WhyChooseCardData[] = [
  { id: 1, title: "Get Discovered", description: "Launch Your White Label\nLMS", dashColor: "#E1E4C3", iconBg: "#E1E4C3", Icon: WhyChooseDiscoverIcon },
  { id: 2, title: "Deliver Excellence", description: "Innovative Learning for\nGrowth", dashColor: "#BCC6EB", iconBg: "#BCC6EB", Icon: WhyChooseExcellenceIcon },
  { id: 3, title: "Engage Learners", description: "Smart Learning\nNotifications", dashColor: "#BEDEDC", iconBg: "#BEDEDC", Icon: WhyChooseEngageIcon },
  { id: 4, title: "Smart Analytics", description: "Better Insights Drive Greater Success", dashColor: "#C6B7C7", iconBg: "#C6B7C7", Icon: WhyChooseAnalyticsIcon },
];

function WhyChooseCard({ title, description, dashColor, iconBg, Icon }: WhyChooseCardData) {
  return (
    <div className={styles["why-choose-card"]} style={{ "--dash-color": dashColor } as CSSProperties}>
      <div className={styles["why-choose-icon-ring"]} aria-hidden="true">
        <div className={styles["why-choose-icon-circle"]} style={{ background: iconBg }}>
          <Icon className={styles["why-choose-icon"]} />
        </div>
      </div>
      <div className={styles["why-choose-oval"]}>
        <h3 className={styles["why-choose-card-title"]}>{title}</h3>
        <p className={styles["why-choose-card-description"]}>{description}</p>
      </div>
    </div>
  );
}

function WhyChooseNeuroLXP() {
  return (
    <section className={styles["why-choose-section"]} aria-labelledby="why-choose-heading">
      <div className={styles["why-choose-content"]}>
        <div className={styles["why-choose-blob"]} aria-hidden="true" />
        <span className={styles["why-choose-badge"]}>
          Why Choose NeuroLXP<sup className={styles["smv-badge-tm"]}>TM</sup>
        </span>
        <div className={styles["why-choose-body"]}>
          <div className={styles["why-choose-text"]}>
            <h2 className={styles["why-choose-heading"]} id="why-choose-heading">
              Transforming <br />
              <span className={styles["why-choose-heading-accent"]}>Digital Learning</span>
            </h2>
            <p className={styles["why-choose-subtext"]}>
              <span className={styles["why-choose-subtext-line"]}>
                NeuroLXP<sup className={styles["why-choose-tm"]}></sup> empowers learners with
              </span>
              <span className={styles["why-choose-subtext-line"]}>
                personalized learning, future skills, and meaningful outcomes
              </span>
              {/* <span className={styles["why-choose-subtext-line"]}>
                skills, and meaningful outcomes.
              </span> */}
            </p>
          </div>
          <div className={styles["why-choose-grid"]}>
            {whyChooseCards.map((card) => (
              <WhyChooseCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const learningModuleCards = [
  {
    id: 1,
    image: "/images/medium-shot-smiley-girl-studying-with-dictionary-laptop.png",
    title: "Blended Learning",
    description:
      "Blend online and in-person learning for flexible, engaging experiences",
  },
  {
    id: 2,
    image: "/images/elevated-view-businessman-businesswoman-stacking-each-other-s-hand-project-1.png",
    title: "Career Growth",
    description:
      "Build in-demand skills and grow your career with confidence",
  },
  {
    id: 3,
    image:
      "/images/young-businessman-wearing-glasses-working-using-laptop-standing-white-background-with-confident-expression-smart-face-thinking-serious.png",
    title: "Smart Learning Paths",
    description:
      "Personalized learning to build future-ready skills and accelerate growth",
  },
  {
    id: 4,
    image: "/images/woman-attending-online-class.png", 
    title: "Immersive Learning",
    description:
      "Interactive learning that builds skills and delivers results",
  },
  {
    id: 5,
    image: "/images/agreement-coworkers-two-men-having-deal.png",  
    title: "Smart Onboarding",
    description:
      "Accelerate onboarding with guided, engaging learning",
  },
  {
    id: 6,
    image: "/images/front-view-young-attractive-businesswoman-black-shirt-along-with-young-man-discussing-graphics-desk-while-young-lady-presents-her-work-reading-document-job-building-presentation 1.png",
    title: "Standards Training",
    description:
      "Stay fully compliant with trusted, standards-based learning",
  },
];

const CARD_CLONE_COUNT = learningModuleCards.length;

const extendedLearningModuleCards = [...learningModuleCards.slice(-CARD_CLONE_COUNT), ...learningModuleCards, ...learningModuleCards.slice(0, CARD_CLONE_COUNT)];

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 47 47" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M10.5596 23.0107L36.4346 23.0311" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.0922 34.5208C21.0922 34.5208 9.59897 26.0421 9.60133 23.0116C9.60369 19.9812 21.1104 11.5208 21.1104 11.5208" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 47 47" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M35.4766 23.0291L9.60158 23.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.9253 34.5195C24.9253 34.5195 36.432 26.059 36.4343 23.0286C36.4367 19.9979 24.9434 11.5195 24.9434 11.5195" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LearningModuleCard({ title, description, image, isFeatured, isTextExpanded, isClone }: { title: string; description: string; image: string; isFeatured: boolean; isTextExpanded: boolean; isClone: boolean }) {
  const TitleTag = isClone ? "p" : "h3";
  return (
    <div className={`${styles["learning-module-card"]}${isFeatured ? ` ${styles["learning-module-card-featured"]}` : ""}`}>
      <div className={styles["learning-module-image-frame"]}>
        <Image src={image} alt={title} fill sizes="(max-width: 375px) 230px, (max-width: 480px) 290px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px" className={styles["learning-module-image"]} />
      </div>
      <div className={styles["learning-module-text"]}>
        <TitleTag className={styles["learning-module-title"]}>{title}</TitleTag>
        <div className={styles["learning-module-description-wrapper"]}>
          <p className={`${styles["learning-module-description"]}${isTextExpanded ? ` ${styles["learning-module-description-expanded"]}` : ""}`}>{description}</p>
        </div>
      </div>
    </div>
  );
}

function LearningModules() {
  const realCount = learningModuleCards.length;
  const firstRealIndex = CARD_CLONE_COUNT;
  const lastRealIndex = CARD_CLONE_COUNT + realCount - 1;
  const initialIndex = CARD_CLONE_COUNT + 2;

  const [trackIndex, setTrackIndex] = useState(initialIndex);
  const [settledActiveId, setSettledActiveId] = useState(
    extendedLearningModuleCards[initialIndex].id
  );
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [translateX, setTranslateX] = useState(0);

  const isAnimatingRef = useRef(false);
  const navigationIndexRef = useRef(trackIndex);
  const mobileScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMobileResetRef = useRef(false);

  const activeId =
    extendedLearningModuleCards[trackIndex]?.id ?? learningModuleCards[0].id;

  const isMobileViewport = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const getCenteredScrollLeft = (index: number) => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[index];

    if (!viewport || !card) return null;

    return (
      card.offsetLeft +
      card.offsetWidth / 2 -
      viewport.clientWidth / 2
    );
  };

  const scrollMobileToIndex = (
    index: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    const viewport = viewportRef.current;
    const targetLeft = getCenteredScrollLeft(index);

    if (!viewport || targetLeft === null) return;

    viewport.scrollTo({
      left: Math.max(0, targetLeft),
      behavior,
    });
  };

  const normalizeMobileIndex = (index: number) => {
    if (index < firstRealIndex) return index + realCount;
    if (index > lastRealIndex) return index - realCount;
    return index;
  };

  const findNearestMobileIndex = () => {
    const viewport = viewportRef.current;
    if (!viewport) return trackIndex;

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;

    let nearestIndex = trackIndex;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const settleMobileCarousel = () => {
    if (!isMobileViewport() || isMobileResetRef.current) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    const nearestIndex = findNearestMobileIndex();
    const normalizedIndex = normalizeMobileIndex(nearestIndex);

    if (normalizedIndex !== nearestIndex) {
      const firstRealCard = cardRefs.current[firstRealIndex];
      const matchingRightClone = cardRefs.current[firstRealIndex + realCount];

      if (firstRealCard && matchingRightClone) {
        const firstRealCenter =
          firstRealCard.offsetLeft + firstRealCard.offsetWidth / 2;
        const rightCloneCenter =
          matchingRightClone.offsetLeft + matchingRightClone.offsetWidth / 2;

        /* One complete real-card cycle, including all inter-card gaps. */
        const cycleWidth = rightCloneCenter - firstRealCenter;

        if (cycleWidth > 0) {
          isMobileResetRef.current = true;

          /* Preserve the exact relative finger-scroll position.
             Left clone -> add one cycle.
             Right clone -> subtract one cycle.
             Because the cards are identical, this reset is visually invisible
             and never animates in the opposite direction. */
          if (nearestIndex < firstRealIndex) {
            viewport.scrollLeft += cycleWidth;
          } else if (nearestIndex > lastRealIndex) {
            viewport.scrollLeft -= cycleWidth;
          }

          requestAnimationFrame(() => {
            isMobileResetRef.current = false;
          });
        }
      }
    }

    navigationIndexRef.current = normalizedIndex;
    setTrackIndex(normalizedIndex);
    setSettledActiveId(extendedLearningModuleCards[normalizedIndex].id);
    isAnimatingRef.current = false;
  };

  const handleMobileScroll = () => {
    if (!isMobileViewport() || isMobileResetRef.current) return;

    if (mobileScrollTimerRef.current) {
      clearTimeout(mobileScrollTimerRef.current);
    }

    /* Wait until finger/momentum scrolling has stopped, then snap and normalize. */
    mobileScrollTimerRef.current = setTimeout(settleMobileCarousel, 140);
  };

  const handleMobileTouchStart = () => {
    if (!isMobileViewport()) return;

    if (mobileScrollTimerRef.current) {
      clearTimeout(mobileScrollTimerRef.current);
    }

    isAnimatingRef.current = false;
    setIsHovered(true);
  };

  const handleMobileTouchEnd = () => {
    if (!isMobileViewport()) return;

    if (mobileScrollTimerRef.current) {
      clearTimeout(mobileScrollTimerRef.current);
    }

    mobileScrollTimerRef.current = setTimeout(() => {
      settleMobileCarousel();
      setIsHovered(false);
    }, 180);
  };

  const moveByOneCard = (direction: -1 | 1) => {
    /*
      One click = exactly one card.
      Do not discard a second/rapid click while the previous card is moving.
      navigationIndexRef is updated synchronously, so double-clicking advances
      two card positions instead of sending both clicks to the same card.
    */
    const currentIndex = navigationIndexRef.current;
    const targetIndex = currentIndex + direction;

    if (
      targetIndex < 0 ||
      targetIndex >= extendedLearningModuleCards.length
    ) {
      return;
    }

    navigationIndexRef.current = targetIndex;

    if (isMobileViewport()) {
      const viewport = viewportRef.current;
      if (!viewport) return;

      setTrackIndex(targetIndex);
      scrollMobileToIndex(targetIndex, "smooth");

      if (mobileScrollTimerRef.current) {
        clearTimeout(mobileScrollTimerRef.current);
      }

      mobileScrollTimerRef.current = setTimeout(
        settleMobileCarousel,
        520
      );
      return;
    }

    setTrackIndex(targetIndex);
  };

  const goToPreviousOnly = () => moveByOneCard(-1);
  const goToNextOnly = () => moveByOneCard(1);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      goToNextOnly();
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, trackIndex]);

  useEffect(() => {
    const recalculate = () => {
      const viewport = viewportRef.current;
      const activeCard = cardRefs.current[trackIndex];

      if (!viewport || !activeCard) return;

      if (isMobileViewport()) {
        /* Mobile uses scrollLeft only. Never animate this state-sync/reset. */
        const targetLeft = getCenteredScrollLeft(trackIndex);

        if (
          targetLeft !== null &&
          Math.abs(viewport.scrollLeft - targetLeft) > 1
        ) {
          isMobileResetRef.current = true;

          viewport.scrollTo({
            left: Math.max(0, targetLeft),
            behavior: "auto",
          });

          requestAnimationFrame(() => {
            isMobileResetRef.current = false;
          });
        }

        setTranslateX(0);
        return;
      }

      const viewportCenter = viewport.offsetWidth / 2;
      const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
      setTranslateX(viewportCenter - cardCenter);
    };

    recalculate();

    const viewport = viewportRef.current;

    const handleCardResize = (event: TransitionEvent) => {
      if (isMobileViewport()) return;

      if (
        event.propertyName === "width" ||
        event.propertyName === "height"
      ) {
        recalculate();
        setSettledActiveId(activeId);
      }
    };

    viewport?.addEventListener("transitionend", handleCardResize);
    window.addEventListener("resize", recalculate);

    const fallbackTimer = setTimeout(() => {
      recalculate();
      setSettledActiveId(activeId);
    }, 550);

    return () => {
      window.removeEventListener("resize", recalculate);
      viewport?.removeEventListener("transitionend", handleCardResize);
      clearTimeout(fallbackTimer);
    };
  }, [trackIndex, activeId]);

  /* Desktop-only transform-loop reset. Mobile circularity is handled by
     scrollLeft + clone normalization in settleMobileCarousel(). */
  useEffect(() => {
    if (isMobileViewport()) return;

    const track = trackRef.current;
    if (!track) return;

    const handleTrackTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== "transform") return;

      const isPastEnd = trackIndex >= CARD_CLONE_COUNT + realCount;
      const isBeforeStart = trackIndex < CARD_CLONE_COUNT;

      if (isPastEnd || isBeforeStart) {
        const nextIndex = isPastEnd
          ? trackIndex - realCount
          : trackIndex + realCount;

        const viewport = viewportRef.current;
        const nextCard = cardRefs.current[nextIndex];

        flushSync(() => {
          setTransitionsEnabled(false);
          navigationIndexRef.current = nextIndex;
          setTrackIndex(nextIndex);

          if (viewport && nextCard) {
            const viewportCenter = viewport.offsetWidth / 2;
            const cardCenter =
              nextCard.offsetLeft + nextCard.offsetWidth / 2;

            setTranslateX(viewportCenter - cardCenter);
          }
        });
      } else {
        isAnimatingRef.current = false;
      }
    };

    track.addEventListener("transitionend", handleTrackTransitionEnd);

    return () =>
      track.removeEventListener(
        "transitionend",
        handleTrackTransitionEnd
      );
  }, [trackIndex, realCount]);

  useEffect(() => {
    if (transitionsEnabled) return;

    const raf = requestAnimationFrame(() => {
      setTransitionsEnabled(true);
      isAnimatingRef.current = false;
    });

    return () => cancelAnimationFrame(raf);
  }, [transitionsEnabled]);

  useEffect(() => {
    return () => {
      if (mobileScrollTimerRef.current) {
        clearTimeout(mobileScrollTimerRef.current);
      }
    };
  }, []);

  return (
    <section className={styles["learning-modules-section"]} aria-labelledby="learning-modules-heading" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onFocus={() => setIsHovered(true)} onBlur={() => setIsHovered(false)}>
      <div className={styles["learning-modules-heading-block"]}>
        <span className={styles["learning-modules-badge"]}>Learning Modules</span>
        <h2 className={styles["learning-modules-heading"]} id="learning-modules-heading">
          Future Ready{" "}
          <span className={styles["learning-modules-heading-accent"]}>
            NeuroLXP
            {/* <sup className={styles["smv-badge-tm"]}>TM</sup> */}
          </span>{" "}
          Learning Solutions
        </h2>
        <p className={styles["learning-modules-subtext"]}>Powerful, scalable modules designed to accelerate learning, build future-ready skills, and drive organizational success.</p>
      </div>

      <span className={styles["sr-only"]} aria-live="polite" aria-atomic="true">
        {`Now showing: ${extendedLearningModuleCards[trackIndex].title}`}
      </span>

      <div
        className={styles["learning-modules-viewport"]}
        ref={viewportRef}
        onScroll={handleMobileScroll}
        onTouchStart={handleMobileTouchStart}
        onTouchEnd={handleMobileTouchEnd}
        onTouchCancel={handleMobileTouchEnd}
      >
        <div className={styles["learning-modules-track"]} ref={trackRef} style={{
          transform: `translateX(${translateX}px)`,
          transition: transitionsEnabled ? undefined : "none",
        }}>
          {extendedLearningModuleCards.map((card, index) => {
            const isClone = index < CARD_CLONE_COUNT || index >= CARD_CLONE_COUNT + realCount;
            return (
              <div
                key={`${card.id}-${index}`}
                aria-hidden={isClone}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}>
                <LearningModuleCard title={card.title} description={card.description} image={card.image} isFeatured={card.id === activeId} isTextExpanded={card.id === activeId && card.id === settledActiveId} isClone={isClone} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles["learning-modules-nav"]}>
        <button type="button" className={styles["learning-modules-nav-button"]} onClick={goToPreviousOnly} aria-label="Previous module">
          <ArrowLeftIcon className={styles["learning-modules-nav-icon"]} />
        </button>
        <button type="button" className={styles["learning-modules-nav-button"]} onClick={goToNextOnly} aria-label="Next module">
          <ArrowRightIcon className={styles["learning-modules-nav-icon"]} />
        </button>
      </div>
    </section>
  );
}

type TestimonialData = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  accentColor: string;
};

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Sneha",
    role: "Software Engineer",
    quote: "NeuroLXP made learning faster and more engaging. The personalized learning paths helped me build new skills with confidence",
    image: "/images/SaraThomas.jpg",
    accentColor: "#2DC8BB",
  },
  {
    id: 2,
    name: "John Thomas",
    role: "Institute Admin",
    quote: "Managing courses and learners is now seamless. NeuroLXP has simplified administration and improved learner engagement",
    image: "/images/happy-business-man-wearing-grey-suit-standing-isolated-white-wall 1.png",
    accentColor: "#67096E",
  },
  {
    id: 3,
    name: "Ramesh",
    role: "Lecturer",
    quote: "NeuroLXP makes course delivery effortless. Interactive learning and real-time insights keep my learners engaged",
    image: "/images/successful-businessman 1.png",
    accentColor: "#907507",
  },
  {
    id: 4,
    name: "Joanna",
    role: "Software Engineer",
    quote: "NeuroLXP made learning faster and more engaging. The personalized learning paths helped me build new skills with confidence",
    image: "/images/Joanna.jpg",
    accentColor: "#BF1869",
  },
  // {
  //   id: 5,
  //   name: "Janoah",
  //   role: "Institute Admin",
  //   quote: "Managing courses and learners is now seamless. NeuroLXP has simplified administration and improved learner engagement.",
  //   image: "/images/young-businesswoman.webp",
  //   accentColor: "#67096E",
  // },
  {
    id: 6,
    name: "Shankar",
    role: "Lecturer",
    quote: "NeuroLXP makes course delivery effortless. Interactive learning and real-time insights keep my learners engaged",
    image: "/images/handsome-businessman-suit-glasses-cross-arms-chest-look-1.png",
    accentColor: "#861109",
  },
];

const TESTIMONIAL_CLONE_COUNT = testimonials.length;

const extendedTestimonials = [...testimonials.slice(-TESTIMONIAL_CLONE_COUNT), ...testimonials, ...testimonials.slice(0, TESTIMONIAL_CLONE_COUNT)];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M9.16237 2.30291L10.3337 4.66963C10.4934 4.99909 10.9198 5.31531 11.2798 5.37608L13.4059 5.73396C14.7656 5.96355 15.0848 6.95851 14.1041 7.93901L12.4496 9.60451C12.1694 9.88656 12.0157 10.4308 12.102 10.8208L12.5737 12.8845C12.9457 14.518 12.0853 15.1491 10.6528 14.2944L8.66061 13.1032C8.30085 12.8879 7.70758 12.8874 7.34075 13.1022L5.34673 14.2902C3.91954 15.1427 3.05348 14.5035 3.42805 12.8773L3.90295 10.8143C3.98991 10.4245 3.83702 9.88001 3.55727 9.59752L1.90544 7.92943C0.932981 6.94739 1.24706 5.95293 2.60709 5.72548L4.7338 5.37093C5.08714 5.31072 5.51401 4.99517 5.67425 4.66597L6.8493 2.3011C7.49024 1.01789 8.53011 1.0187 9.16237 2.30291Z" fill="#BCCF10" />
    </svg>
  );
}

function TestimonialCard({ id, name, role, quote, image, accentColor, isClone }: TestimonialData & { isClone: boolean }) {
  const NameTag = isClone ? "p" : "h3";
  return (
    <div className={styles["testimonial-card-wrapper"]} data-testimonial-id={id}>
      <div className={styles["testimonial-photo-frame"]}>
        <div className={styles["testimonial-photo-inner"]}>
          <Image src={image} alt={name} fill sizes="(max-width: 480px) 90px, (max-width: 768px) 110px, 154px" className={styles["testimonial-photo"]} />
        </div>
      </div>
      <div className={styles["testimonial-card"]} style={{ borderRightColor: accentColor }}>
        <div className={styles["testimonial-rating-badge"]} role="img" aria-label="Rated 5 out of 5">
          <span className={styles["testimonial-rating-number"]} aria-hidden="true">
            5
          </span>
          <StarIcon className={styles["testimonial-rating-star"]} />
        </div>
        <div className={styles["testimonial-content"]}>
          <div className={styles["testimonial-person"]}>
            <NameTag className={styles["testimonial-name"]}>{name}</NameTag>
            <span className={styles["testimonial-role"]}>{role}</span>
          </div>
          <div className={styles["testimonial-underline"]} style={{ background: accentColor }} />
          <p className={styles["testimonial-quote"]}>{quote}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const realCount = testimonials.length;
  const firstRealIndex = TESTIMONIAL_CLONE_COUNT;
  const lastRealIndex = TESTIMONIAL_CLONE_COUNT + realCount - 1;
  const initialIndex = TESTIMONIAL_CLONE_COUNT + 1;

  const [trackIndex, setTrackIndex] = useState(initialIndex);
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [translateX, setTranslateX] = useState(0);

  const isAnimatingRef = useRef(false);
  const navigationIndexRef = useRef(trackIndex);
  const mobileScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMobileResetRef = useRef(false);

  const isMobileViewport = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const getCenteredScrollLeft = (index: number) => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[index];

    if (!viewport || !card) return null;

    return (
      card.offsetLeft +
      card.offsetWidth / 2 -
      viewport.clientWidth / 2
    );
  };

  const scrollMobileToIndex = (
    index: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    const viewport = viewportRef.current;
    const targetLeft = getCenteredScrollLeft(index);

    if (!viewport || targetLeft === null) return;

    viewport.scrollTo({
      left: Math.max(0, targetLeft),
      behavior,
    });
  };

  const normalizeMobileIndex = (index: number) => {
    if (index < firstRealIndex) return index + realCount;
    if (index > lastRealIndex) return index - realCount;
    return index;
  };

  const findNearestMobileIndex = () => {
    const viewport = viewportRef.current;
    if (!viewport) return trackIndex;

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;

    let nearestIndex = trackIndex;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const settleMobileCarousel = () => {
    if (!isMobileViewport() || isMobileResetRef.current) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    const nearestIndex = findNearestMobileIndex();
    const normalizedIndex = normalizeMobileIndex(nearestIndex);

    if (normalizedIndex !== nearestIndex) {
      const firstRealCard = cardRefs.current[firstRealIndex];
      const matchingRightClone = cardRefs.current[firstRealIndex + realCount];

      if (firstRealCard && matchingRightClone) {
        const firstRealCenter =
          firstRealCard.offsetLeft + firstRealCard.offsetWidth / 2;
        const rightCloneCenter =
          matchingRightClone.offsetLeft + matchingRightClone.offsetWidth / 2;

        const cycleWidth = rightCloneCenter - firstRealCenter;

        if (cycleWidth > 0) {
          isMobileResetRef.current = true;

          if (nearestIndex < firstRealIndex) {
            viewport.scrollLeft += cycleWidth;
          } else if (nearestIndex > lastRealIndex) {
            viewport.scrollLeft -= cycleWidth;
          }

          requestAnimationFrame(() => {
            isMobileResetRef.current = false;
          });
        }
      }
    }

    navigationIndexRef.current = normalizedIndex;
    setTrackIndex(normalizedIndex);
    isAnimatingRef.current = false;
  };

  const handleMobileScroll = () => {
    if (!isMobileViewport() || isMobileResetRef.current) return;

    if (mobileScrollTimerRef.current) {
      clearTimeout(mobileScrollTimerRef.current);
    }

    mobileScrollTimerRef.current = setTimeout(
      settleMobileCarousel,
      140
    );
  };

  const handleMobileTouchStart = () => {
    if (!isMobileViewport()) return;

    if (mobileScrollTimerRef.current) {
      clearTimeout(mobileScrollTimerRef.current);
    }

    isAnimatingRef.current = false;
    setIsHovered(true);
  };

  const handleMobileTouchEnd = () => {
    if (!isMobileViewport()) return;

    if (mobileScrollTimerRef.current) {
      clearTimeout(mobileScrollTimerRef.current);
    }

    mobileScrollTimerRef.current = setTimeout(() => {
      settleMobileCarousel();
      setIsHovered(false);
    }, 180);
  };

  const moveByOneCard = (direction: -1 | 1) => {
    /*
      One click = exactly one testimonial.
      Rapid/double clicks are counted separately instead of being ignored.
    */
    const currentIndex = navigationIndexRef.current;
    const targetIndex = currentIndex + direction;

    if (targetIndex < 0 || targetIndex >= extendedTestimonials.length) {
      return;
    }

    navigationIndexRef.current = targetIndex;

    if (isMobileViewport()) {
      setTrackIndex(targetIndex);
      scrollMobileToIndex(targetIndex, "smooth");

      if (mobileScrollTimerRef.current) {
        clearTimeout(mobileScrollTimerRef.current);
      }

      mobileScrollTimerRef.current = setTimeout(
        settleMobileCarousel,
        520
      );
      return;
    }

    setTrackIndex(targetIndex);
  };

  const goToPreviousOnly = () => moveByOneCard(-1);
  const goToNextOnly = () => moveByOneCard(1);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      goToNextOnly();
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, trackIndex]);

  useEffect(() => {
    const recalculate = () => {
      const viewport = viewportRef.current;
      const activeCard = cardRefs.current[trackIndex];

      if (!viewport || !activeCard) return;

      if (isMobileViewport()) {
        const targetLeft = getCenteredScrollLeft(trackIndex);

        if (
          targetLeft !== null &&
          Math.abs(viewport.scrollLeft - targetLeft) > 1
        ) {
          isMobileResetRef.current = true;

          viewport.scrollTo({
            left: Math.max(0, targetLeft),
            behavior: "auto",
          });

          requestAnimationFrame(() => {
            isMobileResetRef.current = false;
          });
        }

        setTranslateX(0);
        return;
      }

      const viewportCenter = viewport.offsetWidth / 2;
      const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
      setTranslateX(viewportCenter - cardCenter);
    };

    recalculate();
    window.addEventListener("resize", recalculate);

    return () => window.removeEventListener("resize", recalculate);
  }, [trackIndex]);

  useEffect(() => {
    if (isMobileViewport()) return;

    const track = trackRef.current;
    if (!track) return;

    const handleTrackTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== "transform") return;

      const isPastEnd =
        trackIndex >= TESTIMONIAL_CLONE_COUNT + realCount;
      const isBeforeStart = trackIndex < TESTIMONIAL_CLONE_COUNT;

      if (isPastEnd || isBeforeStart) {
        const nextIndex = isPastEnd
          ? trackIndex - realCount
          : trackIndex + realCount;

        const viewport = viewportRef.current;
        const nextCard = cardRefs.current[nextIndex];

        flushSync(() => {
          setTransitionsEnabled(false);
          navigationIndexRef.current = nextIndex;
          setTrackIndex(nextIndex);

          if (viewport && nextCard) {
            const viewportCenter = viewport.offsetWidth / 2;
            const cardCenter =
              nextCard.offsetLeft + nextCard.offsetWidth / 2;

            setTranslateX(viewportCenter - cardCenter);
          }
        });
      } else {
        isAnimatingRef.current = false;
      }
    };

    track.addEventListener("transitionend", handleTrackTransitionEnd);

    return () =>
      track.removeEventListener(
        "transitionend",
        handleTrackTransitionEnd
      );
  }, [trackIndex, realCount]);

  useEffect(() => {
    if (transitionsEnabled) return;

    const raf = requestAnimationFrame(() => {
      setTransitionsEnabled(true);
      isAnimatingRef.current = false;
    });

    return () => cancelAnimationFrame(raf);
  }, [transitionsEnabled]);

  useEffect(() => {
    return () => {
      if (mobileScrollTimerRef.current) {
        clearTimeout(mobileScrollTimerRef.current);
      }
    };
  }, []);

  return (
    <section className={styles["testimonials-section"]} aria-labelledby="testimonials-heading" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onFocus={() => setIsHovered(true)} onBlur={() => setIsHovered(false)}>
      <div className={styles["testimonials-heading-block"]}>
        <span className={styles["testimonials-badge"]}>Testimonials</span>
        <h2 className={styles["testimonials-heading"]} id="testimonials-heading">
          Success Powered by <span className={styles["testimonials-heading-accent"]}>NeuroLXP</span>
        </h2>
        <p className={styles["testimonials-subtext"]}>
          NeuroLXP   made learning engaging, simple, and truly effective for our learners.
          {/* <sup className={styles["smv-badge-tm"]}>TM</sup>  */}
           {/* made learning engaging, simple, and truly effective for our learners. */}
        </p>
      </div>

      <span className={styles["sr-only"]} aria-live="polite" aria-atomic="true">
        {`Now showing testimonial from ${extendedTestimonials[trackIndex].name}`}
      </span>

      <div
        className={styles["testimonials-viewport"]}
        ref={viewportRef}
        onScroll={handleMobileScroll}
        onTouchStart={handleMobileTouchStart}
        onTouchEnd={handleMobileTouchEnd}
        onTouchCancel={handleMobileTouchEnd}
      >
        <div className={styles["testimonials-track"]} ref={trackRef} style={{
          transform: `translateX(${translateX}px)`,
          transition: transitionsEnabled ? undefined : "none",
        }}>
          {extendedTestimonials.map((testimonial, index) => {
            const isClone = index < TESTIMONIAL_CLONE_COUNT || index >= TESTIMONIAL_CLONE_COUNT + realCount;
            return (
              <div
                key={`${testimonial.id}-${index}`}
                aria-hidden={isClone}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}>
                <TestimonialCard {...testimonial} isClone={isClone} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles["testimonials-nav"]}>
        <button type="button" className={styles["testimonials-nav-button"]} onClick={goToPreviousOnly} aria-label="Previous testimonial">
          <ArrowLeftIcon className={styles["testimonials-nav-icon"]} />
        </button>
        <button type="button" className={styles["testimonials-nav-button"]} onClick={goToNextOnly} aria-label="Next testimonial">
          <ArrowRightIcon className={styles["testimonials-nav-icon"]} />
        </button>
      </div>
    </section>
  );
}

type FAQItemData = {
  id: number;
  number: string;
  title: string;
  mobileTitleLines: readonly [string, string];
  answer: string;
  colorStart: string;
  colorEnd: string;
};

const faqItems: FAQItemData[] = [
  {
    id: 1,
    number: "01",
    title: "What is NeuroLXP?",
    mobileTitleLines: ["What is", "NeuroLXP?"],
    answer: "NeuroLXP is a next-generation Learning Experience Platform (LXP) that transforms how organizations design, deliver, and manage learning through personalized, engaging, and scalable learning experiences",
    colorStart: "#2D4CC8",
    colorEnd: "#162562",
  },
  {
    id: 2,
    number: "02",
    title: "Who is NeuroLXP Designed for?",
    mobileTitleLines: ["Who is NeuroLXP", "Designed for?"],
    answer: "NeuroLXP is purpose-built for academic institutions, corporates, skilling academies, NGOs, trusts, and government skill development programs",
    colorStart: "#BF1869",
    colorEnd: "#590B31",
  },
  {
    id: 3,
    number: "03",
    title: "How Is NeuroLXP Different?",
    mobileTitleLines: ["How is NeuroLXP", "Different?"],
    answer: "Unlike a conventional LMS that focuses on course administration, NeuroLXP delivers learner-centric experiences through personalization, skill-based learning, collaboration, and continuous development",
    colorStart: "#861109",
    colorEnd: "#200402",
  },
  {
    id: 4,
    number: "04",
    title: "Why is NeuroLXP Groundbreaking?",
    mobileTitleLines: ["Why is NeuroLXP", "Groundbreaking?"],
    answer: "NeuroLXP reimagines digital learning by combining intelligent personalization, modern learning experiences, scalable architecture, and data-driven insights into a unified platform built for the future of education and workforce development",
    colorStart: "#162562",
    colorEnd: "#2D4CC8",
  },
  {
    id: 5,
    number: "05",
    title: "Who Can Use NeuroLXP?",
    mobileTitleLines: ["Who Can Use", "NeuroLXP?"],
    answer: "Yes, NeuroLXP is designed to scale effortlessly - from schools and universities to enterprises, skilling academies, NGOs, and nationwide government learning initiatives",
    colorStart: "#67096E",
    colorEnd: "#C712D4",
  },
];

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M5.51691 10.2668L18.5199 10.277C19.3481 10.2777 20.0188 10.9499 20.0177 11.7782C20.0164 12.6057 19.345 13.2757 18.5175 13.275L5.51456 13.2648C4.68667 13.2642 4.01605 12.5925 4.01671 11.7646C4.01736 10.9367 4.68902 10.2662 5.51691 10.2668Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M12.017 19.5737C12.8449 19.5743 13.5166 18.9038 13.5172 18.0759L13.5212 13.0729L18.5232 13.0768C19.3507 13.0774 20.0221 12.4075 20.0233 11.58C20.0245 10.7517 19.3537 10.0794 18.5255 10.0788L13.5235 10.0749L13.5274 5.0729C13.5281 4.24539 12.8581 3.57389 12.0306 3.57269C11.2023 3.5715 10.5301 4.24228 10.5294 5.07055L10.5255 10.0725L5.52254 10.0686C4.69466 10.0679 4.02299 10.7385 4.02234 11.5664C4.02169 12.3943 4.6923 13.0659 5.52018 13.0666L10.5232 13.0705L10.5192 18.0735C10.5186 18.9014 11.1891 19.573 12.017 19.5737Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FAQItem({ item, isOpen, onToggle }: { item: FAQItemData; isOpen: boolean; onToggle: () => void }) {
  const buttonId = `faq-question-${item.id}`;
  const panelId = `faq-answer-${item.id}`;

  return (
    <div className={styles["faq-item"]}>
      <h3 className={styles["faq-item-heading"]}>
        <button
          type="button"
          id={buttonId}
          className={styles["faq-item-header"]}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <div className={styles["faq-item-header-left"]}>
            <span className={styles["faq-item-triangle"]} style={{ borderLeftColor: item.colorStart }} aria-hidden="true" />
            <span
              className={styles["faq-item-number"]}
              style={{ backgroundImage: `linear-gradient(180deg, ${item.colorStart} 0%, ${item.colorEnd} 100%)` }}
              aria-hidden="true"
            >
              {item.number}
            </span>
            <span className={styles["faq-item-divider"]} style={{ backgroundImage: `linear-gradient(180deg, ${item.colorStart} 0%, ${item.colorEnd} 100%)` }} aria-hidden="true" />
            <span className={styles["faq-item-title"]}>
              {item.mobileTitleLines[0]}{" "}
              <br className={styles["faq-mobile-break"]} />
              {item.mobileTitleLines[1]}
            </span>
          </div>
          <span className={styles["faq-item-toggle"]} style={{ color: item.colorStart }} aria-hidden="true">
            {isOpen ? <MinusIcon className={styles["faq-item-toggle-icon"]} /> : <PlusIcon className={styles["faq-item-toggle-icon"]} />}
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={`${styles["faq-item-answer-wrapper"]}${isOpen ? ` ${styles["faq-item-answer-open"]}` : ""}`} aria-hidden={!isOpen}>
        <div className={styles["faq-item-answer-inner"]}>
          <p className={styles["faq-item-answer"]}>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const faqSectionRef = useRef<HTMLElement | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  useEffect(() => {
    const section = faqSectionRef.current;
    if (!section || activeIndex === -1) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the user leaves the FAQ section without closing the
        // currently open item, close it automatically.
        if (!entry.isIntersecting) {
          setActiveIndex(-1);
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [activeIndex]);

  return (
    <section
      ref={faqSectionRef}
      className={styles["faq-section"]}
      aria-labelledby="faq-heading"
    >
      <div className={styles["faq-card"]}>
        <div className={styles["faq-background-image"]} aria-hidden="true">
          <Image src="/images/fc52be16-4788-44b6-9212-f93370a7f939 2.webp" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className={styles["faq-background-photo"]} />
        </div>
        <div className={styles["faq-content"]}>
          <div className={styles["faq-left"]}>
            <h2 className={styles["faq-heading"]} id="faq-heading">
              Frequently Asked <span className={styles["faq-heading-accent"]}>Questions</span>
            </h2>
            <div className={styles["faq-illustration"]}>
              <Image src="/images/Adobe Express - file - 2026-07-02T153440.png" alt="Question and answer illustration" fill sizes="(max-width: 1024px) 100vw, 432px" className={styles["faq-illustration-image"]} />
            </div>
          </div>
          <div className={styles["faq-right"]}>
            {faqItems.map((item, index) => (
              <FAQItem key={item.id} item={item} isOpen={index === activeIndex} onToggle={() => handleToggle(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInTouch({ onContactClick, contactButtonRef }: { onContactClick: () => void; contactButtonRef: RefObject<HTMLButtonElement | null> }) {
  return (
    <section className={styles["get-in-touch-section"]} aria-labelledby="Get-in-touch-heading">
      <div className={styles["get-in-touch-blob"]} aria-hidden="true" />
      <div className={styles["get-in-touch-content"]}>
        <div className={styles["get-in-touch-text"]}>
          <span className={styles["get-in-touch-badge"]}>Get in Touch</span>
          <div className={styles["get-in-touch-copy"]}>
            <h2 className={styles["get-in-touch-heading"]} id="Get-in-touch-heading">
              Learn Smarter with <br />
              <span className={styles["get-in-touch-heading-accent"]}>NeuroLXP</span>
            </h2>
<p className={styles["get-in-touch-subtext"]}>
  Have questions?
  <br />
  Our experts are here to help.
</p>          </div>
          <button type="button" className={styles["get-in-touch-button"]} onClick={onContactClick} ref={contactButtonRef}>
            <span className={styles["get-in-touch-button-label"]}>Contact Us</span>
            <HeadphonesIcon className={styles["get-in-touch-button-icon"]} />
          </button>
        </div>
        <div className={styles["get-in-touch-media"]}>
          <div className={styles["get-in-touch-frame"]} />
          <div className={styles["get-in-touch-photo-wrapper"]}>
            <Image src="/images/business-partners-together-office-1.png" alt="Smiling businesswoman with glasses" fill sizes="(max-width: 480px) 280px, (max-width: 1024px) 380px, 677px" className={styles["get-in-touch-photo"]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactUsModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const focusTimer = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");

    return () => {
      window.cancelAnimationFrame(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  const modal = (
    <div
      className={styles["contact-modal-overlay"]}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={styles["contact-modal-dialog"]}
        role="dialog"
        aria-modal="true"
        aria-label="Contact us"
        ref={dialogRef}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles["contact-modal-close"]}
          onClick={onClose}
          aria-label="Close contact us form"
        >
          <CloseIcon className={styles["contact-modal-close-icon"]} />
        </button>

        <div className={styles["contact-modal-scroll"]}>
          <ContactUs />
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export default function HomePage() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const bookDemoButtonRef = useRef<HTMLButtonElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactButtonRef = useRef<HTMLButtonElement>(null);

  const openBookDemo = () => setIsBookDemoOpen(true);
  const closeBookDemo = () => {
    setIsBookDemoOpen(false);
    bookDemoButtonRef.current?.focus();
  };

  const openContactUs = () => setIsContactOpen(true);
  const closeContactUs = () => {
    flushSync(() => setIsContactOpen(false));
    window.requestAnimationFrame(() => contactButtonRef.current?.focus());
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const scrollToTarget = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timeoutId = window.setTimeout(scrollToTarget, 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <style jsx global>{`
        /* Keep the footer and its scroll control below every modal. The
           !important value intentionally overrides Footer's inline z-index. */
        footer[class*="nlxp-footer"] {
          z-index: 1 !important;
          overflow: visible !important;
        }

        /* Center the chevron on the footer edge: half above and half inside. */
        footer[class*="nlxp-footer"] button[class*="scroll-top-button"] {
  position: absolute !important;
  top: 0 !important;
  left: 50% !important;
  right: auto !important;
  bottom: auto !important;
  margin: 0 !important;
  translate: none !important;
  transform: translate(-50%, -50%) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 2 !important;
}
      `}</style>

      <Header />

      <main id="main-content" className={styles["home-expert-placement"]}>
      <HeroCarousel />
      <LearningOdyssey onBookDemoClick={openBookDemo} bookDemoButtonRef={bookDemoButtonRef} />
      <StoryMissionVision />
      <PlatformOverview />
      <PlatformPurpose />
      <MeetNeuroLXP />
      <WhyChooseNeuroLXP />
      <LearningModules />
      <Testimonials />
      <FAQSection />
      <GetInTouch onContactClick={openContactUs} contactButtonRef={contactButtonRef} />
      {isBookDemoOpen && <BookDemoModal onClose={closeBookDemo} />}
      {isContactOpen && <ContactUsModal onClose={closeContactUs} />}
    </main>

      <div className={styles["home-footer"]}>
        <Footer />
      </div>
    </>
  );
}
