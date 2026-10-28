import type { NextPage } from "next";
import Image from "next/image";
import styles from "./blog.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { BookDemoTrigger } from "../../components/Bookademo/Bookademo";
const Blogs: NextPage = () => {
    return (<>
      <Header />
      <div className={styles.blogs}>
        <div className={styles.frameDiv}>
          <div className={styles.resourcesWrapper}>
            <div className={styles.resources2}>Resources</div>
          </div>
          <div className={styles.arrowRightDoubleParent}>
            <Image className={styles.arrowDown01Icon} src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt=""/>
            <b className={styles.resources2}>Blogs</b>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <svg className={styles.heroClipDefinitions} width="0" height="0" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id="blogsHeroImageClip" clipPathUnits="objectBoundingBox">
                <path d="M .12536 0 H .95335 Q 1 0 1 .05195 V .94805 Q 1 1 .95335 1 H .12536 C .1137 1 .08746 .95779 .06122 .86039 C .02624 .7224 .00875 .6039 .00875 .5 C .00875 .3961 .02624 .2776 .06122 .13961 C .08746 .04221 .1137 0 .12536 0 Z"/>
              </clipPath>
            </defs>
          </svg>
          <Image className={styles.heroFrameSvg} src="/images/blog-hero-frame.webp" width={1312} height={684} sizes="100vw" alt=""/>
          <div className={styles.heroImageFrame}>
            <div className={styles.heroImageClip}>
              <Image className={styles.frameChild2} src="/images/imgblog.webp" width={667} height={616} sizes="100vw" alt=""/>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.blogsBadge}>
                    <span>Blogs</span>
                  </div>
                  <h1 className={`${styles.smarterLearningInsights} ${styles.mainHeading}`}>
                    Smarter Learning <span className={styles.headingAccent}>Insights</span>
                  </h1>
                </div>
                <div className={styles.exploreExpertInsights}>
                  Explore expert insights on digital learning, LMS, AI, and
                  workforce trends.
                </div>
              </div>
            </div>
            <BookDemoTrigger>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.bookADemoWrapper}>
                      <div className={styles.bookADemo}>Book a Demo</div>
                    </div>
                  </div>
                </div>
              </div>
            </BookDemoTrigger>
          </div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.frameParent6}>
            <div className={styles.knowledgeHubBadge}>Knowledge Hub</div>
            <h2 className={`${styles.expertInsightsFor} ${styles.mainHeading}`}>
                    Expert Insights for Modern Learning <span className={styles.headingAccent}>Teams</span>
                  </h2>
            <div className={styles.expertInsightsOn}>
              Expert insights on technology transforming modern learning
            </div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv}/>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild4}/>
                <div className={styles.aiPoweredLmsParent}>
                  <b className={styles.aiPoweredLms}>AI-Powered LMS</b>
                 <div className={styles.aiTransformingModern}>
  AI transforming modern <br />
  learning.
</div>
                </div>
                <Image className={styles.youngManUsingHisLaptopInfIcon} src="/images/gamifiedblog.webp" width={244} height={201} sizes="100vw" alt=""/>
              </div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.rectangleDiv}/>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild6}/>
                <div className={styles.interactiveLearningParent}>
                  <b className={styles.aiPoweredLms}>Interactive Learning</b>
                 <div className={styles.aiTransformingModern}>
  Gamified and engaging <br />
  experiences.
