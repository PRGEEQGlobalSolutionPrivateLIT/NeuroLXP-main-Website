"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import "./codingLabs.css";

import TalkToExpertButton from "@/components/TalkToOurExpert/TalkToExpertButton";

const practiceItems = [

  { label: "Write & Test Code", color: "#BF1869" },

  { label: "Solve Real Challenges", color: "#2A7308" },

  { label: "Explore Coding Solutions", color: "#67096E" },

  { label: "Build Practical Projects", color: "#2D4CC8" },

];

const challengeCards = [

  {

    title: "Apply Concepts",

    text: "Apply coding concepts through guided exercises.",

    icon: "/icons/codepen.svg",

    tone: "pink",

  },

  {

    title: "Problem-Solving",

    text: "Improve logical thinking through guided challenges.",

    icon: "/icons/brain-cog.svg",

    tone: "teal",

  },

  {

    title: "Code Efficiently",

    text: "Learn cleaner and more effective coding techniques.",

    icon: "/icons/brace.png",

    tone: "purple",

  },

  {

    title: "Interview-Ready",

    text: "Build confidence for coding tests and technical assessments.",

    icon: "/icons/checkmark-circle-02.svg",

    tone: "blue",

  },

];

const skillItems = [

  { label: "Write Clean, Efficient Code", color: "#2A7308" },

  { label: "Debug and Fix Programs", color: "#BF1869" },

  { label: "Strengthen Programming Logic", color: "#67096E" },

  { label: "Build Real-World Solutions", color: "#2D4CC8" },

];



const sliderVideos = [
  "https://www.youtube.com/embed/gqkLGBv4W5o?autoplay=1&mute=1&loop=1&playlist=gqkLGBv4W5o&playsinline=1&controls=0",
  "https://www.youtube.com/embed/DTSBnKMYbk8?autoplay=1&mute=1&loop=1&playlist=DTSBnKMYbk8&playsinline=1&controls=0",
  "https://www.youtube.com/embed/lhYHNwouVKQ?autoplay=1&mute=1&loop=1&playlist=lhYHNwouVKQ&playsinline=1&controls=0",
];



function CheckIcon({ color }: { color: string }) {

  return (

    <svg

      className="coding-check-icon"

      width="36"

      height="36"

      viewBox="0 0 36 36"

      fill="none"

      aria-hidden="true"

    >

      <path

        d="M24 4.24813C22.1626 3.44535 20.1333 3 18 3C9.71572 3 3 9.71572 3 18C3 26.2842 9.71572 33 18 33C26.2842 33 33 26.2842 33 18C33 17.4937 32.9749 16.9934 32.9259 16.5"

        stroke={color}

        strokeWidth="2.5"

        strokeLinecap="round"

        strokeLinejoin="round"

      />

      <path

        d="M12 15.75L17.25 21L33 6"

        stroke={color}

        strokeWidth="2.5"

        strokeLinecap="round"

        strokeLinejoin="round"

      />

    </svg>

  );

}

