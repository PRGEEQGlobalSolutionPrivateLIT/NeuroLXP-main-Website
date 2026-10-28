
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './codingchallenge.module.css';

const VIDEO_SRC = 'https://www.youtube.com/embed/rIlR_hTK7Xc?autoplay=1&mute=1&loop=1&playlist=rIlR_hTK7Xc&playsinline=1&controls=0';
const TABLET_MIN = 768;

function CareerBadge() {
  return <div className={`${styles.sectionBadge} ${styles.frameChild19}`}>Career Growth</div>;
}

export default function InterviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollExpanded, setScrollExpanded] = useState(false);
  const [enableScrollFx, setEnableScrollFx] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${TABLET_MIN}px)`);
    const updateMode = () => setEnableScrollFx(media.matches);
    updateMode();
    media.addEventListener('change', updateMode);
    return () => media.removeEventListener('change', updateMode);
  }, []);

  useEffect(() => {
    if (!enableScrollFx) {
      setScrollExpanded(false);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.55;
      const end = viewport * 0.05;
      const progress = (start - rect.top) / (start - end);
      setScrollExpanded(progress > 0.45);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enableScrollFx]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.interviewSection}${
        scrollExpanded ? ` ${styles.interviewSectionExpanded}` : ''
      }`}
      aria-label="Prepare for technical interviews"
    >
      <div className={styles.interviewLayout}>
        <div className={styles.interviewMediaWrap}>
          <div className={styles.interviewMediaFrame}>
            <div className={styles.interviewMediaInner}>
              <iframe
                className={styles.interviewVideo}
                src={VIDEO_SRC}
                title="Technical interview preparation video"
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="eager"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>

        <div className={styles.interviewText}>
          <div className={styles.interviewTextTop}>
            <CareerBadge />
            <b className={styles.prepareForTechnical}>Prepare for Technical Interviews</b>
          </div>
          <div className={styles.practiceCodingChallenges}>
            Practice coding challenges to build confidence for technical interviews and coding
            assessments.
          </div>
        </div>
      </div>
    </section>
  );
}
