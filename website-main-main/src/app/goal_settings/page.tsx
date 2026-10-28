"use client";

import type { NextPage } from "next";

import type { ReactNode } from "react";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

import styles from "./GoalsHero.module.css";

type Tone = "blue" | "pink" | "purple" | "orange" | "teal" | "green" | "gold";

const challengeCards = [

  {
  title: "Lack of Clarity",
  description: "Unclear goals hinder learning",
  icon: "/icons/compass.svg",
  tone: "blue" as Tone,
},
{
  title: "Prioritization",
  description: "Competing goals reduce focus",
  icon: "/icons/target-01-1-pink-big.svg",
  tone: "pink" as Tone,
},
{
  title: "Progress Visibility",
  description: "Difficulty tracking learning progress",
  icon: "/icons/chart-02.svg",
  tone: "purple" as Tone,
},
{
  title: "Execution Gaps",
  description: "Distractions disrupt learning plans",
  icon: "/icons/alert-01-1.svg",
  tone: "orange" as Tone,
},
{
  title: "Adaptability",
  description: "Changing goals demand flexibility",
  icon: "/icons/message-multiple-02.svg",
  tone: "teal" as Tone,
},

];

const goalCards = [

  {

    title: "Personalized Goals",

    description: <>Set academic and career<br />goals</>,

    icon: "/icons/target-01-pink.svg",

    tone: "pink" as Tone,

  },

  {

    title: "Smart Suggestions",

    description: <>Get Goals That <br />Matters</>,

    icon: "/icons/ai-sparkles.svg",

    tone: "blue" as Tone,

  },

  {

    title: "Plan & Schedule",

    description: <>Schedule learning and<br />milestones</>,

    icon: "/icons/calendar-03.svg",

    tone: "orange" as Tone,

  },

  {

    title: "Team Plans",

    description: <>Get Goals That Matter<br />Matter</>,

    icon: "/icons/university-usergroup.svg",

    tone: "purple" as Tone,

  },

  {

    title: "Review & Improve",

    description: <>Review, refine, and<br />improve</>,

    icon: "/icons/message-multiple-02.svg",

    tone: "teal" as Tone,

  },

];

const progressCards = [

  {

    title: "Increased Motivation",

    description: "Track milestones and learning activity",

    tone: "purple" as Tone,

  },

  {

    title: "Performance Analytics",

    description: "Identify strengths and learning gaps",

    tone: "pink" as Tone,

  },

  {

    title: "Competency Assessment",

    description: "Measure skills and competencies",

    tone: "teal" as Tone,

  },

  {

    title: "Behavioral Insights",

    description: "Understand engagement and learning patterns",

    tone: "orange" as Tone,

  },

  {

    title: "Predictive Analytics",

    description: "Spot challenges early and act proactively",

    tone: "gold" as Tone,

  },

];

const adaptiveItems = [

  {

    label: "Adaptive Paths",

    icon: "/icons/checkmark-circle-04-1.svg",

    tone: "blue" as Tone,

  },

  {

    label: "Smart Recommendations",

    icon: "/icons/checkmark-circle-04-2.svg",

    tone: "pink" as Tone,

  },

  {

    label: "Personalized Feedback",

    icon: "/icons/checkmark-circle-04-3.svg",

    tone: "purple" as Tone,

  },

  {

    label: "Continuous Improvement",

    icon: "/icons/checkmark-circle-04.svg",

    tone: "orange" as Tone,

  },

];

const benefitItems = [

  "Clear Direction",

  "Higher Motivation",

  "Better Time Management",

  "Data-Driven Decisions",

  "Continuous Improvement",

  "Career Readiness",

];

const journeyColumns = [

  ["Set Goals", "Explore Learn"],

  ["Track Progress", "Analyze Performance"],

  ["Create Plans", "Adapt & Improve"],

];

const trustItems = [

  { label: "AI / ML Powered", icon: "/icons/ai-book-blue.svg" },

  { label: "Learning Analytics", icon: "/icons/analytics-up.svg" },

  { label: "Privacy First", icon: "/icons/shield-check.svg" },

  { label: "Real-Time Insights", icon: "/icons/activity-01.svg" },

];

function SectionPill({ children }: { children: ReactNode }) {

  return <p className={styles.sectionPill}>{children}</p>;

}

