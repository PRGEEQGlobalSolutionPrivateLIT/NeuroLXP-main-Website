"use client";

import type { NextPage } from 'next';

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import styles from "./ngo.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const NGO: NextPage = () => {

    const topVideoRef = useRef<HTMLIFrameElement>(null);

    const [isTopVideoPlaying, setIsTopVideoPlaying] = useState(false);

    const bottomVideoRef = useRef<HTMLIFrameElement>(null);

    const [isBottomVideoPlaying, setIsBottomVideoPlaying] = useState(false);

    const [openSupportCards, setOpenSupportCards] = useState<number[]>([]);

    const challengeSectionRef = useRef<HTMLDivElement>(null);

    const nextSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const challenges = challengeSectionRef.current;

        const nextSection = nextSectionRef.current;

        if (!challenges || !nextSection) return;

        const closeSupportCards = () => {

            setOpenSupportCards((current) => current.length ? [] : current);

        };

        // Close when the challenges leave view in either scroll direction.

        const challengesObserver = new IntersectionObserver(([entry]) => {

            if (!entry.isIntersecting) closeSupportCards();

        }, { threshold: 0 });

        // Also close once the following section enters the upper half of the view.

        let nextSectionObserver: IntersectionObserver;

        const observeNextSection = () => {

            nextSectionObserver?.disconnect();

            nextSectionObserver = new IntersectionObserver(([entry]) => {

                if (entry.isIntersecting) closeSupportCards();

            }, {

                threshold: 0,

                rootMargin: `0px 0px -${Math.round(window.innerHeight / 2)}px 0px`,

            });

            nextSectionObserver.observe(nextSection);

        };

        challengesObserver.observe(challenges);

        observeNextSection();

        window.addEventListener("resize", observeNextSection);

        return () => {

            challengesObserver.disconnect();

            nextSectionObserver.disconnect();

            window.removeEventListener("resize", observeNextSection);

        };

    }, []);

    const toggleSupportCard = (index: number) => {

        setOpenSupportCards((current) =>

            current.includes(index)

                ? current.filter((cardIndex) => cardIndex !== index)

                : [...current, index]

        );

    };

  
