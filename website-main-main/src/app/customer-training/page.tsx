import type { NextPage } from "next";
import Image from "next/image";
import styles from "./customer-training.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";
const CustomerTraining: NextPage = () => {
  return (
    <>
      <Header />
      <style>{`
.customerTrainingFix_page .customerTrainingFix_heading {
  min-width: 0;
  max-width: 100%;
  height: auto;
  margin: 0;
  font-size: 36px;
  line-height: 1.3;
  font-weight: 700;
  white-space: normal;
  overflow-wrap: anywhere;
}
.customerTrainingFix_page .customerTrainingFix_accent { color: #2d4cc8; }
.customerTrainingFix_page .customerTrainingFix_heading span { font-size: inherit; line-height: inherit; }
.customerTrainingFix_page .customerTrainingFix_copy,
.customerTrainingFix_page .customerTrainingFix_cardCopy { min-width: 0; }
.customerTrainingFix_page .customerTrainingFix_button { max-width: 100%; white-space: normal; }
@media (max-width: 767px) {
  .customerTrainingFix_page {
    box-sizing: border-box;
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    height: auto;
    min-height: 0;
    padding: 0 16px 48px;
  }
  .customerTrainingFix_page *, .customerTrainingFix_page *::before, .customerTrainingFix_page *::after { box-sizing: border-box; }
  .customerTrainingFix_page .customerTrainingFix_heading { font-size: 24px; line-height: 1.35; text-align: center; }
  .customerTrainingFix_page .customerTrainingFix_heading br { display: none; }
  .customerTrainingFix_page .customerTrainingFix_breadcrumb {
    position: relative;
    inset: auto;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    min-height: 24px;
    gap: 8px;
    margin: 24px 0;
    padding: 0;
  }
  .customerTrainingFix_page .customerTrainingFix_breadcrumb > * { min-width: 0; max-width: 100%; }
  .customerTrainingFix_page .customerTrainingFix_breadcrumb img { flex: 0 0 16px; }
  .customerTrainingFix_page .customerTrainingFix_sectionStack,
  .customerTrainingFix_page .customerTrainingFix_section,
  .customerTrainingFix_page .customerTrainingFix_intro,
  .customerTrainingFix_page .customerTrainingFix_flow,
  .customerTrainingFix_page .customerTrainingFix_columns,
  .customerTrainingFix_page .customerTrainingFix_cards,
  .customerTrainingFix_page .customerTrainingFix_benefits,
  .customerTrainingFix_page .customerTrainingFix_copy,
  .customerTrainingFix_page .customerTrainingFix_cta {
    position: relative;
    inset: auto;
    transform: none;
    float: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    height: auto;
    min-height: 0;
    margin: 0;
    gap: 24px;
  }
  .customerTrainingFix_page .customerTrainingFix_flow,
  .customerTrainingFix_page .customerTrainingFix_copy { padding: 0; gap: 16px; text-align: center; }
  .customerTrainingFix_page .customerTrainingFix_sectionStack { gap: 48px; padding: 0; }
  .customerTrainingFix_page .customerTrainingFix_section { margin-top: 48px; }
  .customerTrainingFix_page .customerTrainingFix_intro { padding: 0; gap: 16px; text-align: center; }
  .customerTrainingFix_page .customerTrainingFix_hero {
    position: relative;
    inset: auto;
    transform: none;
    isolation: isolate;
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 0;
    margin: 0;
    padding: 24px 16px;
  }
  .customerTrainingFix_page .customerTrainingFix_heroImage {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    border-radius: inherit;
  }
  .customerTrainingFix_page .customerTrainingFix_buttonWrap {
    position: relative;
    inset: auto;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }
  .customerTrainingFix_page .customerTrainingFix_badge,
  .customerTrainingFix_page .customerTrainingFix_button {
    position: relative;
    inset: auto;
    align-self: center;
    width: fit-content;
    max-width: 100%;
    min-width: 0;
    height: auto;
    white-space: normal;
    overflow-wrap: anywhere;
    text-align: center;
  }
  .customerTrainingFix_page .customerTrainingFix_divider { display: block; width: 100%; height: auto; margin: 24px 0; }
  .customerTrainingFix_page .customerTrainingFix_divider + .customerTrainingFix_section { margin-top: 24px; }
  .customerTrainingFix_page .customerTrainingFix_decoration { max-width: 100%; pointer-events: none; }
  .customerTrainingFix_page .customerTrainingFix_card {
    position: relative;
    inset: auto;
    transform: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    height: auto;
    min-height: 0;
    margin: 0;
    padding: 20px 16px;
    gap: 16px;
  }
  .customerTrainingFix_page .customerTrainingFix_cardIcon {
    position: relative;
    inset: auto;
    transform: none;
    width: 56px;
    height: 56px;
    flex: 0 0 56px;
    margin: 0;
  }
  .customerTrainingFix_page .customerTrainingFix_cardCopy {
    position: relative;
    inset: auto;
    transform: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: auto;
    gap: 12px;
    text-align: center;
  }
  .customerTrainingFix_page .customerTrainingFix_cardCopy > *,
  .customerTrainingFix_page .customerTrainingFix_intro > *,
  .customerTrainingFix_page .customerTrainingFix_copy > * {
    max-width: 100%;
    min-width: 0;
    height: auto;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .customerTrainingFix_page .customerTrainingFix_benefit {
    position: relative;
    inset: auto;
    transform: none;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 0;
    margin: 0;
    gap: 16px;
  }
  .customerTrainingFix_page .customerTrainingFix_benefitIcon { position: relative; inset: auto; flex-shrink: 0; }
  .customerTrainingFix_page .customerTrainingFix_benefit > :last-child {
    min-width: 0;
    max-width: 100%;
    height: auto;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .customerTrainingFix_page .customerTrainingFix_ctaImage {
    position: relative;
    inset: auto;
    transform: none;
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0;
    object-fit: contain;
  }
}
      
.customerTrainingFix_page .customerTrainingFix_challengesHeading {
  width: 100%;
  margin: 0 0 20px;
  text-align: center;
  font-size: 36px;
  line-height: 1.3;
  font-weight: 700;
  color: #31344b;
}
.customerTrainingFix_page h3[class] { margin-block: 0; }
`}</style>
      <main className={`${styles.customerTraining} customerTrainingFix_page`}>
      <nav className={`${styles.frameDiv} customerTrainingFix_breadcrumb`} aria-label="Breadcrumb">
        <div className={styles.resourcesWrapper}>
          <div className={styles.useCases}>Resources</div>
        </div>
        <Image className={styles.breadcrumbArrow} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
        <div className={styles.resourcesWrapper}>
          <div className={styles.useCases}>Use cases</div>
        </div>
        <Image className={styles.breadcrumbArrow} src="/icons/arrow-right-double.svg" width={16} height={16} sizes="16px" alt="" aria-hidden="true" />
        <b className={styles.useCases}>Customer Training</b>
      </nav>
      <div className={`${styles.frameParent2} customerTrainingFix_sectionStack`}>
        <section className={`${styles.vectorParent} customerTrainingFix_hero`} aria-labelledby="customer-training-title">
          <Image className={`${styles.polygonIcon} customerTrainingFix_heroImage`} src="/images/customer-training-hero.webp" width={1280} height={450} sizes="(max-width: 1280px) 100vw, 1280px" alt="" aria-hidden="true" priority />
          <div className={`${styles.frameWrapper} customerTrainingFix_flow`}>
            <div className={`${styles.frameParent3} customerTrainingFix_flow`}>
              <div className={`${styles.frameParent4} customerTrainingFix_flow`}>
                <div className={`${styles.frameIcon} customerTrainingFix_badge`}>Customer Training</div>
                <div className={`${styles.turnProductKnowledgeIntoCuParent} customerTrainingFix_copy`}>
                  <h1 id="customer-training-title" className={`${styles.turnProductKnowledgeContainer} customerTrainingFix_heading`}>
                    <span className={styles.turnProductKnowledge}>Turn Product Knowledge into </span>
                    <span className={styles.customerSuccess}>Customer Success</span>
                  </h1>
                  <p className={styles.neurolxpDeliversScalable}>NeuroLXP delivers scalable customer training that drives product adoption, engagement, and success.</p>
                </div>
              </div>
              <div className={`${styles.frameWrapper2} customerTrainingFix_buttonWrap`}>
                <BookDemoTrigger className={`${styles.frameChild2} customerTrainingFix_button`}>
                  Book a Demo
                </BookDemoTrigger>
              </div>
            </div>
          </div>
        </section>
        <div className={`${styles.frameParent5} customerTrainingFix_intro`}>
          <div className={`${styles.frameWrapper3} customerTrainingFix_flow`}>
            <div className={`${styles.empowerCustomersDriveAdoptWrapper} customerTrainingFix_flow`}>
              <h2 className={`${styles.empowerCustomersDrive} customerTrainingFix_heading`}>Empower Customers! Drive Adoption! Build <span className="customerTrainingFix_accent">Success!</span></h2>
            </div>
          </div>
          <div className={styles.neurolxpDeliversSelfService}>NeuroLXP delivers self-service customer learning with courses, tutorials, and analytics.</div>
        </div>
      </div>
      <Image className={`${styles.customerTrainingChild} customerTrainingFix_divider`} src="/images/customer-training-divider.svg" width={1440} height={5} sizes="100vw" alt="" aria-hidden="true" />
      <div className={`${styles.image20Parent} customerTrainingFix_section`}>
        <div className={`${styles.image20} customerTrainingFix_decoration`} />
        <div className={`${styles.frameParent6} customerTrainingFix_columns`}>
          <div className={`${styles.frameWrapper4} customerTrainingFix_flow`}>
            <div className={`${styles.frameWrapper5} customerTrainingFix_flow`}>
              <div className={`${styles.frameParent7} customerTrainingFix_flow`}>
                <div className={`${styles.frameParent8} customerTrainingFix_flow`}>
                  <div className={`${styles.frameIcon} customerTrainingFix_badge`}>Customer Training</div>
                  <div className={`${styles.turnProductKnowledgeIntoCuParent} customerTrainingFix_copy`}>
                    <h2 className={`${styles.turnProductKnowledgeContainer} customerTrainingFix_heading`}><span className={styles.turnProductKnowledge}>{`Turn Product Knowledge into `}</span>
                      <span className={styles.customerSuccess}>Customer Success</span></h2>
                    <div className={styles.neurolxpDeliversScalable}>NeuroLXP delivers scalable customer training that drives product adoption, engagement, and success.</div>
                  </div>
                </div>
                <div className={styles.frameChild4} />
              </div>
            </div>
          </div>
          <div className={`${styles.frameParent9} customerTrainingFix_cards`}>
            <h2 className="customerTrainingFix_challengesHeading">Challenges</h2>
            <div className={`${styles.frameParent10} customerTrainingFix_columns`}>
              <div className={`${styles.frameParent11} customerTrainingFix_cards`}>
                <div className={`${styles.frameParent12} customerTrainingFix_card`}>
                  <div className={`${styles.frameChild5} customerTrainingFix_cardIcon`} />
                  <div className={`${styles.frameParent13} customerTrainingFix_cardCopy`}>
                    <div className={`${styles.challenge1Parent} customerTrainingFix_copy`}>
                      <h3 className={styles.challenge1}>1</h3>
                      <b className={styles.simplifyProducts}>Simplify Products</b>
                    </div>
                    <div className={styles.helpCustomersLearn}>Help customers learn products and features faster.</div>
                  </div>
                </div>
                <div className={`${styles.frameParent14} customerTrainingFix_card`}>
                  <div className={`${styles.frameChild6} customerTrainingFix_cardIcon`} />
                  <div className={`${styles.frameParent13} customerTrainingFix_cardCopy`}>
                    <div className={`${styles.challenge1Parent} customerTrainingFix_copy`}>
                      <h3 className={styles.challenge1}>3</h3>
                      <b className={styles.simplifyProducts}>
                        Drive Adoption
                        <br />
                      </b>
                    </div>
                    <div className={styles.helpCustomersLearn}>Guide customers to discover more product value.</div>
                  </div>
                </div>
              </div>
              <div className={`${styles.frameParent16} customerTrainingFix_cards`}>
                <div className={`${styles.frameParent12} customerTrainingFix_card`}>
                  <div className={`${styles.frameChild7} customerTrainingFix_cardIcon`} />
                  <div className={`${styles.frameParent13} customerTrainingFix_cardCopy`}>
                    <div className={`${styles.challenge1Parent} customerTrainingFix_copy`}>
                      <h3 className={styles.challenge1}>2</h3>
                      <b className={styles.simplifyProducts}>
                        Reduce Support
                        <br />
                      </b>
                    </div>
                    <div className={styles.helpCustomersLearn}>Enable self-service learning and fewer support requests.</div>
                  </div>
                </div>
                <div className={`${styles.frameParent19} customerTrainingFix_card`}>
                  <div className={`${styles.frameChild8} customerTrainingFix_cardIcon`} />
                  <div className={`${styles.frameParent13} customerTrainingFix_cardCopy`}>
                    <div className={`${styles.challenge1Parent} customerTrainingFix_copy`}>
                      <h3 className={styles.challenge1}>4</h3>
                      <b className={styles.simplifyProducts}>
                        Scale Globally
                        <br />
                      </b>
                    </div>
                    <div className={styles.helpCustomersLearn}>Deliver consistent training to customers worldwide.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.frameParent21} customerTrainingFix_card`}>
              <div className={`${styles.frameChild9} customerTrainingFix_cardIcon`} />
              <div className={`${styles.frameParent13} customerTrainingFix_cardCopy`}>
                <div className={`${styles.challenge1Parent} customerTrainingFix_copy`}>
                  <h3 className={styles.challenge1}>5</h3>
                  <b className={styles.simplifyProducts}>
                    Track Outcomes
                    <br />
                  </b>
                </div>
                <div className={styles.helpCustomersLearn}>Measure progress, completion, and learning performance.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.frameParent23} customerTrainingFix_section customerTrainingFix_columns`}>
        <div className={`${styles.frameParent24} customerTrainingFix_flow`}>
          <div className={`${styles.frameParent25} customerTrainingFix_flow`}>
            <div className={`${styles.benefitsBadge} customerTrainingFix_badge`}>Benefits</div>
            <h2 className={`${styles.benefitsOfCustomer} customerTrainingFix_heading`}>Benefits of Customer Training with <span className="customerTrainingFix_accent">NeuroLXP</span></h2>
          </div>
          <p className={styles.improveProductAdoption}>Improve product adoption, reduce support needs, and drive customer success.</p>
        </div>
        <div className={`${styles.frameParent26} customerTrainingFix_benefits`}>
          <div className={`${styles.frameParent27} customerTrainingFix_benefit`}>
            <div className={`${styles.benefitIconOuter} customerTrainingFix_benefitIcon`}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/chart-upblue.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.increaseProductUsage}>Increase product usage</div>
          </div>
          <div className={`${styles.frameParent28} customerTrainingFix_benefit`}>
            <div className={`${styles.benefitIconOuter} customerTrainingFix_benefitIcon`}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/headset-pink.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.lowerSupportRequests}>Lower support requests</div>
          </div>
          <div className={`${styles.frameParent28} customerTrainingFix_benefit`}>
            <div className={`${styles.benefitIconOuter} customerTrainingFix_benefitIcon`}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/scale.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.trainAtScale}>Train at scale</div>
          </div>
          <div className={`${styles.frameParent28} customerTrainingFix_benefit`}>
            <div className={`${styles.benefitIconOuter} customerTrainingFix_benefitIcon`}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/idea-01orange.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.unlockProductValue}>Unlock product value</div>
          </div>
          <div className={`${styles.frameParent28} customerTrainingFix_benefit`}>
            <div className={`${styles.benefitIconOuter} customerTrainingFix_benefitIcon`}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/chart-column-big.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.measureLearning}>Measure learning</div>
          </div>
          <div className={`${styles.frameParent28} customerTrainingFix_benefit`}>
            <div className={`${styles.benefitIconOuter} customerTrainingFix_benefitIcon`}>
              <div className={styles.benefitIconInner}>
                <Image className={styles.benefitIcon} src="/icons/agreement-02.svg" width={36} height={36} alt="" aria-hidden="true" />
              </div>
            </div>
            <div className={styles.strengthenEngagement}>Strengthen engagement</div>
          </div>
        </div>
      </div>
      <div className={`${styles.frameParent50} customerTrainingFix_section customerTrainingFix_cta`}>
        <div className={`${styles.frameParent51} customerTrainingFix_flow`}>
          <div className={`${styles.frameParent4} customerTrainingFix_flow`}>
            <div className={`${styles.frameChild27} customerTrainingFix_badge`}>Drive Customer Success</div>
            <div className={`${styles.turnProductKnowledgeIntoCuParent} customerTrainingFix_copy`}>
              <h2 className={`${styles.turnCustomerEducationContainer} customerTrainingFix_heading`}><span className={styles.turnProductKnowledge}>{`Turn Customer Education into `}</span>
                <span className={styles.customerSuccess}>Customer Success</span></h2>
              <div className={styles.neurolxpDeliversScalable}>NeuroLXP drives customer success through structured learning, self-service training, and actionable analytics.</div>
            </div>
          </div>
          <div className={`${styles.frameWrapper2} customerTrainingFix_buttonWrap`}>
            <BookDemoTrigger className={`${styles.frameChild2} customerTrainingFix_button`}>
                  Book a Demo
                </BookDemoTrigger>
          </div>
        </div>
        <Image className={`${styles.frameChild29} customerTrainingFix_ctaImage`} src="/images/congrats.webp" width={935} height={498} sizes="(max-width: 935px) 100vw, 935px" alt="Customer Success" priority />
      </div>
      </main>
      <Footer />
    </>
  );
};
export default CustomerTraining;
