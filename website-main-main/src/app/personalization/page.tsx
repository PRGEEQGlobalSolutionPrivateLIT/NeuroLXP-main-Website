"use client";

import Image from "next/image";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

import { useEffect } from "react";

import styles from "./personlization.module.css";

export default function Personalization() {

  useEffect(() => {

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".frameParent21 > article"));

    const cardGroup = document.querySelector<HTMLElement>(".frameParent21");

    if (!cards.length || !cardGroup) return;

    const timers: number[] = [];

    const clearTimers = () => {

      timers.forEach((timer) => window.clearTimeout(timer));

      timers.length = 0;

    };

    const resetCards = () => {

      clearTimers();

      cards.forEach((card) => {

        card.classList.remove("windCardVisible");

      });

    };

    const playAnimation = () => {

      resetCards();

      requestAnimationFrame(() => {

        cards.forEach((card, index) => {

          const timer = window.setTimeout(() => {

            card.classList.add("windCardVisible");

          }, index * 280);

          timers.push(timer);

        });

      });

    };

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          playAnimation();

        } else {

          resetCards();

        }

      },

      {

        threshold: 0.2,

        rootMargin: "0px 0px -6% 0px",

      },

    );

    observer.observe(cardGroup);

    return () => {

      clearTimers();

      observer.disconnect();

    };

  }, []);

  return (

    <>

      <Header />

      <a className={styles.skipLink} href="#main-content">

        Skip to main content

      </a>

      <main id="main-content" className={styles.personalization} tabIndex={-1}>

        <nav

          className={styles.frameParent3}

          aria-label="Breadcrumb"

          style={{

            display: "flex",

            alignItems: "center",

            gap: "8px",

            position: "absolute",

            top: "12px",

            left: "max(20px, calc((100% - 1280px) / 2 + 20px))",

            margin: 0,

            padding: 0,

            zIndex: 1000,

            fontFamily: '"Segoe UI", "Inter"',

            fontSize: "14px",

            lineHeight: "20px",

            letterSpacing: "0.02em",

          }}

        >

          <span

            className={styles.learning}

            style={{

              fontFamily: '"Segoe UI", "Inter"',

              fontWeight: 400,

              fontSize: "14px",

              lineHeight: "20px",

              letterSpacing: "0.02em",

              color: "#2f3547",

              whiteSpace: "nowrap",

            }}

          >

            Features

          </span>

          <Image

            className={styles.arrowDown01Icon}

            src="/icons/arrow-right-double.svg"

            width={16}

            height={16}

            alt=""

            aria-hidden="true"

            style={{ flexShrink: 0 }}

          />

          <span

            className={styles.learning}

            style={{

              fontFamily: '"Segoe UI", "Inter"',

              fontWeight: 400,

              fontSize: "14px",

              lineHeight: "20px",

              letterSpacing: "0.02em",

              color: "#2f3547",

              whiteSpace: "nowrap",

            }}

          >

            Learning

          </span>

          <Image

            className={styles.arrowDown01Icon}

            src="/icons/arrow-right-double.svg"

            width={16}

            height={16}

            alt=""

            aria-hidden="true"

            style={{ flexShrink: 0 }}

          />

          <span

            style={{

              fontFamily: '"Segoe UI", "Inter"',

              fontWeight: 700,

              fontSize: "16px",

              lineHeight: "20px",

              letterSpacing: "0.02em",

              color: "#243fa8",

              whiteSpace: "nowrap",

            }}

          >

            Personalization

          </span>

        </nav>

        <section className={styles.personalizationHero} aria-labelledby="personalization-hero-title">

          <svg className={styles.personalizationHeroFrame} width="1488" height="863" viewBox="24 0 1440 863" preserveAspectRatio="none" fill="none" xmlns="http\\://www.w3.org/2000/svg" xmlnsXlink="http\\://www.w3.org/1999/xlink" aria-hidden="true" focusable="false">

            <g filter="url(#filter0_dd_3295_67)">

              <path d="M24 32C24 27.5817 27.5817 24 32 24H1456C1460.42 24 1464 27.5817 1464 32V681.387C1464 686.704 1459.01 690.583 1453.88 689.163C1387.61 670.797 1010.1 569.46 748 569.256C484.833 569.051 100.788 670.948 34.0624 689.214C28.9448 690.615 24 686.73 24 681.425V32Z" fill="#DFE6E9" />

              <path d="M24 32C24 27.5817 27.5817 24 32 24H1456C1460.42 24 1464 27.5817 1464 32V681.387C1464 686.704 1459.01 690.583 1453.88 689.163C1387.61 670.797 1010.1 569.46 748 569.256C484.833 569.051 100.788 670.948 34.0624 689.214C28.9448 690.615 24 686.73 24 681.425V32Z" fill="url(#pattern0_3295_67)" fillOpacity="0.15" />

            </g>

            <g filter="url(#filter1_dd_3295_67)">

              <path d="M25 715.364C25 711.754 27.2797 708.63 30.7696 707.704C83.6321 693.672 487.996 588.726 755.577 589.001C1018.9 589.271 1406.97 693.551 1458.32 707.672C1461.77 708.622 1464 711.722 1464 715.305V830.975C1464 835.392 1460.69 838.974 1456.27 838.974C1398 838.982 1022.63 839.029 755.577 838.973C487.14 838.918 92.5265 838.964 32.7129 838.972C28.2942 838.973 25 835.391 25 830.972V715.364Z" fill="#DFE6E9" />

            </g>

            <defs>

              <filter id="filter0_dd_3295_67" x="0" y="0" width="1488" height="713.504" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">

                <feFlood floodOpacity="0" result="BackgroundImageFix" />

                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

                <feOffset dx="8" dy="8" />

                <feGaussianBlur stdDeviation="8" />

                <feComposite in2="hardAlpha" operator="out" />

                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />

                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3295_67" />

                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

                <feOffset dx="-8" dy="-8" />

                <feGaussianBlur stdDeviation="8" />

                <feComposite in2="hardAlpha" operator="out" />

                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />

                <feBlend mode="normal" in2="effect1_dropShadow_3295_67" result="effect2_dropShadow_3295_67" />

                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3295_67" result="shape" />

              </filter>

              <pattern id="pattern0_3295_67" patternContentUnits="objectBoundingBox" width="0.0583333" height="0.131737">

                <use xlinkHref="#image0_3295_67" transform="scale(0.000694444 0.00149701)" />

              </pattern>

              <filter id="filter1_dd_3295_67" x="1" y="565" width="1487" height="298" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">

                <feFlood floodOpacity="0" result="BackgroundImageFix" />

                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

                <feOffset dx="8" dy="8" />

                <feGaussianBlur stdDeviation="8" />

                <feComposite in2="hardAlpha" operator="out" />

                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />

                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3295_67" />

                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

                <feOffset dx="-8" dy="-8" />

                <feGaussianBlur stdDeviation="8" />

                <feComposite in2="hardAlpha" operator="out" />

                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />

                <feBlend mode="normal" in2="effect1_dropShadow_3295_67" result="effect2_dropShadow_3295_67" />

                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3295_67" result="shape" />

              </filter>

              <image id="image0_3295_67" width="84" height="88" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAPVJREFUeAHt26ENgEAUBcE7Ql8kFE5CZaAwSLICMaPQm8+5N4/jvAaZZZBan4993+bgs+dPd6ExQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhsWtK1XGhM0Jigsd/vO99v/N83qS40JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSNCRoTNCZoTNCYoDFBY4LGBI0JGhM0JmhM0JigMUFjgsYEjQkaEzQmaEzQmKAxQWOCxgSN2XrGXGjsBiaoEmMT2B9KAAAAAElFTkSuQmCC" />

            </defs>

          </svg>

          <div className={styles.personalizationHeroContent}>

            <p className={styles.personalizationHeroBadge}>Personalization</p>

            <h1 id="personalization-hero-title" className={styles.personalizationHeroTitle}>

              Learning That Adapts to <span className={styles.headingLastWord}>You</span>

            </h1>

            <p className={styles.personalizationHeroDescription}>NeuroLXP personalizes learning based on each learner's needs, progress, skills, pace, and goals, creating a smarter, more engaging learning experience.</p>

            <BookDemoTrigger className={styles.personalizationHeroButton}>

              Book a Demo

            </BookDemoTrigger>

          </div>

          <ul className={styles.personalizationHeroStats} aria-label="Personalization outcomes">

            <li className={`${styles.personalizationHeroStat} ${styles.personalizationHeroStatGreen}`}>

              <strong>3x</strong>

              <span>Faster Skill Development</span>

            </li>

            <li className={`${styles.personalizationHeroStat} ${styles.personalizationHeroStatBlue}`}>

              <strong>92%</strong>

              <span>Completion Rate</span>

            </li>

            <li className={`${styles.personalizationHeroStat} ${styles.personalizationHeroStatPink}`}>

              <strong>40%</strong>

              <span>Better Retention</span>

            </li>

          </ul>

        </section>

        <div className={styles.vectorParent}>

          <Image className={styles.rectangleIcon} src="/images/Rectangle 66.webp" width={1440} height={668} sizes="100vw" alt="" aria-hidden="true" />

          <div className={styles.frameParent4}>

            <div className={styles.xParent}>

              <p className={styles.x} style={{ margin: 0 }}>

                3x

              </p>

              <p className={styles.fasterSkillDevelopment} style={{ margin: 0 }}>

                Faster Skill Development

              </p>

            </div>

            <div className={styles.parent}>

              <p className={styles.b} style={{ margin: 0 }}>

                92%

              </p>

              <p className={styles.completionRate} style={{ margin: 0 }}>

                Completion Rate

              </p>

            </div>

            <div className={styles.frameWrapper2}>

              <div className={styles.group}>

                <p className={styles.b2} style={{ margin: 0 }}>

                  40%

                </p>

                <p className={styles.betterRetention} style={{ margin: 0 }}>

                  Better Retention

                </p>

              </div>

            </div>

          </div>

          <div className={styles.wrapperLine9}>

            <Image className={styles.wrapperLine9Child} src="/icons/Line 9.svg" width={17} height={225} alt="" aria-hidden="true" />

          </div>

          <div className={styles.wrapperLine10}>

            <Image className={styles.wrapperLine10Child} src="/icons/Line 10.svg" width={15} height={225} alt="" aria-hidden="true" />

          </div>

        </div>

        <section className={styles.frameParent5} aria-labelledby="personalized-learning-heading">

          <div className={styles.personalizedLearningCard}>

            <div className={styles.personalizedLearningCopy}>

              <p className={styles.personalizedLearningBadge}>What is Personalized Learning</p>

              <h2 id="personalized-learning-heading" className={styles.learningBuiltAroundContainer}>

                <span className={styles.learningBuiltAround}>Learning Built Around Every{"\u00a0"}</span>

              <span className={styles.headingLastWord}>Learner</span>

              </h2>

              <p className={styles.personalizedLearningAdapts}>Personalized learning adapts the learning journey to each individual's knowledge, skills, pace, and goals.</p>

            </div>

            <ul className={styles.personalizedLearningChecklist} aria-label="Personalized learning factors">

              <li className={styles.personalizedLearningPill}>

                <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />

                <span>Knowledge Level</span>

              </li>

              <li className={styles.personalizedLearningPill}>

                <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />

                <span>Learning Pace</span>

              </li>

              <li className={styles.personalizedLearningPill}>

                <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />

                <span>Skill Gaps</span>

              </li>

              <li className={styles.personalizedLearningPill}>

                <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />

                <span>Learning Goals</span>

              </li>

              <li className={styles.personalizedLearningPill}>

                <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04.svg" width={32} height={32} alt="" aria-hidden="true" />

                <span>Performance</span>

              </li>

            </ul>

          </div>

        </section>

        <section className={styles.frameParent10} aria-labelledby="personalization-action-title">

          <div className={styles.actionIntro}>

           <p className={styles.actionEyebrow} style={{ margin: 0 }}>

  How NeuroLXP

  <sup

    aria-label="trademark"

    style={{

      display: "inline-block",

      fontSize: "10.8px",

      lineHeight: "6px",

      fontWeight: 700,

      marginLeft: "2px",

      position: "relative",

      top: "-6px",

      color: "#2D4CC8",

      whiteSpace: "nowrap",

    }}

  >

    TM

  </sup>

  <span

    style={{

      display: "inline-block",

      width: "6px",

    }}

    aria-hidden="true"

  />

  Personalizes Learning

</p>

            <h2 id="personalization-action-title" className={styles.personalizationInAction}>

              Personalization in

            <span className={styles.headingLastWord}> Action</span>

            </h2>

            <p className={styles.everyLearnerIs}>Every learner is unique. NeuroLXP adapts paths, content, and support for purposeful progress.</p>

          </div>

          <div className={`${styles.frameParent12} ${styles.actionCards}`}>

            <article className={`${styles.actionCard} ${styles.actionCardSmart}`}>

              <h3 className={styles.actionCardTitle}>Smart Learning</h3>

              <p className={styles.actionCardBody}>

                <span className={styles.copyLine}>Content matched to your</span>

                <span className={styles.copyLine}>goals and skills</span>

              </p>

            </article>

            <article className={`${styles.actionCard} ${styles.actionCardAdaptive}`}>

              <h3 className={styles.actionCardTitle}>Adaptive Pathways</h3>

              <p className={styles.actionCardBody}>

                <span className={styles.copyLine}>Paths adapt to</span>

                <span className={styles.copyLine}>performance and pace</span>

              </p>

            </article>

            <article className={`${styles.actionCard} ${styles.actionCardSkill}`}>

              <h3 className={styles.actionCardTitle}>Skill-Gap Analysis</h3>

              <p className={styles.actionCardBody}>

                <span className={styles.copyLine}>Identify skill gaps</span>

                <span className={styles.copyLine}>with targeted support</span>

              </p>

            </article>

            <article className={`${styles.actionCard} ${styles.actionCardProgress}`}>

              <h3 className={styles.actionCardTitle}>Progress Learning</h3>

              <p className={styles.actionCardBody}>

                <span className={styles.copyLine}>Content adapts</span>

                <span className={styles.copyLine}>as learners progress</span>

              </p>

            </article>

          </div>

        </section>

        <div className={styles.frameParent19}>

          <div className={styles.frameWrapper9}>

            <div className={styles.frameParent20}>

              <p className={styles.frameChild11} style={{ margin: 0 }}>

                Stages of Personalization

              </p>

              <div className={styles.learningThatAdaptsToYouParent}>

                <h2 className={styles.learningThatAdapts}>From Assessment to <span className={styles.headingLastWord}>Mastery</span></h2>

                <p className={styles.neurolxpPersonalizesEvery}>NeuroLXP personalizes every stage, from assessment to continuous skill development.</p>

              </div>

            </div>

          </div>

          <div className={styles.frameParent21}>

            <article className={styles.frameParent22}>

              <p className={styles.frameChild12} style={{ margin: 0 }}>

                01

              </p>

              <div className={styles.understandParent}>

                <h3 className={styles.understand}style={{ textAlign: "center" }}>Understand</h3>

                {/* <p className={styles.assessKnowledgeSkills}><span className={styles.copyLine}>Assess knowledge,</span><span className={styles.copyLine}>skills, and learning</span><span className={styles.copyLine}>goals</span></p> */}

              </div>

            </article>

            <article className={styles.frameParent23}>

              <p className={styles.frameChild12} style={{ margin: 0 }}>

                02

              </p>

              <div className={styles.adaptParent}>

                <h3 className={styles.understand}style={{ textAlign: "center" }}>Adapt</h3>

                {/* <p className={styles.buildALearning}><span className={styles.copyLine}>Build a learning</span><span className={styles.copyLine}>path matched to</span><span className={styles.copyLine}>individual needs</span></p> */}

              </div>

            </article>

            <article className={styles.frameParent24}>

              <p className={styles.frameChild12} style={{ margin: 0 }}>

                03

              </p>

              <div className={styles.optimizeParent}>

                <h3 className={styles.understand}style={{ textAlign: "center" }}>Optimize</h3>

                {/* <p className={styles.useLearningData}><span className={styles.copyLine}>Use learning data to</span><span className={styles.copyLine}>continuously refine</span><span className={styles.copyLine}>the experience</span></p> */}

              </div>

            </article>

            <article className={styles.frameParent25}>

              <p className={styles.frameChild12} style={{ margin: 0 }}>

                04

              </p>

              <div className={styles.developParent}>

                <h3 className={styles.develop}style={{ textAlign: "center" }}>Develop</h3>

                {/* <p className={styles.closeSkillGaps}><span className={styles.copyLine}>Close skill gaps and</span><span className={styles.copyLine}>build job-ready</span><span className={styles.copyLine}>capabilities</span></p> */}

              </div>

            </article>

          </div>

        </div>

        <div className={styles.frameParent26}>

          <div className={styles.frameParent27}>

            <p className={styles.frameChild16}>Why Personalized Learning Matters</p>

            <h2 className={styles.betterLearningBetterContainer} style={{ margin: 0 }}>

              <span className={styles.learningBuiltAround}>Better Learning! Better </span>

            <span className={styles.headingLastWord}>Outcomes</span>

            </h2>

            <p className={styles.adaptiveLearningImproves} style={{ margin: 0 }}>

              Adaptive learning improves outcomes through personalized, goal-driven journeys.

            </p>

          </div>

          <div className={styles.frameParent28}>

            <div className={styles.frameParent29}>

              <div className={styles.frameWrapper10}>

                <div className={styles.frameParent30}>

                  <div className={styles.frameChild17} />

                  <p className={styles.fasterLearning} style={{ margin: 0 }}>

                    Faster Learning

                  </p>

                </div>

              </div>

              <div className={styles.frameWrapper10}>

                <div className={styles.frameChild18} />

                <p className={styles.higherEngagement} style={{ margin: 0 }}>

                  Higher Engagement

                </p>

              </div>

            </div>

            <div className={styles.frameParent29}>

              <div className={styles.frameWrapper10}>

                <div className={styles.frameChild19} />

                <p className={styles.betterRetention2} style={{ margin: 0 }}>

                  Better Retention

                </p>

              </div>

              <div className={styles.frameWrapper10}>

                <div className={styles.frameChild18} />

                <p className={styles.strongerSkills} style={{ margin: 0 }}>

                  Stronger Skills

                </p>

              </div>

            </div>

            <div className={styles.frameWrapper10}>

              <div className={styles.frameChild18} />

              <p className={styles.careerReadiness} style={{ margin: 0 }}>

                Career Readiness

              </p>

            </div>

          </div>

        </div>

        <div className={styles.frameParent36}>
          <div
            className={styles.intelligentLearningExpertButtonSlot}
            data-expert-button-slot
          />

          <div className={styles.frameWrapper9}>

            <div className={styles.frameParent20}>

              <p className={styles.frameChild22}>Intelligent Learning Experience</p>

              <div className={styles.learningThatAdaptsToYouParent}>

                <h2 className={styles.learningThatAdapts} style={{ margin: 0 }}>

                  Learning That Continuously <span className={styles.headingLastWord}>Improves</span>

                </h2>

                <p className={styles.neurolxpPersonalizesEvery} style={{ margin: 0 }}>

                  NeuroLXP continuously uses learner data to refine and personalize the learning experience.

                </p>

              </div>

            </div>

          </div>

          <div className={styles.frameParent38}>

            <div className={styles.frameParent39}>

              <div className={styles.image20Parent}>

                <div className={styles.image202} />

                <div className={styles.frameParent40}>

                  <div className={styles.frameWrapper12}>

                    <div className={styles.image21Parent}>

                      <div className={styles.image212} />

                      <h3 className={styles.realTimeOptimization} style={{ margin: 0 }}>

                        Real-Time Optimization

                      </h3>

                    </div>

                  </div>

                  <div className={styles.learningPathsAdaptAsProgreWrapper}>

                    <p className={styles.knowledgeLevel} style={{ margin: 0 }}>

                      Learning paths adapt as progress changes

                    </p>

                  </div>

                </div>

              </div>

              <div className={styles.image20Parent}>

                <div className={styles.image202} />

                <div className={styles.frameParent41}>

                  <div className={styles.frameWrapper12}>

                    <div className={styles.image21Parent}>

                      <div className={styles.image213} />

                      <h3 className={styles.intelligentInsights} style={{ margin: 0 }}>

                        Intelligent Insights

                      </h3>

                    </div>

                  </div>

                  <div className={styles.learningPathsAdaptAsProgreWrapper}>

                    <p className={styles.analyticsRevealLearner} style={{ margin: 0 }}>

                      Analytics reveal learner needs and performance patterns

                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className={styles.frameParent39}>

              <div className={styles.image20Parent}>

                <div className={styles.image202} />

                <div className={styles.frameParent43}>

                  <div className={styles.frameWrapper12}>

                    <div className={styles.image21Parent}>

                      <div className={styles.image212} />

                      <h3 className={styles.precisionLearning} style={{ margin: 0 }}>

                        Precision Learning

                      </h3>

                    </div>

                  </div>

                  <div className={styles.learningPathsAdaptAsProgreWrapper}>

                    <p className={styles.analyticsRevealLearner} style={{ margin: 0 }}>

                      Relevant content is delivered at the right time

                    </p>

                  </div>

                </div>

              </div>

              <div className={styles.image20Parent}>

                <div className={styles.image202} />

                <div className={styles.frameParent44}>

                  <div className={styles.frameWrapper12}>

                    <div className={styles.image21Parent}>

                      <div className={styles.image213} />

                      <h3 className={styles.continuousFeedback} style={{ margin: 0 }}>

                        Continuous Feedback

                      </h3>

                    </div>

                  </div>

                  <div className={styles.learningPathsAdaptAsProgreWrapper}>

                    <p className={styles.everyInteractionImproves} style={{ margin: 0 }}>

                      Every interaction improves the next experience

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <section className={`${styles.frameParent45} ${styles.modernLearningSection}`} aria-labelledby="modern-learning-title">

          <div className={`${styles.frameParent46} ${styles.modernLearningIntro}`}>

            <p className={styles.modernLearningBadge}>Built for Modern Learning</p>

            <h2

              id="modern-learning-title"

              className={`${styles.betterLearningBetterContainer} ${styles.modernLearningHeading}`}

              style={{ margin: 0, width: "max-content", maxWidth: "none" }}

            >

              <span

                className={styles.learningBuiltAround}

                style={{ display: "block", whiteSpace: "nowrap" }}

              >

                Personalized Learning!

              </span>

              <span

                className={styles.learningBuiltAround}

                style={{ display: "block", whiteSpace: "nowrap" }}

              >

                Measurable <span className={styles.headingLastWord}>Growth</span>

              </span>

            </h2>

            <p className={styles.learnYourWay}>Learn your way, grow your skills, and track every step of your progress.</p>

          </div>

          <div className={`${styles.frameParent47} ${styles.modernLearningFeatures}`}>

            <article className={`${styles.modernLearningFeature} ${styles.modernLearningFeatureStructured}`}>

              <span className={`${styles.frameChild24} ${styles.modernLearningIcon}`} aria-hidden="true">

                <Image className={styles.modernLearningOuterCircle} src="/images/image.webp" width={78} height={78} alt="" />

                <Image className={styles.modernLearningCircleBase} src="/icons/Ellipse 334-2-1.svg" width={71} height={71} alt="" />

                <Image className={styles.featureIconSingle} src="/icons/folder-library.svg" width={30} height={30} alt="" />

              </span>

              <div className={styles.modernLearningFeatureText}>

                <h3 className={styles.structuredLearning}>Structured Learning</h3>

                <p className={styles.clearGoalOrientedLearning}>Clear, goal-oriented learning paths</p>

              </div>

            </article>

            <article className={`${styles.modernLearningFeature} ${styles.modernLearningFeatureAdaptive}`}>

              <span className={`${styles.frameChild24} ${styles.modernLearningIcon}`} aria-hidden="true">

                <Image className={styles.modernLearningOuterCircle} src="/images/image.webp" width={78} height={78} alt="" />

                <Image className={styles.modernLearningCircleBase} src="/icons/Ellipse 334-2-1.svg" width={71} height={71} alt="" />

                <Image className={styles.featureIconSingle} src="/icons/refresh-04.svg" width={30} height={30} alt="" />

              </span>

              <div className={styles.modernLearningFeatureText}>

                <h3 className={styles.adaptiveTechnology}>Adaptive Technology</h3>

                <p className={styles.learningThatAdapts2}>Learning that adapts to individual needs</p>

              </div>

            </article>

            <article className={`${styles.modernLearningFeature} ${styles.modernLearningFeatureCompetency}`}>

              <span className={`${styles.frameChild24} ${styles.modernLearningIcon}`} aria-hidden="true">

                <Image className={styles.modernLearningOuterCircle} src="/images/image.webp" width={78} height={78} alt="" />

                <Image className={styles.modernLearningCircleBase} src="/icons/Ellipse 334-2-1.svg" width={71} height={71} alt="" />

                <Image className={styles.featureIconSingle} src="/icons/champion.svg" width={30} height={30} alt="" />

              </span>

              <div className={styles.modernLearningFeatureText}>

                <h3 className={styles.competencyBasedDevelopment}>Competency-Based Development</h3>

                <p className={styles.learningAlignedWith}>Learning aligned with measurable skills</p>

              </div>

            </article>

            <article className={`${styles.modernLearningFeature} ${styles.modernLearningFeatureInsights}`}>

              <span className={`${styles.frameChild24} ${styles.modernLearningIcon}`} aria-hidden="true">

                <Image className={styles.modernLearningOuterCircle} src="/images/image.webp" width={78} height={78} alt="" />

                <Image className={styles.modernLearningCircleBase} src="/icons/Ellipse 334-2-1.svg" width={71} height={71} alt="" />

                <Image className={styles.featureIconSingle} src="/icons/chart-no-axes-combined.svg" width={30} height={30} alt="" />

              </span>

              <div className={styles.modernLearningFeatureText}>

                <h3 className={styles.adaptiveTechnology}>Data-Driven Insights</h3>

                <p className={styles.realTimeVisibilityInto}>Real-time visibility into learner progress</p>

              </div>

            </article>

          </div>

        </section>

        <div className={styles.rectangleParent7}>

          <Image className={styles.personalizationCtaBackground} src="/images/Frame 2095586948.webp" fill sizes="(max-width: 1440px) 100vw, 1280px" alt="" aria-hidden="true" />

          <div className={styles.rectangle} />

          <div className={styles.image206} />

          <Image className={styles.handHoldingWoodenCubeWithIcon} src="/images/hand-holding-wooden-cube-with-target 1.png" width={680} height={536} sizes="(max-width: 768px) 48vw, 680px" alt="Person using personalized learning powered by NeuroLXP" />

          <div className={styles.frameParent52}>

            <div className={styles.makeLearningPersonalParent}>

              <h2 className={styles.makeLearningPersonal} style={{ margin: 0 }}>

                Make Learning <span className={styles.headingLastWord}>Personal</span>

              </h2>

              <p className={styles.createAdaptiveLearning} style={{ margin: 0 }}>

                Create adaptive learning journeys that help every learner progress, develop skills, and achieve their goals.

              </p>

            </div>

            <div className={styles.frameWrapper17}>

  <BookDemoTrigger className={styles.personalizationHeroButton}>

    Book a Demo

  </BookDemoTrigger>

</div>

          </div>

        </div>

      </main>

      <Footer />

    </>

  );

}
