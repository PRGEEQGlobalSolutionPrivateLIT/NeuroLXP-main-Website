"use client";

import type { NextPage } from 'next';

import Image from "next/image";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

import styles from "./corporate.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const challengeCards = [

    {

        id: "rapid",

        title: "Rapid Skill Changes",

        description: <>Continuous workforce<br />upskilling</>,
                dropdown: "Enables continuous upskilling to meet evolving workforce demands",


        // dropdown: (<>Enables continuous upskilling to meet evolving workforce demands</>),

        icon: "/icons/target-11.svg",

        color: "blue",

    },

    {

        id: "distributed",

        title: "Distributed Teams",

        description: <>Centralized scalable<br />learning</>,

        dropdown: "Delivers centralized, scalable learning for teams across locations",

        icon: "/icons/user-group-02.svg",

        color: "pink",

    },

    {

        id: "engagement",

        title: "Low Engagement",

        description: <>Interactive learning<br />experiences</>,

        dropdown: "Interactive learning experiences that improve engagement",

        icon: "/icons/user-minus-02.svg",

        color: "purple",

    },

    {

        id: "progress",

        title: "Progress Tracking",

        description: <>Actionable learning<br />insights</>,

        dropdown: "Actionable learning insights and progress visibility",

        icon: "/icons/chart-up.svg",

        color: "orange",

    },

    {

        id: "alignment",

        title: "Learning Alignment",

        description: <>Goal-driven workforce<br />development</>,

        dropdown: "Goal-driven workforce development aligned to business needs",

        icon: "/icons/book-open-text-1.svg",

        color: "teal",

    },

] as const;

