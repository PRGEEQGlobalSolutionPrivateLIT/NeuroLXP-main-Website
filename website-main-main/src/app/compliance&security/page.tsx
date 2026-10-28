"use client";







import type { NextPage } from 'next';



import Image from "next/image";



import { useRouter } from "next/navigation";



import styles from "./compliance&security.module.css";



import Header from "../../components/Header/header";



import Footer from "../../components/Footer/footer";



import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";











const ComplianceSecurity: NextPage = () => {



  const router = useRouter();



    return (



        <>



          <Header />



        <div className={styles.complianceSecurity}>



            <svg



        className={styles.complianceSecurityChild}



        width="1488"



        height="611"



        viewBox="0 0 1488 611"



        fill="none"



        xmlns="http://www.w3.org/2000/svg"



        xmlnsXlink="http://www.w3.org/1999/xlink"



        aria-hidden="true"



        focusable="false"



      >



        <g filter="url(#filter0_dd_4_11)">



          <path d="M24 28H1464V476.728C1464 476.728 1027.32 583.352 741 586.904C458.343 590.409 24 497.158 24 497.158V28Z" fill="#DFE6E9"/>



        </g>



        <g filter="url(#filter1_ii_4_11)">



          <path d="M24 0H1464V439.898C1464 439.898 1027.32 544.424 741 547.905C458.343 551.342 24 459.926 24 459.926V0Z" fill="#DFE6E9"/>



          <path d="M24 0H1464V439.898C1464 439.898 1027.32 544.424 741 547.905C458.343 551.342 24 459.926 24 459.926V0Z" fill="url(#pattern0_4_11)" fillOpacity="0.05"/>



        </g>



        <defs>



          <filter id="filter0_dd_4_11" x="0" y="4" width="1488" height="607" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">



            <feFlood floodOpacity="0" result="BackgroundImageFix"/>



            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>



            <feOffset dx="8" dy="8"/>



            <feGaussianBlur stdDeviation="8"/>



            <feComposite in2="hardAlpha" operator="out"/>



            <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"/>



            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_11"/>



            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>



            <feOffset dx="-8" dy="-8"/>



            <feGaussianBlur stdDeviation="8"/>



            <feComposite in2="hardAlpha" operator="out"/>



            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>



            <feBlend mode="normal" in2="effect1_dropShadow_4_11" result="effect2_dropShadow_4_11"/>



            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_4_11" result="shape"/>



          </filter>



          <filter id="filter1_ii_4_11" x="16" y="-8" width="1456" height="564" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">



            <feFlood floodOpacity="0" result="BackgroundImageFix"/>



            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>



            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>



            <feOffset dx="8" dy="8"/>



            <feGaussianBlur stdDeviation="8"/>



            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>



            <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"/>



            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_11"/>



            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>



            <feOffset dx="-8" dy="-8"/>



            <feGaussianBlur stdDeviation="8"/>



            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>



            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>



            <feBlend mode="normal" in2="effect1_innerShadow_4_11" result="effect2_innerShadow_4_11"/>



          </filter>



          <pattern id="pattern0_4_11" patternContentUnits="objectBoundingBox" width="0.0666667" height="0.233577">



            <use xlinkHref="#image0_4_11" transform="scale(0.000694444 0.00182482)"/>



          </pattern>



          <image



            id="image0_4_11"



            width="96"



            height="128"



            preserveAspectRatio="none"



            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACACAYAAAD03Gy6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABUBJREFUeAHtnVFS2zAQhuX4TknoUw4EmdILEC7QYZjcp/SphUPFjdKaGiJbK+2udmXv99CZTsLok34CQbtSGhfh9vbbQ9N0h7HHz489Pj8/HVwG+/39oevcw9jjXdcdjsenR4dAu3/rIry9/fq5Xn85i7pd+BnNbrvdNq+vv19cAiUW36PdPxqAh3oSpRa/R7M/KAAP1SRKL36PVn9wAB7sJKQWv0ejf1IAntxJSC9+jzb/5AA8qZPQsvg9mvwbhwDyFs8PoWnxh2jwRwXgiU1iCsnF75H2z/oRNCT+cg6jYfE90v7oADypk9Cy+D2S/iQBeKCT0Lb4PVL+K0fIatU18efgf+9wIeFP9gqIvVX7T97eCzdS/iQBwOV7dIUg6Y8OIF2+R0cI0v6oACB/IZ5/ar5QbwVTocE/OwDon+dc+/FYtPhnBZC6N6ItBE3+yQHkbkxpCUGbf1IA2F1B6RA0+oMDoNqSlQpBqz8oAOr98NIhaPaPBsBVjCgVgnb/yQCw8v7rN5vtbkyCO4Qa/FvHKP/366cltPbtlPJvpwfHysMktPXtlPRv44Nj5eMSzunp2ynt38IGx8pPSzjkJKDja/Rvy8mPSzjkJCDja/Vvy8qHJRxyEjX7t+XlryVCj0Insdnc7Gr2b9frmx9uBKw8dj8dMonzPyOP1eHfnr+DDo5JnmI/natvR4t/MAAqeagEdQg1+V8FQC0PkcBOAjK+Vv8PAXDJxySwk6jZ/z0AbvkpCewkava/BFBKfkwCO4ma/c9vQ7eupHxIIvwM2CTOBi81+zduAi75IUs/h8xWD4CitR4ARWU9IBVt9YBUVNUDctFSD8hFRT0Ai3Q9AItoPYAKqXoAFSL1AGpK1wOoSfFvtMkPWcI5ZFQ9gBvuegA3EP/RQ3rS8j3H4/fHrmsOLpFa/IMBaJHvSQ2hJv+rALTJ90BDqM3/KgA7x8tHyD/wCmge9vuvB6cMaPdCbf4jvwN0TSK1daQm/4l3QTomkdu3U4t/y7EVTAV33w43EP+Waz8eS6m+HS6g/pe9IDvHS0uK//tuqJ3jpSHV/0M9wM7x4sjxv6qI2TnePHL9gzVhO8ebBsZ/tCvCzvHCwPpP3hkX23s5nVznkJxOTTftkL+3U4O/9QUhsb6gANYXlIH1BTnrC8JifUHWF0SD9QUNsL6gfKwvyPqC8FhfkAKsL0gB1hekAOsLEsT6ggSxviBBrC/I+oKysb6gC9YXlIz1BQWxviAI1hdkfUF5WF/QAOsLSsP6ggLU4t/6P1a4L9Qewz6f4P5wKchwXqjtGOXn8PkE/y7ts/v9pfwH11ba/f4S/p8ubrX7/Uv7B64utvv9S/qPXN5t9/uX8m/u7u67sS+MXblYom8ntx7Qj6/dH1UPWML9/o7ZH10PmPv9/rHxHdKfpB4w5/v9IeNj/MnqAXO93x86fq4/aT1gjvf7c/uT1wPmdr8/tz9LPWBO9/tDxldZD5jL/f7c/o2LsPT7/aeg8I9+orbW/XQo2v1Bnym/5HO8ISj9QQF4lnqO9zPU/uAAPEs8xzuEwz8pAM/SzvH2cPknB+BZ0jle/z9O/+jb0CmWcI6X2x8VgCc2iSkkF79H2j/rR9AQrv30Ukj7owPwUO+nl0bSnyQAD9V+uhRS/itHyBzP8V4/h9af7BVA1bcjhZQ/SQDUfTulkfRHB5Dft6MjBGl/VADcfTvcaPDPDqBU3w4XWvyzijdt0ONJv/kAKT6dqjQ5p8UwBLP8Q7h8AcHoKVvJxet/qAAtPXtpKLZPxqA1r4dKNr9/wABL0yScvVmywAAAABJRU5ErkJggg=="



          />



        </defs>



      </svg>



            <nav className={styles.frameDiv} aria-label="Breadcrumb">



  <span className={styles.learningEcoSystem}>Features</span>







  <Image



    className={styles.breadcrumbArrow}



    src="/icons/arrow-right-double.svg"



    width={16}



    height={16}



    alt=""



  />







  <span className={styles.learningEcoSystem}>Learning Eco-system</span>







  <Image



    className={styles.breadcrumbArrow}



    src="/icons/arrow-right-double.svg"



    width={16}



    height={16}



    alt=""



  />







  <span className={`${styles.learningEcoSystem} ${styles.breadcrumbCurrent}`}>



    Compliance & Security



  </span>



</nav>







<div className={styles.complianceSecurityInner}>



                <div className={styles.frameParent2}>



                    <div className={styles.frameWrapper}>



                        <div className={styles.frameWrapper2}>



                            <div className={styles.frameParent3}>



                                <div className={styles.frameParent4}>



                                    <div className={styles.heroBadge}>Compliance & Security</div>



                                    <b className={styles.secureLearningSmarterContainer}>



                                        <span className={styles.secureLearningSmarter}>{`Secure Learning! Smarter Compliance! `}</span>



                                        <span className={styles.greaterConfidence}>Greater Confidence!</span>



                                    </b>



                                </div>



                                <div className={styles.neurolxpCombinesCompliance}>NeuroLXP combines compliance, certification, audit readiness, and security in one scalable learning platform</div>



                            </div>



                        </div>



                    </div>



                    <div className={styles.frameParent5}>



                        <BookDemoTrigger className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>



                Book a Demo



              </BookDemoTrigger>



              <button



                className={`${styles.heroButton} ${styles.heroButtonPrimary}`}



                type="button"



                onClick={() => router.push("/HomePage")}



              >



                Start Learning



              </button>



                    </div>



                </div>



            </div>



            <section className={styles.frameParent6} aria-labelledby="compliance-training-heading">



  <div className={styles.frameParent7}>



    <div className={styles.frameParent8}>



      <div className={styles.frameParent9} style={{ height: "auto", minHeight: 0, marginBottom: "0" }}>



        <div className={styles.complianceTrainingBadge}>Compliance Training</div>



        <h2 id="compliance-training-heading" className={styles.structuredTrainingFor}>



          Structured Training for<br />Compliance <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Readiness</span>



        </h2>



      </div>



      <p className={styles.neurolxpDeliversStructured}>



        NeuroLXP delivers structured compliance training for regulatory readiness.



      </p>



    </div>







    <div className={styles.frameParent10} aria-label="Compliance training benefits">



      <div className={styles.frameParent11}>



        <div className={`${styles.complianceStatus} ${styles.complianceStatusBlue}`}>Compliant</div>



        <div className={`${styles.complianceStatus} ${styles.complianceStatusPurple}`}>Certified</div>



      </div>



      <div className={styles.frameParent11}>



        <div className={`${styles.complianceStatus} ${styles.complianceStatusPink}`}>Tracked</div>



        <div className={`${styles.complianceStatus} ${styles.complianceStatusGold}`}>Audit-Ready</div>



      </div>



    </div>



  </div>







  <div className={styles.frameWrapper4}>



    <Image



      className={styles.frameChild8}



      src="/images/cybersecurity.webp"



      width={711}



      height={555}



      sizes="(max-width: 900px) 92vw, 711px"



      alt="Professionals reviewing and signing a compliance document"



    />



  </div>



</section>



            <section className={styles.frameParent13} aria-labelledby="smart-compliance-heading">



  <div className={styles.smartComplianceHeader}>



    <div className={styles.smartComplianceBadge}>Smart Compliance Management</div>







    <h2 id="smart-compliance-heading" className={styles.centralizeMonitorStayContainer}>



      <span className={styles.centralizeMonitor}>Centralize! Monitor! </span>



      <span className={styles.stayReady}>Stay Ready!</span>



    </h2>







    <p className={styles.simplifyComplianceTraining}>



      Simplify compliance training across teams and departments with centralized



      management and real time visibility.



    </p>



  </div>







  <div className={styles.smartComplianceCards}>



    <article className={styles.smartComplianceCard}>



      <div className={styles.smartComplianceCardInner}>



        <div className={styles.smartComplianceIconShadow}>



          <div className={`${styles.smartComplianceIconCircle} ${styles.smartCompliancePink}`}>



            <Image



              className={styles.smartComplianceIcon}



              src="/icons/folder-02white.svg"



              width={28}



              height={28}



              alt="Centralized training"



            />



          </div>



        </div>



        <h3 className={styles.smartComplianceCardTitle}>Centralize Training</h3>



      </div>



    </article>







    <article className={styles.smartComplianceCard}>



      <div className={styles.smartComplianceCardInner}>



        <div className={styles.smartComplianceIconShadow}>



          <div className={`${styles.smartComplianceIconCircle} ${styles.smartCompliancePurple}`}>



            <Image



              className={styles.smartComplianceIcon}



              src="/icons/clipboard-list copy.svg"



              width={28}



              height={28}



              alt="Mandatory course assignments"



            />



          </div>



        </div>



        <h3 className={styles.smartComplianceCardTitle}>Assign Mandatory Courses</h3>



      </div>



    </article>







    <article className={styles.smartComplianceCard}>



      <div className={styles.smartComplianceCardInner}>



        <div className={styles.smartComplianceIconShadow}>



          <div className={`${styles.smartComplianceIconCircle} ${styles.smartComplianceGold}`}>



            <Image



              className={styles.smartComplianceIcon}



              src="/icons/mortarboard-02.svg"



              width={28}



              height={28}



              alt="Certification tracking"



            />



          </div>



        </div>



        <h3 className={styles.smartComplianceCardTitle}>Track Certifications</h3>



      </div>



    </article>







    <article className={styles.smartComplianceCard}>



      <div className={styles.smartComplianceCardInner}>



        <div className={styles.smartComplianceIconShadow}>



          <div className={`${styles.smartComplianceIconCircle} ${styles.smartComplianceTeal}`}>



            <Image



              className={styles.smartComplianceIcon}



              src="/icons/archive.svg"



              width={28}



              height={28}



              alt="Training record management"



            />



          </div>



        </div>



        <h3 className={styles.smartComplianceCardTitle}>Maintain Training Records</h3>



      </div>



    </article>







    <article className={styles.smartComplianceCard}>



      <div className={styles.smartComplianceCardInner}>



        <div className={styles.smartComplianceIconShadow}>



          <div className={`${styles.smartComplianceIconCircle} ${styles.smartComplianceOrange}`}>



            <Image



              className={styles.smartComplianceIcon}



              src="/icons/search-02white.svg"



              width={28}



              height={28}



              alt="Audit and review support"



            />



          </div>



        </div>



        <h3 className={styles.smartComplianceCardTitle}>Simplify Audits And Reviews</h3>



      </div>



    </article>



  </div>



</section>



            <div className={styles.frameParent24}>



                <div className={styles.frameWrapper19}>



                    <div className={styles.frameWrapper20}>



                        <div className={styles.frameWrapper21}>



                            <div className={styles.frameWrapper22}>



                                <div className={styles.frameParent25}>



                                    <div className={styles.industrySpecificComplianceWrapper}>



                                        <b className={styles.industrySpecificCompliance}>Industry-Specific <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Compliance</span></b>



                                    </div>



                                    <div className={styles.simplifyComplianceTraining}>Deliver compliance learning aligned with regulatory requirements, industry standards, and organizational policies.</div>



                                </div>



                            </div>



                        </div>



                    </div>



                </div>



                <div className={styles.frameParent26}>



                    <div className={styles.frameParent27}>



                        <div className={styles.frameParent28}>



                            <div className={styles.frameChild15} />



                            <div className={styles.frameWrapper23}>



                                <div className={styles.frameParent29}>



                                    <div className={styles.workplaceSafetyWrapper}>



                                        <b className={styles.workplaceSafety}>Workplace Safety</b>



                                    </div>



                                    <div className={styles.healthSafetyAnd}><span className={styles.industrySubtextFirst}>Safe workplace</span><span className={styles.industrySubtextLast}>practices</span></div>



                                </div>



                            </div>



                        </div>



                        <div className={styles.frameParent28}>



                            <div className={styles.frameChild15} />



                            <div className={styles.frameWrapper24}>



                                <div className={styles.frameParent29}>



                                    <div className={styles.dataPrivacyWrapper}>



                                        <b className={styles.workplaceSafety}>Data Privacy</b>



                                    </div>



                                    <div className={styles.dataProtectionAnd}><span className={styles.industrySubtextFirst}>Data privacy</span><span className={styles.industrySubtextLast}>awareness</span></div>



                                </div>



                            </div>



                        </div>



                        <div className={styles.frameParent28}>



                            <div className={styles.frameChild15} />



                            <div className={styles.frameWrapper24}>



                                <div className={styles.frameParent29}>



                                    <div className={styles.corporateEthicsWrapper}>



                                        <b className={styles.corporateEthics}>Corporate Ethics<br/></b>



                                            </div>



                                            <div className={styles.codeOfConduct}><span className={styles.industrySubtextFirst}>Ethical workplace</span><span className={styles.industrySubtextLast}>practices</span></div>



                                            </div>



                                            </div>



                                            </div>



                                            </div>



                                            <div className={styles.frameParent27}>



                                                <div className={styles.frameParent28}>



                                                    <div className={styles.frameChild15} />



                                                    <div className={styles.frameWrapper24}>



                                                        <div className={styles.frameParent29}>



                                                            <div className={styles.workplaceConductWrapper}>



                                                                <b className={styles.workplaceConduct}>Workplace Conduct</b>



                                                            </div>



                                                            <div className={styles.antiHarassmentAndWorkplace}><span className={styles.industrySubtextFirst}>Respectful workplace</span><span className={styles.industrySubtextLast}>training</span></div>



                                                        </div>



                                                    </div>



                                                </div>



                                                <div className={styles.frameParent28}>



                                                    <div className={styles.frameChild15} />



                                                    <div className={styles.frameWrapper24}>



                                                        <div className={styles.frameParent29}>



                                                            <div className={styles.financialComplianceWrapper}>



                                                                <b className={styles.financialCompliance}>Financial Compliance</b>



                                                            </div>



                                                            <div className={styles.antiHarassmentAndWorkplace}><span className={styles.industrySubtextFirst}>Financial compliance</span><span className={styles.industrySubtextLast}>standards</span></div>



                                                        </div>



                                                    </div>



                                                </div>



                                                <div className={styles.frameParent28}>



                                                    <div className={styles.frameChild15} />



                                                    <div className={styles.frameWrapper24}>



                                                        <div className={styles.frameParent29}>



                                                            <div className={styles.sustainabilityWrapper}>



                                                                <b className={styles.financialCompliance}>Sustainability</b>



                                                            </div>



                                                            <div className={styles.antiHarassmentAndWorkplace}><span className={styles.industrySubtextFirst}>Sustainable workplace</span><span className={styles.industrySubtextLast}>practices</span></div>



                                                        </div>



                                                    </div>



                                                </div>



                                            </div>



                                            </div>



                                            </div>



                                            <div className={styles.frameParent41}>



                                                <div className={styles.frameParent42}>



                                                    <div className={styles.frameWrapper29}>



                                                        <div className={styles.frameParent8} style={{ gap: "0px", height: "auto", minHeight: 0 }}>



                                                            <div className={styles.frameParent9}>



                                                                <div className={styles.engagingComplianceBadge}>Engaging Compliance Learning</div>



                                                                <b className={styles.makeMandatoryTrainingContainer}>



                                                                    <span className={styles.makeMandatoryTrainingContainer2}>



                                                                        <span className={styles.centralizeMonitor}>{`Make Mandatory `}</span>



                                                                        <span className={styles.stayReady}>Training More Effective</span>



                                                                    </span>



                                                                </b>



                                                            </div>



                                                            <div className={styles.makeComplianceLearning}>Make compliance learning engaging and interactive.</div>



                                                        </div>



                                                    </div>



                                                    <div className={styles.frameParent45}>



                                                        <div className={styles.frameParent46}>



                                                            <div className={styles.frameParent47}>



                                                                <div className={styles.frameWrapper30}>



                                                                    <div className={styles.frameParent48}>



                                                                        <div className={styles.mandatoryIconBox}><Image className={styles.mandatoryIcon} src="/icons/drama.svg" width={40} height={40} alt="Scenario-Based Learning" /></div>



                                                                        <div className={styles.scenarioBasedLearning} style={{ width: "auto", maxWidth: "100%", minWidth: 0, whiteSpace: "normal", lineHeight: "28px", overflowWrap: "normal", wordBreak: "normal", flex: "1 1 auto" }}><span style={{ display: "block", whiteSpace: "nowrap" }}>Scenario-Based</span>{" "}<span style={{ display: "block", whiteSpace: "nowrap" }}>Learning</span></div>



                                                                    </div>



                                                                </div>



                                                                <div className={styles.frameWrapper31}>



                                                                    <div className={styles.frameParent49}>



                                                                        <div className={styles.mandatoryIconBox}><Image className={styles.mandatoryIcon} src="/icons/clipboard-list-1blue.svg" width={40} height={40} alt="Interactive quizzes" /></div>



                                                                        <div className={styles.scenarioBasedLearning} style={{ width: "138px", maxWidth: "138px", minWidth: 0, whiteSpace: "normal", lineHeight: "28px", overflowWrap: "normal", wordBreak: "normal", flexShrink: 1 }}>Interactive Quizzes</div>



                                                                    </div>



                                                                </div>



                                                            </div>



                                                            <div className={styles.frameWrapper32}>



                                                                <div className={styles.frameParent49}>



                                                                    <div className={styles.mandatoryIconBox}><Image className={styles.mandatoryIcon} src="/icons/book-open-text.svg" width={40} height={40} alt="Real-world case studies" /></div>



                                                                    <div className={styles.scenarioBasedLearning} style={{ width: "138px", maxWidth: "138px", minWidth: 0, whiteSpace: "normal", lineHeight: "28px", overflowWrap: "normal", wordBreak: "normal", flexShrink: 1 }}>Real World Case Studies</div>



                                                                </div>



                                                            </div>



                                                        </div>



                                                        <div className={styles.frameParent47}>



                                                            <div className={styles.frameWrapper33}>



                                                                <div className={styles.frameParent49}>



                                                                    <div className={styles.mandatoryIconBox}><Image className={styles.mandatoryIcon} src="/icons/gamepad-01.svg" width={40} height={40} alt="Interactive Gamification" /></div>



                                                                    <div className={styles.scenarioBasedLearning} style={{ width: "138px", maxWidth: "138px", minWidth: 0, whiteSpace: "normal", lineHeight: "28px", overflowWrap: "normal", wordBreak: "normal", flexShrink: 1 }}>Interactive Gamification</div>



                                                                </div>



                                                            </div>



                                                            <div className={styles.frameWrapper34}>



                                                                <div className={styles.frameParent49}>



                                                                    <div className={styles.mandatoryIconBox}><Image className={styles.mandatoryIcon} src="/icons/idea-01yellow.svg" width={40} height={40} alt="Knowledge Checks" /></div>



                                                                    <div className={styles.scenarioBasedLearning} style={{ width: "138px", maxWidth: "138px", minWidth: 0, whiteSpace: "normal", lineHeight: "28px", overflowWrap: "normal", wordBreak: "normal", flexShrink: 1 }}>Knowledge Checks</div>



                                                                </div>



                                                            </div>



                                                        </div>



                                                    </div>



                                                </div>



                                                <div className={styles.frameParent54}>



  <div className={styles.realTimeHeader}>



    <div className={styles.automatedTrackingBadge}>Automated Tracking and Reporting</div>







    <h2 className={styles.realTimeVisibilityTitle}>



      Real-Time Visibility into <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Compliance</span>



    </h2>







    <p className={styles.realTimeVisibilityText}>



      Gain actionable insights into compliance performance with analytics and reporting



      tools that help organizations monitor progress and maintain readiness.



    </p>



  </div>







  <div className={styles.realTimeMetrics}>



    <div className={styles.realTimeMetric}>



      <div className={styles.realTimeIconShadow}>



        <div className={`${styles.realTimeIconCircle} ${styles.realTimePink}`}>



          <Image



            className={styles.realTimeIcon}



            src="/icons/chart-02white.svg"



            width={36}



            height={36}



            alt="Course completion rates"



          />



        </div>



      </div>



      <h3 className={styles.realTimeMetricTitle}>Course Completion Rates</h3>



    </div>







    <div className={styles.realTimeMetric}>



      <div className={styles.realTimeIconShadow}>



        <div className={`${styles.realTimeIconCircle} ${styles.realTimeBlue}`}>



          <Image



            className={styles.realTimeIcon}



            src="/icons/certificate-01white.svg"



            width={36}



            height={36}



            alt="Certification status"



          />



        </div>



      </div>



      <h3 className={styles.realTimeMetricTitle}>Certification Status</h3>



    </div>







    <div className={styles.realTimeMetric}>



      <div className={styles.realTimeIconShadow}>



        <div className={`${styles.realTimeIconCircle} ${styles.realTimePurple}`}>



          <Image



            className={styles.realTimeIcon}



            src="/icons/chart-03simple.svg"



            width={36}



            height={36}



            alt="Assessment performance"



          />



        </div>



      </div>



      <h3 className={styles.realTimeMetricTitle}>Assessment Performance</h3>



    </div>







    <div className={styles.realTimeMetric}>



      <div className={styles.realTimeIconShadow}>



        <div className={`${styles.realTimeIconCircle} ${styles.realTimeGreen}`}>



          <Image



            className={styles.realTimeIcon}



            src="/icons/user-group-02.svg"



            width={36}



            height={36}



            alt="Training participation"



          />



        </div>



      </div>



      <h3 className={styles.realTimeMetricTitle}>Training Participation</h3>



    </div>







    <div className={styles.realTimeMetric}>



      <div className={styles.realTimeIconShadow}>



        <div className={`${styles.realTimeIconCircle} ${styles.realTimeOrange}`}>



          <Image



            className={styles.realTimeIcon}



            src="/icons/building-white.svg"



            width={36}



            height={36}



            alt="Department compliance metrics"



          />



        </div>



      </div>



      <h3 className={styles.realTimeMetricTitle}>Department Metrics</h3>



    </div>



  </div>



</div>



</div>











<section className={styles.complianceSecurityInner2} aria-labelledby="training-records-heading">



  <div className={styles.trainingRecordsOuter}>



    <div className={styles.trainingRecordsInner}>



      <div className={styles.trainingRecordsContent}>



        <div className={styles.trainingRecordsBadge}>Certification and Audit Readiness</div>







        <h2 id="training-records-heading" className={styles.maintainVerifiableTraining}>



          Maintain Verifiable<br />Training <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Records</span>



        </h2>







        <p className={styles.issueDigitalCertificates}>



          Issue digital certificates and maintain audit-ready training records.



        </p>



      </div>







      <div className={styles.trainingRecordsImageWrap}>



        <Image



          className={styles.rectangleIcon}



          src="/images/Rectangle 80.webp"



          width={608}



          height={564}



          sizes="(max-width: 900px) 100vw, 608px"



          alt="Professionals reviewing compliance and audit records"



        />



      </div>



    </div>



  </div>



</section>











                                                                                <div className={styles.finalSectionsFlow}>



<section className={`${styles.frameParent68} ${styles.learningSecuritySection}`} aria-labelledby="learning-security-heading">



  <header className={styles.learningSecurityHeader}>



    <div className={styles.learningSecurityBadge}>Learning Security</div>







    <h2 id="learning-security-heading" className={styles.learningSecurityTitle}>



      <span>Protect Data! Control Access! </span>



      <span className={styles.stayReady}>Build Trust!</span>



    </h2>







    <p className={styles.learningSecurityIntro}>



      NeuroLXP protects learner data, digital content, and platform access.



    </p>



  </header>







  <div className={styles.securityTimeline}>



    <div className={styles.securityTimelineRail} aria-hidden="true" />







    <article className={`${styles.securityFeature} ${styles.securityPink}`}>



      <div className={styles.securityTimelineIcon}>



        <Image src="/icons/shield-01pink.svg" width={34} height={34} alt="" />



      </div>







      <div className={styles.securityFeatureCard}>



        <h3 className={styles.securityFeatureTitle}>Advanced Data Protection</h3>



        <p className={styles.securityFeatureText}>



          Protect sensitive learning data through secure storage and communication.



        </p>







        <div className={styles.securityFeatureList}>



          {[



            "Encrypted data storage and secure communication",



            "Protection of learner profiles and course data",



            "Secure management of assessment and training records",



          ].map((item) => (



            <div className={styles.securityFeatureItem} key={item}>



              <span className={styles.securityCheck}>



                <Image src="/icons/checkmark-badge-01-3.svg" width={22} height={22} alt="" />



              </span>



              <span>{item}</span>



            </div>



          ))}



        </div>



      </div>



    </article>







    <article className={`${styles.securityFeature} ${styles.securityBlue}`}>



      <div className={styles.securityTimelineIcon}>



        <Image src="/icons/user-group-02 copyblue.svg" width={34} height={34} alt="" />



      </div>







      <div className={styles.securityFeatureCard}>



        <h3 className={styles.securityFeatureTitle}>Role-Based Access Control</h3>



        <p className={styles.securityFeatureText}>



          Manage access based on user roles and responsibilities.



        </p>



        <p className={styles.securityRoles}>Admin · Instructor · Learner · Manager</p>







        <div className={styles.securityFeatureList}>



          {[



            "Manage access by user roles",



            "Control viewing, editing & management permissions",



            "Maintain structured access hierarchies",



          ].map((item) => (



            <div className={styles.securityFeatureItem} key={item}>



              <span className={styles.securityCheck}>



                <Image src="/icons/checkmark-badge-01-1blue.svg" width={22} height={22} alt="" />



              </span>



              <span>{item}</span>



            </div>



          ))}



        </div>



      </div>



    </article>







    <article className={`${styles.securityFeature} ${styles.securityPurple}`}>



      <div className={styles.securityTimelineIcon}>



        <Image src="/icons/lock-keyhole.svg" width={34} height={34} alt="" />



      </div>







      <div className={styles.securityFeatureCard}>



        <h3 className={styles.securityFeatureTitle}>Secure Authentication</h3>



        <p className={styles.securityFeatureText}>



          Protect user accounts and learning environments with secure authentication and controlled access.



        </p>







        <div className={styles.securityFeatureList}>



          {[



            "Secure user login",



            "Controlled platform access",



            "Protection against unauthorized access",



          ].map((item) => (



            <div className={styles.securityFeatureItem} key={item}>



              <span className={styles.securityCheck}>



                <Image src="/icons/checkmark-badge-01.svg" width={22} height={22} alt="" />



              </span>



              <span>{item}</span>



            </div>



          ))}



        </div>



      </div>



    </article>







    <article className={`${styles.securityFeature} ${styles.securityOrange}`}>



      <div className={styles.securityTimelineIcon}>



        <Image src="/icons/book-lock.svg" width={34} height={34} alt="" />



      </div>







      <div className={styles.securityFeatureCard}>



        <h3 className={styles.securityFeatureTitle}>Content Protection</h3>



        <p className={styles.securityFeatureText}>



          Safeguard digital learning resources from unauthorized access and misuse.



        </p>







        <div className={styles.securityFeatureList}>



          {[



            "Protect courses and learning materials",



            "Secure videos and documents",



            "Control content access and distribution",



          ].map((item) => (



            <div className={styles.securityFeatureItem} key={item}>



              <span className={styles.securityCheck}>



                <Image src="/icons/checkmark-badge-01-2.svg" width={22} height={22} alt="" />



              </span>



              <span>{item}</span>



            </div>



          ))}



        </div>



      </div>



    </article>







    <article className={`${styles.securityFeature} ${styles.securityGreen}`}>



      <div className={styles.securityTimelineIcon}>



        <Image src="/icons/shield-checkgreen.svg" width={34} height={34} alt="" />



      </div>







      <div className={styles.securityFeatureCard}>



        <h3 className={styles.securityFeatureTitle}>Privacy and Compliance</h3>



        <p className={styles.securityFeatureText}>



          Support responsible data handling and privacy practices aligned with applicable requirements.



        </p>







        <div className={styles.securityFeatureList}>



          {[



            "Protect learner data",



            "Support privacy requirements",



            "Promote responsible data handling",



          ].map((item) => (



            <div className={styles.securityFeatureItem} key={item}>



              <span className={styles.securityCheck}>



                <Image src="/icons/greenmarkicon.svg" width={22} height={22} alt="" />



              </span>



              <span>{item}</span>



            </div>



          ))}



        </div>



      </div>



    </article>



  </div>



</section>







<section className={`${styles.frameParent99} ${styles.diverseOrganizationsSection}`} aria-labelledby="diverse-organizations-heading">



  <header className={styles.diverseOrganizationsHeader}>



    <h2 id="diverse-organizations-heading" className={styles.diverseOrganizationsTitle}>



      Built for Diverse <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Organizations</span>



    </h2>



    <p className={styles.diverseOrganizationsText}>



      NeuroLXP enables secure and compliant learning across a wide range of sectors and institutions.



    </p>



  </header>







  <div className={styles.diverseOrganizationsGrid}>



    {[



      { title: "Universities", icon: "student.svg", tone: "pink" },



      { title: "Corporate Training", icon: "building-white.svg", tone: "orange" },



      { title: "Certification", icon: "certificate-01white.svg", tone: "maroon" },



      { title: "Government", icon: "bank.svg", tone: "brown" },



      { title: "Healthcare", icon: "health.svg", tone: "green" },



      { title: "Financial Services", icon: "banknote.svg", tone: "teal" },



      { title: "Manufacturing", icon: "factory.svg", tone: "navy" },



      { title: "Schools", icon: "school.svg", tone: "purple" },



    ].map((item) => (



      <article className={styles.diverseOrganizationCard} key={item.title}>



        <div className={styles.diverseOrganizationIconOuter}>



          <div className={`${styles.diverseOrganizationIconInner} ${styles[`diverseOrganizationIconInner--${item.tone}`]}`}>



            <Image



              className={styles.diverseOrganizationIcon}



              src={`/icons/${item.icon}`}



              width={36}



              height={36}



              alt=""



            />



          </div>



        </div>



        <h3 className={styles.diverseOrganizationCardTitle}>{item.title}</h3>



      </article>



    ))}



  </div>



</section>







<section className={`${styles.complianceSecurityInner3} ${styles.neurolxpClosingSection}`} aria-labelledby="neurolxp-closing-heading">
  <div className={styles.neurolxpExpertButtonSlot} data-expert-button-slot />



 <div className={styles.neurolxpClosingBadge}>



NeuroLXP
<sup
  className={styles.trademark}
  style={{
    display: "inline-block",
    fontSize: "4px",
    lineHeight: "4px",
    fontWeight: 600,
    marginLeft: "1px",
    position: "relative",
    top: 0,
    color: "#2D4CC8",
    verticalAlign: "baseline",
    whiteSpace: "nowrap",
    transform: "translateY(-11px) scale(0.75)",
    transformOrigin: "left bottom",
  }}
>
  TM
</sup>


</div>







  <h2 id="neurolxp-closing-heading" className={styles.neurolxpClosingTitle}>



    <span>Secure Learning! </span>



    <span className={styles.stayReady}>Smarter Compliance!</span>



  </h2>







  <p className={styles.neurolxpClosingText}>



    NeuroLXP helps organizations protect learning data, simplify compliance



    and deliver trusted digital learning at scale.



  </p>



</section>



</div>



    </div>



          <Footer />



        </>



  );



};







export default ComplianceSecurity;
