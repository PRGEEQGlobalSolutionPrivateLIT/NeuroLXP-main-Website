"use client";

import type { NextPage } from 'next';

import Image from "next/image";

import { useRouter } from "next/navigation";

import { useRef, useState } from "react";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import styles from "./University.module.css";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const UniversityAndCollege: NextPage = () => {

    const router = useRouter();

const supportVideoRef = useRef<HTMLIFrameElement>(null);
    const [isSupportVideoPlaying, setIsSupportVideoPlaying] = useState(true);

    
const toggleSupportVideo = () => {
  const iframe = supportVideoRef.current;

  if (!iframe) return;

  if (isSupportVideoPlaying) {
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "pauseVideo",
        args: []
      }),
      "https://www.youtube.com"
    );

    setIsSupportVideoPlaying(false);
  } else {
    iframe.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo",
        args: []
      }),
      "https://www.youtube.com"
    );

    setIsSupportVideoPlaying(true);
  }
};


    return (

        <>

            <title>university and Colleges | NeuroLXP</title>

            <div style={{ width: "100%", position: "relative", zIndex: 10000, overflow: "visible" }}>

                <Header />

            </div>

            <main id="main-content" className={styles.universityAndCollege} tabIndex={-1}>

                <nav className={styles.frameDiv} aria-label="Breadcrumb">

                    <div className={styles.ourCustomersWrapper}>

                        <div className={styles.industriesWeServe}>Our Customers</div>

                    </div>

                    <div className={styles.homeParent}>

                        <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" />

                        <div className={styles.ourCustomersWrapper}>

                            <div className={styles.industriesWeServe}>Industries we Serve</div>

                        </div>

                    </div>

                    <div className={styles.arrowRightDoubleGroup}>

                        <Image className={styles.arrowDown01Icon} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" />

                        <strong className={styles.industriesWeServe}>{`University & College`}</strong>

                    </div>

                </nav>

                <div className={styles.universityAndCollegeInner}>

                    <div className={styles.frameItem} />

                </div>

                <div className={styles.frameParent2}>

                    <div className={styles.frameParent3}>

                        <div className={styles.frameParent4}>

                            <div className={styles.frameWrapper}>

                                <div className={styles.frameParent5}>

                                    <div className={styles.frameParent6}>

                                        <div className={styles.frameInner}>University and Colleges</div>

                                        <h1 className={styles.empoweringHigherEducation} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Empowering Higher Education with Intelligent <span style={{ color: "#2D4CC8" }}>Learning</span><br /></h1>

                                    </div>

                                    <div className={styles.neurolxpEnablesUniversities}>NeuroLXP enables universities to deliver flexible, engaging learning that enhances academic excellence and career readiness.</div>

                                </div>

                            </div>

                            <div className={styles.frameParent7}>

                                <BookDemoTrigger className={styles.frameIcon}>

                                    Book a Demo

                                </BookDemoTrigger>

                                <button

                                    type="button"

                                    className={styles.frameWrapper2}

                                    onClick={() => router.push("/HomePage")}

                                >

                                    <span className={styles.startLearningWrapper}>

                                        <span className={styles.startLearning}>Start Learning</span>

                                    </span>

                                </button>

                            </div>

                        </div>

                        <div className={styles.frameWrapper3}>

                            <div className={styles.happyStudentsGraduationCereParent}>

                                <div className={styles.happyStudentsGraduationCere} />

                                <Image className={styles.groupTeenagersDiscussingUniIcon} src="/images/group-teenagers-discussing-university-project 1.png" width={1175} height={601} sizes="(max-width: 767px) 100vw, 1175px" alt="University students collaborating in a learning environment"

                                    priority

                                    fetchPriority="high"

                                />

                            </div>

                        </div>

                    </div>

                    <div className={styles.frameParent8}>

                        <div className={styles.frameParent9}>

<div className={styles.frameChild2}>
  Digital<span style={{ color: "#2D4CC8", marginLeft: "8px" }}>Learning</span>
</div>
                            <div className={styles.modernLearningForUniversitiParent}>

                                <h2 className={styles.modernLearningFor} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Modern Learning for Universities and <span style={{ color: "#2D4CC8" }}>Colleges</span><br /></h2>

                                <div className={styles.neurolxpUnifiesContent}>NeuroLXP unifies content, engagement, assessment, personalization, and analytics in one intelligent learning platform.<br /><br /></div>

                            </div>

                        </div>

                        <div className={styles.frameParent10}>

                            <div className={styles.frameWrapper4}>

                                <div className={styles.frameParent11}>

                                    <div className={styles.frameParent12}>

                                        <div className={styles.frameChild3}>

                                            <div className={`${styles.featureIconInner} ${styles.featureIconGreen}`}>

                                                <Image

                                                    className={styles.cardFeatureIcon}

                                                    src="/icons/university-bulb.svg"

                                                    width={24}

                                                    height={24}

                                                    sizes="24px"

                                                    alt=""

                                                />

                                            </div>

                                        </div>

                                        <h3 className={styles.smartLearning} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Smart Learning</h3>

                                    </div>

                                    {/* <div className={styles.flexibleLearningFor}>Flexible learning for every student</div> */}

                                </div>

                            </div>

                            <div className={styles.frameWrapper4}>

                                <div className={styles.frameParent11}>

                                    <div className={styles.frameParent12}>

                                        <div className={styles.frameChild3}>

                                            <div className={`${styles.featureIconInner} ${styles.featureIconBlue}`}>

                                                <Image

                                                    className={styles.cardFeatureIcon}

                                                    src="/icons/university-usergroup.svg"

                                                    width={24}

                                                    height={24}

                                                    sizes="24px"

                                                    alt=""

                                                />

                                            </div>

                                        </div>

                                        <h3 className={styles.smartLearning} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Engagement<br /></h3>

                                    </div>

                                    {/* <div className={styles.flexibleLearningFor}>Interactive learning experiences</div> */}

                                </div>

                            </div>

                            <div className={styles.frameWrapper4}>

                                <div className={styles.frameParent11}>

                                    <div className={styles.frameParent12}>

                                        <div className={styles.frameChild3}>

                                            <div className={`${styles.featureIconInner} ${styles.featureIconOrange}`}>

                                                <Image

                                                    className={styles.cardFeatureIcon}

                                                    src="/icons/university-analytics.svg"

                                                    width={24}

                                                    height={24}

                                                    sizes="24px"

                                                    alt=""

                                                />

                                            </div>

                                        </div>

                                        <h3 className={styles.smartLearning} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Analytics</h3>

                                    </div>

                                    {/* <div className={styles.flexibleLearningFor}>Real-time performance insights</div> */}

                                </div>

                            </div>

                            <div className={styles.frameWrapper4}>

                                <div className={styles.frameParent11}>

                                    <div className={styles.frameParent12}>

                                        <div className={styles.frameChild3}>

                                            <div className={`${styles.featureIconInner} ${styles.featureIconPurple}`}>

                                                <Image

                                                    className={styles.cardFeatureIcon}

                                                    src="/icons/university-graduationcap.svg"

                                                    width={24}

                                                    height={24}

                                                    sizes="24px"

                                                    alt=""

                                                />

                                            </div>

                                        </div>

                                        <h3 className={styles.smartLearning} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Outcomes</h3>

                                    </div>

                                    {/* <div className={styles.flexibleLearningFor}>Student success and career readiness</div> */}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent44}>

                    <div className={styles.frameParent45}>

                        <div className={styles.frameChild21}>Key Challenges</div>

                        <div className={styles.keyChallengesInHigherEducaWrapper}>

                            <h2 className={styles.keyChallengesIn} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Key Challenges in Higher <span style={{ color: "#2D4CC8" }}>Education</span><br /><br /></h2>

                        </div>

                    </div>

                    <div className={styles.frameParent46}>

                        <div className={styles.rapidSkillChangesParent}>

                            <div className={styles.rapidSkillChanges}>

                                <div className={styles.frameParent47}>

                                    <div className={styles.frameWrapper9}>

                                        <div className={styles.frameParent48}>

                                            <div className={styles.frameParent49}>

                                                <div className={`${styles.challengeIcon} ${styles.challengeIconBlue}`}>

                                                    <svg

                                                        width="24"

                                                        height="24"

                                                        viewBox="0 0 25 25"

                                                        fill="none"

                                                        className={styles.challengeIconImage}

                                                        aria-hidden="true"

                                                        focusable="false"

                                                    >

                                                        <path d="M16.0117 10.0117L18.1606 10.6582C19.5335 11.0713 20.2199 11.2778 20.6149 11.8095C21.0099 12.3412 21.0093 13.0581 21.0082 14.4917L21.0023 22.0156" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />

                                                        <path d="M8.01172 9.00586L11.0117 9.00822M8.00858 13.0059L11.0086 13.0082" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                        <path d="M12.0019 22.0098L12.0043 19.0098C12.005 18.067 12.0054 17.5956 11.7127 17.3025C11.4201 17.0093 10.9487 17.009 10.0059 17.0082L9.00586 17.0074C8.06305 17.0067 7.59165 17.0063 7.29852 17.299C7.0054 17.5917 7.00503 18.0631 7.00429 19.0059L7.00193 22.0059" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />

                                                        <path d="M2.00195 22.002L22.0019 22.0177" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

                                                        <path d="M3.00186 22.0019L3.01387 6.71919C3.01584 4.20845 3.01683 2.95307 3.8085 2.33082C4.60018 1.70857 5.76496 2.04766 8.09453 2.72585L13.0934 4.18109C14.4991 4.59035 15.2021 4.79497 15.6082 5.3515C16.0145 5.90804 16.0139 6.66561 16.0127 8.18074L16.0019 22.0122" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                    </svg>

                                                </div>

                                                <h3 className={styles.passiveLearning} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Passive Learning</h3>

                                            </div>

                                            <div className={styles.frameChild23} />

                                        </div>

                                    </div>

                                    <div className={styles.frameParent50}>

                                        <div className={styles.frameChild24} />

                                        <div className={styles.interactiveLearningWith}>Interactive quizzes and multimedia<br />boost classroom engagement</div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.rapidSkillChanges}>

                                <div className={styles.distributedTeamsInner}>

                                    <div className={styles.frameWrapper10}>

                                        <div className={styles.frameChild25} />

                                    </div>

                                </div>

                                <div className={styles.frameParent51}>

                                    <div className={styles.frameParent52}>

                                        <div className={`${styles.challengeIcon} ${styles.challengeIconPink}`}>

                                            <svg

                                                width="24"

                                                height="24"

                                                viewBox="0 0 25 25"

                                                fill="none"

                                                className={styles.challengeIconImage}

                                                aria-hidden="true"

                                                focusable="false"

                                            >

                                                <path d="M8.51546 3.71468C8.20934 3.58064 7.87117 3.50615 7.51562 3.50587C6.13491 3.50479 5.01475 4.6232 5.01366 6.00391C5.01302 6.82171 5.40512 7.5481 6.01185 8.00469" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                <path d="M3.38282 16.5019C2.62343 16.5013 2.00833 15.8596 2.00895 15.0685C2.01021 13.4593 3.67792 11.8513 6.51172 11.5446" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                <path d="M15.5155 3.71974C15.8218 3.58619 16.16 3.51223 16.5156 3.5125C17.8963 3.51359 19.0147 4.63376 19.0137 6.01447C19.013 6.83227 18.6197 7.55805 18.0123 8.01368" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                <path d="M20.6326 16.515C21.392 16.5156 22.0081 15.8748 22.0087 15.0838C22.01 13.4746 20.3449 11.8641 17.5117 11.5527" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                <path d="M12.0109 11.5102C13.6678 11.5115 15.012 10.1694 15.0133 8.51253C15.0146 6.85567 13.6725 5.51147 12.0156 5.51017C10.3588 5.50887 9.01457 6.85096 9.01327 8.50781C9.01197 10.1647 10.3541 11.5089 12.0109 11.5102Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                <path d="M12.0078 14.5086C8.25781 14.5057 6.00613 16.6468 6.00444 18.7896C6.0037 19.7364 6.67467 20.5044 7.5031 20.5051L16.5031 20.5122C17.3315 20.5128 18.0037 19.7458 18.0044 18.799C18.0061 16.6562 15.7578 14.5116 12.0078 14.5086Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                            </svg>

                                        </div>

                                        <h3 className={styles.largeContentManagement} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Large Content Management</h3>

                                    </div>

                                    <div className={styles.frameParent53}>

                                        <div className={styles.frameChild24} />

                                        <div className={styles.centralizeCourseMaterials}>Centralize course materials<br />and assessments in one place</div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.lowEngagementParent}>

                                <div className={styles.lowEngagement}>

                                    <div className={styles.lowEngagementInner}>

                                        <div className={styles.frameParent54}>

                                            <div className={styles.frameWrapper11}>

                                                <div className={styles.frameWrapper12}>

                                                    <div className={styles.frameParent55}>

                                                        <div className={`${styles.challengeIcon} ${styles.challengeIconPurple}`}>

                                                            <svg

                                                                width="24"

                                                                height="24"

                                                                viewBox="0 0 25 25"

                                                                fill="none"

                                                                className={styles.challengeIconImage}

                                                                aria-hidden="true"

                                                                focusable="false"

                                                            >

                                                                <path d="M10.0093 11.007C12.2185 11.0088 14.0107 9.21933 14.0125 7.01019C14.0142 4.80105 12.2248 3.00879 10.0156 3.00705C7.80649 3.00531 6.01422 4.79477 6.01248 7.00391C6.01075 9.21304 7.8002 11.0053 10.0093 11.007Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                                <path d="M22.0117 11.0164L16.0117 11.0117" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                                <path d="M10.0078 14.0082C5.00781 14.0043 2.00585 16.502 2.00388 19.002C2.00302 20.1066 2.89774 21.0027 4.00231 21.0035L16.0023 21.013C17.1069 21.0138 18.003 20.1191 18.0039 19.0145C18.0058 16.5145 15.0078 14.0122 10.0078 14.0082Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                            </svg>

                                                        </div>

                                                        <h3 className={styles.diverseLearningNeeds} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Diverse Learning Needs</h3>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className={styles.frameParent50}>

                                                <div className={styles.frameChild24} />

                                                <div className={styles.personalizedLearningPathways}>Personalized learning pathways<br />support every student's pace</div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className={styles.progressTrackingParent}>

                            <div className={styles.rapidSkillChanges}>

                                <div className={styles.frameParent47}>

                                    <div className={styles.frameWrapper11}>

                                        <div className={styles.frameWrapper12}>

                                            <div className={styles.frameParent55}>

                                                <div className={`${styles.challengeIcon} ${styles.challengeIconOrange}`}>

                                                    <svg

                                                        width="24"

                                                        height="24"

                                                        viewBox="0 0 25 25"

                                                        fill="none"

                                                        className={styles.challengeIconImage}

                                                        aria-hidden="true"

                                                        focusable="false"

                                                    >

                                                        <path d="M20.5105 10.516L20.5035 19.516C20.5031 19.9819 20.5029 20.2149 20.4267 20.3987C20.325 20.6436 20.1301 20.8381 19.885 20.9394C19.7012 21.0154 19.4682 21.0152 19.0023 21.0148C18.5364 21.0145 18.3034 21.0143 18.1196 20.9381C17.8747 20.8364 17.6802 20.6415 17.5789 20.3964C17.5029 20.2126 17.5031 19.9796 17.5035 19.5137L17.5105 10.5137C17.5109 10.0478 17.5111 9.81476 17.5873 9.63105C17.689 9.3861 17.8839 9.19157 18.129 9.09028C18.3128 9.0143 18.5458 9.01448 19.0117 9.01485C19.4776 9.01522 19.7106 9.0154 19.8944 9.09166C20.1393 9.19335 20.3338 9.38818 20.4351 9.63329C20.5111 9.81712 20.5109 10.0501 20.5105 10.516Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />

                                                        <path d="M16.5195 3.01367L19.5195 3.01603L19.5172 6.01603" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                        <path d="M19.0156 3.5153C19.0156 3.5153 15.0117 8.51216 4.50895 12.0039" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                        <path d="M13.5066 14.0102L13.5023 19.5102C13.5019 19.9761 13.5018 20.2091 13.4255 20.3928C13.3238 20.6377 13.129 20.8323 12.8839 20.9336C12.7 21.0095 12.467 21.0094 12.0011 21.009C11.5352 21.0086 11.3022 21.0084 11.1185 20.9322C10.8736 20.8305 10.679 20.6356 10.5777 20.3906C10.5018 20.2067 10.5019 19.9737 10.5023 19.5078L10.5066 14.0078C10.507 13.5419 10.5072 13.3089 10.5834 13.1252C10.6851 12.8803 10.88 12.6857 11.1251 12.5844C11.3089 12.5084 11.5419 12.5086 12.0078 12.509C12.4737 12.5094 12.7067 12.5095 12.8905 12.5858C13.1354 12.6875 13.3299 12.8823 13.4312 13.1274C13.5072 13.3113 13.507 13.5443 13.5066 14.0102Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />

                                                        <path d="M6.50663 16.5043L6.50428 19.5043C6.50391 19.9702 6.50373 20.2032 6.42746 20.3869C6.32578 20.6319 6.13095 20.8264 5.88584 20.9277C5.70201 21.0037 5.46904 21.0035 5.0031 21.0031C4.53716 21.0028 4.30419 21.0026 4.12048 20.9263C3.87553 20.8246 3.681 20.6298 3.5797 20.3847C3.50373 20.2009 3.50391 19.9679 3.50428 19.502L3.50663 16.502C3.507 16.0361 3.50718 15.8031 3.58345 15.6193C3.68513 15.3744 3.87996 15.1798 4.12507 15.0785C4.3089 15.0026 4.54187 15.0028 5.00781 15.0031C5.47375 15.0035 5.70672 15.0037 5.89043 15.0799C6.13538 15.1816 6.32991 15.3765 6.43121 15.6216C6.50718 15.8054 6.507 16.0384 6.50663 16.5043Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />

                                                    </svg>

                                                </div>

                                                <h3 className={styles.studentProgressTracking} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Student Progress Tracking</h3>

                                            </div>

                                        </div>

                                    </div>

                                    <div className={styles.frameParent50}>

                                        <div className={styles.frameChild24} />

                                        <div className={styles.trackAttendanceCourse}>Track attendance and progress<br />with real-time insights</div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.rapidSkillChanges}>

                                <div className={styles.frameParent47}>

                                    <div className={styles.frameWrapper11}>

                                        <div className={styles.frameWrapper12}>

                                            <div className={styles.frameParent55}>

                                                <div className={`${styles.challengeIcon} ${styles.challengeIconTeal}`}>

                                                    <svg

                                                        width="24"

                                                        height="24"

                                                        viewBox="0 0 25 25"

                                                        fill="none"

                                                        className={styles.challengeIconImage}

                                                        aria-hidden="true"

                                                        focusable="false"

                                                    >

                                                        <path d="M5.35286 3.00458C7.81332 3.00308 10.1873 3.89546 12.0176 5.50981L12.0054 21.0098C10.1752 19.3955 7.80114 18.5031 5.34068 18.5046C3.77867 18.5033 2.99767 18.5027 2.65278 18.2817C2.44573 18.1489 2.36115 18.0641 2.22872 17.8568C2.00813 17.5116 2.00861 16.896 2.00958 15.6648L2.01686 6.40517C2.01798 4.97738 2.01854 4.26349 2.56773 3.68524C3.11693 3.107 3.6787 3.07758 4.80224 3.01874C4.98453 3.00919 5.16811 3.00444 5.35286 3.00458Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                        <path d="M18.6823 3.01501C16.2218 3.00964 13.8464 3.89829 12.0137 5.50976L12.0015 21.0098C13.8342 19.3983 16.2096 18.5097 18.6701 18.515C20.2321 18.5162 21.0131 18.5168 21.3583 18.2963C21.5656 18.1639 21.6503 18.0792 21.783 17.8721C22.0042 17.5273 22.0047 16.9117 22.0057 15.6805L22.0129 6.42084C22.0141 4.99305 22.0146 4.27916 21.4664 3.70005C20.918 3.12094 20.3564 3.09064 19.2329 3.03004C19.0506 3.0202 18.867 3.01516 18.6823 3.01501Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                        <path d="M19.0156 7.34052C18.9049 7.33689 18.7938 7.33501 18.6823 7.33492C18.1204 7.3337 17.5631 7.37909 17.0155 7.46905M19.0127 11.0216C18.902 11.018 18.7909 11.0161 18.6794 11.016C17.4137 11.0132 16.1705 11.247 15.0122 11.6941M19.01 14.5159C18.8993 14.5123 18.7882 14.5104 18.6767 14.5103C17.411 14.5075 16.1678 14.7413 15.0095 15.1884" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                        <path d="M5.01562 7.32957C5.12629 7.32611 5.23742 7.3244 5.34896 7.32449C5.91081 7.32415 6.46814 7.37042 7.01552 7.46124M5.01273 11.0106C5.1234 11.0072 5.23452 11.0055 5.34606 11.0056C6.61173 11.0048 7.85453 11.2405 9.0122 11.6895M5.00998 14.5049C5.12065 14.5015 5.23178 14.4998 5.34332 14.4999C6.60899 14.4991 7.85178 14.7348 9.00945 15.1837" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                                                    </svg>

                                                </div>

                                                <h3 className={styles.careerReadiness} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Career Readiness</h3>

                                            </div>

                                        </div>

                                    </div>

                                    <div className={styles.frameParent50}>

                                        <div className={styles.frameChild24} />

                                        <div className={styles.supportSkillDevelopment}>Build skills and certifications<br />for career-ready outcomes</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.universityAndCollegeChild}>

                    <div className={styles.frameParent63}>

                        <div className={styles.frameParent64}>

                            <div className={styles.frameParent65}>

                                <div className={styles.frameParent66}>

