"use client";



import { useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import Image from "next/image";

import styles from "./learning.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";



export default function LearningCommunitySupport() {

    const videoRef = useRef<HTMLIFrameElement>(null);

    const [isVideoPlaying, setIsVideoPlaying] = useState(true);

    const router = useRouter();



    
const toggleVideoPlayback = () => {
    const iframe = videoRef.current;
    if (!iframe) return;

    const shouldPlay = !isVideoPlaying;

    iframe.contentWindow?.postMessage(
        JSON.stringify({
            event: "command",
            func: shouldPlay ? "playVideo" : "pauseVideo",
            args: []
        }),
        "https://www.youtube.com"
    );

    setIsVideoPlaying(shouldPlay);
};


    return (

        <>

            <Header />

            <div className={styles.learningCommunitySupport}>

            <div className={styles.frameDiv}>

                <div className={styles.featuresWrapper}>

                    <div className={styles.augmentation}>Features</div>

                </div>

                <div className={styles.homeParent}>

                    <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />

                    <div className={styles.featuresWrapper}>

                        <div className={styles.augmentation}>Augmentation</div>

                    </div>

                </div>

                <div className={styles.arrowRightDoubleGroup}>

                    <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />

                    <h3 className={styles.augmentation} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>{`Learning Community`}</h3>

                </div>

            </div>

            <div className={styles.rectangleParent}>

                <div className={styles.rectangle} />

                <div className={styles.image20} />

                <div className={styles.groupMultiethnicBusinessPeo} />

                <div className={styles.frameInner}>

                    <svg

                        className={styles.frameInnerShape}

                        width="720"

                        height="652"

                        viewBox="0 0 720 652"

                        fill="none"

                        xmlns="http://www.w3.org/2000/svg"

                        aria-hidden="true"

                        focusable="false"

                    >

                        <g filter="url(#userSupportRightFrameShadow)">

                            <path

                                d="M96.1406 0H720V652H96.1406C96.1406 652 -3.36036 449.622 0.0875835 311C3.25681 183.584 96.1406 0 96.1406 0Z"

                                fill="#DFE6E9"

                            />

                        </g>

                        <defs>

                            <filter

                                id="userSupportRightFrameShadow"

                                x="-8"

                                y="-8"

                                width="736"

                                height="668"

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

                                <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />

                                <feColorMatrix

                                    in="SourceAlpha"

                                    type="matrix"

                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

                                    result="hardAlpha"

                                />

                                <feOffset dx="-8" dy="-8" />

                                <feGaussianBlur stdDeviation="8" />

                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />

                                <feColorMatrix

                                    type="matrix"

                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"

                                />

                                <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />

                            </filter>

                        </defs>

                    </svg>



                    <Image

                        className={styles.rectangleIcon}

                        src="/images/limages.webp"

                        width={667}

                        height={616}

                        sizes="(max-width: 768px) 100vw, 667px"

                        alt="Learners collaborating around a laptop"

                    />

                </div>

                <div className={styles.frameParent2}>

                    <div className={styles.frameWrapper}>

                        <div className={styles.frameParent3}>

                            <div className={styles.frameParent4}>

                                <div className={styles.userSupportSocialLearning}>Learning Community</div>

                                <h1 className={styles.learnTogetherStay} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Learn Together! Stay <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Connected</span></h1>

                            </div>

                            <div className={styles.neurolxpCombinesSupport}>NeuroLXP combines support, collaboration, and social learning in one connected experience.</div>

                        </div>

                    </div>

                    <div className={styles.frameWrapper2}>

                        <div className={styles.frameWrapper3}>

                            <div className={styles.frameWrapper4}>

                                <BookDemoTrigger className={styles.bookADemoWrapper}>

                                    <div className={styles.bookADemo}>Book a Demo</div>

                                </BookDemoTrigger>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.frameParent5}>

                <div className={styles.frameWrapper5}>

                    <div className={styles.frameWrapper6}>

                        <div className={styles.frameParent6}>

                            <div className={styles.frameChild2}>

                                Always-On Learning Support

                            </div>

                            <div className={styles.getTheHelpYouNeedWhenYoParent}>

                                <h2 className={styles.getTheHelp} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Get the help you need! When you need it
                                    {/* <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>it</span> */}
                                    </h2>

                                <div className={styles.neurolxpKeepsLearners}>NeuroLXP keeps learners and educators supported with</div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent7}>

                    <div className={styles.frameParent8}>

                        <div className={styles.ellipseParent}>

                            <div className={styles.ellipseDiv} />

                            <div className={styles.ellipseGroup}>

                                <div className={styles.frameChild3} />

                                <h3 className={styles.helpdeskTechnical} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>{`Helpdesk & technical support`}</h3>

                            </div>

                        </div>

                        <div className={styles.ellipseContainer}>

                            <div className={styles.ellipseDiv} />

                            <div className={styles.ellipseGroup}>

                                <div className={styles.frameChild3} />

                                <h3 className={styles.guidedOnboarding} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Guided onboarding</h3>

                            </div>

                        </div>

                    </div>

                    <div className={styles.frameParent9}>

                        <div className={styles.ellipseParent}>

                            <div className={styles.ellipseDiv} />

                            <div className={styles.ellipseGroup}>

                                <div className={styles.frameChild3} />

                                <h3 className={styles.faqsKnowledge} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>{`FAQs & knowledge base`}</h3>

                            </div>

                        </div>

                        <div className={styles.ellipseParent5}>

                            <div className={styles.ellipseDiv} />

                            <div className={styles.ellipseGroup}>

                                <div className={styles.frameChild3} />

                                <h3 className={styles.inPlatformGuidance} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>In-platform guidance</h3>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.vectorParent}>

                <svg

                    className={styles.frameChild10}

                    width="1440"

                    height="574"

                    viewBox="0 0 1440 574"

                    fill="none"

                    xmlns="http://www.w3.org/2000/svg"

                    aria-hidden="true"

                    focusable="false"

                >

                    <g filter="url(#learningBetterTogetherShadow)">

                        <path

                            d="M0 24H1440V446.311L717 550L0 465.538V24Z"

                            fill="#DFE6E9"

                        />

                    </g>



                    <defs>

                        <filter

                            id="learningBetterTogetherShadow"

                            x="-24"

                            y="0"

                            width="1488"

                            height="574"

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

                            <feBlend

                                mode="normal"

                                in2="BackgroundImageFix"

                                result="effect1DropShadow"

                            />

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

                            <feBlend

                                mode="normal"

                                in2="effect1DropShadow"

                                result="effect2DropShadow"

                            />

                            <feBlend

                                mode="normal"

                                in="SourceGraphic"

                                in2="effect2DropShadow"

                                result="shape"

                            />

                        </filter>

                    </defs>

                </svg>

                <div className={styles.frameParent10}>

                    <div className={styles.frameWrapper7}>

                        <div className={styles.frameParent11}>

                            <div className={styles.frameChild11}>Learning is Better Together</div>

                            <div className={styles.getTheHelpYouNeedWhenYoParent}>

                                <h2 className={styles.connectBeyondThe} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Connect Beyond the <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Classroom</span></h2>

                                <div className={styles.connectWithPeers}>Connect with peers, educators, and experts to share  collaborate, and learn from each other.</div>

                            </div>

                        </div>

                    </div>

                    <div className={styles.frameParent12}>

                        <div className={`${styles.frameWrapper8} ${styles.communityCard}`} tabIndex={0}>

                            <div className={styles.discussionForumsParent}>

                                <h3 className={styles.discussionForums} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Discussion Forums</h3>

                                <div className={styles.askQuestionsExchange}>Ask questions, exchange ideas, and explore topics together</div>

                            </div>

                        </div>

                        <div className={`${styles.frameWrapper9} ${styles.communityCard}`} tabIndex={0}>

                            <div className={styles.learningCommunitiesParent}>

                                <h3 className={styles.learningCommunities} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Learning Communities</h3>

                                <div className={styles.createDedicatedSpaces}>Create dedicated spaces for courses, groups, projects and shared interests</div>

                            </div>

                        </div>

                        <div className={`${styles.frameWrapper10} ${styles.communityCard}`} tabIndex={0}>

                            <div className={styles.discussionForumsParent}>

                                <h3 className={styles.discussionForums} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Peer Collaboration</h3>

                                <div className={styles.askQuestionsExchange}><span style={{ display: "block", whiteSpace: "nowrap" }}>Learn from different perspectives</span><span style={{ display: "block", whiteSpace: "nowrap" }}>and solve problems together</span></div>

                            </div>

                        </div>

                        <div className={`${styles.frameWrapper11} ${styles.communityCard}`} tabIndex={0}>

                            <div className={styles.discussionForumsParent}>

                                <h3 className={styles.discussionForums} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Expert Connect</h3>

                                <div className={styles.askQuestionsExchange}><span style={{ display: "block", whiteSpace: "nowrap" }}>Get guidance and insights from</span><span style={{ display: "block", whiteSpace: "nowrap" }}>educators and experts</span></div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.frameParent13}>

                <div className={styles.frameWrapper12}>

                    <div className={styles.peopleTakingPartBusinessEvParent}>

                        <div className={styles.peopleTakingPartBusinessEv} />

                        <div className={styles.image21} />

                        <div className={styles.groupYoungBusinesspeopleUsi} />



                        <div className={styles.frameParent14}>

                            <div className={styles.frameWrapper13}>

                                <div className={styles.officeDesktopWithLaptopBusParent}>

                                    
