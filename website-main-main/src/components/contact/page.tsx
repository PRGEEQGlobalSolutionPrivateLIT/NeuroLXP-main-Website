"use client";

import type { NextPage } from "next";

import Image from "next/image";

import { type FormEvent, useMemo, useState } from "react";

import { getCountries, getCountryCallingCode, isValidPhoneNumber, type CountryCode } from "libphonenumber-js";

import styles from "./contact.module.css";

const subjectOptions = ["General Inquiry", "Product Information", "Technical Support", "Account Support", "Partnership", "Billing", "Feedback", "Other"];

const ContactUs: NextPage = () => {

  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState("");

  const [fullName, setFullName] = useState("");

  const [nameTouched, setNameTouched] = useState(false);

  const [emailAddress, setEmailAddress] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);

  const [countryCode, setCountryCode] = useState("IN");

  const [countryTouched, setCountryTouched] = useState(false);

  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const [countrySearch, setCountrySearch] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [phoneTouched, setPhoneTouched] = useState(false);

  const [message, setMessage] = useState("");

  const [messageTouched, setMessageTouched] = useState(false);

  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
  const emailPattern =
    /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

  const commonEmailDomains: Record<string, string> = {

    gmail: "gmail.com",

    yahoo: "yahoo.com",

    outlook: "outlook.com",

    hotmail: "hotmail.com",

    icloud: "icloud.com",

  };

  const validateEmailAddress = (value: string) => {

    const normalized = value.trim().toLowerCase();

    if (!emailPattern.test(normalized)) {

      return {

        valid: false,

        message: "Enter a valid email address",

      };

    }

    const [, domain = ""] = normalized.split("@");

    const provider = domain.split(".")[0] ?? "";

    const requiredDomain = commonEmailDomains[provider];

    if (requiredDomain && domain !== requiredDomain) {

      return {

        valid: false,

        message: `Enter the complete email address. Did you mean ${requiredDomain}?`,

      };

    }

    return {

      valid: true,

      message: "",

    };

  };

  const isNameValid = fullName.trim().length > 0 && namePattern.test(fullName.trim());

  const emailValidation = validateEmailAddress(emailAddress);

  const isEmailValid = emailAddress.length > 0 && emailValidation.valid;

  const isCountryValid = Boolean(countryCode);

  const isSubjectValid = Boolean(selectedSubject);

  const hasMessageContent = message.trim().length > 0;

  const isMessageValid = hasMessageContent && message.length <= 250;

  const isMessageAtLimit = message.length === 250;

  const isPrivacyValid = privacyAccepted;

  const showNameError = nameTouched && !isNameValid;

  const showEmailError = emailTouched && !isEmailValid;

  const showCountryError = countryTouched && !isCountryValid;

  const showMessageError = messageTouched && !isMessageValid;

  const countryOptions = useMemo(() => {

    const displayNames = new Intl.DisplayNames(["en"], { type: "region" });

    return getCountries()

      .map((country) => ({

        value: country,

        label: `${displayNames.of(country) || country} (+${getCountryCallingCode(country)})`,

        shortLabel: `${country} (+${getCountryCallingCode(country)})`,

        countryName: displayNames.of(country) || country,

        dialCode: `+${getCountryCallingCode(country)}`,

        flagUrl: `https://flagcdn.com/24x18/${country.toLowerCase()}.png`,

      }))

      .sort((first, second) => first.label.localeCompare(second.label));

  }, []);

  const selectedCountry = countryOptions.find((country) => country.value === countryCode);

  /*

   * All countries are validated using their selected country's

   * numbering plan. The input is capped at 15 digits, which is

   * the international maximum used by libphonenumber-js.

   */

  /*

   * Do not impose a 10-digit limit globally.

   * Each selected country has its own valid national number length.

   * libphonenumber-js performs the country-specific validation below.

   */

  const phoneMaxLength = 15;

  const filteredCountryOptions = useMemo(() => {

    const searchValue = countrySearch.trim().toLowerCase();

    if (!searchValue) {

      return countryOptions;

    }

    const normalizedSearch = searchValue

      .replace(/[()\s-]/g, "")

      .replace(/^\+/, "");

    /*

     * Exact ISO code has highest priority.

     * Example: typing "IN" returns India immediately.

     */

    const exactIsoMatch = countryOptions.filter(

      (country) => country.value.toLowerCase() === searchValue

    );

    if (exactIsoMatch.length > 0) {

      return exactIsoMatch;

    }

    return countryOptions.filter((country) => {

      const isoCode = country.value.toLowerCase();

      const fullName = country.label.toLowerCase();

      const shortLabel = country.shortLabel.toLowerCase();

      const dialCode = shortLabel

        .replace(/[()\s-]/g, "")

        .replace(/^\+/, "");

      return (

        isoCode.startsWith(searchValue) ||

        fullName.startsWith(searchValue) ||

        fullName.includes(searchValue) ||

        shortLabel.startsWith(searchValue) ||

        dialCode.includes(normalizedSearch)

      );

    });

  }, [countryOptions, countrySearch]);

  const normalizedPhoneNumber = phoneNumber.replace(/\D/g, "");

  /*

   * Reject obviously fake/test numbers before the country-specific

   * numbering-plan validation.

   *

   * Examples rejected for every country:

   * 1234567890

   * 9876543210

   * 1111111111

   * 2222222222

   * etc.

   */

  const isObviouslyInvalidNumber = (number: string) => {

    if (!number) {

      return true;

    }

    // Reject repeated digits such as 1111111111.

    if (/^(\d)\1+$/.test(number)) {

      return true;

    }

    // Reject the common ascending and descending test sequences.

    if (

      number === "1234567890" ||

      number === "0123456789" ||

      number === "9876543210"

    ) {

      return true;

    }

    const digits = number.split("").map(Number);

    const isAscendingSequence =

      digits.length > 1 &&

      digits.every(

        (digit, index) =>

          index === 0 ||

          digit === digits[index - 1] + 1

      );

    const isDescendingSequence =

      digits.length > 1 &&

      digits.every(

        (digit, index) =>

          index === 0 ||

          digit === digits[index - 1] - 1

      );

    return (

      isAscendingSequence ||

      isDescendingSequence

    );

  };

  /*

   * Country-specific validation for EVERY country.

   * The selected ISO country is passed directly to

   * libphonenumber-js, so length and numbering rules come

   * from the selected country's numbering plan.

   */

  /*

   * Validate the national number against the selected country.

   * Do not apply a fixed digit length here because countries have

   * different valid national-number lengths.

   */

  const isPhoneValid =

    Boolean(countryCode) &&

    Boolean(normalizedPhoneNumber) &&

    !isObviouslyInvalidNumber(normalizedPhoneNumber) &&

    isValidPhoneNumber(

      normalizedPhoneNumber,

      countryCode as CountryCode

    );

  const showPhoneError = phoneTouched && Boolean(countryCode) && !isPhoneValid;

  const isFormValid =

    isNameValid &&

    isEmailValid &&

    isCountryValid &&

    isPhoneValid &&

    isSubjectValid &&

    isMessageValid &&

    isPrivacyValid;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    setNameTouched(true);

    setEmailTouched(true);

    setCountryTouched(true);

    setPhoneTouched(true);

    setMessageTouched(true);

    if (!isFormValid) {

      if (!isNameValid) {

        document.getElementById("fullName")?.focus();

        return;

      }

      if (!isEmailValid) {

        document.getElementById("emailAddress")?.focus();

        return;

      }

      if (!isCountryValid) {

        document.getElementById("countryCodeSelect")?.focus();

        return;

      }

      if (!isPhoneValid) {

        document.getElementById("phoneNumber")?.focus();

        return;

      }

      if (!isSubjectValid) {

        document.getElementById("subjectButton")?.focus();

        return;

      }

      if (!isMessageValid) {

        document.getElementById("message")?.focus();

        return;

      }

      return;

    }

    try {

const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/email/contact-us`, {  method: "POST",

  headers: {

    "Content-Type": "application/json",

  },

  body: JSON.stringify({

    fullName: fullName.trim(),

    email: emailAddress.trim(),

    countryCode,

    phone: normalizedPhoneNumber,

    subject: selectedSubject,

    message: message.trim(),

    consent: privacyAccepted,

  }),

});

console.log("Contact Us HTTP status:", response.status);

let responseData: unknown = null;

try {

  responseData = await response.json();

} catch {

  responseData = null;

}

console.log("Contact Us response:", responseData);

if (!response.ok) {

  let errorMessage = "Unable to send your message.";

  if (

    responseData &&

    typeof responseData === "object" &&

    "message" in responseData

  ) {

    const responseMessage = responseData.message;

    if (typeof responseMessage === "string") {

      errorMessage = responseMessage;

    } else if (Array.isArray(responseMessage)) {

      errorMessage = responseMessage.join("\n");

    }

  }

  throw new Error(errorMessage);

}

setSubmitted(true);

    } catch (error) {

      const errorMessage =

        error instanceof Error

          ? error.message

          : "Unable to send your message.";

      window.alert(errorMessage);

    }

  };

  const handleSubjectSelect = (subject: string) => {

    setSelectedSubject(subject);

    setIsSubjectOpen(false);

  };

  return (

    <main className={styles.before}>

<div className={styles.frameParent}>

        <div className={styles.contactUsParent}>

          <h1 className={styles.contactUs}>

            Contact Us

          </h1>

          <div className={styles.shieldCheckParent}>

            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" >

              <path d="M24.4902 13.042V9.65513C24.4902 7.7418 24.4902 6.78512 24.0188 6.16096C23.5473 5.5368 22.4814 5.23378 20.3494 4.62774C18.8928 4.21369 17.6088 3.71486 16.5829 3.25946C15.1842 2.63857 14.4848 2.32812 13.9902 2.32812C13.4956 2.32812 12.7963 2.63857 11.3976 3.25946C10.3717 3.71486 9.0877 4.21368 7.63112 4.62774C5.49914 5.23378 4.43316 5.5368 3.9617 6.16096C3.49023 6.78512 3.49023 7.7418 3.49023 9.65513V13.042C3.49023 19.6047 9.3968 23.5422 12.3498 25.1008C13.0581 25.4746 13.4123 25.6615 13.9902 25.6615C14.5682 25.6615 14.9223 25.4746 15.6306 25.1008C18.5836 23.5422 24.4902 19.6047 24.4902 13.042Z" stroke="#2D4CC8" strokeWidth="2.5" strokeLinecap="round" />

              <path d="M10.0156 14.8888C10.0156 14.8888 11.0365 14.8888 12.0573 16.8333C12.0573 16.8333 15.2999 11.9722 18.1823 11" stroke="#2D4CC8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            </svg>

            <h2 className={styles.weNeverShare} style={{ margin: 0, padding: 0, fontSize: "inherit", fontWeight: "bold", fontFamily: "inherit", color: "inherit" }}>

              We Never Share Your Data

            </h2>

          </div>

        </div>

        <div className={styles.frameWrapper}>

          <form className={`${styles.frameGroup} ${submitted ? styles.successForm : ""}`} onSubmit={handleSubmit} noValidate>

            {submitted ? (

              <div className={styles.successMessage} role="status" aria-live="polite">

                <div className={styles.successMessageTitle}>Thank you for contacting us!</div>

                <div className={styles.successMessageText}>

                  We’ve received your message. Our team will review it and get back to you shortly.

                </div>

              </div>

            ) : (

              <>

            <div className={styles.frameContainer}>

              <div className={styles.frameDiv}>

                <div className={styles.frameWrapper2}>

                  <div className={styles.frameWrapper3}>

                    <div className={styles.fullNameParent}>

                      <label className={styles.fullName} htmlFor="fullName">

                        Full Name

                      </label>

                      <div className={`${styles.frameChild} ${fullName ? styles.fieldHasValue : ""} ${showNameError ? styles.fieldHasError : ""}`}>

                        <div className={styles.fieldContent}>

                          <span className={styles.fieldIconCircle}>

                            <Image className={styles.fieldIcon} src="/icons/user.svg" width={20} height={20} alt="" aria-hidden="true" />

                          </span>

                          <input id="fullName" className={styles.contactInput} type="text" name="fullName" autoComplete="name" spellCheck={false} autoCorrect="off" autoCapitalize="words" placeholder="Enter your name" value={fullName} onChange={(event) => setFullName(event.target.value.replace(/[^A-Za-z\s]/g, "").replace(/\s{2,}/g, " ").slice(0, 80))} onBlur={() => setNameTouched(true)} aria-invalid={showNameError} aria-describedby={showNameError ? "fullNameError" : undefined} inputMode="text" required />

                        </div>

                      </div>

                    </div>

                    {showNameError && (

                      <small id="fullNameError" className={styles.validationMessage} role="alert">

                        Enter your name

                      </small>

                    )}

                  </div>

                </div>

                <div className={`${styles.emailAddressParent} ${styles.emailFieldGroup}`}>

                  <label className={styles.emailAddress} htmlFor="emailAddress">

                    Email Address

                  </label>

                  <div className={`${styles.frameWrapper4} ${isEmailValid ? styles.fieldHasValue : ""} ${showEmailError ? styles.fieldHasError : ""}`}>

                    <div className={styles.frameWrapper5}>

                      <div className={styles.frameParent2}>

                        <span className={styles.fieldIconCircle}>

                          <Image className={styles.fieldIcon} src="/icons/mail.svg" width={20} height={20} alt="" aria-hidden="true" />

                        </span>

                        <input

                          id="emailAddress"

                          className={styles.contactInput}

                          type="email"

                          name="email"

                          autoComplete="email"

                          placeholder="Enter your email address"

                          value={emailAddress}

                          onChange={(event) => {

                            setEmailAddress(event.target.value.trim());

                            if (emailTouched) {

                              setEmailTouched(true);

                            }

                          }}

                          onBlur={() => setEmailTouched(true)}

                          aria-invalid={showEmailError}

                          aria-describedby={showEmailError ? "emailAddressError" : undefined}

                          required

                        />

                      </div>

                    </div>

                  </div>

                  {showEmailError && (

                    <small id="emailAddressError" className={styles.emailValidationMessage} role="alert">

                      {emailValidation.message}

                    </small>

                  )}

                </div>

                <div className={styles.emailAddressParent}>

                  <label className={styles.emailAddress} htmlFor="phoneNumber">

                    Phone Number

                  </label>

                  <div className={styles.frameParent3}>

                    <div className={`${styles.frameInner} ${styles.countrySelectField} ${countryCode ? styles.fieldHasValue : ""}`}>

                      <button

                        id="countryCodeSelect"

                        className={`${styles.countryCodeSelect} ${showCountryError ? styles.countryCodeSelectError : ""}`}

                        type="button"

                        aria-haspopup="listbox"

                        aria-expanded={isCountryOpen}

                        onClick={() => {

                          setIsCountryOpen((open) => {

                            const nextOpen = !open;

                            if (nextOpen) {

                              setCountrySearch("");

                            }

                            return nextOpen;

                          });

                        }}>

                        <output className={styles.countryCodeLabel}>

                          {selectedCountry ? (

                            <span className={styles.countrySelectedValue}>

                              <img

                                className={styles.countryFlag}

                                src={selectedCountry.flagUrl}

                                width={24}

                                height={18}

                                alt=""

                                aria-hidden="true"

                              />

                              <span>{selectedCountry.dialCode}</span>

                            </span>

                          ) : (

                            "Select"

                          )}

                        </output>

                        <Image className={`${styles.countryArrowIcon} ${isCountryOpen ? styles.countryArrowOpen : ""}`} src="/icons/arrowdown.svg" width={20} height={20} alt="" aria-hidden="true" />

                      </button>

                      {isCountryOpen && (

                        <div className={styles.countryCodeDropdown} role="listbox" aria-label="Select country code">

                          <div className={styles.countrySearchWrapper}>

                            <input className={styles.countrySearchInput} type="search" value={countrySearch} onChange={(event) => setCountrySearch(event.target.value)} placeholder="Search country" aria-label="Search country" autoFocus />

                          </div>

                          <div className={styles.countryOptionsList}>

                            {filteredCountryOptions.length > 0 ? (

                              filteredCountryOptions.map((country) => (

                                <button

                                  key={country.value}

                                  className={`${styles.countryCodeOption} ${countryCode === country.value ? styles.countryCodeOptionSelected : ""}`}

                                  type="button"

                                  role="option"

                                  aria-selected={countryCode === country.value}

                                  onClick={() => {

                                    setCountryCode(country.value);

                                    setCountryTouched(true);

                                    setPhoneNumber("");

                                    setPhoneTouched(false);

                                    setCountrySearch("");

                                    setIsCountryOpen(false);

                                  }}>

                                  <span className={styles.countryOptionMain}>

                                    <img

                                      className={styles.countryFlag}

                                      src={country.flagUrl}

                                      width={24}

                                      height={18}

                                      alt=""

                                      aria-hidden="true"

                                    />

                                    <span className={styles.countryOptionDialCode}>

                                      {country.dialCode}

                                    </span>

                                  </span>

                                </button>

                              ))

                            ) : (

                              <p className={styles.countryNoResults} style={{ margin: 0 }}>

                                No country found

                              </p>

                            )}

                          </div>

                        </div>

                      )}

                      <input type="hidden" name="countryCode" value={countryCode} />

                    </div>

                    <div className={`${styles.frameIcon} ${isPhoneValid ? styles.fieldHasValue : ""} ${showPhoneError ? styles.fieldHasError : ""}`}>

                      <span className={styles.phoneIconCircle}>

                        <Image className={styles.phoneIcon} src="/icons/call.svg" width={20} height={20} alt="" aria-hidden="true" />

                      </span>

                      <input

                        id="phoneNumber"

                        className={`${styles.contactInput} ${styles.phoneNumberInput}`}

                        type="tel"

                        name="phoneNumber"

                        autoComplete="tel-national"

                        placeholder="XXXXXXXXXX"

                        value={phoneNumber}

                        maxLength={phoneMaxLength}

                        inputMode="numeric"

                        onChange={(event) => {

                          const nextPhoneNumber = event.target.value.replace(/[^0-9]/g, "").slice(0, phoneMaxLength);

                          setPhoneNumber(nextPhoneNumber);

                          if (phoneTouched) {

                            setPhoneTouched(true);

                          }

                        }}

                        onBlur={() => setPhoneTouched(true)}

                        aria-invalid={showPhoneError}

                        aria-describedby={showPhoneError ? "phoneNumberError" : undefined}

                        required

                      />

                    </div>

                  </div>

                  {showCountryError && (

                    <small id="countryCodeError" className={styles.countryValidationMessage} role="alert">

                      Select a country code

                    </small>

                  )}

                  {showPhoneError && (

                    <small id="phoneNumberError" className={styles.phoneValidationMessage} role="alert">

                      Enter a valid phone number for the selected country

                    </small>

                  )}

                </div>

                <div className={`${styles.emailAddressParent} ${styles.subjectField}`}>

                  <label className={styles.emailAddress} id="subjectLabel">

                    Subject

                  </label>

                  <button id="subjectButton" className={`${styles.frameParent4} ${selectedSubject ? styles.subjectHasValue : ""}`} type="button" aria-labelledby="subjectLabel selectedSubjectValue" aria-haspopup="listbox" aria-expanded={isSubjectOpen} onClick={() => setIsSubjectOpen((open) => !open)}>

                    <span className={styles.subjectIconCircle}>

                      <Image className={styles.subjectIcon} src="/icons/message.svg" width={20} height={20} alt="" aria-hidden="true" />

                    </span>

                    <output id="selectedSubjectValue" className={`${styles.selectedSubjectText} ${selectedSubject ? styles.hasSubjectValue : ""}`}>

                      {selectedSubject || "Select a subject"}

                    </output>

                    <Image className={`${styles.arrowDown01Icon} ${isSubjectOpen ? styles.subjectArrowOpen : ""}`} src="/icons/arrowdown.svg" width={20} height={20} alt="" aria-hidden="true" />

                  </button>

                  {isSubjectOpen && (

                    <div className={styles.subjectDropdown} role="listbox" aria-labelledby="subjectLabel">

                      {subjectOptions.map((subject) => {

                        const isSelected = selectedSubject === subject;

                        return (

                          <button key={subject} className={`${styles.subjectOption} ${isSelected ? styles.subjectOptionSelected : ""}`} type="button" role="option" aria-selected={isSelected} onClick={() => handleSubjectSelect(subject)}>

                            <span className={styles.subjectRadio}>{isSelected && <Image className={styles.subjectRadioTick} src="/icons/bluetick.svg" width={17} height={17} alt="" aria-hidden="true" />}</span>

                            <output className={styles.subjectOptionText}>{subject}</output>

                          </button>

                        );

                      })}

                    </div>

                  )}

                  <input type="hidden" name="subject" value={selectedSubject} />

                </div>

                <div className={styles.frameParent5}>

                  <div className={styles.frameWrapper7}>

                    <div className={styles.messageWrapper}>

                      <label className={styles.message} htmlFor="message">

                        Message

                      </label>

                      <span className={styles.messageCharacterCount} aria-live="polite">

                        {250 - message.length}/250 

                      </span>

                    </div>

                  </div>

                  <div className={`${styles.frameParent6} ${showMessageError ? styles.messageFieldError : ""}`}>

                    <div className={styles.frameWrapper8}>

                      <div className={styles.typeYourMessageHereWrapper}>

                        <textarea

                          id="message"

                          className={styles.typeYourMessage}

                          name="message"

                          placeholder="Type your message here....."

                          rows={6}

                          maxLength={250}

                          value={message}

                          onChange={(event) => setMessage(event.target.value.slice(0, 250))}

                          onBlur={() => setMessageTouched(true)}

                          aria-invalid={showMessageError}

                          aria-describedby={showMessageError ? "messageError" : undefined}

                          required

                        />

                      </div>

                    </div>

                  </div>

                  {showMessageError && (

                    <small id="messageError" className={styles.messageValidationMessage} role="alert">

                      Enter a message

                    </small>

                  )}

                  {isMessageAtLimit && (

                    <small className={styles.messageLimitMessage} role="status" aria-live="polite">

                      Maximum character limit reached.

                    </small>

                  )}

                </div>

              </div>

              <div className={styles.frameParent7}>

                <span className={styles.checkboxControl}>

                  <input

                    className={styles.frameChild2}

                    type="checkbox"

                    name="privacyConfirmation"

                    checked={privacyAccepted}

                    onChange={(event) => setPrivacyAccepted(event.target.checked)}

                    aria-label="I confirm my information and agree to the Privacy Policy"

                    required

                  />

                  <span className={styles.checkboxVisual} aria-hidden="true">

                    <Image className={styles.checkboxTickIcon} src="/icons/tick.svg" width={17} height={17} alt="" aria-hidden="true" />

                  </span>

                </span>

                <p className={styles.iConfirmMyContainer} style={{ margin: 0 }}>

                  <small className={styles.iConfirmMy} style={{ fontSize: "inherit" }}>

                    I confirm my information and agree to the{" "}

                  </small>

                  <button

                    type="button"

                    className={styles.privacyPolicy}

                    onClick={() => setIsPrivacyPolicyOpen(true)}

                  >

                    Privacy Policy

                  </button>

                </p>

              </div>

            </div>

            {isPrivacyPolicyOpen && (

              <div

                className={styles.privacyOverlay}

                role="presentation"

                onMouseDown={(event) => {

                  if (event.target === event.currentTarget) {

                    setIsPrivacyPolicyOpen(false);

                  }

                }}

              >

                <div

                  className={styles.privacyDialog}

                  role="dialog"

                  aria-modal="true"

                  aria-labelledby="contact-privacy-title"

                  aria-describedby="contact-privacy-description"

                >

                  <div className={styles.privacyHeader}>

                    <div className={styles.privacyHeading}>

                      <h2 id="contact-privacy-title" className={styles.privacyTitle}>

                        Privacy Policy

                      </h2>

                      <p id="contact-privacy-description" className={styles.privacyDescription}>

                        Please review the privacy information below before continuing.

                      </p>

                    </div>

                    <button

                      type="button"

                      className={styles.privacyClose}

                      onClick={() => setIsPrivacyPolicyOpen(false)}

                      aria-label="Close privacy policy"

                    >

                      <span aria-hidden="true">×</span>

                    </button>

                  </div>

                  <div className={styles.privacyContent}>

                    <h3>PRIVACY POLICY ACCEPTANCE</h3>

                    <p>

                      By accessing or using the Platform, I hereby provide my explicit,

                      informed, and unconditional consent to{" "}

                      <strong>PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED</strong> for the following:

                    </p>

                    <h4>1. ACKNOWLEDGMENT</h4>

                    <p>

                      I have carefully read, fully understood, and voluntarily agree to be

                      bound by the Terms and Conditions of{" "}

                      <strong>PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED</strong>.

                    </p>

                    <h4>2. DATA COLLECTION AND USAGE CONSENT</h4>

                    <p>

                      I confirm that I have read and understood the Privacy Policy and agree

                      to its terms.

                    </p>

                    <ul>

                      <li>Identification details</li>

                      <li>Contact information</li>

                      <li>Usage data and activity logs</li>

                      <li>Device and technical data</li>

                    </ul>

                    <h4>3. DATA COLLECTION AND USAGE CONSENT</h4>

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

                    <h4>4. DATA SECURITY DISCLAIMER</h4>

                    <ul>

                      <li>The Company implements reasonable technical and organizational safeguards</li>

                      <li>However, I acknowledge that no digital system is completely secure</li>

                      <li>

                        The Company shall not be liable for data breaches resulting from

                        sophisticated cyber-attacks beyond reasonable control

                      </li>

                    </ul>

                    <h4>5. PAYMENT AND FRAUD PREVENTION DISCLAIMER</h4>

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

                    <h4>6. USER RIGHTS</h4>

                    <p>Subject to applicable laws, I understand I may:</p>

                    <ul>

                      <li>Access my data</li>

                      <li>Request correction or deletion</li>

                      <li>Withdraw consent where permissible</li>

                    </ul>

                    <h4>7. THIRD-PARTY SERVICES</h4>

                    <p>

                      I acknowledge that certain services may involve third-party providers,

                      and the Company is not responsible for their independent practices.

                    </p>

                    <h4>8. CONSENT VALIDITY</h4>

                    <p>This consent:</p>

                    <ul>

                      <li>Is legally binding</li>

                      <li>Remains valid until withdrawn (subject to legal obligations)</li>

                      <li>Applies to all Platform interactions</li>

                    </ul>

                    <p><strong>MANDATORY CONSENT ACTIONS (IMPLEMENTATION):</strong></p>

                    <p>I agree to the Privacy Policy</p>

                    <p>I consent to data processing as described</p>

                    <p><strong>OPTIONAL CONSENTS:</strong></p>

                    <p>I agree to receive marketing communications</p>

                    <p>I accept use of cookies and tracking technologies</p>

                    <p><strong>COMPANY DETAILS: PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED</strong></p>

                    <p className={styles.privacyLastLine}>

                      <strong>Email: contact@prgeeq.com</strong>

                    </p>

                  </div>

                  <div className={styles.privacyFooter}>

                    <button

                      type="button"

                      className={styles.privacyAccept}

                      onClick={() => {

                        setPrivacyAccepted(true);

                        setIsPrivacyPolicyOpen(false);

                      }}

                    >

                      Close &amp; Accept

                    </button>

                  </div>

                </div>

              </div>

            )}

            <button

              className={styles.frameWrapper9}

              type="submit"

              disabled={!isFormValid || !hasMessageContent || submitted}

              aria-disabled={!isFormValid || !hasMessageContent || submitted}

            >

              <div className={styles.sendParent}>

                <Image className={styles.sendIcon} src="/icons/send.svg" width={24} height={24} alt="" aria-hidden="true" />

                <strong className={styles.sendMessage}>Send Message</strong>

              </div>

            </button>

              </>

            )}

          </form>

        </div>

      </div>

    </main>

  );

};

export default ContactUs;
