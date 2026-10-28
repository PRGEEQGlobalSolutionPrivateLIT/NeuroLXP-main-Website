"use client";

import type { NextPage } from "next";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

import styles from "./retail-health.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const RetailAndHealthCare: NextPage = () => {

  const router = useRouter();

  const [openRetailCard, setOpenRetailCard] = useState<string | null>(null);

  const [isFinalVideoActive, setIsFinalVideoActive] = useState(false);

  const finalVideoSectionRef = useRef<HTMLDivElement | null>(null);

  const toggleRetailCard = (card: string) => {

    setOpenRetailCard((current) => (current === card ? null : card));

  };

  useEffect(() => {

    const section = finalVideoSectionRef.current;

    if (!section) {

      return;

    }

    const observer = new IntersectionObserver(

      ([entry]) => {

        setIsFinalVideoActive(entry.isIntersecting);

      },

      {

        threshold: 0.28,

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

    <main

      className={`${styles.retailAndHealthCare} ${openRetailCard ? styles.retailDropdownOpen : ""}`}

      onClickCapture={(event) => {

        const selection = window.getSelection();

        if (

          selection &&

          !selection.isCollapsed &&

          selection.toString().trim() &&

          selection.containsNode(event.target as Node, true)

        ) {

          event.preventDefault();

          event.stopPropagation();

        }

      }}

    >

      <div className={styles.retailHealthcare}>

        <div className={styles.frameDiv}>

          <div className={styles.ourCustomersWrapper}>

            <p className={styles.industriesWeServe} style={{ margin: 0 }}>

              Our Customers

            </p>

          </div>

          <div className={styles.homeParent}>

            <Image src="/icons/arrow-right-double.svg" className={styles.arrowDown01Icon} width={16} height={16} sizes="100vw" alt="" />

            <div className={styles.ourCustomersWrapper}>

              <p className={styles.industriesWeServe} style={{ margin: 0 }}>

                Industries we Serve

              </p>

            </div>

          </div>

          <div className={styles.arrowRightDoubleGroup}>

            <Image src="/icons/arrow-right-double.svg" className={styles.arrowDown01Icon} width={16} height={16} sizes="100vw" alt="" />

            <h1 className={styles.retailHealthcare2} style={{ margin: 0 }}>

              Retail & Healthcare

            </h1>

          </div>

        </div>

        <div className={styles.frameParent2}>

          <div className={styles.frameItem} />

          <div className={styles.smilingYoungFemaleDoctorWeParent}>

            <Image src="/images/smiling-young-female-doctor-wearing-medical-robe-stethoscope-sitting-desk-with-medical-tools-laptop-touching-head-with-finger-isolated-white-wall 1.png" className={styles.smilingYoungFemaleDoctorWeIcon} width={594} height={537} sizes="100vw" alt="Smiling healthcare professional" priority />

            <div className={styles.frameParent3}>

              <div className={styles.frameWrapper}>

                <div className={styles.frameParent4}>

                  <div className={styles.frameParent5}>

                    <span className={styles.selectableBadgeText}>Retail & Healthcare Solutions</span>

                    <Image src="/assets/retail and helath/transparent.webp" className={styles.frameInner} width={386.2} height={50.3} sizes="100vw" alt="" />

                    <h1 className={styles.scalableLearningForContainer} style={{ margin: 0 }}>

                      <span className={styles.scalableLearningFor}>{`Scalable Learning for `}</span>

                      <span className={styles.serviceDriven} style={{ whiteSpace: "nowrap" }}>Service-Driven</span>

                      <span className={styles.scalableLearningFor}>

                        {" "}

                        Industries

                        <br />

                      </span>

                    </h1>

                  </div>

                  <p className={styles.neurolxpEnablesSmarter} style={{ margin: 0 }}>

                    NeuroLXP enables smarter learning for retail and healthcare, driving faster onboarding, compliance and service excellence.

                  </p>

                </div>

              </div>

              <div className={styles.frameParent6}>

                <BookDemoTrigger className={styles.requestDemoWrapper}>

                  <span className={styles.requestDemo}>Book a Demo</span>

                </BookDemoTrigger>

                <div

                  className={styles.frameWrapper2}

                  role="button"

                  tabIndex={0}

                  onClick={() => router.push("/HomePage")}

                  onKeyDown={(event) => {

                    if (event.key === "Enter" || event.key === " ") {

                      router.push("/HomePage");

                    }

                  }}

                >

                  <div className={styles.startLearningWrapper}>

                    <p className={styles.startLearning} style={{ margin: 0 }}>

                      Start Learning

                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className={styles.frameChild2} />

          </div>

        </div>

        <div className={styles.retailHealthcareInner}>

          <div className={styles.frameParent7}>

            <div className={styles.frameWrapper3}>

              <div className={styles.kParent}>

                <p className={styles.k} style={{ margin: 0, fontWeight: "bold" }}>

                  10K+

                </p>

                <p className={styles.retailLocations} style={{ margin: 0 }}>

                  Retail Locations

                  <br />

                </p>

              </div>

            </div>

            <div className={styles.frameWrapper3}>

              <div className={styles.kParent}>

                <p className={styles.b} style={{ margin: 0, fontWeight: "bold" }}>

                  500+

                </p>

                <p className={styles.healthcareFacilities} style={{ margin: 0 }}>

                  Healthcare Facilities

                  <br />

                </p>

              </div>

            </div>

            <div className={styles.frameWrapper3}>

              <div className={styles.kParent}>

                <p className={styles.b} style={{ margin: 0, fontWeight: "bold" }}>

                  5M+

                </p>

                <p className={styles.trainedEmployees} style={{ margin: 0 }}>

                  Trained Employees

                  <br />

                </p>

              </div>

            </div>

            <div className={styles.frameWrapper3}>

              <div className={styles.group}>

                <p className={styles.b2} style={{ margin: 0, fontWeight: "bold" }}>{`4.9 `}</p>

                <p className={styles.averageRating} style={{ margin: 0 }}>

                  Average Rating

                  <br />

                  <br />

                </p>

                <Image src="/images/transparent.webp" className={styles.starIcon} width={21} height={20} sizes="100vw" alt="" />

              </div>

            </div>

          </div>

        </div>

        <div className={styles.frameParent8}>

          <div className={styles.frameParent9}>

            <span className={styles.selectableBadgeText}>Retail Learning</span>

            <Image src="/images/transparent.webp" className={styles.frameChild3} width={222.2} height={50.2} sizes="100vw" alt="" />

            <div className={styles.empoweringSmarterRetailLearParent}>

              <h2 className={styles.empoweringSmarterRetail} style={{ margin: 0 }}>

                Empowering Smarter Retail <span style={{ color: "#2D4CC8" }}>Learning</span>

              </h2>

              <p className={styles.retailTeamsNeed} style={{ margin: 0 }}>

                Retail teams need fast onboarding, updated product knowledge and consistent training across multiple locations.

              </p>

            </div>

          </div>

          <div className={styles.frameParent10}>

            <button type="button" className={`${styles.frameWrapper7} ${styles.retailLearningCard} ${openRetailCard === "talent" ? styles.isOpen : ""}`} onClick={() => toggleRetailCard("talent")} aria-expanded={openRetailCard === "talent"}>

              <div className={styles.frameParent11}>

                <div className={styles.retailCardIcon}>

                  <Image src="/icons/user-group-02-1.svg" className={styles.frameChild4} width={46} height={46} sizes="46px" alt="" aria-hidden="true" />

                </div>

                <h3 className={styles.talentRetention} style={{ margin: 0 }}>

                  Talent Retention

                </h3>

                <span className={styles.retailCardChevron} aria-hidden="true">

                  ⌄

                </span>

                <p className={styles.retailCardDropdown} style={{ margin: 0 }}>

                  Simplify new hire<br />onboarding

                </p>

              </div>

            </button>

            <button type="button" className={`${styles.frameWrapper7} ${styles.retailLearningCard} ${openRetailCard === "product" ? styles.isOpen : ""}`} onClick={() => toggleRetailCard("product")} aria-expanded={openRetailCard === "product"}>

              <div className={styles.frameParent12}>

                <div className={styles.retailCardIcon}>

                  <Image src="/icons/ai-brain-01.svg" className={styles.frameChild5} width={46} height={46} sizes="46px" alt="" aria-hidden="true" />

                </div>

                <h3 className={styles.productKnowledge} style={{ margin: 0 }}>

                  Product Knowledge

                </h3>

                <span className={styles.retailCardChevron} aria-hidden="true">

                  ⌄

                </span>

                <p className={styles.retailCardDropdown} style={{ margin: 0 }}>

                  Keep teams product<br />ready

                </p>

              </div>

            </button>

            <button type="button" className={`${styles.frameWrapper7} ${styles.retailLearningCard} ${openRetailCard === "stores" ? styles.isOpen : ""}`} onClick={() => toggleRetailCard("stores")} aria-expanded={openRetailCard === "stores"}>

              <div className={styles.frameParent13}>

                <div className={styles.retailCardIcon}>

                  <Image src="/icons/store-01-1.svg" className={styles.frameChild6} width={46} height={46} sizes="46px" alt="" aria-hidden="true" />

                </div>

                <h3 className={styles.distributedStores} style={{ margin: 0 }}>

                  Distributed Stores

                </h3>

                <span className={styles.retailCardChevron} aria-hidden="true">

                  ⌄

                </span>

                <p className={styles.retailCardDropdown} style={{ margin: 0 }}>

                  Deliver consistent training<br />everywhere

                </p>

              </div>

            </button>

          </div>

        </div>

        <div className={styles.rectangleParent}>

          <div className={styles.rectangle} />

          <div className={styles.image20} />

          <div className={styles.frameParent14}>

            <span className={styles.selectableBadgeText}>Retail Excellence</span>

            <Image src="/images/transparent.webp" className={styles.frameChild7} width={235} height={50.2} sizes="100vw" alt="" />

            <h2 className={styles.empoweringSmarterRetail2} style={{ margin: 0 }}>

              Empowering Smarter Retail <span style={{ color: "#2D4CC8" }}>Learning</span>

              <br />

            </h2>

            <p className={styles.neurolxpEnablesFaster} style={{ margin: 0 }}>

              NeuroLXP enables faster onboarding interactive product training and consistent learning across retail stores and regions.

              <br />

              <br />

            </p>

          </div>

          <Image src="/images/two-female-designers-work 1.png" className={styles.twoFemaleDesignersWork1Icon} width={615} height={507} sizes="100vw" alt="Retail professionals learning together" />

        </div>

        <div className={styles.frameParent15}>

          <div className={styles.frameParent16}>

            <span className={styles.selectableBadgeText}>Retail Benefits</span>

            <Image src="/images/transparent.webp" className={styles.frameChild8} width={209.8} height={50.2} sizes="100vw" alt="" />

            <h2 className={styles.benefitsForRetail} style={{ margin: 0 }}>

              Benefits for Retail <span style={{ color: "#2D4CC8" }}>Organizations</span>

            </h2>

            <p className={styles.neurolxpEnablesSmarter2} style={{ margin: 0 }}>

              NeuroLXP enables smarter retail learning with faster onboarding, stronger product knowledge and better customer service.

            </p>

          </div>

          <div className={styles.frameParent17}>

            <div className={styles.frameParent18}>

              <span className={`${styles.retailBenefitIcon} ${styles.retailBenefitBlue}`}>

                <Image src="/icons/graduation-cap.svg" width={25} height={25} alt="" />

              </span>

              <p className={styles.consistentTraining} style={{ margin: 0 }}>

                Consistent Training

                <br />

              </p>

            </div>

            <div className={styles.frameParent19}>

              <span className={`${styles.retailBenefitIcon} ${styles.retailBenefitPink}`}>

                <Image src="/icons/star.svg" width={25} height={25} alt="" />

              </span>

              <p className={styles.betterCustomerExperience} style={{ margin: 0 }}>

                Better Customer Experience

                <br />

                <br />

              </p>

            </div>

            <div className={styles.frameParent19}>

              <span className={`${styles.retailBenefitIcon} ${styles.retailBenefitPurple}`}>

                <Image src="/icons/zap.svg" width={25} height={25} alt="" />

              </span>

              <p className={styles.quickOnboarding} style={{ margin: 0 }}>

                Quick Onboarding

                <br />

              </p>

            </div>

            <div className={styles.frameParent19}>

              <span className={`${styles.retailBenefitIcon} ${styles.retailBenefitOrange}`}>

                <Image src="/icons/target-02.svg" width={25} height={25} alt="" />

              </span>

              <p className={styles.continuousDevelopment} style={{ margin: 0 }}>

                Continuous Development

                <br />

              </p>

            </div>

            <div className={styles.frameParent19}>

              <span className={`${styles.retailBenefitIcon} ${styles.retailBenefitGold}`}>

                <Image src="/icons/analytics-up.svg" width={25} height={25} alt="" />

              </span>

              <p className={styles.performanceTracking} style={{ margin: 0 }}>

                Performance Tracking

                <br />

                <br />

              </p>

            </div>

          </div>

        </div>

        <div className={styles.frameParent23}>

            <div

              className={styles.expertButtonSlot}

              data-expert-button-slot

            />

          <div className={styles.frameParent24}>

            <div className={styles.frameWrapper10}>

              <div className={styles.largeHealthcareTeamsParent}>

                <Image src="/images/choosing-lunch-dark-haired-young-businessman-checking-menu-choosing-lunch 1.webp" className={styles.frameChild14} width={280} height={162} sizes="100vw" alt="" />

                <h3 className={styles.complianceAndCertification} style={{ margin: 0 }}>

                  Compliance and&#x20;

                  <br />

                  Certification

                  <br />

                </h3>

              </div>

            </div>

            <div className={styles.frameParent26}>

              <div className={styles.frameWrapper10}>

                <div className={styles.largeHealthcareTeamsParent}>

                  <div className={styles.continuousMedicalEducationParent}>

                    <h3 className={styles.continuousMedicalEducation} style={{ margin: 0 }}>

                      Continuous Medical Education

                      <br />

                    </h3>

                    <Image src="/images/young-businesswoman-her-colleague-wearing-face-masks-while-working-computer-office-virus-epidemic 1.png" className={styles.youngBusinesswomanHerColleaIcon} width={280} height={162} sizes="100vw" alt="" />

                  </div>

                </div>

              </div>

              <div className={styles.frameWrapper10}>

                <div className={styles.largeHealthcareTeamsParent}>

                  <h3 className={styles.largeHealthcareTeams} style={{ margin: 0 }}>

                    Large Healthcare Teams

                    <br />

                  </h3>

                  <Image src="/images/medical-team-checking-results-digital-tablet 1.png" className={styles.frameChild15} width={280} height={162} sizes="100vw" alt="" />

                </div>

              </div>

            </div>

          </div>

          <div className={styles.frameParent27}>

            <span className={styles.selectableBadgeText}>Healthcare Learning</span>

            <Image src="/assets/retail and helath/transparent.webp" className={styles.frameChild16} width={281.6} height={50.2} sizes="100vw" alt="" />

            <h2 className={styles.smarterHealthcareLearning} style={{ margin: 0 }}>

              Smarter Healthcare <span style={{ color: "#2D4CC8" }}>Learning</span>

            </h2>

            <p className={styles.healthcareOrganizationsNeed} style={{ margin: 0 }}>

              Healthcare organizations need reliable training for compliance certification, clinical skills, and ongoing professional development.

            </p>

          </div>

        </div>

        <div className={styles.rectangleGroup}>

          <div className={styles.rectangle} />

          <div className={styles.image20} />

          <div className={styles.frameParent28}>

            <span className={styles.selectableBadgeText}>Retail Excellence</span>

            <Image src="/assets/retail and helath/transparent.webp" className={styles.frameChild7} width={235} height={50.2} sizes="100vw" alt="" />

            <h2 className={styles.empoweringHealthcareOrganiza} style={{ margin: 0 }}>

              Empowering Healthcare <span style={{ color: "#2D4CC8" }}>Organizations</span>

            </h2>

            <p className={styles.neurolxpEnablesFaster} style={{ margin: 0 }}>

              NeuroLXP simplifies healthcare training with compliance, certifications, and continuous learning across healthcare teams.

            </p>

          </div>

          <Image src="/images/male-doctor-nurses-communicating-while-working-digital-tablet-clinic 2.png" className={styles.maleDoctorNursesCommunicatiIcon} width={583} height={526} sizes="100vw" alt="Healthcare team collaborating" />

        </div>

        <div className={styles.frameParent29}>

          <div className={styles.frameParent30}>

            <span className={styles.selectableBadgeText}>Healthcare Benefits</span>

            <Image src="/images/transparent.webp" className={styles.frameChild18} width={282} height={50.2} sizes="100vw" alt="" />

            <div className={styles.benefitsForHealthcareOrganiParent}>

              <h2 className={styles.benefitsForHealthcare} style={{ margin: 0 }}>

                Benefits for Healthcare <span style={{ color: "#2D4CC8" }}>Organizations</span>

                <br />

              </h2>

              <p className={styles.healthcareOrganizationsNeed2} style={{ margin: 0 }}>

                Healthcare organizations need reliable training for compliance, certification clinical skills, and ongoing professional development.

                <br />

                <br />

              </p>

            </div>

          </div>

          <div className={styles.frameParent31}>

            <div className={styles.frameParent32}>

              <Image src="/images/transparent.webp" className={styles.frameChild19} width={240} height={166} sizes="100vw" alt="" />

              <span className={`${styles.healthArrow} ${styles.healthArrowBlue}`} aria-hidden="true" />

              <h3 className={styles.complianceTraining} style={{ margin: 0 }}>

                Compliance Training

                <br />

              </h3>

            </div>

            <div className={styles.vectorParent}>

              <Image src="/images/transparent.webp" className={styles.rectangleIcon} width={240} height={166} sizes="100vw" alt="" />

              <Image src="/images/transparent.webp" className={styles.frameChild19} width={240} height={166} sizes="100vw" alt="" />

              <Image src="/icons/Polygon 32-2.svg" className={styles.polygonIcon} width={25} height={24} sizes="25px" alt="" />

              <h3 className={styles.professionalDevelopment} style={{ margin: 0 }}>

                Professional Development

                <br />

              </h3>

            </div>

            <div className={styles.vectorParent}>

              <Image src="/images/transparent.webp" className={styles.rectangleIcon} width={240} height={166} sizes="100vw" alt="" />

              <Image src="/images/transparent.webp" className={styles.frameChild19} width={240} height={166} sizes="100vw" alt="" />

              <Image src="/icons/Polygon 32-1.svg" className={styles.polygonIcon} width={25} height={24} sizes="25px" alt="" />

              <h3 className={styles.betterPatientCare} style={{ margin: 0 }}>

                Better Patient Care

                <br />

              </h3>

            </div>

            <div className={styles.vectorParent}>

              <Image src="/images/transparent.webp" className={styles.rectangleIcon} width={240} height={166} sizes="100vw" alt="" />

              <Image src="/images/transparent.webp" className={styles.frameChild19} width={240} height={166} sizes="100vw" alt="" />

              <Image src="/icons/Polygon 32-3.svg" className={styles.polygonIcon} width={25} height={24} sizes="25px" alt="" />

              <h3 className={styles.certificationTracking} style={{ margin: 0 }}>

                Certification Tracking

                <br />

                <br />

              </h3>

            </div>

            <div className={styles.vectorParent}>

              <Image src="/images/transparent.webp" className={styles.rectangleIcon} width={240} height={166} sizes="100vw" alt="" />

              <Image src="/images/transparent.webp" className={styles.frameChild19} width={240} height={166} sizes="100vw" alt="" />

              <h3 className={styles.scalableProgrammes} style={{ margin: 0 }}>

                Scalable Programmes

                <br />

                <br />

                <br />

              </h3>

              <Image src="/icons/Polygon 32.svg" className={styles.polygonIcon} width={25} height={24} sizes="25px" alt="" />

            </div>

          </div>

        </div>

        <div className={styles.frameParent33}>

          <div ref={finalVideoSectionRef} className={`${styles.image21Parent} ${styles.retailVideoRevealSection} ${isFinalVideoActive ? styles.isRevealActive : ""}`}>

            <div className={styles.image21} />

            <div className={styles.groupYoungBusinesspeopleUsi} />


<iframe
  className={`${styles.retailFinalVideo} ${styles.retailFinalVideoSlide}`}
  src="https://www.youtube.com/embed/Il4-SdbuZAY?autoplay=1&mute=1&loop=1&playlist=Il4-SdbuZAY&playsinline=1&controls=0"
  title="Retail and healthcare learning video"
  allow="autoplay; encrypted-media; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  loading="eager"
/>

            <div className={`${styles.frameParent34} ${styles.retailFinalVideoContent}`}>

              <div className={styles.frameParent4}>

                <div className={styles.frameParent36}>

<span className={styles.selectableBadgeText}>
  NeuroLXP
  <sup className={styles.neuroLxpTM}>TM</sup>
</span>
                  <Image src="/images/transparent.webp" className={styles.frameChild32} width={170.7} height={50.1} sizes="100vw" alt="" />

                  <h2 className={styles.poweringLearningFor} style={{ margin: 0 }}>

                    Powering Learning for Retail and <span style={{ color: "#2D4CC8" }}>Healthcare</span>

                  </h2>

                </div>

                <p className={styles.neurolxpHelpsRetail} style={{ margin: 0 }}>

                  NeuroLXP helps retail and healthcare organizations build skilled, compliant <span style={{ whiteSpace: "nowrap" }}>future-ready</span> workforces.

                </p>

              </div>

              <div

                className={styles.frameWrapper14}

                role="button"

                tabIndex={0}

                onClick={() => router.push("/HomePage")}

                onKeyDown={(event) => {

                  if (event.key === "Enter" || event.key === " ") {

                    router.push("/HomePage");

                  }

                }}

              >

                <div className={styles.getStartedWrapper}>

                  <p className={styles.getStarted} style={{ margin: 0 }}>{`Get Started `}</p>

                </div>

              </div>

            </div>

          </div>

          <div className={styles.image203} />

        </div>

      </div>

      <div className={styles.productKnowledge2}>

        <div className={styles.frameParent54}>

          <div className={styles.frameParent55}>

            <Image src="/icons/store-01-1.svg" className={styles.frameChild43} width={60} height={60} sizes="100vw" alt="" />

            <p className={styles.productKnowledge3}>

              Product Knowledge

              <br />

            </p>

          </div>

          <p className={styles.keepTeamsProduct} style={{ margin: 0 }}>

            Keep teams product ready.

          </p>

        </div>

      </div>

      <div className={styles.distributedStores2}>

        <div className={styles.frameParent56}>

          <div className={styles.frameParent55}>

            <Image src="/icons/analytics-up.svg" className={styles.frameChild44} width={60} height={60} sizes="100vw" alt="" />

            <p className={styles.distributedStores3}>

              Distributed Stores

              <br />

            </p>

          </div>

          <p className={styles.deliverConsistentTraining} style={{ margin: 0 }}>

            Deliver consistent training everywhere.

          </p>

        </div>

      </div>

      <div className={styles.talentRetention2}>

        <div className={styles.frameParent58}>

          <div className={styles.frameParent59}>

            <Image src="/icons/user-group-02-1.svg" className={styles.frameChild45} width={60} height={60} sizes="100vw" alt="" />

            <h3 className={styles.talentRetention3} style={{ margin: 0 }}>

              Talent Retention

            </h3>

          </div>

          <p className={styles.deliverConsistentTraining} style={{ margin: 0 }}>

            Simplify new hire onboarding.

          </p>

        </div>

      </div>

    </main>

      <Footer />

    </>

  );

};

export default RetailAndHealthCare;