<iframe
    ref={videoRef}
    className={styles.officeDesktopWithLaptopBusIcon}
    src="https://www.youtube.com/embed/jyj5Licgxw0?autoplay=1&mute=1&loop=1&playlist=jyj5Licgxw0&playsinline=1&controls=0&enablejsapi=1"
    title="Learning community collaboration video"
    allow="autoplay; encrypted-media; picture-in-picture"
    loading="eager"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
/>


                                    {!isVideoPlaying && (

                                        <button

                                            type="button"

                                            className={styles.videoControlButton}

                                            onClick={toggleVideoPlayback}

                                            aria-label="Play video"

                                        >

                                            <Image

                                                className={styles.videoControlIcon}

                                                src="/icons/videosymbol.svg"

                                                width={64}

                                                height={64}

                                                sizes="64px"

                                                alt=""

                                                aria-hidden="true"

                                            />

                                        </button>

                                    )}

                                </div>

                            </div>

                            <div className={styles.frameParent15}>

                                <div className={styles.frameWrapper14}>

                                    <div className={styles.frameWrapper15}>

                                        <div className={styles.frameWrapper16}>

                                            <div className={styles.shareKnowledgeBuildConfideParent}>

                                                <h2 className={styles.shareKnowledgeBuild} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Share Knowledge! Build <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Confidence</span></h2>

                                                <div className={styles.learnersCanActively}>Learners can actively contribute to the learning community by sharing what they know and learning from others.</div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.frameParent16}>

                                    <div className={styles.frameParent17}>

                                        <div className={styles.arrowDownBigParent}>

                                            <Image className={styles.arrowDownBigIcon} src="/icons/arrowpink.svg" width={36} height={36} sizes="100vw" alt="" />

                                            <div className={styles.shareIdeasAnd}>Share ideas and resources</div>

                                        </div>

                                        <div className={styles.arrowDownBigParent}>

                                            <Image className={styles.arrowDownBigIcon2} src="/icons/arrowpurple.svg" width={36} height={36} sizes="100vw" alt="" />

                                            <div className={styles.askQuestionsAnd}>Ask questions and seek guidance</div>

                                        </div>

                                    </div>

                                    <div className={styles.frameParent18}>

                                        <div className={styles.arrowDownBigParent}>

                                            <Image className={styles.arrowDownBigIcon} src="/icons/arrowbrown.svg" width={36} height={36} sizes="100vw" alt="" />

                                            <div className={styles.collaborateOnProjects}>Collaborate on projects and problems</div>

                                        </div>

                                        <div className={styles.arrowDownBigParent}>

                                            <Image className={styles.arrowDownBigIcon} src="/icons/arrowblue.svg" width={36} height={36} sizes="100vw" alt="" />

                                            <div className={styles.exchangeKnowledgeAnd} style={{ whiteSpace: "nowrap" }}>Share knowledge and feedback</div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent19}>

                    <div className={styles.rectangleGroup}>

                        <div className={styles.rectangle2} />

                        <div className={styles.image202} />

                        <div className={styles.frameParent20}>

                            {/* <Image className={styles.frameChild14} width={295.8} height={50.2} sizes="100vw" alt="" /> */}

                            <div className={styles.getTheHelpYouNeedWhenYoParent}>

                                <h2 className={styles.connectBeyondThe} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Connect Beyond the <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Classroom</span></h2>

                                <div className={styles.connectWithPeers}>Connect with peers, educators, and experts to share  collaborate, and learn from each other.</div>

                            </div>

                        </div>

                    </div>

                    <Image

                        className={styles.safeSpaceBackground}

                        src="/images/social_lerningbg.webp"

                        width={1259}

                        height={500}

                        sizes="(max-width: 1280px) 100vw, 1259px"

                        alt=""

                        aria-hidden="true"

                    />

                    <div className={styles.rectangleContainer}>

                        <div className={styles.rectangle3} />

                        <div className={styles.image203} />

                        <div className={styles.frameParent21}>

                            <div className={styles.frameParent22}>

                                <div className={styles.learnWithConfidence}>Learn with Confidence</div>

                                <div className={styles.safeSpaceContent}>

                                    <h2 className={styles.safeSpaceTitle}>A Safe Space to Learn and <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Participate</span></h2>

                                    <p className={styles.neurolxpCreatesSafe}>NeuroLXP creates safe, structured communities where learners can confidently ask, share, and collaborate.</p>

                                </div>

                            </div>

                            <p className={styles.everyQuestionMatters}>Every Question Matters! Every Voice Counts</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.frameParent40}>

                <div className={styles.frameParent41}>

                    <div className={styles.frameParent42}>

                        <div className={styles.frameParent22}>

                            <div className={styles.frameChild26}>From Support to Social Learning</div>

                            <div className={styles.getTheHelpYouNeedWhenYoParent}>

                                <h2 className={styles.connectBeyondThe} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Everything Learners Need to Stay <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Connected</span></h2>

                                <div className={styles.neurolxpCreatesSafe}><span style={{ whiteSpace: "nowrap" }}>NeuroLXP connects support and collaboration</span><br /><span style={{ whiteSpace: "nowrap" }}>across the learning journey.</span></div>

                            </div>

                        </div>

                        <div className={styles.frameParent44}>

                            <div className={styles.frameParent45}>

                                <div className={styles.frameParent46}>

                                    <div className={styles.frameChild27}>

                                        <div className={styles.supportIconInner}>

                                            <Image

                                                className={styles.supportIcon}

                                                src="/icons/headset.svg"

                                                width={34}

                                                height={34}

                                                sizes="34px"

                                                alt="Get support"

                                            />

                                        </div>

                                    </div>

                                    <div className={styles.getSupportParent}>

                                        <h3 className={styles.getSupport} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Get Support</h3>

                                        <div className={styles.findAnswersAnd}>Find answers and guidance when you need them</div>

                                    </div>

                                </div>

                                <div className={styles.frameParent47}>

                                    <div className={styles.frameChild27}>

                                        <div className={styles.supportIconInner}>

                                            <Image

                                                className={styles.supportIcon}

                                                src="/icons/collabrate.svg"

                                                width={34}

                                                height={34}

                                                sizes="34px"

                                                alt="Collaborate"

                                            />

                                        </div>

                                    </div>

                                    <div className={styles.getSupportParent}>

                                        <h3 className={styles.collaborate} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Collaborate</h3>

                                        <div className={styles.workTogetherDiscuss}>Work together, discuss ideas, and solve problems</div>

                                    </div>

                                </div>

                                <div className={styles.frameParent48}>

                                    <div className={styles.frameChild27}>

                                        <div className={styles.supportIconInner}>

                                            <Image

                                                className={styles.supportIcon}

                                                src="/icons/plant.svg"

                                                width={34}

                                                height={34}

                                                sizes="34px"

                                                alt="Grow"

                                            />

                                        </div>

                                    </div>

                                    <div className={styles.getSupportParent}>

                                        <h3 className={styles.grow} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Grow</h3>

                                        <div className={styles.buildConfidenceStrengthen}>Build confidence, strengthen, and learn together</div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.frameParent49}>

                                <div className={styles.frameParent46}>

                                    <div className={styles.frameChild27}>

                                        <div className={styles.supportIconInner}>

                                            <Image

                                                className={styles.supportIcon}

                                                src="/icons/link.svg"

                                                width={34}

                                                height={34}

                                                sizes="34px"

                                                alt="Connect"

                                            />

                                        </div>

                                    </div>

                                    <div className={styles.getSupportParent}>

                                        <h3 className={styles.connect} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Connect</h3>

                                        <div className={styles.engageWithPeers}>Engage with peers, educators, and mentors</div>

                                    </div>

                                </div>

                                <div className={styles.frameParent51}>

                                    <div className={styles.frameChild27}>

                                        <div className={styles.supportIconInner}>

                                            <Image

                                                className={styles.supportIcon}

                                                src="/icons/share.svg"

                                                width={34}

                                                height={34}

                                                sizes="34px"

                                                alt="Share"

                                            />

                                        </div>

                                    </div>

                                    <div className={styles.getSupportParent}>

                                        <h3 className={styles.share} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Share</h3>

                                        <div className={styles.findAnswersAnd}>Exchange knowledge, resources, and experiences</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className={styles.frameParent52}>

                        <div className={styles.builtForEveryoneInTheLearWrapper}>

                            <h2 className={styles.builtForEveryone} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Built for Everyone in the Learning <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Ecosystem</span></h2>

                        </div>

                        <div className={styles.frameParent53}>

                            <article className={styles.ecosystemCard}>

                                <div className={styles.ecosystemCardTop}>

                                    <div className={styles.ecosystemNumber}>01</div>

                                    <h3 className={styles.ecosystemTitle}>For Learners</h3>

                                </div>

                                <p className={styles.ecosystemDescription}>

                                    Get support, connect with peers, and learn through collaboration

                                </p>

                            </article>



                            <article className={styles.ecosystemCard}>

                                <div className={styles.ecosystemCardTop}>

                                    <div className={styles.ecosystemNumber}>02</div>

                                    <h3 className={styles.ecosystemTitle}>For Educators</h3>

                                </div>

                                <p className={styles.ecosystemDescription}>

                                    Guide learners, facilitate discussions, and build active learning communities

                                </p>

                            </article>



                            <article className={styles.ecosystemCard}>

                                <div className={styles.ecosystemCardTop}>

                                    <div className={styles.ecosystemNumber}>03</div>

                                    <h3 className={styles.ecosystemTitle}>For Institutions</h3>

                                </div>

                                <p className={styles.ecosystemDescription}>

                                    Strengthen engagement, communication, and a connected learning culture

                                </p>

                            </article>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent61}>

                    <div className={styles.frameWrapper20}>

                        <div className={styles.frameWrapper16}>

                            <div className={styles.shareKnowledgeBuildConfideParent}>

                                <h2 className={styles.moreThanAn} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>More Than an LMS! A Learning <span style={{ color: "#2d4cc8", WebkitTextFillColor: "#2d4cc8" }}>Community</span></h2>

                                <div className={styles.traditionalLmsPlatforms}>Traditional LMS platforms deliver content. NeuroLXP connects learners to learn, collaborate, and grow together.<br /><br /><br /><br /></div>

                            </div>

                        </div>

                    </div>

                    <BookDemoTrigger className={styles.requestADemoWrapper}>

                        <h3 className={styles.requestADemo} style={{ display: "inline", margin: 0, padding: 0, fontWeight: "bold" }}>Book a Demo</h3>

                    </BookDemoTrigger>

                </div>

            </div>

            </div>

            <Footer />

        </>

    );

}