function HeroPolygons() {

  return (

    <svg

      className={styles.heroPolygons}

      viewBox="0 0 1275 816"

      fill="none"

      aria-hidden="true"

      focusable="false"

      preserveAspectRatio="none"

    >

      <g filter="url(#goalHeroTopInset)">

        <path

          d="M630.033 0L1260.07 178V534L630.033 712L0 534V178L630.033 0Z"

          fill="#DFE6E9"

        />

      </g>

      <g filter="url(#goalHeroBottomInset)">

        <path

          d="M638.033 426L1260.07 523.5V718.5L638.033 816L1.9375 718.5V523.5L638.033 426Z"

          fill="#DFE6E9"

        />

      </g>

      <defs>

        <filter

          id="goalHeroTopInset"

          x="-8"

          y="-8"

          width="1276.07"

          height="728"

          filterUnits="userSpaceOnUse"

          colorInterpolationFilters="sRGB"

        >

          <feFlood floodOpacity="0" result="BackgroundImageFix" />

          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

          <feColorMatrix

            in="SourceAlpha"

            type="matrix"

            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

            result="hardAlpha"

          />

          <feOffset dx="8" dy="8" />

          <feGaussianBlur stdDeviation="8" />

          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />

          <feColorMatrix

            type="matrix"

            values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"

          />

          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />

          <feColorMatrix

            in="SourceAlpha"

            type="matrix"

            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

            result="hardAlpha2"

          />

          <feOffset dx="-8" dy="-8" />

          <feGaussianBlur stdDeviation="8" />

          <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />

          <feColorMatrix

            type="matrix"

            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

          />

          <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />

        </filter>

        <filter

          id="goalHeroBottomInset"

          x="-6.0625"

          y="418"

          width="1288.19"

          height="406"

          filterUnits="userSpaceOnUse"

          colorInterpolationFilters="sRGB"

        >

          <feFlood floodOpacity="0" result="BackgroundImageFix" />

          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

          <feColorMatrix

            in="SourceAlpha"

            type="matrix"

            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

            result="hardAlpha"

          />

          <feOffset dx="8" dy="8" />

          <feGaussianBlur stdDeviation="8" />

          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />

          <feColorMatrix

            type="matrix"

            values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"

          />

          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />

          <feColorMatrix

            in="SourceAlpha"

            type="matrix"

            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

            result="hardAlpha2"

          />

          <feOffset dx="-8" dy="-8" />

          <feGaussianBlur stdDeviation="8" />

          <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />

          <feColorMatrix

            type="matrix"

            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

          />

          <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />

        </filter>

      </defs>

    </svg>

  );

}

function StatCard({

  value,

  label,

  className,

  tone,

}: {

  value: string;

  label: string;

  className: string;

  tone: Tone;

}) {

  return (

    <article className={`${styles.statCard} ${styles[className]} ${styles[`tone${tone}`]}`}>

      <strong>{value}</strong>

      <span>{label}</span>

    </article>

  );

}

function FeatureIcon({ src, alt, tone }: { src: string; alt: string; tone: Tone }) {

  return (

    <span className={`${styles.featureIcon} ${styles[`tone${tone}`]}`}>

      <svg viewBox="0 0 74 74" fill="none" aria-hidden="true" focusable="false">

        <g filter="url(#featureIconInset)">

          <path

            d="M37 0L69.0433 18.5V55.5L37 74L4.9567 55.5V18.5L37 0Z"

            fill="#DFE6E9"

          />

        </g>

        <defs>

          <filter

            id="featureIconInset"

            x="-2"

            y="-2"

            width="78"

            height="78"

            filterUnits="userSpaceOnUse"

            colorInterpolationFilters="sRGB"

          >

            <feFlood floodOpacity="0" result="BackgroundImageFix" />

            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

            <feOffset dx="2" dy="2" />

            <feGaussianBlur stdDeviation="2" />

            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />

            <feColorMatrix

              type="matrix"

              values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"

            />

            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />

            <feOffset dx="-2" dy="-2" />

            <feGaussianBlur stdDeviation="2" />

            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />

            <feColorMatrix

              type="matrix"

              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

            />

            <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />

          </filter>

        </defs>

      </svg>

      <Image src={src} width={46} height={46} alt={alt} />

    </span>

  );

}

