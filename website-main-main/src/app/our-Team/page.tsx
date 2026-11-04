import Image from "next/image";



import Header from "../../components/Header/header";



import Footer from "../../components/Footer/footer";



import "./our-team.css";



type IconName =



  | "chevronDouble"



  | "linkedin"



  | "mortarboard"



  | "laptop"



  | "sparkles"



  | "chart"



  | "handshake"



  | "goal";



function Icon({ name, color = "currentColor" }: { name: IconName; color?: string }) {



  const stroke = color;



  switch (name) {



    case "chevronDouble":



      return (



        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">



          <path d="M4 3L8 8L4 13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M8 3L12 8L8 13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />



        </svg>



      );



    case "linkedin":



      return (



        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">



          <rect x="2" y="2" width="20" height="20" rx="4" stroke={stroke} strokeWidth="1.6" />



          <path d="M7 10v7" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />



          <circle cx="7" cy="7" r="1.1" fill={stroke} />



          <path d="M11 17v-4.5c0-1.4 1-2.5 2.4-2.5s2.4 1.1 2.4 2.5V17" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M11 10v1.2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />



        </svg>



      );



    case "mortarboard":



      return (



        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" aria-hidden="true">



          <path d="M2.72686 10.835C2.72543 12.6525 13.6861 17.6162 16.2478 17.6182C18.8093 17.6202 29.7779 12.6737 29.7793 10.8563C29.7807 9.03884 18.8199 4.07514 16.2584 4.07313C13.6968 4.07112 2.72828 9.01758 2.72686 10.835Z" stroke={stroke} strokeWidth="2.03176" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M8.13403 14.9062L8.46004 22.5322C8.46656 22.6849 8.48295 22.8378 8.52709 22.9842C8.6635 23.4364 8.91525 23.8474 9.2996 24.1238C12.3069 26.2853 20.1747 26.2915 23.1853 24.1347C23.5703 23.8589 23.8226 23.4483 23.9598 22.9963C24.004 22.85 24.0207 22.6971 24.0276 22.5445L24.3654 14.919" stroke={stroke} strokeWidth="2.03176" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M27.7463 12.8923L27.7388 22.3738M27.7388 22.3738C26.6645 24.332 26.1893 25.3812 25.7062 27.113C25.6011 27.7292 25.6839 28.0398 26.1085 28.3159C26.2809 28.4281 26.4883 28.4681 26.6939 28.4682L28.7533 28.4699C28.9723 28.47 29.1933 28.4246 29.3737 28.3004C29.7687 28.0284 29.8705 27.7298 29.764 27.1161C29.3429 25.5075 28.8058 24.4075 27.7388 22.3738Z" stroke={stroke} strokeWidth="2.03176" strokeLinecap="round" strokeLinejoin="round" />



        </svg>



      );



    case "laptop":



      return (



        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" aria-hidden="true">



          <path d="M29.0512 23.4004L29.0601 12.0671C29.0627 8.72799 29.064 7.05843 28.0274 6.02028C26.9909 4.98214 25.3214 4.98083 21.9823 4.9782L12.0656 4.97041C8.72652 4.96779 7.05695 4.96647 6.01881 6.00298C4.98067 7.03951 4.97936 8.70906 4.97673 12.0482L4.96783 23.3815" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M31.1472 29.0645L2.85858 29.0422C2.31608 29.0418 1.96368 28.4873 2.20667 28.0166L4.96566 23.3772L29.049 23.3962L31.8006 28.0399C32.0429 28.511 31.6896 29.0649 31.1472 29.0645Z" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



        </svg>



      );



    case "sparkles":



      return (



        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" aria-hidden="true">



          <path d="M16.9889 15.4284L19.2435 16.1819C20.047 16.4504 20.0461 17.5874 19.2422 17.8547L16.9864 18.6046C15.4064 19.1299 14.166 20.3684 13.6382 21.9476L12.8847 24.2022C12.6161 25.0056 11.4792 25.0047 11.2119 24.2008L10.462 21.9451C9.9367 20.3651 8.69819 19.1247 7.11903 18.5968L4.86447 17.8434C4.0609 17.5749 4.0618 16.4378 4.86579 16.1706L7.12153 15.4207C8.70151 14.8953 9.94197 13.6569 10.4697 12.0777L11.2232 9.82315C11.4918 9.01957 12.6287 9.02048 12.896 9.82446L13.6459 12.0802C14.1712 13.6602 15.4097 14.9006 16.9889 15.4284Z" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M25.6394 7.08998L26.6642 7.43247C27.0294 7.55453 27.029 8.07133 26.6636 8.19282L25.6382 8.5337C24.9201 8.77247 24.3562 9.33543 24.1164 10.0532L23.7739 11.078C23.6517 11.4433 23.1349 11.4429 23.0134 11.0774L22.6725 10.0521C22.4338 9.33392 21.8708 8.77007 21.1531 8.53018L20.1282 8.18768C19.763 8.06562 19.7634 7.54882 20.1288 7.42733L21.1542 7.08645C21.8723 6.84768 22.4362 6.28472 22.676 5.56693L23.0185 4.54212C23.1407 4.17686 23.6575 4.17728 23.779 4.54272L24.1199 5.56806C24.3586 6.28623 24.9216 6.85008 25.6394 7.08998Z" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M25.6257 25.5079L26.6505 25.8504C27.0158 25.9725 27.0154 26.4893 26.6499 26.6109L25.6245 26.9518C24.9064 27.1905 24.3425 27.7535 24.1027 28.4712L23.7602 29.4961C23.6381 29.8613 23.1213 29.8609 22.9997 29.4955L22.6588 28.4701C22.4201 27.7519 21.8572 27.1881 21.1394 26.9482L20.1145 26.6057C19.7493 26.4836 19.7497 25.9668 20.1151 25.8453L21.1405 25.5044C21.8587 25.2657 22.4225 24.7027 22.6624 23.9849L23.0049 22.9601C23.127 22.5948 23.6438 22.5952 23.7653 22.9607L24.1062 23.9861C24.3449 24.7042 24.9079 25.2681 25.6257 25.5079Z" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



        </svg>



      );



    case "chart":



      return (



        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" aria-hidden="true">



          <path d="M29.7521 29.7734L29.7655 12.7734" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M21.2535 29.7656L21.2601 21.2656" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M4.26044 21.2539L12.0582 13.4684C12.638 12.8895 12.9279 12.6 13.2405 12.4454C13.8353 12.1513 14.5333 12.1519 15.1275 12.4469C15.4399 12.602 15.7294 12.8919 16.3082 13.4717C16.887 14.0515 17.1765 14.3414 17.4889 14.4965C18.0831 14.7916 18.7813 14.7921 19.3759 14.4979C19.6886 14.3433 19.9785 14.0539 20.5582 13.475L29.7738 4.27395" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M12.7523 29.7604L12.7601 19.8438" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M4.25253 29.7552L4.25476 26.9219" stroke={stroke} strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round" />



        </svg>



      );



    case "handshake":



      return (



        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" aria-hidden="true">



          <path d="M43.0545 13.2109H37.5966C36.4202 13.2109 35.8319 13.2109 35.2773 13.043C34.7227 12.875 34.2333 12.5488 33.2544 11.8962C31.7862 10.9173 30.1112 9.80071 29.279 9.54878C28.4471 9.29687 27.5647 9.29688 25.8 9.29688C23.4003 9.29688 21.8535 9.29688 20.7746 9.74378C19.6957 10.1907 18.8472 11.0392 17.1503 12.7361L15.657 14.2294C15.2745 14.6119 15.0833 14.8031 14.9653 14.9919C14.5277 15.6917 14.5762 16.5908 15.0865 17.2395C15.2242 17.4145 15.4348 17.584 15.8562 17.9231C17.4135 19.1764 19.6587 19.0513 21.0689 17.6327L23.4843 15.2029H25.4413L37.1835 27.0149C38.2643 28.1022 38.2643 29.8649 37.1835 30.9523C36.1026 32.0396 34.3503 32.0396 33.2694 30.9523L32.2909 29.9679M26.4198 31.9366L28.3769 33.9052C29.4577 34.9925 31.21 34.9925 32.2909 33.9052C33.3718 32.8181 33.3718 31.0552 32.2909 29.9679L26.4198 24.062M22.5058 28.0226L26.4198 31.9366C27.5007 33.0238 27.5007 34.7867 26.4198 35.874C25.339 36.9611 23.5867 36.9611 22.5058 35.874L19.5703 32.9208M3.91406 28.8671H4.53824C6.16088 28.8671 6.97223 28.8671 7.69963 29.1727C8.42704 29.4786 8.99479 30.0581 10.1303 31.2172L15.6562 36.8584C16.7371 37.9455 18.4894 37.9455 19.5703 36.8584C20.6511 35.771 20.6511 34.0082 19.5703 32.9208L18.5917 31.9366" stroke={stroke} strokeWidth="2.93554" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M43.0544 28.8672H38.1619" stroke={stroke} strokeWidth="2.93554" strokeLinecap="round" />



          <path d="M16.6347 13.2109H3.91406" stroke={stroke} strokeWidth="2.93554" strokeLinecap="round" />



        </svg>



      );



    case "goal":



      return (



        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" aria-hidden="true">



          <path d="M21.5273 13.8984C17.0609 14.8051 13.6992 18.7539 13.6992 23.4877C13.6992 28.8921 18.0802 33.2729 23.4843 33.2729C28.2184 33.2729 32.1671 29.9113 33.0738 25.4448" stroke={stroke} strokeWidth="2.93554" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M43.0545 23.4843C43.0545 34.2926 34.2926 43.0545 23.4843 43.0545C12.676 43.0545 3.91406 34.2926 3.91406 23.4843C3.91406 12.676 12.676 3.91406 23.4843 3.91406" stroke={stroke} strokeWidth="2.93554" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M28.377 13.9228V18.5898H33.0439C34.6723 18.5898 35.4864 18.5898 36.2184 18.2866C36.9505 17.9833 37.5262 17.4077 38.6776 16.2563L39.3318 15.6021C41.1984 13.7354 42.1317 12.8021 42.0736 11.9024C42.0515 11.5599 41.9411 11.2288 41.7532 10.9414C41.26 10.1868 39.9533 10.0002 37.3399 9.62682C36.9665 7.01341 36.7798 5.70671 36.0252 5.21354C35.7379 5.02572 35.407 4.91536 35.0643 4.89319C34.1647 4.83497 33.2314 5.76833 31.3645 7.63506L30.7105 8.28919C29.5592 9.44057 28.9834 10.0162 28.6801 10.7483C28.377 11.4804 28.377 12.2945 28.377 13.9228Z" stroke={stroke} strokeWidth="2.93554" strokeLinecap="round" strokeLinejoin="round" />



          <path d="M28.3769 18.5898L23.4844 23.4824" stroke={stroke} strokeWidth="2.93554" strokeLinecap="round" strokeLinejoin="round" />



        </svg>



      );



  }



}



