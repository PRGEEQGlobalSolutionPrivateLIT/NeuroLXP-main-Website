import type { NextPage } from "next";

import Image from "next/image";

import styles from "./extend.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const ExtendedEnterpriseLearning: NextPage = () => {

  return (

    <>

      <Header />

      <div className={styles.extendedEnterpriseLearning}>

      <div className={styles.frameDiv}>

        <div className={styles.resourcesWrapper}>

          <div className={styles.useCases}>Resources</div>

        </div>

        <div className={styles.homeParent}>

          <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />

          <div className={styles.resourcesWrapper}>

            <div className={styles.useCases}>Use cases</div>

          </div>

        </div>

        <div className={styles.arrowRightDoubleGroup}>

          <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />

          <b className={styles.useCases}>Extended Enterprise Learning</b>

        </div>

      </div>

      <div className={styles.vectorParent}>

        <svg className={styles.groupChild} width="1440" height="475" viewBox="0 0 1440 475" fill="none" aria-hidden="true">

          <g filter="url(#extendedEnterpriseFrameShadow)">

            <path d="M1 304.682C1 301.92 2.15567 299.521 4.51122 298.078C46.7033 272.244 459.73 23.6761 731.577 24.0003C999.262 24.3196 1395.87 272.158 1436.59 298.06C1438.88 299.515 1440 301.879 1440 304.591V442.97C1440 447.388 1436.69 450.97 1432.27 450.97C1374 450.979 998.628 451.033 731.577 450.969C463.141 450.904 68.5273 450.959 8.71312 450.968C4.29435 450.968 1 447.386 1 442.967V304.682Z" fill="#DFE6E9" />

          </g>

          <defs>

            <filter id="extendedEnterpriseFrameShadow" x="-23" y="0" width="1487" height="475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">

              <feFlood floodOpacity="0" result="BackgroundImageFix" />

              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />

              <feOffset dx="8" dy="8" />

              <feGaussianBlur stdDeviation="8" />

              <feComposite in2="hardAlpha" operator="out" />

              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />

              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1DropShadow" />

              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />

              <feOffset dx="-8" dy="-8" />

              <feGaussianBlur stdDeviation="8" />

              <feComposite in2="hardAlpha2" operator="out" />

              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />

              <feBlend mode="normal" in2="effect1DropShadow" result="effect2DropShadow" />

              <feBlend mode="normal" in="SourceGraphic" in2="effect2DropShadow" result="shape" />

            </filter>

          </defs>

        </svg>

        <div className={styles.frameParent2}>

          <div className={styles.frameParent3}>

            <div className={styles.frameIcon}>Extended Enterprise Learning</div>

            <div className={styles.extendLearningBeyondYourWoParent}>

              <b className={styles.extendLearningBeyond}>Extend Learning Beyond Your Workforce</b>

              <div className={styles.trainPartnersVendors}>Train partners, vendors, distributors, and customers on one connected platform.</div>

            </div>

          </div>

          <div className={styles.frameParent4}>

            <div className={`${styles.frameChild2} ${styles.heroPillBlue}`}>Partner Training</div>

            <div className={`${styles.frameChild2} ${styles.heroPillPink}`}>Product Knowledge</div>

            <div className={`${styles.frameChild4} ${styles.heroPillGreen}`}>Certifications</div>

            <div className={`${styles.frameChild4} ${styles.heroPillPurple}`}>Compliance</div>

          </div>

        </div>

      </div>

      <div className={styles.frameParent5}>

        <div className={styles.frameParent6}>

          <div className={styles.frameWrapper}>

            <div className={styles.onePlatformEveryStakeholdeWrapper}>

              <b className={styles.onePlatformEvery}>One Platform! Every Stakeholder!</b>

            </div>

          </div>

          <div className={styles.neurolxpConnectsYour}>NeuroLXP connects your ecosystem with consistent learning and stronger performance.</div>

        </div>

        <div className={styles.frameParent7}>

          <div className={styles.frameChild6}>

            <div className={styles.stakeholderTimelineRail} />

            <div className={`${styles.stakeholderTimelineNode} ${styles.stakeholderTimelineNode1}`}>

              <div className={`${styles.stakeholderTimelineInner} ${styles.stakeholderTimelineInnerPink}`}>

                <Image className={styles.stakeholderTimelineIcon} src="/icons/ideapink.svg" width={40} height={40} alt="" />

              </div>

            </div>

            <div className={`${styles.stakeholderTimelineNode} ${styles.stakeholderTimelineNode2}`}>

              <div className={`${styles.stakeholderTimelineInner} ${styles.stakeholderTimelineInnerBlue}`}>

                <Image className={styles.stakeholderTimelineIcon} src="/icons/globeblue.svg" width={40} height={40} alt="" />

              </div>

            </div>

            <div className={`${styles.stakeholderTimelineNode} ${styles.stakeholderTimelineNode3}`}>

              <div className={`${styles.stakeholderTimelineInner} ${styles.stakeholderTimelineInnerPurple}`}>

                <Image className={styles.stakeholderTimelineIcon} src="/icons/target-purple.svg" width={40} height={40} alt="" />

              </div>

            </div>

            <div className={`${styles.stakeholderTimelineNode} ${styles.stakeholderTimelineNode4}`}>

              <div className={`${styles.stakeholderTimelineInner} ${styles.stakeholderTimelineInnerGreen}`}>

                <Image className={styles.stakeholderTimelineIcon} src="/icons/chartup-green.svg" width={40} height={40} alt="" />

              </div>

            </div>

          </div>

          <div className={styles.frameParent8}>

            <div className={styles.frameWrapper2}>

              <div className={styles.stakeholderCardContent}>

                <div className={`${styles.stakeholderChallenge} ${styles.stakeholderChallengePink}`}> 1</div>

                <b className={styles.stakeholderCardTitle}>Inconsistent Knowledge</b>

                <div className={styles.stakeholderCardDescription}>Partners may lack up-to-date product and process knowledge.</div>

              </div>

              <div className={`${styles.stakeholderHelpBox} ${styles.stakeholderHelpPink}`}>

                {/* <b className={`${styles.stakeholderHelpTitle} ${styles.stakeholderHelpTitlePink}`}>HOW NEUROLXP HELPS</b> */}

                <div className={styles.stakeholderHelpText}>Centralized training keeps partners informed and aligned.</div>

              </div>

            </div>

            <div className={styles.frameWrapper2}>

              <div className={styles.stakeholderCardContent}>

                <div className={`${styles.stakeholderChallenge} ${styles.stakeholderChallengeBlue}`}> 2</div>

                <b className={styles.stakeholderCardTitle}>Global Training</b>

                <div className={styles.stakeholderCardDescription}>Global partners often lack consistent training across regions.</div>

              </div>

              <div className={`${styles.stakeholderHelpBox} ${styles.stakeholderHelpBlue}`}>

                {/* <b className={`${styles.stakeholderHelpTitle} ${styles.stakeholderHelpTitleBlue}`}>HOW NEUROLXP HELPS</b> */}

                <div className={styles.stakeholderHelpText}>Deliver consistent learning anytime, anywhere.</div>

              </div>

            </div>

            <div className={styles.frameWrapper2}>

              <div className={styles.stakeholderCardContent}>

                <div className={`${styles.stakeholderChallenge} ${styles.stakeholderChallengePurple}`}> 3</div>

                <b className={styles.stakeholderCardTitle}>Product &amp; Brand Consistency</b>

                <div className={styles.stakeholderCardDescription}>Poor training can lead to inconsistent messaging and product usage.</div>

              </div>

              <div className={`${styles.stakeholderHelpBox} ${styles.stakeholderHelpPurple}`}>

                {/* <b className={`${styles.stakeholderHelpTitle} ${styles.stakeholderHelpTitleBlue}`}>HOW NEUROLXP HELPS</b> */}

                <div className={styles.stakeholderHelpText}>Build product expertise through training and certifications.</div>

              </div>

            </div>

            <div className={styles.frameWrapper2}>

              <div className={styles.stakeholderCardContent}>

                <div className={`${styles.stakeholderChallenge} ${styles.stakeholderChallengeGreen}`}>4</div>

                <b className={styles.stakeholderCardTitle}>Progress Tracking</b>

                <div className={styles.stakeholderCardDescription}>Track partner training, certifications, and compliance with ease.</div>

              </div>

              <div className={`${styles.stakeholderHelpBox} ${styles.stakeholderHelpGreen}`}>

                {/* <b className={`${styles.stakeholderHelpTitle} ${styles.stakeholderHelpTitleBlue}`}>HOW NEUROLXP HELPS</b> */}

                <div className={styles.stakeholderHelpText}>Solution: Track completion, certifications, and compliance with analytics.</div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className={styles.frameParent13}>

          <div className={styles.benefitsExpertButtonSlot} data-expert-button-slot />

        <div className={styles.frameParent14}>

          <div className={styles.frameChild15}>Benefits</div>

          <div className={styles.benefitsOfExtendedEnterprisParent}>

            <b className={styles.benefitsOfExtendedContainer}>

              <span className={styles.benefitsOfExtended}>Benefits of Extended</span>

              <span className={styles.enterpriseLearning}> Enterprise Learning</span>

            </b>

            <div className={styles.aUnifiedLearning}>

              A unified learning environment strengthens collaboration and performance across the full enterprise network.

              <br />

              <br />

            </div>

          </div>

        </div>

        <div className={styles.frameParent15}>

          <div className={styles.frameParent16}>

            <div className={styles.frameParent17}>

              <div className={styles.frameChild16}>

                <div className={styles.benefitIconInner}>

                  <Image className={styles.benefitIconImage} src="/icons/check.svg" width={34} height={34} alt="" />

                </div>

              </div>

              <div className={styles.consistentTrainingParent}>

                <b className={styles.consistentTraining}>Consistent Training</b>

                <div className={styles.standardizeLearningAcross}>Standardize learning across your ecosystem.</div>

              </div>

            </div>

            <div className={styles.frameParent18}>

              <div className={styles.frameChild16}>

                <div className={styles.benefitIconInner}>

                  <Image className={styles.benefitIconImage} src="/icons/security-check.svg" width={34} height={34} alt="" />

                </div>

              </div>

              <div className={styles.consistentTrainingParent}>

                <b className={styles.consistentTraining}>Brand Consistency</b>

                <div className={styles.deliverConsistentCustomer}>Deliver consistent customer experiences.</div>

              </div>

            </div>

            <div className={styles.frameParent19}>

              <div className={styles.frameChild16}>

                <div className={styles.benefitIconInner}>

                  <Image className={styles.benefitIconImage} src="/icons/chartdarkgreen.svg" width={34} height={34} alt="" />

                </div>

              </div>

              <div className={styles.consistentTrainingParent}>

                <b className={styles.complianceTracking}>Compliance Tracking</b>

                <div className={styles.monitorCertificationsAnd}>Monitor certifications and training completion.</div>

              </div>

            </div>

          </div>

          <div className={styles.frameParent20}>

            <div className={styles.frameParent17}>

              <div className={styles.frameChild16}>

                <div className={styles.benefitIconInner}>

                  <Image className={styles.benefitIconImage} src="/icons/bulbpurple.svg" width={34} height={34} alt="" />

                </div>

              </div>

              <div className={styles.betterProductKnowledgeParent}>

                <b className={styles.consistentTraining}>Better Product Knowledge</b>

                <div className={styles.improveProductUnderstanding}>Improve product understanding and expertise.</div>

              </div>

            </div>

            <div className={styles.frameParent22}>

              <div className={styles.frameChild16}>

                <div className={styles.benefitIconInner}>

                  <Image className={styles.benefitIconImage} src="/icons/globe-02.svg" width={34} height={34} alt="" />

                </div>

              </div>

              <div className={styles.consistentTrainingParent}>

                <b className={styles.globalScale}>Global Scale</b>

                <div className={styles.standardizeLearningAcross}>Train external audiences worldwide.</div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className={styles.frameParent23}>

        <div className={styles.frameParent24}>

          <div className={styles.empowerYourExtendedEnterpriParent}>

            <b className={styles.empowerYourExtended}>
  Empower Your
  <br />
  Extended <span className={styles.enterpriseBlue}>Enterprise</span>
</b>

            <div className={styles.neurolxpConnectsTrains}>

              NeuroLXP connects, trains, and empowers

              <br />

              your entire business ecosystem.

            </div>

          </div>

          <BookDemoTrigger>

            <div className={styles.frameWrapper10}>

              <span className={styles.frameChild21}>Book a Demo</span>

            </div>

          </BookDemoTrigger>

        </div>

        <div className={styles.empowerImageWrapper}>

          <Image className={styles.departmentMeeting1Icon} src="/images/discussion.webp" width={633} height={496} sizes="(max-width: 768px) 100vw, 633px" alt="Business team reviewing reports around a table" />

        </div>

      </div>

      </div>

      <Footer />

    </>

  );

};

export default ExtendedEnterpriseLearning;
