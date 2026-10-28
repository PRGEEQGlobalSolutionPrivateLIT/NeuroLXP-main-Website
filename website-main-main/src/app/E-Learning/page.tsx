"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useRef, useState } from "react";

import styles from "./E-Learning.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

export default function ELearningPage() {

  const router = useRouter();

const futureReadyVideoRef = useRef<HTMLIFrameElement>(null);

  const [isFutureReadyVideoPaused, setIsFutureReadyVideoPaused] = useState(false);

 
const toggleFutureReadyVideo = () => {
    const iframe = futureReadyVideoRef.current;
    if (!iframe) return;

    const shouldPlay = isFutureReadyVideoPaused;

    iframe.contentWindow?.postMessage(
        JSON.stringify({
            event: "command",
            func: shouldPlay ? "playVideo" : "pauseVideo",
            args: []
        }),
        "https://www.youtube.com"
    );

    setIsFutureReadyVideoPaused(!shouldPlay);
};

  return (

    <>

      <Header />

      <main className={styles.eLearning}>

        <title>E-Learning Solutions | NeuroLXP</title>

        <Image className={styles.eLearningChild} src="/images/Ellipse 383.webp" width={1487} height={1413} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} priority />

        <div className={styles.frameParent}>

          <div className={styles.frameWrapper}>

            <div className={styles.frameGroup}>

              <div className={styles.frameContainer}>

                <div className={styles.frameChild}>E-Learning Solutions</div>

                <h1 className={styles.deliverEngagingDigitalContainer} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>

                  <span className={styles.deliverEngaging}>Deliver Engaging</span>

                  <span className={styles.digitalLearning}>{` Digital Learning `}</span>

                  <span className={styles.deliverEngaging}>

                    Experiences

                    <br />

                  </span>

                </h1>

              </div>

              <div className={styles.neurolxpEmpowersOrganization}>{`NeuroLXP empowers organizations with interactive, scalable, and engaging digital learning experiences. `}</div>

            </div>

          </div>

          <div className={styles.frameDiv}>

            <BookDemoTrigger className={styles.bookDemoButton}>

              Book a Demo

            </BookDemoTrigger>

            <button

              type="button"

              className={styles.frameWrapper2}

              onClick={() => router.push("/HomePage")}

            >

              <div className={styles.startLearningWrapper}>

                <div className={styles.startLearning}>Start Learning</div>

              </div>

            </button>

          </div>

        </div>

        <div className={styles.frameParent5}>

          <div className={styles.ourCustomersWrapper}>

            <div className={styles.solutionsFor}>Our Customers</div>

          </div>

          <div className={styles.homeParent}>

            <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

            <div className={styles.ourCustomersWrapper}>

              <div className={styles.solutionsFor}>Solutions for</div>

            </div>

          </div>

          <div className={styles.arrowRightDoubleGroup}>

            <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

            <span className={styles.solutionsFor}>{`E-Learning `}</span>

          </div>

        </div>

        <div className={styles.eLearningInner}>

          <div className={styles.learningStats}>

            <div className={`${styles.learningStat} ${styles.learningStatBlue}`}>

              <strong>50k+</strong>

              <span>Active learners</span>

            </div>

            <div className={`${styles.learningStat} ${styles.learningStatPink}`}>

              <strong>92%</strong>

              <span>Completion</span>

            </div>

            <div className={`${styles.learningStat} ${styles.learningStatGreen}`}>

              <strong>24/7</strong>

              <span>Learning Access</span>

            </div>

          </div>

        </div>

        <div className={styles.frameParent6}>

          <div className={styles.frameParent7}>

            <div className={styles.keyChallengesBadge}>Key Challenges</div>

            <div className={styles.addressingKeyChallengesInEParent}>

              <h2 className={styles.addressingKeyChallenges} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Addressing key Challenges in <span className={styles.headingLastWord}>E-Learning</span></h2>

              <div className={styles.neurolxpHelpsOrganizations}>NeuroLXP helps organizations deliver engaging, accessible, and measurable learning experiences.</div>

            </div>

          </div>

          <div className={`${styles.frameParent8} ${styles.challengeSection}`}>

            <div className={styles.challengeTimeline}>

              <div className={styles.challengeLine} />

              <div className={`${styles.challengeIconNode} ${styles.challengeIconPink}`}>

                <Image className={styles.challengeIconImage} src="/icons/ideapink.svg" width={40} height={40} alt="Passive online learning challenge" />

              </div>

              <div className={`${styles.challengeIconNode} ${styles.challengeIconBlue}`}>

                <Image className={styles.challengeIconImage} src="/icons/layers.svg" width={40} height={40} alt="Learning content management challenge" />

              </div>

              <div className={`${styles.challengeIconNode} ${styles.challengeIconPurple}`}>

                <Image className={styles.challengeIconImage} src="/icons/champion-1.svg" width={40} height={40} alt="Learner engagement challenge" />

              </div>

              <div className={`${styles.challengeIconNode} ${styles.challengeIconGreen}`}>

                <Image className={styles.challengeIconImage} src="/icons/chart.svg" width={40} height={40} alt="Learning effectiveness challenge" />

              </div>

            </div>

            <div className={styles.challengeCards}>

              <article className={styles.challengeCard}>

                <div className={styles.challengeMainContent}>

                  <span className={`${styles.challengeNumber} ${styles.challengeNumberPink}`}> 1</span>

                  <h3>Passive Online <span className={styles.headingLastWord}>Learning</span></h3>

                  <p>Static content reduces engagement and knowledge retention.</p>

                </div>

                <div className={`${styles.challengeSolution} ${styles.challengeSolutionPink}`}>

                  <strong>HOW NEUROLXP HELPS</strong>

                  <span>Interactive learning boosts engagement and retention.</span>

                </div>

              </article>

              <article className={styles.challengeCard}>

                <div className={styles.challengeMainContent}>

                  <span className={`${styles.challengeNumber} ${styles.challengeNumberBlue}`}> 2</span>

                  <h3>Managing Large Learning <span className={styles.headingLastWord}>Content</span></h3>

                  <p>Managing videos, PDFs, presentations, and assessments is complex.</p>

                </div>

                <div className={`${styles.challengeSolution} ${styles.challengeSolutionBlue}`}>

                  <strong>HOW NEUROLXP HELPS</strong>

                  <span>Centralized content organization, management and delivery.</span>

                </div>

              </article>

              <article className={styles.challengeCard}>

                <div className={styles.challengeMainContent}>

                  <span className={`${styles.challengeNumber} ${styles.challengeNumberPurple}`}> 3</span>

                  <h3>Low Learner <span className={styles.headingLastWord}>Engagement</span></h3>

                  <p>Maintaining learner motivation is challenging.</p>

                </div>

                <div className={`${styles.challengeSolution} ${styles.challengeSolutionPurple}`}>

                  <strong>HOW NEUROLXP HELPS</strong>

<span>Gamification, social learning, and assessments boost engagement.</span>
                </div>

              </article>

              <article className={styles.challengeCard}>

                <div className={styles.challengeMainContent}>

                  <span className={`${styles.challengeNumber} ${styles.challengeNumberGreen}`}> 4</span>

                  <h3>Measuring Learning <span className={styles.headingLastWord}>Effectiveness</span></h3>

                  <p>Tracking learning outcomes is challenging.</p>

                </div>

                <div className={`${styles.challengeSolution} ${styles.challengeSolutionGreen}`}>

                  <strong>HOW NEUROLXP HELPS</strong>

                  <span>Advanced analytics deliver actionable learning insights.</span>

                </div>

              </article>

            </div>

          </div>

        </div>

        <div className={styles.eLearningItem} />

        <div className={styles.eLearningInner2}>

          <div className={styles.frameChild14} />

        </div>

        <div className={styles.frameParent15}>

          <div className={styles.frameParent16}>

            <div className={styles.frameParent17}>

              <div className={styles.frameParent18}>

                <div className={styles.platformFeaturesBadge}>Platform Features</div>

                <div className={styles.keyFeaturesOfNeurolxpELeaWrapper}>

                  <h2 className={styles.keyFeaturesOf} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Key Features of NeuroLXP E-Learning <span className={styles.headingLastWord}>Platform</span></h2>

                </div>

              </div>

              <div className={styles.frameParent19}>

                <div className={styles.frameParent20}>

                  <div className={styles.ellipseParent}>

                    <div className={styles.ellipseDiv} />

                    <div className={styles.frameChild18} />

                    <div className={styles.frameParent21}>

                      <div className={styles.ellipseGroup}>

                        <div className={styles.frameChild16} />

                        <h3 className={styles.aiPoweredContent} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>AI-Powered <span className={styles.headingLastWord}>Content</span></h3>

                        <Image className={styles.aiBookIcon} src="/icons/ai-book.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                      </div>

                      {/* <div className={styles.smartContentCuration}>Smart content curation.</div> */}

                    </div>

                  </div>

                  <div className={styles.ellipseParent}>

                    <div className={styles.ellipseDiv} />

                    <div className={styles.frameChild18} />

                    <div className={styles.frameParent21}>

                      <div className={styles.ellipseGroup}>

                        <div className={styles.frameChild19} />

                        <h3 className={styles.aiPoweredContent} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Mobile <span className={styles.headingLastWord}>Learning</span></h3>

                        <Image className={styles.aiBookIcon} src="/icons/smart-phone.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                      </div>

                      {/* <div className={styles.smartContentCuration}>Learn anytime, anywhere.</div> */}

                    </div>

                  </div>

                </div>

                <div className={styles.frameParent20}>

                  <div className={styles.ellipseParent}>

                    <div className={styles.ellipseDiv} />

                    <div className={styles.frameChild18} />

                    <div className={styles.frameParent21}>

                      <div className={styles.ellipseGroup}>

                        <div className={styles.frameChild22} />

                        <h3 className={styles.aiPoweredContent} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Skill <span className={styles.headingLastWord}>Pathways</span></h3>

                        <Image className={styles.aiBookIcon} src="/icons/graduation-cap.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                      </div>

                      {/* <div className={styles.smartContentCuration}>Career-ready skills</div> */}

                    </div>

                  </div>

                  <div className={styles.ellipseParent}>

                    <div className={styles.ellipseDiv} />

                    <div className={styles.frameChild18} />

                    <div className={styles.frameParent21}>

                      <div className={styles.ellipseGroup}>

                        <div className={styles.frameChild25} />

                        <h3 className={styles.aiPoweredContent} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Scalable <span className={styles.headingLastWord}>Platform</span></h3>

                        <Image className={styles.aiBookIcon} src="/icons/justice.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                      </div>

                      {/* <div className={styles.smartContentCuration}>Scalable digital learning.</div> */}

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className={styles.frameParent7}>

              <div className={styles.idealForBadge}>Ideal For</div>
              <div
                className={styles.idealForExpertButtonSlot}
                data-expert-button-slot
              />

              <div className={styles.addressingKeyChallengesInEParent}>

                <h2 className={styles.addressingKeyChallenges} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Ideal for Diverse Learning <span className={styles.headingLastWord}>Environments</span></h2>

                <div className={styles.neurolxpSupportsA}>

                  NeuroLXP supports a wide range of digital learning initiatives.<br /><br />

                </div>

              </div>

            </div>

          </div>

          <div className={styles.frameParent27}>

            <div className={styles.frameParent28}>

              <div className={styles.frameWrapper12}>

                <div className={styles.rectangleParent}>

                  <div className={styles.rectangleDiv} />

                  <div className={styles.frameChild27} />

                  <div className={styles.frameParent29}>

                    <div className={styles.ourCustomersWrapper}>

                      <Image className={styles.mortarboard01Icon} src="/icons/cap.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                    </div>

                    <div className={styles.onlineEducationParent}>

                      <h3 className={styles.onlineEducation} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Online <span className={styles.headingLastWord}>Education</span></h3>

                      <div className={styles.universitiesSchools}>{`Universities & schools`}</div>

                    </div>

                  </div>

                </div>

              </div>

              <div className={styles.frameWrapper13}>

                <div className={styles.rectangleParent}>

                  <div className={styles.rectangleDiv} />

                  <div className={styles.frameChild29} />

                  <div className={styles.frameParent30}>

                    <div className={styles.ourCustomersWrapper}>

                      <Image className={styles.mortarboard01Icon} src="/icons/university-usergroup.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                    </div>

                    <div className={styles.corporateTrainingParent}>

                      <h3 className={styles.corporateTraining} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Corporate <span className={styles.headingLastWord}>Training</span></h3>

                      <div className={styles.employeeDevelopment}>Employee development</div>

                    </div>

                  </div>

                </div>

              </div>

              <div className={styles.frameWrapper14}>

                <div className={styles.rectangleParent}>

                  <div className={styles.rectangleDiv} />

                  <div className={styles.frameChild29} />

                  <div className={styles.frameParent30}>

                    <div className={styles.ourCustomersWrapper}>

                      <div className={styles.ourCustomersWrapper}>

                        <Image className={styles.mortarboard01Icon} src="/icons/certificate.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                      </div>

                    </div>

                    <div className={styles.corporateTrainingParent}>

                      <h3 className={styles.corporateTraining} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Certification <span className={styles.headingLastWord}>Programs</span></h3>

                      <div className={styles.professionalCertifications}>Professional certifications</div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className={styles.frameParent32}>

              <div className={styles.frameWrapper16}>

                <div className={styles.rectangleParent}>

                  <div className={styles.rectangleDiv} />

                  <div className={styles.frameChild29} />

                  <div className={styles.frameParent29}>

                    <div className={styles.ourCustomersWrapper}>

                      <Image className={styles.mortarboard01Icon} src="/icons/idea.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                    </div>

                    <div className={styles.onlineEducationParent}>

                      <h3 className={styles.skillDevelopment} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Skill <span className={styles.headingLastWord}>Development</span></h3>

                      <div className={styles.universitiesSchools}>Workforce upskilling</div>

                    </div>

                  </div>

                </div>

              </div>

              <div className={styles.frameWrapper16}>

                <div className={styles.rectangleParent}>

                  <div className={styles.rectangleDiv} />

                  <div className={styles.frameChild29} />

                  <div className={styles.frameParent29}>

                    <div className={styles.ourCustomersWrapper}>

                      <Image className={styles.mortarboard01Icon} src="/icons/chat.svg" width={50} height={50} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                    </div>

                    <div className={styles.onlineEducationParent}>

                      <h3 className={styles.customerEducation} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>Customer <span className={styles.headingLastWord}>Education</span></h3>

                      <div className={styles.customerPartner}>{`Customer & partner training`}</div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className={styles.frameParent35}>

          <div className={styles.peopleTakingPartBusinessEvParent}>

            <div className={styles.peopleTakingPartBusinessEv} />

            <div className={styles.image21} />

            <div className={styles.groupYoungBusinesspeopleUsi} />

            <div className={styles.frameParent36}>

              <div className={styles.frameParent37}>

                <div className={styles.frameParent38}>

                  <div className={styles.neuroLxpBadge}>
  <span className={styles.neuroLxpBadgeText}>
    NeuroLXP<sup className={styles.neuroLxpBadgeTm}>TM</sup>
  </span>
</div>

                  <h2 className={styles.futureReadyELearning} style={{ margin: 0, padding: 0, fontSize: "inherit", fontFamily: "inherit", color: "inherit", fontWeight: "bold" }}>

                    <span className={styles.deliverEngaging}>{`Future-Ready `}</span>

                    <span className={`${styles.digitalLearning} ${styles.eLearningNoBreak}`}>E-Learning</span>

                  </h2>

                </div>

                <div className={styles.interactiveScalableLearning}>Interactive, scalable learning that drives better outcomes.</div>

              </div>

              <button

                type="button"

                className={styles.frameWrapper18}

                onClick={() => router.push("/HomePage")}

              >

                <div className={styles.getStartedWrapper}>

                  <div className={styles.getStarted}>{`Get Started `}</div>

                </div>

              </button>

            </div>

            <div className={styles.futureReadyVideoWrapper}>

            

<div className={styles.futureReadyVideoZoom}>
    <iframe
        ref={futureReadyVideoRef}
        className={styles.futureReadyVideo}
        src="https://www.youtube.com/embed/fWkMcYOd73c?autoplay=1&mute=1&loop=1&playlist=fWkMcYOd73c&playsinline=1&controls=0&enablejsapi=1"
        title="Future Ready Video"
        loading="eager"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
    />
</div>



            </div>

          </div>

          <div className={styles.image20} />

        </div>

      </main>

      <Footer />

    </>

  );

}