function HexagonFrame({ id }: { id: string }) {

  const outer = `outerHexagon-${id}`;

  const inner = `innerHexagon-${id}`;

  return (

    <svg

      className={styles.hexagonSvg}

      viewBox="0 0 371 371"

      fill="none"

      aria-hidden="true"

      focusable="false"

    >

      <g filter={`url(#${outer})`}>

        <path

          d="M185.5 24L347 117.25V253.75L185.5 347L24 253.75V117.25L185.5 24Z"

          fill="#DFE6E9"

        />

      </g>

      <g filter={`url(#${inner})`}>

        <path

          d="M183 56L313 131.06V240.94L183 316L53 240.94V131.06L183 56Z"

          fill="#DFE6E9"

        />

      </g>

      <defs>

        <filter

          id={outer}

          x="0"

          y="0"

          width="371"

          height="371"

          filterUnits="userSpaceOnUse"

          colorInterpolationFilters="sRGB"

        >

          <feFlood floodOpacity="0" result="BackgroundImageFix" />

          <feColorMatrix

            in="SourceAlpha"

            type="matrix"

            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

            result="hardAlpha"

          />

          <feOffset dx="8" dy="8" />

          <feGaussianBlur stdDeviation="8" />

          <feComposite in2="hardAlpha" operator="out" />

          <feColorMatrix

            type="matrix"

            values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"

          />

          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />

          <feColorMatrix

            in="SourceAlpha"

            type="matrix"

            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

            result="hardAlpha2"

          />

          <feOffset dx="-8" dy="-8" />

          <feGaussianBlur stdDeviation="8" />

          <feComposite in2="hardAlpha2" operator="out" />

          <feColorMatrix

            type="matrix"

            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

          />

          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />

          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />

        </filter>

        <filter

          id={inner}

          x="45"

          y="48"

          width="276"

          height="276"

          filterUnits="userSpaceOnUse"

          colorInterpolationFilters="sRGB"

        >

          <feFlood floodOpacity="0" result="BackgroundImageFix" />

          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

          <feOffset dx="8" dy="8" />

          <feGaussianBlur stdDeviation="8" />

          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />

          <feColorMatrix

            type="matrix"

            values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"

          />

          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />

          <feOffset dx="-8" dy="-8" />

          <feGaussianBlur stdDeviation="8" />

          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />

          <feColorMatrix

            type="matrix"

            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

          />

          <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />

        </filter>

      </defs>

    </svg>

  );

}

function GoalCard({

  id,

  title,

  description,

  icon,

  tone,

}: {

  id: string;

  title: string;

  description: ReactNode;

  icon: string;

  tone: Tone;

}) {

  return (

    <article className={`${styles.goalCard} ${styles[`tone${tone}`]}`}>

      <HexagonFrame id={id} />

      <div className={styles.goalCardContent}>

        <FeatureIcon src={icon} alt={title} tone={tone} />

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

    </article>

  );

}

function ProgressCard({

  title,

  description,

  tone,

}: {

  title: string;

  description: string;

  tone: Tone;

}) {

  return (

    <article className={`${styles.progressCard} ${styles[`tone${tone}`]}`}>

      <div className={styles.progressCap} data-scroll-reveal>

        <h3>{title}</h3>

      </div>

      <p>{description}</p>

    </article>

  );

}

function TrustCard({ label, icon }: { label: string; icon: string }) {

  return (

    <article className={styles.trustCard}>

      <div className={styles.trustCardInner}>

        <Image src={icon} width={24} height={24} alt="" aria-hidden="true" />

        <h3>{label}</h3>

      </div>

    </article>

  );

}

