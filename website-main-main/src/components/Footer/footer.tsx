import Image from "next/image";
import Link from "next/link";
import {
  footerAboutLinks,
  footerQuickLinks,
  footerNeuroLxpLinks,
} from "../../data/navigation";
import {
  SparkleIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "../icons/Icons";
import ScrollToTopButton from "../ScrollToTopButton";
import FooterAboutLink from "./footerAboutLink";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer
      className={styles["nlxp-footer"]}
      style={{
        display: "block",
        visibility: "visible",
        opacity: 1,
        width: "100%",
        position: "relative",
        zIndex: 10000,
        fontFamily: '"Segoe UI"',
      }}
    >
      <ScrollToTopButton />

      <div className={styles["nlxp-footer-inner"]}>
        <div className={styles["nlxp-footer-top"]}>
          <div className={styles["nlxp-footer-brand"]}>
            <div className={styles["nlxp-footer-brand-top"]}>
              <Image
                src="/images/logo_01_synapse_spark.webp"
                alt="NeuroLXP"
                width={299}
                height={112}
                className={styles["nlxp-footer-logo"]}
              />

              <div className={styles["nlxp-footer-tagline"]}>
                <span className={styles["nlxp-footer-tagline-text"]}>
                  One Platform
                </span>

                <SparkleIcon className={styles["nlxp-footer-sparkle"]} />

                <span className={styles["nlxp-footer-tagline-text"]}>
                  Endless Learning
                </span>

                <SparkleIcon className={styles["nlxp-footer-sparkle"]} />

                <span className={styles["nlxp-footer-tagline-text"]}>
                  Limitless Growth
                </span>
              </div>
            </div>

            <div className={styles["nlxp-footer-company"]}>
              <p className={styles["nlxp-footer-company-name"]}>
                Prgeeq Global Solutions Private Limited
              </p>

              <p className={styles["nlxp-footer-address"]}>
                Prestige Atlanta, 10/12, 80 Feet Rd, 1A Block,
                <br />
                Koramangala, Bengaluru, - 560034
                <br />
                Karnataka, India.
              </p>
            </div>
          </div>

          <div className={styles["nlxp-footer-right"]}>
            <div className={styles["nlxp-footer-columns"]}>
              <div className={styles["nlxp-footer-column"]}>
                <h3 className={styles["nlxp-footer-heading"]}>
                  About us
                </h3>

                <ul className={styles["nlxp-footer-list"]}>
                  {footerAboutLinks.map((link) => (
                    <li key={link.label}>
                      {link.label === "Our Team" ? (
                        <Link
                          href="/our-Team"
                          className={styles["nlxp-footer-link"]}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <FooterAboutLink link={link} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles["nlxp-footer-column"]}>
                <h3 className={styles["nlxp-footer-heading"]}>
                  Quick Links
                </h3>

                <ul className={styles["nlxp-footer-list"]}>
                  {footerQuickLinks.map((link) => {
                    const normalizedLabel = link.label
                      .trim()
                      .toLowerCase();

                    const customHref =
                      normalizedLabel === "privacy policy"
                        ? "/privacy-policy"
                        : normalizedLabel === "terms and conditions" ||
                            normalizedLabel === "terms & conditions" ||
                            normalizedLabel === "terms of declaration"
                          ? "/terms-of-declaration"
                          : normalizedLabel === "terms of use" ||
                              normalizedLabel === "terms-of-use"
                            ? "/terms-of-use"
                            : link.href;

                    const cardNames = ["ourstory", "ourmission", "ourvision"];
                    const isCardLink =
                      cardNames.includes(normalizedLabel.replace(/[^a-z0-9]/g, "")) ||
                      cardNames.includes((customHref.split("#")[1] ?? "").toLowerCase().replace(/[^a-z0-9]/g, ""));

                    return (
                      <li key={link.label}>
                        {isCardLink ? (
                          <FooterAboutLink link={{ ...link, href: customHref }} />
                        ) : (
                          <Link
                            href={customHref}
                            className={styles["nlxp-footer-link"]}
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className={styles["nlxp-footer-column"]}>
                <h3 className={styles["nlxp-footer-heading"]}>
                  NeuroLXP
                  <sup className={styles["nlxp-footer-heading-tm"]}>
                    TM
                  </sup>
                </h3>

                <ul className={styles["nlxp-footer-list"]}>
                  {footerNeuroLxpLinks.map((link) => {
                    const normalizedLabel = link.label
                      .trim()
                      .toLowerCase();

                    const isUniversityCollege =
                      normalizedLabel === "our customers" ||
                      normalizedLabel === "university and college";

                    const isPersonalizedLearning =
                      normalizedLabel === "smart learning paths" ||
                      normalizedLabel === "personalized learning path";

                    const isContentManagement =
                      normalizedLabel === "smart content creation" ||
                      normalizedLabel === "content management";

                    const customHref = isUniversityCollege
                      ? "/university"
                      : isPersonalizedLearning
                        ? "/personalized-learning-paths"
                        : isContentManagement
                          ? "/content_managment"
                          : null;

                    const displayLabel = isUniversityCollege
                      ? "University and College"
                      : isPersonalizedLearning
                        ? "Personalized Learning"
                        : isContentManagement
                          ? "Content Management"
                          : link.label;

                    return (
                      <li key={link.label}>
                        {customHref ? (
                          <Link
                            href={customHref}
                            className={styles["nlxp-footer-link"]}
                          >
                            {displayLabel}
                          </Link>
                        ) : (
                          <FooterAboutLink link={link} />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className={styles["nlxp-footer-social"]}>
              <a
                href="mailto:info@neurolxp.com"
                className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--mail"]}`}
                aria-label="Email"
              >
                <MailIcon className={styles["nlxp-footer-social-svg"]} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--facebook"]}`}
                aria-label="Facebook"
              >
                <FacebookIcon className={styles["nlxp-footer-social-svg"]} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--instagram"]}`}
                aria-label="Instagram"
              >
                <InstagramIcon className={styles["nlxp-footer-social-svg"]} />
              </a>

              <a
                href="https://www.youtube.com/@prgeeqglobalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--youtube"]}`}
                aria-label="YouTube"
              >
                <YoutubeIcon className={styles["nlxp-footer-social-svg"]} />
              </a>

              <a
                href="https://www.linkedin.com/company/prgeeq-global-solutions-private-limited/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles["nlxp-footer-social-icon"]} ${styles["nlxp-footer-social-icon--linkedin"]}`}
                aria-label="LinkedIn"
              >
                <LinkedinIcon className={styles["nlxp-footer-social-svg"]} />
              </a>
            </div>
          </div>
        </div>

        <p className={styles["nlxp-footer-copyright"]}>
          Copyright @2026 | Prgeeq Global Solutions Pvt Ltd | All right reserved
        </p>
      </div>
    </footer>
  );
}
