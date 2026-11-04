"use client";

import type { NextPage } from "next";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

import styles from "./government.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

const GovernmentStateInstitutions: NextPage = () => {

  const router = useRouter();

  const [openCards, setOpenCards] = useState<boolean[]>([false, false, false, false, false]);

  const challengeSectionRef = useRef<HTMLDivElement | null>(null);

  const toggleCard = (index: number) => {

    setOpenCards((currentCards) => currentCards.map((isOpen, cardIndex) => (cardIndex === index ? !isOpen : isOpen)));

  };

  useEffect(() => {

    const section = challengeSectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (!entry.isIntersecting) {

          setOpenCards([false, false, false, false, false]);

        }

      },

      {

        threshold: 0.05,

      },

    );

    observer.observe(section);

    return () => {

      observer.disconnect();

    };

  }, []);

  return (

    <>

      <Header />

      <title>Government & State Institutions | NeuroLXP</title>

      <main className={styles.governmentStateInstitution}>

        <style jsx global>{`

          :where([data-semantic-origin="div"]) {

            margin: 0;

            padding: 0;

            border: 0;

            font: inherit;

            color: inherit;

          }

          :where([data-semantic-origin="b"]) {

            margin: 0;

            padding: 0;

            border: 0;

            font-size: inherit;

            font-family: inherit;

            font-style: inherit;

            line-height: inherit;

            letter-spacing: inherit;

            color: inherit;

          }

        `}</style>

        <div className={styles.frameDiv}>

          <div className={styles.ourCustomersWrapper}>

            <p className={styles.industriesWeServe} data-semantic-origin="div">

              Our Customers

            </p>

          </div>

          <div className={styles.homeParent}>

            <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />

            <div className={styles.ourCustomersWrapper}>

              <p className={styles.industriesWeServe} data-semantic-origin="div">

                Industries we Serve

              </p>

            </div>

          </div>

          <div className={styles.arrowRightDoubleGroup}>

            <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />

            <p className={styles.governmentState} data-semantic-origin="b">{`Government & Institutions`}</p>

          </div>

        </div>

        <div className={styles.colleaguesMaleFemaleSmiling} />

        <div className={styles.vectorParent}>

          <div className={styles.frameItem} />

          <div className={styles.frameParent2}>

            <div className={styles.frameWrapper}>

              <div className={styles.frameParent3}>

                <div className={styles.frameParent4}>

                  <p className={styles.frameInner} data-semantic-origin="div">

                    Government & State Institutions

                  </p>

                  <h1 className={styles.empoweringGovernmentWorkforcContainer} data-semantic-origin="b">

                    <span className={styles.empowering}>{`Empowering `}</span>

                    <span className={styles.governmentWorkforce}>{`Government Workforce `}</span>

                    <span className={styles.empowering}>Learning</span>

                  </h1>

                </div>

                <p className={styles.neurolxpEnablesGovernments} data-semantic-origin="div">

                  NeuroLXP enables governments with scalable learning for workforce development, compliance, and citizen skilling.

                </p>

              </div>

            </div>

            <div

              className={styles.frameWrapper2}

              role="button"

              tabIndex={0}

              onClick={(event) => {

                event.currentTarget.classList.add(styles.exploreLearningPressed);

                window.setTimeout(() => router.push("/HomePage"), 120);

              }}

              onKeyDown={(event) => {

                if (event.key === "Enter" || event.key === " ") {

                  event.preventDefault();

                  event.currentTarget.classList.add(styles.exploreLearningPressed);

                  window.setTimeout(() => router.push("/HomePage"), 120);

                }

              }}

            >

              <p className={styles.frameIcon} data-semantic-origin="div">

                Explore Public Learning

              </p>

            </div>

          </div>

          <div className={styles.ellipseParent}>

            <div className={styles.ellipseDiv} />

            <Image className={styles.frameChild2} src="/images/pillar.webp" width={480} height={487} sizes="100vw" alt="" aria-hidden="true" />

          </div>

        </div>

        <div className={styles.frameParent5}>

          <div className={styles.frameParent6}>

            <div className={`${styles.frameWrapper4} ${styles.topFeatureCard} ${styles.topFeatureCardBlue}`}>

              <div className={styles.trainingAtScaleParent}>

                <h2 className={styles.trainingAtScale} data-semantic-origin="div">

                  Training at Scale

                  <br />

                  <br />

                </h2>

                {/* <p className={styles.trainAcrossDepartments} data-semantic-origin="div">

                  Train across departments

                </p> */}

              </div>

            </div>

            <div className={`${styles.frameWrapper4} ${styles.topFeatureCard} ${styles.topFeatureCardPink}`}>

              <div className={styles.trainingAtScaleParent}>

                <h2 className={styles.centralizedLearning} data-semantic-origin="div">

                  Centralized Learning

                  <br />

                </h2>

                {/* <p className={styles.trainAcrossDepartments} data-semantic-origin="div">

                  One learning platform

                </p> */}

              </div>

            </div>

          </div>

          <div className={styles.frameParent6}>

            <div className={`${styles.frameWrapper4} ${styles.topFeatureCard} ${styles.topFeatureCardTeal}`}>

              <div className={styles.trainingAtScaleParent}>

                <h2 className={styles.trainingAnalytics} data-semantic-origin="div">

                  Training Analytics

                  <br />

                </h2>

                {/* <p className={styles.trainAcrossDepartments} data-semantic-origin="div">

                  Track progress

                  <br />

                  <br />

                </p> */}

              </div>

            </div>

            <div className={`${styles.frameWrapper4} ${styles.topFeatureCard} ${styles.topFeatureCardPurple}`}>

              <div className={styles.trainingAtScaleParent}>

                <h2 className={styles.centralizedLearning} data-semantic-origin="div">

                  Policy Compliance

                  <br />

                </h2>

                {/* <p className={styles.trainAcrossDepartments} data-semantic-origin="div">

                  Ensure compliance

                  <br />

                  <br />

                </p> */}

              </div>

            </div>

          </div>

        </div>

        <div className={styles.textWrapper}>

          <div className={styles.text}>

            <br />

          </div>

        </div>

        <div className={styles.frameParent8}>

          <div ref={challengeSectionRef} className={styles.frameParent9}>

            <div className={styles.frameWrapper7}>

              <div className={styles.keyChallengesInGovernmentWParent}>

                <h2 className={styles.keyChallengesIn} data-semantic-origin="b">

                  Key Challenges in Government Workforce <span style={{ color: "#2D4CC8" }}>Development</span>

                </h2>

                <p className={styles.neurolxpCentralizesGovernmen} data-semantic-origin="div">

                  NeuroLXP centralizes government learning to improve workforce readiness, compliance, and service delivery:

                </p>

              </div>

            </div>

            <div className={styles.frameParent10}>

              <div className={styles.challengeGrid}>

                <div className={`${styles.challengeCard} ${styles.frameWrapper8} ${openCards[0] ? styles.challengeCardOpen : ""}`}>

                  <div className={styles.frameParent12}>

                    <div className={styles.cardIconOuter}>

                      <div className={styles.cardIconInner}>

                        <Image className={styles.cardIconGraphic} src="/icons/group.svg" width={34} height={34} sizes="34px" alt="Training at Scale" />

                      </div>

                    </div>

                    <div className={styles.frameParent13}>

                      <div className={styles.trainingAtScaleGroup}>

                        <h3 className={styles.trainingAtScale2} data-semantic-origin="div">

                          Training at Scale

                        </h3>

                        <p className={styles.trainGovernmentTeams} data-semantic-origin="div">

                          Train statewide<br />government teams.

                        </p>

                      </div>

                      <button type="button" className={styles.challengeToggle} aria-expanded={openCards[0]} aria-controls="challenge-answer-0" onClick={() => toggleCard(0)}>

                        {/* <span className={styles.howNeurolxpHelps}>How NeuroLXP Helps</span> */}

                        <Image className={`${styles.arrowDownDoubleIcon} ${openCards[0] ? styles.arrowOpen : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                      </button>

                    </div>

                  </div>

                  {openCards[0] && (

                    <p id="challenge-answer-0" className={styles.challengeAnswer} data-semantic-origin="div">

                      Centralize policy training<br />and admin skills.

                    </p>

                  )}

                </div>

                <div className={`${styles.challengeCard} ${styles.frameWrapper8} ${openCards[1] ? styles.challengeCardOpen : ""}`}>

                  <div className={styles.frameParent12}>

                    <div className={styles.cardIconOuter}>

                      <div className={styles.cardIconInner}>

                        <Image className={styles.cardIconGraphic} src="/icons/internet.svg" width={34} height={34} sizes="34px" alt="Centralized Training" />

                      </div>

                    </div>

                    <div className={styles.frameParent13}>

                      <div className={styles.trainingAtScaleGroup}>

                        <h3 className={styles.centralizedTraining} data-semantic-origin="div">

                          Centralized Training

                        </h3>

                        <p className={styles.trainGovernmentTeams} data-semantic-origin="div">

                          Manage policies and<br />workforce skills.

                        </p>

                      </div>

                      <button type="button" className={styles.challengeToggle} aria-expanded={openCards[1]} aria-controls="challenge-answer-1" onClick={() => toggleCard(1)}>

                        {/* <span className={styles.howNeurolxpHelps}>How NeuroLXP Helps</span> */}

                        <Image className={`${styles.arrowDownDoubleIcon} ${openCards[1] ? styles.arrowOpen : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                      </button>

                    </div>

                  </div>

                  {openCards[1] && (

                    <p id="challenge-answer-1" className={styles.challengeAnswer} data-semantic-origin="div">

                      Support digital skills<br />and career pathways.

                    </p>

                  )}

                </div>

                <div className={`${styles.challengeCard} ${styles.frameWrapper10} ${openCards[2] ? styles.challengeCardOpen : ""}`}>

                  <div className={styles.frameParent12}>

                    <div className={styles.cardIconOuter}>

                      <div className={styles.cardIconInner}>

                        <Image className={styles.cardIconGraphic} src="/icons/shield.svg" width={34} height={34} sizes="34px" alt="Policy Compliance" />

                      </div>

                    </div>

                    <div className={styles.frameParent13}>

                      <div className={styles.trainingAtScaleGroup}>

                        <h3 className={styles.centralizedTraining} data-semantic-origin="div">

                          Policy Compliance

                        </h3>

                        <p className={styles.ensureRegulatoryCompliance} data-semantic-origin="div">

                          Ensure policy and<br />regulatory compliance.

                        </p>

                      </div>

                      <button type="button" className={styles.challengeToggle} aria-expanded={openCards[2]} aria-controls="challenge-answer-2" onClick={() => toggleCard(2)}>

                        {/* <span className={styles.howNeurolxpHelps}>How NeuroLXP Helps</span> */}

                        <Image className={`${styles.arrowDownDoubleIcon} ${openCards[2] ? styles.arrowOpen : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                      </button>

                    </div>

                  </div>

                  {openCards[2] && (

                    <p id="challenge-answer-2" className={styles.challengeAnswer} data-semantic-origin="div">

                      Deliver compliance training<br />and policy education.

                    </p>

                  )}

                </div>

                <div className={`${styles.challengeCard} ${styles.frameWrapper8} ${openCards[3] ? styles.challengeCardOpen : ""}`}>

                  <div className={styles.frameParent12}>

                    <div className={styles.cardIconOuter}>

                      <div className={styles.cardIconInner}>

                        <Image className={styles.cardIconGraphic} src="/icons/building.svg" width={34} height={34} sizes="34px" alt="Multiple Departments" />

                      </div>

                    </div>

                    <div className={styles.frameParent13}>

                      <div className={styles.trainingAtScaleGroup}>

                        <h3 className={styles.multipleDepartments} data-semantic-origin="div">

                          Multiple Departments

                        </h3>

                        <p className={styles.trainGovernmentTeams} data-semantic-origin="div">

                          Train teams across<br />all departments.

                        </p>

                      </div>

                      <button type="button" className={styles.challengeToggle} aria-expanded={openCards[3]} aria-controls="challenge-answer-3" onClick={() => toggleCard(3)}>

                        {/* <span className={styles.howNeurolxpHelps}>How NeuroLXP Helps</span> */}

                        <Image className={`${styles.arrowDownDoubleIcon} ${openCards[3] ? styles.arrowOpen : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                      </button>

                    </div>

                  </div>

                  {openCards[3] && (

                    <p id="challenge-answer-3" className={styles.challengeAnswer} data-semantic-origin="div">

                      Manage department learning<br />with unified reporting.

                    </p>

                  )}

                </div>

                <div className={`${styles.challengeCard} ${styles.frameWrapper8} ${openCards[4] ? styles.challengeCardOpen : ""}`}>

                  <div className={styles.frameParent12}>

                    <div className={styles.cardIconOuter}>

                      <div className={styles.cardIconInner}>

                        <Image className={styles.cardIconGraphic} src="/icons/chart.svg" width={34} height={34} sizes="34px" alt="Participation Tracking" />

                      </div>

                    </div>

                    <div className={styles.frameParent13}>

                      <div className={styles.trainingAtScaleGroup}>

                        <h3 className={styles.multipleDepartments} data-semantic-origin="div">

                          Participation Tracking

                        </h3>

                        <p className={styles.trainGovernmentTeams} data-semantic-origin="div">

                          Track participation and<br />learning results.

                        </p>

                      </div>

                      <button type="button" className={styles.challengeToggle} aria-expanded={openCards[4]} aria-controls="challenge-answer-4" onClick={() => toggleCard(4)}>

                        {/* <span className={styles.howNeurolxpHelps}>How NeuroLXP Helps</span> */}

                        <Image className={`${styles.arrowDownDoubleIcon} ${openCards[4] ? styles.arrowOpen : ""}`} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                      </button>

                    </div>

                  </div>

                  {openCards[4] && (

                    <p id="challenge-answer-4" className={styles.challengeAnswer} data-semantic-origin="div">

                      Track engagement, completion<br />and learning outcomes.

                    </p>

                  )}

                </div>

              </div>

            </div>

          </div>

          <div className={styles.frameParent23}>

            <div className={styles.frameParent24}>

              <p className={styles.useCasesPill} data-semantic-origin="div">

                Use Cases

              </p>

              <div className={styles.governmentLearningUseCasesWrapper}>

                <h2 className={styles.governmentLearningUse} data-semantic-origin="b">

                  Government Learning Use <span style={{ color: "#2D4CC8" }}>Cases</span>

                </h2>

              </div>

            </div>

            <div className={styles.frameParent25}>

              <div className={styles.useCaseGrid}>

                <div className={`${styles.useCaseCard} ${styles.useCaseBlue}`}>

                  <span className={styles.useCaseIconCircle}>

                    <Image className={styles.useCaseIconImage} src="/icons/blue.svg" width={24} height={24} sizes="24px" alt="Governance Training" />

                  </span>

                  <h3 className={styles.useCaseTitle} data-semantic-origin="div">

                    Governance Training

                  </h3>

                </div>

                <div className={`${styles.useCaseCard} ${styles.useCasePink}`}>

                  <span className={styles.useCaseIconCircle}>

                    <Image className={styles.useCaseIconImage} src="/icons/pink.svg" width={24} height={24} sizes="24px" alt="Policy Compliance" />

                  </span>

                  <h3 className={styles.useCaseTitle} data-semantic-origin="div">

                    Policy Compliance

                  </h3>

                </div>

                <div className={`${styles.useCaseCard} ${styles.useCasePurple}`}>

                  <span className={styles.useCaseIconCircle}>

                    <Image className={styles.useCaseIconImage} src="/icons/purple.svg" width={24} height={24} sizes="24px" alt="Digital Governance" />

                  </span>

                  <h3 className={styles.useCaseTitle} data-semantic-origin="div">

                    Digital Governance

                  </h3>

                </div>

                <div className={`${styles.useCaseCard} ${styles.useCaseTeal}`}>

                  <span className={styles.useCaseIconCircle}>

                    <Image className={styles.useCaseIconImage} src="/icons/dgreen.svg" width={24} height={24} sizes="24px" alt="Leadership Development" />

                  </span>

                  <h3 className={styles.useCaseTitle} data-semantic-origin="div">

                    Leadership Development

                  </h3>

                </div>

                <div className={`${styles.useCaseCard} ${styles.useCaseGold}`}>

                  <span className={styles.useCaseIconCircle}>

                    <Image className={styles.useCaseIconImage} src="/icons/yellow.svg" width={24} height={24} sizes="24px" alt="Workforce Skills" />

                  </span>

                  <h3 className={styles.useCaseTitle} data-semantic-origin="div">

                    Workforce Skills

                  </h3>

                </div>

                <div className={`${styles.useCaseCard} ${styles.useCaseGreen}`}>

                  <span className={styles.useCaseIconCircle}>

                    <Image className={styles.useCaseIconImage} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="Citizen Service Training" />

                  </span>

                  <h3 className={styles.useCaseTitle} data-semantic-origin="div">

                    Citizen Service Training

                  </h3>

                </div>

              </div>

            </div>

          </div>

          <div className={styles.frameParent34}>
            <div className={styles.frameParent35}>

              <p className={styles.benefitsPill} data-semantic-origin="div">

                Benefits For State Governments

              </p>

              <h2 className={styles.poweringStatewideLearning} data-semantic-origin="b">

                Powering Statewide <span style={{ color: "#2D4CC8" }}>Learning</span>

              </h2>

              <p className={styles.theseCapabilitiesHelp} data-semantic-origin="div">

                These capabilities help public institutions improve workforce readiness, citizen education, compliance, and service delivery

                <br />

                <br />

                <br />

                <br />

              </p>

            </div>

            <div className={styles.frameParent36}>

              <div className={styles.frameParent37}>

                <div className={styles.benefitIconOuter}>

                  <div className={styles.benefitIconInner}>

                    <Image className={styles.benefitIconImage} src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Scale training statewide" />

                  </div>

                </div>

                <p className={styles.scaleTrainingStatewide} data-semantic-origin="div">

                  Scale Training Statewide

                </p>

              </div>

              <div className={styles.frameParent37}>

                <div className={styles.benefitIconOuter}>

                  <div className={styles.benefitIconInner}>

                    <Image className={styles.benefitIconImage} src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Ensure policy compliance" />

                  </div>

                </div>

                <p className={styles.ensurePolicyCompliance} data-semantic-origin="div">

                  Ensure Policy Compliance

                </p>

              </div>

              <div className={styles.frameParent37}>

                <div className={styles.benefitIconOuter}>

                  <div className={styles.benefitIconInner}>

                    <Image className={styles.benefitIconImage} src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Develop workforce skills" />

                  </div>

                </div>

                <p className={styles.developWorkforceSkills} data-semantic-origin="div">

                  Develop Workforce Skills

                </p>

              </div>

              <div className={styles.frameParent37}>

                <div className={styles.benefitIconOuter}>

                  <div className={styles.benefitIconInner}>

                    <Image className={styles.benefitIconImage} src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Improve public services" />

                  </div>

                </div>

                <p className={styles.improvePublicServices} data-semantic-origin="div">

                  Improve Public Services

                </p>

              </div>

              <div className={styles.frameParent37}>

                <div className={styles.benefitIconOuter}>

                  <div className={styles.benefitIconInner}>

                    <Image className={styles.benefitIconImage} src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Track learning progress" />

                  </div>

                </div>

                <p className={styles.scaleTrainingStatewide} data-semantic-origin="div">

                  Track Learning Progress

                  <br />

                  <br />

                </p>

              </div>

              <div className={styles.frameParent37}>

                <div className={styles.benefitIconOuter}>

                  <div className={styles.benefitIconInner}>

                    <Image className={styles.benefitIconImage} src="/icons/greenmarkicon.svg" width={34} height={34} sizes="34px" alt="Drive digital transformation" />

                  </div>

                </div>

                <p className={styles.driveDigitalTransformation} data-semantic-origin="div">

                  Drive Digital Transformation

                </p>

              </div>

            </div>

          </div>

          <div className={styles.rectangleParent}>

            <div className={styles.rectangle} />

            <div className={styles.image20} />

            <div className={styles.groupMultiethnicBusinessPeo} />

            <Image className={styles.pexelsAkhilDasari2160057282Icon} src="/images/pexels-akhil-dasari-2160057282-36817688 1.png" width={819} height={525} sizes="100vw" alt="" aria-hidden="true" />

            <div className={styles.frameWrapper19}>

              <div className={styles.frameWrapper20}>

                <div className={styles.frameParent3}>

                  <div className={styles.frameParent44}>

                    <p className={styles.frameChild22} data-semantic-origin="div">

                      Public Learning

                    </p>

                    <h2 className={styles.empoweringPublicLearning} data-semantic-origin="b">

                      Empowering Public <span style={{ color: "#2D4CC8" }}>Learning</span>

                    </h2>

                  </div>

                  <p className={styles.neurolxpEnablesScalable} data-semantic-origin="div">

                    NeuroLXP enables scalable digital learning, workforce development, and advanced analytics for public sector excellence.

                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className={styles.frameParent45}>

           <p className={styles.frameChild23} data-semantic-origin="div">

  NeuroLXP

  <sup className={styles.neuroTrademark}>TM</sup>

</p>

            <div className={styles.poweringGovernmentWorkforceParent}>

              <h2 className={styles.poweringGovernmentWorkforce} data-semantic-origin="b">

                Powering Government Workforce <span style={{ color: "#2D4CC8" }}>Transformation</span>

              </h2>

              <p className={styles.neurolxpHelpsGovernments} data-semantic-origin="div">

                NeuroLXP help governments build skilled, compliant, and future-ready workforces through scalable digital learning and data-driven training programs.

              </p>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>

  );

};

export default GovernmentStateInstitutions;