import type { NextPage } from "next";

import Image from "next/image";

import styles from "./emp.module.css";

import Header from "../../components/Header/header";

import Footer from "../../components/Footer/footer";

import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";

const EmployeeInduction: NextPage = () => {

    return (<>

      <Header />

      <main className={styles.employeeInduction}>

      <nav className={styles.frameDiv} aria-label="Breadcrumb">

        <div className={styles.resourcesWrapper}>

          <div className={styles.useCases}>Resources</div>

        </div>

        <div className={styles.homeParent}>

          <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt=""/>

          <div className={styles.resourcesWrapper}>

            <div className={styles.useCases}>Use cases</div>

          </div>

        </div>

        <div className={styles.arrowRightDoubleGroup}>

          <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt=""/>

          <b className={styles.useCases}>Employee Induction</b>

        </div>

      </nav>

      <div className={styles.frameParent2}>

        <div className={styles.image21Parent}>

          <div className={styles.image21}/>

          <div className={styles.groupYoungBusinesspeopleUsi}/>

          <div className={styles.frameParent3}>

            <div className={styles.frameParent4}>

              <div className={styles.frameIcon}>Employee Induction</div>

              <b className={styles.transformOnboardingIntoContainer}>

                <span className={styles.transformOnboardingInto}>{`Transform Onboarding into `}</span>

                <span className={styles.learning}>Learning</span>

              </b>

            </div>

            <div className={styles.neurolxpSimplifiesOnboarding}>NeuroLXP simplifies onboarding with structured learning from day one.</div>

          </div>

          <div className={styles.businessmenClosingDealWithWrapper}>

            <Image className={styles.businessmenClosingDealWithIcon} src="/images/businessmen.webp" width={400} height={441} sizes="100vw" alt=""/>

          </div>

        </div>

        <div className={styles.image20}/>

      </div>

      <div className={styles.frameParent5}>

        <div className={styles.challengesExpertButtonSlot} data-expert-button-slot />

        <div className={styles.frameParent6}>

          <div className={styles.frameWrapper}>

            <div className={styles.structuredOnboardingForProdWrapper}>

              <b className={styles.structuredOnboardingFor}>Challenges</b>

            </div>

          </div>

          <div className={styles.neurolxpHelpsOrganizations}><span className={styles.copyLine}>NeuroLXP makes onboarding</span>{" "}<span className={styles.copyLine}>clear, engaging and measurable.</span></div>

        </div>

        <div className={styles.frameParent7}>

          <div className={styles.frameParent8}>

            <div className={styles.frameParent9}>

              <div className={styles.frameParent10}>

                <div className={styles.frameChild2}/>

                <div className={styles.frameChild3}/>

                <div className={styles.frameParent11}>

                  <div className={styles.challenge1Parent}>

                    <b className={styles.challenge1}>1</b>

                    <b className={styles.inconsistentOnboarding}>

                      Inconsistent Onboarding

                      <br />

                    </b>

                  </div>

                  <div className={styles.differentTeamsDeliver}><span className={styles.copyLine}>Teams deliver</span>{" "}<span className={styles.copyLine}>inconsistent induction</span></div>

                </div>

              </div>

              <div className={styles.frameParent12}>

                <div className={styles.frameChild2}/>

                <div className={styles.frameChild5}/>

                <div className={styles.frameParent13}>

                  <div className={styles.challenge1Parent}>

                    <b className={styles.challenge1}>2</b>

                    <b className={styles.informationOverload}>Information Overload</b>

                  </div>

                  <div className={styles.newHiresReceive}><span className={styles.copyLine}>New hires receive</span>{" "}<span className={styles.copyLine}>too much information</span></div>

                </div>

              </div>

            </div>

            <div className={styles.frameParent14}>

              <div className={styles.frameParent10}>

                <div className={styles.frameChild2}/>

                <div className={styles.frameChild7}/>

                <div className={styles.frameParent13}>

                  <div className={styles.challenge1Parent}>

                    <b className={styles.challenge1}>3</b>

                    <b className={styles.informationOverload}>Low Engagement</b>

                  </div>

                  <div className={styles.newHiresReceive}><span className={styles.copyLine}>Induction can feel</span>{" "}<span className={styles.copyLine}>passive and lengthy</span></div>

                </div>

              </div>

              <div className={styles.frameParent17}>

                <div className={styles.frameChild2}/>

                <div className={styles.frameChild9}/>

                <div className={styles.frameParent13}>

                  <div className={styles.challenge1Parent}>

                    <b className={styles.challenge1}>4</b>

                    <b className={styles.informationOverload}>

                      Progress Tracking

                      <br />

                    </b>

                  </div>

                  <div className={styles.newHiresReceive}><span className={styles.copyLine}>Onboarding progress</span>{" "}<span className={styles.copyLine}>is difficult to track</span></div>

                </div>

              </div>

            </div>

          </div>

          <div className={styles.frameWrapper2}>

            <div className={styles.frameParent10}>

              <div className={styles.frameChild2}/>

              <div className={styles.frameChild11}/>

              <div className={styles.frameParent13}>

                <div className={styles.challenge1Parent}>

                  <b className={styles.challenge1}>5</b>

                  <b className={styles.informationOverload}>Scaling Onboarding</b>

                </div>

                <div className={styles.newHiresReceive}><span className={styles.copyLine}>Growing teams make</span>{" "}<span className={styles.copyLine}>onboarding harder</span></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className={styles.employeeInductionChild}/>

      <div className={styles.employeeInductionInner}>

        <div className={styles.structuredOnboardingForProdWrapper}>

          <b className={styles.structuredOnboardingFor}>

            Start Strong! Learn Fast! Succeed Sooner!

            <br />

          </b>

        </div>

      </div>

      <div className={styles.frameParent21}>

        <div className={styles.frameParent22}>

          <div className={styles.frameParent23}>

            <div className={styles.frameChild12}>Benefits</div>

            <b className={styles.benefitsOfEmployee}>

              Benefits of Employee Induction with <span className={styles.headingBrand}>NeuroLXP</span>

              <br />

              <br />

            </b>

          </div>

          <div className={styles.organizationsCanAchieve}>

            Organizations can achieve several advantages through digital onboarding

            <br />

            <br />

            <br />

            <br />

          </div>

        </div>

        <div className={styles.frameWrapper3}>

          <div className={styles.frameWrapper4}>

            <div className={styles.frameWrapper5}>

              <div className={styles.frameParent24}>

                <div className={styles.frameParent25}>

                  <div className={styles.benefitIconCircle}>

                    <div className={styles.benefitIconInner}>

                      <Image className={styles.benefitIconImage} src="/icons/limitation.svg" width={36} height={36} alt=""/>

                    </div>

                  </div>

                  <div className={styles.fasterEmployeeIntegration}>Faster Employee Integration</div>

                </div>

                <div className={styles.frameParent25}>

                  <div className={styles.benefitIconCircle}>

                    <div className={styles.benefitIconInner}>

                      <Image className={styles.benefitIconImage} src="/icons/filepink.svg" width={36} height={36} alt=""/>

                    </div>

                  </div>

                  <div className={styles.consistentValuesAnd}>Consistent Values and Policies</div>

                </div>

                <div className={styles.frameParent25}>

                  <div className={styles.benefitIconCircle}>

                    <div className={styles.benefitIconInner}>

                      <Image className={styles.benefitIconImage} src="/icons/handshake.svg" width={36} height={36} alt=""/>

                    </div>

                  </div>

                  <div className={styles.betterOnboardingEngagement}>Better Onboarding Engagement</div>

                </div>

                <div className={styles.frameParent25}>

                  <div className={styles.benefitIconCircle}>

                    <div className={styles.benefitIconInner}>

                      <Image className={styles.benefitIconImage} src="/icons/analytics.svg" width={36} height={36} alt=""/>

                    </div>

                  </div>

                  <div className={styles.easyProgressTracking}>Easy Progress Tracking</div>

                </div>

                <div className={styles.frameParent25}>

                  <div className={styles.benefitIconCircle}>

                    <div className={styles.benefitIconInner}>

                      <Image className={styles.benefitIconImage} src="/icons/setting-green.svg" width={36} height={36} alt=""/>

                    </div>

                  </div>

                  <div className={styles.reducedHrWorkload}>Reduced HR Workload</div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className={styles.frameParent30}>

        <div className={styles.frameParent31}>

          <div className={styles.frameChild18}>Smarter Employee Onboarding</div>

          <div className={styles.enablingSmarterEmployeeOnboParent}>

            <b className={styles.enablingSmarterEmployeeContainer}>

              <span className={styles.enablingSmarter}>{`Enabling Smarter `}</span>

              <span className={styles.employeeOnboarding}>Employee Onboarding</span>

            </b>

            <div className={styles.neurolxpMakesOnboarding}>NeuroLXP makes onboarding seamless, engaging, and efficient.</div>

          </div>

        </div>

        <div className={styles.frameWrapper6}>

          <BookDemoTrigger className={styles.frameChild19}>

            Book a Demo

          </BookDemoTrigger>

        </div>

      </div>

      </main>

      <Footer />

    </>);

};

export default EmployeeInduction;