const heroPills: { label: string; color: string }[] = [



  { label: "Learning", color: "#67096E" },



  { label: "Technology", color: "#BF1869" },



  { label: "Innovation", color: "#C05512" },



];



const valueCards: { title: string; desc: string }[] = [



  {



    title: "Human-First Learning",



    desc: "Built around learners",



  },



  {



    title: "Intelligent Technology",



    desc: "Smarter through technology",



  },



  {



    title: "Meaningful Impact",



    desc: "Learning with Impact",



  },



];



const teamMembers: {



  name: string;



  role: string;



  blurb: string;



  photo: string;



  linkedin: string;



}[] = [



  {



    name: "Ranjitha A M",



    role: "Full-Stack Developer",



    blurb: "Driving projects from idea\nto execution",



    photo: "/images/team-ranjitha.jpg",



    linkedin: "https://www.linkedin.com/in/ranjitha-mahesha-376545284?utm_source=share_via&utm_content=profile&utm_medium=member_android/",



  },



  // {



  //   name: "Rakesh R",



  //   role: "Full-Stack Developer",



  //   blurb: "Building powerful backend solutions",



  //   photo: "/images/team-rakesh.jpg",



  //   linkedin: "https://www.linkedin.com/",



  // },



  {



    name: "Jeethu",



    role: "Full-Stack Developer",



    blurb: "Building seamless product\nexperiences",



    photo: "/images/team-jeethu.jpg",



    linkedin: "https://www.linkedin.com/in/jeethu-p-joy-7555703b/",



  },



  {



    name: "Veena Raju",



    role: "Product Designer",



    blurb: "Creating intuitive digital\nexperiences",



    photo: "/images/team-veena.jpg",



    linkedin: "https://www.linkedin.com/in/veena-r-design/",



  },



  {



    name: "Inchana",



    role: "Full-Stack Developer",



    blurb: "Creating scalable product\nsolutions",



    photo: "/images/team-inchana.jpg",



    linkedin: "https://www.linkedin.com/in/inchana-b-c-86b29b297?utm_source=share_via&utm_content=profile&utm_medium=member_android"


  },



  {



    name: "Pavan",



    role: "Full-Stack Developer",



    blurb: "Building reliable digital\nsolutions",



    photo: "/images/team-pavan.jpg",



    linkedin: "https://www.linkedin.com/in/pavan-kumar-tk/",



  },



  // {



  //   name: "Heena",



  //   role: "Full-Stack Developer",



  //   blurb: "Creating engaging product experiences",



  //   photo: "/images/team-heena.jpg",



  //   linkedin: "https://www.linkedin.com/",



  // },



];