const CorporateTraining: NextPage = () => {

    const [openChallengeCard, setOpenChallengeCard] = useState<string | null>(null);

    const [trainingLoadProgress, setTrainingLoadProgress] = useState(0);

    const [isCorporateVideoPlaying, setIsCorporateVideoPlaying] = useState(true);

    const trainingSectionRef = useRef<HTMLDivElement | null>(null);

const corporateVideoRef = useRef<HTMLIFrameElement>(null);
    const toggleChallengeCard = (cardId: string) => {

        setOpenChallengeCard((current) => (current === cardId ? null : cardId));

    };

   
const toggleCorporateVideo = () => {
    const iframe = corporateVideoRef.current;
    if (!iframe) return;

    const shouldPlay = !isCorporateVideoPlaying;

    iframe.contentWindow?.postMessage(
        JSON.stringify({
            event: "command",
            func: shouldPlay ? "playVideo" : "pauseVideo",
            args: []
        }),
        "https://www.youtube.com"
    );

    setIsCorporateVideoPlaying(shouldPlay);
};


    useEffect(() => {

        const section = trainingSectionRef.current;

        if (!section) {

            return;

        }

        let animationFrame = 0;

        let startTime = 0;

        const duration = 1800;

        const runCounter = (time: number) => {

            if (!startTime) {

                startTime = time;

            }

            const elapsed = time - startTime;

            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setTrainingLoadProgress(easedProgress);

            if (progress < 1) {

                animationFrame = window.requestAnimationFrame(runCounter);

            }

        };

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    window.cancelAnimationFrame(animationFrame);

                    startTime = 0;

                    setTrainingLoadProgress(0);

                    animationFrame = window.requestAnimationFrame(runCounter);

                } else {

                    window.cancelAnimationFrame(animationFrame);

                    startTime = 0;

                    setTrainingLoadProgress(0);

                }

            },

            {

                threshold: 0.3,

            }

        );

        observer.observe(section);

        return () => {

            observer.disconnect();

            window.cancelAnimationFrame(animationFrame);

        };

    }, []);

    const completionValue = Math.round(94 * trainingLoadProgress);

    const scoreValue = (4.8 * trainingLoadProgress).toFixed(1);

    const timeValue = Math.round(12 * trainingLoadProgress);

    const leadershipValue = Math.round(94 * trainingLoadProgress);

    const complianceValue = Math.round(98 * trainingLoadProgress);

    const techValue = Math.round(78 * trainingLoadProgress);

    const salesValue = Math.round(85 * trainingLoadProgress);

    return (

        <>

            <Header />

            <div className={styles.corporateTraining}>

            <div className={styles.rectangleParent}>

                <div className={styles.rectangle} />

                <div className={styles.image20} />

                <div className={styles.groupMultiethnicBusinessPeo} />

            </div>

            <nav className={`${styles.frameDiv} ${styles.corporateBreadcrumb}`} aria-label="Breadcrumb">

                <div className={styles.ourCustomersWrapper}>

                    <span className={styles.solutionsFor}>Our Customers</span>

                </div>

                <Image

                    src="/icons/arrow-right-double.svg"

                    className={styles.corporateBreadcrumbArrow}

                    width={16}

                    height={16}

                    alt=""

                    aria-hidden="true"

                />

                <div className={styles.ourCustomersWrapper}>

                    <span className={styles.solutionsFor}>Solutions For</span>

                </div>

                <Image

                    src="/icons/arrow-right-double.svg"

                    className={styles.corporateBreadcrumbArrow}

                    width={16}

                    height={16}

                    alt=""

                    aria-hidden="true"

                />

                <div className={styles.arrowRightDoubleGroup}>

                    <span className={`${styles.solutionsFor} ${styles.corporateBreadcrumbCurrent}`}>

                        Corporate Training

                    </span>

                </div>

            </nav>

            <div className={styles.businesspeopleDiscussingDigiParent}>

                <Image

                    className={styles.businesspeopleDiscussingDigiIcon}

                    src="/images/group-entrepreneurs-happy-work-together.jpeg"

                    width={1184}

                    height={615}

                    sizes="100vw"

                    alt="Corporate training team"

                    priority

                />

                <div className={styles.frameParent2}>

                    <div className={styles.frameWrapper}>

                        <div className={styles.frameParent3}>

                            <div className={styles.frameParent4}>

                                <div className={styles.frameItem}>Corporate Training Solutions</div>

                                <h2 className={styles.empoweringWorkforce}>

                                  Empowering{" "}

                                  <span style={{ color: "#2d4cc8" }}>Workforce</span>

                              </h2>

                            </div>

                            <div className={styles.buildFutureReadyWorkforces}>Build future-ready workforces with scalable digital learning.</div>

                        </div>

                    </div>

                    <div className={styles.frameParent5}>

                        <BookDemoTrigger className={`${styles.frameInner} ${styles.requestDemoButton}`}>

                            Book a Demo

                        </BookDemoTrigger>

                        <Link href="/HomePage" className={styles.startLearningLink}>

                            <div className={styles.frameWrapper2}>

                                <div className={styles.startLearningWrapper}>

                                    <div className={styles.startLearning}>Start Learning</div>

                                </div>

                            </div>

                        </Link>

                    </div>

                </div>

            </div>

            <div className={styles.rectangle2} />

            <div className={styles.image202} />

            <div className={styles.frameParent6}>

                <div className={styles.frameParent7}>

                    <div className={styles.ellipseParent}>

                        <div className={styles.ellipseDiv} />

                        <div className={styles.ellipseGroup}>

                            <div className={styles.frameChild2} />

                            <div className={styles.frameParent8}>

                                <div className={styles.frameParent9}>

                                    <div className={`${styles.frameIcon} ${styles.iconBadge} ${styles.iconBadgeBlue}`}><Image src="/icons/building-03.svg" width={25} height={25} alt="Enterprise Clients" /></div>

                                    <h2 className={styles.b}>500+</h2>

                                </div>

                                <div className={styles.enterpriseClients}>Enterprise Clients</div>

                            </div>

                            <Image className={styles.ellipseIcon} src="/icons/Ellipse 377-3.svg" width={82} height={15} sizes="100vw" alt="" />

                        </div>

                    </div>

                    <div className={styles.ellipseContainer}>

                        <div className={styles.ellipseDiv} />

                        <div className={styles.ellipseGroup}>

                            <div className={styles.frameChild2} />

                            <Image className={styles.ellipseIcon} src="/icons/Ellipse 377-2.svg" width={82} height={15} sizes="100vw" alt="" />

                            <div className={styles.frameParent8}>

                                <div className={styles.frameParent9}>

                                    <div className={`${styles.frameIcon} ${styles.iconBadge} ${styles.iconBadgePink}`}><Image src="/icons/user-group-02.svg" width={25} height={25} alt="Learners Trained" /></div>

                                    <h2 className={styles.b}>2M+</h2>

                                </div>

                                <div className={styles.learnersTrained}>Learners Trained<br /></div>

                            </div>

                        </div>

                    </div>

                    <div className={styles.ellipseParent3}>

                        <div className={styles.ellipseDiv} />

                        <div className={styles.ellipseGroup}>

                            <div className={styles.frameChild2} />

                            <Image className={styles.ellipseIcon} src="/icons/Ellipse 377.svg" width={82} height={15} sizes="100vw" alt="" />

                            <div className={styles.frameParent8}>

                                <div className={styles.frameParent9}>

                                    <div className={`${styles.frameIcon} ${styles.iconBadge} ${styles.iconBadgePurple}`}><Image src="/icons/star-white.svg" width={25} height={25} alt="Satisfaction Rate" /></div>

                                    <h2 className={styles.b}>98%</h2>

                                </div>

                                <div className={styles.learnersTrained}>Satisfaction Rate<br /></div>

                            </div>

                        </div>

                    </div>

                    <div className={styles.ellipseParent5}>

                        <div className={styles.ellipseDiv} />

                        <div className={styles.ellipseGroup}>

                            <div className={styles.frameChild2} />

                            <Image className={styles.ellipseIcon} src="/icons/Ellipse 377-1.svg" width={82} height={15} sizes="100vw" alt="" />

                            <div className={styles.frameParent8}>

                                <div className={styles.frameParent9}>

                                    <div className={`${styles.frameIcon} ${styles.iconBadge} ${styles.iconBadgeOrange}`}><Image src="/icons/arrow-up-narrow-wide.svg" width={25} height={25} alt="Productivity Boost" /></div>

                                    <h2 className={styles.b}>40%</h2>

                                </div>

                                <div className={styles.productivityBoost}>Productivity Boost<br /></div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent16}>

                    <div className={styles.frameParent17}>

                        <div className={styles.frameChild15}>Key Challenges</div>

                        <div className={styles.keyChallengesInCorporateTrParent}>

                            <h2 className={styles.keyChallengesInContainer}>

                                <span className={styles.keyChallengesIn}>{`Key Challenges in `}</span>

                                <span className={styles.everyNeed}>Corporate Training</span>

                            </h2>

                            <div className={styles.neurolxpHelpsOrganizations}>NeuroLXP helps organizations overcome the most pressing corporate training barriers with intelligent, scalable learning solutions.<br /><br /></div>

                        </div>

                    </div>

                    <div className={`${styles.frameParent18} ${styles.corporateChallengeCards}`}>

                        <div className={`${styles.frameParent19} ${styles.corporateChallengeRow} ${styles.corporateChallengeRowTop}`}>

                            {challengeCards.slice(0, 3).map((card) => {

                                const isOpen = openChallengeCard === card.id;

                                return (

                                    <article

                                        key={card.id}

                                        className={`${styles.frameWrapper3} ${styles.corporateChallengeCard} ${styles[`corporateChallengeCard--${card.color}`]} ${isOpen ? styles.isOpen : ""

                                            }`}

                                    >

                                        <div className={`${styles.frameWrapper4} ${styles.corporateChallengeCardSurface}`}>

                                            <div className={styles.corporateChallengeHeader}>

                                                <div className={`${styles.challengeIcon} ${styles[`challengeIcon--${card.color}`]}`}>

                                                    <Image src={card.icon} width={30} height={30} alt="" aria-hidden="true" />

                                                </div>

                                                <h3 className={styles.rapidSkillChanges}>{card.title}</h3>

                                            </div>

                                            <p className={styles.continuousWorkforceUpskillin}>{card.description}</p>

                                            <button

                                                type="button"

                                                className={`${styles.howNeurolxpHelpsParent} ${styles.corporateChallengeToggle}`}

                                                onClick={() => toggleChallengeCard(card.id)}

                                                aria-expanded={isOpen}

                                                aria-controls={`challenge-dropdown-${card.id}`}

                                            >

                                                <span className={styles.howNeurolxpHelps}>How NeuroLXP Helps</span>

                                                <span className={styles.corporateChallengeChevron} aria-hidden="true">

                                                    <span className={`${styles.corporateChevronLine} ${styles.corporateChevronLine1}`} />

                                                    <span className={`${styles.corporateChevronLine} ${styles.corporateChevronLine2}`} />

                                                    <span className={`${styles.corporateChevronLine} ${styles.corporateChevronLine3}`} />

                                                    <span className={`${styles.corporateChevronLine} ${styles.corporateChevronLine4}`} />

                                                </span>

                                            </button>

                                            <div

                                                id={`challenge-dropdown-${card.id}`}

                                                className={styles.corporateChallengeDropdown}

                                                aria-hidden={!isOpen}

                                            >

                                                <p>{card.dropdown}</p>

                                            </div>

                                        </div>

                                    </article>

                                );

                            })}

                        </div>

                        <div className={`${styles.frameParent29} ${styles.corporateChallengeRow} ${styles.corporateChallengeRowBottom}`}>

                            {challengeCards.slice(3).map((card) => {

                                const isOpen = openChallengeCard === card.id;

                                return (

                                    <article

                                        key={card.id}

                                        className={`${styles.frameWrapper3} ${styles.corporateChallengeCard} ${styles[`corporateChallengeCard--${card.color}`]} ${isOpen ? styles.isOpen : ""

                                            }`}

                                    >

                                        <div className={`${styles.frameWrapper4} ${styles.corporateChallengeCardSurface}`}>

                                            <div className={styles.corporateChallengeHeader}>

                                                <div className={`${styles.challengeIcon} ${styles[`challengeIcon--${card.color}`]}`}>

                                                    <Image src={card.icon} width={30} height={30} alt="" aria-hidden="true" />

                                                </div>

                                                <h3 className={styles.rapidSkillChanges}>{card.title}</h3>

                                            </div>

                                            <p className={styles.continuousWorkforceUpskillin}>{card.description}</p>

                                            <button

                                                type="button"

                                                className={`${styles.howNeurolxpHelpsParent} ${styles.corporateChallengeToggle}`}

                                                onClick={() => toggleChallengeCard(card.id)}

                                                aria-expanded={isOpen}

                                                aria-controls={`challenge-dropdown-${card.id}`}

                                            >

                                                <span className={styles.howNeurolxpHelps}>How NeuroLXP Helps</span>

                                                <span className={styles.corporateChallengeChevron} aria-hidden="true">

                                                    <span className={`${styles.corporateChevronLine} ${styles.corporateChevronLine1}`} />

                                                    <span className={`${styles.corporateChevronLine} ${styles.corporateChevronLine2}`} />

                                                    <span className={`${styles.corporateChevronLine} ${styles.corporateChevronLine3}`} />

                                                    <span className={`${styles.corporateChevronLine} ${styles.corporateChevronLine4}`} />

                                                </span>

                                            </button>

                                            <div

                                                id={`challenge-dropdown-${card.id}`}

                                                className={styles.corporateChallengeDropdown}

                                                aria-hidden={!isOpen}

                                            >

                                                <p>{card.dropdown}</p>

                                            </div>

                                        </div>

                                    </article>

                                );

                            })}

                        </div>

                    </div>

                    <div className={styles.frameParent36}>

                        <div className={styles.frameParent37}>

                            <div className={styles.frameChild21}>Corporate Training Use Cases</div>

                            <div className={styles.keyChallengesInCorporateTrParent}>

                                <h2 className={styles.keyChallengesInContainer}>

                                    <span className={styles.keyChallengesIn}>Learning Programs</span>

                                    <span className={styles.for}>{` for `}</span>

                                    <span className={styles.everyNeed}>Every Need<br /></span>

                                </h2>

                                <div className={styles.organizationsCanUse}>Organizations can use NeuroLXP to deliver a wide range of corporate learning programs, including:<br /><br /></div>

                            </div>

                        </div>

                        <div className={styles.frameParent38}>

                            <div className={styles.frameParent39}>

                                <div className={styles.frameParent40}>

                                    <div className={`${styles.frameChild22} ${styles.useCaseIcon} ${styles.useCaseIconPink}`}>

                                        <svg

                                            className={styles.employeeOnboardingIcon}

                                            width="53"

                                            height="53"

                                            viewBox="0 0 53 53"

                                            fill="none"

                                            aria-hidden="true"

                                            focusable="false"

                                        >

                                            <circle cx="26.5" cy="17" r="9.5" stroke="currentColor" strokeWidth="2.5" />

                                            <path

                                                d="M10.5 44C11.8 34.4 18 29 26.5 29C35 29 41.2 34.4 42.5 44"

                                                stroke="currentColor"

                                                strokeWidth="2.5"

                                                strokeLinecap="round"

                                            />

                                        </svg>

                                    </div>

                                    <div className={styles.employeeOnboardingParent}>

                                        <h2 className={styles.employeeOnboarding}>Employee Onboarding</h2>

                                        <div className={styles.accelerateNewHire}>Accelerate new hire readiness with onboarding.</div>

                                    </div>

                                </div>

                                <div className={styles.frameParent40}>

                                    <div className={`${styles.frameChild22} ${styles.useCaseIcon} ${styles.useCaseIconBlue}`}><Image src="/icons/shield-check.svg" width={53} height={53} alt="Compliance Training" /></div>

                                    <div className={styles.complianceTrainingParent}>

                                        <h2 className={styles.employeeOnboarding}>Compliance Training</h2>

                                        <div className={styles.accelerateNewHire}>Ensure compliance with mandatory learning.</div>

                                    </div>

                                </div>

                                <div className={styles.frameParent40}>

                                    <div className={`${styles.frameChild22} ${styles.useCaseIcon} ${styles.useCaseIconTeal}`}><Image src="/icons/brain-11.svg" width={53} height={53} alt="Product and Sales Training" /></div>

                                    <div className={styles.complianceTrainingParent}>

                                        <h2 className={styles.employeeOnboarding}>Product & Sales Training</h2>

                                        <div className={styles.accelerateNewHire}>Equip teams with product and sales skills.</div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.frameParent43}>

                                <div className={styles.frameParent44}>

                                    <div className={`${styles.frameChild22} ${styles.useCaseIcon} ${styles.useCaseIconGreen}`}><Image src="/icons/user-ai.svg" width={53} height={53} alt="Leadership Development" /></div>

                                    <div className={styles.leadershipDevelopmentParent}>

                                        <h2 className={styles.employeeOnboarding}>Leadership Development</h2>

                                        <div className={styles.accelerateNewHire}>Develop confident leaders through training.</div>

                                    </div>

                                </div>

                                <div className={styles.frameParent45}>

                                    <div className={`${styles.frameChild22} ${styles.useCaseIcon} ${styles.useCaseIconPurple}`}><Image src="/icons/code.svg" width={53} height={53} alt="Technical Skill Development" /></div>

                                    <div className={styles.technicalSkillDevelopmentParent}>

                                        <h2 className={styles.employeeOnboarding}>Technical Skill Development</h2>

                                        <div className={styles.accelerateNewHire}>Upskill teams with role-specific technical training.</div>

                                    </div>

                                </div>

                                <div className={styles.frameParent40}>

                                    <div className={`${styles.frameChild22} ${styles.useCaseIcon} ${styles.useCaseIconOrange}`}>

                                        <Image

                                            src="/icons/chatting-01 copy.svg"

                                            width={53}

                                            height={53}

                                            alt="Customer Service Excellence"

                                        />

                                    </div>

                                    <div className={styles.customerServiceExcellenceParent}>

                                        <h2 className={styles.employeeOnboarding}>Customer Service Excellence</h2>

                                        <div className={styles.accelerateNewHire}>Improve customer service through training.</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div

                        ref={trainingSectionRef}

                        className={`${styles.frameParent46} ${styles.trainingLoadSection} ${trainingLoadProgress > 0 ? styles.isLoadingActive : ""

                            }`}

                    >

                        <div className={styles.wrapper}>

                            <div className={styles.frameParent47}>

