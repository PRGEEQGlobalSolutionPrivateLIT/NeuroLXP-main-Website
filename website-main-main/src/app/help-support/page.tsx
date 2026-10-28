"use client";

import type { NextPage } from "next";

import Image from "next/image";

import styles from "./help.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const HelpAndSupport: NextPage = () => {

    return (<>

      <Header />

      <div className={styles.helpAndSupport}>

        <div className={styles.frameDiv}>

          <div className={styles.resourcesWrapper}>

            <div className={styles.resources2}>Resources</div>

          </div>

          <div className={styles.arrowRightDoubleParent}>

            <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt=""/>

            <b className={styles.resources2}>Help and Support</b>

          </div>

        </div>

        {/* HERO SECTION */}

        <div className={styles.frameParent2}>

          <div className={styles.frameParent3}>

            <div className={styles.frameParent4}>

              <div className={styles.frameParent5}>

                <div className={styles.frameIcon}>

                  Help & Support

                </div>

                <b className={styles.empoweringYouAtContainer}>

                  <span className={styles.empoweringYouAt}>

                    Empowering You at{" "}

                  </span>

                  <span className={styles.everyStep}>

                    Every <span className={styles.headingAccent}>Step</span>

                  </span>

                </b>

              </div>

              <div className={styles.reliableSupportFor}>

                Reliable support for administrators educators, and learners.

              </div>

            </div>

            <BookDemoTrigger>

              <div className={`${styles.frameChild2} ${styles.bookDemoVisual}`}>

                Book a Demo

              </div>

            </BookDemoTrigger>

          </div>

          {/* HERO IMAGE */}

          <div className={styles.frameParent6}>

            <Image className={styles.frameChild3} src="/images/bghelp.png" width={736} height={486} sizes="(max-width: 768px) 100vw, 736px" alt=""/>

            <div className={styles.welcomeSign1Wrapper}>

              <Image className={styles.welcomeSign1Icon} src="/images/young-bearded-man-blue-shirt-with-headphones-with-microphone-smiling-showing-thumbs-up 1.png" width={642} height={440} sizes="(max-width: 768px) 100vw, 642px" alt="Help and support representative" unoptimized/>

            </div>

          </div>

        </div>

        {/* ↑ THIS CLOSING DIV WAS MISSING */}

        {/* COMPREHENSIVE SUPPORT */}

        <div className={styles.comprehensiveSupportParent}>

          <b className={styles.comprehensiveSupport}>

            Comprehensive <span className={styles.headingAccent}>Support</span>

          </b>

          <div className={styles.frameParent7}>

            <div className={`${styles.supportCard} ${styles.supportCardPurple}`}>

              <div className={styles.supportCardInner}>

                <div className={styles.supportCardContent}>

                  <b className={styles.supportCardTitle}>

                    Technical

                    <br />

                    Support

                  </b>

                  <div className={styles.supportCardText}>

                    <span className={styles.supportTextLine}>Fix platform and</span>

                    <span className={styles.supportTextLine}>technical issues</span>

                  </div>

                </div>

                <div className={styles.supportCardAccent}/>

              </div>

            </div>

            <div className={`${styles.supportCard} ${styles.supportCardPink}`}>

              <div className={styles.supportCardInner}>

                <div className={styles.supportCardContent}>

                  <b className={styles.supportCardTitle}>

                    User

                    <br />

                    Onboarding

                  </b>

                  <div className={styles.supportCardText}>

                    <span className={styles.supportTextLine}>Get started with</span>

                    <span className={styles.supportTextLine}>guided assistance</span>

                  </div>

                </div>

                <div className={styles.supportCardAccent}/>

              </div>

            </div>

            <div className={`${styles.supportCard} ${styles.supportCardGreen}`}>

              <div className={styles.supportCardInner}>

                <div className={styles.supportCardContent}>

                  <b className={styles.supportCardTitle}>

                    Feature

                    <br />

                    Guidance

                  </b>

                  <div className={styles.supportCardText}>

                    <span className={styles.supportTextLine}>Explore Platform</span>

                    <span className={styles.supportTextLine}>Features</span>

                  </div>

                </div>

                <div className={styles.supportCardAccent}/>

              </div>

            </div>

            <div className={`${styles.supportCard} ${styles.supportCardBlue}`}>

              <div className={styles.supportCardInner}>

                <div className={styles.supportCardContent}>

                  <b className={styles.supportCardTitle}>

                    Technical

                    <br />

                    Help

                  </b>

                  <div className={styles.supportCardText}>

                    <span className={styles.supportTextLine}>Quickly resolve</span>

                    <span className={styles.supportTextLine}>common issues</span>

                  </div>

                </div>

                <div className={styles.supportCardAccent}/>

              </div>

            </div>

          </div>

        </div>

        {/* KNOWLEDGE & RESOURCES */}

        <div className={styles.helpAndSupportInner}>

          <div className={styles.frameParent8}>

            <div className={styles.frameWrapper}>

              <div className={styles.frameParent9}>

                <div className={styles.knowledgeResourcesWrapper}>

                  <b className={styles.knowledgeResources}>

                    Knowledge & <span className={styles.headingAccent}>Resources</span>

                  </b>

                </div>

                <div className={styles.accessPracticalResources}>

                  Access practical resources to manage and use NeuroLXP

                  effectively.

                </div>

              </div>

            </div>

            <div className={styles.frameWrapper2}>

              <div className={styles.frameParent10}>

                <div className={styles.frameParent11}>

                  <div className={`${styles.resourceIcon} ${styles.resourceIconPink}`}>

                    <div className={styles.resourceIconInner}>

                      <Image src="/icons/compasswhite.svg" width={34} height={34} alt=""/>

                    </div>

                  </div>

                  <b className={styles.gettingStartedGuides}>

                    Getting Started <br className={styles.mobileResourceBreak} />Guides

                  </b>

                </div>

                <div className={styles.frameParent11}>

                  <div className={`${styles.resourceIcon} ${styles.resourceIconPurple}`}>

                    <div className={styles.resourceIconInner}>

                      <Image src="/icons/book-plus.svg" width={34} height={34} alt=""/>

                    </div>

                  </div>

                  <b className={styles.courseCreationTutorials}>

                    Course Creation <br className={styles.mobileResourceBreak} />Tutorials

                  </b>

                </div>

                <div className={styles.frameParent11}>

                  <div className={`${styles.resourceIcon} ${styles.resourceIconBlue}`}>

                    <div className={styles.resourceIconInner}>

                      <Image src="/icons/chart-up.svg" width={34} height={34} alt=""/>

                    </div>

                  </div>

                  <b className={styles.assessmentReporting}>

                    Assessment & Reporting <br className={styles.mobileResourceBreak} />Guides

                  </b>

                </div>

                <div className={styles.frameParent11}>

                  <div className={`${styles.resourceIcon} ${styles.resourceIconTeal}`}>

                    <div className={styles.resourceIconInner}>

                      <Image src="/icons/foldernew.svg" width={34} height={34} alt=""/>

                    </div>

                  </div>

                  <b className={styles.contentManagementResources}>

                    Content Management <br className={styles.mobileResourceBreak} />Resources

                  </b>

                </div>

                <div className={styles.frameParent11}>

                  <div className={`${styles.resourceIcon} ${styles.resourceIconGold}`}>

                    <div className={styles.resourceIconInner}>

                      <Image src="/icons/settingswhite.svg" width={34} height={34} alt=""/>

                    </div>

                  </div>

                  <b className={styles.contentManagementResources}>

                    Platform Configuration <br className={styles.mobileResourceBreak} />Guides

                  </b>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* FINAL SUPPORT SECTION */}

        <div className={styles.helpAndSupportChild}>
          {/* Portal target: does not participate in section layout */}
          <div className={styles.expertButtonSlot} data-expert-button-slot />

          <div className={styles.frameParent16}>

           <div className={styles.frameChild13}>

  <span className={styles.neurolxpBadgeText}>

    NeuroLXP

    <sup className={styles.neurolxpBadgeTm}>TM</sup>

  </span>

</div>

            <div className={styles.supportForYourLearningEcosParent}>

              <b className={styles.supportForYour}>

                Support for Your Learning <span className={styles.headingAccent}>Ecosystem</span>

              </b>

              <div className={styles.fromOnboardingTo}>

                From onboarding to daily management, NeuroLXP supports every

                learning journey.{" "}

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>);

};

export default HelpAndSupport;
