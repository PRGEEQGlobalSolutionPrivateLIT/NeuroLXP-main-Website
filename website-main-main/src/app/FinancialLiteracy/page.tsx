'use client';



import { useLayoutEffect, useRef, type ReactNode } from 'react';



import Image from "next/image";



import styles from "./FinancialLitracy.module.css";



import Header from "../../components/Header/header";



import Footer from "../../components/Footer/footer";



import TalkToExpertButton from "@/components/TalkToOurExpert/TalkToExpertButton";



const ARTBOARD_WIDTH = 1440;



const ARTBOARD_HEIGHT = 4280;



const DESKTOP_MIN = 768;



function PageScaler({ children }: { children: ReactNode }) {



  const shellRef = useRef<HTMLDivElement>(null);



  const boardRef = useRef<HTMLDivElement>(null);



  useLayoutEffect(() => {



    const shell = shellRef.current;



    const board = boardRef.current;



    if (!shell || !board) return;



    const applyScale = () => {



      const vw = document.documentElement.clientWidth || window.innerWidth;



      if (vw < DESKTOP_MIN) {



        board.style.width = "";



        board.style.transform = "";



        board.style.transformOrigin = "";



        shell.style.height = "";



        shell.style.justifyContent = "";



        shell.dataset.mode = "fluid";



        return;



      }



      shell.dataset.mode = "artboard";



      const scale = Math.min(1, vw / ARTBOARD_WIDTH);



      board.style.width = `${ARTBOARD_WIDTH}px`;



      board.style.transform = `scale(${scale})`;



      board.style.transformOrigin = "top left";



      shell.style.height = `${ARTBOARD_HEIGHT * scale}px`;



      shell.style.justifyContent = scale < 1 ? "flex-start" : "center";



    };



    applyScale();



    window.addEventListener("resize", applyScale);



    window.addEventListener("orientationchange", applyScale);



    return () => {



      window.removeEventListener("resize", applyScale);



      window.removeEventListener("orientationchange", applyScale);



    };



  }, []);



  return (



    <div className={styles.pageScale} ref={shellRef}>



      <div className={styles.finatialLiteracy} ref={boardRef}>



        {children}



      </div>



    </div>



  );



}



function SectionBadge({ label, className }: { label: string; className?: string }) {



  return <div className={`${styles.sectionBadge} ${className ?? ""}`.trim()}>{label}</div>;



}



function TickRow({ label, color, tick, stretch = false }: { label: string; color: string; tick: string; stretch?: boolean }) {



  return (



    <div className={stretch ? styles.frameParent21 : styles.frameParent19}>



      <div className={styles.tickWrap} style={{ ["--tick-color" as string]: color }}>



        <span className={styles.tickBg} aria-hidden />



        <Image className={styles.tick03Icon} src={tick} width={24} height={24} alt="" />



      </div>



      <div className={stretch ? styles.assessRisksBefore : styles.understandCreditLoans}>{label}</div>



    </div>



  );



}



function HabitCard({ label, wide = false }: { label: string; wide?: boolean }) {



  return (



    <div className={styles.image20Parent}>



      <div className={wide ? styles.image21Container : styles.image21Parent}>



        <div className={wide ? styles.checkmarkBadge03Container : styles.checkmarkBadge03Parent}>



          <Image className={wide ? styles.checkmarkBadge03Icon3 : styles.checkmarkBadge03Icon} src="/icons/checkmark-badge.svg" width={38} height={38} alt="" />



          <div className={wide ? styles.smartFinancialPlan : styles.saveConsistently}>{label}</div>



        </div>



      </div>



    </div>



  );



}



function StageIcon({ src, tone }: { src: string; tone: "pink" | "blue" | "purple" | "teal" }) {



  const toneClass = {



    pink: styles.stageIconInnerPink,



    blue: styles.stageIconInnerBlue,



    purple: styles.stageIconInnerPurple,



    teal: styles.stageIconInnerTeal,



  }[tone];



  return (



    <div className={styles.stageIcon}>



      <div className={`${styles.stageIconInner} ${toneClass}`}>



        <Image className={styles.stageGlyph} src={src} width={38} height={38} alt="" />



      </div>



    </div>



  );



}



