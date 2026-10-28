'use client';





import { useEffect, useRef, useState, type FormEvent } from "react";

import Image from "next/image";

import "./Assistant.css";

import GradientText from "./GradientText";



type AssistantProps = {

    onClose?: () => void;

};



const ASSISTANT_ASSETS = {

    logo: "/images/assistant-logo.png",

    bot: "/images/assistant-bot.png",

};



export default function Assistant({ onClose }: AssistantProps) {

    const [isOpen, setIsOpen] = useState(true);
    const [organizationName, setOrganizationName] = useState("");
    const [submittedOrganizations, setSubmittedOrganizations] = useState<string[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, [submittedOrganizations]);

    const handleOrganizationSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = organizationName.trim();
        if (!name) return;
        setSubmittedOrganizations((current) => [...current, name]);
        setOrganizationName("");
    };



    const messages = [

        "Good Afternoon! Hope You're Doing Well",

        "I'm NeuroLXP Assistant! I'm Here To Help You Get Started",

        "Enter Your organization name",

    ];



    const handleClose = () => {

        if (onClose) {

            onClose();

            return;

        }



        setIsOpen(false);

    };



    if (!isOpen) return null;





    return (

        <div className="assistant-overlay">

            <div

                className="assistant-popup"

                role="dialog"

                aria-modal="true"

                aria-label="NeuroLXP Assistant"

            >

                <div className="assistant-header">

                    <button

                        type="button"

                        className="assistant-close-button"

                        onClick={handleClose}

                        aria-label="Close NeuroLXP Assistant"

                    >

                        <svg

                            className="assistant-close-icon"

                            viewBox="0 0 24 24"

                            aria-hidden="true"

                        >

                            <path d="M6 6L18 18M18 6L6 18" />

                        </svg>

                    </button>



                    <div className="assistant-brand-logo">

                        <Image

                            src={ASSISTANT_ASSETS.logo}

                            alt="NeuroLXP Logo"

                            width={130}

                            height={45}

                            priority

                        />

                    </div>



                    <div className="assistant-header-content">

                        <div className="assistant-logo">

                            <Image

                                src={ASSISTANT_ASSETS.bot}

                                alt="NeuroLXP Assistant"

                                width={62}

                                height={62}

                                className="assistant-main-bot"

                            />

                        </div>



                        <div className="assistant-details">

                            <div className="assistant-title-wrapper">

                                <h2 className="assistant-title">

                                    <GradientText

                                        text="NeuroLXP Assistant"

                                        from="#2D4CC8"

                                        to="#BF1869"

                                    />

                                </h2>

                            </div>



                            <div className="assistant-status">

                                <span className="status-dot" />

                                <span className="status-text">Online</span>

                            </div>

                        </div>

                    </div>

                </div>



                <div className="assistant-body">

                    <div className="assistant-content">

                        <div className="welcome-section">

                            <div className="welcome-card">

                                <div className="welcome-content">

                                    <div className="welcome-title-row">

                                        <div className="welcome-icon">

                                            <svg

                                                width="36"

                                                height="37"

                                                viewBox="0 0 36 37"

                                                fill="none"

                                                xmlns="http://www.w3.org/2000/svg"

                                                role="img"

                                                aria-label="Welcome Icon"

                                            >

                                                <g filter="url(#filter0_d_180_200)">

                                                    <path

                                                        d="M26.8872 15.5996L24.8307 21.1085C23.8729 23.6741 23.394 24.9569 22.612 25.836C21.416 27.1801 19.6937 27.9664 17.8732 27.9993C16.6827 28.0208 15.3711 27.5553 12.7479 26.6244C11.3722 26.1363 10.6843 25.8921 10.0955 25.5273C9.19727 24.9708 8.45503 24.2045 7.93555 23.2975C7.59504 22.7029 7.38324 22.0183 6.95965 20.6489L5.09313 14.6151C4.80635 13.688 5.19807 12.6874 6.04549 12.1825C7.153 11.5226 8.59955 11.949 9.14604 13.0963L10.3924 15.7131L13.9017 6.31238C14.2668 5.33444 15.3759 4.8302 16.3789 5.18614C17.382 5.54209 17.8991 6.62342 17.534 7.60137M17.534 7.60137L18.4155 5.24038C18.7805 4.26244 19.8896 3.75821 20.8925 4.11416C21.8956 4.47009 22.4128 5.55142 22.0477 6.52938L21.1664 8.89036M17.534 7.60137L15.5509 12.9136M19.1832 14.2025L21.1664 8.89036C21.5315 7.91241 22.6405 7.40817 23.6435 7.76412C24.6465 8.12006 25.1637 9.2014 24.7987 10.1793L23.9173 12.5403M22.8156 15.4916C23.2459 14.3391 23.9173 12.5403 23.9173 12.5403C24.2824 11.5624 25.3915 11.0581 26.3944 11.4141C27.3975 11.77 27.9147 12.8514 27.5496 13.8293L26.4479 16.7805"

                                                        stroke="url(#paint0_linear_180_200)"

                                                        strokeWidth="2"

                                                        strokeLinecap="round"

                                                        strokeLinejoin="round"

                                                    />

                                                    <path

                                                        d="M30.1069 18.6641C30.8353 20.8446 29.7425 23.2325 27.666 23.9974"

                                                        stroke="url(#paint1_linear_180_200)"

                                                        strokeWidth="2"

                                                        strokeLinecap="round"

                                                    />

                                                </g>



                                                <defs>

                                                    <filter

                                                        id="filter0_d_180_200"

                                                        x="-2.33398"

                                                        y="0"

                                                        width="40"

                                                        height="40"

                                                        filterUnits="userSpaceOnUse"

                                                        colorInterpolationFilters="sRGB"

                                                    >

                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />

                                                        <feColorMatrix

                                                            in="SourceAlpha"

                                                            type="matrix"

                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"

                                                            result="hardAlpha"

                                                        />

                                                        <feOffset dy="4" />

                                                        <feGaussianBlur stdDeviation="2" />

                                                        <feComposite in2="hardAlpha" operator="out" />

                                                        <feColorMatrix

                                                            type="matrix"

                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"

                                                        />

                                                        <feBlend

                                                            mode="normal"

                                                            in2="BackgroundImageFix"

                                                            result="effect1_dropShadow_180_200"

                                                        />

                                                        <feBlend

                                                            mode="normal"

                                                            in="SourceGraphic"

                                                            in2="effect1_dropShadow_180_200"

                                                            result="shape"

                                                        />

                                                    </filter>



                                                    <linearGradient

                                                        id="paint0_linear_180_200"

                                                        x1="16.3333"

                                                        y1="4"

                                                        x2="16.3333"

                                                        y2="28"

                                                        gradientUnits="userSpaceOnUse"

                                                    >

                                                        <stop stopColor="#2D4CC8" />

                                                        <stop offset="1" stopColor="#BF1869" />

                                                    </linearGradient>



                                                    <linearGradient

                                                        id="paint1_linear_180_200"

                                                        x1="28.9993"

                                                        y1="18.6641"

                                                        x2="28.9993"

                                                        y2="23.9974"

                                                        gradientUnits="userSpaceOnUse"

                                                    >

                                                        <stop stopColor="#2D4CC8" />

                                                        <stop offset="1" stopColor="#BF1869" />

                                                    </linearGradient>

                                                </defs>

                                            </svg>

                                        </div>



                                        <h3 className="welcome-title">

                                            Welcome Back!

                                        </h3>

                                    </div>



                                    <p className="welcome-subtitle">

                                        How Can I Help You Today

                                    </p>

                                </div>

                            </div>

                        </div>



                        <div className="messages-container">

                            {messages.map((message, index) => (

                                <div className="message-card" key={`${message}-${index}`}>

                                    <div className="message-content">

                                        <div className="message-avatar">

                                            <Image

                                                src={ASSISTANT_ASSETS.bot}

                                                alt=""

                                                aria-hidden="true"

                                                width={32}

                                                height={32}

                                                className="message-avatar-image"

                                            />

                                        </div>



                                        <p className="message-text">{message}</p>

                                    </div>

                                </div>

                            ))}
                            {submittedOrganizations.map((name, index) => (
                                <div className="assistant-conversation" key={`${name}-${index}`}>
                                    <div className="assistant-user-message">{name}</div>
                                    <div className="message-card assistant-reply-card">
                                        <div className="message-content">
                                            <div className="message-avatar">
                                                <Image src={ASSISTANT_ASSETS.bot} alt="" aria-hidden="true" width={32} height={32} className="message-avatar-image" />
                                            </div>
                                            <p className="message-text">Not yet registered. Contact your organization.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />


                        </div>

                    </div>



                    <div className="assistant-bottom">

                        <div className="assistant-input-container">

                            <form className="assistant-input-wrapper" onSubmit={handleOrganizationSubmit}>

                                <input

                                    id="assistant-input"

                                    type="text"

                                    className="assistant-input"

                                    placeholder="Type Your organization..."

                                    aria-label="College, Institution, University, or Corporate Name"

                                    autoComplete="organization"
                                    value={organizationName}
                                    onChange={(event) => setOrganizationName(event.target.value)}

                                />



                                <button

                                    type="submit"

                                    className="assistant-send-button"

                                    aria-label="Send"
                                    disabled={!organizationName.trim()}

                                >

                                    <svg

                                        className="send-icon"

                                        width="22"

                                        height="22"

                                        viewBox="0 0 22 22"

                                        fill="none"

                                        xmlns="http://www.w3.org/2000/svg"

                                        aria-hidden="true"

                                    >

                                        <path

                                            d="M8.13151 5.62159L13.5053 3.84577C16.5306 2.84603 18.0432 2.34616 18.8451 3.14807C19.647 3.94998 19.1471 5.46262 18.1474 8.4879L16.3715 13.8617C15.2386 17.2901 14.6721 19.0042 13.64 19.2136C13.4213 19.258 13.1962 19.2618 12.9757 19.225C11.9344 19.0513 11.2874 17.3579 9.99346 13.9712C9.74706 13.3261 9.62377 13.0037 9.40294 12.7533C9.35197 12.6956 9.29753 12.6411 9.23987 12.5902C8.98951 12.3693 8.667 12.2461 8.02197 11.9997C4.63524 10.7058 2.94187 10.0588 2.76815 9.0175C2.73136 8.79697 2.73523 8.57182 2.77956 8.35321C2.98889 7.32102 4.70309 6.75454 8.13151 5.62159Z"

                                            stroke="#2D4CC8"

                                            strokeWidth="1.5"

                                            strokeLinecap="round"

                                            strokeLinejoin="round"

                                        />



                                        <path

                                            d="M11.7344 10.2537L14.2068 7.78125"

                                            stroke="#2D4CC8"

                                            strokeWidth="1.5"

                                            strokeLinecap="round"

                                            strokeLinejoin="round"

                                        />

                                    </svg>

                                </button>

                            </form>

                        </div>



                        <div className="assistant-footer">

                            <span className="footer-text">Powered By </span>

                            <span className="footer-brand">NeuroLXP AI</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}
