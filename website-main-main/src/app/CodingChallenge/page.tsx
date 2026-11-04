import type { Metadata } from "next";



import type { CSSProperties } from "react";



import Image from "next/image";



import Header from "../../components/Header/header";



import Footer from "../../components/Footer/footer";



import styles from "./codingchallenge.module.css";



import InterviewSection from "./InterviewSection";



import PageScaler from "./PageScaler";



import TalkToExpertButton from "@/components/TalkToOurExpert/TalkToExpertButton";



export const metadata: Metadata = {



  title: "Coding Challenges | Neuro Labs",



  description:



    "Solve real-world coding challenges and build coding confidence with NeuroLabs.",



};



function SectionBadge({



  label,



  className,



}: {



  label: string;



  className?: string;



}) {



  return (



    <div



      className={`${styles.sectionBadge} ${className ?? ""}`.trim()}



    >



      {label}



    </div>



  );



}



const SKILL_DOTS = {



  topLeft: "#BF1869",



  topRight: "#67096E",



  bottomLeft: "#2D4CC8",



  bottomRight: "#C05512",



} as const;



function SkillCard({



  line1,



  line2,



  corner,



}: {



  line1: string;



  line2: string;



  corner: keyof typeof SKILL_DOTS;



}) {



  return (



    <div



      className={`${styles.skillCard} ${styles[`skillCard-${corner}`]}`}



      style={



        {



          "--skill-accent": SKILL_DOTS[corner],



        } as CSSProperties



      }



    >



      <div



        className={styles.skillCardDot}



        style={{ backgroundColor: SKILL_DOTS[corner] }}



        aria-hidden="true"



      />



      <p className={styles.skillCardLabel}>



        {line1 === "Programming Contest" ? (

          <>

            <span style={{ display: "block", whiteSpace: "nowrap" }}>{line1}</span>

            <span style={{ display: "block", whiteSpace: "nowrap" }}>{line2.trim()}</span>

          </>

        ) : (

          <>

            {line1}

            <br />

            {line2}

          </>

        )}



      </p>



    </div>



  );



}



function PillCard({



  label,



  accent,



}: {



  label: string;



  accent: string;



}) {



  return (



    <div



      className={styles.pillCard}



      style={{ "--pill-accent": accent } as CSSProperties}



    >



      <span className={styles.pillCardLabel}>{label}</span>



    </div>



  );



}



function AudienceCard({



  label,



  color,



}: {



  label: string;



  color: string;



}) {



  return (



    <div



      className={styles.audienceCard}



      style={{ "--audience-color": color } as CSSProperties}



    >



      <div className={styles.audienceCardParent}>



        <div



          className={styles.audienceCardWrapper}



          aria-hidden="true"



        />



        <span className={styles.audienceCardLabel}>{label}</span>



      </div>



    </div>



  );



}



