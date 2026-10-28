import type { NextPage } from 'next';

import Image from "next/image";

import './mobile-learning.css';

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";



const MobileLearning: NextPage = () => {

    return (

            <>

            <Header />

            <main id="main-content" className="mobileLearning" tabIndex={-1}>

                <nav className="frameDiv" aria-label="Breadcrumb">

                    <div className="featuresWrapper">

                        <span className="addOnModules">Features</span>

                    </div>

                    <Image

                        className="breadcrumbArrow"

                        src="/icons/arrow-right-double.svg"

                        width={16}

                        height={16}

                        alt=""

                        aria-hidden="true"

                    />

                    <div className="featuresWrapper">

                        <span className="addOnModules">Add-On Modules</span>

                    </div>

                    <Image

                        className="breadcrumbArrow"

                        src="/icons/arrow-right-double.svg"

                        width={16}

                        height={16}

                        alt=""

                        aria-hidden="true"

                    />

                    <div className="arrowRightDoubleGroup">

                        <b className="addOnModules">Mobile Learning</b>

                    </div>

                </nav>

                <section className="mobileHero" aria-labelledby="mobile-learning-title">

                <div className="mobileHeroInner">

                    <div className="mobileHeroContent">

                        <div className="mobileHeroBadge">Mobile Learning</div>

                        <h1 id="mobile-learning-title" className="mobileHeroTitle">

                            <span>Learn Anytime! Anywhere!</span>

                            <span className="mobileHeroTitleAccent">On Any Device!</span>

                        </h1>

                        <p className="mobileHeroDescription">

                            NeuroLXP enables seamless learning across smartphones and tablets.

                        </p>

                        <div className="mobileHeroFeatures">

                            <div className="mobileHeroFeature mobileHeroFeatureBlue">Mobile First</div>

                            <div className="mobileHeroFeature mobileHeroFeaturePink">Cloud Access</div>

                            <div className="mobileHeroFeature mobileHeroFeatureGreen">Flexible Learning</div>

                        </div>

                        <BookDemoTrigger className="mobileHeroButton">

                            Book a Demo

                        </BookDemoTrigger>

                    </div>

                    <div className="mobileHeroVisual">

                        <Image

                            className="mobileHeroImage"

                            src="/images/front-view-young-female-student-grey-coat-with-copybooks-using-phone-pink-background-lessons-university-college-study 1.png"

                            alt="Learner using a smartphone"

                            width={620}

                            height={720}

                            sizes="(max-width: 900px) 100vw, 48vw"

                            priority

                        />

                    </div>

                </div>

            </section>

            <section className="routineSection" aria-labelledby="routine-title">

                <div className="routinePanel">


                    <div className="routineHeader">

                        <div className="routineBadge">Flexible Learning Access</div>

                        <h2 id="routine-title" className="routineTitle"><span className="routineTextLine">Learning That</span>{" "}<span className="routineTextLine">Fits Your <span className="microTitleAccent">Routine</span></span></h2>

                        <p className="routineSubtitle"><span className="routineTextLine">Learn anytime, anywhere,</span>{" "}<span className="routineTextLine">at your own pace.</span></p>

                    </div>

                    <div className="routineStats">

                        <div className="routineStat routineStatGreen">

                            <div className="routineStatRing">

                                <strong>24/7</strong>

                                <span>Learning<br />Access</span>

                            </div>

                        </div>

                        <div className="routineStat routineStatPurple">

                            <div className="routineStatRing">

                                <strong>100%</strong>

                                <span>Responsive<br />Layout</span>

                            </div>

                        </div>

                        <div className="routineStat routineStatPink">

                            <div className="routineStatRing">

                                <strong>3<em className="plus">+</em></strong>

                                <span>Supported<br />Device</span>

                            </div>

                        </div>

                    </div>

                    <div className="routineFeatures">

                        <div className="routineFeature">

                            <Image src="/icons/globe-02.svg" className="routineFeatureIcon" width={34} height={34} alt="" />

                            <span>Access Courses from Anywhere</span>

                        </div>

                        <div className="routineFeature">

                            <Image src="/icons/refresh-03.svg" className="routineFeatureIcon" width={34} height={34} alt="" />

                            <span>Continue Learning on the Go</span>

                        </div>

                        <div className="routineFeature">

                            <Image src="/icons/smartphonepurple.svg" className="routineFeatureIcon" width={34} height={34} alt="" />

                            <span>Review Resources Anytime</span>

                        </div>

                        <div className="routineFeature">

                            <Image src="/icons/chart-uporangeup.svg" className="routineFeatureIcon" width={34} height={34} alt="" />

                            <span>Track Progress Across Devices</span>

                        </div>

                        <div className="routineFeature">

                            <Image src="/icons/user-group-02lightgreen.svg" className="routineFeatureIcon" width={34} height={34} alt="" />

                            <span>Connect with Instructors &amp; Peers</span>

                        </div>

                    </div>

                </div>

            </section>

                <section className="microSection" aria-labelledby="microlearning-title">

                    <div className="microContent">

                        <div className="microBadge">Micro Learning</div>

                        <h2 id="microlearning-title" className="microTitle">

                            <span>Short Lessons! </span>

                            <span className="microTitleAccent">Focused</span>

                            <span className="microTitleAccent microTitleSecondLine">Learning!</span>

                        </h2>

                        <p className="microDescription">

                            Break learning into quick, manageable experiences that fit busy schedules.

                        </p>

                    </div>

                    <div className="microBenefits">

                        <div className="microBenefit microBenefitPink">

                            <div className="microIconCircle">

                                <Image

                                    className="microCheckIcon"

                                    src="/icons/tick-03.svg"

                                    width={38}

                                    height={38}

                                    alt=""

                                />

                            </div>

                            <span className="microBenefitDesktop">Learn In Small, Focused Segments</span>

                            <span className="microBenefitMobile">Learn in Short Lessons</span>

                        </div>

                        <div className="microBenefit microBenefitPurple">

                            <div className="microIconCircle">

                                <Image

                                    className="microCheckIcon"

                                    src="/icons/tick-03.svg"

                                    width={38}

                                    height={38}

                                    alt=""

                                />

                            </div>

                            <span className="microBenefitDesktop">Revise Concepts Quickly</span>

                            <span className="microBenefitMobile">Revise Quickly</span>

                        </div>

                        <div className="microBenefit microBenefitBlue">

                            <div className="microIconCircle">

                                <Image

                                    className="microCheckIcon"

                                    src="/icons/tick-03.svg"

                                    width={38}

                                    height={38}

                                    alt=""

                                />

                            </div>

                            <span className="microBenefitDesktop">Build Consistent Learning Habits</span>

                            <span className="microBenefitMobile">Build Learning Habits</span>

                        </div>

                        <div className="microBenefit microBenefitTeal">

                            <div className="microIconCircle">

                                <Image

                                    className="microCheckIcon"

                                    src="/icons/tick-03.svg"

                                    width={38}

                                    height={38}

                                    alt=""

                                />

                            </div>

                            <span className="microBenefitDesktop">Stay Engaged, Stress-Free</span>

                            <span className="microBenefitMobile">Stay Stress-Free</span>

                        </div>

                    </div>

                </section>

                <section className="interactiveSection" aria-labelledby="interactive-learning-title">

                    <svg

                        className="interactiveSectionBackground"

                        viewBox="24 0 1440 600"

                        fill="none"

                        aria-hidden="true"

                        preserveAspectRatio="none"

                    >

                        <g filter="url(#interactiveOuterShadow)">

                            <path

                                d="M24 30H1464V468.293C1464 468.293 1027.32 572.437 741 575.906C458.343 579.33 24 488.247 24 488.247V30Z"

                                fill="#DFE6E9"

                            />

                        </g>

                        <g filter="url(#interactiveInnerShadow)">

                            <path

                                d="M24 0H1464V446.32C1464 446.32 1027.32 552.372 741 555.904C458.343 559.391 24 466.64 24 466.64V0Z"

                                fill="#DFE6E9"

                            />

                            <path

                                d="M24 0H1464V446.32C1464 446.32 1027.32 552.372 741 555.904C458.343 559.391 24 466.64 24 466.64V0Z"

                                fill="url(#interactiveChevronPattern)"

                                fillOpacity="0.11"

                            />

                        </g>

                        <defs>

                            <filter

                                id="interactiveOuterShadow"

                                x="0"

                                y="6"

                                width="1488"

                                height="594"

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

                                <feBlend mode="normal" in2="BackgroundImageFix" result="shadow1" />

                                <feColorMatrix

                                    in="SourceAlpha"

                                    type="matrix"

                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

                                    result="hardAlpha2"

                                />

                                <feOffset dx="-8" dy="-8" />

                                <feGaussianBlur stdDeviation="8" />

                                <feComposite in2="hardAlpha2" operator="out" />

                                <feColorMatrix

                                    type="matrix"

                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

                                />

                                <feBlend mode="normal" in2="shadow1" result="shadow2" />

                                <feBlend mode="normal" in="SourceGraphic" in2="shadow2" result="shape" />

                            </filter>

                            <filter

                                id="interactiveInnerShadow"

                                x="16"

                                y="-8"

                                width="1456"

                                height="572"

                                filterUnits="userSpaceOnUse"

                                colorInterpolationFilters="sRGB"

                            >

                                <feFlood floodOpacity="0" result="BackgroundImageFix" />

                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

                                <feColorMatrix

                                    in="SourceAlpha"

                                    type="matrix"

                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

                                    result="hardAlpha"

                                />

                                <feOffset dx="8" dy="8" />

                                <feGaussianBlur stdDeviation="8" />

                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />

                                <feColorMatrix

                                    type="matrix"

                                    values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"

                                />

                                <feBlend mode="normal" in2="shape" result="inner1" />

                                <feColorMatrix

                                    in="SourceAlpha"

                                    type="matrix"

                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

                                    result="hardAlpha2"

                                />

                                <feOffset dx="-8" dy="-8" />

                                <feGaussianBlur stdDeviation="8" />

                                <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />

                                <feColorMatrix

                                    type="matrix"

                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

                                />

                                <feBlend mode="normal" in2="inner1" result="inner2" />

                            </filter>

                            <pattern

                                id="interactiveChevronPattern"

                                width="40"

                                height="24"

                                patternUnits="userSpaceOnUse"

                            >

                                <path

                                    d="M-10 0L0 10L10 0M10 0L20 10L30 0M30 0L40 10L50 0"

                                    stroke="#879398"

                                    strokeWidth="2"

                                    fill="none"

                                />

                                <path

                                    d="M-10 12L0 22L10 12M10 12L20 22L30 12M30 12L40 22L50 12"

                                    stroke="#879398"

                                    strokeWidth="2"

                                    fill="none"

                                />

                            </pattern>

                        </defs>

                    </svg>

                    <div className="interactiveSectionInner">

                        <div className="interactiveIntro">

                            <div className="interactiveBadge">Mobile Learning</div>

                            <h2 id="interactive-learning-title" className="interactiveTitle">

                                Learn! Interact! <span className="microTitleAccent">Practice!</span>

                            </h2>

                            <p className="interactiveDescription">

                                Make mobile learning more engaging with interactive activities designed for active participation.

                            </p>

                        </div>

                        <div className="interactiveCards">

                            <div className="interactiveCard">

                                <div className="interactiveCardInner interactiveCardPink">

                                    <strong>Interactive<br className="interactiveCardDesktopBreak" />{" "}Quizzes</strong>

                                </div>

                            </div>

                            <div className="interactiveCard">

                                <div className="interactiveCardInner interactiveCardPurple">

                                    <strong>Gamified<br className="interactiveCardDesktopBreak" />{" "}Learning</strong>

                                </div>

                            </div>

                            <div className="interactiveCard">

                                <div className="interactiveCardInner interactiveCardBlue">

                                    <strong>Discussion<br className="interactiveCardDesktopBreak" />{" "}Forums</strong>

                                </div>

                            </div>

                            <div className="interactiveCard">

                                <div className="interactiveCardInner interactiveCardGreen">

                                    <strong>Interactive<br className="interactiveCardDesktopBreak" />{" "}Explorations</strong>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="modernLearningSection" aria-labelledby="modern-learning-title">

                    <div className="modernLearningTop">

                        <div className="modernLearningBadge">Flexible Learning Access</div>

                        <h2

                            id="modern-learning-title"

                            className="modernLearningTitle"

                            aria-label="Learning notifications that fit your routine"

                        >

                            Learning That Fits Your <span className="microTitleAccent">Routine</span>

                        </h2>

                        <p className="modernLearningSubtitle">

                            Learn anytime, anywhere, at your own pace.

                        </p>

                        <div className="modernLearningPills">

                            <div className="modernLearningPill modernLearningPillBlue">

                                New Course Releases

                            </div>

                            <div className="modernLearningPill modernLearningPillPink">

                                Assignment Deadlines

                            </div>

                            <div className="modernLearningPill modernLearningPillOrange">

                                Discussion Updates

                            </div>

                            <div className="modernLearningPill modernLearningPillTeal">

                                Assessment Reminders

                            </div>

                            <div className="modernLearningPill modernLearningPillPurple">

                                Certificates Earned

                            </div>

                        </div>

                    </div>

                    <div className="modernLearningBottom">

                        <h2 className="modernBuiltTitle">Built for Modern <span className="microTitleAccent">Learning</span></h2>

                        <p className="modernBuiltDescription">

                            Mobile accessibility supports continuous learning across academic,

                            professional, and remote learning environments.

                        </p>

                        <div className="modernLearningCards">

                            <div className="modernLearningCard">

                                <div className="modernLearningIconShell modernLearningIconPink">

                                    <Image

                                        src="/icons/student.svg"

                                        width={34}

                                        height={34}

                                        alt=""

                                    />

                                </div>

                                <strong>Universities</strong>

                            </div>

                            <div className="modernLearningCard">

                                <div className="modernLearningIconShell modernLearningIconOrange">

                                    <Image

                                        src="/icons/corporate.svg"

                                        width={34}

                                        height={34}

                                        alt=""

                                    />

                                </div>

                                <strong>Corporate Training</strong>

                            </div>

                            <div className="modernLearningCard">

                                <div className="modernLearningIconShell modernLearningIconTeal">

                                    <Image

                                        src="/icons/chart-up.svg"

                                        width={34}

                                        height={34}

                                        alt=""

                                    />

                                </div>

                                <strong>Career Development</strong>

                            </div>

                            <div className="modernLearningCard">

                                <div className="modernLearningIconShell modernLearningIconGreen">

                                    <Image

                                        src="/icons/globe-02.svg"

                                        width={34}

                                        height={34}

                                        alt=""

                                    />

                                </div>

                                <strong>Remote Learning</strong>

                            </div>

                            <div className="modernLearningCard">

                                <div className="modernLearningIconShell modernLearningIconPurple">

                                    <Image

                                        src="/icons/school.svg"

                                        width={34}

                                        height={34}

                                        alt=""

                                    />

                                </div>

                                <strong>Schools</strong>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="limitsSection" aria-labelledby="learning-without-limits-title">

                    <svg

                        className="limitsPolygon"

                        width="1334"

                        height="586"

                        viewBox="0 0 1334 586"

                        fill="none"

                        xmlns="http://www.w3.org/2000/svg"

                        xmlnsXlink="http://www.w3.org/1999/xlink"

                        aria-hidden="true"

                        preserveAspectRatio="none"

                    >

                        <g filter="url(#filter0_dd_5110_1203)">

                            <ellipse cx="667" cy="293" rx="643" ry="269" fill="#DFE6E9" />

                            <ellipse

                                cx="667"

                                cy="293"

                                rx="643"

                                ry="269"

                                fill="url(#pattern0_5110_1203)"

                                fillOpacity="0.05"

                            />

                        </g>

                        <defs>

                            <filter

                                id="filter0_dd_5110_1203"

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

                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5110_1203" />

                                <feColorMatrix

                                    in="SourceAlpha"

                                    type="matrix"

                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

                                    result="hardAlpha2"

                                />

                                <feOffset dx="-8" dy="-8" />

                                <feGaussianBlur stdDeviation="8" />

                                <feComposite in2="hardAlpha2" operator="out" />

                                <feColorMatrix

                                    type="matrix"

                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

                                />

                                <feBlend mode="normal" in2="effect1_dropShadow_5110_1203" result="effect2_dropShadow_5110_1203" />

                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5110_1203" result="shape" />

                            </filter>

                            <pattern

                                id="pattern0_5110_1203"

                                patternContentUnits="objectBoundingBox"

                                width="0.0186625"

                                height="0.0892193"

                            >

                                <use

                                    xlinkHref="#image0_5110_1203"

                                    transform="scale(0.000777605 0.00185874)"

                                />

                            </pattern>

                            <image

                                id="image0_5110_1203"

                                width="24"

                                height="48"

                                preserveAspectRatio="none"

                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAYAAAALiLqjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAARBJREFUeAHtlrENwjAQRf9FHiAjMAJswAgwAiNQUoAVKBAVI7ACI7ABjMAItEQmR4wESpASLj5RRPJvouis/2zFd/mELy1XG66+b9ZLgkIJ/qwIiAC9DBSydjso4A7EGJbNk4JwTODmWZZd32uCT+DNmd0ZjPHL3IsxKdicrbUDNaDc+f5jXFf6KMxBDfC7bSoRYagGlAPq1lJO1QAmXJqLOKoBOcys4RS3PHFzNWCXLa53MiN/Nd/GzDjl5Ea7yjVV9YGHlI9p25o4iyKgBwBV5vH6laPiN4iAHgBq/wNJzumqpGouyTnBAGnOCQZIc04wQJpzggHSnBMMkOacYIA053RVrQ8kOaer4iyKgB4AnrPke6dH3TzTAAAAAElFTkSuQmCC"

                            />

                        </defs>

                    </svg>

                    <div className="limitsContent">

<div className="limitsBadge">
  NeuroLXP
  <sup className="limitsTrademark">TM</sup>
</div>
                        <h2 id="learning-without-limits-title" className="limitsTitle">

                            Learning Without <span className="microTitleAccent">Limits</span>

                        </h2>

                        <p className="limitsDescription">

                            NeuroLXP enables interactive, mobile-first learning anytime, anywhere

                            at your own pace.

                        </p>

                        <BookDemoTrigger className="limitsButton">

                            Book a Demo

                        </BookDemoTrigger>

                    </div>

                </section>

            </main>

            <Footer />

        </>

    );

};

export default MobileLearning;
