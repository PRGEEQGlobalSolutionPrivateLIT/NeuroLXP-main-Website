"use client";







import {



  useState,



  useRef,



  useEffect,



  useMemo,



  type FormEvent,



  type ReactNode,



} from "react";



import { createPortal } from "react-dom";



import { allCountries } from "country-telephone-data";



import {



  isValidPhoneNumber,



  type CountryCode,



} from "libphonenumber-js";



import styles from "./TalkToOurExpert.module.css";







interface RawCountry {



  name: string;



  iso2: string;



  dialCode: string;



}







interface TalkToOurExpertProps {



  isOpen: boolean;



  onClose: () => void;



  onPlayClick?: () => void;



}







interface FormState {



  fullName: string;



  email: string;



  countryIso2: string;



  phoneNumber: string;



  interest: string;



  query: string;



  consent: boolean;



}







interface TouchedState {



  fullName: boolean;



  email: boolean;



  phoneNumber: boolean;



  interest: boolean;



  query: boolean;



  consent: boolean;



}







const INTEREST_OPTIONS = [



  "LXP",



  "Content Management",



  "Course Management",



  "Assessments @ Analytics",



  "Interactive Learning",



  "Gamification",



  "Corporate L&D",



  "Higher Education",



  "Geenral  Enquiry",



  "Custom Requirement",



  "Other",



];







const NAME_PATTERN = /^[A-Za-z]+(?: [A-Za-z]+)*$/;







const EMAIL_PATTERN =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;







const COMMON_EMAIL_DOMAINS: Record<string, string> = {



  gmail: "gmail.com",



  yahoo: "yahoo.com",



  outlook: "outlook.com",



  hotmail: "hotmail.com",



  icloud: "icloud.com",



};







function validateEmailAddress(value: string) {



  const normalized = value.trim().toLowerCase();







  if (!EMAIL_PATTERN.test(normalized)) {



    return {



      valid: false,



      message: "Please enter a valid email address.",



    };



  }







  const [, domain = ""] = normalized.split("@");



  const provider = domain.split(".")[0] ?? "";



  const requiredDomain = COMMON_EMAIL_DOMAINS[provider];







  if (requiredDomain && domain !== requiredDomain) {



    return {



      valid: false,



      message: `Please enter the complete email address. Did you mean ${requiredDomain}?`,



    };



  }







  return {



    valid: true,



    message: "",



  };



}







/*



 * Phone numbers are validated against the selected country.



 * libphonenumber-js supplies the country-specific numbering rules,



 * including valid lengths and prefixes. Do not apply a global



 * 10-digit rule because countries use different numbering plans.



 */



const MAX_PHONE_DIGITS = 15;



const MAX_QUERY_LENGTH = 250;







const VIDEO_SRC = "/videos/TalkToOurExpert.mp4";







const getCountryFlagUrl = (iso2: string) =>

  `https://flagcdn.com/24x18/${iso2.toLowerCase()}.png`;



const COUNTRIES = (



  allCountries as unknown as RawCountry[]



).filter(



  (country, index, list) =>



    list.findIndex((entry) => entry.iso2 === country.iso2) === index



);











function IconBubble({ children }: { children: ReactNode }) {



  return (



    <span className={styles["tte-icon-bubble"]}>



      {children}



    </span>



  );



}







function UserIcon() {



  return (



    <svg width="21" height="26" viewBox="0 0 21 26" fill="none">



      <g filter="url(#tteUserShadow)">



        <path



          d="M14.6338 7.09509C14.6356 4.79391 12.7715 2.92696 10.4704 2.92515C8.16919 2.92334 6.30224 4.78736 6.30044 7.08854C6.29863 9.38971 8.16265 11.2567 10.4638 11.2585C12.765 11.2603 14.632 9.39625 14.6338 7.09509Z"



          stroke="#FFFFFF"



          strokeWidth="1.25"



          strokeLinecap="round"



          strokeLinejoin="round"



        />



        <path



          d="M16.292 17.0964C16.2945 13.8747 13.6849 11.261 10.4632 11.2585C7.24156 11.256 4.62783 13.8656 4.6253 17.0872"



          stroke="#2D4CC8"



          strokeWidth="1.25"



          strokeLinecap="round"



          strokeLinejoin="round"



        />



      </g>







      <defs>



        <filter



          id="tteUserShadow"



          x="-3.54395"



          y="0"



          width="28.0156"



          height="28.0156"



          filterUnits="userSpaceOnUse"



          colorInterpolationFilters="sRGB"



        >



          <feFlood floodOpacity="0" result="tteUserBg" />



          <feColorMatrix



            in="SourceAlpha"



            type="matrix"



            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"



            result="tteUserHardAlpha"



          />



          <feOffset dy="4" />



          <feGaussianBlur stdDeviation="2" />



          <feComposite



            in2="tteUserHardAlpha"



            operator="out"



          />



          <feColorMatrix



            type="matrix"



            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"



          />



          <feBlend



            mode="normal"



            in2="tteUserBg"



            result="tteUserShadowBlend"



          />



          <feBlend



            mode="normal"



            in="SourceGraphic"



            in2="tteUserShadowBlend"



            result="shape"



          />



        </filter>



      </defs>



    </svg>



  );



}







