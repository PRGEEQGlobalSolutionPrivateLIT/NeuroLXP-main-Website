"use client";



import type { NextPage } from "next";



import type { CSSProperties } from "react";



import { useEffect, useLayoutEffect, useRef, useState } from "react";



import Image from "next/image";



import Header from "../../components/Header/header";



import Footer from "../../components/Footer/footer";



import { BookDemoModal } from "../../components/Bookademo/Bookademo";



import TalkToExpertButton from "@/components/TalkToOurExpert/TalkToExpertButton";



import styles from "./bootcamp.module.css";



const Bootcamp: NextPage = () => {



  const [openCards, setOpenCards] = useState<number[]>([]);



  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);



  const accordionRef = useRef<HTMLDivElement>(null);



  const nextSectionRef = useRef<HTMLDivElement>(null);



  const nextSectionTop = useRef<number | null>(null);







  useEffect(() => {



    if (!openCards.length) return;



    const closeAfterSection = () => {



      const section = accordionRef.current;



      if (!section || section.getBoundingClientRect().bottom > 100) return;



      nextSectionTop.current = nextSectionRef.current?.getBoundingClientRect().top ?? null;



      setOpenCards([]);



    };



    window.addEventListener("scroll", closeAfterSection, { passive: true });



    return () => window.removeEventListener("scroll", closeAfterSection);



  }, [openCards.length]);







  useLayoutEffect(() => {



    if (openCards.length || nextSectionTop.current === null) return;



    const nextTop = nextSectionRef.current?.getBoundingClientRect().top;



    if (nextTop !== undefined) {



      window.scrollBy({ top: nextTop - nextSectionTop.current, behavior: "instant" });



    }



    nextSectionTop.current = null;



  }, [openCards.length]);







  const toggleCard = (cardNumber: number) => {



    setOpenCards((current) => (current.includes(cardNumber) ? current.filter((number) => number !== cardNumber) : [...current, cardNumber]));



  };



  const firstCardOpen = openCards.includes(1);



  const secondCardOpen = openCards.includes(2);



  const thirdCardOpen = openCards.includes(3);



  const firstRowHeight = firstCardOpen ? 601 : secondCardOpen ? 594 : 150;



  const thirdCardHeight = thirdCardOpen ? 553 : 150;



  const accordionExtraHeight = firstRowHeight - 150 + (thirdCardHeight - 150);



  const accordionStyle = {



    "--accordion-extra-height": `${accordionExtraHeight}px`,



    "--first-row-height": `${firstRowHeight}px`,



    "--third-card-height": `${thirdCardHeight}px`,



  } as CSSProperties;



  return (



    <>



      <Header />



      <div className={styles.bootcamp} style={accordionStyle}>



      <b className={styles.text}>



        <br />



      </b>



      <nav className={`${styles.frameParent3} ${styles.breadcrumbBar}`} aria-label="Breadcrumb">



        <span className={styles.breadcrumbItem}>Neuro Labs</span>



        <Image



          className={styles.breadcrumbArrowIcon}



          src="/icons/arrowright.svg"



          width={20}



          height={20}



          alt=""



          aria-hidden="true"



        />



        <span className={`${styles.breadcrumbItem} ${styles.breadcrumbCurrent}`}>



          Coding Bootcamps



        </span>



      </nav>



<div className={styles.bootcampOuterFrame}>



        <div className={styles.bootcampInner}>



          <div className={styles.rectangleParent}>



            <div className={styles.frameDiv}>



              <div className={styles.frameParent2}>



                <div className={styles.frameItem}>Coding Bootcamps</div>



                <b className={styles.masterSoftwareDevelopmentContainer}>



                  <span className={styles.masterSoftwareDevelopment}>{`Master Software Development Through `}</span>



                  <span className={styles.intensiveLearning}>Intensive Learning</span>



                </b>



              </div>



              <div className={styles.neurolabsCodingBootcamps}>NeuroLabs Coding Bootcamps build job-ready programming skills through intensive, hands on learning, real world coding, interactive labs, and expert mentorship.</div>



            </div>



            <Image className={styles.image33Icon} src="/images/image 33.png" width={366} height={578} sizes="366px" alt="Coding bootcamp student" priority />



          </div>



        </div>



      </div>



      <div className={styles.frameParent4}>



        <div className={styles.rectangleGroup}>



          <div className={styles.frameInner} />



          <Image className={styles.rectangleIcon} src="/icons/design.png" width={131.9} height={93.5} sizes="100vw" alt="" />



          <div className={styles.ellipseDiv} />



          <div className={styles.div}>1</div>



          <div className={styles.practicalCodingParent}>



            <b className={styles.practicalCoding}>Practical Coding</b>



            {/* <div className={styles.problemSolving}>Problem solving</div> */}



          </div>



        </div>



        <div className={styles.rectangleGroup}>



          <div className={styles.frameInner} />



          <Image className={styles.rectangleIcon} src="/icons/design.png" width={131.9} height={93.5} sizes="100vw" alt="" />



          <div className={styles.ellipseDiv} />



          <div className={styles.div2}>2</div>



          <div className={styles.projectLearningParent}>



            <b className={styles.projectLearning}>Project Learning</b>



            {/* <div className={styles.handsOnPractice}>Hands -on Practice</div> */}



          </div>



        </div>



        <div className={styles.rectangleGroup}>



          <div className={styles.frameInner} />



          <Image className={styles.rectangleIcon} src="/icons/design.png" width={131.9} height={93.5} sizes="100vw" alt="" />



          <div className={styles.ellipseDiv} />



          <div className={styles.div3}>3</div>



          <div className={styles.careerReadinessParent}>



            <b className={styles.careerReadiness}>Career Readiness</b>



            {/* <div className={styles.technologyCareers}>Technology Careers</div> */}



          </div>



        </div>



      </div>



      <div className={styles.bootcampChild} />



      <div className={styles.frameParent5}>
      <div
        id="bootcamp-talk-to-expert-button-slot"
        data-expert-button-slot
        className={styles.bootcampExpertSlot}
      />




        <div className={styles.frameParent6}>



          <div className={styles.frameIcon}>Practical Learning</div>



          <div className={styles.learnByBuildingRealProjectParent}>



            <b className={styles.learnByBuilding}>



              Learn by Building Real Projects



              <br />



            </b>



            <div className={styles.buildRealProjects}>Build real projects and solve coding challenges that mirror real world development.</div>



          </div>



        </div>



        <div className={styles.frameParent7}>



          <div className={styles.frameParent8}>



            <div className={styles.frameParent9}>



              <div className={styles.frameWrapper}>



                <div className={styles.writingAndTestingCodeWrapper}>



                  <b className={styles.writingAndTesting}>Writing & Testing Code</b>



                </div>



              </div>



              <div className={`${styles.frameChild7} ${styles.iconBlue}`}>



                <div className={styles.codeIconCircle}>



                  <Image className={styles.codeBoxImage} src="/icons/brace.png" alt="Code" width={40} height={40} />



                </div>



              </div>



            </div>



            <div className={styles.frameParent9}>



              <div className={styles.frameWrapper}>



                <div className={styles.webAppDevelopmentWrapper}>



                  <b className={styles.webApp}>{`Web & App Development`}</b>



                </div>



              </div>



              <div className={`${styles.frameChild7} ${styles.iconPurple}`}>



                <div className={styles.codeIconCircle}>



                  <Image className={styles.codeBoxImage} src="/icons/globe.png" alt="Code" width={40} height={40} />



                </div>



              </div>



            </div>



          </div>



          <div className={styles.frameParent8}>



            <div className={styles.frameParent9}>



              <div className={styles.frameWrapper}>



                <div className={styles.debugOptimizeWrapper}>



                  <b className={styles.debugOptimize}>{`Debug & Optimize`}</b>



                </div>



              </div>



              <div className={`${styles.frameChild7} ${styles.iconPink}`}>



                <div className={styles.codeIconCircle}>



                  <Image className={styles.codeBoxImage} src="/icons/icon.png" alt="Code" width={40} height={40} />



                </div>



              </div>



            </div>



            <div className={styles.frameParent9}>



              <div className={styles.frameWrapper}>



                <div className={styles.programmingChallengeWrapper}>



                  <b className={styles.programmingChallenge}>Programming Challenge</b>



                </div>



              </div>



              <div className={`${styles.frameChild7} ${styles.iconGreen}`}>



                <div className={styles.codeIconCircle}>



                  <Image className={styles.codeBoxImage} src="/icons/icon2.png" alt="Code" width={40} height={40} />



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.bootcampInner2}>



        <svg className={styles.careerFrameInlineSvg} aria-hidden="true" width="1304" height="303" viewBox="0 0 1304 303" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">



          <g filter="url(#filter0_dd_903_12470)">



            <path d="M650.266 12.0932C651.419 11.9676 652.581 11.9676 653.733 12.0932L1277.73 80.0995C1285.85 80.9842 1292 87.8397 1292 96.0053V206.803C1292 214.969 1285.85 221.824 1277.73 222.709L653.733 290.715C652.581 290.841 651.419 290.841 650.266 290.715L26.2665 222.709C18.149 221.824 12 214.969 12 206.803V96.0053C12 87.8397 18.1489 80.9842 26.2665 80.0995L650.266 12.0932Z" fill="#DFE6E9" />



            <g filter="url(#filter1_ii_903_12470)">



              <path d="M651.609 44.9043L1268.61 97.1543V201.654L651.609 253.904L34.6094 201.654V97.1543L651.609 44.9043Z" fill="#DFE6E9" />



            </g>



          </g>



          <defs>



            <filter id="filter0_dd_903_12470" x="0" y="-0.0957031" width="1304" height="302.904" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">



              <feFlood floodOpacity="0" result="BackgroundImageFix" />



              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />



              <feOffset dx="-4" dy="-4" />



              <feGaussianBlur stdDeviation="4" />



              <feComposite in2="hardAlpha" operator="out" />



              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />



              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_12470" />



              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />



              <feOffset dx="4" dy="4" />



              <feGaussianBlur stdDeviation="4" />



              <feComposite in2="hardAlpha" operator="out" />



              <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />



              <feBlend mode="normal" in2="effect1_dropShadow_903_12470" result="effect2_dropShadow_903_12470" />



              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_903_12470" result="shape" />



            </filter>



            <filter id="filter1_ii_903_12470" x="30.6094" y="40.9043" width="1242" height="217" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">



              <feFlood floodOpacity="0" result="BackgroundImageFix" />



              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />



              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />



              <feOffset dx="-4" dy="-4" />



              <feGaussianBlur stdDeviation="4" />



              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />



              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />



              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_903_12470" />



              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />



              <feOffset dx="4" dy="4" />



              <feGaussianBlur stdDeviation="4" />



              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />



              <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.776471 0 0 0 0 0.788235 0 0 0 1 0" />



              <feBlend mode="normal" in2="effect1_innerShadow_903_12470" result="effect2_innerShadow_903_12470" />



            </filter>



          </defs>



        </svg>



        <div className={styles.prepareForHighDemandCareerWrapper}>



          <b className={styles.prepareForHighDemand}>Prepare for <span style={{ whiteSpace: "nowrap" }}>High-Demand</span> Careers in Software and Data <span style={{ color: "#2d4cc8" }}>Technology</span></b>



        </div>



      </div>



      <div className={styles.frameParent14} ref={accordionRef}>



        <div className={styles.frameParent15} style={{ height: firstRowHeight }}>



          <div className={`${styles.frameWrapper5} ${styles.accordionCardSpace} ${openCards.includes(1) ? styles.isExpanded : styles.isCollapsed}`}>



            <div className={styles.frameParent16}>



              <div className={`${styles.frameWrapper6} ${styles.expandableCardPanel} ${openCards.includes(1) ? styles.isOpen : ""}`}>



                <div className={styles.bootcampLearningTypicallyInParent}>



                  <b className={styles.bootcampLearningTypically}>



                    Bootcamp Learning Lypically Includes:



                    <br />



                  </b>



                  <div className={styles.frameParent17}>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild12} />



                      <div className={styles.codingFundamentals}>Coding Fundamentals</div>



                    </div>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild12} />



                      <div className={styles.codingFundamentals}>Coding Challenges</div>



                    </div>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild12} />



                      <div className={styles.codingFundamentals}>Hands-On Labs</div>



                    </div>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild12} />



                      <div className={styles.codingFundamentals}>Real Projects</div>



                    </div>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild16} />



                      <div className={styles.performanceFeedback}>Performance Feedback</div>



                    </div>



                  </div>



                </div>



              </div>



              <div className={`${styles.frameParent23} ${styles.expandableCardTrigger} ${openCards.includes(1) ? styles.isActive : ""}`}>



                <button type="button" className={`${styles.frameChild17} ${styles.cardOpenArrow} ${styles.accordionArrow} ${openCards.includes(1) ? styles.isOpen : ""}`} onClick={() => toggleCard(1)} aria-expanded={openCards.includes(1)} aria-label={openCards.includes(1) ? "Collapse card 1" : "Expand card 1"}>



                  <svg className={styles.accordionArrowSvg} width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">



                    <path d="M5 3.5L12 10.5L19 3.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />



                    <path d="M5 9.5L12 16.5L19 9.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />



                  </svg>



                </button>



                <div className={styles.frameParent24}>



                  <div className={styles.frameParent25}>



                    <div className={styles.parent}>



                      <b className={styles.b}>01</b>



                      <div className={styles.frameChild18} />



                    </div>



                    <div className={styles.frameChild19} aria-hidden="true" />



                  </div>



                  <div className={styles.structuredAcceleratedLearnParent}>



                    <div className={styles.structuredAccelerated}>{`Accelerated Learning`}</div>



                   <div className={styles.fromCodingBasics}>



  <span>From coding basics to</span>{" "}<span>real world applications</span>



