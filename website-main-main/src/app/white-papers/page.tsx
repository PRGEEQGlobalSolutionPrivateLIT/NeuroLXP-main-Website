"use client";

import Image from "next/image";

import styles from "./white-paper.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

export default function WhitePaper() {

    const topics = [

        {

            title: "AI-Powered\nLMS",

            icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" role="img" aria-label="AI-Powered LMS">

          <path d="M14.666 10.6641H17.3327C21.1039 10.6641 22.9895 10.6641 24.1611 11.8356C25.3327 13.0072 25.3327 14.8929 25.3327 18.6641C25.3327 22.4353 25.3327 24.3209 24.1611 25.4925C22.9895 26.6641 21.1039 26.6641 17.3327 26.6641H15.9993C15.9993 26.6641 15.3327 29.3307 10.666 29.3307C10.666 29.3307 11.9993 27.9858 11.9993 26.641C9.92808 26.5786 8.69266 26.3475 7.83759 25.4925C6.66602 24.3209 6.66602 22.4353 6.66602 18.6641C6.66602 14.8929 6.66602 13.0072 7.83759 11.8356C9.00916 10.6641 10.8948 10.6641 14.666 10.6641Z" stroke="#67096E" strokeWidth="1.5" strokeLinejoin="round"/>

          <path d="M25.334 15.3359H26.0007C27.2468 15.3359 27.8699 15.3359 28.334 15.6039C28.638 15.7794 28.8905 16.0319 29.066 16.3359C29.334 16.8001 29.334 17.4231 29.334 18.6693C29.334 19.9154 29.334 20.5385 29.066 21.0026C28.8905 21.3066 28.638 21.5591 28.334 21.7346C27.8699 22.0026 27.2468 22.0026 26.0007 22.0026H25.334" stroke="#67096E" strokeWidth="1.5" strokeLinejoin="round"/>

          <path d="M6.66602 15.3359H5.99935C4.75319 15.3359 4.13012 15.3359 3.66602 15.6039C3.36198 15.7794 3.1095 16.0319 2.93396 16.3359C2.66602 16.8001 2.66602 17.4231 2.66602 18.6693C2.66602 19.9154 2.66602 20.5385 2.93396 21.0026C3.1095 21.3066 3.36198 21.5591 3.66602 21.7346C4.13012 22.0026 4.75319 22.0026 5.99935 22.0026H6.66602" stroke="#67096E" strokeWidth="1.5" strokeLinejoin="round"/>

          <path d="M18 4.66406C18 5.76864 17.1045 6.66406 16 6.66406C14.8955 6.66406 14 5.76864 14 4.66406C14 3.55949 14.8955 2.66406 16 2.66406C17.1045 2.66406 18 3.55949 18 4.66406Z" stroke="#67096E" strokeWidth="1.5"/>

          <path d="M16 6.66406V10.6641" stroke="#67096E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M12 16V17.3333M20 16V17.3333" stroke="#67096E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M13.334 22C13.334 22 14.2229 22.6667 16.0007 22.6667C17.7784 22.6667 18.6673 22 18.6673 22" stroke="#67096E" strokeWidth="1.5" strokeLinecap="round"/>

        </svg>),

        },

        {

            title: "Digital Learning\nSolutions",

            icon: (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" role="img" aria-label="Digital Learning Solutions">

          <circle cx="25" cy="25" r="24.5" stroke="#2D4CC8" strokeDasharray="2 2"/>

          <path d="M30.3229 37H27.6563H22.3229H19.6562" stroke="#2D4CC8" strokeWidth="2.1875" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M30.3229 13H19.6562C15.885 13 13.9994 13 12.8278 14.1716C11.6563 15.3431 11.6562 17.2288 11.6562 21V23.6667C11.6562 27.4379 11.6563 29.3235 12.8278 30.4951C13.9994 31.6667 15.885 31.6667 19.6562 31.6667H30.3229C34.0941 31.6667 35.9797 31.6667 37.1513 30.4951C38.3229 29.3235 38.3229 27.4379 38.3229 23.6667V21C38.3229 17.2288 38.3229 15.3431 37.1513 14.1716C35.9797 13 34.0941 13 30.3229 13Z" stroke="#2D4CC8" strokeWidth="2.1875" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M22.9902 36.9974V31.6641M26.9902 31.6641V36.9974" stroke="#2D4CC8" strokeWidth="2.1875"/>

        </svg>),

        },

        {

            title: "Workforce\nUpskilling",

            icon: (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" role="img" aria-label="Workforce Upskilling">

          <circle cx="25" cy="25" r="24.5" stroke="#BF1869" strokeDasharray="2 2"/>

          <path d="M36.334 23V35C36.334 35.6212 36.334 35.9319 36.2325 36.1769C36.0972 36.5036 35.8376 36.7632 35.5109 36.8985C35.2659 37 34.9552 37 34.334 37C33.7128 37 33.4021 37 33.1571 36.8985C32.8304 36.7632 32.5708 36.5036 32.4355 36.1769C32.334 35.9319 32.334 35.6212 32.334 35V23C32.334 22.3788 32.334 22.0681 32.4355 21.8231C32.5708 21.4964 32.8304 21.2368 33.1571 21.1015C33.4021 21 33.7128 21 34.334 21C34.9552 21 35.2659 21 35.5109 21.1015C35.8376 21.2368 36.0972 21.4964 36.2325 21.8231C36.334 22.0681 36.334 22.3788 36.334 23Z" stroke="#BF1869" strokeWidth="2" strokeLinejoin="round"/>

          <path d="M31 13H35V17" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M34.3333 13.6641C34.3333 13.6641 29 20.3307 15 24.9974" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M27 27.6641V34.9974C27 35.6186 27 35.9293 26.8985 36.1743C26.7632 36.501 26.5036 36.7606 26.1769 36.8959C25.9319 36.9974 25.6212 36.9974 25 36.9974C24.3788 36.9974 24.0681 36.9974 23.8231 36.8959C23.4964 36.7606 23.2368 36.501 23.1015 36.1743C23 35.9293 23 35.6186 23 34.9974V27.6641C23 27.0429 23 26.7322 23.1015 26.4871C23.2368 26.1605 23.4964 25.9009 23.8231 25.7655C24.0681 25.6641 24.3788 25.6641 25 25.6641C25.6212 25.6641 25.9319 25.6641 26.1769 25.7655C26.5036 25.9009 26.7632 26.1605 26.8985 26.4871C27 26.7322 27 27.0429 27 27.6641Z" stroke="#BF1869" strokeWidth="2" strokeLinejoin="round"/>

          <path d="M17.666 31V35C17.666 35.6212 17.666 35.9319 17.5645 36.1769C17.4292 36.5036 17.1696 36.7632 16.8429 36.8985C16.5979 37 16.2873 37 15.666 37C15.0448 37 14.7341 37 14.4891 36.8985C14.1624 36.7632 13.9028 36.5036 13.7675 36.1769C13.666 35.9319 13.666 35.6212 13.666 35V31C13.666 30.3788 13.666 30.0681 13.7675 29.8231C13.9028 29.4964 14.1624 29.2368 14.4891 29.1015C14.7341 29 15.0448 29 15.666 29C16.2873 29 16.5979 29 16.8429 29.1015C17.1696 29.2368 17.4292 29.4964 17.5645 29.8231C17.666 30.0681 17.666 30.3788 17.666 31Z" stroke="#BF1869" strokeWidth="2" strokeLinejoin="round"/>

        </svg>),

        },

        {

            title: "Learning\nAnalytics",

            icon: (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" role="img" aria-label="Learning Analytics">

          <circle cx="25" cy="25" r="24.5" stroke="#046F73" strokeDasharray="2 2"/>

          <path d="M13 31.6641L18.3333 26.3307C19.5101 25.1539 20.0985 24.5657 20.8206 24.5006C20.9399 24.4898 21.0601 24.4898 21.1794 24.5006C21.9015 24.5657 22.4899 25.1539 23.6667 26.3307C24.8435 27.5075 25.4317 28.0958 26.1539 28.1609C26.2733 28.1717 26.3933 28.1717 26.5128 28.1609C27.2349 28.0958 27.8232 27.5075 29 26.3307L35.6667 19.6641" stroke="#046F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M30.334 18.7047C30.334 18.7047 35.802 17.875 36.6319 18.7048C37.4617 19.5346 36.6319 25.0026 36.6319 25.0026" stroke="#046F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        </svg>),

        },

        {

            title: "Gamified\nLearning",

            icon: (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" role="img" aria-label="Gamified Learning">

          <circle cx="25" cy="25" r="24.5" stroke="#907507" strokeDasharray="2 2"/>

          <path fillRule="evenodd" clipRule="evenodd" d="M13.0191 33.0766C13.8806 33.9127 14.9195 34.3307 16.1358 34.3307C16.9872 34.3307 17.7778 34.1169 18.5075 33.6891C19.2373 33.2613 19.7846 32.6779 20.1495 31.9391C20.564 31.135 20.7713 30.7329 21.0719 30.4354C21.3674 30.1429 21.7273 29.9235 22.1226 29.795C22.5248 29.6641 22.9772 29.6641 23.8818 29.6641H26.1206C26.9998 29.6641 27.4394 29.6641 27.8308 29.7874C28.2502 29.9197 28.6304 30.1535 28.9376 30.4683C29.2241 30.7619 29.4224 31.1543 29.8188 31.9391C30.1837 32.6779 30.731 33.2613 31.4608 33.6891C32.1905 34.1169 32.9812 34.3307 33.8325 34.3307C35.069 34.3307 36.1282 33.9175 37.01 33.0911C37.8918 32.2647 38.3326 31.2585 38.3326 30.0725C38.3326 29.8974 38.3174 29.7175 38.287 29.5329C38.2566 29.3481 38.2212 29.1682 38.1806 28.9933L36.7864 23.6414C35.7874 19.8077 35.2881 17.8908 33.8474 16.7774C32.4068 15.6641 30.426 15.6641 26.4642 15.6641H23.5133C19.5578 15.6641 17.58 15.6641 16.1404 16.7748C14.7008 17.8856 14.1991 19.7986 13.1956 23.6247L11.7876 28.9933C11.7471 29.1682 11.7167 29.3433 11.6964 29.5182C11.6761 29.6933 11.666 29.8682 11.666 30.0433C11.7065 31.2294 12.1576 32.2405 13.0191 33.0766Z" stroke="#907507" strokeWidth="2"/>

          <path d="M20.326 20.3438V25.6771M22.9993 23.0037H17.666" stroke="#907507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M31.3333 21.1667V21.3333M31.6667 21.3333C31.6667 21.5174 31.5175 21.6667 31.3333 21.6667C31.1492 21.6667 31 21.5174 31 21.3333C31 21.1492 31.1492 21 31.3333 21C31.5175 21 31.6667 21.1492 31.6667 21.3333Z" stroke="#907507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M27.9993 24.5026V24.6693M28.3327 24.6693C28.3327 24.8534 28.1835 25.0026 27.9993 25.0026C27.8152 25.0026 27.666 24.8534 27.666 24.6693C27.666 24.4851 27.8152 24.3359 27.9993 24.3359C28.1835 24.3359 28.3327 24.4851 28.3327 24.6693Z" stroke="#907507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        </svg>),

        },

        {

            title: "Personalized\nLearning",

            icon: (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" role="img" aria-label="Personalized Learning">

          <circle cx="25" cy="25" r="24.5" stroke="#C05512" strokeDasharray="2 2"/>

          <path d="M24.9993 23.6667C27.9449 23.6667 30.3327 21.2789 30.3327 18.3333C30.3327 15.3878 27.9449 13 24.9993 13C22.0538 13 19.666 15.3878 19.666 18.3333C19.666 21.2789 22.0538 23.6667 24.9993 23.6667Z" stroke="#C05512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M25.0007 27.6641C18.334 27.6641 14.334 30.9974 14.334 34.3307C14.334 35.8035 15.5279 36.9974 17.0007 36.9974H33.0007C34.4735 36.9974 35.6673 35.8035 35.6673 34.3307C35.6673 30.9974 31.6673 27.6641 25.0007 27.6641Z" stroke="#C05512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        </svg>),

        },

    ];

    return (<>

      <Header />

      <style>{`

        /* Restore the original curved SVG without changing the mobile layout. */

        @media (min-width: 769px) {

          [data-whitepaper-topics] {

            position: relative !important;

            isolation: isolate;

            padding-bottom: var(--topics-curve-clearance, 180px) !important;

          }

          [data-whitepaper-topics] > [data-topics-background] {

            display: block !important;

            visibility: visible !important;

            opacity: 1 !important;

            position: absolute !important;

            inset: 0 !important;

            width: 100% !important;

            height: 100% !important;

            z-index: 0 !important;

            pointer-events: none;

          }

          [data-whitepaper-topics] > [data-topics-background] > svg {

            display: block !important;

            visibility: visible !important;

            position: absolute !important;

            inset: 0 !important;

            width: 100% !important;

            max-width: none !important;

            height: 100% !important;

            margin: 0 !important;

          }

        }

        /* The existing break provides exactly two desktop lines. */

        @media (min-width: 1024px) {

          [data-whitepaper-topics] [data-topics-description] {

            width: 100% !important;

            max-width: 1100px !important;

            height: auto !important;

            margin-inline: auto !important;

            text-align: center;

            text-wrap: initial;

          }

          [data-whitepaper-topics] [data-topics-description] > span {

            white-space: nowrap;

          }

          [data-whitepaper-topics] [data-topics-description] > br {

            display: block !important;

          }

        }

      `}</style>

      <div className={styles["whitepaper-page"]}>

      <section className={styles["hero-section"]}>

        <div className={styles.container}>

          <div className={styles.breadcrumb}>

            <span className={styles["breadcrumb-link"]}>Resources</span>

            <div className={styles["breadcrumb-right"]}>

              <div className={styles["breadcrumb-separator"]}>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" aria-label="White Papers">

                  <path d="M8.33398 12C8.33398 12 12.334 9.05407 12.334 8C12.334 6.94587 8.33398 4 8.33398 4" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

                  <path d="M3.66605 12C3.66605 12 7.66602 9.05407 7.66602 8C7.66602 6.94587 3.66602 4 3.66602 4" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

                </svg>

              </div>

              <span className={styles["breadcrumb-current"]}>White Papers</span>

            </div>

          </div>

          <div className={styles["hero-container"]}>

            <div className={styles["hero-card"]}>

              <div className={styles["hero-content-wrapper"]}>

                <div className={styles["hero-text-wrapper"]}>

                  <div className={styles["hero-heading-wrapper"]}>

                    <div className={styles["hero-badge"]}>

                      <span>White Papers</span>

                    </div>

                    <h1 className={styles["hero-title"]}>

                      Insights Shaping the

                      <br />

                      Future of <span className={styles["main-last-word"]}>Learning</span>

                    </h1>

                  </div>

                  <p className={styles["hero-description"]}>

                    Explore Trends Shaping Digital

                    <br />

                    Learning.

                  </p>

                </div>

                <BookDemoTrigger className={styles["hero-btn"]}>

                  <span className={styles["hero-btn-text"]}>Book a Demo</span>

                </BookDemoTrigger>

              </div>

            </div>

            <div className={styles["hero-image-wrapper"]}>

              <div className={styles["hero-image-circle"]}>

                <Image src="/images/young-librarian-organising-books.webp" fill loading="eager" sizes="(max-width: 768px) 285px, (max-width: 1240px) 410px, 605px" alt="Future of Learning" className={styles["hero-image"]}/>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className={styles["insights-section"]}>

        <div className={styles.container}>

          <div className={styles["insights-wrapper"]}>

            <div className={styles["insights-badge"]}>

              <span className={styles["insights-badge-text"]}>Research-driven learning</span>

            </div>

            <h2 className={styles["insights-title"]}>

              Built for Educators! Leaders! and

              <br />

              Decision <span className={styles["main-last-word"]}>Makers</span>

            </h2>

            <p className={styles["insights-description"]}>

              Valuable insights helping leaders improve learning and

              <br />

              organizational performance.

            </p>

          </div>

        </div>

      </section>

      <section className={styles["topics-section"]} data-whitepaper-topics>

        <div className={styles["topics-bg"]} data-topics-background aria-hidden="true">

          <svg width="1440" height="831" viewBox="0 0 1440 831" fill="none" role="img" aria-label="Background" preserveAspectRatio="none" className={styles["topics-bg-svg"]}>

            <g filter="url(#filter0_dd_2_23096)">

              <path d="M0 30H1440V653.724C1440 653.724 1003.32 801.93 717 806.866C434.343 811.739 0 682.121 0 682.121V30Z" fill="#DFE6E9"/>

            </g>

            <g filter="url(#filter1_ii_2_23096)">

              <path d="M0 0H1440V607.856C1440 607.856 989.315 684.917 703 689.728C420.343 694.477 0 635.531 0 635.531V0Z" fill="#DFE6E9"/>

            </g>

            <defs>

              <filter id="filter0_dd_2_23096" x="-24" y="6" width="1488" height="825" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">

                <feFlood floodOpacity="0" result="BackgroundImageFix"/>

                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>

                <feOffset dx="8" dy="8"/>

                <feGaussianBlur stdDeviation="8"/>

                <feComposite in2="hardAlpha" operator="out"/>

                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"/>

                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_23096"/>

                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>

                <feOffset dx="-8" dy="-8"/>

                <feGaussianBlur stdDeviation="8"/>

                <feComposite in2="hardAlpha" operator="out"/>

                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>

                <feBlend mode="normal" in2="effect1_dropShadow_2_23096" result="effect2_dropShadow_2_23096"/>

                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_23096" result="shape"/>

              </filter>

              <filter id="filter1_ii_2_23096" x="-8" y="-8" width="1456" height="706" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">

                <feFlood floodOpacity="0" result="BackgroundImageFix"/>

                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>

                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>

                <feOffset dx="8" dy="8"/>

                <feGaussianBlur stdDeviation="8"/>

                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>

                <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0"/>

                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2_23096"/>

                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>

                <feOffset dx="-8" dy="-8"/>

                <feGaussianBlur stdDeviation="8"/>

                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>

                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>

                <feBlend mode="normal" in2="effect1_innerShadow_2_23096" result="effect2_innerShadow_2_23096"/>

              </filter>

            </defs>

          </svg>

        </div>

        <div className={styles["topics-panel"]}>

          <div className={styles["topics-content"]}>

            <div className={styles.container}>

              <div className={styles["topics-wrapper"]}>

                <div className={styles["topics-header"]}>

                  <div className={styles["topics-header-content"]}>

                    <h2 className={styles["topics-title"]}>Exploring Key Topics In Modern <span className={styles["main-last-word"]}>Learning</span></h2>

                    <p className={styles["topics-description"]} data-topics-description>

                      <span>NeuroLXP white papers focus on critical areas influencing the</span>

                      <br />

                      <span>evolution of digital learning.</span>

                    </p>

                  </div>

                </div>

                <div className={styles["topics-grid"]}>

                  {topics.map((topic, index) => (<div className={styles["topic-card"]} key={index}>

                      <div className={styles["topic-icon"]}>{topic.icon}</div>

                      <div className={styles["topic-content"]}>

                        <h3 className={styles["topic-title"]}>

                          {topic.title.split("\n").map((line, i) => (<span key={i}>

                              {line}

                              <br />

                            </span>))}

                        </h3>

                      </div>

                    </div>))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className={styles["frame-four-section"]}>

        <div className={`${styles.container} ${styles["frame-four-container"]}`}>

          <div className={styles["frame-four-left"]}>

            <div className={styles["frame-four-content"]}>

              <div className={styles["frame-four-heading"]}>

                <h2 className={styles["frame-four-title"]}>Turn Insights into <span className={styles["main-last-word"]}>Action</span></h2>

              </div>

             <p className={styles["frame-four-description"]}>
  Turn learning insights into strategies that boost engagement,
  strengthen skills, improve training, and deliver measurable outcomes.
</p>

            </div>

          </div>

          <div className={styles["frame-four-right"]}>

            <div className={styles["frame-four-card"]}>

              <div className={styles["frame-four-inner"]}>

                <div className={styles["frame-four-list"]}>

                  <div className={styles["frame-four-item"]}>

                    <div className={styles["frame-four-icon-wrapper"]}>

                      <div className={styles["frame-four-icon"]}>

                        <div className={styles["frame-four-icon-inner"]}>

                          {" "}

                          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" role="img" aria-label="Modernize Learning">

                            <path d="M31.4303 19.5211C31.4851 19.0287 31.5134 18.5282 31.5138 18.0212C31.5197 10.5654 25.4803 4.51647 18.0244 4.51061C13.7835 4.50728 9.99782 6.45981 7.52047 9.51636M4.59738 16.5001C4.54254 16.9925 4.5142 17.493 4.51381 18C4.50795 25.4559 10.5474 31.5047 18.0032 31.5106C22.2441 31.5139 26.0297 29.5614 28.5071 26.5048" stroke="#2A7308" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M12.0197 10.5047L10.5197 10.5035C8.39838 10.5019 7.33772 10.501 6.67923 9.84151C6.02073 9.18198 6.02157 8.12131 6.02324 6L6.02441 4.5" stroke="#2A7308" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M24.0088 25.5234L25.5088 25.5246C27.6301 25.5263 28.6907 25.5271 29.3493 26.1866C30.0078 26.8462 30.0069 27.9069 30.0053 30.0282L30.0041 31.5282" stroke="#2A7308" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                          </svg>

                        </div>

                      </div>

                    </div>

                    <div className={styles["frame-four-item-text"]}>Modernize Learning</div>

                  </div>

                  <div className={styles["frame-four-item"]}>

                    <div className={styles["frame-four-icon-wrapper"]}>

                      <div className={styles["frame-four-icon"]}>

                        <div className={styles["frame-four-icon-inner"]}>

                          {" "}

                          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" role="img" aria-label="Boost Engagement">

                            <path d="M15.8118 10.7317C16.9832 8.5929 17.569 7.52353 18.0162 7.52388C18.4635 7.52423 19.0475 8.59452 20.2156 10.7351C21.418 12.9384 23.0257 14.5676 25.2893 15.8096C27.4317 16.9852 28.5029 17.5728 28.5025 18.0206C28.5022 18.4683 27.4293 19.055 25.2837 20.2283C23.0827 21.4318 21.4552 23.0414 20.2144 25.3074C19.0401 27.4519 18.453 28.5242 18.0057 28.5239C17.5585 28.5235 16.9724 27.4497 15.8003 25.3016C14.598 23.0984 12.9902 21.4692 10.7265 20.2272C8.57694 19.0477 7.50214 18.458 7.5025 18.0102C7.50285 17.5623 8.57857 16.9743 10.73 15.7982C12.9956 14.5597 14.606 12.933 15.8118 10.7317Z" stroke="#BF1869" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                          </svg>

                        </div>

                      </div>

                    </div>

                    <div className={styles["frame-four-item-text"]}>Boost Engagement</div>

                  </div>

                  <div className={styles["frame-four-item"]}>

                    <div className={styles["frame-four-icon-wrapper"]}>

                      <div className={styles["frame-four-icon"]}>

                        <div className={styles["frame-four-icon-inner"]}>

                          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" role="img" aria-label="Leverage AI Analytics">

                            <path d="M10.5215 6.75589C8.03619 6.75394 6.01988 8.76708 6.01793 11.2524C6.01726 12.1053 6.25396 12.9031 6.66566 13.5831C4.58669 13.9791 3.01435 15.8055 3.01263 18C3.0109 20.1945 4.58037 22.0233 6.65871 22.4226M9.01066 20.5108C8.02349 20.8587 7.19407 21.5415 6.65871 22.4226C6.24595 23.1019 6.00799 23.8993 6.00732 24.7524C6.00537 27.2377 8.01851 29.2539 10.5038 29.2559C10.5022 31.3269 12.1798 33.0072 14.2508 33.0088C16.3219 33.0105 18.0022 31.3328 18.0038 29.2618L18.0215 6.76179C18.0231 4.69072 16.3455 3.01047 14.2744 3.00884C12.2033 3.00721 10.5231 4.68483 10.5215 6.75589M10.5215 6.75589C10.5205 7.98276 11.1088 9.07247 12.0191 9.75734" stroke="#67096E" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M28.8966 7.13782L25.5189 10.5102L22.5189 10.5078M27.7716 7.13694C27.7711 7.75825 28.2744 8.26233 28.8957 8.26282C29.517 8.26331 30.0211 7.76002 30.0216 7.13871C30.0221 6.51738 29.5188 6.01331 28.8975 6.01282C28.2762 6.01233 27.7721 6.51561 27.7716 7.13694Z" stroke="#67096E" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M28.8792 28.8878L25.5068 25.5102L22.5068 25.5078M27.7542 28.8869C27.7547 28.2655 28.2588 27.7623 28.8801 27.7628C29.5014 27.7633 30.0047 28.2673 30.0042 28.8887C30.0037 29.51 29.4996 30.0133 28.8783 30.0128C28.257 30.0123 27.7537 29.5082 27.7542 28.8869Z" stroke="#67096E" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M28.8888 18.0128L22.5138 18.0078M27.7638 18.0119C27.7633 18.6332 28.2666 19.1373 28.8879 19.1378C29.5092 19.1383 30.0133 18.635 30.0138 18.0137C30.0143 17.3923 29.5109 16.8883 28.8896 16.8878C28.2683 16.8873 27.7643 17.3905 27.7638 18.0119Z" stroke="#67096E" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                          </svg>

                        </div>

                      </div>

                    </div>

                    <div className={styles["frame-four-item-text"]}>Leverage AI & Analytics</div>

                  </div>

                  <div className={styles["frame-four-item"]}>

                    <div className={styles["frame-four-icon-wrapper"]}>

                      <div className={styles["frame-four-icon"]}>

                        <div className={styles["frame-four-icon-inner"]}>

                          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" role="img" aria-label=" Scale Training">

                            <path d="M6.0166 13.5L6.00364 30" stroke="#046F73" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M12.0225 6.00781L12.0036 30.0078" stroke="#046F73" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M18.0166 16.5156L18.006 30.0156" stroke="#046F73" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M24.0205 10.5234L24.0052 30.0234" stroke="#046F73" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M30.0107 21.0234L30.0037 30.0234" stroke="#046F73" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                          </svg>

                        </div>

                      </div>

                    </div>

                    <div className={styles["frame-four-item-text"]}>Scale Training</div>

                  </div>

                  <div className={styles["frame-four-item"]}>

                    <div className={styles["frame-four-icon-wrapper"]}>

                      <div className={styles["frame-four-icon"]}>

                        <div className={styles["frame-four-icon-inner"]}>

                          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" role="img" aria-label=" Measure Outcomes">

                            <path d="M22.7206 3.76548C21.2435 3.27764 19.6648 3.01308 18.0244 3.01179C9.74014 3.00528 3.01914 9.71572 3.01263 18C3.00612 26.2842 9.71656 33.0053 18.0008 33.0118C26.285 33.0183 33.0061 26.3078 33.0126 18.0236C33.0138 16.4558 32.7744 14.9439 32.3295 13.523" stroke="#2A7308" strokeWidth="2.25" strokeLinecap="round"/>

                            <path d="M25.5127 18.0274C25.5094 22.1695 22.1489 25.5248 18.0068 25.5215C13.8646 25.5183 10.5094 22.1577 10.5127 18.0156C10.5159 13.8735 13.8764 10.5183 18.0186 10.5215" stroke="#2A7308" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>

                            <path d="M29.2734 6.76665L18.0146 18.0078M29.2734 6.76665L29.2764 3.01665M29.2734 6.76665L33.0234 6.7696" stroke="#2A7308" strokeWidth="2.25" strokeLinecap="round"/>

                          </svg>

                        </div>

                      </div>

                    </div>

                    <div className={styles["frame-four-item-text"]}>Measure Outcomes</div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className={styles["frame-five-section"]}>

        <div className={styles.expertButtonRightSlot} data-expert-button-slot />

        <div className={styles.container}>

          <div className={styles["frame-five-header"]}>

            <div className={styles["frame-five-header-content"]}>

              <h2 className={styles["frame-five-title"]}>Learn! Innovate! <span className={styles["main-last-word"]}>Transform!</span></h2>

              <p className={styles["frame-five-description"]}>Explore NeuroLXP White Papers and discover research-driven insights to build smarter, more impactful learning experiences.</p>

            </div>

          </div>

        </div>

      </section>

      </div>

      <Footer />

    </>);

}
