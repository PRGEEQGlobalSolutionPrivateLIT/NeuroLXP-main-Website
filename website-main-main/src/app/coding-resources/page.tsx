import Image from "next/image";
import styles from "./coding-resources.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import TalkToExpertButton from "@/components/TalkToOurExpert/TalkToExpertButton";

const learningCards = [
  "Programming Guides",
  "Code Examples & Project",
  "Coding Fundamentals",
  "Algorithm Practice",
  "Clean Code Practices",
];

const supportCards = [
  "Practice problems and coding exercises",
  "Code snippets and reusable examples",
  "Step-by-step problem-solving guides",
  "Debugging and optimization Tilt_Prism",
];

const pillars = [
  {
    number: "01",
    title: "Multi-Domain Support",
    lead: "Build Tech Skills",
    items: [
      "Coding Fundamentals",
      "Web Development",
      "Software Development",
      "Algorithmic Thinking",
    ],
  },
  {
    number: "02",
    title: "Continuous Learning",
    lead: "Learn Today's Tech Trends",
    items: [
      "Modern Frameworks",
      "Best Practices",
      "New Development Tools",
      "Industry Skills",
    ],
  },
  {
    number: "03",
    title: "Learn! Teach! Grow",
    lead: "Built for Every Learner",
    items: [
      "Universities",
      "Coding Bootcamps",
      "Corporate Training",
      "Career Learners",
    ],
  },
];

export default function CodingResources() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.shell}>
          <div className={styles.breadcrumb}>
            <span>Neuro Labs</span>

            <Image
              src="/icons/arrow-right-double.svg"
              width={16}
              height={16}
              alt=""
            />

            <b>Coding Resources</b>
          </div>

          <section className={styles.heroFrame}>
            <div className={styles.hero}>
              <div className={styles.heroShape} />

              <div className={styles.heroCopy}>
                <span className={styles.pill}>Coding Resources</span>

                <h1>
                  Everything to Learn!{" "}
                  {/* <br /> */}
                   Practice!{" "}
                  <span className={styles.headingAccent}>Master Coding</span>
                </h1>

                <p>
                  NeuroLabs Coding Resources
                  <br />
                  offer structured materials for <br /> every learning stage.
                </p>
              </div>

              <Image
                className={styles.heroImage}
                src="/images/coding-resources.png"
                width={1536}
                height={1024}
                priority
                alt="Student learning coding on a laptop"
              />
            </div>
          </section>

          <section className={styles.learning}>
            <div
              id="coding-resources-talk-to-expert-button-slot"
              data-expert-button-slot
              className={styles.codingResourcesExpertSlot}
            />

            <h2>
              Comprehensive Programming
              <br />
              <span className={styles.headingAccent}>Learning Materials</span>
            </h2>

            <p>
              NeuroLabs provides coding resources that support both theoretical
              understanding and hands-on learning.
            </p>

            <div className={styles.learningCards}>
              {learningCards.map((label) => (
                <div className={styles.learningCard} key={label}>
                  <Image
                    className={styles.learningCardOuter}
                    src="/icons/Rectangle 40 copy.svg"
                    width={248}
                    height={128}
                    sizes="248px"
                    alt=""
                    aria-hidden="true"
                  />

                  <div className={styles.learningCardInner}>
                    <span className={styles.learningCardText}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.practice}>
<div className={styles.practiceIntro}>
              <h2>
                Practice-Oriented Coding{" "}
                <span style={{ color: "#2d4cc8" }}>Support</span>
              </h2>

              <p>
                Master coding through consistent practice. NeuroLabs provides
                hands-on
                <br />
                resources that strengthen skills and build coding confidence.
              </p>
            </div>

            <div className={styles.supportGrid}>
              {supportCards.map((item, index) => (
                <div
                  className={`${styles.supportCard} ${
                    styles[`accent${index}`] ?? ""
                  }`}
                  key={item}
                >
                  <span className={styles.supportCardText}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.practiceOval}>
            Strengthen Skills Through Consistent Practice
          </div>

          <section className={styles.pillars}>
            {pillars.map((pillar) => (
              <article className={styles.pillar} key={pillar.number}>
                <Image
                  className={styles.pillarSvg}
                  src="/icons/coding-resources-card.svg"
                  width={424}
                  height={630}
                  sizes="424px"
                  alt=""
                  aria-hidden="true"
                />

                <div className={styles.pillarContent}>
                  <div className={styles.pillarHead}>
                    <b>{pillar.number}</b>
                    <span>{pillar.title}</span>
                  </div>

                  <h3>{pillar.lead}</h3>

                  <div className={styles.checkList}>
                    {pillar.items.map((item) => (
                      <div className={styles.checkItem} key={item}>
                        <span className={styles.checkIconCircle}>
                          <Image
                            src="/icons/checkmark-circle-02 copy.svg"
                            width={24}
                            height={24}
                            alt=""
                            className={styles.checkIcon}
                          />
                        </span>

                        <span className={styles.checkText}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className={styles.growthFrame}>
            <div className={styles.growth}>
              <div className={styles.growthCopy}>
                <span className={styles.pill}>Programming Growth</span>

                <h2>
                  NeuroLabs Coding
                  <br />
                  <span className={styles.headingAccent}>Resources</span>
                </h2>

                <p>
                  Build strong programming skills with tutorials, hands-on
                  practice, and up-to-date learning resources.
                </p>
              </div>

              <div className={styles.videoVisual}>
               

<iframe
  className={styles.growthVideo}
  src="https://www.youtube.com/embed/GKLX7_xmx0Y?autoplay=1&mute=1&loop=1&playlist=GKLX7_xmx0Y&playsinline=1&controls=0"
  title="Growth Video"
  allow="autoplay; encrypted-media; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  loading="eager"
/>


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
