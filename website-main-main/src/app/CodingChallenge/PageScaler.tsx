'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import styles from './codingchallenge.module.css';

const ARTBOARD_WIDTH = 1440;
const ARTBOARD_HEIGHT = 4820;
const DESKTOP_MIN = 768;

function getSideGutter(vw: number): number {
  if (vw < 768) return 0;
  if (vw < 992) return 24;
  if (vw < 1200) return 32;
  if (vw < 1440) return 40;
  return 0;
}

export default function PageScaler({ children }: { children: ReactNode }) {
  const shellRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const board = boardRef.current;
    if (!shell || !board) return;

    const applyScale = () => {
      const vw = document.documentElement.clientWidth || window.innerWidth;

      if (vw < DESKTOP_MIN) {
        board.style.width = '';
        board.style.transform = '';
        board.style.transformOrigin = '';
        shell.style.height = '';
        shell.style.justifyContent = '';
        shell.style.paddingLeft = '';
        shell.style.paddingRight = '';
        shell.style.boxSizing = '';
        shell.dataset.mode = 'fluid';
        return;
      }

      const gutter = getSideGutter(vw);
      const available = vw - gutter * 2;
      const scale = Math.min(1, available / ARTBOARD_WIDTH);

      shell.dataset.mode = 'artboard';
      shell.style.boxSizing = 'border-box';
      shell.style.paddingLeft = gutter ? `${gutter}px` : '';
      shell.style.paddingRight = gutter ? `${gutter}px` : '';
      board.style.width = `${ARTBOARD_WIDTH}px`;
      board.style.transform = `scale(${scale})`;
      board.style.transformOrigin = 'top left';
      shell.style.height = `${ARTBOARD_HEIGHT * scale}px`;
      shell.style.justifyContent = scale < 1 ? 'flex-start' : 'center';
    };

    applyScale();
    window.addEventListener('resize', applyScale);
    window.addEventListener('orientationchange', applyScale);
    return () => {
      window.removeEventListener('resize', applyScale);
      window.removeEventListener('orientationchange', applyScale);
    };
  }, []);

  return (
    <div className={styles.pageScale} ref={shellRef}>
      <div className={styles.neurolabsCodingChallenge} ref={boardRef}>
        {children}
      </div>
    </div>
  );
}