<div className={styles.futureReadyBadge}>

  NeuroLXP<sup className={styles.neuroTrademark}>TM</sup>

</div>

                                    <h2 className={styles.howNeurolxpSupports} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>How NeuroLXP Supports Higher <span style={{ color: "#2D4CC8" }}>Education</span></h2>

                                </div>

                                <div className={styles.neurolxpHelpsInstitutions}>NeuroLXP helps institutions streamline learning, engage students, and improve outcomes through an integrated digital learning ecosystem.</div>

                            </div>

                            <div className={styles.youngStudentSittingTableUsParent}>

                               
<iframe
  ref={supportVideoRef}
  className={styles.youngStudentSittingTableUsVideo}
  src="https://www.youtube.com/embed/UX32EVdkjFA?autoplay=1&mute=1&loop=1&playlist=UX32EVdkjFA&playsinline=1&controls=0"
  title="Support Video"
  allow="autoplay; encrypted-media; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  loading="eager"
  onClick={toggleSupportVideo}
/>


                                <button

                                    type="button"

                                    className={`${styles.supportVideoToggle} ${isSupportVideoPlaying ? styles.supportVideoTogglePlaying : ""

                                        }`}

                                    onClick={toggleSupportVideo}

                                    aria-label={

                                        isSupportVideoPlaying

                                            ? "Pause NeuroLXP video"

                                            : "Play NeuroLXP video"

                                    }

                                >

                                </button>

                            </div>

                        </div>

                        <div className={styles.frameParent67}>

                            <div className={styles.frameParent68}>

                                <div className={styles.frameWrapper17}>

                                    <div className={styles.wrapperLine2Parent}>

                                        <div className={styles.wrapperLine2}>

                                            <Image className={styles.wrapperLine2Child} src="/icons/university-blueline.svg" width={10} height={65} sizes="12px" alt="" />

                                        </div>

                                        <div className={styles.courseAndContentParent}>

                                            <h3 className={styles.courseAndContent} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Course and Content<br /></h3>

                                            <div className={styles.flexibleLearningFor}>Create and manage content</div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.frameWrapper17}>

                                    <div className={styles.wrapperLine2Parent}>

                                        <div className={styles.wrapperLine2}>

                                            <Image className={styles.wrapperLine2Child} src="/icons/university-pinkline.svg" width={10} height={65} sizes="12px" alt="" />

                                        </div>

                                        <div className={styles.courseAndContentParent}>

                                            <h3 className={styles.courseAndContent} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Interactive Learning</h3>

                                            <div className={styles.flexibleLearningFor}>Make learning engaging</div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.frameParent69}>

                                <div className={styles.frameWrapper17}>

                                    <div className={styles.wrapperLine2Parent}>

                                        <div className={styles.wrapperLine2}>

                                            <Image className={styles.wrapperLine2Child} src="/icons/university-lightbrownline.svg" width={10} height={65} sizes="12px" alt="" />

                                        </div>

                                        <div className={styles.courseAndContentParent}>

                                            <h3 className={styles.courseAndContent} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Assessments<br /></h3>

                                            <div className={styles.flexibleLearningFor}>Measure skills and performance</div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.frameWrapper17}>

                                    <div className={styles.wrapperLine2Parent}>

                                        <div className={styles.wrapperLine2}>

                                            <Image className={styles.wrapperLine2Child} src="/icons/university-greenline.svg" width={10} height={65} sizes="12px" alt="" />

                                        </div>

                                        <div className={styles.courseAndContentParent}>

                                            <h3 className={styles.courseAndContent} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Personalized Learning<br /></h3>

                                            <div className={styles.flexibleLearningFor}>Adapt to learner needs</div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.frameParent69}>

                                <div className={styles.frameWrapper17}>

                                    <div className={styles.wrapperLine2Parent}>

                                        <div className={styles.wrapperLine2}>

                                            <Image className={styles.wrapperLine2Child} src="/icons/university-purpleline.svg" width={10} height={65} sizes="12px" alt="" />

                                        </div>

                                        <div className={styles.courseAndContentParent}>

                                            <h3 className={styles.courseAndContent} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Performance Analytics<br /></h3>

                                            <div className={styles.flexibleLearningFor}>Track progress and insights</div>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.frameWrapper17}>

                                    <div className={styles.wrapperLine2Parent}>

                                        <div className={styles.wrapperLine2}>

                                            <Image className={styles.wrapperLine2Child} src="/icons/university-brownline.svg" width={10} height={65} sizes="12px" alt="" />

                                        </div>

                                        <div className={styles.courseAndContentParent}>

                                            <h3 className={styles.courseAndContent} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Career Development<br /></h3>

                                            <div className={styles.flexibleLearningFor}>Build career-ready skills</div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.frameParent71}>

                    <div className={styles.frameParent72}>

                        <div className={styles.keyBenefitsBadge}>Key benefits</div>

                        <div className={styles.benefitsForEducationalInstiParent}>

                            <h2 className={styles.keyChallengesIn} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Benefits for Educational <span style={{ color: "#2D4CC8" }}>Institutions</span><br /><br /></h2>

                            <div className={styles.institutionsUsingNeurolxp}>Institutions using NeuroLXP can:<br /><br /></div>

                        </div>

                    </div>

                    <div className={styles.frameParent73}>

                        <div className={styles.frameParent74}>

                            <div className={styles.frameParent75}>

                                <div className={styles.image20Parent}>

                                    <div className={styles.image20} />

                                    <div className={styles.frameParent76}>

                                        <div className={styles.frameChild37}>

                                            <Image

                                                className={styles.benefitIcon}

                                                src="/icons/university-monitor.svg"

                                                width={50}

                                                height={50}

                                                sizes="50px"

                                                alt=""

                                                aria-hidden="true"

                                            />

                                        </div>

                                        <div className={styles.digitalBlended}>{`Digital & Blended Learning`}</div>

                                    </div>

                                </div>

                                <div className={styles.image20Parent}>

                                    <div className={styles.image20} />

                                    <div className={styles.frameParent76}>

                                        <div className={styles.frameChild37}>

                                            <Image

                                                className={styles.benefitIcon}

                                                src="/icons/university-group.svg"

                                                width={50}

                                                height={50}

                                                sizes="50px"

                                                alt=""

                                                aria-hidden="true"

                                            />

                                        </div>

                                        <div className={styles.digitalBlended}>Higher Student Engagement</div>

                                    </div>

                                </div>

                            </div>

                            <div className={styles.frameParent75}>

                                <div className={styles.image20Parent}>

                                    <div className={styles.image20} />

                                    <div className={styles.frameParent76}>

                                        <div className={styles.frameChild37}>

                                            <Image

                                                className={styles.benefitIcon}

                                                src="/icons/university-target.svg"

                                                width={50}

                                                height={50}

                                                sizes="50px"

                                                alt=""

                                                aria-hidden="true"

                                            />

                                        </div>

                                        <div className={styles.interactiveLearningExperienc2}>Interactive Learning Experiences</div>

                                    </div>

                                </div>

                                <div className={styles.image20Parent}>

                                    <div className={styles.image20} />

                                    <div className={styles.frameParent76}>

                                        <div className={styles.frameChild37}>

                                            <Image

                                                className={styles.benefitIcon}

                                                src="/icons/university-signpost.svg"

                                                width={50}

                                                height={50}

                                                sizes="50px"

                                                alt=""

                                                aria-hidden="true"

                                            />

                                        </div>

                                        <div className={styles.personalizedLearningPathways2}>Personalized Learning Pathways</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className={styles.frameParent75}>

                            <div className={styles.image20Parent}>

                                <div className={styles.image20} />

                                <div className={styles.frameParent76}>

                                    <div className={styles.frameChild37}>

                                        <Image

                                            className={styles.benefitIcon}

                                            src="/icons/university-library.svg"

                                            width={50}

                                            height={50}

                                            sizes="50px"

                                            alt=""

                                            aria-hidden="true"

                                        />

                                    </div>

                                    <div className={styles.efficientContentManagement}>Efficient Content Management</div>

                                </div>

                            </div>

                            <div className={styles.image20Parent}>

                                <div className={styles.image20} />

                                <div className={styles.frameParent76}>

                                    <div className={styles.frameChild37}>

                                        <Image

                                            className={styles.benefitIcon}

                                            src="/icons/university-chart.svg"

                                            width={50}

                                            height={50}

                                            sizes="50px"

                                            alt=""

                                            aria-hidden="true"

                                        />

                                    </div>

                                    <div className={styles.realTimePerformanceAnalytic}>Real-Time Performance Analytics</div>

                                </div>

                            </div>

                        </div>

                        <div className={styles.frameParent75}>

                            <div className={styles.image20Parent}>

                                <div className={styles.image20} />

                                <div className={styles.frameParent76}>

                                    <div className={styles.frameChild37}>

                                        <Image

                                            className={styles.benefitIcon}

                                            src="/icons/university-award.svg"

                                            width={50}

                                            height={50}

                                            sizes="50px"

                                            alt=""

                                            aria-hidden="true"

                                        />

                                    </div>

                                    <div className={styles.digitalBlended}>Improved Student Outcomes</div>

                                </div>

                            </div>

                            <div className={styles.image20Parent}>

                                <div className={styles.image20} />

                                <div className={styles.frameParent76}>

                                    <div className={styles.frameChild37}>

                                        <Image

                                            className={styles.benefitIcon}

                                            src="/icons/university-student.svg"

                                            width={50}

                                            height={50}

                                            sizes="50px"

                                            alt=""

                                            aria-hidden="true"

                                        />

                                    </div>

                                    <div className={styles.digitalBlended}>{`Skill & Career Development`}</div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.image20Parent7}>

                    <div className={styles.image209} />

                    <div className={styles.image21Parent}>

                        <div className={styles.image21} />

                        <Image className={styles.happyCollegeStudentsWithBoIcon} src="/images/happy-college-students-with-books-hands-walking-together-campus 1.png" width={603} height={546} sizes="(max-width: 767px) 100vw, 603px" alt="Future Ready Universities"

                                                        loading="lazy"

                                                        fetchPriority="low"

                                                    />

                    </div>

                    <div className={styles.frameWrapper23}>

                        <div className={styles.frameWrapper24}>

                            <div className={styles.frameWrapper25}>

                                <div className={styles.frameParent87}>

                                    <div className={styles.frameParent88}>

<div className={styles.futureReadyBadge}>

  NeuroLXP<sup className={styles.neuroTrademark}>TM</sup>

</div>

                                        <h2 className={styles.futureReadyUniversitiesStar} style={{ margin: 0, fontSize: "inherit", fontWeight: 700 }}>Future-Ready Universities <span style={{ color: "#2D4CC8" }}>Start Here</span></h2>

                                    </div>

                                    <div className={styles.neurolxpHelpsUniversities}>NeuroLXP helps universities build scalable learning environments that improve student outcomes and graduate success.</div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <div style={{ width: "100%", position: "relative", zIndex: 10000, overflow: "visible" }}>

                <Footer />

            </div>

        </>

    );

};

export default UniversityAndCollege;