</div>



                  </div>



                </div>



              </div>



            </div>



          </div>



          <div className={`${styles.frameWrapper7} ${styles.accordionCardSpace} ${openCards.includes(2) ? styles.isExpanded : styles.isCollapsed}`}>



            <div className={styles.frameParent26}>



              <div className={`${styles.frameWrapper8} ${styles.expandableCardPanel} ${openCards.includes(2) ? styles.isOpen : ""}`}>



                <div className={styles.bootcampLearningTypicallyInParent}>



                  <b className={styles.bootcampLearningTypically}>Career-Focused Training Includes:</b>



                  <div className={styles.frameParent17}>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild12} />



                      <div className={styles.codingFundamentals}>Software Developer</div>



                    </div>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild12} />



                      <div className={styles.codingFundamentals}>Web Developer</div>



                    </div>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild16} />



                      <div className={styles.performanceFeedback}>Application Developer</div>



                    </div>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild12} />



                      <div className={styles.codingFundamentals}>Technology Analyst</div>



                    </div>



                    <div className={styles.frameParent18}>



                      <div className={styles.frameChild16} />



                      <div className={styles.performanceFeedback}>Programming Specialist</div>



                    </div>



                  </div>



                </div>



              </div>



              <div className={`${styles.frameParent33} ${styles.expandableCardTrigger} ${openCards.includes(2) ? styles.isActive : ""}`}>



                <button type="button" className={`${styles.frameChild17} ${styles.cardOpenArrow} ${styles.accordionArrow} ${openCards.includes(2) ? styles.isOpen : ""}`} onClick={() => toggleCard(2)} aria-expanded={openCards.includes(2)} aria-label={openCards.includes(2) ? "Collapse card 2" : "Expand card 2"}>



                  <svg className={styles.accordionArrowSvg} width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">



                    <path d="M5 3.5L12 10.5L19 3.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />



                    <path d="M5 9.5L12 16.5L19 9.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />



                  </svg>



                </button>



                <div className={styles.frameParent24}>



                  <div className={styles.frameParent25}>



                    <div className={styles.parent}>



                      <b className={styles.b}>02</b>



                      <div className={styles.frameChild18} />



                    </div>



                    <div className={styles.frameChild19} aria-hidden="true" />



                  </div>



                  <div className={styles.careerFocusedTechnologyTraiParent}>



                    <div className={styles.structuredAccelerated}>Career Tech Training</div>



                    <div className={styles.buildPracticalCareerReady}><span>Build Career-Ready Skills</span>{" "}<span>technology skills</span></div>



                  </div>



                </div>



              </div>



            </div>



          </div>



        </div>



        <div className={`${styles.frameWrapper9} ${styles.accordionCardSpace} ${openCards.includes(3) ? styles.isExpanded : styles.isCollapsed}`}>



          <div className={styles.frameParent36}>



            <div className={`${styles.frameWrapper10} ${styles.expandableCardPanel} ${openCards.includes(3) ? styles.isOpen : ""}`}>



              <div className={styles.usedLearningEnvironmentsInParent}>



                <b className={styles.usedLearningEnvironments}>



                  Used Learning Environments Including:



                  <br />



                </b>



                <div className={styles.frameParent17}>



                  <div className={styles.frameParent18}>



                    <div className={styles.frameChild16} />



                    <div className={styles.performanceFeedback}>{`Universities & Colleges`}</div>



                  </div>



                  <div className={styles.frameParent18}>



                    <div className={styles.frameChild12} />



                    <div className={styles.codingFundamentals}>{`Technical Academies `}</div>



                  </div>



                  <div className={styles.frameParent18}>



                    <div className={styles.frameChild12} />



                    <div className={styles.codingFundamentals}>{`Corporate Programs `}</div>



                  </div>



                  <div className={styles.frameParent18}>



                    <div className={styles.frameChild12} />



                    <div className={styles.codingFundamentals}>Upskilling Programs</div>



                  </div>



                </div>



              </div>



            </div>



            <div className={`${styles.frameParent23} ${styles.expandableCardTrigger} ${openCards.includes(3) ? styles.isActive : ""}`}>



              <button type="button" className={`${styles.frameChild17} ${styles.cardOpenArrow} ${styles.accordionArrow} ${openCards.includes(3) ? styles.isOpen : ""}`} onClick={() => toggleCard(3)} aria-expanded={openCards.includes(3)} aria-label={openCards.includes(3) ? "Collapse card 3" : "Expand card 3"}>



                <svg className={styles.accordionArrowSvg} width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">



                  <path d="M5 3.5L12 10.5L19 3.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M5 9.5L12 16.5L19 9.5" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />



                </svg>



              </button>



              <div className={styles.frameParent24}>



                <div className={styles.frameParent25}>



                  <div className={styles.parent}>



                    <b className={styles.b}>03</b>



                    <div className={styles.frameChild18} />



                  </div>



                  <div className={styles.frameChild19} aria-hidden="true" />



                </div>



                <div className={styles.builtForEducationEnterpriseParent}>



                  <div className={styles.builtForEducationTitle}>{`Education & Enterprise`}</div>



                  <div className={styles.builtForEducationDescription}><span>Deploy across diverse</span>{" "}<span>learning environments</span></div>



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.rectangleParent3}>



        <div className={styles.rectangle2} />



        <Image className={styles.image202} src="/images/bootbg.webp" alt="NeuroLabs Coding Bootcamp Background" width={1280} height={800} priority />



        <div className={styles.frameParent45}>



          <div className={styles.neurolabsCodingBootcampsFasParent}>



            <b className={styles.neurolabsCodingBootcamps2}>NeuroLabs Coding Bootcamps Fast-Track Your <span className={styles.codingJourneyBlue}>Coding Journey</span></b>



            <div className={styles.accelerateYourCoding}>Accelerate your coding journey with hands on projects, expert guidance, and industry-ready training.</div>



          </div>



          <div className={styles.frameWrapper11}>



            <div className={styles.frameWrapper12}>



              <div className={styles.bookADemoWrapper}>



                <div



                  className={styles.bookADemo}



                  onClick={() => setIsBookDemoOpen(true)}



                >



                  Book a Demo



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.rectangleParent4} ref={nextSectionRef}>



        <div className={styles.rectangle3} />



        <div className={styles.image20} />



        <div className={styles.image21Parent}>



          <div className={styles.image21} />



          <div className={styles.futureReadyTechCareersParent}>



            <b className={styles.futureReadyTechCareers}>Future-Ready Tech Careers</b>



            <Image className={styles.image24Icon} src="/images/image 62.png" width={1216} height={548} sizes="100vw" alt="" />



          </div>



          <div className={styles.frameChild35} />



        </div>



      </div>



    </div>



      {isBookDemoOpen && (



        <BookDemoModal onClose={() => setIsBookDemoOpen(false)} />



      )}



 <TalkToExpertButton />



      <Footer />



    </>



  );



};



export default Bootcamp;