const bringTogether: { title: string; desc: string; color: string; icon: IconName }[] = [



  { title: "Learning", desc: "Academic expertise and instructional thinking", color: "#2D4CC8", icon: "mortarboard" },



  { title: "Technology", desc: "Scalable digital learning infrastructure.", color: "#67096E", icon: "laptop" },



  { title: "Design", desc: "Simple and engaging learner experiences.", color: "#BF1869", icon: "sparkles" },



  { title: "Data", desc: "Data-driven insights for better decisions.", color: "#C05512", icon: "chart" },



];



const howWeWork: { title: string; desc: string; color: string; icon: IconName }[] = [



  { title: "Curious", desc: "Always learning", color: "#2D4CC8", icon: "mortarboard" },



  { title: "Collaborative", desc: "Better together", color: "#BF1869", icon: "handshake" },



  { title: "Learner-Focused", desc: "Learners come first", color: "#67096E", icon: "mortarboard" },



  { title: "Impact-Driven", desc: "Focused on results", color: "#2A7308", icon: "goal" },



];



export default function OurTeamPage() {



  return (



    <>



      <Header />



      <main id="main-content" className="team-page">



        {/* Breadcrumb — matches Help & Support */}
        <nav className="team-breadcrumb" aria-label="Breadcrumb">
          <span className="team-breadcrumb-parent">Resources</span>
          <span className="team-breadcrumb-current">
            <Image src="/icons/arrowright.svg" width={16} height={16} alt="" />
            <strong>Our Team</strong>
          </span>
        </nav>

        <section className="team-hero">



          <span className="team-eyebrow">Our Team</span>



          <h1 className="team-hero-title">People Behind <span className="team-heading-accent">NeuroLXP



            {/* <sup className="team-tm">TM</sup> */}



            </span></h1>



          <p className="team-hero-desc">



            We are a multidisciplinary team passionate about transforming how people learn, grow and succeed through



            intelligent learning technology.



          </p>



          <div className="team-hero-pills">



            {heroPills.map((pill) => (



              <span key={pill.label} className="team-hero-pill" style={{ borderColor: pill.color }}>



                {pill.label}



              </span>



            ))}



          </div>



        </section>



        <section className="team-founder">



          <div className="team-founder-photo">



            <Image src="/images/marketing-concept-with-vision-word-flat-lay 1.png" alt="Mr Pavan Kumar, Founder and CEO of NeuroLXP" fill sizes="(max-width: 767px) 100vw, 608px" />



          </div>



          <div className="team-founder-content">



            <span className="team-eyebrow team-eyebrow--inline">The Vision Behind NeuroLXP<sup className="team-tm team-tm--badge">TM</sup></span>



            <h2 className="team-founder-name">Mr Pavan Kumar</h2>



            <p className="team-founder-role">Founder & CEO</p>



            <p className="team-founder-tagline">Learn today! Transform tomorrow!</p>



            <p className="team-founder-desc">



              Beyond courses, Neuro LXP connects people, technology and data to transform learning into smarter



              experiences, continuous growth and measurable impact.



            </p>



           <a



  href="https://www.linkedin.com/in/pavankumar-chandrappa-1bb84879/"



  target="\_blank"



  rel="noopener noreferrer"



  className="team-linkedin-btn"



  aria-label="Connect with Mr Pavan Kumar on LinkedIn"



>



  Connect on Linkedin



</a>



          </div>



        </section>



        <section className="team-values" aria-label="What sets NeuroLXP apart">



          {valueCards.map((card) => (



            <article key={card.title} className="team-value-card">



              <h3 className="team-value-title">{card.title}</h3>



              <p className="team-value-desc">{card.desc}</p>



            </article>



          ))}



        </section>



        <section className="team-group-photo">



          <div className="team-group-photo-frame">



            <div className="team-group-photo-inner">



              <Image



                src="/images/team-six-office-workers-white-wall 1.png"



                alt="The NeuroLXP team together"



                fill



                sizes="(max-width: 767px) 100vw, 1216px"



              />



            </div>



          </div>



        </section>



        <section className="team-grid-section">



          <h2 className="team-section-title team-section-title--people">



            Meet The People Behind The <span className="team-heading-accent">Platform</span>



          </h2>



          <div className="team-grid">



            {teamMembers.map((member) => (



              <article key={member.name} className="team-card">



                <h3 className="team-card-name">{member.name}</h3>



                <p className="team-card-role">{member.role}</p>



                <p className="team-card-blurb">{member.blurb}</p>



                <a



                  href={member.linkedin}



                  target="\_blank"



                  rel="noopener noreferrer"



                  className="team-card-linkedin"



                  aria-label={`Connect with ${member.name} on LinkedIn`}



                >



                  <Icon name="linkedin" />



                </a>



              </article>



            ))}



          </div>



        </section>



        <section className="team-bring">



          <h2 className="team-section-title team-section-badge">What We Bring <span className="team-heading-accent">Together</span></h2>



          <div className="team-bring-grid">



            {bringTogether.map((item) => (



              <div key={item.title} className="team-bring-item">



                <span className="team-bring-icon">



                  <Icon name={item.icon} color={item.color} />



                </span>



                <div className="team-bring-copy">



                  <h3 style={{ color: item.color }}>{item.title}</h3>



                  <p>{item.desc}</p>



                </div>



              </div>



            ))}



          </div>



        </section>



        <section className="team-how">

          <div className="team-expert-button-slot" data-expert-button-slot />



          <h2 className="team-section-title team-section-badge">How We <span className="team-heading-accent">Work</span></h2>



          <div className="team-how-grid">



            {howWeWork.map((item) => (



              <div key={item.title} className="team-how-card">



                <span className="team-how-icon" style={{ borderColor: item.color }}>



                  <Icon name={item.icon} color={item.color} />



                </span>



                <h3 style={{ color: item.color }}>{item.title}</h3>



                <p>{item.desc}</p>



              </div>



            ))}



          </div>



        </section>



      </main>

      <Footer />
    </>

  );
}