const toggleBottomVideo = () => {
    const iframe = bottomVideoRef.current;

    if (!iframe) return;

    const shouldPlay = !isBottomVideoPlaying;

    iframe.contentWindow?.postMessage(
        JSON.stringify({
            event: "command",
            func: shouldPlay ? "playVideo" : "pauseVideo",
            args: []
        }),
        "https://www.youtube.com"
    );

    setIsBottomVideoPlaying(shouldPlay);
};


    
const toggleTopVideo = () => {
    const iframe = topVideoRef.current;
    if (!iframe) return;

    const shouldPlay = !isTopVideoPlaying;

    iframe.contentWindow?.postMessage(
        JSON.stringify({
            event: "command",
            func: shouldPlay ? "playVideo" : "pauseVideo",
            args: []
        }),
        "https://www.youtube.com"
    );

    setIsTopVideoPlaying(shouldPlay);
};


    return (

        <>

            <Header />

        <main className={styles.ngoPage} aria-label="Non-profit organizations page">

            <title>Non-profit Organizations

                 (NGOs) | NeuroLXP</title>

            <div className={`${styles.ngo} ${openSupportCards.length > 0 ? styles.supportCardsExpanded : ""}`}>

                <div className={styles.ngoInner}>

                    <div className={styles.image20Parent}>

                        <div className={styles.image20} aria-hidden="true" />

                        <div className={styles.image21} aria-hidden="true" />

                       

<div className={styles.videoZoomWrapper}>
    <iframe
        className={styles.image61Icon}
        ref={topVideoRef}
        src="https://www.youtube.com/embed/3PWNzAZbTG0?autoplay=1&mute=1&loop=1&playlist=3PWNzAZbTG0&playsinline=1&controls=0&enablejsapi=1"
        title="Top Video"
        loading="eager"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
    />
</div>



                        {!isTopVideoPlaying && (
  <button
    type="button"
    className={`${styles.frameItem} ${styles.videoPlayButton}`}
    onClick={toggleTopVideo}
    aria-label="Play nonprofit organizations video"
  >
    <Image
      className={styles.videoPlayIcon}
      src="/icons/videosymbol.svg"
      width={106}
      height={106}
      sizes="106px"
      alt=""
      aria-hidden="true"
    />
  </button>
)}

                        <div className={styles.frameDiv}>

                            <div className={styles.frameParent2}>

                                <div className={styles.frameParent3}>

                                    <div className={styles.frameInner}>Non-profit Organizations (NGOs)</div>

                                    <h1 className={styles.empoweringNgosThroughContainer} style={{ margin: 0, fontWeight: 700 }}>

                                        <span className={styles.empowering}>Empowering</span>

                                        <span className={styles.ngos}> NGOs<br /></span>

                                        <span className={styles.empowering}>Through Learning<br /></span>

                                    </h1>

                                </div>

                                <div className={styles.empoweringNonprofitsThrough}>Empowering non-profits through scalable digital learning.</div>

                            </div>

                            <BookDemoTrigger className={styles.frameWrapper}>

                                <div className={styles.bookADemoWrapper}>

                                    <div className={styles.bookADemo}>Book a Demo</div>

                                </div>

                            </BookDemoTrigger>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent4}>

                    <div className={styles.ourCustomersWrapper}>

                        <div className={styles.industriesWeServe}>Our Customers</div>

                    </div>

                    <div className={styles.homeParent}>

                        <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />

                        <div className={styles.ourCustomersWrapper}>

                            <div className={styles.industriesWeServe}>Industries we Serve</div>

                        </div>

                    </div>

                    <div className={styles.arrowRightDoubleGroup}>

                        <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" aria-hidden="true" />

                        <b className={styles.industriesWeServe}>Non-profit Organizations</b>

                    </div>

                </div>

                <div className={styles.frame}>

                    <div className={styles.frameInner2}>

                        <div className={styles.frameWrapper2}>

                            <div className={styles.missionDrivenLearningParent}>

                                <h2 className={styles.missionDrivenLearning} style={{ margin: 0, fontWeight: 700 }}>Mission-Driven <span className={styles.headingAccent}>Learning</span></h2>

<div className={styles.empowerStaffVolunteers}>
  Empower communities through digital learning that builds skills, shares knowledge, and drives social impact.
</div>
                            </div>

                        </div>

                    </div>

                    <div className={styles.frameInner3}>

                        <div className={styles.frameWrapper3}>

                            <div className={styles.frameWrapper4}>

                                <div className={styles.missionDrivenLearningParent}>

                                    <h2 className={styles.scaleYourImpact} style={{ margin: 0, fontWeight: 700 }}>Scale your <span className={styles.headingAccent}>Impact</span></h2>

<div className={styles.deliverStructuredTraining}>
  Empower nonprofits with training, skill development, and measurable learning to achieve their mission.
</div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={challengeSectionRef} className={styles.frameParent5}>

                    <div className={styles.frameParent6}>

                        <div className={styles.frameIcon}>Key Challenges</div>

                        <div className={styles.howNeurolxpSupportsNgosParent}>

<h2
  className={styles.howNeurolxpSupports}
  style={{ margin: 0, fontWeight: 700 }}
>
  How NeuroLXP Supports{" "}
  <span style={{ color: "#2D4CC8" }}>NGOs</span>
