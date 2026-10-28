"use client";







import type { NextPage } from "next";



import Image from "next/image";



import { useEffect } from "react";



import styles from "./analytics-reporting.module.css";



import Header from "../../components/Header/header";



import Footer from "../../components/Footer/footer";



import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";







const AnalyticsReporting: NextPage = () => {



  useEffect(() => {



    const section = document.querySelector<HTMLElement>(".frameParent15");







    if (!section) {



      return;



    }







    let animationFrame = 0;



    let runId = 0;







    const animateNumber = (element: HTMLElement | null, target: number, suffix: string, duration: number, currentRunId: number) => {



      if (!element) {



        return;



      }







      const startTime = performance.now();







      const update = (time: number) => {



        if (currentRunId !== runId) {



          return;



        }







        const progress = Math.min((time - startTime) / duration, 1);



        const easedProgress = 1 - Math.pow(1 - progress, 3);



        const value = Math.round(target * easedProgress);







        element.textContent = `${value}${suffix}`;







        if (progress < 1) {



          animationFrame = requestAnimationFrame(update);



        }



      };







      animationFrame = requestAnimationFrame(update);



    };







    const resetValues = () => {



      const learners = section.querySelector<HTMLElement>(".k");



      const accuracy = section.querySelector<HTMLElement>(".b");



      const percentages = section.querySelectorAll<HTMLElement>(".b2");







      if (learners) learners.textContent = "0K+";



      if (accuracy) accuracy.textContent = "0%";







      percentages.forEach((item) => {



        item.textContent = "0%";



      });



    };







    const startAnimation = () => {



      runId += 1;



      const currentRunId = runId;







      cancelAnimationFrame(animationFrame);



      resetValues();







      section.classList.remove("is-loading");



      void section.offsetWidth;



      section.classList.add("is-loading");







      animateNumber(section.querySelector<HTMLElement>(".k"), 12, "K+", 1500, currentRunId);



      animateNumber(section.querySelector<HTMLElement>(".b"), 98, "%", 1700, currentRunId);







      const percentages = section.querySelectorAll<HTMLElement>(".b2");



      const targets = [86, 74, 91];







      percentages.forEach((item, index) => {



        animateNumber(item, targets[index] ?? 0, "%", 1800, currentRunId);



      });



    };







    const stopAndReset = () => {



      runId += 1;



      cancelAnimationFrame(animationFrame);



      section.classList.remove("is-loading");



      resetValues();



    };







    const observer = new IntersectionObserver(



      ([entry]) => {



        if (entry.isIntersecting) {



          startAnimation();



        } else {



          stopAndReset();



        }



      },



      {



        threshold: 0.35,



      },



    );







    observer.observe(section);







    return () => {



      runId += 1;



      cancelAnimationFrame(animationFrame);



      observer.disconnect();



    };



  }, []);







  return (



    <>



      <Header />



      <main id="main-content" className={styles.analyticsReporting} tabIndex={-1}>



        <nav className={styles.frameDiv} aria-label="Breadcrumb">



          <div className={styles.featuresWrapper}>



            <div className={styles.learningEcoSystem}>Features</div>



          </div>



          <div className={styles.homeParent}>



            <Image className={styles.breadcrumbDoubleArrow} src="/icons/arrow-right-double.svg" width={16} height={16} alt="" aria-hidden="true" />



            <div className={styles.featuresWrapper}>



              <div className={styles.learningEcoSystem}>{`Learning Eco-system `}</div>



            </div>



          </div>



          <div className={styles.arrowRightDoubleGroup}>



            <Image className={styles.breadcrumbDoubleArrow} src="/icons/arrow-right-double.svg" width={16} height={16} alt="" aria-hidden="true" />



            <b className={styles.learningEcoSystem}>{`Analytics & Reporting`}</b>



          </div>



        </nav>



        <div className={styles.frameParent2}>



          <div className={styles.frameParent3}>



            <div className={styles.frameInner}>Why Analytics Matters</div>



            <div className={styles.transformLearningDataIntoMParent}>



              <h1 className={styles.transformLearningData}>



                Transform Learning Data into Meaningful <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Analytics</span>



                <br />



              </h1>



              <div className={styles.neurolxpTurnsLearning}>NeuroLXP turns learning activity into meaningful insights that improve learner engagement, course quality and learning outcomes.</div>



            </div>



          </div>



          <div className={styles.frameParent4}>



            <div className={styles.frameParent5}>



              <div className={styles.rectangleParent}>



                <div className={styles.rectangleDiv} />



                <div className={styles.ellipseDiv} />



                <div className={styles.frameParent6}>



                  <div className={styles.analyticsIconCircle}>



                    <Image className={styles.analyticsCardIcon} src="/icons/chart-up-purple.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                  <div className={styles.monitorLearnerProgress}>Monitor learner progress</div>



                </div>



              </div>



              <div className={styles.rectangleParent}>



                <div className={styles.frameChild2} />



                <div className={styles.ellipseDiv} />



                <div className={styles.frameParent7}>



                  <div className={styles.analyticsIconCircle}>



                    <Image className={styles.analyticsCardIcon} src="/icons/search-02.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                  <div className={styles.spotKnowledgeGaps}>Spot knowledge gaps</div>



                </div>



              </div>



              <div className={styles.rectangleParent}>



                <div className={styles.frameChild5} />



                <div className={styles.ellipseDiv} />



                <div className={styles.frameParent8}>



                  <div className={styles.analyticsIconCircle}>



                    <Image className={styles.analyticsCardIcon} src="/icons/user-group-02green.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                  <div className={styles.trackEngagement}>Track Engagement</div>



                </div>



              </div>



            </div>



            <div className={styles.frameParent9}>



              <div className={styles.rectangleParent}>



                <div className={styles.frameChild8} />



                <div className={styles.ellipseDiv} />



                <div className={styles.frameParent10}>



                  <div className={styles.analyticsIconCircle}>



                    <Image className={styles.analyticsCardIcon} src="/icons/chart-bar-lineblue.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                  <div className={styles.trackEngagement}>Analyse Performance</div>



                </div>



              </div>



              <div className={styles.rectangleParent}>



                <div className={styles.frameChild11} />



                <div className={styles.ellipseDiv} />



                <div className={styles.frameParent11}>



                  <div className={styles.analyticsIconCircle}>



                    <Image className={styles.analyticsCardIcon} src="/icons/graduation-cappink.svg" width={32} height={32} alt="" aria-hidden="true" />



                  </div>



                  <div className={styles.improveCurriculum}>Improve Curriculum</div>



                </div>



              </div>



            </div>



          </div>



        </div>



        <div className={styles.frameParent12}>



          <div className={styles.frameParent13}>



            <div className={styles.frameWrapper}>



              <div className={styles.frameParent14}>



                <div className={styles.frameChild14}>Learning Analytics & Reporting</div>



                <div className={styles.turnLearningDataIntoActionParent}>



                  <h2 className={styles.turnLearningDataContainer}>



                    <span className={styles.turnLearningData}>{`Turn Learning Data into `}</span>



                    <span className={styles.actionableInsights}><span style={{ color: "#31344b", WebkitTextFillColor: "#31344b" }}>Actionable </span><span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Insights</span>



                      <br />



                      <br />



                    </span>



                  </h2>



                  <div className={styles.neurolxpsLearningAnalytics}>



                    NeuroLXP’s Learning Analytics delivers real-time insights into learner engagement, progress, and performance enabling smarter, data driven decisions.



                    <br />



                    <br />



                  </div>



                </div>



              </div>



            </div>



            <BookDemoTrigger className={styles.frameChild15}>



              Book a Demo



            </BookDemoTrigger>



          </div>



          <div className={styles.frameParent15}>



            <div className={styles.frameParent16}>



              <div className={styles.rectangleParent4}>



                <div className={styles.frameChild16} />



                <div className={styles.frameParent17}>



                  <div className={styles.frameWrapper}>



                    <b className={styles.k}>12K+</b>



                  </div>



                  <div className={styles.learnersTrackedWrapper}>



                    <div className={styles.learnersTracked}>Learners Tracked</div>



                  </div>



                </div>



              </div>



              <div className={styles.rectangleParent5}>



                <div className={styles.frameChild16} />



                <div className={styles.frameParent18}>



                  <div className={styles.frameWrapper}>



                    <b className={styles.b}>98%</b>



                  </div>



                  <div className={styles.learnersTrackedWrapper}>



                    <div className={styles.reportsAccuracy}>{`Reports Accuracy `}</div>



                  </div>



                </div>



              </div>



            </div>



            <div className={styles.frameWrapper2}>



              <div className={styles.learningProgramsParent}>



                <b className={styles.learningPrograms}>Learning Programs</b>



                <div className={styles.frameParent19}>



                  <div className={styles.engagementParent}>



                    <div className={styles.engagement}>Engagement</div>



                    <div className={styles.rectangleParent6}>



                      <div className={styles.rectangle} />



                      <div className={styles.image20} />



                      <div className={styles.frameChild18} />



                    </div>



                    <b className={styles.b2}>86%</b>



                  </div>



                  <div className={styles.engagementParent}>



                    <div className={styles.engagement}>Completion</div>



                    <div className={styles.rectangleParent6}>



                      <div className={styles.rectangle} />



                      <div className={styles.image20} />



                      <div className={styles.frameChild19} />



                    </div>



                    <b className={styles.b2}>74%</b>



                  </div>



                  <div className={styles.engagementParent}>



                    <div className={styles.engagement}>Assessment</div>



                    <div className={styles.rectangleParent6}>



                      <div className={styles.rectangle} />



                      <div className={styles.image20} />



                      <div className={styles.frameChild20} />



                    </div>



                    <b className={styles.b2}>91%</b>



                  </div>



                </div>



              </div>



            </div>



          </div>



        </div>



        <div className={styles.analyticsReportingInner}>



          <div className={styles.frameParent20}>



            <div className={styles.frameParent21}>



              <div className={styles.frameParent22}>



                <div className={styles.frameChild21}>Total Learning Visibility</div>



                <h2 className={styles.oneDashboardFull}>



                  One Dashboard! Full <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Visibility!</span>



                  <br />



                </h2>



              </div>



              <div className={styles.getRealTimeInsights}>Get real-time insights across learners, courses, assessments and engagement.</div>



            </div>



            <div className={styles.frameParent23}>



              <div className={styles.frameParent24}>



                <div className={styles.dashboardIconCircle}>



                  <Image className={styles.dashboardListIcon} src="/icons/user-group-02 copyblue.svg" width={32} height={32} alt="" aria-hidden="true" />



                </div>



                <div className={styles.learnerActivity}>Learner Engagement</div>



              </div>



              <div className={styles.frameParent25}>



                <div className={styles.dashboardIconCircle}>



                  <Image className={styles.dashboardListIcon} src="/icons/star.svg" width={32} height={32} alt="" aria-hidden="true" />



                </div>



                <div className={styles.courseCompletion}>Course Completion</div>



              </div>



              <div className={styles.frameParent25}>



                <div className={styles.dashboardIconCircle}>



                  <Image className={styles.dashboardListIcon} src="/icons/zap.svg" width={32} height={32} alt="" aria-hidden="true" />



                </div>



                <div className={styles.timeSpentLearning}>Time Spent Learning</div>



              </div>



              <div className={styles.frameParent25}>



                <div className={styles.dashboardIconCircle}>



                  <Image className={styles.dashboardListIcon} src="/icons/chart-02.svg" width={32} height={32} alt="" aria-hidden="true" />



                </div>



                <div className={styles.assessmentPerformance}>Assessment Performance</div>



              </div>



              <div className={styles.frameParent25}>



                <div className={styles.dashboardIconCircle}>



                  <Image className={styles.dashboardListIcon} src="/icons/message-02.svg" width={32} height={32} alt="" aria-hidden="true" />



                </div>



                <div className={styles.discussionParticipation}>Discussion Participation</div>



              </div>



              <div className={styles.frameParent25}>



                <div className={styles.dashboardIconCircle}>



                  <Image className={styles.dashboardListIcon} src="/icons/award-01-red.svg" width={32} height={32} alt="" aria-hidden="true" />



                </div>



                <div className={styles.gamificationProgress}>Gamification Progress</div>



              </div>



            </div>



          </div>



        </div>



        <div className={styles.frameParent30}>



          <div className={styles.frameParent31}>



            <div className={styles.frameChild28}>Smarter Learning Reports</div>



            <div className={styles.reportsThatDriveBetterDeciParent}>



              <h2 className={styles.reportsThatDrive}>



                Reports That Drive Better <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Decisions</span>



                <br />



                <br />



              </h2>



              <div className={styles.createDetailedCustomizable}>



                Create detailed, customizable reports across your learning ecosystem.



                <br />



                <br />



              </div>



            </div>



          </div>



          <div className={styles.frameParent32}>



            <div className={styles.frameParent33}>



              <div className={styles.frameParent34}>



                <div className={styles.frameParent35}>



                  <div className={styles.frameWrapper3}>



                    <div className={styles.frameWrapper4}>



                      <div className={styles.image20Parent}>



                        <div className={styles.image204} />



                        <div className={styles.learnerPerformance}>Learner Performance</div>



                      </div>



                    </div>



                  </div>



                  <div className={styles.reportIconCircle}>



                    <Image className={styles.reportCardIcon} src="/icons/user-02-blue.svg" width={48} height={48} alt="" aria-hidden="true" />



                  </div>



                </div>



                <div className={styles.frameParent35}>



                  <div className={styles.frameWrapper3}>



                    <div className={styles.frameWrapper4}>



                      <div className={styles.image20Parent}>



                        <div className={styles.image204} />



                        <div className={styles.learnerPerformance}>Course Effectiveness</div>



                      </div>



                    </div>



                  </div>



                  <div className={styles.reportIconCircle}>



                    <Image className={styles.reportCardIcon} src="/icons/book-open-text-purple.svg" width={48} height={48} alt="" aria-hidden="true" />



                  </div>



                </div>



              </div>



              <div className={styles.frameParent34}>



                <div className={styles.frameParent35}>



                  <div className={styles.frameWrapper3}>



                    <div className={styles.frameWrapper4}>



                      <div className={styles.image20Parent}>



                        <div className={styles.image204} />



                        <div className={styles.learnerPerformance}>Assessment Analytics</div>



                      </div>



                    </div>



                  </div>



                  <div className={styles.reportIconCircle}>



                    <Image className={styles.reportCardIcon} src="/icons/chart-up-purple.svg" width={48} height={48} alt="" aria-hidden="true" />



                  </div>



                </div>



                <div className={styles.frameParent35}>



                  <div className={styles.frameWrapper3}>



                    <div className={styles.frameWrapper4}>



                      <div className={styles.image20Parent}>



                        <div className={styles.image204} />



                        <div className={styles.learnerPerformance}>Instructor Activity</div>



                      </div>



                    </div>



                  </div>



                  <div className={styles.reportIconCircle}>



                    <Image className={styles.reportCardIcon} src="/icons/co-present.svg" width={48} height={48} alt="" aria-hidden="true" />



                  </div>



                </div>



              </div>



            </div>



            <div className={styles.frameParent34}>



              <div className={styles.frameParent35}>



                <div className={styles.frameWrapper3}>



                  <div className={styles.frameWrapper4}>



                    <div className={styles.image20Parent}>



                      <div className={styles.image204} />



                      <div className={styles.learnerPerformance}>Department Insight</div>



                    </div>



                  </div>



                </div>



                <div className={styles.reportIconCircle}>



                  <Image className={styles.reportCardIcon} src="/icons/building-green.svg" width={48} height={48} alt="" aria-hidden="true" />



                </div>



              </div>



              <div className={styles.frameParent35}>



                <div className={styles.frameWrapper3}>



                  <div className={styles.frameWrapper4}>



                    <div className={styles.image20Parent}>



                      <div className={styles.image204} />



                      <div className={styles.learnerPerformance}>Programme Performance</div>



                    </div>



                  </div>



                </div>



                <div className={styles.reportIconCircle}>



                  <Image className={styles.reportCardIcon} src="/icons/student-green.svg" width={48} height={48} alt="" aria-hidden="true" />



                </div>



              </div>



            </div>



          </div>



        </div>



        <div className={styles.analyticsReportingChild}>



          <div className={styles.frameWrapper15}>



            <div className={styles.frameParent43}>



              <div className={styles.frameParent44}>



                <div className={styles.frameParent45}>



                  <div className={styles.frameChild35}>Identify Gaps Early</div>



                  <h2 className={styles.identifyLearningGaps}>



                    Identify Learning Gaps!<br />Act <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Early!</span>



                  </h2>



                </div>



                <div className={styles.aiAnalyticsSpot}>AI analytics spot struggling learners early, enabling timely and targeted support.</div>



              </div>



              <Image className={styles.maleCoworkersDoingPaperworkIcon} src="/images/analytics image.webp" width={763} height={421} sizes="(max-width: 768px) 100vw, 763px" alt="Two coworkers reviewing documents" />



            </div>



          </div>



        </div>



        <div className={styles.frameParent46}>
          <div className={styles.betterOutcomesExpertSlot} data-expert-button-slot />



          <div className={styles.frameWrapper16}>



            <div className={styles.turnDataIntoBetterOutcomesParent}>



              <h2 className={styles.turnDataIntoContainer}>



                <span className={styles.turnLearningData}>{`Turn Data into `}</span>



                <span className={styles.actionableInsights}><span style={{ color: "#31344b", WebkitTextFillColor: "#31344b" }}>Better </span><span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Outcomes</span>



                  <br />



                </span>



              </h2>



              <div className={styles.builtForEvery}>Turn learning data into insights that improve courses engagement, completion, and outcomes.</div>



            </div>



          </div>



          <div className={styles.frameParent47}>



            <div className={styles.frameParent48}>



              <div className={styles.rectangleParent9}>



                <div className={styles.frameChild36} />



                <div className={styles.frameChild37} />



                <div className={styles.checkmarkSquare04Parent}>



                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04.svg" width={48} height={48} alt="" aria-hidden="true" />



                  <div className={styles.improveCourseAnd}>Improve Course and Curriculum Quality</div>



                </div>



              </div>



              <div className={styles.rectangleParent9}>



                <div className={styles.frameChild36} />



                <div className={styles.frameChild39} />



                <div className={styles.checkmarkSquare04Parent}>



                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04-1.svg" width={48} height={48} alt="" aria-hidden="true" />



                  <div className={styles.strengthenTeachingStrategies}>Strengthen Teaching Strategies and Practices</div>



                </div>



              </div>



              <div className={styles.rectangleParent9}>



                <div className={styles.frameChild36} />



                <div className={styles.frameChild39} />



                <div className={styles.checkmarkSquare04Parent}>



                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04-2.svg" width={48} height={48} alt="" aria-hidden="true" />



                  <div className={styles.increaseOverallLearner}>Increase Overall Learner Engagement</div>



                </div>



              </div>



            </div>



            <div className={styles.frameParent48}>



              <div className={styles.rectangleParent9}>



                <div className={styles.frameChild36} />



                <div className={styles.frameChild39} />



                <div className={styles.checkmarkSquare04Parent}>



                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04-3.svg" width={48} height={48} alt="" aria-hidden="true" />



                  <div className={styles.boostCourseCompletion}>Boost Course Completion Rates</div>



                </div>



              </div>



              <div className={styles.rectangleParent9}>



                <div className={styles.frameChild36} />



                <div className={styles.frameChild39} />



                <div className={styles.checkmarkSquare04Parent}>



                  <Image className={styles.checkmarkSquare04Icon} src="/icons/checkmark-square-04-4.svg" width={48} height={48} alt="" aria-hidden="true" />



                  <div className={styles.strengthenTeachingStrategies}>Improve Academic and Training Outcomes</div>



                </div>



              </div>



            </div>



          </div>



        </div>



        <div className={styles.frameParent50}>



          <div className={styles.transformLearningDataIntoMParent}>



            <h2 className={styles.turnDataIntoContainer}>



              Analytics That Scales With <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>You</span>



              <br />



            </h2>



            <div className={styles.builtForEvery}>Built for every learning environment from universities and schools to corporate training and EdTech platforms.</div>



          </div>



          <div className={styles.frameParent51}>



            <div className={styles.frameParent52}>



              <div className={styles.frameChild46} />



              <div className={styles.universitiesWrapper}>



                <b className={styles.universities}>Universities</b>



              </div>



            </div>



            <div className={styles.frameParent53}>



              <div className={styles.frameChild47} />



              <div className={styles.schoolsWrapper}>



                <b className={styles.universities}>Schools</b>



              </div>



            </div>



            <div className={styles.frameParent53}>



              <div className={styles.frameChild47} />



              <div className={styles.corporateTrainingWrapper}>



                <b className={styles.corporateTraining}>Corporate Training</b>



              </div>



            </div>



            <div className={styles.frameParent53}>



              <div className={styles.frameChild47} />



              <div className={styles.edtechProvidersWrapper}>



                <b className={styles.edtechProviders}>EdTech Providers</b>



              </div>



            </div>



          </div>



        </div>



        <div className={styles.ellipseParent}>



          <svg



            className={styles.ellipseIcon}



            width="1334"



            height="586"



            viewBox="0 0 1334 586"



            fill="none"



            xmlns="http://www.w3.org/2000/svg"



            xmlnsXlink="http://www.w3.org/1999/xlink"



            aria-hidden="true"



          >



            <g filter="url(#filter0_dd_4978_2)">



              <ellipse cx="667" cy="293" rx="643" ry="269" fill="#DFE6E9" />



              <ellipse



                cx="667"



                cy="293"



                rx="643"



                ry="269"



                fill="url(#pattern0_4978_2)"



                fillOpacity="0.05"



              />



            </g>



            <defs>



              <filter



                id="filter0_dd_4978_2"



                x="0"



                y="0"



                width="1334"



                height="586"



                filterUnits="userSpaceOnUse"



                colorInterpolationFilters="sRGB"



              >



                <feFlood floodOpacity="0" result="BackgroundImageFix" />



                <feColorMatrix



                  in="SourceAlpha"



                  type="matrix"



                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"



                  result="hardAlpha"



                />



                <feOffset dx="8" dy="8" />



                <feGaussianBlur stdDeviation="8" />



                <feComposite in2="hardAlpha" operator="out" />



                <feColorMatrix



                  type="matrix"



                  values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"



                />



                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4978_2" />



                <feColorMatrix



                  in="SourceAlpha"



                  type="matrix"



                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"



                  result="hardAlpha"



                />



                <feOffset dx="-8" dy="-8" />



                <feGaussianBlur stdDeviation="8" />



                <feComposite in2="hardAlpha" operator="out" />



                <feColorMatrix



                  type="matrix"



                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"



                />



                <feBlend mode="normal" in2="effect1_dropShadow_4978_2" result="effect2_dropShadow_4978_2" />



                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_4978_2" result="shape" />



              </filter>







              <pattern



                id="pattern0_4978_2"



                patternContentUnits="objectBoundingBox"



                width="0.0186625"



                height="0.0892193"



              >



                <use



                  xlinkHref="#image0_4978_2"



                  transform="scale(0.000777605 0.00185874)"



                />



              </pattern>







              <image



                id="image0_4978_2"



                width="24"



                height="48"



                preserveAspectRatio="none"



                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAALiLqjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAARBJREFUeAHtlrENwjAQRf9FHiAjMAJswAgwAiNQUoAVKBAVI7ACI7ABjMAItEQmR4wESpASLj5RRPJvouis/2zFd/mELy1XG66+b9ZLgkIJ/qwIiAC9DBSydjso4A7EGJbNk4JwTODmWZZd32uCT+DNmd0ZjPHL3IsxKdicrbUDNaDc+f5jXFf6KMxBDfC7bSoRYagGlAPq1lJO1QAmXJqLOKoBOcys4RS3PHFzNWCXLa53MiN/Nd/GzDjl5Ea7yjVV9YGHlI9p25o4iyKgBwBV5vH6laPiN4iAHgBq/wNJzumqpGouyTnBAGnOCQZIc04wQJpzggHSnBMMkOacYIA053RVrQ8kOaer4iyKgB4AnrPke6dH3TzTAAAAAElFTkSuQmCC"



              />



            </defs>



          </svg>



          <div className={styles.frameParent56}>



            <div className={styles.frameChild50}>Get Started</div>



            <div className={styles.frameParent13}>



              <div className={styles.frameParent58}>



                <div className={styles.frameWrapper17}>



                  <div className={styles.makeEveryLearningDecisionSParent}>



                    <h2 className={styles.makeEveryLearning}>Make Every Learning Decision <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Smarter</span></h2>



                    <div className={styles.goBeyondBasic}>Go beyond basic LMS reports with intelligent analytics, real time dashboards, and actionable insights.</div>



                  </div>



                </div>



                <div className={styles.frameWrapper18}>



                  <div className={styles.frameWrapper19}>



                    <div className={styles.smarterAnalyticsBetterLearWrapper}>



                      <b className={styles.smarterAnalyticsBetterContainer}>



                        <span className={styles.span}>{` `}</span>



                        <span className={styles.smarterAnalyticsBetter}>Smarter Analytics! Better Learning Outcomes!</span>



                      </b>



                    </div>



                  </div>



                </div>



              </div>



              <div className={styles.frameWrapper20}>



                <BookDemoTrigger className={styles.frameChild51}>



                  Book a Demo



                </BookDemoTrigger>



              </div>



            </div>



          </div>



        </div>



      </main>



      <Footer />



    </>



  );



};







export default AnalyticsReporting;