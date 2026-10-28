"use client";

import { useId } from "react";

type IconProps = {
  className?: string;
};

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronUpIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 23 23" fill="none" aria-hidden="true" focusable="false">
      <path d="M17.5 1.5L18.4 5.7L22.5 6.8L18.4 7.9L17.5 12.1L16.6 7.9L12.5 6.8L16.6 5.7L17.5 1.5Z" stroke="#BF1869" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M6 11.5L6.8 15.1L10.3 16L6.8 16.9L6 20.5L5.2 16.9L1.7 16L5.2 15.1L6 11.5Z" stroke="#0B9BA0" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M14 15.5L14.5 17.6L16.5 18.1L14.5 18.6L14 20.7L13.5 18.6L11.5 18.1L13.5 17.6L14 15.5Z" stroke="#BCCF10" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="5" y="8" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 9.5L16 18L26 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 8h-3a4 4 0 0 0-4 4v3H9v4h4v9h4v-9h3.5L21 15h-4v-2.5a1 1 0 0 1 1-1.5h3V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="6" y="6" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="22.5" cy="9.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="5" y="9" width="22" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M14 13.5L19 16L14 18.5V13.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.0013 12.668H5.33464C4.07756 12.668 3.44902 12.668 3.05849 13.0585C2.66797 13.449 2.66797 14.0776 2.66797 15.3346V26.668C2.66797 27.925 2.66797 28.5536 3.05849 28.9441C3.44902 29.3346 4.07756 29.3346 5.33464 29.3346H6.0013C7.25838 29.3346 7.88692 29.3346 8.27745 28.9441C8.66797 28.5536 8.66797 27.925 8.66797 26.668V15.3346C8.66797 14.0776 8.66797 13.449 8.27745 13.0585C7.88692 12.668 7.25838 12.668 6.0013 12.668Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8.66797 5.66797C8.66797 7.32482 7.32482 8.66797 5.66797 8.66797C4.01112 8.66797 2.66797 7.32482 2.66797 5.66797C2.66797 4.01112 4.01112 2.66797 5.66797 2.66797C7.32482 2.66797 8.66797 4.01112 8.66797 5.66797Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.436 12.668H15.3346C14.0776 12.668 13.449 12.668 13.0585 13.0585C12.668 13.449 12.668 14.0776 12.668 15.3346V26.668C12.668 27.925 12.668 28.5536 13.0585 28.9441C13.449 29.3346 14.0776 29.3346 15.3346 29.3346H16.0013C17.2584 29.3346 17.8869 29.3346 18.2774 28.9441C18.668 28.5536 18.668 27.925 18.668 26.668L18.6681 22.0014C18.6681 19.7924 19.3721 18.0014 21.4518 18.0014C22.4916 18.0014 23.3346 18.8969 23.3346 20.0014V26.0014C23.3346 27.2585 23.3346 27.887 23.7252 28.2776C24.1156 28.6681 24.7442 28.6681 26.0013 28.6681H26.6662C27.923 28.6681 28.5514 28.6681 28.942 28.2777C29.3325 27.8873 29.3326 27.2589 29.3329 26.0021L29.3348 18.6682C29.3348 15.3546 26.1832 12.6683 23.0637 12.6683C21.2878 12.6683 19.7036 13.5388 18.6681 14.9C18.668 14.0598 18.668 13.6398 18.4856 13.328C18.37 13.1304 18.2054 12.966 18.008 12.8505C17.6961 12.668 17.2761 12.668 16.436 12.668Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LightbulbIcon({ className }: IconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} >
      <path d="M8.11885 19.9987C7.6143 18.8646 7.33301 17.6028 7.33301 16.2732C7.33301 11.3351 11.2132 7.33203 15.9997 7.33203C20.7862 7.33203 24.6663 11.3351 24.6663 16.2732C24.6663 17.6028 24.385 18.8646 23.8805 19.9987" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 2.66602V3.99935" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.3333 15.998H28" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.00033 15.998H2.66699" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.4272 6.57031L24.4844 7.51313" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.51606 7.51508L6.57324 6.57227" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.3557 25.7412C20.7029 25.3055 21.2431 24.0724 21.3951 22.8322C21.4405 22.4616 21.1357 22.1543 20.7623 22.1543L11.3021 22.1546C10.916 22.1546 10.6059 22.4823 10.652 22.8656C10.8009 24.1035 11.1766 25.0078 12.6043 25.7412M19.3557 25.7412C19.3557 25.7412 12.8393 25.7412 12.6043 25.7412M19.3557 25.7412C19.1937 28.3346 18.4447 29.3616 16.0087 29.3328C13.4031 29.381 12.8037 28.1115 12.6043 25.7412" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CursorClickIcon({ className }: IconProps) {
  return (
    <svg width="37" height="39" viewBox="0 0 37 39" fill="none" className={className} >
      <g filter="url(#filter0_d_903_8008)">
        <path d="M19.2247 11.1448L25.9286 13.7681C29.7952 15.2812 31.7286 16.0376 31.6644 17.2377C31.6004 18.4377 29.5827 18.988 25.5474 20.0885C24.3459 20.4162 23.7451 20.5801 23.3286 20.9965C22.912 21.413 22.7483 22.0138 22.4206 23.2154C21.32 27.2506 20.7698 29.2684 19.5698 29.3324C18.3696 29.3965 17.6131 27.4632 16.1002 23.5965L13.4768 16.8926C11.8927 12.8444 11.1007 10.8202 12.1265 9.79445C13.1523 8.76866 15.1764 9.5607 19.2247 11.1448Z" stroke="#BF1869" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14.3333 5.33268V2.66602M9 6.66602L7 4.66602M7.66667 11.9993H5M9 17.3327L7 19.3327M21.6667 4.66602L19.6667 6.66602" stroke="#BF1869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_903_8008" x="-1.65625" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8008" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8008" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" >
      <path d="M20.5708 3.13932C19.2574 2.70672 17.854 2.47266 16.3958 2.47266C9.03203 2.47266 3.0625 8.44219 3.0625 15.806C3.0625 23.1697 9.03203 29.1393 16.3958 29.1393C23.7596 29.1393 29.7292 23.1697 29.7292 15.806C29.7292 14.4124 29.5153 13.0687 29.1188 11.806" stroke="#861109" strokeWidth="2" strokeLinecap="round" />
      <path d="M22.6663 16.0007C22.6663 19.6825 19.6815 22.6673 15.9997 22.6673C12.3178 22.6673 9.33301 19.6825 9.33301 16.0007C9.33301 12.3188 12.3178 9.33398 15.9997 9.33398" stroke="#861109" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 5.99935L16 15.9993M26 5.99935V2.66602M26 5.99935H29.3333" stroke="#861109" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg width="34" height="37" viewBox="0 0 34 37" fill="none" className={className} aria-hidden="true" focusable="false">
      <g filter="url(#filter0_d_903_8053)">
        <path d="M18.3327 14.6673C18.3327 11.7218 15.9448 9.33398 12.9993 9.33398C10.0538 9.33398 7.66602 11.7218 7.66602 14.6673C7.66602 17.6128 10.0538 20.0007 12.9993 20.0007C15.9448 20.0007 18.3327 17.6128 18.3327 14.6673Z" stroke="#907507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.7185 10.077C15.6845 9.83396 15.667 9.58569 15.667 9.33333C15.667 6.38781 18.0549 4 21.0003 4C23.9458 4 26.3337 6.38781 26.3337 9.33333C26.3337 12.2789 23.9458 14.6667 21.0003 14.6667C20.0075 14.6667 19.0782 14.3955 18.2822 13.9231" stroke="#907507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 28C21 23.5817 17.4183 20 13 20C8.58172 20 5 23.5817 5 28" stroke="#907507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29 22.666C29 18.2477 25.4183 14.666 21 14.666" stroke="#907507" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_903_8053" x="-3" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8053" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8053" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function SmartphoneIcon({ className }: IconProps) {
  return (
    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" className={className} aria-hidden="true" focusable="false">
      <g filter="url(#filter0_d_903_8100)">
        <path d="M31.667 12V20" stroke="#2A7308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.334 16V20.0892C26.334 21.5111 26.334 22.222 25.9833 22.8095L25.9761 22.8212C25.6221 23.4068 24.9797 23.7651 23.6948 24.4815C21.0867 25.9357 19.7825 26.6629 18.3485 26.6667H18.3195C16.8855 26.6629 15.5813 25.9357 12.9732 24.4815C11.6883 23.7651 11.0459 23.4068 10.6919 22.8212L10.6847 22.8095C10.334 22.222 10.334 21.5111 10.334 20.0892V16" stroke="#2A7308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.6952 6.96401L8.2086 9.61052C6.06953 10.6423 5 11.1582 5 11.989C5 12.8198 6.06953 13.3357 8.2086 14.3675L13.7973 17.0632C16.0144 18.1326 17.1229 18.6673 18.3088 18.6673C19.4948 18.6673 20.6033 18.1326 22.8204 17.0632L28.5181 14.3148C30.6188 13.3016 31.6691 12.795 31.6667 11.9615C31.6643 11.128 30.6195 10.6316 28.5297 9.63874C26.6239 8.73318 24.8247 7.90086 22.9107 6.98977C20.5876 5.88389 19.426 5.33094 18.2471 5.334C17.0683 5.33704 15.9439 5.87937 13.6952 6.96401Z" stroke="#2A7308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_903_8100" x="-1.66602" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8100" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8100" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function GraduationCapIcon({ className }: IconProps) {
  const filterId = useId();
  return (
    <svg width="36" height="39" viewBox="0 0 36 39" fill="none" className={className} aria-hidden="true" >
      <g filter={`url(#${filterId})`}>
        <path d="M30.34 9.52251L29.6819 8.38037C29.1841 7.5166 28.9353 7.08472 28.5119 6.91249C28.0884 6.74028 27.6095 6.87617 26.6517 7.14796L25.0248 7.60623C24.4133 7.74724 23.7717 7.66724 23.2135 7.38037L22.7643 7.12121C22.2855 6.81456 21.9172 6.36243 21.7133 5.83097L21.2681 4.50113C20.9753 3.62111 20.8289 3.18109 20.4804 2.92941C20.132 2.67773 19.6691 2.67773 18.7432 2.67773H17.2568C16.3311 2.67773 15.8681 2.67773 15.5196 2.92941C15.1711 3.18109 15.0247 3.62111 14.732 4.50113L14.2867 5.83097C14.0829 6.36243 13.7146 6.81456 13.2358 7.12121L12.7867 7.38037C12.2283 7.66724 11.5868 7.74724 10.9753 7.60623L9.34833 7.14796C8.39054 6.87617 7.91166 6.74028 7.48822 6.91249C7.06478 7.08472 6.81593 7.5166 6.3182 8.38037L5.66009 9.52251C5.19354 10.3322 4.96026 10.737 5.00554 11.168C5.05081 11.5989 5.3631 11.9462 5.98768 12.6408L7.3624 14.1777C7.6984 14.6031 7.93695 15.3444 7.93695 16.0109C7.93695 16.6777 7.69848 17.4188 7.36244 17.8443L5.98768 19.3812C5.3631 20.0759 5.05082 20.4231 5.00554 20.8541C4.96026 21.2851 5.19354 21.6899 5.66009 22.4995L6.31818 23.6416C6.8159 24.5053 7.06478 24.9373 7.48822 25.1095C7.91166 25.2817 8.39056 25.1459 9.34836 24.874L10.9753 24.4157C11.5868 24.2747 12.2285 24.3548 12.7869 24.6417L13.236 24.9009C13.7147 25.2076 14.0829 25.6596 14.2867 26.1911L14.732 27.5211C15.0247 28.4011 15.1711 28.8411 15.5196 29.0928C15.8681 29.3444 16.3311 29.3444 17.2568 29.3444H18.7432C19.6691 29.3444 20.132 29.3444 20.4804 29.0928C20.8289 28.8411 20.9753 28.4011 21.2681 27.5211L21.7135 26.1911C21.9172 25.6596 22.2853 25.2076 22.7641 24.9009L23.2132 24.6417C23.7716 24.3548 24.4132 24.2747 25.0248 24.4157L26.6517 24.874C27.6095 25.1459 28.0884 25.2817 28.5119 25.1095C28.9353 24.9373 29.1841 24.5053 29.6819 23.6416L30.34 22.4995C30.8065 21.6899 31.0397 21.2851 30.9945 20.8541C30.9492 20.4231 30.6369 20.0759 30.0124 19.3812L28.6376 17.8443C28.3016 17.4188 28.0631 16.6777 28.0631 16.0109C28.0631 15.3444 28.3017 14.6031 28.6376 14.1777L30.0124 12.6408C30.6369 11.9462 30.9492 11.5989 30.9945 11.168C31.0397 10.737 30.8065 10.3322 30.34 9.52251Z" stroke="#67096E" strokeWidth="2" strokeLinecap="round" />
        <path d="M22.6087 16.0007C22.6087 18.578 20.5194 20.6673 17.942 20.6673C15.3647 20.6673 13.2754 18.578 13.2754 16.0007C13.2754 13.4233 15.3647 11.334 17.942 11.334C20.5194 11.334 22.6087 13.4233 22.6087 16.0007Z" stroke="#67096E" strokeWidth="2" />
      </g>
      <defs>
        <filter id={filterId} x="-2.08398" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8122" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8122" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

// Compatibility alias for existing imports
export const GraduationCapOutlineIcon = GraduationCapIcon;

export function SettingsGearIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none"  >
      <circle cx="16" cy="16" r="4.5" stroke="#8D0884" strokeWidth="2" />
      <path d="M16 3v3.5M16 25.5V29M29 16h-3.5M6.5 16H3M25 7l-2.5 2.5M9.5 22.5 7 25M25 25l-2.5-2.5M9.5 9.5 7 7" stroke="#8D0884" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LibraryIcon({ className }: IconProps) {
  return (
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" className={className} >
      <g filter="url(#filter0_d_903_8145)">
        <path d="M5 9.33333C5 7.46649 5 6.53307 5.36331 5.82003C5.68289 5.19283 6.19283 4.68289 6.82003 4.36331C7.53307 4 8.46649 4 10.3333 4C12.2002 4 13.1336 4 13.8466 4.36331C14.4738 4.68289 14.9838 5.19283 15.3034 5.82003C15.6667 6.53307 15.6667 7.46649 15.6667 9.33333V22.6667C15.6667 24.5335 15.6667 25.4669 15.3034 26.18C14.9838 26.8072 14.4738 27.3171 13.8466 27.6367C13.1336 28 12.2002 28 10.3333 28C8.46649 28 7.53307 28 6.82003 27.6367C6.19283 27.3171 5.68289 26.8072 5.36331 26.18C5 25.4669 5 24.5335 5 22.6667V9.33333Z" stroke="#052C74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 22.6673H10.3333M10.6667 22.6673C10.6667 22.8515 10.5174 23.0007 10.3333 23.0007C10.1492 23.0007 10 22.8515 10 22.6673C10 22.4832 10.1492 22.334 10.3333 22.334C10.5174 22.334 10.6667 22.4832 10.6667 22.6673Z" stroke="#052C74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.208 22.2572H26.0413M26.3747 22.2572C26.3747 22.4412 26.2255 22.5905 26.0413 22.5905C25.8573 22.5905 25.708 22.4412 25.708 22.2572C25.708 22.073 25.8573 21.9238 26.0413 21.9238C26.2255 21.9238 26.3747 22.073 26.3747 22.2572Z" stroke="#052C74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 9.33398H15.6667" stroke="#052C74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5981 11.0246C17.1249 9.25117 16.8884 8.36448 17.0513 7.59465C17.1947 6.91749 17.5477 6.30329 18.0601 5.84006C18.6425 5.31344 19.5256 5.07585 21.2916 4.60066C23.0576 4.12549 23.9406 3.8879 24.7072 4.05153C25.3816 4.19546 25.9932 4.55008 26.4545 5.06454C26.9789 5.64941 27.2156 6.53612 27.6888 8.3095L31.0685 20.9755C31.5417 22.7488 31.7783 23.6355 31.6153 24.4053C31.472 25.0825 31.1189 25.6967 30.6065 26.16C30.0241 26.6865 29.141 26.9241 27.375 27.3993C25.609 27.8745 24.726 28.1121 23.9595 27.9485C23.2851 27.8045 22.6735 27.4499 22.2121 26.9355C21.6877 26.3505 21.4511 25.4639 20.9779 23.6905L17.5981 11.0246Z" stroke="#052C74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.333 10.6669L26.9998 8" stroke="#052C74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_903_8145" x="-1.66699" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8145" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8145" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  const filterId = useId();
  return (
    <svg width="37" height="39" viewBox="0 0 37 39" fill="none" className={className} >
      <g filter={`url(#${filterId})`}>
        <path d="M5 29.334H31.6667" stroke="#3B1D5A" strokeWidth="2" strokeLinecap="round" />
        <path d="M26.3343 12H21.001C17.6916 12 17.001 12.6907 17.001 16V29.3333H30.3343V16C30.3343 12.6907 29.6436 12 26.3343 12Z" stroke="#3B1D5A" strokeWidth="2" strokeLinejoin="round" />
        <path d="M22.334 29.3327H6.33398V6.66602C6.33398 3.35668 7.02465 2.66602 10.334 2.66602H18.334C21.6433 2.66602 22.334 3.35668 22.334 6.66602V11.9993" stroke="#3B1D5A" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6.33398 8H10.334M6.33398 13.3333H10.334M6.33398 18.6667H10.334" stroke="#3B1D5A" strokeWidth="2" strokeLinecap="round" />
        <path d="M22.334 17.334H25.0007M22.334 21.334H25.0007" stroke="#3B1D5A" strokeWidth="2" strokeLinecap="round" />
        <path d="M23.668 29.334V25.334" stroke="#3B1D5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id={filterId} x="-1.66602" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8164" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8164" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function ContentWritingIcon({ className }: IconProps) {
  return (
    <svg width="34" height="39" viewBox="0 0 34 39" fill="none" className={className} >
      <g filter="url(#filter0_d_903_8190)">
        <path d="M20.3149 29.3327H18.334V27.3516C18.334 26.723 18.5837 26.12 19.0281 25.6755L25.5173 19.1867C26.2116 18.4924 27.3371 18.4924 28.0312 19.1867L28.48 19.6355C29.1741 20.3298 29.1741 21.4554 28.48 22.1496L21.9908 28.6384C21.5464 29.083 20.9435 29.3327 20.3149 29.3327Z" stroke="#09248F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.3333 13.3327V11.9993C26.3333 7.59958 26.3333 5.39968 24.9665 4.03286C23.5996 2.66602 21.3997 2.66602 17 2.66602H14.3333C9.93356 2.66602 7.73367 2.66602 6.36683 4.03286C5 5.39968 5 7.59958 5 11.9993V21.3327C5 24.4512 5 26.0104 5.71528 27.1488C6.08828 27.7424 6.59023 28.2444 7.18385 28.6173C8.32223 29.3327 9.88148 29.3327 13 29.3327" stroke="#09248F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.667 8H21.0003" stroke="#09248F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.334 13.334H21.0007" stroke="#09248F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.334 18.666H18.334" stroke="#09248F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_903_8190" x="-3" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8190" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8190" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function BrainIcon({ className }: IconProps) {
  return (
    <svg width="37" height="39" viewBox="0 0 37 39" fill="none" className={className} >
      <g filter="url(#filter0_d_903_8214)">
        <path d="M7.96296 29.3258V24.5928C7.96296 22.8976 7.51903 22.0164 6.64643 20.5431C5.6004 18.7771 5 16.716 5 14.5148C5 7.9709 10.3063 2.66602 16.8519 2.66602C23.3975 2.66602 28.7037 7.9709 28.7037 14.5148C28.7037 15.2877 28.7037 15.6743 28.736 15.8909C28.8131 16.4089 29.0548 16.8545 29.2925 17.3157L31.6667 21.9203L29.8008 22.8529C29.26 23.1232 28.9897 23.2584 28.8013 23.5079C28.6129 23.7572 28.56 24.0388 28.4539 24.6019L28.4435 24.6568C28.2005 25.9468 27.9324 27.3708 27.1772 28.2692C26.9105 28.5864 26.5804 28.8441 26.2079 29.0259C25.5929 29.3257 24.8369 29.3258 23.3249 29.3258C22.6253 29.3258 21.9237 29.3419 21.2243 29.3249C19.5663 29.2845 18.3333 27.8905 18.3333 26.2719" stroke="#134E4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5173 14.0413C20.9489 14.0413 20.4305 13.8263 20.0379 13.4724M21.5173 14.0413C21.5173 15.5692 20.6321 17.0204 18.9281 17.0204C17.2241 17.0204 16.3391 18.4715 16.3391 19.9993M21.5173 14.0413C24.3831 14.0413 24.3831 9.57291 21.5173 9.57291C21.2569 9.57291 21.0071 9.61805 20.7749 9.701C20.9149 6.37027 16.1132 5.46601 15.0256 8.58625M12.9764 16.0711C12.5748 16.6452 11.9112 17.0204 11.1607 17.0204C8.48398 17.0204 8.20301 12.9704 10.831 12.5764C9.2651 9.91015 12.5566 6.9198 15.0256 8.58625C15.8177 9.12081 16.3391 10.0303 16.3391 11.0624" stroke="#134E4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_903_8214" x="-1.66602" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8214" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8214" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function AnalyticsUpIcon({ className }: IconProps) {
  return (
    <svg width="36" height="38" viewBox="0 0 36 38" fill="none">
      <g filter="url(#filter0_d_903_8236)">
        <path d="M11 24.0007V21.334M17.6667 24.0007V20.0007M24.3333 24.0007V17.334M5 16.0007C5 10.0295 5 7.04397 6.85499 5.18897C8.70999 3.33398 11.6955 3.33398 17.6667 3.33398C23.6377 3.33398 26.6233 3.33398 28.4784 5.18897C30.3333 7.04397 30.3333 10.0295 30.3333 16.0007C30.3333 21.9717 30.3333 24.9573 28.4784 26.8124C26.6233 28.6673 23.6377 28.6673 17.6667 28.6673C11.6955 28.6673 8.70999 28.6673 6.85499 26.8124C5 24.9573 5 21.9717 5 16.0007Z" stroke="#4E342E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.65625 15.3157C12.5297 15.4115 19.0455 14.9777 22.7516 9.09575M20.3231 8.38512L22.8237 7.98264C23.1285 7.94383 23.576 8.18445 23.686 8.47129L24.3472 10.6559" stroke="#4E342E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <filter id="filter0_d_903_8236" x="-2.33398" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_903_8236" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_903_8236" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export function ChevronsDownIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"  >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 4l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UniversityIcon({ className }: IconProps) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 42 42" fill="none"  >
      <path d="M3.5 38.5H37.625" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.25 22.75V38.5M36.75 22.75V38.5" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.125 14V38.5M28.875 14V38.5" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 22.75H12.25M38.5 22.75H29.75" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.375 14H30.625" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 14V8.71887M21 8.71887V5.19812C21 4.36827 21 3.95334 21.2562 3.69553C22.0607 2.88644 25.375 4.80031 26.6355 5.57643C27.6999 6.23184 28 7.541 28 8.71887H21Z" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 38.5V35" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.375 21V21.875M23.625 21V21.875" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.375 28V28.875M23.625 28V28.875" stroke="#861109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 42 42" fill="none"  >
      <path d="M38.5 11.8125H33.6194C32.5675 11.8125 32.0414 11.8125 31.5455 11.6623C31.0495 11.5121 30.6119 11.2204 29.7365 10.6368C28.4237 9.76155 26.9259 8.76304 26.1818 8.53776C25.4378 8.3125 24.6488 8.3125 23.0708 8.3125C20.9249 8.3125 19.5417 8.3125 18.577 8.71213C17.6122 9.11176 16.8535 9.87047 15.3361 11.3879L14.0007 12.7233C13.6587 13.0652 13.4877 13.2362 13.3822 13.405C12.9909 14.0308 13.0342 14.8348 13.4906 15.4149C13.6137 15.5714 13.8021 15.723 14.1788 16.0262C15.5714 17.1469 17.5791 17.0351 18.8402 15.7665L21 13.5938H22.75L33.25 24.1562C34.2165 25.1285 34.2165 26.7048 33.25 27.6771C32.2835 28.6494 30.7165 28.6494 29.75 27.6771L28.875 26.7968M23.625 28.5573L25.375 30.3176C26.3415 31.2899 27.9085 31.2899 28.875 30.3176C29.8415 29.3455 29.8415 27.7691 28.875 26.7968L23.625 21.5157M20.125 25.0573L23.625 28.5573C24.5915 29.5294 24.5915 31.1058 23.625 32.0781C22.6585 33.0503 21.0915 33.0503 20.125 32.0781L17.5 29.4374M3.5 25.8124H4.05814C5.50914 25.8124 6.23466 25.8124 6.88511 26.0858C7.53557 26.3593 8.04326 26.8775 9.05865 27.914L14 32.9584C14.9665 33.9305 16.5335 33.9305 17.5 32.9584C18.4665 31.9861 18.4665 30.4097 17.5 29.4374L16.625 28.5573" stroke="#BF1869" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38.5 25.8125H34.125" stroke="#BF1869" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.875 11.8125H3.5" stroke="#BF1869" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LandmarkIcon({ className }: IconProps) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 42 42" fill="none"  >
      <path d="M34.125 33.25H7.875C7.38712 33.25 7.14317 33.25 6.94031 33.2904C6.10725 33.456 5.45606 34.1073 5.29036 34.9403C5.25 35.1432 5.25 35.3871 5.25 35.875C5.25 36.3629 5.25 36.6068 5.29036 36.8097C5.45606 37.6427 6.10725 38.294 6.94031 38.4596C7.14317 38.5 7.38712 38.5 7.875 38.5H34.125C34.6129 38.5 34.8568 38.5 35.0597 38.4596C35.8927 38.294 36.544 37.6427 36.7096 36.8097C36.75 36.6068 36.75 36.3629 36.75 35.875C36.75 35.3871 36.75 35.1432 36.7096 34.9403C36.544 34.1073 35.8927 33.456 35.0597 33.2904C34.8568 33.25 34.6129 33.25 34.125 33.25Z" stroke="#2A7308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36.2012 11.9272L22.6292 3.94364C22.1354 3.65318 21.5729 3.5 21 3.5C20.4271 3.5 19.8646 3.65318 19.3708 3.94364L5.79882 11.9272C5.45879 12.1272 5.25 12.4922 5.25 12.8867C5.25 13.5016 5.74843 14 6.36326 14H35.6367C36.2516 14 36.75 13.5016 36.75 12.8867C36.75 12.4922 36.5412 12.1272 36.2012 11.9272Z" stroke="#2A7308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.5 19.25V33.25" stroke="#2A7308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.5 19.25V33.25" stroke="#2A7308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 19V33" stroke="#2A7308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 19.25V33.25" stroke="#2A7308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} width="42" height="42" viewBox="0 0 42 42" fill="none"  >
      <path d="M28 12.25C28 16.116 24.8659 19.25 21 19.25C17.134 19.25 14 16.116 14 12.25C14 8.384 17.134 5.25 21 5.25C24.8659 5.25 28 8.384 28 12.25Z" stroke="#086F73" strokeWidth="1.5" />
      <path d="M24.5 24.5H17.5C12.6675 24.5 8.75 28.4176 8.75 33.25C8.75 35.183 10.317 36.75 12.25 36.75H29.75C31.683 36.75 33.25 35.183 33.25 33.25C33.25 28.4176 29.3324 24.5 24.5 24.5Z" stroke="#086F73" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none"  >
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
      <path d="M13 11l8 5-8 5V11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HeadphonesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M20.0849 16.1582C20.5849 14.6582 21 12.595 21 11.1582C21 6.18764 16.9706 2.1582 12 2.1582C7.02944 2.1582 3 6.18764 3 11.1582C3 12.595 3.41512 14.6582 3.91512 16.1582" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.97651 18.7605L7.23857 13.7689C7.05341 13.3028 6.4617 13.0693 5.97493 13.1859C4.46441 13.6895 3.6462 15.328 4.14742 16.8457L4.58543 18.172C5.08664 19.6896 6.71747 20.5117 8.22799 20.0081C8.68896 19.8118 9.10449 19.2459 8.97651 18.7605Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.7716 20.0081L16.761 13.7689C16.9462 13.3028 17.5379 13.0693 18.0247 13.1859C19.5352 13.6895 20.3534 15.328 19.8522 16.8457L19.4142 18.172C18.913 19.6896 17.2821 20.5117 15.7716 20.0081ZM15.7716 20.0081C15.3106 19.8118 15.6436 20.4935 15.7716 20.0081Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