</h2>
                            <div className={styles.neurolxpHelpsNonprofits}>NeuroLXP helps nonprofits deliver scalable training, build skills, and maximize social impact.<br /><br /></div>

                        </div>

                    </div>

                    <div className={styles.frameParent7}>

                        <div className={`${styles.frameWrapper5} ${styles.supportCard} ${openSupportCards.includes(0) ? styles.supportCardOpen : ""}`}>

                            <div className={styles.supportCardContent}>

                                <div className={`${styles.supportIconOuter} ${styles.distributedStaffIconSection}`}>

                                    <Image className={`${styles.supportIcon} ${styles.distributedStaffIcon}`} src="/icons/group-green.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />

                                </div>

                                <h3 id="support-card-title-0" className={styles.supportCardTitle} style={{ margin: 0, fontWeight: 700 }}><span className={styles.mobileTitleLine}>Distributed Staff</span>{" "}<span className={styles.mobileTitleLine}><span className={styles.headingAccent}>Teams</span></span></h3>

                                <button type="button" className={styles.supportArrowButton} onClick={() => toggleSupportCard(0)} aria-expanded={openSupportCards.includes(0)} aria-label={`${openSupportCards.includes(0) ? "Hide" : "Show"} Distributed Staff Teams details`} aria-controls="support-card-details-0">

                                    <Image className={styles.arrowDownDoubleIcon} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                                </button>

                                <div id="support-card-details-0" className={styles.supportCardDetails} role="region" aria-labelledby="support-card-title-0" aria-hidden={!openSupportCards.includes(0)}><div className={styles.supportCardPeak} aria-hidden="true" /><p>Consistent learning across teams</p></div>

                            </div>

                        </div>

                        <div className={`${styles.frameWrapper5} ${styles.supportCard} ${openSupportCards.includes(1) ? styles.supportCardOpen : ""}`}>

                            <div className={styles.supportCardContent}>

                                <div className={`${styles.supportIconOuter} ${styles.limitedTrainingIconSection}`}>

                                    <Image className={`${styles.supportIcon} ${styles.limitedTrainingIcon}`} src="/icons/iconsidea-blue.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />

                                </div>

                                <h3 id="support-card-title-1" className={styles.supportCardTitle} style={{ margin: 0, fontWeight: 700 }}><span className={styles.mobileTitleLine}>Limited Training</span>{" "}<span className={styles.mobileTitleLine}><span className={styles.headingAccent}>Resources</span></span></h3>

                                <button type="button" className={styles.supportArrowButton} onClick={() => toggleSupportCard(1)} aria-expanded={openSupportCards.includes(1)} aria-label={`${openSupportCards.includes(1) ? "Hide" : "Show"} Limited Training Resources details`} aria-controls="support-card-details-1">

                                    <Image className={styles.arrowDownDoubleIcon} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                                </button>

                                <div id="support-card-details-1" className={styles.supportCardDetails} role="region" aria-labelledby="support-card-title-1" aria-hidden={!openSupportCards.includes(1)}><div className={styles.supportCardPeak} aria-hidden="true" /><p>Create once, train everywhere</p></div>

                            </div>

                        </div>

                        <div className={`${styles.frameWrapper5} ${styles.supportCard} ${openSupportCards.includes(2) ? styles.supportCardOpen : ""}`}>

                            <div className={styles.supportCardContent}>

                                <div className={`${styles.supportIconOuter} ${styles.knowledgeTransferIconSection}`}>

                                    <Image className={`${styles.supportIcon} ${styles.knowledgeTransferIcon}`} src="/icons/bookReading.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />

                                </div>

                                <h3 id="support-card-title-2" className={styles.supportCardTitle} style={{ margin: 0, fontWeight: 700 }}><span className={styles.mobileTitleLine}>Knowledge</span>{" "}<span className={styles.mobileTitleLine}><span className={styles.headingAccent}>Transfer</span></span></h3>

                                <button type="button" className={styles.supportArrowButton} onClick={() => toggleSupportCard(2)} aria-expanded={openSupportCards.includes(2)} aria-label={`${openSupportCards.includes(2) ? "Hide" : "Show"} Knowledge Transfer details`} aria-controls="support-card-details-2">

                                    <Image className={styles.arrowDownDoubleIcon} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                                </button>

                                <div id="support-card-details-2" className={styles.supportCardDetails} role="region" aria-labelledby="support-card-title-2" aria-hidden={!openSupportCards.includes(2)}><div className={styles.supportCardPeak} aria-hidden="true" /><p>Capture & share knowledge</p></div>

                            </div>

                        </div>

                        <div className={`${styles.frameWrapper5} ${styles.supportCard} ${openSupportCards.includes(3) ? styles.supportCardOpen : ""}`}>

                            <div className={styles.supportCardContent}>

                                <div className={`${styles.supportIconOuter} ${styles.trainingImpactIconSection}`}>

                                    <Image className={`${styles.supportIcon} ${styles.trainingImpactIcon}`} src="/icons/chart-purple.svg" width={90.03} height={90.03} sizes="40.03px" alt="" aria-hidden="true" />

                                </div>

                                <h3 id="support-card-title-3" className={styles.supportCardTitle} style={{ margin: 0, fontWeight: 700 }}><span className={styles.mobileTitleLine}>Measuring</span>{" "}<span className={styles.mobileTitleLine}>Training <span className={styles.headingAccent}>Impact</span></span></h3>

                                <button type="button" className={styles.supportArrowButton} onClick={() => toggleSupportCard(3)} aria-expanded={openSupportCards.includes(3)} aria-label={`${openSupportCards.includes(3) ? "Hide" : "Show"} Measuring Training Impact details`} aria-controls="support-card-details-3">

                                    <Image className={styles.arrowDownDoubleIcon} src="/icons/arrowdown.svg" width={32} height={32} sizes="32px" alt="" aria-hidden="true" />

                                </button>

                                <div id="support-card-details-3" className={styles.supportCardDetails} role="region" aria-labelledby="support-card-title-3" aria-hidden={!openSupportCards.includes(3)}><div className={styles.supportCardPeak} aria-hidden="true" /><p>Measure Real Learning Impact</p></div>

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={nextSectionRef} className={styles.image20Group}>

                    <div className={styles.image202} aria-hidden="true" />

                    <div className={styles.image21Parent}>

                        <div className={styles.image212} aria-hidden="true" />

                        <div className={styles.wrapperPexelsMbaClassroom2}>

                            <Image className={styles.pexelsMbaClassroom215566522Icon} src="/images/workingimage.webp" width={781} height={552} sizes="100vw" alt="People collaborating with laptops" />

                        </div>

                        <div className={styles.ellipseDiv} aria-hidden="true" />

                        <div className={styles.frameWrapper9}>

                            <div className={styles.frameWrapper10}>

                                <div className={styles.frameWrapper11}>

                                    <div className={styles.frameParent16}>

                                        <div className={styles.frameParent17}>

