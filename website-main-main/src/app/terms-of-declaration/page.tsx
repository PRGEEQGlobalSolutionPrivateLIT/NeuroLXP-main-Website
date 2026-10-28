"use client";

import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import styles from "./TermsAcceptanceDeclaration.module.css";

export default function TermsAcceptanceDeclaration() {
  return (
    <>
      <Header />

      <div className={styles["tad-root"]}>
        <main className={styles["tad-main"]}>
          <div className={styles["tad-wrapper"]}>
            <section className={styles["tad-section"]}>
              <h1 className={styles["tad-doc-title"]}>
                TERMS ACCEPTANCE DECLARATION
              </h1>

              <p className={styles["tad-doc-lead"]}>
                By proceeding to access or use the Platform, I hereby declare
                and confirm that:
              </p>

              <div className={styles["tad-declare-list"]}>
                <div className={styles["tad-declare-item"]}>
                  <div
                    className={styles["tad-declare-index"]}
                    aria-hidden="true"
                  >
                    1.
                  </div>

                  <div className={styles["tad-declare-body"]}>
                    <p>
                      I have carefully read, fully understood, and voluntarily
                      agree to be bound by the Terms and Conditions of{" "}
                      <strong>
                        PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED
                      </strong>
                      .
                    </p>
                  </div>
                </div>

                <div className={styles["tad-declare-item"]}>
                  <div
                    className={styles["tad-declare-index"]}
                    aria-hidden="true"
                  >
                    2.
                  </div>

                  <div className={styles["tad-declare-body"]}>
                    <p>
                      I acknowledge that this acceptance constitutes a{" "}
                      <strong>legally binding agreement</strong> enforceable
                      under applicable laws.
                    </p>
                  </div>
                </div>

                <div className={styles["tad-declare-item"]}>
                  <div
                    className={styles["tad-declare-index"]}
                    aria-hidden="true"
                  >
                    3.
                  </div>

                  <div className={styles["tad-declare-body"]}>
                    <p>
                      I agree to comply with all obligations, restrictions, and
                      responsibilities outlined in the Terms.
                    </p>
                  </div>
                </div>

                <div className={styles["tad-declare-item"]}>
                  <div
                    className={styles["tad-declare-index"]}
                    aria-hidden="true"
                  >
                    4.
                  </div>

                  <div className={styles["tad-declare-body"]}>
                    <p>I understand that:</p>

                    <ul className={styles["tad-sub-list"]}>
                      <li>
                        Any violation may result in{" "}
                        <strong>suspension or termination</strong>
                      </li>

                      <li>
                        Legal action may be initiated where necessary
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles["tad-declare-item"]}>
                  <div
                    className={styles["tad-declare-index"]}
                    aria-hidden="true"
                  >
                    5.
                  </div>

                  <div className={styles["tad-declare-body"]}>
                    <p>Payment Awareness and Risk Acknowledgment</p>

                    <ul className={styles["tad-sub-list"]}>
                      <li>
                        I understand that the Company does not request payments
                        through <strong>unauthorized channels</strong>
                      </li>

                      <li>
                        I agree to verify all payment instructions through{" "}
                        <strong>official Company communication</strong> before
                        making any payment
                      </li>

                      <li>
                        I accept <strong>full responsibility</strong> for any
                        payments made without such verification
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles["tad-declare-item"]}>
                  <div
                    className={styles["tad-declare-index"]}
                    aria-hidden="true"
                  >
                    6.
                  </div>

                  <div className={styles["tad-declare-body"]}>
                    <p>Cyber Risk Acknowledgment:</p>

                    <ul className={styles["tad-sub-list"]}>
                      <li>
                        I acknowledge risks associated with online platforms
                        including{" "}
                        <strong>hacking, phishing, and fraud</strong>
                      </li>

                      <li>
                        I agree that the Company shall{" "}
                        <strong>not be liable</strong> for losses arising from
                        unauthorized transactions due to such events
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles["tad-declare-item"]}>
                  <div
                    className={styles["tad-declare-index"]}
                    aria-hidden="true"
                  >
                    7.
                  </div>

                  <div className={styles["tad-declare-body"]}>
                    <p>
                      I consent to electronic record-keeping of this acceptance,
                      including timestamp, IP address, and system logs, as valid
                      legal evidence.
                    </p>
                  </div>
                </div>

                <div className={styles["tad-mandatory-label"]}>
                  <strong>
                    MANDATORY USER ACTION (IMPLEMENTATION REQUIREMENT)
                  </strong>
                </div>

                <span className={styles["tad-check-text"]}>
                  I have read and agree to the Terms and Conditions
                </span>

                <p className={styles["tad-validity-note"]}>
                  Acceptance shall not be valid unless explicitly confirmed via
                  the above mechanism.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}