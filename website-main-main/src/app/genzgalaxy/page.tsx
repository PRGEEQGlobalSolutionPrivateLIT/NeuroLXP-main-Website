"use client";



import type { NextPage } from "next";



import Image from "next/image";



import Link from "next/link";



import { useEffect, useRef, useState } from "react";



import styles from "./genzgalaxy.module.css";



import Header from "../../components/Header/header";



import Footer from "../../components/Footer/footer";



const PRELOADED_HERO_IMAGES = [



  "images/slide-1.webp",



  "/images/man-portrait-posing-loft-modern-space 1.png",



  "/images/confident-businessman 2.png",



  "/images/portrait-cheerful-confident-male-student.png",



  "/images/portrait-woman-holding-digital-tablet.png",



  "/images/young-person-intership 2.png",



];



const REVEAL_TIMEOUT_MS = 2500;



function loadImage(src: string): Promise<void> {



  return new Promise((resolve) => {



    const img = new window.Image();



    img.onload = () => resolve();



    img.onerror = () => resolve(); // don't block the reveal on one failed image



    img.src = src;



  });



}



function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | void> {



  return Promise.race([promise, new Promise<void>((resolve) => setTimeout(resolve, ms))]);



}



const GenZgalaxy: NextPage = () => {



  const [isLayoutReady, setIsLayoutReady] = useState(false);



  const viewportRef = useRef<HTMLDivElement>(null);



  const pageRef = useRef<HTMLElement>(null);



  // Measure the unscaled viewport, so a 1440px design also fits narrower laptops.



  // Large monitors keep the original size with equal margins on both sides.



  useEffect(() => {



    const viewport = viewportRef.current;



    const page = pageRef.current;



    if (!viewport || !page) return;



    let frame = 0;



    let previousWidth = -1;



    const updateScale = () => {



      const width = viewport.clientWidth;



      if (width <= 0 || width === previousWidth) return;



      previousWidth = width;



      page.style.setProperty("--genz-page-scale", String(Math.min(1, width / 1440)));



    };



    const scheduleScale = () => {



      cancelAnimationFrame(frame);



      frame = requestAnimationFrame(updateScale);



    };



    updateScale();



    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleScale);



    observer?.observe(viewport);



    window.addEventListener("resize", scheduleScale);



    return () => {



      observer?.disconnect();



      window.removeEventListener("resize", scheduleScale);



      cancelAnimationFrame(frame);



      page.style.removeProperty("--genz-page-scale");



    };



  }, []);



  useEffect(() => {



    let cancelled = false;



    const revealLayout = () => {



      if (cancelled) return;



      requestAnimationFrame(() => {



        if (cancelled) return;



        requestAnimationFrame(() => {



          if (!cancelled) {



            setIsLayoutReady(true);



          }



        });



      });



    };



    const fontsReady = document.fonts?.ready ? document.fonts.ready.catch(() => undefined) : Promise.resolve();



    const imagesReady = Promise.all(PRELOADED_HERO_IMAGES.map(loadImage));



    withTimeout(Promise.all([fontsReady, imagesReady]), REVEAL_TIMEOUT_MS).then(revealLayout);



    return () => {



      cancelled = true;



    };



  }, []);



  /*



   * Gen Z Galaxy page-only scroll fix:



   * - removes nested vertical scroll containers created by outer layout wrappers



   * - keeps the Header in normal document flow instead of appearing sticky



   * - restores every touched inline style when leaving this route



   */



  useEffect(() => {



    const main = pageRef.current;



    if (!main) return;



    type SavedStyle = {



      el: HTMLElement;



      property: string;



      value: string;



      priority: string;



    };



    const saved: SavedStyle[] = [];



    const setImportant = (el: HTMLElement, property: string, value: string) => {



      saved.push({



        el,



        property,



        value: el.style.getPropertyValue(property),



        priority: el.style.getPropertyPriority(property),



      });



      el.style.setProperty(property, value, "important");



    };



    /*



     * Make the browser/window the ONLY vertical scroll container.



     * Start from <main> and neutralize any parent wrapper that may have



     * height/max-height + overflow:auto/scroll coming from the app layout.



     */



    let current: HTMLElement | null = main;



    while (current && current !== document.body) {



      const computed = window.getComputedStyle(current);



      const overflowY = computed.overflowY;



      const height = computed.height;



      setImportant(current, "overflow-y", "visible");



      setImportant(current, "max-height", "none");



      if (current !== main) {



        if (



          overflowY === "auto" ||



          overflowY === "scroll" ||



          height === `${window.innerHeight}px`



        ) {



          setImportant(current, "height", "auto");



          setImportant(current, "min-height", "0");



        }



      }



      current = current.parentElement;



    }



    /* BODY must not become a second independent scroll area. */



    setImportant(document.body, "overflow-y", "visible");



    setImportant(document.body, "height", "auto");



    setImportant(document.body, "max-height", "none");



    /* HTML/browser owns the one visible page scrollbar. */



    const html = document.documentElement;



    setImportant(html, "overflow-y", "auto");



    setImportant(html, "height", "auto");



    setImportant(html, "max-height", "none");



    /*



     * Header must scroll away with the page.



     * !important is intentional here so a sticky/fixed rule in header.css



     * cannot override this page-specific behavior.



     */



    const header = document.querySelector<HTMLElement>(".nlxp-header");



    if (header) {



      setImportant(header, "position", "relative");



      setImportant(header, "top", "auto");



      setImportant(header, "right", "auto");



      setImportant(header, "bottom", "auto");



      setImportant(header, "left", "auto");



      setImportant(header, "inset", "auto");



    }



    return () => {



      for (let i = saved.length - 1; i >= 0; i -= 1) {



        const { el, property, value, priority } = saved[i];



        if (value) {



          el.style.setProperty(property, value, priority);



        } else {



          el.style.removeProperty(property);



        }



      }



    };



  }, []);



  return (



     <>



      <title>GenZGalaxy | NeuroLXP</title>



      {PRELOADED_HERO_IMAGES.map((src) => (



        <link key={src} rel="preload" as="image" href={src} />



      ))}



      <Header />



      <div ref={viewportRef} className={styles.pageViewport}>



      <main ref={pageRef} className={`${styles.genzgalaxy}${isLayoutReady ? ` ${styles.layoutReady}` : ""}`} id="main-content" tabIndex={0} role="main" aria-label="GenZGalaxy page content">



      <svg className={styles.genzHeroFrame} width="1280" height="1072" viewBox="0 0 1280 1072" fill="none" aria-hidden="true" focusable="false">



        <g filter="url(#genzHeroInnerShadow)">



          <path d="M0 16C0 7.16346 7.16344 0 16 0H1264C1272.84 0 1280 7.16344 1280 16V647.243C1280 652.662 1277.26 657.713 1272.71 660.663L643.278 1069.29C637.941 1072.76 631.058 1072.73 625.748 1069.23L7.18205 660.676C2.69784 657.714 0 652.699 0 647.325V16Z" fill="#DFE6E9" />



        </g>



        <defs>



          <filter id="genzHeroInnerShadow" x="-8" y="-8" width="1296" height="1087.88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">



            <feFlood floodOpacity="0" result="BackgroundImageFix" />



            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />



            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />



            <feOffset dx="-4" dy="-4" />



            <feGaussianBlur stdDeviation="4" />



            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />



            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />



            <feBlend mode="normal" in2="shape" result="effect1InnerShadow" />



            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />



            <feOffset dx="4" dy="4" />



            <feGaussianBlur stdDeviation="4" />



            <feComposite in2="hardAlpha2" operator="arithmetic" k2="-1" k3="1" />



            <feColorMatrix type="matrix" values="0 0 0 0 0.669231 0 0 0 0 0.669231 0 0 0 0 0.669231 0 0 0 0.6 0" />



            <feBlend mode="normal" in2="effect1InnerShadow" result="effect2InnerShadow" />



          </filter>



        </defs>



      </svg>



      <div className={styles.frameContainer}>



        <div className={styles.frameDiv}>



          <div className={`${styles.frameWrapper} ${styles.frameRotate1st}`}>



            <Image className={`${styles.frameChild} ${styles.heroImageStep}`} style={{ animationDelay: "0s" }} src="/images/slide-1.webp" width={300} height={520} sizes="100vw" priority alt="" aria-hidden="true" />



            <Image className={`${styles.frameChild} ${styles.heroImageStep}`} style={{ animationDelay: "-3s" }} src="/images/portrait-cheerful-confident-male-student.png" width={300} height={520} sizes="100vw" alt="" aria-hidden="true" />



          </div>



          <div className={styles.frameParent2}>



            <div className={`${styles.frameWrapper2} ${styles.frameSlotMiddle} ${styles.frameRotateMiddle}`}>



              <Image className={`${styles.frameChild} ${styles.heroImageStep}`} style={{ animationDelay: "-1s" }} src="/images/man-portrait-posing-loft-modern-space 1.png" width={300} height={520} sizes="100vw" alt="" aria-hidden="true" />



              <Image className={`${styles.frameChild} ${styles.heroImageStep}`} style={{ animationDelay: "-4s" }} src="/images/portrait-woman-holding-digital-tablet.png" width={300} height={520} sizes="100vw" alt="" aria-hidden="true" />



            </div>



            <div className={`${styles.frameWrapper2} ${styles.frameSlotLast} ${styles.frameRotateLast}`}>



              <Image className={`${styles.frameChild} ${styles.heroImageStep}`} style={{ animationDelay: "-2s" }} src="/images/confident-businessman 2.png" width={300} height={520} sizes="100vw" priority alt="" aria-hidden="true" />



              <Image className={`${styles.frameChild} ${styles.heroImageStep} ${styles.slide6Smaller}`} style={{ animationDelay: "-5s" }} src="/images/young-person-intership 2.png" width={300} height={520} sizes="100vw" alt="" aria-hidden="true" />



            </div>



          </div>



        </div>



        <div className={styles.frameParent3}>



          <div className={styles.frameParent4}>



            <Link href="/HomePage" className={styles.frameWrapper4}>



              <div className={styles.explorePlatformParent}>



                <div className={styles.explorePlatform}>Explore Platform</div>



              </div>



            </Link>



          </div>



          <div className={styles.frameParent5}>



            <div className={styles.genzgalaxyGroup}>



              <h1 className={styles.genzgalaxy3} style={{ margin: 0, fontWeight: 700 }}>



                <span className={styles.gen}>Gen</span>



                <span className={styles.z}>Z</span>



                <span className={styles.gen}>Galaxy</span>



              </h1>



              <h2 className={styles.aLearningSpace} style={{ margin: 0, fontWeight: 700 }}>



                A Learning Space That Actually Feels Modern



              </h2>



            </div>



            <div className={styles.genzgalaxyIsBuilt}>GenZGalaxy is built for the digital generation. It offers fast, interactive learning that turns every journey into an experience worth exploring.</div>



          </div>



        </div>



      </div>



      <div className={styles.frameParent6}>



        <div



          id="genz-talk-to-expert-button-slot"



          data-expert-button-slot



          className={styles.sectionExpertSlot}



        />



        <div className={styles.frameParent7}>



          <div className={styles.frameParent8}>



            <div className={styles.whyGenzBadge}>Why GenZGalaxy</div>



            <h2 className={styles.builtForTheContainer} style={{ margin: 0, fontWeight: 700 }}>



              <span className={styles.builtForThe}>{`Built for the `}</span>



              <span className={styles.futureOfLearning}>Future of Learning</span>



            </h2>



          </div>



          <div className={styles.modernLearnersExpect}>Modern learners expect fast, intuitive, and interactive experiences that keep them engaged.</div>



        </div>



        <div className={styles.frameParent9}>



          <div className={styles.frameParent10}>



            <div className={styles.polygonParent}>



              <svg className={styles.polygonIcon} viewBox="0 0 300 296" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">



                <defs>



                  <filter id="pentagonShadow1" x="-30%" y="-30%" width="160%" height="160%">



                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="cardBlur" />



                    <feOffset in="cardBlur" dx="8" dy="8" result="darkOffset" />



                    <feFlood floodColor="#c4c4c4" floodOpacity="1" result="darkColour" />



                    <feComposite in="darkColour" in2="darkOffset" operator="in" result="darkShadow" />



                    <feOffset in="cardBlur" dx="-8" dy="-8" result="lightOffset" />



                    <feFlood floodColor="#ffffff" floodOpacity="0.8" result="lightColour" />



                    <feComposite in="lightColour" in2="lightOffset" operator="in" result="lightShadow" />



                    <feMerge>



                      <feMergeNode in="darkShadow" />



                      <feMergeNode in="lightShadow" />



                      <feMergeNode in="SourceGraphic" />



                    </feMerge>



                  </filter>



                </defs>



                <path d="M145 2 Q150 -1 155 2 L296 108 Q300 111 298.5 116 L246 290 Q244 296 238 296 H62 Q56 296 54 290 L1.5 116 Q0 111 4 108 Z" fill="#dfe6e9" filter={`url(#pentagonShadow1)`} />



                <polygon points="150,40 270,128 224,268 76,268 30,128" fill="#C29CC5" />



              </svg>



              <h3 className={styles.featureLabel}>Gamified<br />Elements</h3>



            </div>



            <div className={styles.polygonParent}>



              <svg className={styles.polygonIcon} viewBox="0 0 300 296" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">



                <defs>



                  <filter id="pentagonShadow2" x="-30%" y="-30%" width="160%" height="160%">



                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="cardBlur" />



                    <feOffset in="cardBlur" dx="8" dy="8" result="darkOffset" />



                    <feFlood floodColor="#c4c4c4" floodOpacity="1" result="darkColour" />



                    <feComposite in="darkColour" in2="darkOffset" operator="in" result="darkShadow" />



                    <feOffset in="cardBlur" dx="-8" dy="-8" result="lightOffset" />



                    <feFlood floodColor="#ffffff" floodOpacity="0.8" result="lightColour" />



                    <feComposite in="lightColour" in2="lightOffset" operator="in" result="lightShadow" />



                    <feMerge>



                      <feMergeNode in="darkShadow" />



                      <feMergeNode in="lightShadow" />



                      <feMergeNode in="SourceGraphic" />



                    </feMerge>



                  </filter>



                </defs>



                <path d="M145 2 Q150 -1 155 2 L296 108 Q300 111 298.5 116 L246 290 Q244 296 238 296 H62 Q56 296 54 290 L1.5 116 Q0 111 4 108 Z" fill="#dfe6e9" filter={`url(#pentagonShadow2)`} />



                <polygon points="150,40 270,128 224,268 76,268 30,128" fill="#E5A2C3" />



              </svg>



              <h3 className={styles.featureLabel}>Interactive<br />Content</h3>



            </div>



            <div className={styles.polygonParent}>



              <svg className={styles.polygonIcon} viewBox="0 0 300 296" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">



                <defs>



                  <filter id="pentagonShadow3" x="-30%" y="-30%" width="160%" height="160%">



                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="cardBlur" />



                    <feOffset in="cardBlur" dx="8" dy="8" result="darkOffset" />



                    <feFlood floodColor="#c4c4c4" floodOpacity="1" result="darkColour" />



                    <feComposite in="darkColour" in2="darkOffset" operator="in" result="darkShadow" />



                    <feOffset in="cardBlur" dx="-8" dy="-8" result="lightOffset" />



                    <feFlood floodColor="#ffffff" floodOpacity="0.8" result="lightColour" />



                    <feComposite in="lightColour" in2="lightOffset" operator="in" result="lightShadow" />



                    <feMerge>



                      <feMergeNode in="darkShadow" />



                      <feMergeNode in="lightShadow" />



                      <feMergeNode in="SourceGraphic" />



                    </feMerge>



                  </filter>



                </defs>



                <path d="M145 2 Q150 -1 155 2 L296 108 Q300 111 298.5 116 L246 290 Q244 296 238 296 H62 Q56 296 54 290 L1.5 116 Q0 111 4 108 Z" fill="#dfe6e9" filter={`url(#pentagonShadow3)`} />



                <polygon points="150,40 270,128 224,268 76,268 30,128" fill="#FF9C9C" />



              </svg>



              <h3 className={styles.featureLabel}>Short, Focused<br />Lessons</h3>



            </div>



            <div className={styles.polygonParent}>



              <svg className={styles.polygonIcon} viewBox="0 0 300 296" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">



                <defs>



                  <filter id="pentagonShadow4" x="-30%" y="-30%" width="160%" height="160%">



                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="cardBlur" />



                    <feOffset in="cardBlur" dx="8" dy="8" result="darkOffset" />



                    <feFlood floodColor="#c4c4c4" floodOpacity="1" result="darkColour" />



                    <feComposite in="darkColour" in2="darkOffset" operator="in" result="darkShadow" />



                    <feOffset in="cardBlur" dx="-8" dy="-8" result="lightOffset" />



                    <feFlood floodColor="#ffffff" floodOpacity="0.8" result="lightColour" />



                    <feComposite in="lightColour" in2="lightOffset" operator="in" result="lightShadow" />



                    <feMerge>



                      <feMergeNode in="darkShadow" />



                      <feMergeNode in="lightShadow" />



                      <feMergeNode in="SourceGraphic" />



                    </feMerge>



                  </filter>



                </defs>



                <path d="M145 2 Q150 -1 155 2 L296 108 Q300 111 298.5 116 L246 290 Q244 296 238 296 H62 Q56 296 54 290 L1.5 116 Q0 111 4 108 Z" fill="#dfe6e9" filter={`url(#pentagonShadow4)`} />



                <polygon points="150,40 270,128 224,268 76,268 30,128" fill="#7FAB6A" />



              </svg>



              <h3 className={styles.featureLabel}>Group-Based<br />Learning</h3>



            </div>



          </div>



          <div className={styles.frameParent10}>



            <div className={styles.polygonParent}>



              <svg className={styles.polygonIcon} viewBox="0 0 300 296" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">



                <defs>



                  <filter id="pentagonShadow5" x="-30%" y="-30%" width="160%" height="160%">



                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="cardBlur" />



                    <feOffset in="cardBlur" dx="8" dy="8" result="darkOffset" />



                    <feFlood floodColor="#c4c4c4" floodOpacity="1" result="darkColour" />



                    <feComposite in="darkColour" in2="darkOffset" operator="in" result="darkShadow" />



                    <feOffset in="cardBlur" dx="-8" dy="-8" result="lightOffset" />



                    <feFlood floodColor="#ffffff" floodOpacity="0.8" result="lightColour" />



                    <feComposite in="lightColour" in2="lightOffset" operator="in" result="lightShadow" />



                    <feMerge>



                      <feMergeNode in="darkShadow" />



                      <feMergeNode in="lightShadow" />



                      <feMergeNode in="SourceGraphic" />



                    </feMerge>



                  </filter>



                </defs>



                <path d="M145 2 Q150 -1 155 2 L296 108 Q300 111 298.5 116 L246 290 Q244 296 238 296 H62 Q56 296 54 290 L1.5 116 Q0 111 4 108 Z" fill="#dfe6e9" filter={`url(#pentagonShadow5)`} />



                <polygon points="150,40 270,128 224,268 76,268 30,128" fill="#BCAC6A" />



              </svg>



              <h3 className={styles.featureLabel}>Mobile-Friendly<br />Design</h3>



            </div>



            <div className={styles.polygonParent}>



              <svg className={styles.polygonIcon} viewBox="0 0 300 296" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">



                <defs>



                  <filter id="pentagonShadow6" x="-30%" y="-30%" width="160%" height="160%">



                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="cardBlur" />



                    <feOffset in="cardBlur" dx="8" dy="8" result="darkOffset" />



                    <feFlood floodColor="#c4c4c4" floodOpacity="1" result="darkColour" />



                    <feComposite in="darkColour" in2="darkOffset" operator="in" result="darkShadow" />



                    <feOffset in="cardBlur" dx="-8" dy="-8" result="lightOffset" />



                    <feFlood floodColor="#ffffff" floodOpacity="0.8" result="lightColour" />



                    <feComposite in="lightColour" in2="lightOffset" operator="in" result="lightShadow" />



                    <feMerge>



                      <feMergeNode in="darkShadow" />



                      <feMergeNode in="lightShadow" />



                      <feMergeNode in="SourceGraphic" />



                    </feMerge>



                  </filter>



                </defs>



                <path d="M145 2 Q150 -1 155 2 L296 108 Q300 111 298.5 116 L246 290 Q244 296 238 296 H62 Q56 296 54 290 L1.5 116 Q0 111 4 108 Z" fill="#dfe6e9" filter={`url(#pentagonShadow6)`} />



                <polygon points="150,40 270,128 224,268 76,268 30,128" fill="#9CA7D2" />



              </svg>



              <h3 className={styles.featureLabel}>Challenges &<br />Rewards</h3>



            </div>



            <div className={styles.polygonParent}>



              <svg className={styles.polygonIcon} viewBox="0 0 300 296" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">



                <defs>



                  <filter id="pentagonShadow7" x="-30%" y="-30%" width="160%" height="160%">



                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="cardBlur" />



                    <feOffset in="cardBlur" dx="8" dy="8" result="darkOffset" />



                    <feFlood floodColor="#c4c4c4" floodOpacity="1" result="darkColour" />



                    <feComposite in="darkColour" in2="darkOffset" operator="in" result="darkShadow" />



                    <feOffset in="cardBlur" dx="-8" dy="-8" result="lightOffset" />



                    <feFlood floodColor="#ffffff" floodOpacity="0.8" result="lightColour" />



                    <feComposite in="lightColour" in2="lightOffset" operator="in" result="lightShadow" />



                    <feMerge>



                      <feMergeNode in="darkShadow" />



                      <feMergeNode in="lightShadow" />



                      <feMergeNode in="SourceGraphic" />



                    </feMerge>



                  </filter>



                </defs>



                <path d="M145 2 Q150 -1 155 2 L296 108 Q300 111 298.5 116 L246 290 Q244 296 238 296 H62 Q56 296 54 290 L1.5 116 Q0 111 4 108 Z" fill="#dfe6e9" filter={`url(#pentagonShadow7)`} />



                <polygon points="150,40 270,128 224,268 76,268 30,128" fill="#6CC3C6" />



              </svg>



              <h3 className={styles.featureLabel}>Responsive<br />Quizzes</h3>



            </div>



            <div className={styles.polygonParent}>



              <svg className={styles.polygonIcon} viewBox="0 0 300 296" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">



                <defs>



                  <filter id="pentagonShadow8" x="-30%" y="-30%" width="160%" height="160%">



                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="cardBlur" />



                    <feOffset in="cardBlur" dx="8" dy="8" result="darkOffset" />



                    <feFlood floodColor="#c4c4c4" floodOpacity="1" result="darkColour" />



                    <feComposite in="darkColour" in2="darkOffset" operator="in" result="darkShadow" />



                    <feOffset in="cardBlur" dx="-8" dy="-8" result="lightOffset" />



                    <feFlood floodColor="#ffffff" floodOpacity="0.8" result="lightColour" />



                    <feComposite in="lightColour" in2="lightOffset" operator="in" result="lightShadow" />



                    <feMerge>



                      <feMergeNode in="darkShadow" />



                      <feMergeNode in="lightShadow" />



                      <feMergeNode in="SourceGraphic" />



                    </feMerge>



                  </filter>



                </defs>



                <path d="M145 2 Q150 -1 155 2 L296 108 Q300 111 298.5 116 L246 290 Q244 296 238 296 H62 Q56 296 54 290 L1.5 116 Q0 111 4 108 Z" fill="#dfe6e9" filter={`url(#pentagonShadow8)`} />



                <polygon points="150,40 270,128 224,268 76,268 30,128" fill="#A29BBE" />



              </svg>



              <h3 className={styles.featureLabel}>Peer<br />Discussion</h3>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.image20Parent}>



        <div className={styles.image20} />



        <div className={styles.rectangleParent}>



          <Image className={styles.rectangleIcon} src="/images/bg.webp" width={1207} height={946} sizes="100vw" priority alt="" aria-hidden="true" />



          <div className={styles.wrapperPolygon14}>



            <div className={styles.wrapperPolygon14Child} aria-hidden="true" />



          </div>



          <Image className={styles.successfulYoungBusinessmanSIcon} src="/images/successful-young-businessman-showing-thumbs-up.png" width={653} height={978} sizes="100vw" alt="" aria-hidden="true" />



          <div className={styles.frameChild18} />



          <div className={styles.frameParent12}>



            <div className={styles.frameParent13}>



              <div className={styles.frameParent14}>



                <div className={styles.whatMakesUsDifferentBadge}>What Makes Us Different</div>



                <h2 className={styles.learnYourWay} >



                  Learn Your Way, Every Day



                </h2>



              </div>



              <div className={styles.learnAtYour}>Learn at your pace with smart suggestions.</div>



            </div>



            <div className={styles.frameParent15}>



              <div className={styles.frameParent16}>



                <div className={styles.frameChild20} />



                <div className={styles.skillPathWrapper}>



                  <div className={styles.skillPath}>Skill Path</div>



                </div>



              </div>



              <div className={styles.frameParent16}>



                <div className={styles.frameChild21} />



                <div className={styles.usefulResourcesWrapper}>



                  <div className={styles.usefulResources}>Useful Resources</div>



                </div>



              </div>



              <div className={styles.frameParent16}>



                <div className={styles.frameChild21} />



                <div className={styles.practiceTasksWrapper}>



                  <div className={styles.practiceTasks}>Practice Tasks</div>



                </div>



              </div>



              <div className={styles.frameParent16}>



                <div className={styles.frameChild21} />



                <div className={styles.careerFocusedModulesWrapper}>



                  <div className={styles.careerFocusedModules}>Career-Focused Modules</div>



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.genzgalaxyInner2}>



        <div className={styles.frameParent20}>



          <div className={styles.frameParent21}>



            <div className={styles.frameParent8}>



              <div className={styles.outcomeDrivenBadge}>Outcome-Driven Learning</div>



              <h2 className={styles.turnLearningInto} style={{ margin: 0, fontWeight: 700 }}>



                Turn Learning into Real-World Results



              </h2>



            </div>



            <div className={styles.lessTheoryMore}>Less theory and more <span style={{ whiteSpace: "nowrap" }}>real-world</span> value make learning truly useful, not just complete.</div>



          </div>



          <div className={styles.frameParent23}>



            <div className={styles.frameParent24}>



              <div className={styles.frameChild25} />



              <div className={styles.technicalAwarenessParent}>



                <h3 className={styles.technicalAwareness} style={{ margin: 0, fontWeight: 700 }}>



                  Technical Awareness



                </h3>



                <div className={styles.frameChild26} />



              </div>



              <div className={styles.frameChild27}>



                <svg width="48" height="48" viewBox="0 0 77 77" fill="none" aria-hidden="true" focusable="false">



                  <path d="M56.0108 29.1321L55.0768 27.4832C54.3707 26.2361 54.0174 25.6126 53.4165 25.3639C52.8159 25.1153 52.1361 25.3115 50.777 25.7039L48.4683 26.3655C47.6004 26.5691 46.6902 26.4536 45.8978 26.0394L45.2603 25.6653C44.5811 25.2225 44.0584 24.5698 43.769 23.8025L43.1373 21.8825C42.7218 20.612 42.5139 19.9767 42.0195 19.6133C41.5251 19.25 40.8681 19.25 39.5543 19.25H37.4451C36.1313 19.25 35.4742 19.25 34.9798 19.6133C34.4854 19.9767 34.2775 20.612 33.862 21.8825L33.2303 23.8025C32.9409 24.5698 32.4183 25.2225 31.739 25.6653L31.1015 26.0394C30.3092 26.4536 29.3989 26.5691 28.5311 26.3655L26.2223 25.7039C24.8632 25.3115 24.1836 25.1153 23.5827 25.3639C22.9818 25.6126 22.6287 26.2361 21.9224 27.4832L20.9885 29.1321C20.3264 30.3011 19.9954 30.8856 20.0596 31.5078C20.1239 32.1299 20.567 32.6313 21.4534 33.6342L23.4042 35.8531C23.881 36.4672 24.2195 37.5375 24.2195 38.4997C24.2195 39.4625 23.8811 40.5325 23.4042 41.1466L21.4534 43.3658C20.567 44.3684 20.1239 44.8698 20.0596 45.4919C19.9954 46.1143 20.3264 46.6989 20.9885 47.8677L21.9223 49.5165C22.6287 50.7635 22.9818 51.3872 23.5827 51.6359C24.1836 51.8845 24.8632 51.6882 26.2224 51.2958L28.531 50.6342C29.3989 50.4305 30.3095 50.5463 31.1019 50.9605L31.7392 51.3346C32.4186 51.7774 32.9409 52.4303 33.2303 53.1974L33.862 55.1176C34.2775 56.3881 34.4854 57.0233 34.9798 57.3865C35.4742 57.75 36.1313 57.75 37.4451 57.75H39.5543C40.8681 57.75 41.5251 57.75 42.0195 57.3865C42.5139 57.0233 42.7218 56.3881 43.1373 55.1176L43.769 53.1974C44.0584 52.4303 44.5808 51.7774 45.2603 51.3346L45.8975 50.9605C46.6899 50.5463 47.6004 50.4305 48.4683 50.6342L50.777 51.2958C52.1361 51.6882 52.8156 51.8845 53.4165 51.6359C54.0174 51.3872 54.3707 50.7635 55.0771 49.5168L56.0108 47.8677C56.673 46.6989 57.0041 46.1143 56.9396 45.4919C56.8754 44.8698 56.4323 44.3684 55.5459 43.3658L53.5952 41.1466C53.1181 40.5325 52.78 39.4625 52.78 38.4997C52.78 37.5375 53.1184 36.4672 53.5952 35.8531L55.5459 33.6342C56.4323 32.6313 56.8754 32.1299 56.9396 31.5078C57.0041 30.8856 56.673 30.3011 56.0108 29.1321Z" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" />



                  <path d="M38.4993 44.1159C41.6002 44.1159 44.1139 41.6022 44.1139 38.5013C44.1139 35.4005 41.6002 32.8867 38.4993 32.8867C35.3985 32.8867 32.8848 35.4005 32.8848 38.5013C32.8848 41.6022 35.3985 44.1159 38.4993 44.1159Z" stroke="#BF1869" strokeWidth="2" />



                  <path d="M60.9577 6.41797V15.5892C55.1705 9.91608 47.2437 6.41797 38.4993 6.41797C20.7802 6.41797 6.41602 20.7822 6.41602 38.5013C6.41602 43.0642 7.36854 47.4047 9.08564 51.3346M16.041 70.5846V61.4133C21.828 67.0866 29.7552 70.5846 38.4993 70.5846C56.2183 70.5846 70.5827 56.2203 70.5827 38.5013C70.5827 33.9384 69.6301 29.5979 67.913 25.668" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                </svg>



              </div>



            </div>



            <div className={styles.frameParent25}>



              <div className={styles.frameChild28} />



              <div className={styles.problemSolvingWrapper}>



                <h3 className={styles.problemSolving} style={{ margin: 0, fontWeight: 700 }}>



                  Problem Solving



                </h3>



              </div>



              <div className={styles.frameChild29}>



                <svg width="48" height="48" viewBox="0 0 77 77" fill="none" aria-hidden="true" focusable="false">



                  <path d="M19.5364 48.1217C18.3224 45.3927 17.6455 42.3567 17.6455 39.1573C17.6455 27.2751 26.9822 17.6426 38.4997 17.6426C50.0173 17.6426 59.3538 27.2751 59.3538 39.1573C59.3538 42.3567 58.6769 45.3927 57.4629 48.1217" stroke="#861109" strokeWidth="2" strokeLinecap="round" />



                  <path d="M38.5 6.41406V9.6224" stroke="#861109" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M70.5833 38.4961H67.375" stroke="#861109" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M9.62533 38.4961H6.41699" stroke="#861109" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M61.1846 15.8086L58.916 18.0772" stroke="#861109" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M18.0851 18.0811L15.8164 15.8125" stroke="#861109" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M46.5753 61.9396C49.817 60.8912 51.117 57.9241 51.4827 54.9397C51.5918 54.0481 50.8584 53.3086 49.96 53.3086L27.1964 53.3092C26.2673 53.3092 25.5211 54.0978 25.6321 55.0202C25.9903 57.9989 26.8944 60.1747 30.3297 61.9396M46.5753 61.9396C46.5753 61.9396 30.8952 61.9396 30.3297 61.9396M46.5753 61.9396C46.1854 68.1799 44.3833 70.6512 38.5217 70.5819C32.252 70.6978 30.8096 67.6431 30.3297 61.9396" stroke="#861109" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                </svg>



              </div>



            </div>



            <div className={styles.frameParent26}>



              <div className={styles.frameChild30} />



              <div className={styles.criticalThinkingWrapper}>



                <h3 className={styles.technicalAwareness} style={{ margin: 0, fontWeight: 700 }}>



                  Critical Thinking



                </h3>



              </div>



              <div className={styles.frameChild29b}>



                <svg width="48" height="48" viewBox="0 0 77 77" fill="none" aria-hidden="true" focusable="false">



                  <path d="M46.5202 38.5014C46.5202 42.9312 42.9291 46.5223 38.4993 46.5223M46.5202 38.5014C46.5202 34.0714 42.9291 30.4805 38.4993 30.4805M46.5202 38.5014H51.3327M38.4993 46.5223C34.0696 46.5223 30.4785 42.9312 30.4785 38.5014M38.4993 46.5223V51.3348M38.4993 30.4805C34.0696 30.4805 30.4785 34.0714 30.4785 38.5014M38.4993 30.4805V25.668M30.4785 38.5014H25.666M44.171 32.8297L47.5738 29.4268M32.8277 44.1728L29.4248 47.5759M44.171 44.1728L47.5738 47.5759M32.8277 32.8297L29.4248 29.4268" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M12.8327 52.9392C12.8327 57.4886 15.989 61.3008 20.2313 62.3053C21.4382 62.5912 22.4259 63.5893 22.7681 64.7815C23.7301 68.1329 26.818 70.5851 30.4785 70.5851C34.9083 70.5851 38.4993 66.994 38.4993 62.5642C38.4993 66.994 42.0904 70.5847 46.5202 70.5847C50.1809 70.5847 53.2686 68.1326 54.2304 64.7812C54.5728 63.589 55.5603 62.5909 56.7673 62.305C61.0097 61.3005 64.166 57.4883 64.166 52.9389C64.166 52.2555 64.0948 51.5888 63.9594 50.9459C63.637 49.4139 64.4362 47.6147 65.7894 46.8273C68.6558 45.1606 70.5827 42.0559 70.5827 38.5014C70.5827 34.9466 68.6558 31.8421 65.7894 30.1752C64.4362 29.3881 63.637 27.5888 63.9594 26.0568C64.0948 25.4138 64.166 24.7471 64.166 24.0638C64.166 19.5144 61.0097 15.7022 56.7673 14.6976C55.5606 14.4118 54.5728 13.4136 54.2304 12.2214C53.2686 8.87013 50.1809 6.41797 46.5202 6.41797C42.0904 6.41797 38.4993 10.0093 38.4993 14.4391C38.4993 10.0093 34.9083 6.41826 30.4785 6.41826C26.818 6.41826 23.7301 8.87042 22.7681 12.2217C22.4259 13.4139 21.4382 14.4121 20.2313 14.6979C15.989 15.7025 12.8327 19.5147 12.8327 24.0641C12.8327 24.7474 12.9039 25.4141 13.0393 26.0571C13.3618 27.5891 12.5625 29.3884 11.2092 30.1755C8.34294 31.8424 6.41602 34.9469 6.41602 38.5017C6.41602 42.0562 8.34294 45.1609 11.2092 46.8277C12.5625 47.6147 13.3618 49.4142 13.0393 50.9462C12.9039 51.5892 12.8327 52.2558 12.8327 52.9392Z" stroke="#67096E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                </svg>



              </div>



            </div>



            <div className={styles.frameParent27}>



              <div className={styles.frameChild32} />



              <div className={styles.workingWithOthersWrapper}>



                <h3 className={styles.workingWithOthers} style={{ margin: 0, fontWeight: 700 }}>



                  Mutual Support



                </h3>



              </div>



              <div className={styles.frameChild33}>



                <svg width="48" height="48" viewBox="0 0 77 77" fill="none" aria-hidden="true" focusable="false">



                  <path d="M48.125 25.666C48.125 30.9817 43.8159 35.291 38.5 35.291C33.1841 35.291 28.875 30.9817 28.875 25.666C28.875 20.3503 33.1841 16.041 38.5 16.041C43.8159 16.041 48.125 20.3503 48.125 25.666Z" stroke="#046F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M51.334 12.834C56.6499 12.834 60.959 17.1433 60.959 22.459C60.959 26.3831 58.6108 29.7587 55.2427 31.2572" stroke="#046F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M44.0001 44.916H33C25.4061 44.916 19.25 51.0722 19.25 58.666C19.25 61.7036 21.7124 64.166 24.75 64.166H52.25C55.2877 64.166 57.7501 61.7036 57.7501 58.666C57.7501 51.0722 51.5939 44.916 44.0001 44.916Z" stroke="#046F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M56.834 41.709C64.4278 41.709 70.5839 47.8651 70.5839 55.4589C70.5839 58.4966 68.1215 60.959 65.0839 60.959" stroke="#046F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M25.666 12.834C20.3503 12.834 16.041 17.1433 16.041 22.459C16.041 26.3831 18.3893 29.7587 21.7572 31.2572" stroke="#046F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                  <path d="M11.916 60.959C8.87844 60.959 6.41602 58.4966 6.41602 55.4589C6.41602 47.8651 12.5721 41.709 20.166 41.709" stroke="#046F73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                </svg>



              </div>



            </div>



            <div className={styles.frameParent28}>



              <div className={styles.frameChild34} />



              <div className={styles.technicalAwarenessParent}>



                <div className={styles.vectorParent}>



                  <div className={styles.ellipseIcon}>



                    <svg width="42" height="42" viewBox="0 0 77 77" fill="none" aria-hidden="true" focusable="false">



                      <path d="M70.583 28.875V48.125" stroke="#162562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                      <path d="M57.75 38.5V48.3396C57.75 51.761 57.75 53.4717 56.9062 54.8853L56.8889 54.9135C56.0371 56.3226 54.4913 57.1847 51.3994 58.9085C45.1236 62.4079 41.9855 64.1577 38.535 64.1667H38.465C35.0145 64.1577 31.8764 62.4079 25.6006 58.9085C22.5088 57.1847 20.963 56.3226 20.1111 54.9135L20.094 54.8853C19.25 53.4717 19.25 51.761 19.25 48.3396V38.5" stroke="#162562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                      <path d="M27.3389 16.7543L14.1367 23.1224C8.98958 25.6052 6.41602 26.8465 6.41602 28.8456C6.41602 30.8447 8.98958 32.0862 14.1367 34.5688L27.5846 41.0554C32.9194 43.6288 35.5868 44.9154 38.4403 44.9154C41.2941 44.9154 43.9615 43.6288 49.2964 41.0554L63.0065 34.4421C68.0612 32.0041 70.5885 30.7851 70.5827 28.7795C70.5769 26.7739 68.0629 25.5794 63.0344 23.1904C58.4484 21.0114 54.1191 19.0086 49.5136 16.8163C43.9237 14.1552 41.1286 12.8247 38.2918 12.8321C35.4553 12.8394 32.7497 14.1444 27.3389 16.7543Z" stroke="#162562" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />



                    </svg>



                  </div>



                  <h3 className={styles.jobReadySkills} style={{ margin: 0, fontWeight: 700 }}>



                    Job-Ready Skills



                  </h3>



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.frameParent29}>



        <div className={styles.wrapperPolygon16Parent}>



          <div className={styles.wrapperPolygon16}>



            <svg



              className={styles.learningTogetherFrame}



              viewBox="0 0 698 698"



              fill="none"



              aria-hidden="true"



              focusable="false"



            >



              <g filter="url(#learningTogetherOuterShadow)">



                <rect x="24" y="24" width="650" height="650" rx="32" fill="#DFE6E9" />



                <g filter="url(#learningTogetherInnerShadow)">



                  <rect x="54" y="53.75" width="590" height="590" rx="32" fill="#DFE6E9" />



                </g>



              </g>



              <defs>



                <filter id="learningTogetherOuterShadow" x="0" y="0" width="698" height="698" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">



                  <feFlood floodOpacity="0" result="BackgroundImageFix" />



                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />



                  <feOffset dx="4" dy="4" />



                  <feGaussianBlur stdDeviation="4" />



                  <feComposite in2="hardAlpha" operator="out" />



                  <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />



                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />



                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha2" />



                  <feOffset dx="-4" dy="-4" />



                  <feGaussianBlur stdDeviation="4" />



                  <feComposite in2="hardAlpha2" operator="out" />



                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />



                  <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />



                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />



                </filter>



                <filter id="learningTogetherInnerShadow" x="30" y="29.75" width="638" height="638" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">



                  <feFlood floodOpacity="0" result="BackgroundImageFix2" />



                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha3" />



                  <feOffset dx="4" dy="4" />



                  <feGaussianBlur stdDeviation="4" />



                  <feComposite in2="hardAlpha3" operator="out" />



                  <feColorMatrix type="matrix" values="0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 0 0.768627 0 0 0 1 0" />



                  <feBlend mode="normal" in2="BackgroundImageFix2" result="effect3_dropShadow" />



                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha4" />



                  <feOffset dx="-4" dy="-4" />



                  <feGaussianBlur stdDeviation="4" />



                  <feComposite in2="hardAlpha4" operator="out" />



                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />



                  <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow" />



                  <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape2" />



                </filter>



              </defs>



            </svg>



            <div className={styles.learningTogetherPhotoWrap}>



              <Image



                className={styles.wrapperPolygon16Child}



                src="/images/image copy.png"



                fill



                sizes="590px"



                alt="Students learning together"



              />



            </div>



          </div>



        </div>



        <div className={styles.frameWrapper6}>



          <div className={styles.frameParent30}>



            <div className={styles.frameWrapper7}>



              <div className={styles.frameParent31}>



                <div className={styles.frameParent32}>



                  <div className={styles.learningTogetherBadge}>Learning Together</div>



                  <h2 className={styles.greatLearningHappensContainer} style={{ margin: 0, fontWeight: 700 }}>



                    <span className={styles.futureOfLearning}><span style={{ color: "#31344b" }}>Always</span>{" "}Great Learning</span>



                  <span className={`${styles.happensTogether} ${styles.nowrapLine}`} style={{ display: "block", wordSpacing: "normal" }}>Happens Together</span>



                  </h2>



                </div>



                <div className={styles.growTogetherWith}>Grow together with collaborative learning experiences.</div>



              </div>



            </div>



            <div className={styles.frameParent33}>



              <div className={styles.frameParent34}>



                <div className={styles.frameWrapper8}>



                  <div className={styles.frameParent35}>



                    <div className={`${styles.checkCircle} ${styles.checkCircleGreen}`}>



                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">



                        <path d="M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94849 20.0083 9.79043 19.1075 11.4743 17.3058Z" stroke="currentColor" strokeWidth="1.5" />



                      </svg>



                    </div>



                    <div className={styles.shareThoughts}>Share Thoughts</div>



                  </div>



                </div>



                <div className={styles.frameWrapper9}>



                  <div className={styles.frameParent35}>



                    <div className={`${styles.checkCircle} ${styles.checkCirclePink}`}>



                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">



                        <path d="M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94849 20.0083 9.79043 19.1075 11.4743 17.3058Z" stroke="currentColor" strokeWidth="1.5" />



                      </svg>



                    </div>



                    <div className={styles.shareThoughts}>Build Together</div>



                  </div>



                </div>



              </div>



              <div className={styles.frameParent37}>



                <div className={styles.frameWrapper10}>



                  <div className={styles.frameParent35}>



                    <div className={`${styles.checkCircle} ${styles.checkCirclePurple}`}>



                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">



                        <path d="M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94849 20.0083 9.79043 19.1075 11.4743 17.3058Z" stroke="currentColor" strokeWidth="1.5" />



                      </svg>



                    </div>



                    <div className={styles.shareThoughts}>Learn from Others</div>



                  </div>



                </div>



                <div className={styles.frameWrapper11}>



                  <div className={styles.frameParent35}>



                    <div className={`${styles.checkCircle} ${styles.checkCircleTeal}`}>



                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">



                        <path d="M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94849 20.0083 9.79043 19.1075 11.4743 17.3058Z" stroke="currentColor" strokeWidth="1.5" />



                      </svg>



                    </div>



                    <div className={styles.shareThoughts}>Stay Connected</div>



                  </div>



                </div>



              </div>



            </div>



          </div>



        </div>



      </div>



      <div className={styles.rectangleGroup}>



        <Image className={styles.rectangleIcon2} src="/images/background2.webp" width={1280} height={500} sizes="100vw" alt="" aria-hidden="true" />



        <div className={styles.image202} />



        <div className={styles.frameParent46}>



          <div className={styles.frameParent47}>



            <div className={styles.frameParent48}>



              <div className={styles.genzgalaxyCtaBadge}>GenZGalaxy</div>



              <h2 className={styles.aSimplerWayContainer} style={{ margin: 0, fontWeight: 700 }}>



                <span className={styles.builtForThe}>{`A Simpler Way to Approach `}</span>



                <span className={styles.futureOfLearning}>Learning</span>



              </h2>



            </div>



            <div className={styles.smarterFlexibleLearning}>Enjoy smarter, flexible learning that adapts to your pace and goals.</div>



          </div>



          <Link href="/HomePage" className={styles.frameWrapper12}>



            <div className={styles.explorePlatformWrapper}>



              <div className={styles.explorePlatform2}>Explore Platform</div>



            </div>



          </Link>



        </div>



        <Image className={styles.youngPeopleRowWithThumbsUIcon} src="/images/young-people-row-with-thumbs-up.png" width={772} height={500} sizes="100vw" alt="" aria-hidden="true" />



      </div>



    </main>



      </div>



      <Footer />



    </>



  );



};



export default GenZgalaxy;