<div className={styles.frameChild6}>
  <span>How NeuroLXP</span>
  <sup
    aria-label="trademark"
    style={{
      display: "inline-block",
      fontSize: "10.8px",
      lineHeight: "6px",
      fontWeight: 700,
      marginLeft: "2px",
      position: "relative",
      top: "-6px",
      color: "#2D4CC8",
      whiteSpace: "nowrap",
    }}
  >
    TM
  </sup>

  <span
    style={{
      display: "inline-block",
      width: "6px",
    }}
    aria-hidden="true"
  />

  <span>Helps</span>
</div>
                                            <h2 className={styles.collaborativeLearning} style={{ margin: 0, fontWeight: 700 }}>Collaborative <span className={styles.headingAccent}>Learning</span></h2>

                                        </div>

                                        <div className={styles.createOnceTrainContainer}>

                                            <span className={styles.createOnceTrain}>{`Create once, train everywhere Empower teams, share knowledge, and measure impact `}</span>

                                            <span className={styles.createOnceTrain} style={{ fontWeight: 400 }}>all on one platform</span>

                                            <span className={styles.createOnceTrain}>.</span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent18}>

                    <div className={styles.frameParent6}>

                        <div className={styles.frameChild7}>Learning Use Cases</div>

                        <div className={styles.howNeurolxpSupportsNgosParent}>

                            <h2 className={styles.howNeurolxpSupports} style={{ margin: 0, fontWeight: 700 }}>How NGOs Can Use <span className={styles.headingAccent}>NeuroLXP</span></h2>

                            <div className={styles.neurolxpHelpsNonprofits}>Explore how NeuroLXP helps nonprofits train, collaborate, and create lasting impact through engaging digital learning.</div>

                        </div>

                    </div>

                    <div className={styles.frameParent20}>

                        <div className={styles.frameParent21}>

                            <div className={styles.frameParent22}>

                                <div className={styles.frameWrapper12}>

                                    <div className={styles.frameWrapper13}>

                                        <div className={styles.frameWrapper13}>

                                            <div className={styles.volunteerOnboardingWrapper}>

                                                <div className={styles.volunteerOnboarding}><span className={styles.mobileTitleLine}>Volunteer</span>{" "}<span className={styles.mobileTitleLine}>Onboarding</span></div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.useCaseCheckWrap} aria-hidden="true">

                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />

                                </div>

                            </div>

                            <div className={styles.frameParent22}>

                                <div className={styles.frameWrapper12}>

                                    <div className={styles.frameWrapper13}>

                                        <div className={styles.frameWrapper13}>

                                            <div className={styles.volunteerOnboardingWrapper} />

                                        </div>

                                    </div>

                                    <div className={styles.volunteerOnboarding}><span className={styles.mobileTitleLine}>Community</span>{" "}<span className={styles.mobileTitleLine}>Learning</span></div>

                                </div>

                                <div className={styles.useCaseCheckWrap} aria-hidden="true">

                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />

                                </div>

                            </div>

                            <div className={styles.frameParent22}>

                                <div className={styles.frameWrapper12}>

                                    <div className={styles.frameWrapper13}>

                                        <div className={styles.frameWrapper13}>

                                            <div className={styles.volunteerOnboardingWrapper}>

                                                <div className={styles.leadershipTraining}><span className={styles.mobileTitleLine}>Leadership</span>{" "}<span className={styles.mobileTitleLine}>Training</span></div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.useCaseCheckWrap} aria-hidden="true">

                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />

                                </div>

                            </div>

                        </div>

                        <div className={styles.frameParent21}>

                            <div className={styles.frameParent22}>

                                <div className={styles.frameWrapper12}>

                                    <div className={styles.frameWrapper13}>

                                        <div className={styles.frameWrapper13}>

                                            <div className={styles.volunteerOnboardingWrapper}>

                                                <div className={styles.leadershipTraining}><span className={styles.mobileTitleLine}>Beneficiary</span>{" "}<span className={styles.mobileTitleLine}>Training</span></div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.useCaseCheckWrap} aria-hidden="true">

                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />

                                </div>

                            </div>

                            <div className={styles.frameParent22}>

                                <div className={styles.frameWrapper12}>

                                    <div className={styles.frameWrapper13}>

                                        <div className={styles.frameWrapper13}>

                                            <div className={styles.volunteerOnboardingWrapper}>

                                                <div className={styles.leadershipTraining}><span className={styles.mobileTitleLine}>Advocacy</span>{" "}<span className={styles.mobileTitleLine}>Training</span></div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.useCaseCheckWrap} aria-hidden="true">

                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />

                                </div>

                            </div>

                            <div className={styles.frameParent22}>

                                <div className={styles.frameWrapper12}>

                                    <div className={styles.frameWrapper13}>

                                        <div className={styles.frameWrapper13}>

                                            <div className={styles.volunteerOnboardingWrapper}>

                                                <div className={styles.leadershipTraining}><span className={styles.mobileTitleLine}>Compliance</span>{" "}<span className={styles.mobileTitleLine}>Training</span></div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.useCaseCheckWrap} aria-hidden="true">

                                    <Image className={styles.frameChild8} src="/icons/designcheckmark.svg" width={40} height={40} sizes="40px" alt="" aria-hidden="true" />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.ngoChild}>

                    <div className={styles.frameWrapper29}>

                        <div className={styles.frameParent30}>

                            <div className={styles.frameParent31}>