const GoalSettingsAndProgressTracking: NextPage = () => {

  const router = useRouter();

  useEffect(() => {

    const revealItems = Array.from(

      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")

    );

    if (!revealItems.length) return;

    let raf = 0;

    const update = () => {

      raf = 0;

      const viewportHeight = window.innerHeight;

      revealItems.forEach((item) => {

        const rect = item.getBoundingClientRect();

        const start = viewportHeight * 0.92;

        const end = viewportHeight * 0.42;

        const progress = (start - rect.top) / Math.max(1, start - end);

        const safe = Math.min(1, Math.max(0, progress));

        item.style.setProperty("--scroll-reveal", safe.toFixed(4));

      });

    };

    const requestUpdate = () => {

      if (!raf) raf = window.requestAnimationFrame(update);

    };

    update();

    window.addEventListener("scroll", requestUpdate, { passive: true });

    window.addEventListener("resize", requestUpdate);

    return () => {

      window.removeEventListener("scroll", requestUpdate);

      window.removeEventListener("resize", requestUpdate);

      if (raf) window.cancelAnimationFrame(raf);

    };

  }, []);

  return (

    <>

      <Header />

      <main id="main-content" className={styles.page}>

        <div className={styles.shell}>

          <nav className={styles.breadcrumb} aria-label="Breadcrumb">

            <span>Features</span>

            <Image

              src="/icons/arrow-right-double.svg"

              width={12}

              height={12}

              alt=""

              aria-hidden="true"

            />

            <span>Learning</span>

            <Image

              src="/icons/arrow-right-double.svg"

              width={12}

              height={12}

              alt=""

              aria-hidden="true"

            />

            <strong>Goals and Tracking</strong>

          </nav>

          <section className={styles.heroSection} aria-labelledby="goal-hero-heading">

            <HeroPolygons />

            <div className={styles.heroCopy}>

              <SectionPill>Goals and Tracking</SectionPill>

              <h1 id="goal-hero-heading">Set Clear Goals! Track Progress! <span className={styles.blueText}>Achieve It!</span></h1>

              <p>

                NeuroLXP helps learners set goals, create personalized plans, and track

                progress for continuous improvement and better outcomes.

              </p>

            </div>

            <div className={styles.statsStage}>

              <StatCard

                value="95%"

                label="Personalization"

                className="statLeft"

                tone="blue"

              />

              <StatCard

                value="38%"

                label="Progress Visibility"

                className="statTop"

                tone="pink"

              />

              <StatCard

                value="30%"

                label="Efficiency Gain"

                className="statRight"

                tone="purple"

              />

              <StatCard

                value="50%"

                label="Career Growth"

                className="statBottom"

                tone="green"

              />

            </div>

          </section>

          <section className={`${styles.section} ${styles.challengeSection}`}>

            <div className={styles.challengeText}>

              <SectionPill>The Challenge</SectionPill>

              <h2>

                Turning Learning Goals into Measurable{" "}

                <span className={styles.blueText}>Progress</span>

              </h2>

              <p>

                Unclear goals, competing priorities, and limited progress visibility can

                hinder learner motivation and outcomes.

              </p>

              <Image

                className={styles.challengeImage}

                data-scroll-reveal

                src="/images/flat-lay-statistics-presentation-with-chart-arrows 1.png"

                width={707}

                height={331}

                sizes="(max-width: 960px) 100vw, 707px"

                alt="Learning progress arrows chart"

              />

            </div>

            <div className={styles.challengeCards}>

              {challengeCards.map((card) => (

                <article

                  key={card.title}

                  className={`${styles.challengeCard} ${styles[`tone${card.tone}`]}`}

                >

                  <span className={styles.challengeIconCircle}>

                    <Image

                      src={card.icon}

                      width={42}

                      height={42}

                      alt=""

                      aria-hidden="true"

                    />

                  </span>

                  <div>

                    <h3>{card.title}</h3>

                    <p>{card.description}</p>

                  </div>

                </article>

              ))}

            </div>

          </section>

          <section className={`${styles.section} ${styles.centerSection}`}>

            <div className={styles.centerHeading}>

              <SectionPill>Goal Setting & Planning</SectionPill>

              <h2>From Aspirations to <span className={styles.blueText}>Action</span></h2>

              <p>

                NeuroLXP helps learners turn academic and career aspirations into clear,

                achievable goals with structured planning and personalized guidance.

              </p>

            </div>

            <div className={styles.goalCards}>

              <div className={styles.goalTopRow}>

                {goalCards.slice(0, 3).map((card, index) => (

                  <GoalCard

                    key={card.title}

                    id={`goal-${index + 1}`}

                    {...card}

                  />

                ))}

              </div>

              <div className={styles.goalBottomRow}>

                {goalCards.slice(3).map((card, index) => (

                  <GoalCard

                    key={card.title}

                    id={`goal-${index + 4}`}

                    {...card}

                  />

                ))}

              </div>

            </div>

          </section>

          <section className={`${styles.section} ${styles.centerSection}`}>

            <div className={styles.centerHeading}>

              <SectionPill>Progress Tracking</SectionPill>

              <h2>See Your Progress! Know What’s <span className={styles.blueText}>Next</span></h2>

              <p>

                Track performance, engagement, and achievements with real-time insights

                for better learning decisions.

              </p>

            </div>

            <div className={styles.progressCards}>

              <div className={styles.progressRow}>

                {progressCards.slice(0, 2).map((card) => (

                  <ProgressCard key={card.title} {...card} />

                ))}

              </div>

              <div className={styles.progressRow}>

                {progressCards.slice(2, 4).map((card) => (

                  <ProgressCard key={card.title} {...card} />

                ))}

              </div>

              <div className={styles.progressLastRow}>

                <ProgressCard {...progressCards[4]} />

              </div>

            </div>

          </section>

          <section className={`${styles.section} ${styles.adaptiveSection}`}>

            <div className={styles.adaptiveCopy}>

              <SectionPill>Adaptive Learning Experience</SectionPill>

              <h2>Learning That Adapts <span className={styles.mobileHeadingTail}>With <span className={styles.blueText}>You</span></span></h2>

              <p>

                NeuroLXP continuously connects goals, plans, and progress to create a

                more personalized learning experience.

              </p>

            </div>

            <div className={styles.adaptiveList}>

              {adaptiveItems.map((item) => (

                <div key={item.label} className={styles.adaptiveItem}>

                  <span

                    className={`${styles.adaptiveIconCircle} ${

                      styles[`tone${item.tone}`]

                    }`}

                  >

                    <span>

                      <Image

                        src={item.icon}

                        width={34}

                        height={34}

                        alt=""

                        aria-hidden="true"

                      />

                    </span>

                  </span>

                  <p>{item.label}</p>

                </div>

              ))}

            </div>

          </section>

          <section className={`${styles.section} ${styles.centerSection}`}>

            <div className={styles.centerHeadingCompact}>

              <SectionPill>Key Benefits</SectionPill>

              <h2>Why Goal Setting & Progress Tracking <span className={styles.blueText}>Matter</span></h2>

            </div>

            <div className={styles.benefitsFrame}>

              <div className={styles.benefitsInner}>

                <Image

                  className={styles.benefitsImage}

                  src="/images/two-office-workers-with-tablet-office-late-night-young-businessmen-talking-while-viewing-presentation-digital-touchscreen-tablet 1.png"

                  width={506}

                  height={573}

                  sizes="(max-width: 960px) 100vw, 606px"

                  alt="Goal setting and progress growth chart"

                />

                <div className={styles.benefitsList}>

                  {benefitItems.map((item) => (

                    <div key={item} className={styles.benefitItem}>

                      <Image

                        src="/icons/hand-pointing-right.svg"

                        width={32}

                        height={32}

                        alt=""

                        aria-hidden="true"

                      />

                      <p>{item}</p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </section>

          <section className={`${styles.section} ${styles.journeyTrustSection}`}>

            <div className={styles.journeyBlock}>

              <div className={styles.centerHeadingCompact}>

                <SectionPill>Personalized Learning Journey</SectionPill>

                <h2>One Connected Learning <span className={styles.blueText}>Journey</span></h2>

              </div>

              <div className={styles.journeyColumns}>

                {journeyColumns.map((column, columnIndex) => (

                  <div className={styles.journeyColumn} key={`journey-${columnIndex}`}>

                    {column.map((item) => (

                      <div

                        key={item}

                        className={styles.journeyItem}

                      >

                        <Image

                          src="/icons/checkmark-square-04.svg"

                          width={32}

                          height={32}

                          alt=""

                          aria-hidden="true"

                        />

                        <span>{item}</span>

                      </div>

                    ))}

                  </div>

                ))}

              </div>

            </div>

            <div className={styles.trustBlock}>
              <div
                className={styles.trustExpertButtonSlot}
                data-expert-button-slot
              />

              <div className={styles.trustHeading}>

                <SectionPill>Trust & Intelligence</SectionPill>

                <h2>

                  Personalized!

                  <br />

                  Intelligent! <span className={styles.blueText}>Secure!</span>

                </h2>

              </div>

              <div className={styles.trustGrid}>

                {trustItems.map((item) => (

                  <TrustCard key={item.label} {...item} />

                ))}

              </div>

            </div>

          </section>

          <section className={styles.ctaSection}>

            <Image

              className={styles.ctaBackground}

              src="/images/Frame 2095586948.webp"

              width={1420}

              height={500}

              sizes="100vw"

              alt=""

              aria-hidden="true"

            />

            <div className={styles.ctaCopy}>

              <h2>Progress With <span className={styles.blueText}>Purpose</span></h2>

              <p>

                NeuroLXP helps learners track progress, adapt, and achieve better

                outcomes.

              </p>

              <BookDemoTrigger className={styles.demoButton}>

                <span>Book a Demo</span>

              </BookDemoTrigger>

            </div>

            <Image

              className={styles.ctaPerson}

              src="/images/hand-holding-wooden-cube-with-target 1.webp"

              width={601}

              height={500}

              sizes="(max-width: 960px) 100vw, 601px"

              alt="Business professional selecting an idea"

            />

          </section>

        </div>

      </main>

      <Footer />

    </>

  );

};

export default GoalSettingsAndProgressTracking;
