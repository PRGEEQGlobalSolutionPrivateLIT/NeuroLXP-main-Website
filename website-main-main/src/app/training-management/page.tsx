"use client";

import type { NextPage } from "next";

import Image from "next/image";

import { useRouter } from "next/navigation";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

import styles from "./training-management.module.css";

const TrainingManagement: NextPage = () => {

  const router = useRouter();

  return (

    <>

      <title>Training Management | NeuroLXP</title>

      <div style={{ width: "100%", position: "relative", zIndex: 10000, overflow: "visible" }}>

        <Header />

      </div>

      <main id="main-content" className={styles.trainingManagement} tabIndex={-1}>

      <div className={styles.frameDiv}>

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

          <div className={styles.solutionsForNav}>Training Management</div>

        </div>

      </div>

      <div className={styles.trainingManagementChild} />

      <div className={styles.frameParent2}>

        <div className={styles.frameWrapper}>

          <div className={styles.frameParent3}>

            <div className={styles.frameParent4}>

              <div className={styles.frameParent5}>

                <div className={styles.frameParent6}>

                  <div className={styles.frameWrapper2}>

                    <div className={styles.frameWrapper3}>

                      <div className={styles.frameWrapper4}>

                        <div className={styles.frameWrapper5}>

                          <div className={styles.trainingManagementPill}>Training Management</div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className={styles.frameWrapper6}>

                    <Image className={styles.trainingHeroBackground} src="/images/trainingbg1.webp" width={1266} height={309} sizes="1266px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} priority />

                    <div className={styles.smarterTrainingManagementWiParent}>

                      <h1 className={styles.smarterTrainingManagementContainer}>

                        <span className={styles.smarter}>{`Smarter `}</span>

                        <span className={styles.trainingManagement3}>{`Training Management `}</span>

                        <span className={styles.smarter}>

                          with NeuroLXP

                          <br />

                        </span>

                      </h1>

                      <div className={styles.transformLearningWith}>Transform learning with NeuroLXP, a scalable platform for personalized and data-driven training.</div>

                    </div>

                  </div>

                </div>

                <div className={styles.coreFeaturesParent}>

                  <h2 className={styles.coreFeatures}>Core Features</h2>

                  <div className={styles.frameParent7}>

                    <div className={`${styles.frameParent8} ${styles.coreFeatureCard}`}>

                      <div className={styles.personalizedCard}>

                        <Image className={styles.coreFeatureCardSvg} src="/icons/core-feature-card.svg" width={326} height={370} sizes="283px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        <div className={styles.personalizedCardTop} aria-hidden="true" />

                        <div className={styles.personalizedIconHexagon}>

                          <Image className={styles.personalizedIcon} src="/icons/flower.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        </div>

                        <div className={styles.personalizedCardContent}>

                          <h3>Personalized<br />Learning</h3>

                          <p>Adaptive learning paths.</p>

                        </div>

                      </div>

                    </div>

                    <div className={`${styles.frameParent8} ${styles.coreFeatureCard}`}>

                      <div className={styles.personalizedCard}>

                        <Image className={styles.coreFeatureCardSvg} src="/icons/core-feature-card.svg" width={326} height={370} sizes="283px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        <div className={styles.personalizedCardTop} aria-hidden="true" />

                        <div className={styles.personalizedIconHexagon}>

                          <Image className={styles.personalizedIcon} src="/icons/folder.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        </div>

                        <div className={styles.personalizedCardContent}>

                          <h3>Centralized<br />Training</h3>

                          <p>One training platform.</p>

                        </div>

                      </div>

                    </div>

                    <div className={`${styles.frameParent8} ${styles.coreFeatureCard}`}>

                      <div className={styles.personalizedCard}>

                        <Image className={styles.coreFeatureCardSvg} src="/icons/core-feature-card.svg" width={326} height={370} sizes="283px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        <div className={styles.personalizedCardTop} aria-hidden="true" />

                        <div className={styles.personalizedIconHexagon}>

                          <Image className={styles.personalizedIcon} src="/icons/chartup-purple.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        </div>

                        <div className={styles.personalizedCardContent}>

                          <h3>Real-Time<br />Analytics</h3>

                          <p>Track learner progress.</p>

                        </div>

                      </div>

                    </div>

                    <div className={`${styles.frameParent8} ${styles.coreFeatureCard}`}>

                      <div className={styles.personalizedCard}>

                        <Image className={styles.coreFeatureCardSvg} src="/icons/core-feature-card.svg" width={326} height={370} sizes="283px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        <div className={styles.personalizedCardTop} aria-hidden="true" />

                        <div className={styles.personalizedIconHexagon}>

                          <Image className={styles.personalizedIcon} src="/icons/traininglayers.svg" width={34} height={34} sizes="34px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        </div>

                        <div className={styles.personalizedCardContent}>

                          <h3>Skill<br />Development</h3>

                          <p>Build workforce skills.</p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className={styles.frameParent19}>

                <div className={styles.peopleTakingPartBusinessEvParent}>

                  <div className={styles.peopleTakingPartBusinessEv} />

                  <div className={styles.image21} />

                  <div className={styles.groupYoungBusinesspeopleUsi} />

                  <div className={styles.frameParent20}>

                    <div className={styles.frameWrapper8}>

                      <div className={styles.frameParent21}>

                        <div className={styles.frameParent22}>

<div className={styles.whyNeurolxpPill}>
  <span>Why NeuroLXP</span>
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
</div>
                          <h2 className={styles.upgradeFromLms}>Upgrade from LMS to <span className={styles.headingLastWord}>NeuroLXP</span></h2>

                        </div>

                        <div className={styles.neurolxpDeliversEngaging}>NeuroLXP delivers engaging learning faster onboarding, and continuous workforce development.</div>

                      </div>

                    </div>

                    <div className={styles.frameParent23}>

                      <div className={styles.frameWrapper9}>

                        <div className={styles.bookmarkCheck01Parent}>

                          <Image className={styles.bookmarkCheck01Icon} src="/icons/bookmark.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                          <div className={styles.fasterOnboarding}>Faster onboarding</div>

                        </div>

                      </div>

                      <div className={styles.frameWrapper9}>

                        <div className={styles.bookmarkCheck01Group}>

                          <Image className={styles.bookmarkCheck01Icon} src="/icons/bookmark.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                          <div className={styles.fasterOnboarding}>Scalable teams</div>

                        </div>

                      </div>

                      <div className={styles.frameWrapper9}>

                        <div className={styles.bookmarkCheck01Parent}>

                          <Image className={styles.bookmarkCheck01Icon} src="/icons/bookmark.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                          <div className={styles.fasterOnboarding}>Compliance tracking</div>

                        </div>

                      </div>

                      <div className={styles.frameWrapper9}>

                        <div className={styles.bookmarkCheck01Parent}>

                          <Image className={styles.bookmarkCheck01Icon} src="/icons/bookmark.svg" width={32} height={32} sizes="100vw" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                          <div className={styles.continuousLearning}>Continuous learning</div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div className={styles.image20} />

              </div>

            </div>

            <div className={styles.frameParent24}>
              <div
                className={styles.howItWorksExpertButtonSlot}
                data-expert-button-slot
              />

              <div className={styles.howItWorksWrapper}>

                <h2 className={styles.coreFeatures}>How it Works</h2>

              </div>

              <div className={styles.frameParent25}>

                <div className={styles.frameParent26}>

                  <div className={styles.frameWrapper13}>

                    <div className={styles.frameParent27}>

                      <div className={styles.image20Parent}>

                        <div className={styles.image202} />

                        <div className={styles.improveStudentParticipation}>

                          Improve student participation and academic performance.

                          <br />

                          <br />

                        </div>

                        <div className={styles.image20Group}>

                          <div className={styles.image203} />

                          <div className={styles.createOrIntegrate}><span>Create or integrate training content</span></div>

                        </div>

                      </div>

                      <div className={styles.howItWorksIconOuter}>

                        <div className={styles.howItWorksIconInner}>

                          <Image className={styles.howItWorksStepIcon} src="/icons/settings.svg" width={50} height={50} sizes="50px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className={styles.frameWrapper13}>

                    <div className={styles.frameParent27}>

                      <div className={styles.image20Parent}>

                        <div className={styles.image202} />

                        <div className={styles.improveStudentParticipation}>

                          Improve student participation and academic performance.

                          <br />

                          <br />

                        </div>

                        <div className={styles.image20Group}>

                          <div className={styles.image203} />

                          <div className={styles.engageLearnersWith}>

                           <span className={styles.headingLine}>Engage learners with{" "}</span>

                           <span className={styles.headingLine}>

                             <span style={{ whiteSpace: "nowrap" }}>AI-driven experiences</span>

                           </span>

                         </div>

                        </div>

                      </div>

                      <div className={styles.howItWorksIconOuter}>

                        <div className={styles.howItWorksIconInner}>

                          <Image className={styles.howItWorksStepIcon} src="/icons/group.svg" width={50} height={50} sizes="50px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div className={styles.frameParent29}>

                  <div className={styles.frameWrapper13}>

                    <div className={styles.frameParent27}>

                      <div className={styles.image20Parent}>

                        <div className={styles.image202} />

                        <div className={styles.improveStudentParticipation}>

                          Improve student participation and academic performance.

                          <br />

                          <br />

                        </div>

                        <div className={styles.image20Group}>

                          <div className={styles.image203} />

                          <div className={styles.createOrIntegrate}><span>Assign personalized learning paths</span></div>

                        </div>

                      </div>

                      <div className={styles.howItWorksIconOuter}>

                        <div className={styles.howItWorksIconInner}>

                          <Image className={styles.howItWorksStepIcon} src="/icons/graduationcappurple.svg" width={50} height={50} sizes="50px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className={styles.frameWrapper13}>

                    <div className={styles.frameParent27}>

                      <div className={styles.image20Parent}>

                        <div className={styles.image202} />

                        <div className={styles.improveStudentParticipation}>

                          Improve student participation and academic performance.

                          <br />

                          <br />

                        </div>

                        <div className={styles.image20Group}>

                          <div className={styles.image203} />

                          <div className={styles.createOrIntegrate}><span>Track and optimize with analytics</span></div>

                        </div>

                      </div>

                      <div className={styles.howItWorksIconOuter}>

                        <div className={styles.howItWorksIconInner}>

                          <Image className={styles.howItWorksStepIcon} src="/icons/chart.svg" width={50} height={50} sizes="50px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className={styles.rectangleParent}>

          <Image className={styles.transformTrainingBackground} src="/images/trainingbg2.webp" width={1280} height={505} sizes="1280px" alt="" aria-hidden="true" tabIndex={-1} draggable={false} />

          <div className={styles.frameParent32}>

            <div className={styles.transformTrainingWithNeurolParent}>

              <h2 className={styles.transformTrainingWith}>Transform training with <span className={styles.headingLastWord}>NeuroLXP?</span></h2>

              <div className={styles.empowerYourWorkforce}>Empower your workforce with a modern training system designed for the future.</div>

            </div>

            <div className={styles.frameParent33}>

              <BookDemoTrigger className={styles.frameWrapper17}>

                <div className={styles.bookADemoWrapper}>

                  <div className={styles.bookADemo}>Book a Demo</div>

                </div>

              </BookDemoTrigger>

              <div

                className={styles.startFreeTrialButton}

                onClick={() => router.push("/HomePage")}

                role="button"

                tabIndex={0}

                onKeyDown={(event) => {

                  if (event.key === "Enter" || event.key === " ") {

                    event.preventDefault();

                    router.push("/HomePage");

                  }

                }}

              >

                <div className={styles.startFreeTrialText}>Start Free Trial</div>

              </div>

            </div>

          </div>

          <div className={styles.colleaguesWorkingTogetherPrWrapper}>

            <Image className={styles.colleaguesWorkingTogetherPrIcon} src="/images/trainingimage.webp" width={576} height={505} sizes="576px" alt="Colleagues working together on a training project" />

          </div>

        </div>

      </div>

      </main>

<Footer />

    </>

  );

};

export default TrainingManagement;
