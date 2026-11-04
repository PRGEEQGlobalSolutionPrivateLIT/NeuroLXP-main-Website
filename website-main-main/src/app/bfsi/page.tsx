"use client";


import { useEffect, useRef, useState } from "react";



import Link from "next/link";







import { useRouter } from "next/navigation";







import styles from "./bfsi.module.css";







import Image from "next/image";







import Header from "../../components/Header/header";







import Footer from "../../components/Footer/footer";







import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";















function BfsiHeroBackground() {







  return (







    <svg className={styles["bfsi-hero-bg"]} width="100%" height="100%" preserveAspectRatio="xMidYMax slice" viewBox="0 0 1440 624" fill="none" aria-hidden="true">







      <g filter="url(#filter0_ii_903_12871)">







        <ellipse cx="720" cy="-136.5" rx="780" ry="760.5" fill="#DFE6E9" />







        <ellipse cx="720" cy="-136.5" rx="780" ry="760.5" fill="url(#pattern0_903_12871)" fillOpacity="0.1" />







      </g>







      <defs>







        <filter id="filter0_ii_903_12871" x="-68" y="-905" width="1576" height="1537" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">







          <feFlood floodOpacity="0" result="BackgroundImageFix" />







          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />







          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />







          <feOffset dx="8" dy="8" />







          <feGaussianBlur stdDeviation="8" />







          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />







          <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />







          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_903_12871" />







          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />







          <feOffset dx="-8" dy="-8" />







          <feGaussianBlur stdDeviation="8" />







          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />







          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />







          <feBlend mode="normal" in2="effect1_innerShadow_903_12871" result="effect2_innerShadow_903_12871" />







        </filter>







        <pattern id="pattern0_903_12871" patternContentUnits="objectBoundingBox" width="0.0461538" height="0.0946746">







          <use xlinkHref="#image0_903_12871" transform="scale(0.000641026 0.000657462)" />







        </pattern>







        <image id="image0_903_12871" width="72" height="144" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACQCAYAAACrgC0FAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAb9JREFUeAHt3DtOw0AUheHBsDDYEILCqUmdhh1hVjbkSEhI5OHnzPhc/V8TyUl19XdWTkoAAAAAgNoe/j84nT6/zh/PqYyh799ekpHu8lE+pkJy7j6SmYsD9f37cP4Y0vaGw+H1O5nprj/eviLHeuTqgQpUZFmPdLe/2q4i13rk5oE2rMi2Hunuf72+Iud65O6BNqjIuh7pxn+yvCL3emT0QCsqsq9HJhQk8yuKUI9MOtCCikLUIxMLkukVRalHJh9oRkVh6pEZBcl4RZHqkVkHmlBRqHpkZkFyu6Jo9cjsA92pKFw9sqAguawoYj2y6EBXKgpZjywsSP4qilrPanoD8vsWJKyntEo+5vyYEwAAAAAAAAAAAAAAAAAAAAAAAAAAO/eQdq71ruOK/6zW0nbXcfcHar3raFCQtNt1tDhQy11Hk4Kkza6jzYFa7ToaFST1dx2tDtRi19GsIKm762h3oNq7joYFSb1dR8sD1dx1NC1I6uw62h6o1q6jcUFSftfR+kA1dh3NC5Kyu472Byq96xigICm36xjiQCV3HYMUJOw6jiqx67hyR3Fv2HUEAAAAAAAAAAAAAAAAAAAefgDs4ucrpyHPBgAAAABJRU5ErkJggg==" />







      </defs>







    </svg>







  );







}