</div>
                </div>
                <Image className={styles.youngManUsingHisLaptopInfIcon} src="/images/youngmanblog.webp" width={244} height={201} sizes="100vw" alt=""/>
              </div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.rectangleDiv}/>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild8}/>
                <Image className={styles.concentratedExecutiveManagerIcon} src="/images/img2blog.webp" width={310} height={243} sizes="100vw" alt=""/>
                <div className={styles.corporateTrainingParent}>
                  <b className={styles.aiPoweredLms}>Corporate Training</b>
                  <div className={styles.upskillingTodaysWorkforce}>
                    Upskilling today's<br />workforce.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv}/>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild6}/>
                <div className={styles.interactiveLearningParent}>
                  <b className={styles.aiPoweredLms}>Learning Innovation</b>
                  <div className={styles.modernAndFlexible}>
                    Modern and flexible<br />learning.
                  </div>
                </div>
                <Image className={styles.womanHoldingIdeaIconUsing} src="/images/img4blog.webp" width={290} height={222} sizes="100vw" alt=""/>
              </div>
            </div>
            <div className={styles.rectangleParent8}>
              <div className={styles.rectangleDiv}/>
              <div className={styles.rectangleParent3}>
                <div className={styles.frameChild8}/>
                <div className={styles.digitalEducationParent}>
                  <b className={styles.aiPoweredLms}>Digital Education</b>
                  <div className={styles.aiTransformingModern}>
                    Best practices for online <br />learning.
                  </div>
                </div>
                <Image className={styles.computingMan1Icon} src="/images/img5blog.webp" width={355} height={237} sizes="100vw" alt=""/>
              </div>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.rectangleDiv}/>
              <div className={styles.rectangleContainer}>
                <Image className={styles.frameChild14} src="/images/img6blog.webp" width={352} height={229} sizes="100vw" alt=""/>
                <div className={styles.aiPoweredLmsParent}>
                  <b className={styles.aiPoweredLms}>Learning Analytics</b>
                  <div className={styles.dataDrivenLearningInsights}>
                    Data-driven learning <br />insights.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent10}>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameParent11}>
              <div className={styles.frameWrapper6}>
                <div className={styles.turnInsightsIntoActionParent}>
                  <h2 className={`${styles.turnInsightsInto} ${styles.mainHeading}`}>
                    Turn Insights into <span className={styles.headingAccent}>Action</span>
                  </h2>
                  <div className={styles.discoverPracticalStrategies}>
                    Discover practical strategies to enhance learning,
                    engagement, and training outcomes.
                  </div>
                </div>
              </div>
              <div className={styles.frameChild15}/>
            </div>
          </div>
          <div className={styles.rectangleParent12}>
            <div className={styles.frameChild16} aria-hidden="true"/>
            <div className={styles.discoverPracticalIdeasToWrapper}>
              <b className={styles.discoverPracticalIdeas}>
                Discover practical ideas to :
              </b>
            </div>
            <div className={styles.frameParent12}>
              <div className={styles.frameParent13}>
                <div className={styles.frameParent14}>
                  <div className={styles.frameWrapper7}>
                    <div className={styles.target02Parent}>
                      <Image className={styles.target02Icon} src="/icons/target-02pink.svg" width={32} height={32} sizes="100vw" alt=""/>
                      <div className={styles.improveEngagement}>
                        Improve Engagement
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper8}>
                    <div className={styles.monitorParent}>
                      <Image className={styles.target02Icon} src="/icons/monitorgreen.svg" width={32} height={32} sizes="100vw" alt=""/>
                      <div className={styles.improveEngagement}>
                        Implement LMS
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent14}>
                  <div className={styles.frameWrapper7}>
                    <div className={styles.refresh03Parent}>
                      <Image className={styles.target02Icon} src="/icons/refresh-03blue.svg" width={32} height={32} sizes="100vw" alt=""/>
                      <div className={styles.improveEngagement}>
                        Modernize Learning
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper7}>
                    <div className={styles.trendingDownParent}>
                      <Image className={styles.target02Icon} src="/icons/target-02pink.svg" width={32} height={32} sizes="100vw" alt=""/>
                      <div className={styles.improveEngagement}>
                        Upskill Teams
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper8}>
                <div className={styles.chartUpParent}>
                  <Image className={styles.target02Icon} src="/icons/chart-upblue.svg" width={32} height={32} sizes="100vw" alt=""/>
                  <div className={styles.improveEngagement}>
                    Leverage Analytics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent16}>
          <div className={styles.frameWrapper12}>
            <div className={styles.frameWrapper13}>
              <div className={styles.frameWrapper14}>
                <div className={styles.frameParent17}>
                  <div className={styles.stayAheadOfLearningTrendsWrapper}>
                    <h2 className={`${styles.stayAheadOf} ${styles.mainHeading}`}>
                    Stay Ahead of Learning <span className={styles.headingAccent}>Trends</span>
                  </h2>
                  </div>
                  <div className={styles.exploreTheLatest}>
                    Explore the latest trends and insights in digital learning
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent18}>
            <div className={styles.frameParent19}>
              <div className={styles.trendIconOuter}>
                <div className={styles.trendIconInner}>
                  <Image className={styles.trendIcon} src="/icons/bulbpurple.svg" width={34} height={34} sizes="34px" alt="Actionable ideas"/>
                </div>
              </div>
              <div className={styles.actionableIdeasParent}>
                <b className={styles.actionableIdeas}>Actionable Ideas</b>
                <div className={styles.strategiesForLearning}>
                  Strategies for Learning Leaders.
                </div>
              </div>
            </div>
            <div className={styles.frameParent20}>
              <div className={styles.trendIconOuter}>
                <div className={styles.trendIconInner}>
                  <Image className={styles.trendIcon} src="/icons/globe-02.svg" width={34} height={34} sizes="34px" alt="Emerging trends"/>
                </div>
              </div>
              <div className={styles.emergingTrendsParent}>
                <b className={styles.emergingTrends}>Emerging Trends</b>
                <div className={styles.stayUpdatedOn}>
                  Stay Updated on LMS & AI.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogsInner}>
          <div className={styles.frameParent21}>
            <div className={styles.frameChild19}>
             <div className={styles.neuroBadge}>
  <span className={styles.neuroBadgeText}>
    NeuroLXP
    <sup className={styles.neuroBadgeTM}>TM</sup>
  </span>
</div>
            </div>
            <div className={styles.exploreTheNeurolxpBlogParent}>
              <h2 className={`${styles.exploreTheNeurolxp} ${styles.mainHeading}`}>
                    Explore the NeuroLXP <span className={styles.headingAccent}>Blog</span>
                  </h2>
              <div className={styles.discoverInsightsThat}>
                Discover insights that help build smarter, engaging and
                future-ready learning experiences.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
};
export default Blogs;