<div className={styles.frameChild15}>
  <span>NeuroLXP</span>
  <sup
    aria-label="trademark"
    style={{
      display: "inline-block",
      fontSize: "10.8px",
      lineHeight: "6px",
      fontWeight: 700,
      marginLeft: "2px",
      position: "relative",
      top: "-6px",
      color: "#2D4CC8",
      whiteSpace: "nowrap",
    }}
  >
    TM
  </sup>

  <span
    style={{
      display: "inline-block",
      width: "6px",
    }}
    aria-hidden="true"
  />

  <span>Benefits</span>
</div>
                                <h2 className={styles.benefitsForNgosContainer} style={{ margin: 0, fontWeight: 700 }}>Benefits for NGOs <span className={styles.headingAccent}>Organizations</span></h2>

                                <div className={styles.neurolxpHelpsNonprofits2}>NeuroLXP helps nonprofits build stronger teams, empower communities, and amplify social impact through structured learning.<br /><br /><br /><br /></div>

                            </div>

                            <div className={styles.frameParent32}>

                                <div className={styles.frameParent33}>

                                    <div className={styles.frameChild16}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>

                                    <div className={styles.empoweredTeams}>Empowered Teams</div>

                                </div>

                                <div className={styles.frameParent33}>

                                    <div className={styles.frameChild16}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>

                                    <div className={styles.missionDrivenGrowth}>Mission-Driven Growth</div>

                                </div>

                                <div className={styles.frameParent33}>

                                    <div className={styles.frameChild16}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>

                                    <div className={styles.higherLearnerEngagement}>Higher Learner Engagement</div>

                                </div>

                                <div className={styles.frameParent33}>

                                    <div className={styles.frameChild19}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>

                                    <div className={styles.smarterLearningManagement}>Smarter Learning Management</div>

                                </div>

                                <div className={styles.frameParent33}>

                                    <div className={styles.frameChild16}><div className={styles.benefitCheckInner} aria-hidden="true"><Image className={styles.benefitCheckIcon} src="/icons/green.svg" width={24} height={24} sizes="24px" alt="" aria-hidden="true" /></div></div>

                                    <div className={styles.measurableSocialImpact}>Measurable Social Impact</div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent38}>

                    <div

                        className={styles.ngoExpertButtonSlot}

                        data-expert-button-slot

                    />

                    <div className={styles.frameParent39}>

                        <div

                                    className={styles.frameChild21}

                                    style={{

                                        display: "inline-flex",

                                        alignItems: "center",

                                        justifyContent: "center",

                                        overflow: "visible",

                                    }}

                                >

                                   <span

  style={{

    display: "inline-flex",

    alignItems: "flex-start",

    whiteSpace: "nowrap",

  }}