function MailIcon() {



  return (



    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">



      <g filter="url(#tteMailShadow)">



        <path



          d="M4.625 5L10.3858 8.26414C12.5097 9.4675 13.407 9.4675 15.5308 8.26414L21.2917 5"



          stroke="#2D4CC8"



          strokeWidth="1.25"



          strokeLinejoin="round"



        />







        <path



          d="M4.63814 11.231C4.69262 13.7856 4.71986 15.0629 5.66247 16.0091C6.60507 16.9553 7.91694 16.9882 10.5407 17.0541C12.1577 17.0948 13.7589 17.0948 15.376 17.0541C17.9997 16.9882 19.3116 16.9553 20.2542 16.0091C21.1968 15.0629 21.2241 13.7856 21.2785 11.231C21.2961 10.4096 21.2961 9.59305 21.2785 8.77164C21.2241 6.21702 21.1968 4.93971 20.2542 3.99352C19.3116 3.04733 17.9997 3.01437 15.376 2.94844C13.7589 2.90781 12.1577 2.90781 10.5407 2.94844C7.91694 3.01435 6.60507 3.04731 5.66246 3.99351C4.71985 4.9397 4.69262 6.21701 4.63813 8.77164C4.62062 9.59305 4.62063 10.4096 4.63814 11.231Z"



          stroke="#2D4CC8"



          strokeWidth="1.25"



          strokeLinejoin="round"



        />



      </g>







      <defs>



        <filter



          id="tteMailShadow"



          x="-1.04102"



          y="0"



          width="28"



          height="28"



          filterUnits="userSpaceOnUse"



          colorInterpolationFilters="sRGB"



        >



          <feFlood floodOpacity="0" result="tteMailBg" />



          <feColorMatrix



            in="SourceAlpha"



            type="matrix"



            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"



            result="tteMailHardAlpha"



          />



          <feOffset dy="4" />



          <feGaussianBlur stdDeviation="2" />



          <feComposite



            in2="tteMailHardAlpha"



            operator="out"



          />



          <feColorMatrix



            type="matrix"



            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"



          />



          <feBlend



            mode="normal"



            in2="tteMailBg"



            result="tteMailShadowBlend"



          />



          <feBlend



            mode="normal"



            in="SourceGraphic"



            in2="tteMailShadowBlend"



            result="shape"



          />



        </filter>



      </defs>



    </svg>



  );



}







function PhoneIcon() {



  return (



    <svg width="21" height="21" viewBox="0 0 21 21" fill="none">



      <path



        d="M7.64387 4.76618L7.30891 4.01093C7.0899 3.51712 6.98039 3.2702 6.81648 3.08118C6.61106 2.84429 6.34319 2.66991 6.04344 2.57794C5.80425 2.50454 5.53414 2.50433 4.99394 2.5039C4.20369 2.50328 3.80856 2.50297 3.47675 2.65462C3.08589 2.83325 2.73273 3.22153 2.59182 3.62751C2.4722 3.97216 2.50611 4.32647 2.57392 5.03508C3.29577 12.5777 7.42744 16.7159 14.9689 17.4496C15.6774 17.5185 16.0317 17.553 16.3765 17.4339C16.7828 17.2936 17.1716 16.9411 17.3509 16.5505C17.503 16.219 17.5033 15.8238 17.5039 15.0335C17.5043 14.4934 17.5045 14.2233 17.4315 13.984C17.34 13.6841 17.1661 13.4159 16.9295 13.2101C16.7408 13.0459 16.494 12.936 16.0005 12.7162L15.2458 12.3801C14.7114 12.1421 14.4442 12.023 14.1726 11.997C13.9126 11.972 13.6505 12.0083 13.4071 12.1029C13.1528 12.2017 12.928 12.3888 12.4782 12.763C12.0305 13.1354 11.8067 13.3216 11.5333 13.4213C11.2909 13.5097 10.9706 13.5422 10.7154 13.5044C10.4275 13.4617 10.2072 13.3437 9.76648 13.1078C8.39539 12.3736 7.63954 11.6166 6.90757 10.2444C6.67231 9.80327 6.55468 9.58276 6.51248 9.29481C6.47507 9.03962 6.50811 8.71931 6.59682 8.47705C6.69688 8.20381 6.88347 7.98027 7.25663 7.53318C7.63151 7.08404 7.81896 6.85947 7.91816 6.60529C8.0131 6.36206 8.04979 6.09997 8.02527 5.84002C7.99964 5.56837 7.88105 5.30097 7.64387 4.76618Z"



        stroke="#2D4CC8"



        strokeWidth="1.25"



        strokeLinecap="round"



      />



    </svg>



  );



}







function ClipboardIcon() {



  return (



    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">



      <path



        d="M10 9.16602H13.3333"



        stroke="#2D4CC8"



        strokeWidth="1.25"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M10 13.334H13.3333"



        stroke="#2D4CC8"



        strokeWidth="1.25"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M6.66699 9.16602H6.67533"



        stroke="#2D4CC8"



        strokeWidth="1.25"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M6.66699 13.334H6.67533"



        stroke="#2D4CC8"



        strokeWidth="1.25"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M12.0837 1.66602H7.91699C7.22663 1.66602 6.66699 2.22566 6.66699 2.91602C6.66699 3.60637 7.22663 4.16602 7.91699 4.16602H12.0837C12.774 4.16602 13.3337 3.60637 13.3337 2.91602C13.3337 2.22566 12.774 1.66602 12.0837 1.66602Z"



        stroke="#2D4CC8"



        strokeWidth="1.25"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M13.333 2.91602C14.6276 2.95502 15.3997 3.09941 15.9341 3.63382C16.6663 4.36605 16.6663 5.54455 16.6663 7.90154V13.3323C16.6663 15.6893 16.6663 16.8678 15.9341 17.6C15.2018 18.3323 14.0233 18.3323 11.6663 18.3323H8.33301C5.97599 18.3323 4.79748 18.3323 4.06525 17.6C3.33302 16.8678 3.33302 15.6893 3.33301 13.3323L3.33302 7.90159C3.33302 5.54456 3.33301 4.36605 4.06524 3.63382C4.59965 3.09941 5.37177 2.95502 6.66626 2.91602"



        stroke="#2D4CC8"



        strokeWidth="1.25"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



    </svg>



  );



}







