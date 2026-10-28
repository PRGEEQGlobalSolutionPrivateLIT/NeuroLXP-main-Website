"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./contentmanagment.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";
import TalkToExpertButton from "@/components/TalkToOurExpert/TalkToExpertButton";
const compatibilityCards = [
  {
    id: "documents",
    circleIcon: "/icons/Ellipse 334-10.svg",
    title: "Documents & Presentations",
    icon: "/icons/document-validation.svg",
    openIcon: "/icons/remove-02-5.svg",
    checkIcon: "/icons/blue.svg",
    colorClass: styles.compatibilityBlue,
    items: ["DOC / DOCX", "PPT / PPTX", "Google Slides", "Digital Manuals", "Collaborative Documents"],
  },
  {
    id: "video",
    circleIcon: "/icons/Ellipse 334-5.svg",
    title: "Video & Media",
    icon: "/icons/video-01.svg",
    openIcon: "/icons/remove-02-1.svg",
    checkIcon: "/icons/pink.svg",
    colorClass: styles.compatibilityPink,
    items: ["MP4 Video", "Interactive Video", "Short-form Video", "Live Streaming", "Digital Media Content"],
  },
  {
    id: "elearning",
    circleIcon: "/icons/Ellipse 334-6.svg",
    title: "E-Learning Standards",
    icon: "/icons/online-learning-03.svg",
    openIcon: "/icons/remove-02.svg",
    checkIcon: "/icons/darkyellow.svg",
    colorClass: styles.compatibilityOrange,
    items: ["SCORM 1.2", "SCORM 2004", "xAPI", "cmi5", "LTI"],
  },
  {
    id: "web",
    circleIcon: "/icons/Ellipse 334-8.svg",
    title: "Web & Modern Content",
    icon: "/icons/monitor.svg",
    openIcon: "/icons/remove-02-4.svg",
    checkIcon: "/icons/purple.svg",
    colorClass: styles.compatibilityPurple,
    items: ["Web-Based Presentations", "Progressive Web Apps", "API-Driven Content", "Mobile Learning"],
  },
  {
    id: "interactive",
    circleIcon: "/icons/Ellipse 334-1.svg",
    title: "Interactive Learning",
    icon: "/icons/user-group-02.svg",
    openIcon: "/icons/remove-02-3.svg",
    checkIcon: "/icons/green.svg",
    colorClass: styles.compatibilityGreen,
    items: ["MicroLearning", "Gamified Content", "Scenario-Based Learning", "Interactive Presentations"],
  },
  {
    id: "knowledge",
    circleIcon: "/icons/Ellipse 334-3.svg",
    title: "Knowledge Content",
    icon: "/icons/brain-cog-1.svg",
    openIcon: "/icons/remove-02-2.svg",
    checkIcon: "/icons/yellow.svg",
    colorClass: styles.compatibilityGold,
    items: ["Visual Storytelling", "Wikis", "Dynamic Knowledge Bases", "Digital Documentation"],
  },
];
export default function ContentIntelligenceManagement() {
  const learningOrganizationCards = [
    {
      title: "Higher Education",
      description: "Manage academic content and learning programs at scale.",
      image: "/images/firstlady.webp",
      alt: "Graduate holding a diploma",
    },
    {
      title: "Schools & Digital Learning",
      description: "Create structured and engaging digital education experiences.",
      image: "/images/second.webp",
      alt: "Learners using digital learning resources",
    },
    {
      title: "Corporate",
      description: <>Support employee growth<br />and upskilling.</>,
      image: "/images/third.webp",
      alt: "Professionals collaborating in a workplace",
    },
  ];
  const [activeLearningCard, setActiveLearningCard] = useState(0);
  const [learningSlideDirection, setLearningSlideDirection] = useState<"next" | "previous">("next");
  const [openCompatibilityCard, setOpenCompatibilityCard] = useState<string | null>(null);
  const compatibilitySectionRef = useRef<HTMLDivElement | null>(null);
  const previousLearningCard = (activeLearningCard - 1 + learningOrganizationCards.length) % learningOrganizationCards.length;
  const nextLearningCard = (activeLearningCard + 1) % learningOrganizationCards.length;
  const showLearningCard = (index: number) => {
    if (index === activeLearningCard) return;
    setLearningSlideDirection(index > activeLearningCard ? "next" : "previous");
    setActiveLearningCard(index);
  };
  useEffect(() => {
    const compatibilitySection = compatibilitySectionRef.current;
    if (!compatibilitySection) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setOpenCompatibilityCard(null);
        }
      },
      {
        threshold: 0,
      },
    );
    observer.observe(compatibilitySection);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header />
      <main className={`${styles.contentIntelligenceManagem}${openCompatibilityCard ? ` ${styles.compatibilityCardIsOpen}` : ""}`}>
        <div className={styles.frameParent}>
          <svg
            className={styles.frameChild}
            width="1488"
            height="671"
            viewBox="0 0 1488 671"
            fill="none"
            xmlns="http\://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-90px",
              left: "-22px",
              width: "1488px",
              maxWidth: "none",
              height: "671px",
            }}
          >
            <g filter="url(#contentHeroOuterShadow)">
              <path d="M0 28H1488V524.978L741 647L0 547.604V28Z"
  fill="#DFE6E9" />
            </g>
            <g filter="url(#contentHeroInnerShadow)">
              <path d="M0 0H1488V496.978L743 619L0 519.604V0Z"
  fill="#DFE6E9" />
            </g>
            <defs>
              <filter id="contentHeroOuterShadow" x="0" y="4" width="1488" height="667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="8" dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-8" dy="-8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
              </filter>
              <filter id="contentHeroInnerShadow" x="18" y="-8" width="1456" height="635" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="8" dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-8" dy="-8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
              </filter>
            </defs>
          </svg>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <p className={styles.headerContentExperienceBadge}>Content Management</p>
              <div className={styles.onePlatformManyFormatSmaParent}>
                <h1 className={`${styles.onePlatformMany} ${styles.semanticBoldHeading}`}><span>One Platform! Many Format! Smarter <span style={{ color: "#2d4cc8", whiteSpace: "nowrap" }}>Learning</span></span></h1>
                <div className={styles.bringContentTogether}>{`Bring content together and transform it into engaging learning experiences. `}</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <BookDemoTrigger className={styles.headerBookDemoButton}>
                <span>Book a Demo</span>
              </BookDemoTrigger>
            </div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.featuresWrapper}>
            <div className={styles.augmentation}>Features</div>
          </div>
          <div className={styles.homeParent}>
            <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
            <div className={styles.featuresWrapper}>
              <div className={styles.augmentation}>Augmentation</div>
            </div>
          </div>
          <div className={styles.arrowRightDoubleGroup}>
            <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
            <span className={styles.augmentation}>Content  Management</span>
          </div>
        </div>
        <div className={styles.frameParent22}>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameWrapper4}>
              <div className={styles.frameParent23}>
                <p className={styles.contentIntelligenceBadge}>Content Intelligence</p>
                <div className={styles.onePlatformManyFormatSmaParent}>
                  <h2 className={`${styles.turnExistingKnowledge} ${styles.semanticBoldHeading}`}><span>Turn Existing Knowledge into Better <span style={{ color: "#2d4cc8", whiteSpace: "nowrap" }}>Learning</span></span></h2>
                  <div className={styles.neurolxpTransformsContent}>NeuroLXP transforms content across formats into structured, learner‑focused experiences.</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent24}>
            <div className={styles.frameParent25}>
              <div className={styles.frameParent26}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameWrapper6}>
                    <div className={styles.frameWrapper7}>
                      <div className={styles.image20Parent}>
                        <div className={styles.image20} />
                        <div className={styles.makeComplexContent}>Make complex content easy</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper8}>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image21Parent}>
                        <div className={styles.image21} />
                        <h3 className={`${styles.smartSummaries} ${styles.semanticBoldHeading}`}>Smart Summaries</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent26}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameWrapper6}>
                    <div className={styles.frameWrapper7}>
                      <div className={styles.image20Parent}>
                        <div className={styles.image20} />
                        <div className={styles.highlightEssentialConcepts}>Highlight essential concepts</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper14}>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image21Parent}>
                        <div className={styles.image21} />
                        <h3 className={`${styles.keyInsights} ${styles.semanticBoldHeading}`}>Key Insights</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent26}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameWrapper6}>
                    <div className={styles.frameWrapper7}>
                      <div className={styles.image20Parent}>
                        <div className={styles.image20} />
                        <div className={styles.highlightEssentialConcepts}>Organize clear learning journeys</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper20}>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image21Parent}>
                        <div className={styles.image21} />
                        <h3 className={`${styles.smartStructure} ${styles.semanticBoldHeading}`}>Smart Structure</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent29}>
              <div className={styles.frameParent26}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameWrapper6}>
                    <div className={styles.frameWrapper7}>
                      <div className={styles.image20Parent}>
                        <div className={styles.image20} />
                        <div className={styles.createFocusedPractice}>Create focused practice resources</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper26}>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image21Parent}>
                        <div className={styles.image21} />
                        <h3 className={`${styles.examReady} ${styles.semanticBoldHeading}`}>Exam Ready</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent26}>
                <div className={styles.frameWrapper5}>
                  <div className={styles.frameWrapper6}>
                    <div className={styles.frameWrapper7}>
                      <div className={styles.image20Parent}>
                        <div className={styles.image20} />
                        <div className={styles.inspireDeeperThinking}>Inspire deeper thinking and exploration</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper26}>
                  <div className={styles.frameWrapper9}>
                    <div className={styles.frameWrapper10}>
                      <div className={styles.image21Parent}>
                        <div className={styles.image21} />
                        <h3 className={`${styles.explore} ${styles.semanticBoldHeading}`}>Explore</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <Image className={styles.frameChild13} src="/images/image-shadow.webp" width={1196} height={595} sizes="100vw" alt="" aria-hidden="true" />
          <div className={styles.frameParent32}>
            <div className={styles.frameWrapper35}>
              <div className={styles.frameContainer}>
                <p className={styles.contentCreationBadge}>Content Creation</p>
                <div className={styles.onePlatformManyFormatSmaParent}>
                  <h1 className={`${styles.onePlatformMany} ${styles.semanticBoldHeading}`}>
                    <span className={styles.buildEngaging}>Build Engaging</span>
                    <span className={styles.learningExperiences}> Learning Experiences</span>
                  </h1>
                  <div className={styles.bringContentTogether}>Give educators and instructional designers the tools to create learning experiences that go beyond static content.</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameChild15} aria-hidden="true" />
              <div className={styles.createEngageLearnParent}>
                <h2 className={`${styles.createEngageLearn} ${styles.semanticBoldHeading}`}>Create! Engage! Learn</h2>
                <div className={styles.frameParent34}>
                  <div className={styles.frameParent35}>
                    <div className={styles.frameWrapper36}>
                      <div className={styles.checkmarkCircle04Parent}>
                        <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className={styles.interactiveLearning}>Interactive Learning</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper37}>
                      <div className={styles.checkmarkCircle04Group}>
                        <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className={styles.interactiveLearning}>Multimedia Lessons</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper37}>
                      <div className={styles.checkmarkCircle04Container}>
                        <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className={styles.interactiveLearning}>Clickable Content</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent35}>
                    <div className={styles.frameWrapper36}>
                      <div className={styles.checkmarkCircle04Parent}>
                        <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className={styles.interactiveLearning}>Smart Assessments</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper36}>
                      <div className={styles.checkmarkCircle04Parent3}>
                        <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className={styles.interactiveLearning}>Gamified Activities</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper36}>
                      <div className={styles.checkmarkCircle04Parent4}>
                        <Image className={styles.checkmarkCircle04Icon} src="/icons/checkmark-circle-04-green.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                        <div className={styles.interactiveLearning}>Real Scenarios</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={compatibilitySectionRef} className={styles.frameParent37}>
            <div
              className={styles.contentCompatibilityExpertButtonSlot}
              data-expert-button-slot
            />
          <div className={styles.frameWrapper42}>
            <div className={styles.frameWrapper43}>
              <div className={styles.frameParent38}>
                <div className={styles.frameParent39}>
                  <p className={styles.contentCompatibilityBadge}>Content Compatibility</p>
                  <h2 className={`${styles.contentThatWorks} ${styles.semanticBoldHeading}`}><span>Content That Works for Every <span style={{ color: "#2d4cc8", whiteSpace: "nowrap" }}>Learner</span></span></h2>
                </div>
                <div className={styles.neurolxpSupportsDiverse}>NeuroLXP supports diverse content formats for seamless learning delivery.</div>
              </div>
            </div>
          </div>
          <div className={`${styles.frameParent40} ${styles.compatibilitySwitchGrid}`}>
            {compatibilityCards.map((card) => {
              const isOpen = openCompatibilityCard === card.id;
              return (
                <article className={`${styles.compatibilitySwitchCard} ${card.colorClass}${isOpen ? ` ${styles.compatibilitySwitchCardOpen}` : ""}`} key={card.id}>
                  <div className={styles.compatibilitySwitchHeader}>
                    <div className={styles.compatibilitySwitchTitle}>
                      <span className={styles.contentFormatIcon} aria-hidden="true">
                        {isOpen ? <Image className={styles.contentFormatOpenIcon} src={card.openIcon} width={24} height={24} sizes="24px" alt="" /> : <Image className={styles.contentFormatGlyph} src={card.icon} width={28} height={28} sizes="28px" alt="" />}
                      </span>
                      <h3 className={`${styles.documentsPresentations} ${styles.semanticBoldHeading}`}>{card.title}</h3>
                    </div>
                    <button className={styles.compatibilitySwitchButton} type="button" onClick={() => setOpenCompatibilityCard((currentCard) => (currentCard === card.id ? null : card.id))} aria-expanded={isOpen} aria-label={`${isOpen ? "Close" : "Open"} ${card.title}`}>
                      <Image className={styles.arrowDownDoubleIcon} src="/icons/arrow-down-double.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />
                    </button>
                  </div>
                  {isOpen && (
                    <div className={styles.compatibilitySwitchDetails} id={`${card.id}-details`}>
                      <ul className={styles.compatibilitySwitchList}>
                        {card.items.map((item) => (
                          <li className={styles.compatibilitySwitchItem} key={item}>
                            <span className={styles.compatibilitySwitchCheck} aria-hidden="true">
                              <Image src={card.checkIcon} width={24} height={24} sizes="24px" alt="" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
        <div className={styles.frameParent55}>
          <div className={styles.frameParent56}>
            <div className={styles.frameParent57}>
              <p className={styles.centralizedContentBadge}>Centralized Content Management</p>
              <h2 className={`${styles.organizeLearningContent} ${styles.semanticBoldHeading}`}><span>Organize Learning Content in One <span style={{ color: "#2d4cc8", whiteSpace: "nowrap" }}>Place</span></span></h2>
            </div>
            <div className={styles.manageLearningResources}>Manage learning resources efficiently through a centralized content environment.</div>
          </div>
          <div className={styles.frameWrapper62}>
            <div className={styles.frameWrapper63}>
              <div className={styles.frameWrapper64}>
                <div className={styles.frameParent58}>
                  <div className={styles.frameParent59}>
                    <span className={styles.managementCheckIcon} aria-hidden="true">
                      <Image className={styles.managementCheckMark} src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className={styles.organizeByCourse}>Organize by course or subject</div>
                  </div>
                  <div className={styles.frameParent59}>
                    <span className={styles.managementCheckIcon} aria-hidden="true">
                      <Image className={styles.managementCheckMark} src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className={styles.manageFromOne}>Manage from one workspace</div>
                  </div>
                  <div className={styles.frameParent59}>
                    <span className={styles.managementCheckIcon} aria-hidden="true">
                      <Image className={styles.managementCheckMark} src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className={styles.maintainContentVersions}>Maintain content versions</div>
                  </div>
                  <div className={styles.frameParent59}>
                    <span className={styles.managementCheckIcon} aria-hidden="true">
                      <Image className={styles.managementCheckMark} src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className={styles.updateWithoutDisruption}>Update without disruption</div>
                  </div>
                  <div className={styles.frameParent59}>
                    <span className={styles.managementCheckIcon} aria-hidden="true">
                      <Image className={styles.managementCheckMark} src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className={styles.keepContentStructured}>Keep content structured</div>
                  </div>
                  <div className={styles.frameParent59}>
                    <span className={styles.managementCheckIcon} aria-hidden="true">
                      <Image className={styles.managementCheckMark} src="/icons/green.svg" width={36} height={36} sizes="36px" alt="" />
                    </span>
                    <div className={styles.ensureConsistencyAcross}>Keep teams consistent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image20Parent4}>
          <div className={styles.image206} />
          <div className={styles.arrowDownBig} />
          <div className={styles.frameParent65}>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameWrapper66}>
                <div className={styles.frameParent23}>
                  <p className={styles.contentValueBadge}>Content Value</p>
                  <div className={styles.onePlatformManyFormatSmaParent}>
                    <h2 className={`${styles.turnExistingContent} ${styles.semanticBoldHeading}`}><span>Turn Existing Content into Better <span style={{ color: "#2d4cc8", whiteSpace: "nowrap" }}>Learning</span></span></h2>
                    <div className={styles.neurolxpHelpsInstitutions}>NeuroLXP helps institutions and educators get more value from their existing learning resources.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent67}>
              <div className={styles.frameParent68}>
                <div className={styles.frameParent69}>
                  <div className={styles.frameChild31} />
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} aria-hidden="true" />
                    <div className={styles.buildEngagingExperiences}>Build engaging experiences</div>
                  </div>
                  <div className={styles.createWrapper}>
                    <h3 className={`${styles.create} ${styles.semanticBoldHeading}`}>Create</h3>
                  </div>
                </div>
                <div className={styles.frameWrapper67}>
                  <div className={styles.frameParent70}>
                    <div className={styles.rectangleParent2}>
                      <div className={styles.frameChild32} aria-hidden="true" />
                      <div className={styles.curateWrapper}>
                        <h3 className={`${styles.curate} ${styles.semanticBoldHeading}`}>Curate</h3>
                      </div>
                    </div>
                    <div className={styles.transformExistingResources}>Transform existing resources</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent71}>
                <div className={styles.frameWrapper68}>
                  <div className={styles.frameParent72}>
                    <div className={styles.rectangleParent2}>
                      <div className={styles.frameChild33} aria-hidden="true" />
                      <div className={styles.organizeWrapper}>
                        <div className={styles.organize}>Organize</div>
                      </div>
                    </div>
                    <div className={styles.structureLearningJourneys}>Structure learning journeys</div>
                  </div>
                </div>
                <div className={styles.frameParent73}>
                  <div className={styles.frameChild34} aria-hidden="true" />
                  <div className={styles.frameParent74}>
                    <div className={styles.deliverWrapper}>
                      <h3 className={`${styles.deliver} ${styles.semanticBoldHeading}`}>Deliver</h3>
                    </div>
                    <div className={styles.enableFlexibleLearning}>Enable flexible learning</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent75}>
                <div className={styles.frameWrapper68}>
                  <div className={styles.frameParent72}>
                    <div className={styles.rectangleParent2}>
                      <div className={styles.frameChild35} aria-hidden="true" />
                      <div className={styles.organizeWrapper}>
                        <h3 className={`${styles.measure} ${styles.semanticBoldHeading}`}>Measure</h3>
                      </div>
                    </div>
                    <div className={styles.structureLearningJourneys}>Track content performance</div>
                  </div>
                </div>
                <div className={styles.frameParent73}>
                  <div className={styles.frameChild34} aria-hidden="true" />
                  <div className={styles.frameParent74}>
                    <div className={styles.improveWrapper}>
                      <h3 className={`${styles.improve} ${styles.semanticBoldHeading}`}>Improve</h3>
                    </div>
                    <div className={styles.enableFlexibleLearning}>Enhance learning content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent79}>
          <div className={styles.frameParent80}>
            <div className={styles.frameParent81}>
              <div className={styles.frameParent57}>
                <p className={styles.learningScaleBadge}>Built for Learning at Scale</p>
                <h2 className={`${styles.onePlatformFor} ${styles.semanticBoldHeading}`}><span>One Platform for Every Learning <span style={{ color: "#2d4cc8", whiteSpace: "nowrap" }}>Organization</span></span></h2>
              </div>
              <div className={styles.neurolxpSupportsOrganization}>NeuroLXP supports organizations managing diverse learning content and large digital learning ecosystems.</div>
            </div>
            <div className={styles.frameParent83}>
              <div className={styles.frameParent85}>
                <div className={`${styles.frameParent86} ${styles.learningCarouselMotion} ${styles[`learningCarouselMotion-${learningSlideDirection}`]}`} key={`${activeLearningCard}-${learningSlideDirection}`}>
                  <div className={`${styles.frameParent87} ${styles.learningSelectableCard}`} role="button" tabIndex={0} aria-label={`Bring ${learningOrganizationCards[nextLearningCard].title} to front`} onClick={() => showLearningCard(nextLearningCard)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); showLearningCard(nextLearningCard); } }}>
                    <Image className={styles.frameChild40} src={learningOrganizationCards[nextLearningCard].image} width={322} height={229} sizes="322px" alt={learningOrganizationCards[nextLearningCard].alt} />
                    <div className={styles.corporateParent}>
                      <h3 className={`${styles.corporate} ${styles.semanticBoldHeading}`}>{learningOrganizationCards[nextLearningCard].title}</h3>
                      <div className={styles.supportEmployeeGrowth}>{learningOrganizationCards[nextLearningCard].description}</div>
                    </div>
                  </div>
                  <div className={`${styles.frameParent88} ${styles.learningSelectableCard}`} role="button" tabIndex={0} aria-label={`Bring ${learningOrganizationCards[previousLearningCard].title} to front`} onClick={() => showLearningCard(previousLearningCard)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); showLearningCard(previousLearningCard); } }}>
                    <Image className={styles.frameChild41} src={learningOrganizationCards[previousLearningCard].image} width={405} height={283} sizes="405px" alt={learningOrganizationCards[previousLearningCard].alt} />
                    <div className={styles.schoolsDigitalLearningParent}>
                      <h3 className={`${styles.corporate} ${styles.semanticBoldHeading}`}>{learningOrganizationCards[previousLearningCard].title}</h3>
                      <div className={styles.createStructuredAnd}>{learningOrganizationCards[previousLearningCard].description}</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper70}>
                    <div className={styles.frameParent89}>
                      <Image className={styles.frameChild42} src={learningOrganizationCards[activeLearningCard].image} width={469} height={377} sizes="469px" alt={learningOrganizationCards[activeLearningCard].alt} />
                      <div className={styles.higherEducationParent}>
                        <h3 className={`${styles.corporate} ${styles.semanticBoldHeading}`}>{learningOrganizationCards[activeLearningCard].title}</h3>
                        <div className={styles.createStructuredAnd}>{learningOrganizationCards[activeLearningCard].description}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className={styles.frameParent90} aria-label="Learning organization slides">
                  {learningOrganizationCards.map((card, index) => (
                    <button className={index === activeLearningCard ? styles.frameChild43 : styles.ellipseDiv} type="button" key={card.title} onClick={() => showLearningCard(index)} aria-label={`Show ${card.title}`} aria-current={index === activeLearningCard ? "true" : undefined} />
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className={styles.frameParent91}>
            <div className={styles.frameWrapper4}>
              <div className={styles.frameParent23}>
<p className={styles.whyNeurolxpBadge}>
  Why NeuroLXP<span className={styles.tmMark}>TM</span>
</p>
                <div className={styles.onePlatformManyFormatSmaParent}>
                  <h2 className={`${styles.turnExistingContent} ${styles.semanticBoldHeading}`}>
                    <span className={styles.buildEngaging}>{`From Content to `}</span>
                    <span className={styles.learningExperiences}>Intelligence</span>
                  </h2>
                  <div className={styles.neurolxpHelpsInstitutions}>Traditional LMS platforms store content. NeuroLXP transforms, creates, manages, and improves learning experiences.</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild48} />
              <div className={styles.frameChild49} />
              <div className={styles.frameParent93}>
                <span className={`${styles.intelligenceFeatureIcon} ${styles.intelligenceFeatureGreen}`} aria-hidden="true">
                  <Image className={styles.combinedIntelligenceIcon} src="/icons/educator-green-complete.svg" width={70} height={70} sizes="70px" alt="" />
                  <Image className={styles.embeddedFeatureGlyph} src="/icons/teacher.svg" width={32} height={32} sizes="32px" alt="" />
                </span>
                <div className={styles.forEducatorsParent}>
                  <h3 className={`${styles.forEducators} ${styles.semanticBoldHeading}`}>For Educators</h3>
                  <div className={styles.lessContentWork}>Less content work. More teaching</div>
                </div>
              </div>
              <div className={styles.frameChild51} />
              <div className={styles.frameParent94}>
                <span className={`${styles.intelligenceFeatureIcon} ${styles.intelligenceFeatureOrange}`} aria-hidden="true">
                  <Image className={styles.learnerCombinedIcon} src="/icons/student-saffron-circle.svg" width={70} height={70} sizes="70px" alt="" />
                </span>
                <div className={styles.forEducatorsParent}>
                  <h3 className={`${styles.forEducators} ${styles.semanticBoldHeading}`}>For Learners</h3>
                  <div className={styles.accessFocusedResources}>Access focused resources</div>
                </div>
              </div>
              <div className={styles.frameParent95}>
                <span className={`${styles.intelligenceFeatureIcon} ${styles.intelligenceFeatureBlue}`} aria-hidden="true">
                  <Image className={styles.combinedIntelligenceIcon} src="/icons/social-blue-bg.svg" width={70} height={70} sizes="70px" alt="" />
                  <Image className={styles.embeddedFeatureGlyph} src="/icons/building-03.svg" width={32} height={32} sizes="32px" alt="" />
                </span>
                <div className={styles.forEducatorsParent}>
                  <h3 className={`${styles.forEducators} ${styles.semanticBoldHeading}`}>For Institutions</h3>
                  <div className={styles.manageContentAt}>Manage content at scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent96}>
          <div className={styles.frameWrapper72}>
            <div className={styles.frameWrapper73}>
              <div className={styles.onePlatformSmarterLearningParent}>
                <h2 className={`${styles.contentThatWorks} ${styles.semanticBoldHeading}`}>One Platform! Smarter Learning</h2>
                <div className={styles.neurolxpBringsContent}>
                  NeuroLXP brings content intelligence, creation, management, assessments, and analytics together in one platform.
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <BookDemoTrigger className={styles.requestADemoWrapper}>
            <div className={styles.requestADemo}>Book a Demo</div>
          </BookDemoTrigger>
        </div>
      </main>
       <TalkToExpertButton />
      <Footer />
    </>
  );
}
