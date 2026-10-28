import type { Metadata, NextPage } from "next";



import Image from "next/image";



import Link from "next/link";



import styles from "./gamified.module.css";



import Header from "../../components/Header/header";



import Footer from "../../components/Footer/footer";



import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";



export const metadata: Metadata = {



  title: "Interactive & Gamified Learning | NeuroLXP",



  description: "Transform passive learning into engaging, interactive, and gamified learning experiences with NeuroLXP.",



};



const InteractiveGamifiedLearning: NextPage = () => {



  return (



    <>



      <Header />



      <main className={styles.interactiveGamifiedLearnin} id="main-content">



      <nav className={styles.frameDiv} aria-label="Breadcrumb">



        <div className={styles.featuresWrapper}>



          <div className={styles.augmentation}>Features</div>



        </div>



        <div className={styles.homeParent}>



          <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />



          <div className={styles.featuresWrapper}>



            <div className={styles.augmentation}>Augmentation</div>



          </div>



        </div>



        <div className={styles.arrowRightDoubleGroup}>



          <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />



          <span className={styles.augmentation} style={{ fontWeight: "bolder" }}>{`Gamified Learning`}</span>



        </div>



      </nav>



      <div className={styles.frameParent2}>



        <div className={styles.frameItem} />



        <div className={styles.frameParent3}>



          <div className={styles.frameParent4}>



            <div className={styles.frameWrapper}>



              <div className={styles.frameParent5}>



                <div className={styles.frameParent6}>



                  <div className={styles.frameInner}>Gamified Learning</div>



                  <h1 className={styles.transformLearningInto} style={{ fontWeight: "bolder", margin: 0 }}>



                    Transform Learning into an Engaging <span className={styles.mainHeadingLastWord}>Experience</span>



                  </h1>



                </div>



                <div className={styles.transformPassiveLearning}>Transform passive learning into active experiences.</div>



              </div>



            </div>



            <div className={styles.frameWrapper2}>



              <div className={styles.frameParent7}>



                <BookDemoTrigger className={styles.frameIcon}>Book a Demo</BookDemoTrigger>



                <div className={styles.frameWrapper3}>



                  <div className={styles.startLearningWrapper}>



                    <Link className={styles.startLearning} href="/HomePage">



                      Start Learning



                    </Link>



                  </div>



                </div>



              </div>



            </div>



          </div>



          <Image className={styles.mixRacedGroupStudentsWatchIcon} src="/images/first1.webp" width={674} height={489} sizes="(max-width: 768px) 100vw, 674px" alt="" priority />



        </div>



      </div>



      <div className={styles.frameParent8}>



        <div className={styles.frameWrapper4}>



          <div className={styles.frameParent9}>



            <h2 className={styles.frameChild2} style={{ margin: 0 }}>



              Interactive <span className={styles.mainHeadingLastWord}>Learning</span>



            </h2>



            <div className={styles.activeParticipationMakesLeaWrapper}>



              <div className={styles.activeParticipationMakes}>Active participation makes learning more effective. NeuroLXP combines interactive content and activities to help learners explore, practice, and apply knowledge.</div>



            </div>



          </div>



        </div>



        <div className={styles.frameParent10}>



          <div className={styles.frameParent11}>



            <div className={styles.frameParent12}>



              <div className={styles.frameChild3}>



                <div className={styles.featureIconInner}>



                  <div className={styles.featureIconSlot}>



                    <Image className={styles.featureIconImage} src="/icons/mouse.svg" width={34} height={34} alt="" aria-hidden="true" />



                  </div>



                </div>



              </div>



              <div className={styles.interactiveParent}>



                <h3 className={styles.interactive} style={{ fontWeight: "bolder", margin: 0 }}>



                  Interactive



                </h3>



                <div className={styles.activitiesThatMake}>Activities that make learning memorable</div>



              </div>



            </div>



            <div className={styles.frameParent13}>



              <div className={styles.frameChild3}>



                <div className={styles.featureIconInner}>



                  <div className={styles.featureIconSlot}>



                    <Image className={styles.featureIconImage} src="/icons/refresh-04.svg" width={34} height={34} alt="" aria-hidden="true" />



                  </div>



                </div>



              </div>



              <div className={styles.interactiveParent}>



                <h3 className={styles.adaptive} style={{ fontWeight: "bolder", margin: 0 }}>



                  Adaptive



                </h3>



                <div className={styles.experiencesThatRespond}>Experiences that respond to learner progress</div>



              </div>



            </div>



          </div>



          <div className={styles.frameParent14}>



            <div className={styles.frameParent12}>



              <div className={styles.frameChild3}>



                <div className={styles.featureIconInner}>



                  <div className={styles.featureIconSlot}>



                    <Image className={styles.featureIconImage} src="/icons/sparkles-color.svg" width={34} height={34} alt="" aria-hidden="true" />



                  </div>



                </div>



              </div>



              <div className={styles.interactiveParent}>



                <h3 className={styles.engaging} style={{ fontWeight: "bolder", margin: 0 }}>



                  Engaging



                </h3>



                <div className={styles.contentThatEngages}>Content that engages and inspires</div>



              </div>



            </div>



            <div className={styles.frameParent16}>



              <div className={styles.frameChild3}>



                <div className={styles.featureIconInner}>



                  <div className={styles.featureIconSlot}>



                    <Image className={styles.featureIconImage} src="/icons/tools.svg" width={34} height={34} alt="" aria-hidden="true" />



                  </div>



                </div>



              </div>



              <div className={styles.interactiveParent}>



                <h3 className={styles.practical} style={{ fontWeight: "bolder", margin: 0 }}>



                  Practical



                </h3>



                <div className={styles.realWorldActivitiesThat}>Real-world activities that build applicable skills</div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.frameParent17}>



        <div className={styles.frameWrapper5}>



          <div className={styles.frameWrapper6}>



            <div className={styles.frameWrapper7}>



              <div className={styles.frameParent18}>



                <div className={styles.frameParent19}>



                  <div className={styles.exploreEngagePill}>Explore & Engage</div>



                  <h2 className={styles.interactiveActivitiesThatContainer} style={{ fontWeight: "bolder", margin: 0 }}>



                    <span className={styles.interactiveActivitiesThat}>{`Interactive Activities That Drive `}</span>



                    <span className={`${styles.understanding} ${styles.mainHeadingLastWord}`}>Understanding</span>



                  </h2>



                </div>



                <div className={styles.neurolxpOffersA}>NeuroLXP offers a range of interactive experiences designed to move learners beyond passive consumption and memorization.</div>



              </div>



            </div>



          </div>



        </div>



        <div className={styles.frameParent20}>



          <div className={styles.frameParent21}>



            <div className={styles.frameParent22}>



              <div className={styles.frameParent23}>



                <div className={styles.frameChild8} />



                <span className={styles.b} aria-hidden="true" style={{ fontWeight: "bolder" }}>



                  1



                </span>



              </div>



              <div className={styles.curiousClicksParent}>



                <h3 className={styles.curiousClicks} style={{ fontWeight: "bolder", margin: 0 }}>



                  Curious Clicks



                </h3>



                <div className={styles.discoverNewInsightsContainer}>



                  <span className={styles.discoverNewInsights}>
                    Discover new insights interactively
                  </span>



                </div>



              </div>



            </div>



            <div className={styles.frameParent24}>



              <div className={styles.frameParent23}>



                <div className={styles.frameChild9} />



                <span className={styles.b2} aria-hidden="true" style={{ fontWeight: "bolder" }}>



                  2



                </span>



              </div>



              <div className={styles.curiousClicksParent}>



                <h3 className={styles.curiousClicks} style={{ fontWeight: "bolder", margin: 0 }}>



                  Matching Exercises



                </h3>



                <div className={styles.discoverNewInsightsContainer}>



                  <span className={styles.discoverNewInsights}>



                    Match related learning concepts



                  </span>



                </div>



              </div>



            </div>



            <div className={styles.frameParent24}>



              <div className={styles.frameParent23}>



                <div className={styles.frameChild10} />



                <span className={styles.b2} aria-hidden="true" style={{ fontWeight: "bolder" }}>



                  3



                </span>



              </div>



              <div className={styles.curiousClicksParent}>



                <h3 className={styles.curiousClicks} style={{ fontWeight: "bolder", margin: 0 }}>



                  Find the Partner



                </h3>



                <div className={styles.discoverNewInsightsContainer}>



                  <span className={styles.discoverNewInsights}>



                    Organize concepts interactively



                  </span>



                </div>



              </div>



            </div>



          </div>



          <div className={styles.frameParent21}>



            <div className={styles.frameParent24}>



              <div className={styles.frameParent23}>



                <div className={styles.frameChild11} />



                <span className={styles.b2} aria-hidden="true" style={{ fontWeight: "bolder" }}>



                  4



                </span>



              </div>



              <div className={styles.curiousClicksParent}>



                <h3 className={styles.curiousClicks} style={{ fontWeight: "bolder", margin: 0 }}>



                  Puzzles



                </h3>



                <div className={styles.discoverNewInsightsContainer}>



                  <span className={styles.discoverNewInsights}>



                    Solve problems through practice



                  </span>



                </div>



              </div>



            </div>



            <div className={styles.frameParent24}>



              <div className={styles.frameParent23}>



                <div className={styles.frameChild12} />



                <span className={styles.b2} aria-hidden="true" style={{ fontWeight: "bolder" }}>



                  5



                </span>



              </div>



              <div className={styles.curiousClicksParent}>



                <h3 className={styles.curiousClicks} style={{ fontWeight: "bolder", margin: 0 }}>



                  Connect the Dots



                </h3>



                <div className={styles.linkConceptsStepByContainer}>



                  <span className={styles.discoverNewInsights}>



                    Link concepts step-by- step



                  </span>



                </div>



              </div>



            </div>



            <div className={styles.frameParent24}>



              <div className={styles.frameParent23}>



                <div className={styles.frameChild13} />



                <span className={styles.b2} aria-hidden="true" style={{ fontWeight: "bolder" }}>



                  6



                </span>



              </div>



              <div className={styles.curiousClicksParent}>



                <h3 className={styles.curiousClicks} style={{ fontWeight: "bolder", margin: 0 }}>



                  Quiz Challenges



                </h3>



                <div className={styles.discoverNewInsightsContainer}>



                  <span className={styles.discoverNewInsights}>



                    Test knowledge with feedback



                  </span>



                </div>



              </div>



            </div>



          </div>



          <div className={styles.frameParent35}>



            <div className={styles.frameParent24}>



              <div className={styles.frameParent23}>



                <div className={styles.frameChild14} />



                <span className={styles.b2} aria-hidden="true" style={{ fontWeight: "bolder" }}>



                  7



                </span>



              </div>



              <div className={styles.curiousClicksParent}>



                <h3 className={styles.curiousClicks} style={{ fontWeight: "bolder", margin: 0 }}>



                  Role-Play Scenarios



                </h3>



                <div className={styles.discoverNewInsightsContainer}>



                  <span className={styles.discoverNewInsights}>



                    Practice real‑world decisions



                  </span>



                </div>



              </div>



            </div>



            <div className={styles.frameParent24}>



              <div className={styles.frameParent23}>



                <div className={styles.frameChild15} />



                <span className={styles.b2} aria-hidden="true" style={{ fontWeight: "bolder" }}>



                  8



                </span>



              </div>



              <div className={styles.curiousClicksParent}>



                <h3 className={styles.curiousClicks} style={{ fontWeight: "bolder", margin: 0 }}>



                  Memory Games



                </h3>



                <div className={styles.discoverNewInsightsContainer}>



                  <span className={styles.discoverNewInsights}>



                    Strengthen recall through play



                  </span>



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.interactiveGamifiedLearninChild} />



      <div className={styles.frameParent40}>



        <div className={styles.frameParent41}>



          <div className={styles.frameParent5}>



            <div className={styles.practicePill}>Learn by Doing</div>



            <h2 className={styles.beyondLearningInto} style={{ fontWeight: "bolder", margin: 0 }}>



              Beyond Learning! Into <span className={styles.mainHeadingLastWord}>Practice</span>



            </h2>



          </div>



          <div className={styles.perfectForUniversities}>



            Perfect for universities, bootcamps,



            <br />



            corporate training, and online coding programs.



          </div>



        </div>



        <div className={styles.frameParent43}>



          <div className={styles.frameWrapper8}>



            <div className={styles.frameParent44}>



              <div className={styles.image20Parent}>



                <div className={styles.image20} />



                <div className={styles.frameChild17} />



                <div className={styles.simulationsParent}>



                  <h3 className={styles.simulations} style={{ fontWeight: "bolder", margin: 0 }}>



                    Simulations



                  </h3>



                  <div className={styles.practiceRealWorldSkills}>Practice real-world skills</div>



                </div>



              </div>



              <div className={styles.frameParent45}>



                <div className={styles.image20Wrapper}>



                  <div className={styles.image202} />



                </div>



                <div className={styles.div}>1</div>



              </div>



            </div>



          </div>



          <div className={styles.frameWrapper9}>



            <div className={styles.frameParent44}>



              <div className={styles.image20Parent}>



                <div className={styles.image20} />



                <div className={styles.frameChild17} />



                <div className={styles.frameWrapper10}>



                  <div className={styles.interactiveParent}>



                    <h3 className={styles.scenarioBasedLearning} style={{ fontWeight: "bolder", margin: 0 }}>



                      Scenario-Based Learning



                    </h3>



                    <div className={styles.practiceRealWorldSkills}>Solve real-world challenges</div>



                  </div>



                </div>



              </div>



              <div className={styles.frameParent45}>



                <div className={styles.image20Wrapper}>



                  <div className={styles.image202} />



                </div>



                <div className={styles.div2}>2</div>



              </div>



            </div>



          </div>



          <div className={styles.frameWrapper11}>



            <div className={styles.frameParent44}>



              <div className={styles.image20Parent}>



                <div className={styles.image20} />



                <div className={styles.frameChild17} />



                <div className={styles.frameWrapper12}>



                  <div className={styles.interactiveParent}>



                    <h3 className={styles.visualLearning} style={{ fontWeight: "bolder", margin: 0 }}>



                      Visual Learning



                    </h3>



                    <div className={styles.practiceRealWorldSkills}>Simplify complex concepts</div>



                  </div>



                </div>



              </div>



              <div className={styles.frameParent45}>



                <div className={styles.image20Wrapper}>



                  <div className={styles.image202} />



                </div>



                <div className={styles.div2}>3</div>



              </div>



            </div>



          </div>



          <div className={styles.frameWrapper13}>



            <div className={styles.frameParent44}>



              <div className={styles.image20Parent}>



                <div className={styles.image20} />



                <div className={styles.frameChild17} />



                <div className={styles.frameWrapper14}>



                  <div className={styles.interactiveAssessmentsParent}>



                    <h3 className={styles.interactiveAssessments} style={{ fontWeight: "bolder", margin: 0 }}>



                      Interactive Assessments



                    </h3>



                    <div className={styles.practiceRealWorldSkills}>Get instant feedback</div>



                  </div>



                </div>



              </div>



              <div className={styles.frameParent45}>



                <div className={styles.image20Wrapper}>



                  <div className={styles.image202} />



                </div>



                <div className={styles.div4}>4</div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.image20Parent4}>



        <div className={styles.image209} />



        <div className={styles.frameParent52}>



          <div className={styles.frameWrapper15}>



            <div className={styles.frameParent53}>



              <div className={styles.frameChild2}>Measurable Impact</div>



              <div className={styles.howInteractiveLearningDriveParent}>



                <h2 className={styles.howInteractiveLearning} style={{ fontWeight: "bolder", margin: 0 }}>



                  How Interactive Learning Drives <span className={styles.mainHeadingLastWord}>Results</span>



                </h2>



                <div className={styles.interactiveLearningDrives}>Interactive learning drives deeper understanding, stronger retention, and practical skill development.</div>



              </div>



            </div>



          </div>



          <div className={styles.frameWrapper16}>



            <div className={styles.frameParent54}>



              <div className={styles.image20Parent5}>



                <div className={styles.image2010} />



                <div className={styles.frameChild22} />



              </div>



              <div className={styles.peopleTakingPartBusinessEv} />



              <div className={styles.image21} />



              <div className={styles.groupYoungBusinesspeopleUsi} />



              <Image className={styles.collageCustomerExperienceCoIcon} src="/images/collage-customer-experience.webp" width={693} height={583} sizes="(max-width: 768px) 100vw, 693px" alt="" />



              <div className={styles.frameParent55}>



                <div className={styles.frameParent56}>



                  <div className={styles.resultIconCircle}>



                    <div className={styles.resultIconInner}>



                      <Image className={styles.resultIconImage} src="/icons/usergroup.svg" width={32} height={32} alt="" aria-hidden="true" />



                    </div>



                  </div>



                  <div className={styles.activeParticipation}>Active Participation</div>



                </div>



                <div className={styles.frameParent57}>



                  <div className={styles.resultIconCircle}>



                    <div className={styles.resultIconInner}>



                      <Image className={styles.resultIconImage} src="/icons/brain.svg" width={32} height={32} alt="" aria-hidden="true" />



                    </div>



                  </div>



                  <div className={styles.criticalThinking}>Critical Thinking</div>



                </div>



                <div className={styles.frameParent57}>



                  <div className={styles.resultIconCircle}>



                    <div className={styles.resultIconInner}>



                      <Image className={styles.resultIconImage} src="/icons/compass.svg" width={32} height={32} alt="" aria-hidden="true" />



                    </div>



                  </div>



                  <div className={styles.exploration}>Exploration</div>



                </div>



                <div className={styles.frameParent57}>



                  <div className={styles.resultIconCircle}>



                    <div className={styles.resultIconInner}>



                      <Image className={styles.resultIconImage} src="/icons/braincircuit.svg" width={32} height={32} alt="" aria-hidden="true" />



                    </div>



                  </div>



                  <div className={styles.betterRetention}>



                    Better Retention



                    <br />



                  </div>



                </div>



                <div className={styles.frameParent57}>



                  <div className={styles.resultIconCircle}>



                    <div className={styles.resultIconInner}>



                      <Image className={styles.resultIconImage} src="/icons/target-yellow.svg" width={32} height={32} alt="" aria-hidden="true" />



                    </div>



                  </div>



                  <div className={styles.focusedPractice}>



                    Focused Practice



                    <br />



                    <br />



                  </div>



                </div>



                <div className={styles.frameParent57}>



                  <div className={styles.resultIconCircle}>



                    <div className={styles.resultIconInner}>



                      <Image className={styles.resultIconImage} src="/icons/smile.svg" width={32} height={32} alt="" aria-hidden="true" />



                    </div>



                  </div>



                  <div className={styles.enjoyableLearning}>



                    Enjoyable Learning



                    <br />



                    <br />



                  </div>



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.frameParent62}>

        <div

          className={styles.builtForScaleExpertButtonSlot}

          data-expert-button-slot

        />



        <div className={styles.frameWrapper15}>



          <div className={styles.frameParent53}>



            <div className={styles.builtForScalePill}>Built for Scale</div>



            <div className={styles.howInteractiveLearningDriveParent}>



              <h2 className={styles.howInteractiveLearning} style={{ fontWeight: "bolder", margin: 0 }}>Empowering Educators & <span className={styles.mainHeadingLastWord}>Organizations</span></h2>



              <div className={styles.interactiveLearningDrives}>NeuroLXP enables educators and organizations to create and deliver engaging learning experiences at scale.</div>



            </div>



          </div>



        </div>



        <div className={styles.frameWrapper18}>



          <div className={styles.frameParent64}>



            <div className={styles.frameParent65}>



              <div className={styles.frameParent57}>



                <div className={styles.scaleIconCircle}>



                  <div className={styles.scaleIconInner}>



                    <Image className={styles.scaleIconImage} src="/icons/pointer.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                </div>



                <div className={styles.createInteractiveCourses}>



                  <span className={styles.scaleLabelLine}>Create interactive</span>{" "}



                  <span className={styles.scaleLabelLine}>courses</span>



                </div>



              </div>



              <div className={styles.frameParent57}>



                <div className={styles.scaleIconCircle}>



                  <div className={styles.scaleIconInner}>



                    <Image className={styles.scaleIconImage} src="/icons/pinksparkles.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                </div>



                <div className={styles.buildEngagingActivities}>



                  <span className={styles.scaleLabelLine}>Build engaging</span>{" "}



                  <span className={styles.scaleLabelLine}>activities</span>



                </div>



              </div>



              <div className={styles.frameParent57}>



                <div className={styles.scaleIconCircle}>



                  <div className={styles.scaleIconInner}>



                    <Image className={styles.scaleIconImage} src="/icons/game.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                </div>



                <div className={styles.deliverSimulationsAnd}>



                  <span className={styles.scaleLabelLine}>Deliver simulations</span>{" "}



                  <span className={styles.scaleLabelLine}>and scenarios</span>



                </div>



              </div>



            </div>



            <div className={styles.frameParent65}>



              <div className={styles.frameParent57}>



                <div className={styles.scaleIconCircle}>



                  <div className={styles.scaleIconInner}>



                    <Image className={styles.scaleIconImage} src="/icons/award.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                </div>



                <div className={styles.reinforceLearningWith}>



                  <span className={styles.scaleLabelLine}>Reinforce learning</span>{" "}



                  <span className={styles.scaleLabelLine}>with gamification</span>



                </div>



              </div>



              <div className={styles.frameParent57}>



                <div className={styles.scaleIconCircle}>



                  <div className={styles.scaleIconInner}>



                    <Image className={styles.scaleIconImage} src="/icons/barchart-color.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                </div>



                <div className={styles.trackLearnerPerformance}>



                  <span className={styles.scaleLabelLine}>Track learner</span>{" "}



                  <span className={styles.scaleLabelLine}>performance</span>



                </div>



              </div>



              <div className={styles.frameParent57}>



                <div className={styles.scaleIconCircle}>



                  <div className={styles.scaleIconInner}>



                    <Image className={styles.scaleIconImage} src="/icons/laptop.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                </div>



                <div className={styles.supportDigitalAnd}>



                  <span className={styles.scaleLabelLine}>Support digital and</span>{" "}



                  <span className={styles.scaleLabelLine}>blended learning</span>



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.frameParent73}>



        <div className={styles.frameParent74}>



          <div className={styles.frameParent41}>



            <div className={styles.frameParent5}>



              <div className={styles.masteryPill}>The Learning Journey</div>



              <h2 className={styles.beyondLearningInto} style={{ fontWeight: "bolder", margin: 0 }}>



                From Interaction to <span className={styles.mainHeadingLastWord}>Mastery</span>



              </h2>



            </div>



            <div className={styles.perfectForUniversities}>Explore, practice, apply, and master new skills.</div>



          </div>



          <div className={`${styles.frameParent77} ${styles.journeyActions}`}>



            <BookDemoTrigger className={`${styles.frameWrapper19} ${styles.journeyAction} ${styles.journeyDemoAction}`}>



              Book a Demo



            </BookDemoTrigger>



            <Link className={`${styles.learnMorePill} ${styles.journeyAction}`} href="/HomePage">



              Learn more



            </Link>



          </div>



          <div className={styles.frameChild38} />



        </div>



        <div className={styles.masteryImageFrame}>



          <Image className={styles.masteryImage} src="/images/Ellipse 389.webp" width={624} height={525} sizes="(max-width: 768px) 100vw, 624px" alt="Learner attending an online session" />



        </div>



      </div>



      </main>



      <Footer />



    </>



  );



};



export default InteractiveGamifiedLearning;
