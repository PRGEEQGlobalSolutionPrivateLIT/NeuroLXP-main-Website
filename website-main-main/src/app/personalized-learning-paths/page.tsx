"use client";

import { useEffect, useRef, useState, type ReactElement, type CSSProperties } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import styles from "./personalized_learning_paths.module.css";

function ArrowRightDouble() {

  return (

    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles["plp-breadcrumb-arrow"]} aria-hidden="true" focusable="false">

      <path d="M8.33398 12C8.33398 12 12.334 9.05407 12.334 8C12.334 6.94587 8.33398 4 8.33398 4" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M3.66605 12C3.66605 12 7.66602 9.05407 7.66602 8C7.66602 6.94587 3.66602 4 3.66602 4" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

type StageData = {

  number: string;

  color: string;

  stageLabel: string;

  title: string;

  subtitle: string;

  checklist: string[];

  note: string;

  mastery: number;

  ringChecklist: string[];

  modules: number;

  duration: string;

};

const stages: StageData[] = [

  {

    number: "01",

    color: "#BF1869",

    stageLabel: "STAGE 1",

    title: "Foundation",

    subtitle: "Build Core Knowledge and Conceptual Clarity",

    checklist: ["Core principles and essential knowledge", "Fundamental concepts and frameworks", "Foundational learning modules"],

    note: "This stage prepares learners for advanced skill development and deeper learning.",

    mastery: 25,

    ringChecklist: ["Core Concepts", "Frameworks", "Foundation", "Principle"],

    modules: 4,

    duration: "3 weeks",

  },

  {

    number: "02",

    color: "#2D4CC8",

    stageLabel: "STAGE 2",

    title: "Skill Development",

    subtitle: "Transform Knowledge into Practical Skills",

    checklist: ["Practical learning exercises", "Analytical thinking development", "Guided problem-solving activities"],

    note: "Learners start building real-world competencies and professional capabilities.",

    mastery: 50,

    ringChecklist: ["Problem Solving", "Analytics", "Applied Skills", "Practice"],

    modules: 6,

    duration: "4 weeks",

  },

  {

    number: "03",

    color: "#67096E",

    stageLabel: "STAGE 3",

    title: "Advanced Capability",

    subtitle: "Develop Expertise and Strategic Thinking",

    checklist: ["Complex learning scenarios", "Real-world application projects", "Strategic problem-solving frameworks"],

    note: "Learners strengthen professional confidence and advanced decision making skills.",

    mastery: 75,

    ringChecklist: ["Strategy", "Expert Thinking", "Leadership", "Decision Making"],

    modules: 8,

    duration: "5 weeks",

  },

  {

    number: "04",

    color: "#2A7308",

    stageLabel: "STAGE 4",

    title: "Performance Readiness",

    subtitle: "Prepare for Real-World Success",

    checklist: ["Project-based learning experiences", "Real-world implementations", "Capability validation and assessment"],

    note: "Learners complete their journey ready for confident professional performance.",

    mastery: 100,

    ringChecklist: ["Capstone Projects", "Assessment", "Career Readiness", "Validation"],

    modules: 10,

    duration: "6 weeks",

  },

];

function CheckCircle({ color, size = 24 }: { color: string; size?: number }) {

  return (

    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={styles["plp-check-icon"]} aria-hidden="true" focusable="false">

      <circle cx="12" cy="12" r="10" fill={color} />

      <path d="M8 12.5L10.5 15L16 9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function ArrowRightBig({ color }: { color: string }) {

  return (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles["plp-stage-arrow"]} aria-hidden="true" focusable="false">

      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function CheckCircleOutline({ color }: { color: string }) {

  return (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles["plp-check-icon"]} aria-hidden="true" focusable="false">

      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />

      <path d="M8 12.5L10.5 15L16 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function ChevronDouble() {

  return (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">

      <path d="M5 6l7 5.5L19 6" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M5 12.5l7 5.5 7-5.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function ClipboardCheckIcon({ color }: { color: string }) {

  return (

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">

      <path d="M12 6H20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M13 6a3 3 0 0 1 6 0" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M12.5 18l2.5 2.5L20 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function AnalyticsUpIcon({ color }: { color: string }) {

  return (

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">

      <rect x="5" y="5" width="22" height="22" rx="4" stroke={color} strokeWidth="2" />

      <path d="M9 20v-4M15 20v-8M21 20v-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M9 12l5-4 4 3 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function UserIcon({ color }: { color: string }) {

  return (

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">

      <circle cx="16" cy="11" r="5" stroke={color} strokeWidth="2" />

      <path d="M6 27c0-5.523 4.477-9 10-9s10 3.477 10 9" stroke={color} strokeWidth="2" strokeLinecap="round" />

    </svg>

  );

}

function RefreshIcon({ color }: { color: string }) {

  return (

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">

      <path d="M6 16a10 10 0 0 1 17-7.1L26 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M26 6v6h-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M26 16a10 10 0 0 1-17 7.1L6 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M6 26v-6h6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function ActivityIcon({ color }: { color: string }) {

  return (

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">

      <path d="M4 16h5l3-9 6 18 3-9h7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function TargetIcon({ color }: { color: string }) {

  return (

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">

      <circle cx="14" cy="18" r="10" stroke={color} strokeWidth="2" />

      <circle cx="14" cy="18" r="4" stroke={color} strokeWidth="2" />

      <path d="M21 11l5-5m0 0h-4m4 0v4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function MasteryRing({ percent, color }: { percent: number; color: string }) {

  const radius = 78;

  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percent / 100) * circumference;

  return (

    <div className={styles["plp-mastery-ring-base"]}>

      <div className={styles["plp-mastery-ring"]}>

        <svg width="176" height="176" viewBox="0 0 176 176" className={styles["plp-mastery-ring-svg"]} aria-hidden="true" focusable="false">

          <circle cx="88" cy="88" r={radius} stroke={color} strokeOpacity="0.08" strokeWidth="20" fill="none" />

          <circle cx="88" cy="88" r={radius} stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 88 88)" />

        </svg>

        <div className={styles["plp-mastery-ring-label"]}>

          <span className={styles["plp-mastery-ring-percent"]} style={{ color }}>

            {percent}%

          </span>

          <span className={styles["plp-mastery-ring-text"]}>Mastery</span>

        </div>

      </div>

    </div>

  );

}

function StageCard({ stage }: { stage: StageData }) {

  return (

    <div className={styles["plp-stage-row"]}>

      <div className={styles["plp-stage-marker"]}>

        <div className={styles["plp-stage-circle-outer"]}>

          <div className={styles["plp-stage-circle"]} style={{ borderColor: stage.color }}>

            <span className={styles["plp-stage-number"]} style={{ color: stage.color }}>

              {stage.number}

            </span>

          </div>

        </div>

      </div>

      <div className={styles["plp-stage-card"]}>

        <div className={styles["plp-stage-content"]}>

          <span className={styles["plp-stage-label"]} style={{ color: stage.color }}>

            {stage.stageLabel}

          </span>

          <h3 className={styles["plp-stage-title"]}>{stage.title}</h3>

          <p className={styles["plp-stage-subtitle"]}>{stage.subtitle}</p>

          <ul className={styles["plp-stage-checklist"]}>

            {stage.checklist.map((item) => (

              <li key={item} className={styles["plp-stage-checklist-item"]} style={{ "--stage-accent": stage.color } as CSSProperties}>

                <CheckCircle color="#2A7308" />

                <span>{item}</span>

              </li>

            ))}

          </ul>

          <div className={styles["plp-stage-divider"]} style={{ borderColor: stage.color }} />

          <div className={styles["plp-stage-note-row"]}>

            <ArrowRightBig color={stage.color} />

            <p className={styles["plp-stage-note"]}>{stage.note}</p>

          </div>

        </div>

        <div className={styles["plp-stage-side"]}>

          <div className={styles["plp-stage-ring-row"]}>

            <MasteryRing percent={stage.mastery} color={stage.color} />

            <ul className={styles["plp-stage-ring-checklist"]}>

              {stage.ringChecklist.map((item) => (

                <li key={item} className={styles["plp-stage-ring-checklist-item"]}>

                  <span className={styles["plp-ring-check-icon-wrap"]}>

                    <CheckCircleOutline color="#2A7308" />

                  </span>

                  <span className={styles["plp-ring-check-label"]}>{item}</span>

                </li>

              ))}

            </ul>

          </div>

          <div className={styles["plp-stage-stats"]}>

            <div className={styles["plp-stage-stat"]}>

              <span className={styles["plp-stage-stat-value"]} style={{ color: stage.color }}>

                {stage.modules}

              </span>

              <span className={styles["plp-stage-stat-label"]}>Modules</span>

            </div>

            <div className={styles["plp-stage-stat"]}>

              <span className={styles["plp-stage-stat-value"]} style={{ color: stage.color }}>

                {stage.duration}

              </span>

              <span className={styles["plp-stage-stat-label"]}>Duration</span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

type HowItWorksStep = {

  key: string;

  color: string;

  title: string;

  description: string;

  Icon: (props: { color: string }) => ReactElement;

};

const howItWorksSteps: HowItWorksStep[] = [

  { key: "assess", color: "#2D4CC8", title: "Assess", description: "Understand learner needs, knowledge, and goals", Icon: ClipboardCheckIcon },

  { key: "analyse", color: "#BF1869", title: "Analyse", description: "Use learning data to identify progress and gaps", Icon: AnalyticsUpIcon },

  { key: "personalize", color: "#67096E", title: "Personalize", description: "Recommend relevant content and learning activities", Icon: UserIcon },

  { key: "adapt", color: "#C05512", title: "Adapt", description: "Adjust the learning journey based on performance", Icon: RefreshIcon },

  { key: "track", color: "#2A7308", title: "Track", description: "Monitor progress throughout the learning journey", Icon: ActivityIcon },

  { key: "master", color: "#907507", title: "Master", description: "Build validated skills for real world application", Icon: TargetIcon },

];

const challengeItems = ["Clear Milestones", "Logical Progression", "Competency Development", "Continuous Analytics"];

type BenefitTab = {

  id: string;

  label: string;

  imageStyle: "cutout" | "cover";

  photo: string;

  photoAlt: string;

  checklist: string[];

};

const benefitTabs: BenefitTab[] = [

  {

    id: "learners",

    label: "For Learners",

    imageStyle: "cutout",

    photo: "/images/group-friends-ready-study 1.png",

    photoAlt: "Two students holding books",

    checklist: ["Clear Learning Journey", "Greater Confidence", "Practical Skill Development", "Faster Career Readiness"],

  },

  {

    id: "institutions",

    label: "Educational Institutions",

    imageStyle: "cover",

    photo: "/images/educational_institute.png",

    photoAlt: "Three students walking down campus steps",

    checklist: ["Structured curriculum delivery", "Competency-based learning", "Measurable learner outcomes", "Progress visibility"],

  },

  {

    id: "organizations",

    label: "Training Organizations",

    imageStyle: "cover",

    photo: "/images/training_organization.png",

    photoAlt: "Corporate trainer presenting to a seated group in an office",

    checklist: ["Standardized Learning Journeys", "Skill-based development", "Performance tracking", "Scalable training"],

  },

];

function HowItWorksCard({ step, isOpen, onToggle }: { step: HowItWorksStep; isOpen: boolean; onToggle: () => void }) {

  const { Icon } = step;

  return (

    <div className={`${styles["plp-how-card"]}${isOpen ? ` ${styles["plp-how-card-open"]}` : ""}`}>

      <button type="button" className={styles["plp-how-card-trigger"]} onClick={onToggle} aria-expanded={isOpen}>

        <span className={styles["plp-how-icon-title"]}>

          <span className={styles["plp-how-icon-circle"]} style={{ borderColor: step.color }}>

            <Icon color={step.color} />

          </span>

          <span className={styles["plp-how-title"]} style={{ color: step.color }}>

            {step.title}

          </span>

        </span>

        <span className={`${styles["plp-how-chevron"]}${isOpen ? ` ${styles["plp-how-chevron-open"]}` : ""}`}>

          <ChevronDouble />

        </span>

      </button>

      <div className={styles["plp-how-panel-wrap"]} aria-hidden={!isOpen}>

        <div className={styles["plp-how-panel"]}>

          <div className={styles["plp-how-panel-inner"]}>

            <p className={styles["plp-how-panel-text"]}>{step.description}</p>

          </div>

        </div>

      </div>

    </div>

  );

}

function BenefitsSection() {

  const [activeTabId, setActiveTabId] = useState<string>("");

  const [photoRatios, setPhotoRatios] = useState<Record<string, number>>({});

  const activeTab = benefitTabs.find((tab) => tab.id === activeTabId) ?? benefitTabs.find((tab) => tab.id === "learners")!;

  const recordPhotoRatio = (image: HTMLImageElement) => {

    if (!image.naturalWidth || !image.naturalHeight) return;

    const ratio = image.naturalWidth / image.naturalHeight;

    setPhotoRatios((previous) =>

      previous[activeTab.id] === ratio ? previous : { ...previous, [activeTab.id]: ratio },

    );

  };

  return (

    <section className={styles["plp-benefits"]}>

        <div

          className={styles["plpBenefitsExpertButtonSlot"]}

          data-expert-button-slot

        />

      <span className={styles["plp-hero-pill"]}>Benefits</span>

      <div className={styles["plp-section-intro"]}>

        <h2 className={styles["plp-section-heading"]}>Benefits of Learning <span className={styles["plp-section-heading-accent"]}>Paths</span></h2>

        <p className={styles["plp-section-subtext"]}>Whether you are a learner, an academic institution, or a corporate training organization NeuroLXP Learning Paths deliver measurable, transformational impact.</p>

      </div>

      <div className={styles["plp-benefits-tabs"]}>

        {benefitTabs.map((tab) => (

          <button key={tab.id} type="button" className={`${styles["plp-benefits-tab"]}${activeTabId === tab.id ? ` ${styles["plp-benefits-tab-active"]}` : ""}`} onClick={() => setActiveTabId(tab.id)} aria-pressed={activeTabId === tab.id}>

            {tab.label}

          </button>

        ))}

      </div>

      <div className={styles["plp-benefits-outer"]}>

        <div

          className={styles["plp-benefits-photo-wrap"]}

          style={{

            aspectRatio: photoRatios[activeTab.id] ?? 4 / 3,

            padding: activeTab.id === "institutions" ? undefined : 0,

          }}

        >

          <div

            className={styles["plp-benefits-cutout-photo-wrap"]}

            style={activeTab.id === "institutions" ? undefined : {

              inset: 0,

              borderRadius: "inherit",

              overflow: "hidden",

            }}

          >

            <Image key={activeTab.photo} src={activeTab.photo} alt={activeTab.photoAlt} fill className={styles["plp-benefits-cover-photo"]} onLoad={(event) => recordPhotoRatio(event.currentTarget)} />

          </div>

        </div>

        <ul className={styles["plp-benefits-checklist-grid"]}>

          {activeTab.checklist.map((item) => (

            <li key={item} className={styles["plp-benefits-checklist-item"]}>

              <span className={styles["plp-benefits-badge"]}>

                <CheckCircle color="#2A7308" size={24} />

              </span>

              <span className={styles["plp-benefits-item-label"]}>{item}</span>

            </li>

          ))}

        </ul>

      </div>

    </section>

  );

}

export default function PersonalizedLearningPathsPage() {

  const [openSteps, setOpenSteps] = useState<Set<string>>(() => new Set());

  const howSectionRef = useRef<HTMLElement | null>(null);

  const toggleStep = (key: string) => {

    setOpenSteps((previous) => {

      const next = new Set(previous);

      if (next.has(key)) next.delete(key);

      else next.add(key);

      return next;

    });

  };

  useEffect(() => {

    const section = howSectionRef.current;

    if (!section) return;

    const closeSteps = () => {

      setOpenSteps((previous) => (previous.size === 0 ? previous : new Set<string>()));

    };

    // Close once the section leaves the main viewing area, in either scroll direction.

    // Observe the section, not individual cards, so moving between cards is safe.

    const observer = new IntersectionObserver(

      (entries) => {

        for (const entry of entries) {

          if (entry.target === section && !entry.isIntersecting) closeSteps();

        }

      },

      { threshold: 0, rootMargin: "-12% 0px -12% 0px" },

    );

    observer.observe(section);

    // Reset when navigating or interacting with another page section, too.

    const handleSectionChange = (event: Event) => {

      const target = event.target;

      if (!(target instanceof Element) || section.contains(target)) return;

      closeSteps();

    };

    document.addEventListener("pointerdown", handleSectionChange, true);

    document.addEventListener("focusin", handleSectionChange, true);

    return () => {

      observer.disconnect();

      document.removeEventListener("pointerdown", handleSectionChange, true);

      document.removeEventListener("focusin", handleSectionChange, true);

    };

  }, []);

  const router = useRouter();

  useEffect(() => {

    document.title = "Personalized Learning Paths | NeuroLXP";

  }, []);

  return (

    <>

      <Header />

      <main className={styles["plp-page"]}>

      <nav className={styles["plp-breadcrumb"]}>

        <span className={styles["plp-breadcrumb-item"]}>Features</span>

        <ArrowRightDouble />

        <span className={styles["plp-breadcrumb-item"]}>Learning</span>

        <ArrowRightDouble />

        <span className={styles["plp-breadcrumb-current"]}>Personalized Learning Paths</span>

      </nav>

      <section className={styles["plp-hero"]}>

        <span className={styles["plp-hero-pill"]}>Personalized Learning Paths</span>

        <div className={styles["plp-section-intro"]}>

          <h1 className={styles["plp-hero-heading"]}>

            Empower <span className={styles["plp-hero-heading-accent"]}>Learning Journey</span> Tailored for Success

          </h1>

          <p className={styles["plp-hero-subtext"]}>NeuroLXP personalizes learning journeys to build skills, knowledge, and career readiness.</p>

        </div>

        <div className={styles["plp-hero-visual"]}>

          <div className={styles["plp-hero-image-frame"]}>

            <div className={styles["plp-hero-image-wrap"]}>


<Image
  src="/images/roommates-using-laptop-living-room 1.png"
  alt="Learner using a laptop"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="eager"
  className={styles["plp-hero-image"]}
/>

            </div>

          </div>

          <div className={styles["plp-hero-stats"]}>

            <div className={`${styles["plp-stat-card"]} ${styles["plp-stat-card-green"]}`}>

              <span className={`${styles["plp-stat-value"]} ${styles["plp-stat-green"]}`}>20–30%</span>

              <span className={styles["plp-stat-label"]}>Improved Engagement</span>

            </div>

            <div className={`${styles["plp-stat-card"]} ${styles["plp-stat-card-blue"]}`}>

              <span className={`${styles["plp-stat-value"]} ${styles["plp-stat-blue"]}`}>25–35%</span>

              <span className={styles["plp-stat-label"]}>Enhanced Retention</span>

            </div>

            <div className={`${styles["plp-stat-card"]} ${styles["plp-stat-card-purple"]}`}>

              <span className={`${styles["plp-stat-value"]} ${styles["plp-stat-purple"]}`}>15–20%</span>

              <span className={styles["plp-stat-label"]}>Higher Success Rates</span>

            </div>

            <div className={`${styles["plp-stat-card"]} ${styles["plp-stat-card-pink"]}`}>

              <span className={`${styles["plp-stat-value"]} ${styles["plp-stat-pink"]}`}>60–70%</span>

              <span className={styles["plp-stat-label"]}>Dominant Style Learners</span>

            </div>

          </div>

        </div>

      </section>

      <section className={styles["plp-personalization"]}>

        <span className={styles["plp-hero-pill"]}>Intelligent Personalization</span>

        <div className={styles["plp-section-intro"]}>

          <h2 className={styles["plp-section-heading"]}>

            Learning Designed Around Every <span className={styles["plp-section-heading-accent"]}>Learner</span>

          </h2>

          <p className={styles["plp-section-subtext"]}>NeuroLXP adapts learning experiences based on learner needs, preferences, progress, and performance.</p>

        </div>

        <div className={styles["plp-personalization-grid"]}>

          <div className={`${styles["plp-personalization-card"]} ${styles["plp-personalization-card-pink"]}`}>

            <h3 className={`${styles["plp-personalization-title"]} ${styles["plp-title-pink"]}`}>Learning Insights</h3>

            <p className={styles["plp-personalization-desc"]}>Understand learner needs</p>

          </div>

          <div className={`${styles["plp-personalization-card"]} ${styles["plp-personalization-card-blue"]}`}>

            <h3 className={`${styles["plp-personalization-title"]} ${styles["plp-title-blue"]}`}>Personalized Paths</h3>

            <p className={styles["plp-personalization-desc"]}>Personalize learning paths</p>

          </div>

          <div className={`${styles["plp-personalization-card"]} ${styles["plp-personalization-card-purple"]}`}>

            <h3 className={`${styles["plp-personalization-title"]} ${styles["plp-title-purple"]}`}>Adaptive Learning</h3>

            <p className={styles["plp-personalization-desc"]}>Deliver relevant content</p>

          </div>

          <div className={`${styles["plp-personalization-card"]} ${styles["plp-personalization-card-olive"]}`}>

            <h3 className={`${styles["plp-personalization-title"]} ${styles["plp-title-olive"]}`}>Learning Analytics</h3>

            <p className={styles["plp-personalization-desc"]}>Improve outcomes with data</p>

          </div>

        </div>

      </section>

      <section className={styles["plp-stages"]}>

        <span className={styles["plp-hero-pill"]}>Stages</span>

        <div className={styles["plp-section-intro"]}>

          <h2 className={styles["plp-section-heading"]}>Four Progressive Stages of <span className={styles["plp-section-heading-accent"]}>Mastery</span></h2>

          <p className={styles["plp-section-subtext"]}>NeuroLXP builds knowledge and skills through structured stages toward career-ready performance.</p>

        </div>

        <div className={styles["plp-stages-timeline"]}>

          <div className={styles["plp-stages-track"]} />

          {stages.map((stage) => (

            <StageCard key={stage.number} stage={stage} />

          ))}

        </div>

      </section>

      <section ref={howSectionRef} className={styles["plp-how"]}>

        <span className={styles["plp-hero-pill"]}>How it Works</span>

        <div className={styles["plp-section-intro"]}>

          <h2 className={styles["plp-section-heading"]}>Learning Style Analysis <span className={styles["plp-section-heading-accent"]}>Module</span></h2>

          <p className={styles["plp-section-subtext"]}>Learning style analysis identifies each learner's preferred learning style to deliver more effective and personalized learning.</p>

        </div>

        <div className={styles["plp-how-grid"]}>

          {howItWorksSteps.map((step) => (

            <HowItWorksCard key={step.key} step={step} isOpen={openSteps.has(step.key)} onToggle={() => toggleStep(step.key)} />

          ))}

        </div>

      </section>

      <section className={styles["plp-challenge"]}>

        <div className={styles["plp-challenge-left"]}>

          <span className={styles["plp-hero-pill"]}>The Challenge</span>

          <div className={styles["plp-section-intro"]}>

            <h2 className={styles["plp-challenge-heading"]}>Built for Measurable <span className={styles["plp-section-heading-accent"]}>Progress</span></h2>

            <p className={styles["plp-challenge-subtext"]}>NeuroLXP brings clarity, structure, and measurable progress to every learning journey.</p>

          </div>

        </div>

        <ul className={styles["plp-challenge-checklist"]}>

          {challengeItems.map((item) => (

            <li key={item} className={styles["plp-challenge-item"]}>

              <span className={styles["plp-challenge-badge-outer"]}>

                <span className={styles["plp-challenge-badge-inner"]}>

                  <CheckCircle color="#2A7308" size={36} />

                </span>

              </span>

              <span className={styles["plp-challenge-item-label"]}>{item}</span>

            </li>

          ))}

        </ul>

      </section>

      <BenefitsSection />

      <section className={styles["plp-cta"]}>

        <div className={styles["plp-cta-inner"]}>

          <div className={styles["plp-cta-text"]}>

            <h2 className={styles["plp-cta-heading"]}>The Future of Learning is <span className={styles["plp-section-heading-accent"]}>Personalized</span></h2>

            <p className={styles["plp-cta-subtext"]}>Transform fragmented learning into a structured journey that builds knowledge, skills, and career-ready capabilities.</p>

          </div>

          <button type="button" className={styles["plp-cta-button"]} onClick={() => router.push("/HomePage")}>

            Explore Learning Paths

          </button>

        </div>

      </section>

      </main>

      <Footer />

    </>

  );

}