function ArrowDownIcon({ open }: { open?: boolean }) {



  return (



    <svg



      width="12"



      height="7"



      viewBox="0 0 12 7"



      fill="none"



      className={`${styles["tte-chevron"]}${



        open ? ` ${styles["tte-chevron-open"]}` : ""



      }`}



    >



      <path



        d="M10.625 0.625041C10.625 0.625041 6.94258 5.625 5.625 5.625C4.30733 5.625 0.625 0.625 0.625 0.625"



        stroke="#141B34"



        strokeWidth="1.25"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



    </svg>



  );



}











function HeadsetIcon() {



  return (



    <svg



      width="24"



      height="24"



      viewBox="0 0 24 24"



      fill="none"



      aria-hidden="true"



      focusable="false"



    >



      <defs>



        <linearGradient



          id="tteHeadsetGradient"



          x1="3"



          y1="4"



          x2="21"



          y2="20"



          gradientUnits="userSpaceOnUse"



        >



          <stop offset="0%" stopColor="#2D4CC8" />



          <stop offset="55%" stopColor="#5A42BD" />



          <stop offset="100%" stopColor="#B22686" />



        </linearGradient>



      </defs>







      <path



        d="M4 13V11C4 6.582 7.582 3 12 3C16.418 3 20 6.582 20 11V13"



        stroke="url(#tteHeadsetGradient)"



        strokeWidth="1.8"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M4 12.5H5.25C6.216 12.5 7 13.284 7 14.25V17.75C7 18.716 6.216 19.5 5.25 19.5H4.75C3.784 19.5 3 18.716 3 17.75V13.5C3 12.948 3.448 12.5 4 12.5Z"



        stroke="url(#tteHeadsetGradient)"



        strokeWidth="1.8"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M20 12.5H18.75C17.784 12.5 17 13.284 17 14.25V17.75C17 18.716 17.784 19.5 18.75 19.5H19.25C20.216 19.5 21 18.716 21 17.75V13.5C21 12.948 20.552 12.5 20 12.5Z"



        stroke="url(#tteHeadsetGradient)"



        strokeWidth="1.8"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M17 19.5C16.4 21 14.9 21 13.5 21"



        stroke="url(#tteHeadsetGradient)"



        strokeWidth="1.8"



        strokeLinecap="round"



      />



    </svg>



  );



}







function BotIcon() {



  return (



    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">



      <path



        d="M15.167 8.16602H12.8337C9.55659 8.16602 7.91804 8.16602 6.741 8.95249C6.23145 9.29297 5.79395 9.73047 5.45347 10.24C4.66699 11.4171 4.66699 13.0556 4.66699 16.3327C4.66699 19.6097 4.66699 21.2483 5.45347 22.4254C5.79395 22.9348 6.23145 23.3723 6.741 23.7129C7.91804 24.4993 9.55659 24.4994 12.8337 24.4994H15.167C18.444 24.4994 20.0826 24.4993 21.2597 23.7129C21.7692 23.3723 22.2067 22.9348 22.5472 22.4254C23.3337 21.2483 23.3337 19.6097 23.3337 16.3327C23.3337 13.0556 23.3337 11.4171 22.5472 10.24C22.2067 9.73047 21.7692 9.29297 21.2597 8.95249C20.0826 8.16602 18.444 8.16602 15.167 8.16602Z"



        stroke="#2D4CC8"



        strokeWidth="1.75"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M4.66634 16.334H2.33301"



        stroke="#2D4CC8"



        strokeWidth="1.75"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M11.667 19.834H16.3337"



        stroke="#2D4CC8"



        strokeWidth="1.75"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M25.6663 16.334H23.333"



        stroke="#2D4CC8"



        strokeWidth="1.75"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M17.5 12.834V15.1673"



        stroke="#2D4CC8"



        strokeWidth="1.75"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M10.5 12.834V15.1673"



        stroke="#2D4CC8"



        strokeWidth="1.75"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



      <path



        d="M13.9997 8.16667C13.9997 5.96678 13.9997 4.86683 13.3162 4.18342C12.6328 3.5 11.5329 3.5 9.33301 3.5"



        stroke="#2D4CC8"



        strokeWidth="1.75"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



    </svg>



  );



}







function ResizeIcon() {



  return (



    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">



      <path



        d="M20 4L4 20M20 11L11 20M20 18L18 20"



        stroke="#2F3547"



        strokeWidth="1.5"



        strokeLinecap="round"



      />



    </svg>



  );



}







function RadioCheckedIcon() {



  return (



    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">



      <circle



        cx="8"



        cy="8"



        r="7.3"



        fill="#2D4CC8"



        stroke="#2D4CC8"



        strokeWidth="1.5"



      />



      <path



        d="M5.3 8.2L7.1 10L10.7 6.2"



        stroke="#FFFFFF"



        strokeWidth="1.5"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



    </svg>



  );



}







function RadioEmptyIcon() {



  return (



    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">



      <circle



        cx="8"



        cy="8"



        r="6.7"



        stroke="rgba(49, 52, 75, 0.2)"



        strokeWidth="1.5"



      />



    </svg>



  );



}







function CloseIcon() {



  return (



    <svg



      width="20"



      height="20"



      viewBox="0 0 24 24"



      fill="none"



      aria-hidden="true"



      focusable="false"



    >



      <path



        d="M6 6L18 18M18 6L6 18"



        stroke="#31344B"



        strokeWidth="2"



        strokeLinecap="round"



      />



    </svg>



  );



}