<div className={styles.frameChild28}>
  Benefits of Corporate Training With{" "}
  <span className={styles.neuroLxpKeepTogether}>
    NeuroLXP<sup className={styles.neuroLxpTm}>TM</sup>
  </span>
</div>
                                <div className={styles.whyOrganizationsChooseNeuroParent}>

                                    <h2 className={styles.keyChallengesInContainer}>

                                        <span className={styles.keyChallengesIn}>Why Organizations Choose</span>

                                        <span className={styles.everyNeed}> NeuroLXP<br /></span>

                                    </h2>

                                    <div className={styles.neurolxpHelpsOrganizations}>Organizations can use NeuroLXP to deliver a wide range of corporate learning programs.<br /><br /></div>

                                </div>

                            </div>

                        </div>

                        <div className={styles.frameParent48}>

                            <div className={styles.frameParent49}>

                                <div className={styles.rectangleGroup}>

                                    <div className={styles.rectangleDiv} />

                                    <div className={styles.frameParent50}>

                                        <div className={styles.wrapper}>

                                            <h2 className={styles.b4}>{completionValue}%</h2>

                                        </div>

                                        <div className={styles.completionWrapper}>

                                            <div className={styles.completion}>{`Completion `}</div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.rectangleContainer}>

                                    <div className={styles.rectangleDiv} />

                                    <div className={styles.frameParent51}>

                                        <div className={styles.wrapper}>

                                            <h2 className={styles.b5}>{scoreValue}/5</h2>

                                        </div>

                                        <div className={styles.completionWrapper}>

                                            <div className={styles.averageScore}>Average Score</div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.rectangleParent2}>

                                    <div className={styles.rectangleDiv} />

                                    <div className={styles.frameParent52}>

                                        <div className={styles.hWrapper}>

                                            <h2 className={styles.h}>{timeValue}h</h2>

                                        </div>

                                        <div className={styles.completionWrapper}>

                                            <div className={styles.averageTime}>Average Time</div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.frameWrapper19}>

                                <div className={styles.topTrainingProgramsParent}>

                                    <h2 className={styles.topTrainingPrograms}>Top Training Programs</h2>

                                    <div className={styles.frameParent53}>

                                        <div className={styles.leadershipDevParent}>

                                            <div className={styles.leadershipDev}>Leadership Dev</div>

                                            <div className={styles.rectangleParent3}>

                                                <div className={styles.rectangle3} />

                                                <div className={styles.image203} />

                                                <div className={`${styles.frameChild31} ${styles.trainingProgressFill} ${styles.trainingProgress94}`} />

                                            </div>

                                            <h2 className={styles.b6}>{leadershipValue}%</h2>

                                        </div>

                                        <div className={styles.leadershipDevParent}>

                                            <div className={styles.leadershipDev}>Compliance</div>

                                            <div className={styles.rectangleParent3}>

                                                <div className={styles.rectangle3} />

                                                <div className={styles.image203} />

                                                <div className={`${styles.frameChild32} ${styles.trainingProgressFill} ${styles.trainingProgress98}`} />

                                            </div>

                                            <h2 className={styles.b6}>{complianceValue}%</h2>

                                        </div>

                                        <div className={styles.leadershipDevParent}>

                                            <div className={styles.leadershipDev}>Tech Upskilling</div>

                                            <div className={styles.rectangleParent3}>

                                                <div className={styles.rectangle3} />

                                                <div className={styles.image203} />

                                                <div className={`${styles.frameChild33} ${styles.trainingProgressFill} ${styles.trainingProgress78}`} />

                                            </div>

                                            <h2 className={styles.b6}>{techValue}%</h2>

                                        </div>

                                        <div className={styles.leadershipDevParent}>

                                            <div className={styles.leadershipDev}>{`Sales Enablement `}</div>

                                            <div className={styles.rectangleParent3}>

                                                <div className={styles.rectangle3} />

                                                <div className={styles.image203} />

                                                <div className={`${styles.frameChild34} ${styles.trainingProgressFill} ${styles.trainingProgress85}`} />

                                            </div>

                                            <h2 className={styles.b6}>{salesValue}%</h2>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className={styles.frameParent54}>

                        <div className={styles.peopleTakingPartBusinessEvParent}>

                            <div className={styles.peopleTakingPartBusinessEv} />

                            <div className={styles.image21} />

                           