export default function CodingChallengePage() {



  return (



    <>



      {/* HEADER */}



      { <Header /> }



      <PageScaler>



        <div className={styles.frameDiv}>



          <div className={styles.neuroLabsWrapper}>



            <b className={styles.codingChallenges}>Neuro Labs</b>



          </div>



          <div className={styles.arrowRightDoubleParent}>



            <Image



              className={styles.arrowDown01Icon}



              src="/icons/arrow-right-double.svg"



              width={16}



              height={16}



              alt=""



            />



            <b className={styles.codingChallenges}>



              Coding Challenges



            </b>



          </div>



        </div>



        {/* HERO SECTION */}



        <div className={styles.frameParent2}>



          <div className={styles.frameWrapper}>



            <div className={styles.frameWrapper}>



              <div className={styles.frameWrapper3}>



                <div className={styles.image20Parent}>



                  <Image



                    className={styles.image20}



                    src="/images/codingbackground.webp"



                    width={1280}



                    height={800}



                    sizes="1280px"



                    alt=""



                    aria-hidden="true"



                  />



                  <div className={styles.image21} />



                  <div className={styles.frameParent3}>



                    <div className={styles.frameParent4}>



                      <SectionBadge



                        label="Coding Challenges"



                        className={styles.frameItem}



                      />



                      <b className={styles.testImproveContainer}>



                        <span className={styles.testImprove}>



                          Test! Improve & Showcase Your{" "}



                        </span>



                        <span className={styles.codingSkills}>



                          Coding Skills



                        </span>



                      </b>



                    </div>



                    <div



                      className={



                        styles.solveRealWorldChallenges



                      }



                    >



                      Solve <span style={{ whiteSpace: "nowrap" }}>real-world</span> challenges and build coding



                      confidence.



                    </div>



                  </div>



                </div>



              </div>



            </div>



          </div>



        <Image
  className={styles.businessStyleYoungBeautifulIcon}
  src="/images/close-up-two-dads-looking-baby-ultrasounds 1.png"
  width={702}
  height={505}
  sizes="(max-width: 767px) 100vw, 600px"
  alt="Colleagues working together on a laptop"
  priority
/>



          <div className={styles.frameWrapper4}>



            <div className={styles.heroTechStripTrack}>



              <div className={styles.heroTechStrip}>



                <div



                  className={`${styles.heroStripSeg} ${styles.heroStripPractice}`}



                >



                  <Image



                    className={styles.heroStripShape}



                    src="/icons/rect-3.svg"



                    width={225}



                    height={98}



                    alt=""



                  />



                  <div className={styles.heroStripContent}>



                    <Image



                      className={styles.heroStripIcon}



                      src="/icons/code-xml-1.svg"



                      width={45}



                      height={43}



                      alt=""



                    />



                    <span className={styles.heroStripLabel}>



                      <b>Practice Coding</b>



                    </span>



                  </div>



                </div>



                <div



                  className={`${styles.heroStripSeg} ${styles.heroStripThink}`}



                >



                  <Image



                    className={styles.heroStripShape}



                    src="/icons/rect-3-1.svg"



                    width={253}



                    height={98}



                    alt=""



                  />



                  <div className={styles.heroStripContent}>



                    <Image



                      className={styles.heroStripIcon}



                      src="/icons/ai-brain-01-1.svg"



                      width={36}



                      height={36}



                      alt=""



                    />



                    <span className={styles.heroStripLabel}>



                      <b>Think Logically</b>



                    </span>



                  </div>



                </div>



                <div



                  className={`${styles.heroStripSeg} ${styles.heroStripShowcase}`}



                >



                  <Image



                    className={styles.heroStripShape}



                    src="/icons/rect-4.svg"



                    width={253}



                    height={98}



                    alt=""



                  />



                  <div className={styles.heroStripContent}>



                    <Image



                      className={styles.heroStripIcon}



                      src="/icons/champion.svg"



                      width={41}



                      height={43}



                      alt=""



                    />



                    <span className={styles.heroStripLabel}>



                      <b>Showcase Skills</b>



                    </span>



                  </div>



                </div>



              </div>



            </div>



          </div>



        </div>



        {/* PRACTICAL SKILLS */}



        <div className={styles.frameParent5}>




          <div className={styles.frameParent6}>



            <SectionBadge



              label="Practical Skills"



              className={styles.frameIcon}



            />



            <div



              className={



                styles.realWorldProblemSolvingParent



              }



            >



              <b className={styles.realWorldProblemSolving}>



                <span style={{ whiteSpace: "nowrap" }}>Real-World</span> Problem <span style={{ color: "#2d4cc8" }}>Solving</span>



                <br />



              </b>



              <div



                className={



                  styles.codingChallengesSimulate



                }



              >



                Coding challenges simulate <span style={{ whiteSpace: "nowrap" }}>real-world</span> development,



                helping learners apply programming concepts to



                build practical solutions.



              </div>



            </div>



          </div>



          <div className={styles.frameParent7}>



            {/* CARD 1 */}



            <div className={styles.frameWrapper5}>



              <div className={styles.rectangleParent}>



                <div className={styles.rectangleDiv} />



                <div className={styles.frameChild2}>



                  <div className={styles.ellipseParent}>



                    <div className={styles.ellipseDiv} />



                    <Image



                      className={styles.puzzleIcon}



                      src="/icons/puzzle.svg"



                      width={36}



                      height={36}



                      alt=""



                    />



                    <div



                      className={styles.solveCodingProblems}



                    >



                      Solve Coding Problems



                      <br />



                    </div>



                  </div>



                </div>



              </div>



            </div>



            {/* CARD 2 */}



            <div className={styles.frameWrapper5}>



              <div className={styles.rectangleParent}>



                <div className={styles.rectangleDiv} />



                <div className={styles.frameChild2}>



                  <div className={styles.frameWrapper9}>



                    <div className={styles.ellipseGroup}>



                      <div className={styles.frameChild4} />



                      <Image



                        className={styles.search02Icon}



                        src="/icons/search-02white.svg"



                        width={36}



                        height={36}



                        alt=""



                      />



                      <div



                        className={



                          styles.buildOptimizedSolutions



                        }



                      >



                        Build Optimized Solutions



                        <br />



                      </div>



                    </div>



                  </div>



                </div>



              </div>



            </div>



            {/* CARD 3 */}



            <div className={styles.frameWrapper5}>



              <div className={styles.rectangleParent}>



                <div className={styles.rectangleDiv} />



                <div className={styles.frameChild2}>



                  <div className={styles.ellipseContainer}>



                    <div className={styles.frameChild6} />



                    <Image



                      className={styles.aiBrain01Icon}



                      src="/icons/ai-brain-01.svg"



                      width={36}



                      height={36}



                      alt=""



                    />



                    <div



                      className={



                        styles.improveLogicalThinking



                      }



                    >



                      Improve Logical Thinking



                    </div>



                  </div>



                </div>



              </div>



            </div>



            {/* CARD 4 */}



            <div className={styles.frameWrapper5}>



              <div className={styles.rectangleParent}>



                <div className={styles.rectangleDiv} />



                <div className={styles.frameChild2}>



                  <div className={styles.ellipseParent2}>



                    <div className={styles.frameChild8} />



                    <Image



                      className={styles.codeXmlIcon}



                      src="/icons/code-xml.svg"



                      width={36}



                      height={36}



                      alt=""



                    />



                    <div



                      className={



                        styles.buildOptimizedSolutions



                      }



                    >



                      Strengthen Coding Concepts



                      <br />



                    </div>



                  </div>



                </div>



              </div>



            </div>



          </div>



        </div>



        {/* LEARN COMPETE GROW */}



        <div className={styles.frameParent8}>



          <div className={styles.frameParent9}>



            <div className={styles.frameParent10}>



              <SectionBadge



                label="Interactive Learning"



                className={styles.frameChild9}



              />



              <b className={styles.learnCompeteGrow}>



                Learn! Compete! <span style={{ color: "#2d4cc8" }}>Grow!</span>



                <br />



              </b>



            </div>



            <div className={styles.learnCompeteAnd}>



              Learn, compete, and grow through coding challenges.



            </div>



          </div>



          <div className={styles.frameParent11}>



            <div className={styles.frameParent12}>



              <SkillCard



                line1="Time-Based Coding"



                line2="Problems"



                corner="topLeft"



              />



              <SkillCard



                line1="Algorithm and Logic"



                line2="Puzzles"



                corner="topRight"



              />



            </div>



            <div className={styles.frameParent12}>



              <SkillCard



                line1="Programming Contest"



                line2=" Competitions"



                corner="bottomLeft"



              />



              <SkillCard



                line1="Skill-Based Coding"



                line2="Assessments"



                corner="bottomRight"



              />



            </div>



          </div>



        </div>



        {/* THINK SOLVE */}



        <b className={styles.thinkSolveAndContainer}>



          <span className={styles.thinkSolveAndContainer2}>



            <span



              className={



                styles.thinkSolveAndPerformLike



              }



            >



              <span className={styles.thinkSolve}>



                Think! solve!{" "}



              </span>



              <span className={styles.a}>a</span>



              <span className={styles.thinkSolve}>



                nd perform like{" "}



              </span>



              <span className={styles.a}>a</span>



              <span className={styles.span}> </span>



            </span>



            <span className={styles.span}>



              <span



                className={



                  styles.thinkSolveAndPerformLike



                }



              >



                Developer



              </span>



            </span>



          </span>



        </b>



        {/* IMPROVE EFFICIENCY */}



        <div className={styles.frameParent14}>



          <div className={styles.image20Group}>



            <div className={styles.frameWrapper14}>



              <div className={styles.frameParent15}>



                <SectionBadge



                  label="Coding Excellence"



                  className={styles.frameChild14}



                />



                <div



                  className={



                    styles.improveCodingEfficiencyAcParent



                  }



                >



                  <b



                    className={



                      styles.improveCodingEfficiency



                    }



                  >



                    Improve Coding Efficiency & <span style={{ color: "#2d4cc8" }}>Accuracy</span>



                  </b>



                  <div



                    className={styles.buildBetterCoding}



                  >



                    Build better coding habits through regular



                    practice and <span style={{ whiteSpace: "nowrap" }}>real-world</span> challenges.



                  </div>



                </div>



              </div>



            </div>



          </div>



          <div className={styles.frameParent16}>



            <PillCard



              label="Clean Code"



              accent="#BF1869"



            />



            <PillCard



              label="Smart Debugging"



              accent="#2A7308"



            />



            <PillCard



              label="Optimize Algorithms"



              accent="#C05512"



            />



            <PillCard



              label="Scalable Solutions"



              accent="#2D4CC8"



            />



          </div>



        </div>



        {/* INTERVIEWS */}



        <div className={styles.frameParent19}>



          <InterviewSection />



        </div>



        {/* AUDIENCE */}



        <div className={styles.frameParent22}>



          <div className={styles.audienceHeader}>



            <SectionBadge



              label="Flexible Learning"



              className={styles.frameChild20}



            />



            <div



              className={



                styles.builtForEveryLearningJournParent



              }



            >



              <b className={styles.builtForEveryContainer}>



                <span className={styles.builtForEvery}>



                  Built for Every{" "}



                </span>



                <span className={styles.learning}>



                  Learning



                </span>



                <span className={styles.builtForEvery}>



                  {" "}



                  Journey



                </span>



              </b>



              <div



                className={



                  styles.neurolabsCodingChallenges



                }



              >



                NeuroLabs coding challenges are suitable for:



              </div>



            </div>



          </div>



          <div className={styles.audienceGrid}>



            <AudienceCard



              label="Universities & Colleges"



              color="#2D4CC8"



            />



            <AudienceCard



              label="Coding Bootcamps"



              color="#C05512"



            />



            <AudienceCard



              label="Corporate Training"



              color="#BF1869"



            />



            <AudienceCard



              label="Aspiring Developers"



              color="#2A7308"



            />



          </div>



        </div>



        {/* CTA */}



        <div className={styles.rectangleParent4}>



          <Image



            className={



              styles.colleaguesDiscussingWorkProIcon



            }



            src="/images/colleagues-discussing-work-project 2.png"



            width={702}



            height={505}



            sizes="(max-width: 767px) 100vw, 702px"



            alt="Colleagues discussing work at a computer"



          />



          <div className={styles.frameParent25}>



            <div className={styles.ctaTextGroup}>



              <SectionBadge



                label="Programming Mastery"



                className={styles.frameChild21}



              />



              <b



                className={



                  styles.challengeYourSkillsContainer



                }



              >



                <span



                  className={



                    styles.challengeYourSkillsContainer2



                  }



                >



                  <span



                    className={styles.challengeYourSkills}



                  >



                    Challenge Your Skills Build Your{" "}



                  </span>



                  <span className={styles.future}>



                    Future



                  </span>



                </span>



              </b>



            </div>



            <div className={styles.solveRealCoding}>



              Solve real coding challenges and grow into a



              confident programmer.



            </div>



          </div>



        </div>



      </PageScaler>



      {  <footer />  }



      { <Footer /> }



      { <TalkToExpertButton /> }



    </>



  );



}