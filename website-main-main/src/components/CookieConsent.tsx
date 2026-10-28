
"use client";

import { useEffect, useState } from "react";
import "./CookieConsent.css";


type CookiePreference = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem("cookie-consent");

    if (!savedPreference) {
      setVisible(true);
    }
  }, []);

  const savePreference = (preference: CookiePreference) => {
    localStorage.setItem("cookie-consent", JSON.stringify(preference));

    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", {
        detail: preference,
      })
    );

    setVisible(false);
  };

  const acceptAll = () => {
    savePreference({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const necessaryOnly = () => {
    savePreference({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-overlay"
      role="presentation"
    >
      <section
        className="cookie-banner"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-description"
      >
        <h2 id="cookie-title">We Value Your Privacy</h2>

        <p id="cookie-description">
          We use cookies to keep our website working properly,
          understand website usage, and improve your experience.
          You can accept all cookies, allow only necessary cookies,
          or reject optional cookies.
        </p>

        <div className="cookie-actions">
          <button
            type="button"
            className="cookie-button cookie-accept"
            onClick={acceptAll}
          >
            Accept All
          </button>

          <button
            type="button"
            className="cookie-button cookie-necessary"
            onClick={necessaryOnly}
          >
            Only Necessary
          </button>

          <button
            type="button"
            className="cookie-button cookie-reject"
            onClick={necessaryOnly}
          >
            Reject All
          </button>
        </div>

        <a className="cookie-policy-link" href="/privacy-policy">
          Privacy Policy
        </a>
      </section>
    </div>
  );
}
