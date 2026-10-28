import type { NextPage } from 'next';

import Image from 'next/image';

import './access.css';

import Header from '../../components/Header/header';

import Footer from '../../components/Footer/footer';

import { BookDemoTrigger } from '../../components/Bookademo/Bookademo';



const AccessibilityInclusivity: NextPage = () => {

  return (

    <>

      <Header />

      <main className="accessibilityInclusivity">

        <nav className="frameDiv" aria-label="Breadcrumb">

          <div className="featuresWrapper">

            <div className="addOnModules">Features</div>

          </div>

          <div className="homeParent">

            <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />

            <div className="featuresWrapper">

              <div className="addOnModules">Add-On Modules</div>

            </div>

          </div>

          <div className="arrowRightDoubleGroup">

            <Image className="arrowDown01Icon" src="/icons/arrowright.svg" width={16} height={16} sizes="100vw" alt="" />

            <b className="addOnModules">{`Accessibility & Inclusivity`}</b>

          </div>

        </nav>



        <div className="image20Parent">

          <div className="image20" />

          <div className="frameParent2">

            <div className="peopleTakingPartBusinessEvParent">

              <div className="peopleTakingPartBusinessEv" />

              <div className="image21" />

              <div className="groupYoungBusinesspeopleUsi" />

              {/* <Image className="frameInner" src="/images/bg-access.png" width={1216} height={621} sizes="100vw" alt="" /> */}

              <Image className="youngAdultWatchingTvShowWIcon" src="/images/young-adult-watching-tv-show-with-disabled-friend 1 (1).png" width={572} height={652} sizes="100vw" alt="" />
            </div>

            <div className="frameParent3">

              <div className="frameParent4">

                <div className="frameParent5">

                  <div className="frameIcon">Accessibility and Inclusivity</div>

                  <b className="learningDesignedFor">Learning Designed for <span style={{ color: '#2d4cc8', WebkitTextFillColor: '#2d4cc8' }}>Everyone</span></b>

                </div>

                <div className="neurolxpEnsuresEvery">NeuroLXP ensures every learner can engage learn, and succeed through inclusive design and accessible learning experiences.</div>

              </div>

              <BookDemoTrigger className="frameWrapper">

                <div className="bookADemoWrapper">

                  <div className="bookADemo">Book a Demo</div>

                </div>

              </BookDemoTrigger>

            </div>

          </div>

        </div>



        <div className="frameParent6">

          <div className="frameWrapper2">

            <div className="frameParent4">

              <div className="accessibleLearningForDiversWrapper">

                <b className="learningDesignedFor">Accessible Learning for Diverse <span style={{ color: '#2d4cc8', WebkitTextFillColor: '#2d4cc8' }}>Needs</span></b>

              </div>

              <div className="designedToMake">Designed to make learning materials easier to access, navigate, and understand for all learners.</div>

            </div>

          </div>

          <div className="frameParent8">

            <div className="frameParent9">

              <div className="frameWrapper3">

                <div className="compassParent">

                  <Image className="compassIcon" src="/icons/compasspink.svg" width={50} height={50} sizes="100vw" alt="" />

                  <div className="easyNavigationWrapper">

                    <div className="easyNavigation"><span>Easy</span><span>Navigation</span></div>

                  </div>

                </div>

              </div>

              <div className="frameWrapper3">

                <div className="compassParent">

                  <Image className="compassIcon" src="/icons/library.svg" width={50} height={50} sizes="100vw" alt="" />

                  <div className="easyNavigationWrapper">

                    <div className="multiFormatLearning"><span>Multi-Format</span><span>Learning</span></div>

                  </div>

                </div>

              </div>

            </div>

            <div className="frameParent9">

              <div className="frameWrapper3">

                <div className="compassParent">

                  <Image className="compassIcon" src="/icons/mousepurple.svg" width={50} height={50} sizes="100vw" alt="" />

                  <div className="easyNavigationWrapper">

                    <div className="easyNavigation"><span>Interactive</span><span>Content</span></div>

                  </div>

                </div>

              </div>

              <div className="frameWrapper3">

                <div className="compassParent">

                  <Image className="compassIcon" src="/icons/clipboardorange.svg" width={50} height={50} sizes="100vw" alt="" />

                  <div className="easyNavigationWrapper">

                    <div className="unlimitedAssessments"><span>Unlimited</span><span>Assessments</span></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="frameParent11">

          <div className="frameWrapper7">

            <div className="frameWrapper8">

              <div className="frameParent12">

                <div className="frameChild2">Flexible Learning Formats</div>

                <div className="multipleContentFormatsForFParent">

                  <b className="multipleContentFormats">Multiple Content Formats for Flexible <span style={{ color: '#2d4cc8', WebkitTextFillColor: '#2d4cc8' }}>Learning</span></b>

                  <div className="deliverEngagingLearning">Deliver engaging learning experiences with diverse content formats that suit every learner.</div>

                </div>

              </div>

            </div>

          </div>

          <div className="frameParent13">

            <div className="frameParent14">

              <div className="frameWrapper9">

                <div className="frameParent15">

                  <div className="frameWrapper10"><div className="frameChild3" /></div>

                  <div className="frameParent16">

                    <div className="formatIconOuter">

                      <div className="formatIconInner formatIconGreen">

                        <Image className="formatIconImage" src="/icons/files.svg" width={33.97} height={33.97} sizes="100vw" alt="Text and structured notes" />

                      </div>

                    </div>

                    <b className="formatCardTitle formatCardTitleGreen"><span>Text & Structured</span><span>Notes</span></b>

                  </div>

                </div>

              </div>

              <div className="frameWrapper11">

                <div className="frameParent15">

                  <div className="frameWrapper10"><div className="frameChild3" /></div>

                  <div className="frameParent16">

                    <div className="formatIconOuter">

                      <div className="formatIconInner formatIconPurple">

                        <Image className="formatIconImage" src="/icons/video.svg" width={33.97} height={33.97} sizes="100vw" alt="Interactive video learning" />

                      </div>

                    </div>

                    <b className="formatCardTitle formatCardTitlePurple"><span>Interactive</span><span>Video Learning</span></b>

                  </div>

                </div>

              </div>

            </div>

            <div className="frameParent19">

              <div className="frameWrapper9">

                <div className="frameParent15">

                  <div className="frameWrapper10"><div className="frameChild3" /></div>

                  <div className="frameParent16">

                    <div className="formatIconOuter">

                      <div className="formatIconInner formatIconOrange">

                        <Image className="formatIconImage" src="/icons/image.svg" width={33.97} height={33.97} sizes="100vw" alt="Visual learning aids" />

                      </div>

                    </div>

                    <b className="formatCardTitle formatCardTitleOrange"><span>Visual</span><span>Learning Aids</span></b>

                  </div>

                </div>

              </div>

              <div className="frameWrapper15">

                <div className="frameParent15">

                  <div className="frameWrapper10"><div className="frameChild3" /></div>

                  <div className="frameParent16">

                    <div className="formatIconOuter">

                      <div className="formatIconInner formatIconPink">

                        <Image className="formatIconImage" src="/icons/headphone.svg" width={33.97} height={33.97} sizes="100vw" alt="Audio-supported content" />

                      </div>

                    </div>

                    <b className="formatCardTitle formatCardTitlePink"><span>Audio-Supported</span><span>Content</span></b>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="accessibilityInclusivityInner">

          <div className="frameParent24">

            <div className="frameParent25">

              <div className="frameParent26">

                <div className="accessibleLearningForDiversWrapper">

                  <b className="learningDesignedFor">Inclusive Learning <span style={{ color: '#2d4cc8', WebkitTextFillColor: '#2d4cc8' }}>Experiences</span></b>

                </div>

                <div className="designedToMake">Collaborative tools allow learners to share ideas and contribute meaningfully to learning environments.</div>

              </div>

              <div className="frameParent27">

                <div className="inclusiveItem inclusiveItemPink">

                  <Image className="inclusiveArrow" src="/icons/arrowpink.svg" width={32} height={32} sizes="100vw" alt="" />

                  <span>Equal Participation in Discussions</span>

                </div>

                <div className="inclusiveItem inclusiveItemBlue">

                  <Image className="inclusiveArrow" src="/icons/arrowblue.svg" width={32} height={32} sizes="100vw" alt="" />

                  <span>Share Diverse Ideas</span>

                </div>

                <div className="inclusiveItem inclusiveItemPurple">

                  <Image className="inclusiveArrow" src="/icons/arrowpurple.svg" width={32} height={32} sizes="100vw" alt="" />

                  <span>Respectful Learning Environments</span>

                </div>

              </div>

            </div>

            <div className="learningAnalytics">

              <Image className="teamSupportingInvalidWoman" src="/images/Learning Analytics.png" width={530} height={488} sizes="100vw" alt="Inclusive Learning" />

            </div>

          </div>

        </div>



        <div className="frameParent28">

          <div className="frameWrapper17">

            <div className="frameWrapper18">

              <div className="frameParent29">

                <div className="supportingInstitutionsInIncWrapper">

                  <b className="supportingInstitutionsInContainer">

                    <span className="supportingInstitutionsIn">Supporting Institutions in</span>

                    <span className="inclusiveEducation"> Inclusive Education</span>

                    <span className="supportingInstitutionsIn"> </span>

                  </b>

                </div>

                <div className="enableAccessibleFlexible">Enable accessible, flexible learning experiences that support diverse learner needs and promote inclusive education for everyone.</div>

              </div>

            </div>

          </div>

          <div className="frameParent30">

            <div className="institutionCard institutionCard1">

              <div className="institutionCardContent">

                <div className="institutionIconOuter">

                  <div className="institutionIconInner institutionIconPink">

                    <Image className="institutionIconImage" src="/icons/globe-round.svg" width={33.97} height={33.97} sizes="100vw" alt="Deliver Accessible Online Courses" />

                  </div>

                </div>

                <div className="institutionCardText institutionTextPink">Deliver Accessible Online Courses</div>

              </div>

            </div>

            <div className="institutionCard institutionCard2">

              <div className="institutionCardContent">

                <div className="institutionIconOuter">

                  <div className="institutionIconInner institutionIconPurple">

                    <Image className="institutionIconImage" src="/icons/accessibility.svg" width={33.97} height={33.97} sizes="100vw" alt="Create Inclusive Learning Environments" />

                  </div>

                </div>

                <div className="institutionCardText institutionTextPurple">Create Inclusive Learning Environments</div>

              </div>

            </div>

            <div className="institutionCard institutionCard3">

              <div className="institutionCardContent">

                <div className="institutionIconOuter">

                  <div className="institutionIconInner institutionIconTeal">

                    <Image className="institutionIconImage" src="/icons/user-group-02-1.svg" width={33.97} height={33.97} sizes="100vw" alt="Support Learners with Diverse Abilities" />

                  </div>

                </div>

                <div className="institutionCardText institutionTextTeal">Support Learners with Diverse Abilities</div>

              </div>

            </div>

            <div className="institutionCard institutionCard4">

              <div className="institutionCardContent">

                <div className="institutionIconOuter">

                  <div className="institutionIconInner institutionIconBlue">

                    <Image className="institutionIconImage" src="/icons/student.svg" width={33.97} height={33.97} sizes="100vw" alt="Expand Learning Opportunities Globally" />

                  </div>

                </div>

                <div className="institutionCardText institutionTextBlue">Expand Learning Opportunities Globally</div>

              </div>

            </div>

          </div>

        </div>



        <div className="frameParent31">
          <div className="accessibilityExpertButtonSlot" data-expert-button-slot />

<div className="neurolxpBadge">
  <span className="neurolxpBadgeText">
    NeuroLXP
    <sup className="neurolxpTrademark">TM</sup>
  </span>
</div>
          <div className="empoweringInclusiveLearningParent">

            <b className="empoweringInclusiveLearning">Empowering Inclusive <span style={{ color: '#2d4cc8', WebkitTextFillColor: '#2d4cc8' }}>Learning</span></b>

            <div className="neurolxpHelpsInstitutions">NeuroLXP helps institutions create learning ecosystems where every learner has the opportunity to succeed without barriers.</div>

          </div>

        </div>

      </main>

      <Footer />

    </>

  );

};



export default AccessibilityInclusivity;