export default function TalkToOurExpert({



  isOpen,



  onClose,



}: TalkToOurExpertProps) {



  const dialogRef = useRef<HTMLDivElement | null>(null);



  const previousActiveElement = useRef<HTMLElement | null>(null);



  const countryDropdownRef = useRef<HTMLDivElement | null>(null);



  const interestDropdownRef = useRef<HTMLDivElement | null>(null);







  const [formData, setFormData] = useState<FormState>({



    fullName: "",



    email: "",



    countryIso2: "in",



    phoneNumber: "",



    interest: "LXP",



    query: "",



    consent: false,



  });







  const [touched, setTouched] = useState<TouchedState>({



    fullName: false,



    email: false,



    phoneNumber: false,



    interest: false,



    query: false,



    consent: false,



  });







  const [countrySearch, setCountrySearch] = useState("");



  const [isCountryOpen, setIsCountryOpen] = useState(false);



  const [isInterestOpen, setIsInterestOpen] = useState(false);



  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);



  const [submitted, setSubmitted] = useState(false);







  useEffect(() => {



    if (!isOpen) {



      setFormData({



        fullName: "",



        email: "",



        countryIso2: "in",



        phoneNumber: "",



        interest: "LXP",



        query: "",



        consent: false,



      });







      setTouched({



        fullName: false,



        email: false,



        phoneNumber: false,



        interest: false,



        query: false,



        consent: false,



      });







      setSubmitted(false);



      setCountrySearch("");



      setIsCountryOpen(false);



      setIsInterestOpen(false);



      setIsPrivacyOpen(false);







      return;



    }







    previousActiveElement.current =



      document.activeElement as HTMLElement | null;







    const previousOverflow = document.body.style.overflow;







    document.body.style.overflow = "hidden";



    document.body.classList.add("modal-open");







    const handleKeyDown = (event: KeyboardEvent) => {



      if (event.key === "Escape") {



        onClose();



      }



    };







    document.addEventListener("keydown", handleKeyDown);







    requestAnimationFrame(() => {



      dialogRef.current?.focus();



    });







    return () => {



      document.removeEventListener("keydown", handleKeyDown);



      document.body.style.overflow = previousOverflow;



      document.body.classList.remove("modal-open");



      previousActiveElement.current?.focus();



    };



  }, [isOpen, onClose]);







  useEffect(() => {



    function handleClickOutside(event: MouseEvent) {



      if (



        countryDropdownRef.current &&



        !countryDropdownRef.current.contains(event.target as Node)



      ) {



        setIsCountryOpen(false);



      }







      if (



        interestDropdownRef.current &&



        !interestDropdownRef.current.contains(event.target as Node)



      ) {



        setIsInterestOpen(false);



      }



    }







    document.addEventListener("mousedown", handleClickOutside);







    return () =>



      document.removeEventListener("mousedown", handleClickOutside);



  }, []);







  const selectedCountry = useMemo(



    () =>



      COUNTRIES.find(



        (country) => country.iso2 === formData.countryIso2



      ) ?? COUNTRIES[0],



    [formData.countryIso2]



  );







  const filteredCountries = useMemo(() => {



    const query = countrySearch.trim().toLowerCase();







    if (!query) {



      return COUNTRIES;



    }







    const normalizedQuery = query



      .replace(/[()\s-]/g, "")



      .replace(/^\+/, "");







    /*



     * Exact ISO-code search gets highest priority.



     * Example: typing "IN" returns India directly instead of matching



     * every country name that happens to contain the letters "in".



     */



    const exactIsoMatch = COUNTRIES.filter(



      (country) =>



        country.iso2.toLowerCase() ===



        query.replace(/[^a-z]/g, "")



    );







    if (exactIsoMatch.length > 0) {



      return exactIsoMatch;



    }







    return COUNTRIES.filter((country) => {



      const countryName = country.name.toLowerCase();



      const iso2 = country.iso2.toLowerCase();



      const dialCode = country.dialCode.replace(/^\+/, "");



      const shortLabel = `${iso2}(+${dialCode})`;







      return (



        countryName.includes(query) ||



        iso2.startsWith(query) ||



        dialCode.includes(normalizedQuery) ||



        shortLabel.includes(query.replace(/\s/g, ""))



      );



    });



  }, [countrySearch]);







  const errors = useMemo(



    () => ({



      fullName: !NAME_PATTERN.test(formData.fullName.trim())



        ? "Please enter a valid name using letters and spaces only."



        : "",







      email: validateEmailAddress(formData.email).message,







      phoneNumber: (() => {



        const phone = formData.phoneNumber.trim();







        if (!phone) {



          return `Please enter a valid phone number for ${selectedCountry.name} (+${selectedCountry.dialCode}).`;



        }







        const countryCode =



          formData.countryIso2.toUpperCase() as CountryCode;







        /*



         * Validate the number against the selected country's numbering plan.



         * This handles country-specific length, prefixes, and number ranges.



         */



        const countryNumberIsValid = isValidPhoneNumber(



          phone,



          countryCode



        );







        if (!countryNumberIsValid) {



          return `Please enter a valid phone number for ${selectedCountry.name} (+${selectedCountry.dialCode}).`;



        }







        return "";



      })(),







      query:



        formData.query.trim().length === 0



          ? "Please enter your query."



          : "",







      consent: !formData.consent



        ? "Please accept the privacy policy to continue."



        : "",



    }),



    [formData, selectedCountry]



  );







  const isFormValid =



    !errors.fullName &&



    !errors.email &&



    !errors.phoneNumber &&



    !errors.query &&



    !errors.consent;







  const handleFieldChange = <K extends keyof FormState>(



    field: K,



    value: FormState[K]



  ) => {



    setFormData((prev) => ({



      ...prev,



      [field]: value,



    }));



  };







  const handleBlur = (field: keyof TouchedState) => {



    setTouched((prev) => ({



      ...prev,



      [field]: true,



    }));



  };







  const openCountryDropdown = () => {



    setIsInterestOpen(false);



    setIsCountryOpen((open) => !open);



  };







  const openInterestDropdown = () => {



    setIsCountryOpen(false);



    setIsInterestOpen((open) => !open);



  };







  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {



    event.preventDefault();







    setTouched({



      fullName: true,



      email: true,



      phoneNumber: true,



      interest: true,



      query: true,



      consent: true,



    });







    if (!isFormValid) {



      return;



    }







    try {



      const response = await fetch(
        `${(process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000").replace(/\/$/, "")}/email/talk-to-expert`,
        {



        method: "POST",



        headers: {



          "Content-Type": "application/json",



        },



        body: JSON.stringify({



          fullName: formData.fullName.trim(),



          email: formData.email.trim(),



          countryCode: formData.countryIso2.toUpperCase(),



          phone: formData.phoneNumber.replace(/\D/g, ""),



          interest: formData.interest,



          query: formData.query.trim(),



          consent: formData.consent,



        }),



      });







      let responseData: unknown = null;







      try {



        responseData = await response.json();



      } catch {



        responseData = null;



      }







      if (!response.ok) {



        let errorMessage = "Unable to submit your query.";







        if (



          responseData &&



          typeof responseData === "object" &&



          "message" in responseData



        ) {



          const message = responseData.message;







          if (typeof message === "string") {



            errorMessage = message;



          } else if (Array.isArray(message)) {



            errorMessage = message.join("\n");



          }



        }







        throw new Error(errorMessage);



      }







      setSubmitted(true);



    } catch (error) {



      const errorMessage =



        error instanceof Error



          ? error.message



          : "Unable to submit your query.";







      window.alert(errorMessage);



    }



  };







  if (!isOpen) {



    return null;



  }







  const modalContent = (



    <div



      className={styles["tte-overlay"]}



      onMouseDown={(event) => {



        if (event.target === event.currentTarget) {



          onClose();



        }



      }}



    >



      <div



        className={styles["tte-dialog"]}



        role="dialog"



        aria-modal="true"



        aria-labelledby="tte-title"



        ref={dialogRef}



        tabIndex={-1}



      >



        <button



          type="button"



          className={styles["tte-close"]}



          onClick={onClose}



          aria-label="Close talk to our expert form"



        >



          <CloseIcon />



        </button>







        <div className={styles["tte-card"]}>



          <div className={styles["tte-photo-panel"]}>



            <div className={styles["tte-photo-frame"]}>



              <div className={styles["tte-photo-inner"]}>



                <video



                  src={VIDEO_SRC}



                  autoPlay



                  muted



                  loop



                  playsInline



                  className={styles["tte-photo"]}



                  aria-label="NeuroLXP learning expert wearing a headset, ready to help"



                />



              </div>



            </div>



          </div>







          <div className={styles["tte-form-panel"]}>



            <div className={styles["tte-header"]}>



              <span



                className={styles["tte-header-icon"]}



                aria-hidden="true"



              >



                <HeadsetIcon />



              </span>







              <div className={styles["tte-header-copy"]}>



                <h2 id="tte-title" className={styles["tte-title"]}>



                  Talk to our Expert



                </h2>







                <p className={styles["tte-subtitle"]}>



                  <span>Get personalized learning guidance</span>



                </p>



              </div>



            </div>







            <div className={styles["tte-form-surface"]}>



              {submitted ? (



                <div className={styles["tte-success"]} role="status">



                  <p className={styles["tte-success-title"]}>



                    Thanks, {formData.fullName.split(" ")[0]}!



                  </p>







                  <p className={styles["tte-success-body"]}>



                    Our expert has received your query and will reach out to



                    you shortly.



                  </p>



                </div>



              ) : (



                <form



                  className={styles["tte-form"]}



                  onSubmit={handleSubmit}



                  noValidate



                >



                  {/* FULL NAME */}



                  <div className={styles["tte-field"]}>



                    <label



                      className={styles["tte-label"]}



                      htmlFor="tte-fullName"



                    >



                      Full Name



                    </label>







                    <div



                      className={`${styles["tte-input-shell"]}${



                        touched.fullName && errors.fullName



                          ? ` ${styles["tte-input-shell-error"]}`



                          : ""



                      }`}



                    >



                      <IconBubble>



                        <UserIcon />



                      </IconBubble>







                      <input



                        id="tte-fullName"



                        type="text"



                        className={styles["tte-input"]}



                        placeholder="Enter your name"



                        value={formData.fullName}



                        spellCheck={false}



                        autoCorrect="off"



                        autoCapitalize="words"



                        onChange={(event) =>



                          handleFieldChange(



                            "fullName",



                            event.target.value.replace(



                              /[^A-Za-z ]/g,



                              ""



                            )



                          )



                        }



                        onBlur={() => handleBlur("fullName")}



                        aria-invalid={



                          touched.fullName && Boolean(errors.fullName)



                        }



                        aria-describedby={



                          touched.fullName && errors.fullName



                            ? "tte-fullName-error"



                            : undefined



                        }



                      />



                    </div>







                    {touched.fullName && errors.fullName && (



                      <span



                        id="tte-fullName-error"



                        className={styles["tte-error"]}



                        role="alert"



                      >



                        {errors.fullName}



                      </span>



                    )}



                  </div>







                  {/* EMAIL */}



                  <div className={styles["tte-field"]}>



                    <label



                      className={styles["tte-label"]}



                      htmlFor="tte-email"



                    >



                      Email Address



                    </label>







                    <div



                      className={`${styles["tte-input-shell"]}${



                        touched.email && errors.email



                          ? ` ${styles["tte-input-shell-error"]}`



                          : ""



                      }`}



                    >



                      <IconBubble>



                        <MailIcon />



                      </IconBubble>







                      <input



                        id="tte-email"



                        type="email"



                        className={styles["tte-input"]}



                        placeholder="Enter your email address"



                        value={formData.email}



                        onChange={(event) =>



                          handleFieldChange(



                            "email",



                            event.target.value



                          )



                        }



                        onBlur={() => handleBlur("email")}



                        aria-invalid={



                          touched.email && Boolean(errors.email)



                        }



                        aria-describedby={



                          touched.email && errors.email



                            ? "tte-email-error"



                            : undefined



                        }



                      />



                    </div>







                    {touched.email && errors.email && (



                      <span



                        id="tte-email-error"



                        className={styles["tte-error"]}



                        role="alert"



                      >



                        {errors.email}



                      </span>



                    )}



                  </div>







                  {/* PHONE */}



                  <div className={styles["tte-field"]}>



                    <label



                      className={styles["tte-label"]}



                      htmlFor="tte-phone"



                    >



                      Phone Number



                    </label>







                    <div className={styles["tte-phone-row"]}>



                      <div



                        className={styles["tte-country-select"]}



                        ref={countryDropdownRef}



                      >



                        <button



                          type="button"



                          className={styles["tte-country-trigger"]}



                          onClick={openCountryDropdown}



                          aria-haspopup="listbox"



                          aria-expanded={isCountryOpen}



                          aria-controls="tte-country-listbox"



                        >



                          <span className={styles["tte-country-code"]}>

                            <img

                              className={styles["tte-country-flag"]}

                              src={getCountryFlagUrl(selectedCountry.iso2)}

                              width={24}

                              height={18}

                              alt=""

                              aria-hidden="true"

                            />

                            <span>+{selectedCountry.dialCode.replace(/^\+/, "")}</span>

                          </span>







                          <ArrowDownIcon open={isCountryOpen} />



                        </button>







                        {isCountryOpen && (



                          <div



                            id="tte-country-listbox"



                            className={styles["tte-country-panel"]}



                            role="listbox"



                          >



                            <input



                              type="text"



                              className={styles["tte-country-search"]}



                              placeholder="Search country"



                              value={countrySearch}



                              onChange={(event) =>



                                setCountrySearch(event.target.value)



                              }



                              autoFocus



                            />







                            <ul className={styles["tte-country-list"]}>



                              {filteredCountries.map((country) => (



                                <li key={country.iso2}>



                                  <button



                                    type="button"



                                    role="option"



                                    aria-selected={



                                      country.iso2 ===



                                      formData.countryIso2



                                    }



                                    className={`${styles["tte-country-option"]}${



                                      country.iso2 ===



                                      formData.countryIso2



                                        ? ` ${styles["tte-country-option-active"]}`



                                        : ""



                                    }`}



                                    onClick={() => {



                                      handleFieldChange(



                                        "countryIso2",



                                        country.iso2



                                      );



                                      setIsCountryOpen(false);



                                      setCountrySearch("");



                                    }}



                                  >



                                    <span className={styles["tte-country-short-label"]}>

                                      <img

                                        className={styles["tte-country-flag"]}

                                        src={getCountryFlagUrl(country.iso2)}

                                        width={24}

                                        height={18}

                                        alt=""

                                        aria-hidden="true"

                                      />

                                      <span>+{country.dialCode.replace(/^\+/, "")}</span>

                                      

                                    </span>



                                  </button>



                                </li>



                              ))}







                              {filteredCountries.length === 0 && (



                                <li



                                  className={



                                    styles["tte-country-empty"]



                                  }



                                >



                                  No countries match your search.



                                </li>



                              )}



                            </ul>



                          </div>



                        )}



                      </div>







                      <div



                        className={`${styles["tte-input-shell"]} ${



                          styles["tte-input-shell-grow"]



                        }${



                          touched.phoneNumber && errors.phoneNumber



                            ? ` ${styles["tte-input-shell-error"]}`



                            : ""



                        }`}



                      >



                        <IconBubble>



                          <PhoneIcon />



                        </IconBubble>







                        <input



                          id="tte-phone"



                          type="tel"



                          inputMode="numeric"



                          maxLength={MAX_PHONE_DIGITS}



                          className={styles["tte-input"]}



                          placeholder="XXXXXXXXXX"



                          value={formData.phoneNumber}



                          onChange={(event) => {



                            handleFieldChange(



                              "phoneNumber",



                              event.target.value



                                .replace(/[^0-9]/g, "")



                                .slice(0, MAX_PHONE_DIGITS)



                            );



                            setTouched((prev) => ({



                              ...prev,



                              phoneNumber: true,



                            }));



                          }}



                          onBlur={() => handleBlur("phoneNumber")}



                          aria-invalid={



                            touched.phoneNumber &&



                            Boolean(errors.phoneNumber)



                          }



                          aria-describedby={



                            touched.phoneNumber &&



                            errors.phoneNumber



                              ? "tte-phone-error"



                              : undefined



                          }



                        />



                      </div>



                    </div>







                    {touched.phoneNumber && errors.phoneNumber && (



                      <span



                        id="tte-phone-error"



                        className={styles["tte-error"]}



                        role="alert"



                      >



                        {errors.phoneNumber}



                      </span>



                    )}



                  </div>







                  {/* INTEREST */}



                  <div



                    className={styles["tte-field"]}



                    ref={interestDropdownRef}



                  >



                    <span



                      className={styles["tte-label"]}



                      id="tte-interest-label"



                    >



                      Select your Interest



                    </span>







                    <button



                      type="button"



                      className={`${styles["tte-input-shell"]} ${styles["tte-interest-trigger"]}`}



                      onClick={openInterestDropdown}



                      aria-haspopup="listbox"



                      aria-expanded={isInterestOpen}



                      aria-controls="tte-interest-listbox"



                      aria-labelledby="tte-interest-label"



                    >



                      <IconBubble>



                        <ClipboardIcon />



                      </IconBubble>







                      <span className={styles["tte-interest-value"]}>



                        {formData.interest}



                      </span>







                      <ArrowDownIcon open={isInterestOpen} />



                    </button>







                    {isInterestOpen && (



                      <div



                        id="tte-interest-listbox"



                        className={styles["tte-interest-panel"]}



                        role="listbox"



                      >



                        {INTEREST_OPTIONS.map((option) => {



                          const checked =



                            option === formData.interest;







                          return (



                            <button



                              type="button"



                              key={option}



                              role="option"



                              aria-selected={checked}



                              className={



                                styles["tte-interest-option"]



                              }



                              onClick={() => {



                                handleFieldChange(



                                  "interest",



                                  option



                                );







                                setTouched((prev) => ({



                                  ...prev,



                                  interest: true,



                                }));







                                setIsInterestOpen(false);



                              }}



                            >



                              <span



                                className={



                                  styles["tte-radio-bubble"]



                                }



                              >



                                {checked ? (



                                  <RadioCheckedIcon />



                                ) : (



                                  <RadioEmptyIcon />



                                )}



                              </span>







                              <span



                                className={`${



                                  styles[



                                    "tte-interest-option-label"



                                  ]



                                }${



                                  checked



                                    ? ` ${styles["tte-interest-option-label-active"]}`



                                    : ""



                                }`}



                              >



                                {option}



                              </span>



                            </button>



                          );



                        })}



                      </div>



                    )}



                  </div>







                  {/* QUERY */}



                  <div className={styles["tte-field"]}>



                    <div className={styles["tte-query-header"]}>



                      <label



                        className={styles["tte-label"]}



                        htmlFor="tte-query"



                      >



                        Describe your query or question in detail



                      </label>







                      <span



                        id="tte-query-count"



                        className={styles["tte-query-count"]}



                        aria-live="polite"



                      >



                        {MAX_QUERY_LENGTH - formData.query.length}/{MAX_QUERY_LENGTH}&#x20;



                      </span>



                    </div>







                    <div



                      className={`${styles["tte-textarea-shell"]}${



                        touched.query && errors.query



                          ? ` ${styles["tte-textarea-error"]}`



                          : ""



                      }`}



                    >



                      <textarea



                        id="tte-query"



                        className={styles["tte-textarea"]}



                        placeholder="Write your detailed query here......"



                        value={formData.query}



                        maxLength={MAX_QUERY_LENGTH}



                        onChange={(event) =>



                          handleFieldChange(



                            "query",



                            event.target.value



                          )



                        }



                        onBlur={() => handleBlur("query")}



                        aria-invalid={



                          touched.query && Boolean(errors.query)



                        }



                        aria-describedby={



                          touched.query && errors.query



                            ? "tte-query-error"



                            : "tte-query-count"



                        }



                      />







                      <span



                        className={styles["tte-resize-icon"]}



                        aria-hidden="true"



                      >



                        <ResizeIcon />



                      </span>



                    </div>







                    {touched.query && errors.query && (



                      <div className={styles["tte-query-meta"]}>



                        <span



                          id="tte-query-error"



                          className={styles["tte-error"]}



                          role="alert"



                        >



                          {errors.query}



                        </span>



                      </div>



                    )}







                    {formData.query.length === MAX_QUERY_LENGTH && (



                      <div className={styles["tte-query-meta"]}>



                        <span



                          className={styles["tte-query-limit-message"]}



                          role="status"



                          aria-live="polite"



                        >



                          Maximum character limit reached.



                        </span>



                      </div>



                    )}



                  </div>







                  {/* CONSENT */}



                  <div className={styles["tte-consent"]}>



                    <input



                      type="checkbox"



                      className={styles["tte-consent-checkbox"]}



                      checked={formData.consent}



                      onChange={(event) => {



                        handleFieldChange("consent", event.target.checked);



                        setTouched((prev) => ({



                          ...prev,



                          consent: true,



                        }));



                      }}



                      aria-invalid={



                        touched.consent &&



                        Boolean(errors.consent)



                      }



                      aria-describedby={



                        touched.consent && errors.consent



                          ? "tte-consent-error"



                          : undefined



                      }



                    />







                    <span



                      className={styles["tte-consent-box"]}



                      aria-hidden="true"



                    >



                      {formData.consent && (



                        <svg



                          className={styles["tte-consent-check"]}



                          width="12"



                          height="12"



                          viewBox="0 0 16 16"



                          fill="none"



                        >



                          <path



                            d="M3.5 8.2L6.7 11.2L12.5 4.8"



                            stroke="#2D4CC8"



                            strokeWidth="2"



                            strokeLinecap="round"



                            strokeLinejoin="round"



                          />



                        </svg>



                      )}



                    </span>







                    <span className={styles["tte-consent-text"]}>



                      I agree to be contacted for the platform demo



                      and accept the{" "}



                      <button



                        type="button"



                        className={styles["tte-consent-link"]}



                        onClick={() => setIsPrivacyOpen(true)}



                        style={{



                          border: 0,



                          padding: 0,



                          background: "transparent",



                          font: "inherit",



                          cursor: "pointer",



                        }}



                      >



                        Privacy Policy



                      </button>{" "}



                      of{" "}



                      <strong>



                        Prgeeq Global Solutions Private Limited.



                      </strong>



                    </span>



                  </div>







                  {touched.consent && errors.consent && (



                    <span



                      id="tte-consent-error"



                      className={styles["tte-error"]}



                      role="alert"



                    >



                      {errors.consent}



                    </span>



                  )}







                  <button



                    type="submit"



                    className={styles["tte-submit"]}



                    disabled={!isFormValid}



                  >



                    Submit Query



                  </button>



                </form>



              )}



            </div>



          </div>



        </div>







        {isPrivacyOpen && (



          <div



            className={styles["tte-privacy-overlay"]}



            role="dialog"



            aria-modal="true"



            aria-labelledby="tte-privacy-title"



            onMouseDown={(event) => event.stopPropagation()}



          >



            <div className={styles["tte-privacy-card"]}>



              <div className={styles["tte-privacy-header"]}>



                <h2



                  id="tte-privacy-title"



                  className={styles["tte-privacy-title"]}



                >



                  PRIVACY POLICY ACCEPTANCE



                </h2>



              </div>







              <div className={styles["tte-privacy-content"]}>



                <p>



                  By accessing or using the Platform, I hereby provide my explicit,



                  informed, and unconditional consent to{" "}



                  <strong>PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED</strong> for the



                  following:



                </p>







                <h3>1. ACKNOWLEDGMENT</h3>



                <p>



                  I have carefully read, fully understood, and voluntarily agree to



                  be bound by the Terms and Conditions of{" "}



                  <strong>PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED</strong>.



                </p>







                <h3>2. DATA COLLECTION AND USAGE CONSENT</h3>



                <p>



                  I confirm that I have read and understood the Privacy Policy and



                  agree to its terms.



                </p>



                <ul>



                  <li>Identification details</li>



                  <li>Contact information</li>



                  <li>Usage data and activity logs</li>



                  <li>Device and technical data</li>



                </ul>







                <h3>3. DATA COLLECTION AND USAGE CONSENT</h3>



                <p>



                  I consent to the collection and processing of my personal data,



                  including but not limited to:



                </p>



                <ul>



                  <li>Account management and authentication</li>



                  <li>Service delivery and personalization</li>



                  <li>Communication and notifications</li>



                  <li>Legal and regulatory compliance</li>



                  <li>Security monitoring and fraud prevention</li>



                </ul>







                <h3>4. DATA SECURITY DISCLAIMER</h3>



                <ul>



                  <li>



                    The Company implements reasonable technical and organizational



                    safeguards



                  </li>



                  <li>



                    However, I acknowledge that no digital system is completely



                    secure



                  </li>



                  <li>



                    The Company shall not be liable for data breaches resulting from



                    sophisticated cyber-attacks beyond reasonable control



                  </li>



                </ul>







                <h3>5. PAYMENT AND FRAUD PREVENTION DISCLAIMER</h3>



                <ul>



                  <li>



                    I understand that payment-related communications must be verified



                    through official Company channels



                  </li>



                  <li>



                    The Company does not accept responsibility for losses due to



                    fraudulent payment requests or impersonation



                  </li>



                </ul>







                <h3>6. USER RIGHTS</h3>



                <p>Subject to applicable laws, I understand I may:</p>



                <ul>



                  <li>Access my data</li>



                  <li>Request correction or deletion</li>



                  <li>Withdraw consent where permissible</li>



                </ul>







                <h3>7. THIRD-PARTY SERVICES</h3>



                <p>



                  I acknowledge that certain services may involve third-party



                  providers, and the Company is not responsible for their independent



                  practices.



                </p>







                <h3>8. CONSENT VALIDITY</h3>



                <p>This consent:</p>



                <ul>



                  <li>Is legally binding</li>



                  <li>



                    Remains valid until withdrawn (subject to legal obligations)



                  </li>



                  <li>Applies to all Platform interactions</li>



                </ul>







                <p>



                  <strong>MANDATORY CONSENT ACTIONS (IMPLEMENTATION):</strong>



                </p>



                <p>I agree to the Privacy Policy</p>



                <p>I consent to data processing as described</p>







                <p>



                  <strong>OPTIONAL CONSENTS:</strong>



                </p>



                <p>I agree to receive marketing communications</p>



                <p>I accept use of cookies and tracking technologies</p>







                <p>



                  <strong>



                    COMPANY DETAILS: PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED



                  </strong>



                </p>



                <p>



                  <strong>Email: contact\\@prgeeq.com</strong>



                </p>



              </div>







              <div className={styles["tte-privacy-footer"]}>



                <button



                  type="button"



                  className={styles["tte-privacy-accept"]}



                  onClick={() => {



                    handleFieldChange("consent", true);



                    setTouched((prev) => ({ ...prev, consent: true }));



                    setIsPrivacyOpen(false);



                  }}



                >



                  Close &amp; Accept



                </button>



              </div>



            </div>



          </div>



        )}



      </div>



    </div>



  );







  /*



   * IMPORTANT:



   * Render the modal directly under <body>.



   * This prevents any parent transform/position/overflow from



   * affecting the viewport-centering calculation.



   */



  return createPortal(modalContent, document.body);



}