import type { NextPage } from 'next';

import Image from "next/image";

import styles from "./standard.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const StandardsTraining: NextPage = () => {

   return (

       <>

           <Header />

           <a className={styles.skipLink} href="#main-content">Skip to main content</a>

           <main id="main-content" className={styles.standardsTraining} tabIndex={-1}>

           <nav className={styles.frameDiv} aria-label="Breadcrumb">

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

                   <b className={styles.useCases}>Standards Training</b>

               </div>

           </nav>

           <div className={styles.frameParent2}>

               <div className={styles.frameParent3}>

                   <div className={styles.image21Parent}>

                       <div className={styles.image21} />

                       <div className={styles.groupYoungBusinesspeopleUsi} />

                       <div className={styles.frameParent4}>

                           <div className={styles.frameParent5}>

                               <div className={styles.frameParent6}>

                                   <div className={styles.frameIcon}>Standards Training</div>

                                   <h1 className={styles.buildIndustryReadyLearningContainer}>

                                       <span className={styles.build}>{`Build `}</span>

                                       <span className={styles.industryReady} style={{ display: "inline-block", whiteSpace: "nowrap" }}>Industry-Ready</span>{" "}

                                       <span className={styles.industryReady}>Learning</span>

                                   </h1>

                               </div>

                               <div className={styles.improveLearningQuality}>Improve learning quality, outcomes, and industry alignment.</div>

                           </div>

                           <BookDemoTrigger className={styles.frameChild2}>

                               Book a Demo

                           </BookDemoTrigger>

                       </div>

                   </div>

                   <div className={styles.image20} />

                   <div className={styles.frameParent7}>

                       <div className={styles.outcomeBasedLearningWrapper}>

                           <b className={styles.outcomeBasedLearning}>Outcome-Based Learning</b>

                       </div>

                       <div className={styles.flowArrow} aria-hidden="true">↓</div>

                       <div className={styles.facultyDevelopmentWrapper}>

                           <b className={styles.facultyDevelopment}>Faculty Development</b>

                       </div>

                       <div className={styles.flowArrow} aria-hidden="true">↓</div>

                       <div className={styles.accreditationReadyWrapper}>

                           <b className={styles.outcomeBasedLearning}>Accreditation Ready</b>

                       </div>

                   </div>

               </div>

               <div className={styles.frameParent8}>

                   <div className={styles.whyStandardsTrainingParent}>

                       <h2 className={styles.whyStandardsTraining}>Why Standards <span className={styles.industryReady}>Training?</span></h2>

                       <div className={styles.createAConsistent}>Create a consistent learning environment with structured curricula, effective teaching practices, and measurable outcomes.</div>

                   </div>

                   <div className={styles.frameParent9}>

                       <div className={styles.frameParent10}>

                           <div className={styles.frameParent11}>

                               <div className={styles.iconCircle}><div className={`${styles.iconCircleInner} ${styles.iconPink}`}><Image src="/icons/targetwhite.svg" width={34} height={34} alt="" /></div></div>

                               <b className={styles.alignWithIndustry} style={{ whiteSpace: "nowrap" }}>Align with Industry Standards</b>

                           </div>

                           <div className={styles.frameParent11}>

                               <div className={styles.iconCircle}><div className={`${styles.iconCircleInner} ${styles.iconPurple}`}><Image src="/icons/chartwhite.svg" width={34} height={34} alt="" /></div></div>

                               <b className={styles.improveLearningOutcomes} style={{ whiteSpace: "nowrap" }}>Improve Learning Outcomes</b>

                           </div>

                       </div>

                       <div className={styles.frameParent10}>

                           <div className={styles.frameParent11}>

                               <div className={styles.iconCircle}><div className={`${styles.iconCircleInner} ${styles.iconBlue}`}><Image src="/icons/awards.svg" width={34} height={34} alt="" /></div></div>

                               <b className={styles.supportAccreditationAnd} style={{ whiteSpace: "nowrap" }}><span style={{ display: "inline-block", whiteSpace: "nowrap" }}>Accreditation &amp; Compliance</span></b>

                           </div>

                           <div className={styles.frameParent11}>

                               <div className={styles.iconCircle}><div className={`${styles.iconCircleInner} ${styles.iconGreen}`}><Image src="/icons/globe-round.svg" width={34} height={34} alt="" /></div></div>

                               <b className={styles.scaleFutureReadyLearning} style={{ whiteSpace: "nowrap" }}>Scale Future-Ready Learning</b>

                           </div>

                       </div>

                   </div>

               </div>

           </div>

           <div className={styles.standardsTrainingChild} />

           <div className={styles.frameParent16}>
              {/* Expert button: anchored to the Benefits section only */}
              <span data-expert-button-slot="standards-benefits" className={styles.benefitsExpertSlot} />

               <div className={styles.resourcesWrapper}>

                   <div className={styles.frameParent17}>

                       <div className={styles.frameParent18}>

                           <div className={styles.benefitsBadge}><span>Benefits</span></div>

                           <h2 className={styles.benefitsOfEmployee}>Benefits of Employee Induction with <span className={styles.industryReady}>NeuroLXP</span></h2>

                       </div>

                       <div className={styles.organizationsCanAchieve}>Organizations can achieve several advantages through digital onboarding</div>

                   </div>

               </div>

               <div className={styles.frameParent19}>

                   <div className={styles.frameParent20}>

                       <div className={styles.benefitIcon}><Image src="/icons/librarypink.svg" width={46} height={46} alt="" /></div>

                       <div className={styles.standardisedCurriculumParent}>

                           <b className={styles.standardisedCurriculum}>Standardised Curriculum</b>

                           <div className={styles.alignLearningWith}>Align learning with quality standards.</div>

                       </div>

                   </div>

                   <div className={styles.frameParent21}>

                       <div className={styles.benefitIcon}><Image src="/icons/teacher-blue.svg" width={46} height={46} alt="" /></div>

                       <div className={styles.standardisedCurriculumParent}>

                           <b className={styles.standardisedCurriculum}>Faculty Development</b>

                           <div className={styles.alignLearningWith}>Empower educators with modern tools.</div>

                       </div>

                   </div>

                   <div className={styles.frameParent22}>

                       <div className={styles.benefitIcon}><Image src="/icons/analyticspurple.svg" width={46} height={46} alt="" /></div>

                       <div className={styles.standardisedCurriculumParent}>

                           <b className={styles.standardisedCurriculum}>Assessment and Evaluation</b>

                           <div className={styles.alignLearningWith}>Measure outcomes with analytics.</div>

                       </div>

                   </div>

                   <div className={styles.frameParent23}>

                       <div className={styles.benefitIcon}><Image src="/icons/award.svg" width={46} height={46} alt="" /></div>

                       <div className={styles.standardisedCurriculumParent}>

                           <b className={styles.standardisedCurriculum}>Accreditation Support</b>

                           <div className={styles.alignLearningWith}>Simplify compliance and reporting.</div>

                       </div>

                   </div>

               </div>

           </div>

           <div className={styles.frameParent24}>

               <div className={styles.frameParent25}>

                   <div className={styles.benefitsBadge}><span>Benefits</span></div>

                   <div className={styles.turnStandardsIntoLearningEParent}>

                       <h2 className={styles.turnStandardsIntoContainer}>

                           <span className={styles.turnStandardsInto}>Turn Standards into</span>

                           <span className={styles.learningExcellence}> Learning Excellence<br /></span>

                       </h2>

                       <div className={styles.neurolxpHelpsInstitutions}>NeuroLXP helps institutions improve learning quality, outcomes, and academic consistency.</div>

                   </div>

               </div>

               <div className={styles.audienceCards}>

                   <article className={styles.audienceCard}>

                       <div className={styles.audienceCardHeader}>

                           <svg className={styles.audienceHeaderShape} viewBox="0 0 400 170" preserveAspectRatio="none" aria-hidden="true" focusable="false">

                               <path d="M18 2 H382 Q398 2 398 18 V116 Q398 124 390 128 L200 168 L10 128 Q2 124 2 116 V18 Q2 2 18 2 Z" />

                           </svg>

                           <span className={styles.audienceNumber}>01</span>

                           <h3 className={styles.audienceTitle}>For Learners</h3>

                       </div>

                       <ul className={styles.audienceChecklist}>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Structured Learning</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Skill Development</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Transparent Assessments</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Career Readiness</span>

                           </li>

                       </ul>

                   </article>

                   <article className={styles.audienceCard}>

                       <div className={styles.audienceCardHeader}>

                           <svg className={styles.audienceHeaderShape} viewBox="0 0 400 170" preserveAspectRatio="none" aria-hidden="true" focusable="false">

                               <path d="M18 2 H382 Q398 2 398 18 V116 Q398 124 390 128 L200 168 L10 128 Q2 124 2 116 V18 Q2 2 18 2 Z" />

                           </svg>

                           <span className={styles.audienceNumber}>02</span>

                           <h3 className={styles.audienceTitle}>For Institutions</h3>

                       </div>

                       <ul className={styles.audienceChecklist}>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Academic Consistency</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Better Outcomes</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Easy Accreditation</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Scalable Delivery</span>

                           </li>

                       </ul>

                   </article>

                   <article className={styles.audienceCard}>

                       <div className={styles.audienceCardHeader}>

                           <svg className={styles.audienceHeaderShape} viewBox="0 0 400 170" preserveAspectRatio="none" aria-hidden="true" focusable="false">

                               <path d="M18 2 H382 Q398 2 398 18 V116 Q398 124 390 128 L200 168 L10 128 Q2 124 2 116 V18 Q2 2 18 2 Z" />

                           </svg>

                           <span className={styles.audienceNumber}>03</span>

                           <h3 className={styles.audienceTitle}>For Faculty</h3>

                       </div>

                       <ul className={styles.audienceChecklist}>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Modern Resources</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Standardised Tools</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Better Engagement</span>

                           </li>

                           <li className={styles.audienceChecklistRow}>

                               <span className={styles.audienceCheck}><Image src="/icons/green.svg" width={24} height={24} alt="" /></span>

                               <span>Data Insights</span>

                           </li>

                       </ul>

                   </article>

               </div>

           </div>

           <div className={styles.peopleTakingPartBusinessEv} />

           <div className={styles.image212} />

           <div className={styles.groupYoungBusinesspeopleUsi2} />

           <div className={styles.image202} />

           <div className={styles.frameParent48}>

               <div className={styles.frameParent49}>

                   <div className={styles.frameWrapper11}>

                       <div className={styles.buildAFutureReadyLearningParent}>

                           <h2 className={styles.turnStandardsIntoContainer}>Build a Future-Ready Learning <span className={styles.industryReady}>Ecosystem</span></h2>

                           <div className={styles.neurolxpHelpsInstitutions}>NeuroLXP standardises learning, improves outcomes, and enables scalable education.</div>

                       </div>

                   </div>

                   <div className={styles.frameWrapper12}>

                       <BookDemoTrigger className={styles.frameChild29}>

                           Book a Demo

                       </BookDemoTrigger>

                   </div>

               </div>

               <div className={styles.ellipseImageFrame}>

                   <Image

                       className={styles.ellipseBg}

                       src="/images/bg-training.webp"

                       width={1216}

                       height={555}

                       sizes="(max-width: 1286px) 94vw, 1216px"

                       alt="Students collaborating in a learning environment"

                       priority

                   />

                   <Image

                       className={styles.frameChild30}

                       src="/images/ellipsecircle.webp"

                       width={1286}

                       height={540}

                       sizes="(max-width: 1286px) 100vw, 1286px"

                       alt=""

                       aria-hidden="true"

                       priority

                   />

               </div>

           </div>

           </main>


           <style>{`

               .${styles.standardsTraining} .${styles.frameParent11} {

                   container-type: inline-size;

                   min-width: 0;

                   width: 100%;

               }

               .${styles.standardsTraining} .${styles.frameParent11} > b {

                   white-space: nowrap !important;

                   width: auto !important;

                   max-width: none !important;

                   min-width: 0;

                   flex: 1 1 auto;

                   font-size: clamp(10px, 3.7cqi, 24px) !important;

                   overflow-wrap: normal;

                   word-break: normal;

               }

           `}</style>

           <Footer />

       </>

   );

};

export default StandardsTraining;