<div className={styles.corporateVideoZoomWrapper}>
    <iframe
        ref={corporateVideoRef}
        className={styles.groupYoungBusinesspeopleUsi}
        src="https://www.youtube.com/embed/3BSYDa7F52c?autoplay=1&mute=1&loop=1&playlist=3BSYDa7F52c&playsinline=1&controls=0&enablejsapi=1"
        title="Corporate learning session"
        loading="eager"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
    />
</div>




                            <div className={styles.frameParent55}>

                                <div className={styles.frameParent56}>

                                    <div className={styles.frameParent57}>

                                        <div className={styles.frameChild36}>NeuroLXP<sup>TM</sup></div>

                                        <h2 className={styles.neurolxpTransformingCorporat}>

                                          NeuroLXP Transforming Corporate{" "}

                                          <span style={{ color: "#2d4cc8" }}>Learning</span>

                                          <br />

                                      </h2>

                                    </div>

                                    <div className={styles.buildSkilledEngaged}>Build skilled, engaged, and future ready workforces with NeuroLXP.</div>

                                </div>

                                <div className={styles.frameWrapper20}>

                                    <div className={styles.getStartedWrapper}>

<Link href="/HomePage" className={styles.getStarted}>

  Get Started

</Link>

                                    </div>

                                </div>

                            </div>

                            {!isCorporateVideoPlaying && (

                                <button

                                    type="button"

                                    className={`${styles.frameChild37} ${styles.corporateVideoControl}`}

                                    onClick={toggleCorporateVideo}

                                    aria-label="Play corporate learning video"

                                >

                                    <img

                                        src="/icons/vsymbol.svg"

                                        width={106}

                                        height={106}

                                        alt=""

                                        aria-hidden="true"

                                    />

                                </button>

                            )}

                        </div>

                        <div className={styles.image207} />

                    </div>

                </div>

            </div>

            </div>

            <Footer />

        </>

    );

};

export default CorporateTraining;