export default function BfsiPage() {







  const router = useRouter();







  const [openCards, setOpenCards] = useState<Set<number>>(new Set());

  const challengesSectionRef = useRef<HTMLElement | null>(null);















  const toggleCard = (index: number) => {







    setOpenCards((prev) => {







      const next = new Set(prev);







      if (next.has(index)) {







        next.delete(index);







      } else {







        next.add(index);







      }







      return next;







    });







  };















  useEffect(() => {

    const section = challengesSectionRef.current;



    if (!section) return;



    const observer = new IntersectionObserver(

      ([entry]) => {

        if (!entry.isIntersecting) {

          setOpenCards(new Set());

        }

      },

      {

        threshold: 0.05,

      }

    );



    observer.observe(section);



    return () => {

      observer.disconnect();

    };

  }, []);



  const handleCardKeyDown = (e: React.KeyboardEvent, index: number) => {







    if (e.key === "Enter" || e.key === " ") {







      e.preventDefault();







      toggleCard(index);







    }







  };















  const challengeCards = [







    {







      title: "Compliance Updates",







      desc: "Track compliance, certifications and audits",







      color: "#2D4CC8",







      icon: (







        <svg width="26" height="29" viewBox="0 0 26 29" fill="none" aria-hidden="true">







          <path d="M21.9533 3.00048C19.4312 1.74314 16.3443 1.00228 13.0098 0.999664C9.67523 0.997044 6.58718 1.73304 4.06308 2.98642C2.82529 3.60108 2.20639 3.9084 1.60618 4.87574C1.00595 5.8431 1.00522 6.78021 1.00374 8.65442L1.00009 13.3064C0.994132 20.8842 7.0473 25.1022 10.5534 26.9095C11.5313 27.4136 12.0201 27.6656 12.9888 27.6663C13.9575 27.6671 14.4467 27.4159 15.4253 26.9133C18.9343 25.1115 24.9941 20.9031 25.0001 13.3252L25.0037 8.67328C25.0052 6.79908 25.0059 5.86197 24.4072 4.89366C23.8085 3.92536 23.1901 3.61708 21.9533 3.00048Z" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







        </svg>







      ),







    },







    {







      title: "Skill Development",







      desc: "Role-based learning for modern finance",







      color: "#BF1869",







      icon: (







        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">







          <path d="M29.334 12V20" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M24 16V20.0892C24 21.5111 24 22.222 23.6493 22.8095L23.6421 22.8212C23.2881 23.4068 22.6457 23.7651 21.3608 24.4815C18.7527 25.9357 17.4485 26.6629 16.0145 26.6667H15.9855C14.5515 26.6629 13.2473 25.9357 10.6392 24.4815C9.35432 23.7651 8.71188 23.4068 8.35787 22.8212L8.35073 22.8095C8 22.222 8 21.5111 8 20.0892V16" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M11.3613 6.96401L5.87462 9.61052C3.73555 10.6423 2.66602 11.1582 2.66602 11.989C2.66602 12.8198 3.73555 13.3357 5.87462 14.3675L11.4633 17.0632C13.6804 18.1326 14.7889 18.6673 15.9748 18.6673C17.1608 18.6673 18.2693 18.1326 20.4864 17.0632L26.1841 14.3148C28.2848 13.3016 29.3351 12.795 29.3327 11.9615C29.3303 11.128 28.2855 10.6316 26.1958 9.63874C24.2899 8.73318 22.4907 7.90086 20.5767 6.98977C18.2536 5.88389 17.092 5.33094 15.9131 5.334C14.7343 5.33704 13.6099 5.87937 11.3613 6.96401Z" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







        </svg>







      ),







    },







    {







      title: "Distributed Workforce",







      desc: "Consistent training across teams",







      color: "#67096E",







      icon: (







        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">







          <path d="M11.3327 4.94338C10.9244 4.76498 10.4734 4.66602 9.99935 4.66602C8.1584 4.66602 6.66602 6.1584 6.66602 7.99935C6.66602 9.08975 7.18958 10.0579 7.99903 10.666" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M4.49935 22.0017C3.48683 22.0017 2.66602 21.1468 2.66602 20.092C2.66602 17.9464 4.88794 15.8007 8.66602 15.3887" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M20.666 4.94338C21.0743 4.76499 21.5252 4.66602 21.9994 4.66602C23.8403 4.66602 25.3327 6.1584 25.3327 7.99935C25.3327 9.08975 24.8091 10.0579 23.9996 10.666" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M27.5004 21.9978C28.5129 21.9978 29.3337 21.1428 29.3337 20.0881C29.3337 17.9425 27.1119 15.7969 23.334 15.3848" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M16 15.334C18.2091 15.334 20 13.5431 20 11.334C20 9.12485 18.2091 7.33398 16 7.33398C13.7909 7.33398 12 9.12485 12 11.334C12 13.5431 13.7909 15.334 16 15.334Z" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M16 19.334C11 19.334 8 22.1912 8 25.0483C8 26.3107 8.89543 27.334 10 27.334H22C23.1045 27.334 24 26.3107 24 25.0483C24 22.1912 21 19.334 16 19.334Z" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







        </svg>







      ),







    },







    {







      title: "Product Knowledge",







      desc: "Banking, finance & insurance training",







      color: "#C05512",







      icon: (







        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">







          <path d="M7.11046 4.00001C10.3911 3.99543 13.5573 5.18279 15.9993 7.33333V28C13.5573 25.8495 10.3911 24.6621 7.11046 24.6667C5.02778 24.6667 3.98644 24.6667 3.52636 24.3723C3.25015 24.1955 3.1373 24.0825 2.9605 23.8063C2.66602 23.3463 2.66602 22.5255 2.66602 20.8839V8.53763C2.66602 6.63391 2.66602 5.68205 3.39767 4.91048C4.12932 4.13891 4.87832 4.09909 6.37631 4.01947C6.61935 4.00655 6.86412 4.00001 7.11046 4.00001Z" stroke="#C05512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M24.8889 4.00001C21.6083 3.99543 18.442 5.18279 16 7.33333V28C18.442 25.8495 21.6083 24.6621 24.8889 24.6667C26.9716 24.6667 28.0129 24.6667 28.4729 24.3723C28.7492 24.1955 28.862 24.0825 29.0388 23.8063C29.3333 23.3463 29.3333 22.5255 29.3333 20.8839V8.53763C29.3333 6.63391 29.3333 5.68205 28.6017 4.91048C27.87 4.13891 27.1211 4.09909 25.6231 4.01947C25.38 4.00655 25.1352 4.00001 24.8889 4.00001Z" stroke="#C05512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







        </svg>







      ),







    },







    {







      title: "Training Effectiveness",







      desc: "Learning analytics & progress tracking",







      color: "#2A7308",







      icon: (







        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">







          <path d="M11.334 16C12.4386 16 13.334 15.1046 13.334 14C13.334 12.8954 12.4386 12 11.334 12C10.2294 12 9.33398 12.8954 9.33398 14C9.33398 15.1046 10.2294 16 11.334 16Z" stroke="#2A7308" strokeWidth="2" />







          <path d="M19.334 22.666C20.4386 22.666 21.334 21.7706 21.334 20.666C21.334 19.5614 20.4386 18.666 19.334 18.666C18.2294 18.666 17.334 19.5614 17.334 20.666C17.334 21.7706 18.2294 22.666 19.334 22.666Z" stroke="#2A7308" strokeWidth="2" />







          <path d="M24.666 12C25.7706 12 26.666 11.1046 26.666 10C26.666 8.89543 25.7706 8 24.666 8C23.5614 8 22.666 8.89543 22.666 10C22.666 11.1046 23.5614 12 24.666 12Z" stroke="#2A7308" strokeWidth="2" />







          <path d="M20.5788 19.0617L24 12M12.7767 15.4245L17.6051 19.0617M4 25.3333L10.1194 15.8389" stroke="#2A7308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







          <path d="M26.666 28H11.9993C7.59958 28 5.39968 28 4.03286 26.6332C2.66602 25.2663 2.66602 23.0664 2.66602 18.6667V4" stroke="#2A7308" strokeWidth="2" strokeLinecap="round" />







        </svg>







      ),







    },







  ];















  const benefitCards = [

    { line1: "Structured Compliance", line2: "Regulatory Training" },

    { line1: "Industry Skills", line2: "Team Upskilling" },

    { line1: "Branch Network", line2: "Staff Training" },

    { line1: "Product Knowledge", line2: "Advisory Skills" },

    { line1: "Training Performance", line2: "Analytics Insights" },

    { line1: "Audit Compliance", line2: "Record Keeping" },

  ];















  return (







    <>







      <Header />















      <main id="main-content" className={styles["bfsi-page"]}>







      <section className={styles["bfsi-hero"]}>







        <BfsiHeroBackground />















         <nav className={styles["bfsi-breadcrumb"]} aria-label="breadcrumb">







          <Link href="/our-customers" className={styles["bfsi-breadcrumb-link"]}>







            Our Customers







          </Link>







          <span className={styles["bfsi-breadcrumb-arrow"]}>







            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">







              <path d="M4 3L8 8L4 13" stroke="#31344B" strokeWidth="1.5" />







              <path d="M8 3L12 8L8 13" stroke="#31344B" strokeWidth="1.5" />







            </svg>







          </span>







          <Link href="/industries" className={styles["bfsi-breadcrumb-link"]}>







            Industries we Serve







          </Link>







          <span className={styles["bfsi-breadcrumb-arrow"]}>







            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">







              <path d="M4 3L8 8L4 13" stroke="#31344B" strokeWidth="1.5" />







              <path d="M8 3L12 8L8 13" stroke="#31344B" strokeWidth="1.5" />







            </svg>







          </span>







          <span className={styles["bfsi-breadcrumb-current"]} aria-current="page">







            BFSI







          </span>







        </nav>















        <div className={styles["bfsi-hero-content"]}>







          <div className={styles["bfsi-hero-badge"]}>







            <span>BFSI</span>







          </div>







          <h1 className={styles["bfsi-hero-heading"]}>Secure! Scalable Learning for the BFSI <span style={{ color: "#2D4CC8" }}>Industry</span></h1>







          <p className={styles["bfsi-hero-subtext"]}>NeuroLXP enables secure, scalable, and compliant learning for banking, financial services, and insurance.</p>







          <div className={styles["bfsi-hero-buttons"]}>







            <BookDemoTrigger className={styles["bfsi-btn-secondary"]}>







              Book a Demo







            </BookDemoTrigger>







            <button







              type="button"







              className={styles["bfsi-btn-primary"]}







              onClick={() => router.push("/HomePage")}







            >







              <span>Start Learning</span>







            </button>







          </div>







        </div>







      </section>















      <section className={styles["bfsi-banner"]}>







        <div className={styles["bfsi-banner-inner"]}>







          <div className={styles["bfsi-banner-left"]}>







            <div className={styles["bfsi-banner-text"]}>







              <div className={styles["bfsi-banner-badge"]}>







                <span>Regulated Learning Ecosystem</span>







              </div>







              <h2 className={styles["bfsi-banner-heading"]}>Built for Banking! Financial Services & <span style={{ color: "#2D4CC8" }}>Insurance</span></h2>







              <p className={styles["bfsi-banner-subtext"]}>Deliver secure, compliant learning for workforce readiness and continuous upskilling across the BFSI sector.</p>







            </div>







            <div className={styles["bfsi-secure-card"]}>







              <div className={styles["bfsi-secure-icon-bubble"]}>







                <div className={styles["bfsi-secure-icon-circle"]}>







                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">







                    <path d="M10 14.5V10.5C10 7.46 12.46 5 15.5 5H16.5C19.54 5 22 7.46 22 10.5V14.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />







                    <rect x="6.5" y="14.5" width="19" height="14" rx="3" stroke="#FFFFFF" strokeWidth="2" />







                    <path d="M16 20V23" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />







                  </svg>







                </div>







              </div>







              <h3 className={styles["bfsi-secure-title"]}>Secure Learning Delivery</h3>







              <p className={styles["bfsi-secure-desc"]}>Deliver compliant, audit-ready learning from one secure platform.</p>







            </div>







          </div>







          <div className={styles["bfsi-banner-photo"]}>







            <Image src="/images/cheerful-young-man-holding-money-laptop-computer 1.png" alt="BFSI professional using NeuroLXP" fill sizes="(max-width: 1024px) 90vw, 690px" className={styles["bfsi-banner-photo-img"]} />







          </div>







        </div>







      </section>















      <section className={styles["bfsi-cards"]}>







        <div className={styles["bfsi-cards-wrapper"]}>







          <div className={`${styles["bfsi-card"]} ${styles["bfsi-card-blue"]}`}>







            <div className={styles["bfsi-card-icon"]}>







              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">







                <g filter="url(#filter0_dd_903_12986)">







                  <path d="M59.9995 34.5C59.9995 48.5833 48.5828 60 34.4995 60C20.4163 60 8.99953 48.5833 8.99953 34.5C8.99953 20.4167 20.4163 9 34.4995 9C48.5828 9 59.9995 20.4167 59.9995 34.5Z" fill="#2D4CC8" />







                </g>







                <path d="M34.9898 21.7207L34.9688 48.3874" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







                <path d="M43.9333 23.7212C41.4112 22.4638 38.3243 21.723 34.9898 21.7204C31.6552 21.7177 28.5672 22.4537 26.0431 23.7071C24.8053 24.3218 24.1864 24.6291 23.5862 25.5964C22.9859 26.5638 22.9852 27.5009 22.9837 29.3751L22.9801 34.0271C22.9741 41.6049 29.0273 45.8229 32.5334 47.6302C33.5113 48.1343 34.0001 48.3863 34.9688 48.387C35.9375 48.3878 36.4267 48.1366 37.4053 47.634C40.9143 45.8322 46.9741 41.6238 46.9801 34.0459L46.9837 29.394C46.9852 27.5198 46.9859 26.5827 46.3872 25.6144C45.7885 24.6461 45.1701 24.3378 43.9333 23.7212Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







                <defs>







                  <filter id="filter0_dd_903_12986" x="-15.0005" y="-15" width="99" height="99" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">







                    <feFlood floodOpacity="0" result="BackgroundImageFix" />







                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />







                    <feOffset dx="-8" dy="-8" />







                    <feGaussianBlur stdDeviation="8" />







                    <feComposite in2="hardAlpha" operator="out" />







                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />







                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_12986" />







                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />







                    <feOffset dx="8" dy="8" />







                    <feGaussianBlur stdDeviation="8" />







                    <feComposite in2="hardAlpha" operator="out" />







                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.776471 0 0 0 0 0.788235 0 0 0 1 0" />







                    <feBlend mode="normal" in2="effect1_dropShadow_903_12986" result="effect2_dropShadow_903_12986" />







                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_903_12986" result="shape" />







                  </filter>







                </defs>







              </svg>







            </div>







            <h3 className={styles["bfsi-card-title"]}>Compliance Ready</h3>







            {/* <p className={styles["bfsi-card-desc"]}>Stay compliant with evolving regulations.</p> */}







          </div>















          <div className={`${styles["bfsi-card"]} ${styles["bfsi-card-green"]}`}>







            <div className={styles["bfsi-card-icon"]}>







              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">







                <g filter="url(#filter0_dd_903_12964)">







                  <path d="M59.9995 34.5C59.9995 48.5833 48.5828 60 34.4995 60C20.4163 60 8.99953 48.5833 8.99953 34.5C8.99953 20.4167 20.4163 9 34.4995 9C48.5828 9 59.9995 20.4167 59.9995 34.5Z" fill="#2A7308" />







                </g>







                <path d="M28.3056 43.0483L28.3076 40.3817M34.9722 43.0536L34.9754 39.0536M41.6389 43.0588L41.6441 36.3921M22.3118 35.0436C22.3165 29.0725 22.3189 26.0869 24.1753 24.2334C26.0318 22.3799 29.0173 22.3822 34.9885 22.3869C40.9595 22.3916 43.9451 22.3939 45.7987 24.2504C47.6522 26.1068 47.6499 29.0924 47.6452 35.0635C47.6405 41.0346 47.6381 44.0202 45.7817 45.8738C43.9252 47.7273 40.9396 47.7249 34.9685 47.7202C28.9974 47.7155 26.0119 47.7132 24.1583 45.8568C22.3048 44.0003 22.3071 41.0147 22.3118 35.0436Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







                <path d="M26.9703 34.3626C29.8437 34.4606 36.3598 34.032 40.0706 28.1529M37.6426 27.4404L40.1436 27.0399C40.4484 27.0013 40.8957 27.2423 41.0054 27.5292L41.6649 29.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







                <defs>







                  <filter id="filter0_dd_903_12964" x="-15.0005" y="-15" width="99" height="99" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">







                    <feFlood floodOpacity="0" result="BackgroundImageFix" />







                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />







                    <feOffset dx="-8" dy="-8" />







                    <feGaussianBlur stdDeviation="8" />







                    <feComposite in2="hardAlpha" operator="out" />







                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />







                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_12964" />







                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />







                    <feOffset dx="8" dy="8" />







                    <feGaussianBlur stdDeviation="8" />







                    <feComposite in2="hardAlpha" operator="out" />







                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.776471 0 0 0 0 0.788235 0 0 0 1 0" />







                    <feBlend mode="normal" in2="effect1_dropShadow_903_12964" result="effect2_dropShadow_903_12964" />







                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_903_12964" result="shape" />







                  </filter>







                </defs>







              </svg>







            </div>







            <h3 className={styles["bfsi-card-title"]}>Skill Focused</h3>







            {/* <p className={styles["bfsi-card-desc"]}>Build role-based financial<br />skills.</p> */}







          </div>















          <div className={`${styles["bfsi-card"]} ${styles["bfsi-card-orange"]}`}>







            <div className={styles["bfsi-card-icon"]}>







              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">







                <g filter="url(#filter0_dd_903_12975)">







                  <path d="M59.9995 34.5C59.9995 48.5833 48.5828 60 34.4995 60C20.4163 60 8.99953 48.5833 8.99953 34.5C8.99953 20.4167 20.4163 9 34.4995 9C48.5828 9 59.9995 20.4167 59.9995 34.5Z" fill="#C05512" />







                </g>







                <path d="M30.9759 37.0514L33.6405 39.7202L38.978 34.3911" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







                <path d="M38.3224 21.7217L31.6558 21.7164C30.5512 21.7155 29.6551 22.6103 29.6542 23.7148C29.6533 24.8194 30.5481 25.7155 31.6526 25.7164L38.3193 25.7217C39.4238 25.7225 40.32 24.8278 40.3209 23.7232C40.3217 22.6187 39.427 21.7225 38.3224 21.7217Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







                <path d="M40.3218 23.7255C42.3931 23.7895 43.6282 24.0215 44.4826 24.8772C45.6533 26.0497 45.6518 27.9353 45.6489 31.7065L45.642 40.3957C45.6391 44.1668 45.6376 46.0524 44.4651 47.2231C43.2925 48.3938 41.4069 48.3923 37.6357 48.3894L32.3024 48.3852C28.5312 48.3822 26.6456 48.3807 25.4749 47.2082C24.3043 46.0357 24.3057 44.1501 24.3087 40.3789L24.3155 31.6898C24.3185 27.9186 24.32 26.0329 25.4925 24.8623C26.3482 24.0079 27.5838 23.7779 29.655 23.7171" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />







                <defs>







                  <filter id="filter0_dd_903_12975" x="-15.0005" y="-15" width="99" height="99" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">







                    <feFlood floodOpacity="0" result="BackgroundImageFix" />







                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />







                    <feOffset dx="-8" dy="-8" />







                    <feGaussianBlur stdDeviation="8" />







                    <feComposite in2="hardAlpha" operator="out" />







                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />







                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_12975" />







                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />







                    <feOffset dx="8" dy="8" />







                    <feGaussianBlur stdDeviation="8" />







                    <feComposite in2="hardAlpha" operator="out" />







                    <feColorMatrix type="matrix" values="0 0 0 0 0.776471 0 0 0 0 0.776471 0 0 0 0 0.788235 0 0 0 1 0" />







                    <feBlend mode="normal" in2="effect1_dropShadow_903_12975" result="effect2_dropShadow_903_12975" />







                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_903_12975" result="shape" />







                  </filter>







                </defs>







              </svg>







            </div>







            <h3 className={styles["bfsi-card-title"]}>Audit Friendly</h3>







            {/* <p className={styles["bfsi-card-desc"]}>Track training, certifications and progress.</p> */}







          </div>







        </div>







      </section>















      <section ref={challengesSectionRef} className={styles["bfsi-challenges"]}>







        <div className={styles["bfsi-challenges-header"]}>







          <div className={styles["bfsi-challenges-badge"]}>







            <span>Challenges & Solutions</span>







          </div>







          <h2 className={styles["bfsi-challenges-heading"]}>Addressing Key Challenges in BFSI <span style={{ color: "#2D4CC8" }}>Training</span></h2>







          <p className={styles["bfsi-challenges-subtext"]}>NeuroLXP supports BFSI organisations by simplifying compliance training, skill development, branch-level training, and learning measurement.</p>







        </div>















        <div className={`${styles["bfsi-challenges-row"]} ${styles["bfsi-challenges-row-3"]}`}>







          {challengeCards.slice(0, 3).map((card, i) => (







            <div className={styles["bfsi-challenge-card"]} key={card.title}>







              <div className={`${styles["bfsi-challenge-top"]} ${openCards.has(i) ? styles.open : ""}`} onClick={() => toggleCard(i)} onKeyDown={(e) => handleCardKeyDown(e, i)} role="button" tabIndex={0} aria-expanded={openCards.has(i)} aria-controls={`bfsi-challenge-panel-${i}`}>







                <div className={styles["bfsi-challenge-icon-circle"]} style={{ borderColor: card.color }}>







                  {card.icon}







                </div>







                <h3 className={styles["bfsi-challenge-title"]}>{card.title}</h3>







                <span className={`${styles["bfsi-challenge-chevron"]} ${openCards.has(i) ? styles.open : ""}`}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M8 13L16 21L24 13" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>







              </div>







              <div id={`bfsi-challenge-panel-${i}`} className={`${styles["bfsi-challenge-panel"]} ${openCards.has(i) ? styles.open : ""}`}>







                <p className={styles["bfsi-challenge-desc"]}>{card.desc}</p>







              </div>







            </div>







          ))}







        </div>















        <div className={`${styles["bfsi-challenges-row"]} ${styles["bfsi-challenges-row-2"]}`}>







          {challengeCards.slice(3, 5).map((card, i) => {







            const index = i + 3;







            return (







              <div className={styles["bfsi-challenge-card"]} key={card.title}>







                <div className={`${styles["bfsi-challenge-top"]} ${openCards.has(index) ? styles.open : ""}`} onClick={() => toggleCard(index)} onKeyDown={(e) => handleCardKeyDown(e, index)} role="button" tabIndex={0} aria-expanded={openCards.has(index)} aria-controls={`bfsi-challenge-panel-${index}`}>







                  <div className={styles["bfsi-challenge-icon-circle"]} style={{ borderColor: card.color }}>







                    {card.icon}







                  </div>







                  <h3 className={styles["bfsi-challenge-title"]}>{card.title}</h3>







                  <span className={`${styles["bfsi-challenge-chevron"]} ${openCards.has(index) ? styles.open : ""}`}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <path d="M8 13L16 21L24 13" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>







                </div>







                <div id={`bfsi-challenge-panel-${index}`} className={`${styles["bfsi-challenge-panel"]} ${openCards.has(index) ? styles.open : ""}`}>







                  <p className={styles["bfsi-challenge-desc"]}>{card.desc}</p>







                </div>







              </div>







            );







          })}







        </div>







      </section>















      <section className={styles["bfsi-stat-banner"]}>







        <div className={styles["bfsi-stat-panel"]}>




<Image
  src="/images/rupees.png"
  alt="Future-Ready BFSI Training"
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 1280px"
  className={styles["bfsi-stat-photo"]}
/>


          <div className={styles["bfsi-stat-shadow-overlay"]} />







          <div className={styles["bfsi-stat-content"]}>







            <div className={styles["bfsi-stat-badge"]}>







              <span className={styles["bfsi-stat-badge-text"]}>NeuroLXP</span>

              <span className={styles["bfsi-stat-badge-tm"]}>TM</span>

            </div>


            <h2 className={styles["bfsi-stat-heading"]}>Future-Ready BFSI <span style={{ color: "#2D4CC8" }}>Training</span></h2>







            <p className={styles["bfsi-stat-subtext"]}>Secure compliance.< br/> Smarter learning. < br/>Stronger BFSI teams.</p>







          </div>







        </div>







      </section>















      <section className={styles["bfsi-benefits"]}>







        <div className={styles["bfsi-benefits-header"]}>







          <div className={styles["bfsi-benefits-badge"]}>







            <span>Organization Benefits</span>







          </div>







          <h2 className={styles["bfsi-benefits-heading"]}>Benefits of NeuroLXP for BFSI <span style={{ color: "#2D4CC8" }}>Organization</span></h2>







          <p className={styles["bfsi-benefits-subtext"]}>NeuroLXP help BFSI organizations strengthen compliance, build skills, and improve workforce performance through intelligent learning.</p>







        </div>















        <div className={styles["bfsi-benefits-grid"]}>







          {benefitCards.map((item) => (

            <div

              className={styles["bfsi-benefit-card"]}

              key={`${item.line1}-${item.line2}`}

            >







              <span className={styles["bfsi-benefit-icon"]}>







                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">







                  <rect x="3" y="3" width="26" height="26" rx="6" fill="#D9D9D9" stroke="#2A7308" strokeWidth="3" />







                  <path d="M10 16.5L14 20.5L22 11.5" stroke="#2A7308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />







                </svg>







              </span>







              <p className={styles["bfsi-benefit-text"]}>

                {item.line1}<br />

                {item.line2}

              </p>







            </div>







          ))}







        </div>







      </section>















      <section className={styles["bfsi-finance-banner"]}>







        <div className={styles["bfsi-finance-panel"]}>







          <Image src="/images/office-building 2.png" alt="High-rise buildings representing future-ready finance learning" fill sizes="(max-width: 1024px) 100vw, 1280px" className={styles["bfsi-finance-photo"]} />







          <div className={styles["bfsi-finance-overlay"]} />







          <div className={styles["bfsi-finance-content"]}>







            <div className={styles["bfsi-finance-blur"]} />







            <div className={styles["bfsi-finance-badge"]}>







              <span>Future Ready</span>







            </div>







            <h2 className={styles["bfsi-finance-heading"]}>Future-Ready Finance <span style={{ color: "#2D4CC8" }}>Learning</span></h2>







            <p className={styles["bfsi-finance-subtext"]}>Empowering BFSI with secure, <br></br>intelligent learning.</p>







          </div>







        </div>







      </section>















      <section className={styles["bfsi-cta"]}>







        <div className={styles["bfsi-cta-badge"]}>


<span>
  NeuroLXP
  <sup className={styles["bfsi-last-badge-tm"]}>TM</sup>
</span>






        </div>







        <h2 className={styles["bfsi-cta-heading"]}>Enabling Smarter Learning for the BFSI <span style={{ color: "#2D4CC8" }}>Industry</span></h2>







        <p className={styles["bfsi-cta-subtext"]}>AI-powered learning, compliance-ready training, and advanced analytics<br />help BFSI teams stay skilled, compliant, and future-ready.</p>







      </section>







      </main>















      <Footer />







    </>







  );







}