export default function CodingLabsPage() {

  const router = useRouter();

  const [videoOrder, setVideoOrder] = useState([0, 1, 2]);

  const videoSliderRef = useRef<HTMLDivElement>(null);

  const swipeStartX = useRef<number | null>(null);

  // Rotate the existing video deck automatically and clean up on unmount.

  useEffect(() => {

    const timer = window.setInterval(() => {

      if (document.hidden || swipeStartX.current !== null) return;

      setVideoOrder((current) => [current[1], current[2], current[0]]);

    }, 4000);

    return () => window.clearInterval(timer);

  }, []);

  // Nothing is selected initially:

  // both CTA buttons start raised with blue text.

  const [activeCta, setActiveCta] =

    useState<"demo" | "started" | null>(null);

  const promoteVideo = (selected: number) => {

    setVideoOrder((current) => {

      if (current[0] === selected) return current;

      return [selected, ...current.filter((index) => index !== selected)];

    });

  };

  const previousVideo = () => {

    setVideoOrder((current) => [current[2], current[0], current[1]]);

  };

  const nextVideo = () => {

    setVideoOrder((current) => [current[1], current[2], current[0]]);

  };

  const handleSwipeStart = (event: React.TouchEvent<HTMLDivElement>) => {

    swipeStartX.current = event.touches[0]?.clientX ?? null;

  };

  const handleSwipeEnd = (event: React.TouchEvent<HTMLDivElement>) => {

    if (swipeStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX;

    if (typeof endX !== "number") {

      swipeStartX.current = null;

      return;

    }

    const distance = endX - swipeStartX.current;

    const swipeThreshold = 45;

    if (Math.abs(distance) >= swipeThreshold) {

      if (distance < 0) {

        nextVideo();

      } else {

        previousVideo();

      }

    }

    swipeStartX.current = null;

  };

  return (

    <>

      <Header />


      <main className="coding-page">

      <div className="coding-shell">

        <nav className="coding-breadcrumb" aria-label="Breadcrumb">

          <span>Neuro Labs</span>

          <Image

            src="/icons/arrow-right-double.svg"

            width={16}

            height={16}

            alt=""

            aria-hidden="true"

          />

          <strong aria-current="page">Coding Labs</strong>

        </nav>

        <section className="coding-hero">

          <div className="coding-hero__inner">

            <div className="coding-hero__content">

              <span className="coding-pill">Coding Labs</span>

              <h1>Practice! Build! and Master <span className="coding-heading-blue">Coding Skills</span></h1>

              <p>Practice, solve challenges, and master coding hands-on.</p>

            </div>

            <div className="coding-hero__visual">

              <Image

                src="/images/day-full-office-duties.png"

                width={740}

                height={521}

                alt="Coding learner using a laptop"

                priority

              />

            </div>

          </div>

        </section>

        <section className="coding-section coding-practice">

          <div className="coding-section-copy">

            <span className="coding-pill">Learn by Coding</span>

            <h2>

  Master Coding with

  <br />

  Hands-On<span className="coding-heading-blue"> Practice</span>

</h2>

<p>

  Practice programming through interactive coding

  <br />

   labs that turn concepts into real-world skills.

</p>

          </div>

          <div className="coding-practice-card">

            <div className="coding-practice-card__inner">

              {practiceItems.map((item) => (

                <div className="coding-practice-row" key={item.label}>

                  <CheckIcon color={item.color} />

                  <span>{item.label}</span>

                </div>

              ))}

            </div>

          </div>

        </section>

        <section className="coding-challenges">

<div className="coding-challenges__intro">

            <span className="coding-pill coding-pill--wide">What Learners Gain</span>

<h2>

  Interactive Coding{" "}

  <span style={{ color: "#2D4CC8" }}>Challenges</span>

</h2>

            <p>Learn by building, solving, and improving with every challenge.</p>

          </div>

          <div className="coding-challenge-grid">

            {challengeCards.map((card) => (

              <article

                className={`coding-challenge-card coding-challenge-card--${card.tone}`}

                key={card.title}

              >

                <div className="coding-challenge-card__copy">

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>

                </div>

                <div className="coding-challenge-card__icon">

                  <Image src={card.icon} width={42} height={42} alt="" />

                </div>

              </article>

            ))}

          </div>

        </section>

        <section className="coding-section coding-skills">


          <div className="coding-skill-list">

            {skillItems.map((item) => (

              <div

                className="coding-skill-item"

                style={{ "--skill-color": item.color } as React.CSSProperties}

                key={item.label}

              >

                <Image

                  src="/icons/checkmark-badge-01.svg"

                  width={36}

                  height={36}

                  alt=""

                />

                <span style={item.label === "Strengthen Programming Logic" ? { whiteSpace: "nowrap" } : undefined}>

                  {item.label}

                </span>

              </div>

            ))}

          </div>

          <div className="coding-section-copy">

            <span className="coding-pill">Code Smarter</span>

            <h2>

  Real-World Skill{" "}

  <span style={{ color: "#2D4CC8" }}>Development</span>

</h2>

            <p>

              Coding Labs simulate real-world development, helping learners

              solve practical programming challenges.

            </p>

          </div>

        </section>

        <section className="coding-section coding-learning">

          <div className="coding-section-copy">

            <span className="coding-pill">Flexible Learning</span>

            <h2>Built for Every<br />Learning <span className="coding-heading-blue">Environment</span></h2>

            <p>

              Perfect for universities, bootcamps, corporate training, and

              online coding programs.

            </p>

          </div>

          <div className="coding-video-area">

            <div

              className="coding-video-deck"

              ref={videoSliderRef}

              onTouchStart={handleSwipeStart}

              onTouchEnd={handleSwipeEnd}

              onTouchCancel={() => { swipeStartX.current = null; }}

            >

              <div className="coding-video-card coding-video-card--back" role="button" tabIndex={0} aria-label="Show this video in the first frame" onClick={() => promoteVideo(videoOrder[2])} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); promoteVideo(videoOrder[2]); } }}>

               
 
<iframe
  className="coding-first-video"
  src={sliderVideos[2]}
  title="Coding Labs Back Video"
  allow="autoplay; encrypted-media; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>



              </div>

              <div className="coding-video-card coding-video-card--middle" role="button" tabIndex={0} aria-label="Show this video in the first frame" onClick={() => promoteVideo(videoOrder[1])} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); promoteVideo(videoOrder[1]); } }}>

             
<iframe
  className="coding-first-video"
  src={sliderVideos[1]}
  title="Coding Labs Middle Video"
  allow="autoplay; encrypted-media; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>


              </div>

              <div className="coding-video-card coding-video-card--front" role="button" tabIndex={0} aria-label="Show this video in the first frame" onClick={() => promoteVideo(videoOrder[0])} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); promoteVideo(videoOrder[0]); } }}>

              
<iframe
  className="coding-first-video"
  src={sliderVideos[0]}
  title="Coding Labs Front Video"
  allow="autoplay; encrypted-media; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>


              </div>

            </div>

          </div>

        </section>

        <section className="coding-cta">

          <Image

            className="coding-cta__background"

            src="/icons/background coding labs.png"

            width={1280}

            height={505}

            alt=""

          />

          <div className="coding-cta__content">

            <h2>NeuroLabs Coding Labs Learn by <span className="coding-heading-blue" style={{ color: "#2D4CC8" }}>Coding</span></h2>

            <p>

              Build real-world coding skills through hands on practice and

              interactive challenges.

            </p>

            <div className="coding-cta__actions">

              <button

                type="button"

                className={activeCta === "started" ? "is-selected" : ""}

                onClick={() => {

                  setActiveCta("started");

                  router.push("/HomePage");

                }}

                onMouseLeave={() => setActiveCta(null)}

                onBlur={() => setActiveCta(null)}

                aria-pressed={activeCta === "started"}

              >

                Get Started

              </button>

            </div>

          </div>

        </section>

      </div>

    </main>

 <TalkToExpertButton />

    <Footer />

  </>

  );

}