>

  <span>NeuroLXP</span>

  <sup

    aria-label="trademark"

    style={{

      display: "inline-block",

      fontSize: "10.8px",

      lineHeight: "14px",

      fontWeight: 700,

      marginLeft: "3px",

      position: "relative",

      top: "-7px",

      color: "#2D4CC8",

      flexShrink: 0,

    }}

  >

    TM

  </sup>

</span>

                                </div>

                        <div className={styles.enablingLearningForSocialIParent}>

                            <h2 className={styles.enablingLearningFor} style={{ margin: 0, fontWeight: 700 }}>Enabling Learning for Social <span className={styles.headingAccent}>Impact</span></h2>

                            <div className={styles.withFlexibleLearning}>Build stronger teams and lasting social impact with scalable, collaborative learning.</div>

                        </div>

                    </div>

                    <div className={styles.frameWrapper30}>

                        <div className={styles.happyStudentsGraduationCereParent}>

                            <div className={styles.happyStudentsGraduationCere} aria-hidden="true" />



<div className={styles.bottomVideoZoom}>
    <iframe
        className={styles.groupTeenagersDiscussingUniIcon}
        ref={bottomVideoRef}
        src="https://www.youtube.com/embed/DsdKAC0rGeQ?autoplay=1&mute=1&loop=1&playlist=DsdKAC0rGeQ&playsinline=1&controls=0&enablejsapi=1"
        title="NeuroLXP social impact video"
        loading="eager"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
    />
</div>


                            {!isBottomVideoPlaying && (

                                <button type="button" className={`${styles.frameChild22} ${styles.videoPlayButton}`} onClick={toggleBottomVideo} aria-label="Play NeuroLXP social impact video">

                                    <Image className={styles.videoPlayIcon} src="/icons/videosymbol.svg" width={106} height={106} sizes="106px" alt="" aria-hidden="true" />

                                </button>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </main>

            <Footer />

        </>

    );

};

export default NGO;