export default function FinancialLiteracyPage() {



  return (



    <>



      <style jsx>{`



        @media (max-width: 767.98px) {



          .mobileWellBeing {



            display: block;



            white-space: nowrap;



          }



        }



      `}</style>



      <Header />



      <PageScaler>



      <div className={styles.wrapperEllipse359} aria-hidden="true" />



      <div className={styles.frameDiv}>



        <div className={styles.neurolxp21Wrapper}>



          <div className={styles.financialLiteracy}>NeuroLXP 2.1</div>



        </div>



        <div className={styles.arrowRightDoubleParent}>



          <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={16} height={16} alt="" />



          <b className={styles.financialLiteracy}>Financial Literacy</b>



        </div>



      </div>



      <div className={styles.frameParent2}>



        <div className={styles.frameParent3}>



          <div className={styles.frameParent4}>



            <SectionBadge label="Financial Literacy" className={styles.frameItem} />



            <b className={styles.empoweringSmarterMoneyContainer}>



              <span className={styles.empoweringSmarter}>Empowering Smarter </span>



              <span className={styles.money}>Money</span>



              <span className={styles.empoweringSmarter}> Decisions</span>



            </b>



          </div>



          <div className={styles.buildConfidenceToContainer}>



            <span className={styles.buildConfidenceTo}>Build confidence to budget, save, invest and make smarter financial decisions.</span>



            <b className={styles.buildConfidenceTo}>NeuroLXP delivers engaging financial literacy.</b>



          </div>



        </div>



        <div className={styles.heroOuterCircle}>



          <div className={styles.heroInnerCircle}>



            <Image className={styles.ellipseIcon} src="/images/rich-smiling-man-suit-showing-money-plastic-credit-card-standing-with-dollar-bills-look-p.png" width={560} height={560} sizes="560px" alt="Confident professional" priority />



          </div>



        </div>



      </div>



      <div className={styles.frameParent5}>



        <div className={styles.frameParent6}>



          <SectionBadge label="Financial Foundations" className={styles.frameIcon} />



          <div className={styles.buildTheConfidenceToManageParent}>



            <b className={styles.buildTheConfidenceContainer}>



              <span className={styles.empoweringSmarter}>



                <span className={styles.build}>Build </span>



                <span className={styles.the}>the</span>



                <span className={styles.build}> confidence </span>



                <span className={styles.the}>to</span>



                <span className={styles.build}> manage </span>



              </span>



              <span className={styles.build}>



                <span className={styles.money}>Money</span>



                <span className={styles.empoweringSmarter}> wisely</span>



              </span>



            </b>



            <div className={styles.developPracticalFinancial}>Develop practical financial skills for everyday decisions and long-term success.</div>



          </div>



        </div>



        <div className={styles.frameParent7}>



          <div className={styles.frameParent8}>



            <div className={styles.frameParent9}>



              <div className={styles.wrapper}>



                <b className={styles.b}>01</b>



              </div>



              <div className={styles.rectangleIcon} aria-hidden="true" />



              <div className={styles.smartBudgetingParent}>



                <b className={styles.smartBudgeting}>Smart Budgeting</b>



                <div className={styles.planIncomeAnd}>Plan income and expenses</div>



              </div>



            </div>



            <div className={styles.frameParent9}>



              <div className={styles.container}>



                <b className={styles.b}>03</b>



              </div>



              <div className={styles.rectangleIconAlt} aria-hidden="true" />



              <div className={styles.creditManagementParent}>



                <b className={styles.smartBudgeting}>Credit Management</b>



                <div className={styles.borrowResponsibly}>Borrow responsibly</div>



              </div>



            </div>



          </div>



          <div className={styles.frameParent11}>



            <div className={styles.frameParent9}>



              <div className={styles.frame}>



                <b className={styles.b}>02</b>



              </div>



              <div className={styles.rectangleIcon} aria-hidden="true" />



              <div className={styles.savingEssentialsParent}>



                <b className={styles.smartBudgeting}>Saving Essentials</b>



                <div className={styles.growSavingsAnd}>Grow savings and investments</div>



              </div>



            </div>



            <div className={styles.frameParent9}>



              <div className={styles.wrapper2}>



                <b className={styles.b4}>04</b>



              </div>



              <div className={styles.rectangleIcon} aria-hidden="true" />



              <div className={styles.smartBudgetingParent}>



                <b className={styles.smartBudgeting}>Future Planning</b>



                <div className={styles.achieveFinancialGoals}>Achieve financial goals</div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.frameParent14}>



        <div className={styles.frameParent15}>



          <div className={styles.frameParent16}>



            <div className={styles.frameParent17}>



              <SectionBadge label="Smart Decisions" className={styles.frameChild5} />



              <b className={styles.makeConfidentFinancialContainer}>



                <span className={styles.makeConfidentFinancialContainer2}>



                  <span className={styles.empoweringSmarter}>Make confident </span>



                  <span className={styles.money}>financial</span>



                  <span className={styles.empoweringSmarter}> choices every day</span>



                </span>



              </b>



            </div>



            <div className={styles.buildTheSkills}>Build the skills to compare options, manage risks, and make informed money decisions.</div>



          </div>



          <div className={styles.frameParent18}>



            <TickRow label="Understand credit, loans, and interest" color="#67096E" tick="/icons/tick-03-3.svg" />



            <TickRow label="Compare financial products" color="#2A7308" tick="/icons/tick-03-2.svg" />



            <TickRow label="Assess risks before making decisions" color="#0B9BA0" tick="/icons/tick-03.svg" stretch />



            <TickRow label="Spend wisely, save for tomorrow" color="#861109" tick="/icons/tick.svg" stretch />



          </div>



        </div>



        <div className={styles.ellipseParent}>



          <div className={styles.frameChild10} aria-hidden />



          <div className={styles.ellipseDiv} aria-hidden />



          <div className={styles.theseSkillsBuildConfidenceParent}>



            <b className={styles.theseSkillsBuildContainer}>



              <span className={styles.empoweringSmarter}>These Skills Build Confidence for a Stronger </span>



              <span className={styles.money}>Financial Future</span>



            </b>



          </div>



        </div>



      </div>



      <div className={styles.frameParent23}>

      <div

        id="financial-literacy-talk-to-expert-button-slot"

        data-expert-button-slot

        className={styles.sectionExpertSlot}

      />





        <div className={styles.buildTheConfidenceToManageParent}>



          <SectionBadge label="Smart Finance" className={styles.frameChild11} />



          <div className={styles.buildResponsibleFinancialHaParent}>



<b className={styles.buildResponsibleFinancial}>
  Build Responsible Financial{" "}
  <span style={{ color: "#2D4CC8" }}>Habits</span>
</b>


            <div className={styles.buildTheSkills}>Financial literacy help learners build responsible money habits for long term financial well being Learn to :</div>



          </div>



        </div>



        <div className={styles.frameParent25}>



          <div className={styles.frameParent26}>



            <HabitCard label="Save Consistently" />



            <HabitCard label="Borrow Wisely" />



          </div>



          <div className={styles.frameParent27}>



            <HabitCard label="Smart Financial Plan" />



            <HabitCard label="Spend Wisely" />



          </div>



        </div>



      </div>



      <div className={styles.frameParent28}>



        <SectionBadge label="Who We Support" className={styles.frameChild12} />



        <div className={styles.frameParent29}>



          <div className={styles.frameParent16}>



            <div className={styles.financialLiteracyForEverySWrapper}>



              <b className={styles.financialLiteracyForContainer}>



                <span className={styles.makeConfidentFinancialContainer2}>



                  <span className={styles.empoweringSmarter}>Financial Literacy</span>



                  <span className={styles.forEveryStage}> for Every Stage of Life</span>



                </span>



              </b>



            </div>



            <div className={styles.buildTheSkills}>Empowering individuals with practical money skills at every stage of life.</div>



          </div>



          <div className={styles.frameParent31}>



            <div className={styles.frameParent32}>



              <StageIcon src="/icons/school.svg" tone="pink" />



              <div className={styles.frameWrapper}>



                <div className={styles.schoolsParent}>



                  <b className={styles.schools}>Schools</b>



                  <div className={styles.buildMoneyHabits}>Build Money Habits</div>



                </div>



              </div>



            </div>



            <div className={styles.frameParent32}>



              <div className={styles.frameWrapper}>



                <div className={styles.universitiesParent}>



                  <b className={styles.universities}>Universities</b>



                  <div className={styles.buildMoneyHabits}>Financial Readiness</div>



                </div>



              </div>



              <StageIcon src="/icons/graduation-cap.svg" tone="blue" />



            </div>



            <div className={styles.frameParent32}>



              <StageIcon src="/icons/briefcase.svg" tone="purple" />



              <div className={styles.frameWrapper}>



                <div className={styles.workforceParent}>



                  <b className={styles.workforce}>Workforce</b>



                  <div className={styles.buildMoneyHabits}>Workplace Wellness</div>



                </div>



              </div>



            </div>



            <div className={styles.frameParent32}>



              <div className={styles.frameWrapper}>



                <div className={styles.universitiesParent}>



                  <b className={styles.communities}>Communities</b>



                  <div className={styles.buildMoneyHabits}>Financial Inclusion</div>



                </div>



              </div>



              <StageIcon src="/icons/global.svg" tone="teal" />



            </div>



          </div>



        </div>



      </div>



      <div className={styles.image20Parent3}>



        <div className={styles.image20} />



        <svg className={styles.ctaBorderFrame} viewBox="0 0 1232 361" preserveAspectRatio="none" fill="none" aria-hidden="true">



          <defs>



            <linearGradient id="ctaBorderGradient" x1="616" y1="0" x2="616" y2="361" gradientUnits="userSpaceOnUse">



              <stop offset="0%" stopColor="#BF1869" />



              <stop offset="50%" stopColor="#2D4CC8" />



              <stop offset="100%" stopColor="#046F73" />



            </linearGradient>



          </defs>



          <path className={styles.ctaBorderPath} d="M9.25 1.25H1031.75A200 200 0 0 1 1230.75 201.25V352.75A8 8 0 0 1 1222.75 359.75H200.25A200 200 0 0 1 1.25 159.75V9.25A8 8 0 0 1 9.25 1.25Z" stroke="url(#ctaBorderGradient)" strokeWidth="2.5" strokeDasharray="8 8" vectorEffect="non-scaling-stroke" />



        </svg>



        <svg className={styles.ctaBorderFrameMobile} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true">



          <defs>



            <linearGradient id="ctaBorderGradientMobile" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">



              <stop offset="0%" stopColor="#BF1869" />



              <stop offset="50%" stopColor="#2D4CC8" />



              <stop offset="100%" stopColor="#046F73" />



            </linearGradient>



          </defs>



          <path className={styles.ctaBorderPath} d="M5 2.5H78A19.5 19.5 0 0 1 97.5 22V95A2.5 2.5 0 0 1 95 97.5H22A19.5 19.5 0 0 1 2.5 78V5A2.5 2.5 0 0 1 5 2.5Z" stroke="url(#ctaBorderGradientMobile)" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />



        </svg>



        <div className={styles.frameParent36}>



<div className={`${styles.sectionBadge} ${styles.frameChild18}`}>
  <span className={styles.neurolxpLabelText}>
    NeuroLXP<sup>™</sup>
  </span>
</div>


          <div className={styles.financialConfidenceStartsHeParent}>



            <b className={styles.financialConfidenceStarts}>Financial Confidence Starts Here</b>



            <div className={styles.neurolxpEmpowersLearners}>NeuroLXP empower learners with practical financial skills for smarter decisions and lasting financial{" "}<span className="mobileWellBeing">well-being.</span></div>



          </div>



        </div>



      </div>



      </PageScaler>



      <TalkToExpertButton />



      <Footer />



    </>



  );



}
