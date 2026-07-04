import {FaGithub, FaLinkedin} from 'react-icons/fa6';
import {HiAcademicCap, HiBuildingOffice2, HiCalendar, HiFlag, HiMap, HiSparkles} from 'react-icons/hi2';
import {SiLeetcode, SiSubstack} from 'react-icons/si';
import {TypeAnimation} from 'react-type-animation';

import heroImage from '../images/Bukit Batok.jpg';
import blueShieldConsulting from '../images/portfolio/BlueShield Consulting.jpg';
import echoChat from '../images/portfolio/EchoChat.png';
import marketResearchExternship from '../images/portfolio/HappySneeze Logo.png';
import jeaTechnologyDashboard from '../images/portfolio/JEA Logo.png';
import leapDashboard from '../images/portfolio/LEAP Logo.png';
import legalLingo from '../images/portfolio/Legal Lingo.jpg';
import qinetChurnAnalysis from '../images/portfolio/QiNet Logo.png';
import rmsBAPracticuum from '../images/portfolio/Revenue Management Solutions.png';
import weCareJaxAutomation from '../images/portfolio/WeCareJax Logo.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  Bookmark,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  LinkedInPost,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineEntry,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Aadit Kamat',
  description: "Aadit Kamat's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  LinkedInPosts: 'Featured LinkedIn Posts',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Bookmarks: 'bookmarks',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: 'Aadit Kamat',
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a{' '}
        <TypeAnimation
          cursor={false}
          sequence={[
            4000,
            'Backend Engineer',
            500,
            'Frontend Engineer',
            500,
            'Full Stack Engineer',
            500,
            'Application Enterprise Engineer',
          ]}
          style={{fontWeight: 'bold', color: 'white'}}
        />{' '}
        based in Singapore, currently building scalable and efficient enterprise solutions through{' '}
        <strong className="text-stone-100">Tata Consultancy Services</strong> on enterprise-level Java projects.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
const birthDate = '1996-12-18';
const YEARS_IN_MS = 365.25 * 24 * 60 * 60 * 1000;
const ageInYears = Math.floor((Date.now() - Date.parse(birthDate)) / YEARS_IN_MS);
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hey there! As a seasoned full-stack developer with over 2 years of experience, I've had the opportunity to work across various technical domains within the IT sector, including test automation, mobile and web application development, and data analytics. Currently, I'm working on enterprise-level Java projects for a Government Client at Tata Consultancy Services.
  Before starting my career afresh in Singapore, I earned a Master's in Information Systems from the University of Florida. My graduate studies equipped me with core competencies in data analytics and provided a comprehensive understanding of how businesses can leverage data and systems to drive success.
  I feel fulfilled when I apply my technical expertise to address critical business problems: whether it's developing a mobile app for a Miami-based environmental non-profit to educate residents on recycling initiatives or creating a dashboard for a Virginia-based non-profit to showcase energy-saving KPIs to its stakeholders.`,
  aboutItems: [
    {label: 'Location', text: 'Bukit Batok, Singapore', Icon: HiMap},
    {label: 'Age', text: `${ageInYears}`, Icon: HiCalendar},
    {label: 'Nationality', text: 'Singaporean', Icon: HiFlag},
    {label: 'Interests', text: 'Effective Altruism, Spirituality, Podcasts, Music (Hindi/English)', Icon: HiSparkles},
    {label: 'Education', text: 'University of Florida, National University of Singapore', Icon: HiAcademicCap},
    {label: 'Employment', text: 'Tata Consultancy Services', Icon: HiBuildingOffice2},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Spring Boot (Java)',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 7,
      },
      {
        name: 'Expo',
        level: 7,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Jupyter (Python)',
        level: 8,
      },
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'Excel',
        level: 6,
      },
      {
        name: 'R',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'QiNet: Promoting Retailer Loyalty',
    description:
      'After cleaning the retailer data, doing feature engineering before performing the RFMV (Recency/Frequency/Monetary/Volatility) segmentation and preparing the data for customer churn modelling for different Qinet retailers, I also devised intervention strategies based on the behavioral archetypes obtained from the soft churn risk profiles. Based on all this analysis, I recommended how the different market segments can be targeted and how much retailer sales can be increased as a result of shifts in marketing strategy',
    url: 'https://www.linkedin.com/posts/activity-7407957931507310592-CsFs?utm_source=share&utm_medium=member_desktop&rcm=ACoAACJCXLIBCrAgO5O1jUHsqQ-ZoRnlyd4XOtE',
    image: qinetChurnAnalysis,
  },
  {
    title: 'LEAP Dashboard',
    description:
      "I managed the frontend developed of a dashboard showcasing energy efficiency KPIs that effectively showcases the impact of LEAP's programs within the state of Virginia.I transitioned from using local data to fetching data dynamically from LEAP's Monday.com board via its GraphQL APIs.",
    url: 'https://dashboard-leap.netlify.app/',
    image: leapDashboard,
  },
  {
    title: 'JEA Technology Scorecard',
    description:
      "I transformed and loaded data from Excel sheets tracking JEA's employee performance-related metrics into PowerBI and created visuals to better demonstrate progress along metrics pertaining to employee performance, customer satisfaction, and business excellence to employees.",
    url: 'https://docs.google.com/presentation/d/1yCiyHcRhLLPspg4zvtwjgle7KtiDqY71_t7CVwZrdmA/',
    image: jeaTechnologyDashboard,
  },
  {
    title: 'Automating Client Feedback Mechanism - WeCareJax',
    description:
      'I created a workflow using Microsoft Power Automate that would allow WeCareJax to automatically populate their Salesforce dashboards with personal information obtained from patients through survey forms sent to patients post-visit and also investigated ways to improve survey response rates using Mogli, a Salesforce native app that provides bulk messaging capabilities.',
    url: 'https://drive.google.com/file/d/1ckWJeYl6TEJGMoUiwejcnQj58yc9I6zM/edit?pli=1',
    image: weCareJaxAutomation,
  },
  {
    title: 'BlueShield Consulting',
    description:
      'I conducted market analysis and competitive overview to help BlueShield - a Gainesville based Therapeutics startup - to understand the market for its novel immunotherapy based treatment for Depression',
    url: 'https://www.science.org/doi/full/10.1126/science.add7150?casa_token=lngchMBZQ2oAAAAA%3AMiX-hHddparHoLFBXhszlQu4YdhiKR9XoqpFa85i6-sZmcDfvJCqDkcfFGwGe79X-89pTHNj6oPZ',
    image: blueShieldConsulting,
  },
  {
    title: 'LegalLingo',
    description:
      'I collaborated with a cross-university team to develop LegalLingo, a Chrome extension that analyzes legal language (e.g., Terms of Service, Privacy Policies) for clauses that are not user friendly using Gemma 2.0 APIs and Parcel',
    url: 'https://github.com/lchin21/Legal-Lingo',
    image: legalLingo,
  },
  {
    title: 'Echo Chat App',
    description:
      'I designed and implemented a messaging module for the mobile app to improve user communication, integrating it seamlessly into the platform. Additionally, I improved code quality and streamlined the development process.',
    url: 'https://github.com/ufosc/Echo-Chat',
    image: echoChat,
  },
  {
    title: 'Happy Sneeze Market Research Externship',
    description:
      'I conducted market analysis for the urogynecology sector and demonstrated how Happy Sneeze could expand market reach by identifying potential partners and outlining a targeted outreach strategy.',
    url: 'https://www.loom.com/share/25d66c093dde4b3591940f21416d9025?sid=bb9b3d11-8a2c-471f-a78b-45fa917e791d',
    image: marketResearchExternship,
  },
  {
    title: 'Comparing Benchmarking Measures for Financial Data',
    description:
      'I performed Exploratory Data Analysis(EDA) on 6000+ records to establish relationships between different key metrics such as and leveraged the Data Envelopment Analysis (DEA) algorithm to benchmark efficiency based on costs and sales, enabling stakeholders to identify underperforming restaurants',
    url: 'https://github.com/aaditkamat/QMB6945-RMS-Project',
    image: rmsBAPracticuum,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineEntry[] = [
  {
    date: 'December 2024',
    location: 'Warrington College of Business, University of Florida',
    title: 'Masters in Information Systems and Operations Research (MSISOM)',
    content: (
      <p>
        As a graduate student under the Data Science track, I learnt how to apply <strong>data science </strong>
        techniques to solve real-world business problems. I took courses focussing on areas such as
        <strong> databases, data mining, and business intelligence</strong>. I also worked on consulting projects with
        non profit organizations to help them improve their operations and make data-driven decisions
      </p>
    ),
  },
  {
    date: 'June 2021',
    location: 'School of Computing, National University of Singapore',
    title: 'Bachelor of Computing (BComp. Honours) in Computer Science ',
    content: (
      <p>
        This program gave me a foundation for all my technical explorations. I not only learnt software engineering
        skills but also the fundamentals underlying computer systems like
        <strong> OS, Computer Architecture in addition to taking electives in AI and Machine Learning</strong>.
      </p>
    ),
  },
];

export const experience: TimelineEntry[] = [
  {
    date: 'June 2025 - Present',
    location: 'Tata Consultancy Services',
    title: 'Enterprise Application Engineer',
    content: (
      <p>
        I am overseeing the deployment and production support for an{' '}
        <u>
          <a href="https://struts.apache.org/"> Apache Struts MVC framework </a>
        </u>{' '}
        based intranet platform used by a Singapore Government agency to serve multiple legal documents such as caveats,
        private property instruments and land titles for secure storage and processing. <br />I also charted a
        comprehensive migration plan for transitioning from the legacy Struts to a modern Angular & Spring Boot based
        tech stack in alignment with GovTech modernization initiatives. <br /> As the systems are handled by multiple
        vendors, my role requires cross functional collaboration with Business Analyst, Database Administrators, IT
        Admins and Middleware personnel not just from my company but also from other vendors as I patch critical
        application issues, improving application reliability and user satisfaction.
      </p>
    ),
  },
  {
    date: 'April 2025 - June 2025',
    location: 'Florida Community Innovation',
    title: 'Lead Software Engineer',
    content: (
      <p>
        I led the development of a mobile app called{' '}
        <u>
          <a href="https://recyclepedia.info">Recyclepedia</a>
        </u>{' '}
        in collaboration with a Miami based non profit called{' '}
        <u>
          <a href="https://dreamingreen.org/">Dream in Green</a>
        </u>{' '}
        geared towards residents in the Miami Dade county area, empowering them with knowledge about recycleable
        materials, curbside recycling program and drop off locations in their vicinity as well as recycling initiatives
        organized by community partners in Miami. The app has features like{' '}
        <u>
          <a href="https://www.recyclepedia.info/games">educational games</a>
        </u>{' '}
        and designs making the app friendly for younger audiences as well as a chatbot that answers questions about
        recycling and environmental sustainability. It is currently in{' '}
        <u>
          <a href="https://youtu.be/TSohnva_NmQ">beta testing for users based in the US </a>
        </u>
      </p>
    ),
  },
  {
    date: 'June 2024 - August 2024',
    location: 'Getzler Henrich & Associates LLC',
    title: 'Data Analyst Intern',
    content: (
      <>
        <p>
          I teamed up with senior analysts in the firm to understand how they come up with customized 13-week cash flow
          models for the middle-market financially distressed companies they take on as clients. Based on this
          understanding, I created a data dictionary that would capture and define the components common to these models
          and proposed a service that would automate the generation of models based on the data dictionary, reducing the
          FP&A time and increasing the forecasting accuracy
        </p>
      </>
    ),
  },
  {
    date: 'February 2024 - May 2024',
    location: 'J. Crayton Pruitt Family Department of Biomedical Engineering, University of Florida',
    title: 'Graduate Research Assistant',
    content: (
      <p>
        I assisted{' '}
        <u>
          <a href="https://www.eng.ufl.edu/about/contact/college-directory/name/xiao-fan/">Dr Xiao Fan</a>
        </u>{' '}
        - an assistant professor at the J.Pruitt Family Department of Biomedical Engineering who heads the{' '}
        <u>
          <a href="https://xiaofan-lab.github.io/">Fan lab at the University of Florida (UF)</a>
        </u>{' '}
        - with a project related to her research on rare genetic diseases. The project involved studying the association
        between variant pathogenicity and properties of proteins present within these genetic variants. I also leveraged
        the{' '}
        <u>
          <a href="https://it.ufl.edu/rc/hipergator/">UF HiPerGator</a>
        </u>{' '}
        to transcribe and annotate large scale genomic datasets obtained from NIH databases.
      </p>
    ),
  },
  {
    date: 'March 2022 - September 2022',
    location: 'Visa Worldwide Pte Ltd',
    title: 'Full Stack Software Engineer',
    content: (
      <>
        <p>
          I engineered backend APIs in Spring Boot using a microservice architecture, used by major banking institutions
          within South Asia to build their own Accounts Based Payment solutions by leveraging the{' '}
          <u>
            <a href="https://developer.visa.com/apibrowser/#segment=Merchants">Visa Payment Network (VisaNet)</a>
          </u>{' '}
          infrastructure. I also developed the frontend interface for an internal portal used by developers to
          dynamically access and manipulate data residing within mobile apps in the{' '}
          <u>
            <a href="https://www.visa.co.uk/visa-everywhere/innovation-centers/singapore.html">
              Singapore Innovation Centre
            </a>
          </u>
          , demonstrating real-time payment processing capabilities to clients.
        </p>
      </>
    ),
  },
  {
    date: 'May 2021 - March 2022',
    location: 'Shopee Singapore Pte Ltd',
    title: 'Quality Assurance Engineer',
    content: (
      <>
        <p>
          This was my first full time role after graduating from NUS. I led the test automation efforts for the
          <u>
            <a href="https://seller.shopee.sg/edu/article/7063">Seller Promotion modules</a>
          </u>{' '}
          within the Shopee Android app such as Flash Sales, Bundle Deal and Add On Deal with listing that are used by
          millions of users daily. I added and maintained over a 100 test cases for these modules, investigating the
          root cause for the issues across different layers of the stack - whether at the application layer or the logs
          within the Golang containerized environments in the internal servers that interact with the application. Aside
          from my engineering duties, I also collaborated with Quality Assurance Engineers from other departments to
          come up with onboarding material to train incoming engineers in test automation tools and techniques.
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Anil Arora, Delivery Head of Tata Consultancy Services APAC Public Services commending our team for the effort on an application revamp',
      text: `I just wanted to take a moment to acknowledge and truly appreciate the outstanding work everyone has put into this (Government project). Completing such a challenging task, especially considering
      the technical hurdles and timelines, is a testament to the team's dedication and collaboration.

      Thank you all for your relentless drive and for consistently rising to the occasion. Your perseverance and expertise are what make these successes possible. Keep up the excellent work, it's inspiring to see what we can accomplish together.`,
      image: 'https://res.cloudinary.com/dixfcmuuj/image/upload/v1778300754/Anil_Arora_Profile_Picture_ixsqey.jpg',
    },
    {
      name: 'Chan Woei Shyong, CEO of Qinet.AI',
      text: `Congrats Aadit and team on the excellent work. The effort, sacrifices, and determination you all brought to the project clearly showed in the quality of the analysis and insights.
It was a meaningful way to wrap up 2025, ending the year with a strong achievement and a powerful new set of skills. Data, analytics, and the thoughtful use of AI tools are a potent mix, and your presentation demonstrated that well.
Wishing you and the team a fantastic 2026 ahead. May the year bring new areas of exploration, bold breakthroughs, and even greater heights.`,
      image:
        'https://static.wixstatic.com/media/ddcbe1_3aadc819c08041e5a64c3e435c5ce526~mv2.png/v1/fill/w_506,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.png',
    },
    {
      name: 'Caroline Nickerson, PhD, Executive Director of Florida Community Innovation',
      text: `Aadit is the best! Not only does he have technical know-how, but he is also kind, considerate, and a great mentor to younger students. He’s currently building an app that will improve recycling education in Florida, and he’s deftly able to communicate with expert and nonexpert audiences to create tech that serves social good. Anyone would be lucky to work with Aadit!`,
      image: 'https://carolinenickerson.com/wp-content/uploads/2024/03/img_3455d.jpg',
    },
    {
      name: 'Dr. Xiao Fan, Assistant Professor at the University of Florida',
      text: `Aadit is an independent, self-disciplined, diligent student. When he expressed a strong interest in pursuing data science projects, I introduced him to a bioinformatics project. Despite not having formal training in biology, he quickly grasped the main concepts of the project and data representation of the biology entities. Showing great enthusiasm, Aadit thoroughly explored the datasets and successfully extracted the required information for his project. I am confident that Aadit will excel in his career pursuits and make meaningful contributions to his chosen field of study.`,
      image:
        'https://www.eng.ufl.edu/wp-content/uploads/connections-images/xiao-fan/Xiao-Fan_1_29-Aug-2024-ba859c74c9a9a2a352927cfc84a910f2.jpg',
    },
    {
      name: 'Shwetha Ravi P.S., Software Engineer - Cloud & Distributed Systems at Morgan Stanley',
      text: 'Aadit is a talented software engineer and picks up new skills at an impressive rate. He is also responsible, communicative and passionate about self development. Would highly recommend having him on your team.',
      image: 'https://res.cloudinary.com/dixfcmuuj/image/upload/v1762186556/Ravi_Shwetha_nzpjqu.jpg',
    },
    {
      name: 'Robin Loh, Backend Software Engineer at Grab',
      text: `I was Aadit's mentor during NUS Orbital 2018, which is a self-directed module offered every summer by NUS School of Computing. Together with his teammate, both of them worked on the PlanItRight project, which is a web application that plans itineraries based on the user's travel plans and preferences.
      Aadit demonstrated great enthusiasm in learning software development skills relevant to his project. He successfully defined the functionalities suitable for the intended users in this project and he crafted simple user and developer guides for the web application. There were also many clear and useful illustrations implemented in the web application, such as the use of timeline to visualise the itineraries in a chronological order.
      Throughout the 3 months of mentorship, he displayed good analytical and interpersonal skills. He comprehended new concepts very quickly and he structured his approaches clearly to accomplish his outcomes. I strongly believe that he has the capability to work independently on tough challenges given his inquisitiveness for self-improvement and for developing his technical expertise further.`,
      image: 'https://res.cloudinary.com/dixfcmuuj/image/upload/v1762186556/Robin_Loh_lh9bur.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Hit me up for career and project collaboration opportunities, or if you just want to have a chat 😊',
  items: [
    {
      type: ContactType.Email,
      text: 'aaditkmt@gmail.com',
      href: 'mailto:aaditkmt@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bukit Batok, SG',
      href: 'https://www.google.com/maps/place/Bukit+Batok+Street+25,+Block+289A,+Singapore/@1.344666,103.75792,17z',
    },
    {
      type: ContactType.Github,
      text: '@aaditkamat',
      href: 'https://github.com/aaditkamat',
    },
  ],
};

/**
 * Social items
 */
const strataScratchIcon = (
  <svg
    className="h-5 w-5 align-baseline sm:h-6 sm:w-6"
    fill="none"
    viewBox="0 0 38 20"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m24.159 7.895.016.568v3.305l-.004.321c-.028 3.027-2.218 5.495-4.88 5.495-2.664 0-4.854-2.464-4.881-5.495l-.004-2.118-2.325.027.008 2.103c.036 4.355 3.266 7.895 7.201 7.895 3.935 0 7.166-3.54 7.2-7.895l-.01-4.194c.027-3.027 2.217-5.49 4.88-5.49s4.853 2.463 4.88 5.49l.024 2.091h2.304l-.008-2.103C38.53 3.54 35.3 0 31.36 0c-3.936 0-7.166 3.54-7.201 7.895Z"
      fill="currentColor"></path>
    <path
      d="m12.077 7.895-.004.482h-.004v3.775c-.027 3.023-2.198 5.432-4.86 5.432-2.663 0-4.853-2.464-4.881-5.495l-.004-2.118L0 9.998l.004 2.103C.044 16.46 3.274 20 7.209 20s7.165-3.54 7.2-7.895l-.015-4.194c.031-3.028 2.221-5.49 4.88-5.49 2.663 0 4.853 2.462 4.88 5.49l.024 2.091h2.305l-.004-2.103C26.444 3.54 23.213 0 19.279 0c-3.936 0-7.166 3.54-7.202 7.895Z"
      fill="currentColor"></path>
  </svg>
);
export const socialLinks: Social[] = [
  {
    label: 'GitHired',
    icon: <FaGithub className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />,
    href: 'https://www.githired.tech/developer/aaditkamat',
  },
  {
    label: 'LeetCode',
    icon: <SiLeetcode className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />,
    href: 'https://leetcode.com/u/aaditkamat/',
  },
  {label: 'StrataScratch', icon: strataScratchIcon, href: 'https://platform.stratascratch.com/user/aaditkamat'},
  {
    label: 'LinkedIn',
    icon: <FaLinkedin className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />,
    href: 'https://www.linkedin.com/in/aaditkamat/',
  },
  {
    label: 'Substack',
    icon: <SiSubstack className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />,
    href: 'https://aadit.substack.com/',
  },
];

/**
 * LinkedIn Posts
 */
export const linkedInPosts: LinkedInPost[] = [
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7193707854757806080',
    title: 'Inaugural AIS Case Competition',
  },
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7407957930207072256',
    title: 'Rise 2.0 BCG Final Presentation',
  },
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304481996905349120',
    title: 'LEAP Portal Presentation at the Student Sustainability Summit',
  },
];

/**
 * Bookmarks
 */
export const bookmarks: Bookmark[] = [
  {
    id: '1',
    name: 'discode',
    url: 'https://app.discode.ai/chats/fd29179e-4435-4dc1-b4c9-422c4d98cc9b',
  },
  {
    id: '2',
    name: 'Find my home - Explore our rental properties – Cove',
    url: 'https://cove.sg/listings?availability=within-2-days&min-price=500&max-price=1500',
  },
  {
    id: '3',
    name: 'Advocacy',
    children: [
      {
        id: '4',
        name: 'AWARE Singapore',
        url: 'https://www.aware.org.sg/',
      },
    ],
  },
  {
    id: '6',
    name: 'Altruism',
    children: [
      {
        id: '7',
        name: 'ItsRainingRaincoats |',
        url: 'https://www.itsrainingraincoats.com/',
      },
      {
        id: '8',
        name: 'TWC2 – TWC2 promotes equitable treatment for migrant workers in Singapore.',
        url: 'https://twc2.org.sg/',
      },
    ],
  },
  {
    id: '9',
    name: 'Books',
    children: [
      {
        id: '10',
        name: 'Stripe Press — Ideas for progress | Singapore',
        url: 'https://press.stripe.com/',
      },
      {
        id: '11',
        name: 'Libert',
        url: 'https://libert.glitch.me/',
      },
      {
        id: '12',
        name: 'Home Page | W. W. Norton & Company',
        url: 'https://wwnorton.com/',
      },
      {
        id: '13',
        name: 'Five Books | The Best Books Recommended by Leading Experts',
        url: 'https://fivebooks.com/',
      },
      {
        id: '14',
        name: 'Download your free e-books! - Scott H Young',
        url: 'https://www.scotthyoung.com/blog/subscription-complete/?ck_subscriber_id=2787916740',
      },
      {
        id: '15',
        name: 'Home | Bill Gates',
        url: 'https://www.gatesnotes.com/',
      },
      {
        id: '16',
        name: 'The StoryGraph',
        url: 'https://app.thestorygraph.com/',
      },
      {
        id: '17',
        name: 'Goguru Times Rewards',
        url: 'https://www.goguru.com.sg/timesrewards',
      },
    ],
  },
  {
    id: '18',
    name: 'COVID-19',
    children: [
      {
        id: '19',
        name: "10 Saddest Arijit Singh's Songs to soothe your heart | IWMBuzz",
        url: 'https://www.iwmbuzz.com/music/snippets-music/10-saddest-arijit-singhs-songs-soothe-heart/2020/03/31',
      },
      {
        id: '20',
        name: 'Coronavirus: How to make your own hand sanitizer and cleaning wipes - Business Insider',
        url: 'https://www.businessinsider.com/coronavirus-how-to-make-hand-sanitizer-and-cleaning-wipes-2020-3?utm_campaign=sf-bi-ti&utm_source=facebook.com&utm_medium=social&fbclid=IwAR33b6j8f3F_F_Q7UfF-zWe7MT8tlQ1inxofEx43tupgFeIW8WAbG4qOcKE',
      },
      {
        id: '21',
        name: 'COVID-19 Dashboard',
        url: 'https://trekhleb.github.io/covid-19/',
      },
      {
        id: '22',
        name: 'https://sgcovidcheck.com',
        url: 'https://sgcovidcheck.com/',
      },
      {
        id: '23',
        name: 'MOH | Updates on COVID-19 (Coronavirus Disease 2019) Local Situation',
        url: 'https://www.moh.gov.sg/covid-19',
      },
      {
        id: '24',
        name: 'Novel coronavirus (COVID-19) situation',
        url: 'https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd',
      },
      {
        id: '25',
        name: "10 Saddest Arijit Singh's Songs to soothe your heart | IWMBuzz",
        url: 'https://www.iwmbuzz.com/music/snippets-music/10-saddest-arijit-singhs-songs-soothe-heart/2020/03/31',
      },
    ],
  },
  {
    id: '26',
    name: 'Education',
    children: [
      {
        id: '27',
        name: 'Learning',
        children: [
          {
            id: '28',
            name: 'Learn Anything',
            url: 'https://learn-anything.xyz/',
          },
          {
            id: '29',
            name: "ThoughtCo.com is the World's Largest Education Resource",
            url: 'https://www.thoughtco.com/',
          },
          {
            id: '30',
            name: 'Stages of learning',
            url: 'https://www.freecodecamp.org/news/stages-of-learning/',
          },
          {
            id: '31',
            name: 'Perlego | Your Online University Library 📚',
            url: 'https://www.perlego.com/',
          },
          {
            id: '32',
            name: 'iDoRecall | Create flashcards linked to your study materials',
            url: 'https://idorecall.com/',
          },
          {
            id: '33',
            name: 'Online Courses & Lectures for Home Study and Lifelong Learning',
            url: 'https://www.thegreatcourses.com/',
          },
          {
            id: '34',
            name: 'Wait But Why',
            url: 'https://waitbutwhy.com/',
          },
          {
            id: '35',
            name: 'The Browser',
            url: 'https://thebrowser.com/',
          },
          {
            id: '36',
            name: 'Podcast Notes -',
            url: 'https://podcastnotes.org/',
          },
          {
            id: '37',
            name: 'StuDocu - Free summaries, past exams & lecture notes',
            url: 'https://www.studocu.com/',
          },
          {
            id: '38',
            name: 'Machine Learning Bootcamp: Best Courses to Learn Artificial Intelligence',
            url: 'https://www.springboard.com/workshops/ai-machine-learning-career-track/?utm_source=linkedin&utm_medium=inmail&utm_campaign=mec-traffic&utm_content=mec-traffic-career-next-level&utm_term=learn-more',
          },
          {
            id: '39',
            name: 'The Online Books Page',
            url: 'https://onlinebooks.library.upenn.edu/',
          },
          {
            id: '40',
            name: 'Portfolio | Wei Hao Khoong',
            url: 'https://weihao94.github.io/',
          },
          {
            id: '41',
            name: 'Kialo Edu - The tool to teach critical thinking and rational debate',
            url: 'https://www.kialo-edu.com/',
          },
          {
            id: '42',
            name: '2020 12th Annual Tapping World Summit | Video Series - Nick Orther',
            url: 'https://www.thetappingsolution.com/2020VideoSeries/nick-ortner-1time.php?contactId=6343857&inf_contact_key=0398c40b77029444e90a3e54946741ae837ca8eedd5950759fe76410ed6224c9&inf_field_BrowserLanguage=en-US%2Cen%3Bq%3D0.9&inf_field_FirstName=Aadit&inf_field_Email=aadit.k12%40gmail.com',
          },
          {
            id: '43',
            name: 'Wiki Encyclopedia of Everything - Everipedia',
            url: 'https://everipedia.org/',
          },
          {
            id: '44',
            name: 'Welcome | Barbara Oakley',
            url: 'https://barbaraoakley.com/',
          },
          {
            id: '45',
            name: 'PodClips - Discover the Best Podcast Clips',
            url: 'https://podclips.com/',
          },
          {
            id: '46',
            name: 'LinkedIn Learning: Online Courses for Creative, Technology, Business Skills',
            url: 'https://www.linkedin.com/learning/',
          },
          {
            id: '47',
            name: 'Four Minute Books - Learn From 1,000+ of the Best Books for Free',
            url: 'https://fourminutebooks.com/',
          },
          {
            id: '48',
            name: 'Formal Logic',
            url: 'https://logic-text.eu/index.html',
          },
          {
            id: '49',
            name: 'GrowthMentor',
            url: 'https://app.growthmentor.com/search',
          },
        ],
      },
      {
        id: '50',
        name: 'University',
        children: [
          {
            id: '51',
            name: 'NUS',
            children: [
              {
                id: '52',
                name: 'Internships',
                children: [
                  {
                    id: '53',
                    name: 'Online Academy | JPMorgan Chase & Co.',
                    url: 'https://careers.jpmorgan.com/global/en/students/programs/online-academy',
                  },
                  {
                    id: '54',
                    name: 'CS9: Problem-Solving for the CS Technical Interview',
                    url: 'http://web.stanford.edu/class/cs9/',
                  },
                  {
                    id: '55',
                    name: "Google Recruiters Say Using the 'X-Y-Z Formula' on Your Resume Will Improve Your Odds of Getting Hired at Google | Inc.com",
                    url: 'https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html?cid=sf01003',
                  },
                  {
                    id: '56',
                    name: 'Google Tech Dev Guide',
                    url: 'https://techdevguide.withgoogle.com/',
                  },
                  {
                    id: '57',
                    name: 'AlgoExpert | 77 Video Explanations of Popular Interview Questions',
                    url: 'https://www.algoexpert.io/joma?fbclid=IwAR1CiU-UEd4GciV6xm6SVbskKFA-vMvXSgJzsLY6fFzJ_iwZ_BkWv_A4rt8',
                  },
                  {
                    id: '58',
                    name: 'ResumeHub',
                    url: 'https://resumehub.org/',
                  },
                  {
                    id: '59',
                    name: 'Tech Careers: New Year Gift - Curated List of Top 75 LeetCode Questions to Save Your Time - Blind',
                    url: 'https://www.teamblind.com/article/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU?utm_source=share&utm_medium=ios_app',
                  },
                  {
                    id: '60',
                    name: 'Find email addresses in seconds • Hunter (Email Hunter)',
                    url: 'https://hunter.io/',
                  },
                  {
                    id: '61',
                    name: 'meQulibrium + Goldman Sachs | meQuilibrium',
                    url: 'https://www.mequilibrium.com/gsrecruiting/',
                  },
                  {
                    id: '62',
                    name: 'How I interviewed for 5 top companies in 5 days and got job offers from all of them',
                    url: 'https://www.techinasia.com/talk/5-companines-5-days-5-offers',
                  },
                  {
                    id: '63',
                    name: 'Who Is Hiring | Levels.fyi',
                    url: 'https://www.levels.fyi/hiring/',
                  },
                  {
                    id: '64',
                    name: 'Welcome to NUS TalentConnect!',
                    url: 'https://nus-csm.symplicity.com/',
                  },
                  {
                    id: '65',
                    name: 'Practice Mock Interviews & Coding Problems - Land Top Jobs | Pramp',
                    url: 'https://www.pramp.com/',
                  },
                  {
                    id: '66',
                    name: 'Vettery — Recruiting, upgraded',
                    url: 'https://www.vettery.com/',
                  },
                  {
                    id: '67',
                    name: 'MassApply',
                    url: 'https://www.massapply.com/dashboard',
                  },
                  {
                    id: '68',
                    name: 'NUS IT',
                    children: [
                      {
                        id: '69',
                        name: 'Swagger UI',
                        url: 'https://forum.tufin.com/support/kc/latest/securetrack/apidoc/',
                      },
                    ],
                  },
                  {
                    id: '70',
                    name: 'STARS @ SGInnovate | Home',
                    url: 'https://stars.sginnovate.com/',
                  },
                ],
              },
              {
                id: '71',
                name: 'Research',
                children: [
                  {
                    id: '72',
                    name: 'NUS Libraries Proxy Bookmarklet',
                    url: "javascript:void(location.href='http://libproxy1.nus.edu.sg/login?url='+location.href);",
                  },
                  {
                    id: '73',
                    name: 'dblp: computer science bibliography',
                    url: 'https://dblp.org/',
                  },
                  {
                    id: '74',
                    name: 'arXiv.org e-Print archive',
                    url: 'https://arxiv.org/',
                  },
                  {
                    id: '75',
                    name: 'Google Scholar',
                    url: 'https://scholar.google.com/',
                  },
                  {
                    id: '76',
                    name: 'CiteSeerX',
                    url: 'http://citeseer.ist.psu.edu/index;jsessionid=E78B80BC8ACE38E916B40AD5CED2A88B',
                  },
                  {
                    id: '77',
                    name: 'ACM Digital Library',
                    url: 'https://dl.acm.org/',
                  },
                  {
                    id: '78',
                    name: 'Collate, SoC style',
                    url: 'https://nuscomputingdev.github.io/SoCollate/printing.html',
                  },
                ],
              },
              {
                id: '79',
                name: 'Academics',
                children: [
                  {
                    id: '80',
                    name: 'https://yangshun.github.io/nus-bookmarks/',
                    url: 'https://yangshun.github.io/nus-bookmarks/',
                  },
                  {
                    id: '81',
                    name: 'NUSMods',
                    url: 'https://nusmods.com/timetable',
                  },
                  {
                    id: '82',
                    name: 'NUS Libraries Proxy Bookmarklet',
                    url: "javascript:void(location.href='http://libproxy1.nus.edu.sg/login?url='+location.href);",
                  },
                ],
              },
              {
                id: '83',
                name: 'CS2107-CTFd-2021-Sem2',
                url: 'https://cs2107-ctfd-i.comp.nus.edu.sg:8000/challenges',
              },
              {
                id: '84',
                name: 'Discrete logarithm calculator',
                url: 'https://www.alpertron.com.ar/DILOG.HTM',
              },
            ],
          },
          {
            id: '85',
            name: 'UNC Exchange',
            children: [
              {
                id: '86',
                name: '#heelsabroad',
                url: 'https://heelsabroad.unc.edu/index.cfm?FuseAction=Abroad.Home',
              },
              {
                id: '87',
                name: '10 of the Best Websites to Buy UNC Textbooks - OneClass Blog',
                url: 'https://oneclass.com/blog/university-of-north-carolina-chapel-hill/584-10-of-the-best-websites-to-buy-unc-textbooks.en.html',
              },
              {
                id: '88',
                name: 'Rate My Professors - Review Teachers and Professors, School Reviews, College Campus Ratings',
                url: 'https://www.ratemyprofessors.com/',
              },
              {
                id: '89',
                name: 'ConnectCarolina',
                url: 'https://pa.cc.unc.edu/psc/paprd/EMPLOYEE/EMPL/c/NUI_FRAMEWORK.PT_LANDINGPAGE.GBL',
              },
              {
                id: '90',
                name: 'Sakai @ UNC :: Welcome',
                url: 'https://sakai.unc.edu/welcome/',
              },
              {
                id: '91',
                name: "Chegg - Save up to 90% on Textbooks | Don't Pay Full Price for Textbooks",
                url: 'https://www.chegg.com/',
              },
              {
                id: '92',
                name: 'IMLeagues',
                url: 'https://www.imleagues.com/spa/account/subscribenotification?schoolId=9d3004d3513746cba3b1b1f88c5caf13&refUrl=http%3a%2f%2fwww.imleagues.com%2fspa%2fmember%2fplayer',
              },
              {
                id: '93',
                name: 'COMP 455',
                children: [
                  {
                    id: '94',
                    name: 'COMP 455 Links',
                    url: 'https://www.cs.unc.edu/~plaisted/comp455/',
                  },
                  {
                    id: '95',
                    name: 'COMP 455-002 Spring 2019',
                    url: 'https://www.cs.unc.edu/~otternes/comp455/',
                  },
                ],
              },
              {
                id: '96',
                name: 'COMP 533',
                children: [
                  {
                    id: '97',
                    name: 'www.cs.unc.edu/~dewan/533/current/index.html',
                    url: 'http://www.cs.unc.edu/~dewan/533/current/index.html',
                  },
                  {
                    id: '98',
                    name: 'Welcome to NUS Distributed Systems DYOM! | 6.824 DYOM',
                    url: 'https://nusdistsys.github.io/',
                  },
                  {
                    id: '99',
                    name: 'Overview (Java SE 10 & JDK 10 )',
                    url: 'https://docs.oracle.com/javase/10/docs/api/overview-summary.html',
                  },
                ],
              },
              {
                id: '100',
                name: 'MATH 233',
                children: [
                  {
                    id: '101',
                    name: 'Math Help Center | Department of Mathematics',
                    url: 'https://math.unc.edu/undergraduate/math-help-center/',
                  },
                  {
                    id: '102',
                    name: 'Home :: Free Homework Help and Answers :: Slader',
                    url: 'https://www.slader.com/',
                  },
                  {
                    id: '103',
                    name: 'Rate My Professors - Review Teachers and Professors, School Reviews, College Campus Ratings',
                    url: 'https://www.ratemyprofessors.com/search.jsp?query=stefan+jenglinski',
                  },
                  {
                    id: '104',
                    name: 'Pearson Sign In',
                    url: 'https://pi.pearsoned.com/v1/piapi/piui/signin?client_id=dN4bOBG0sGO9c9HADrifwQeqma5vjREy&okurl=https:%2F%2Fportal.mypearson.com%2Fcourse-home&siteid=8313',
                  },
                  {
                    id: '105',
                    name: '3D Calculator - GeoGebra',
                    url: 'https://www.geogebra.org/3d',
                  },
                ],
              },
              {
                id: '106',
                name: 'Apparel, Gifts & Textbooks | The UNC Student Stores',
                url: 'https://unc.bncollege.com/shop/unc/home',
              },
              {
                id: '107',
                name: 'Learning Center',
                children: [
                  {
                    id: '108',
                    name: 'Tips & Tools - Learning Center',
                    url: 'https://learningcenter.unc.edu/tips-and-tools/',
                  },
                  {
                    id: '109',
                    name: 'Test Prep Resources - Learning Center',
                    url: 'https://learningcenter.unc.edu/services/test-prep-resources/',
                  },
                ],
              },
              {
                id: '110',
                name: 'Transit',
                children: [
                  {
                    id: '111',
                    name: 'NextBus',
                    url: 'http://www.nextbus.com/#!/sf-muni/E/E____I_F00/4532/4503',
                  },
                  {
                    id: '112',
                    name: 'GoTriangle',
                    url: 'https://gotriangle.org/',
                  },
                  {
                    id: '113',
                    name: 'Transit | Town of Chapel Hill, NC',
                    url: 'https://www.townofchapelhill.org/town-hall/departments-services/transit',
                  },
                ],
              },
              {
                id: '114',
                name: 'Dashboard | Gradescope',
                url: 'https://www.gradescope.com/',
              },
              {
                id: '115',
                name: 'UNC-Chapel Hill Libraries Catalog',
                url: 'https://catalog.lib.unc.edu/',
              },
              {
                id: '116',
                name: 'Campuswire',
                url: 'https://campuswire.com/',
              },
              {
                id: '117',
                name: 'The UNC App Lab',
                url: 'https://applab.unc.edu/',
              },
              {
                id: '118',
                name: 'https://users.physics.unc.edu/~jeglin/',
                url: 'https://users.physics.unc.edu/~jeglin/',
              },
              {
                id: '119',
                name: 'CS + Social Good',
                url: 'https://unc-cssg.org/resources',
              },
              {
                id: '120',
                name: 'Undergraduate CS Clubs - Computer Science',
                url: 'https://cs.unc.edu/academics/undergraduate/clubs/#cssg',
              },
              {
                id: '121',
                name: 'UNC Campus Recreation',
                url: 'https://campusrec.unc.edu/',
              },
              {
                id: '122',
                name: 'Explore - Heel Life',
                url: 'https://heellife.unc.edu/',
              },
              {
                id: '123',
                name: 'Home - Carolina Dining Services',
                url: 'https://dining.unc.edu/',
              },
              {
                id: '124',
                name: 'Chapel Hill',
                children: [
                  {
                    id: '125',
                    name: 'Town of Chapel Hill, NC | Home',
                    url: 'https://www.townofchapelhill.org/',
                  },
                  {
                    id: '126',
                    name: 'Code For Chapel Hill',
                    url: 'http://www.codeforchapelhill.com/',
                  },
                  {
                    id: '127',
                    name: 'code-for-chapel-hill/YOLO-ParkFacilitiesUsage',
                    url: 'https://github.com/code-for-chapel-hill/YOLO-ParkFacilitiesUsage',
                  },
                  {
                    id: '128',
                    name: 'Home Page — Chapel Hill Open Data',
                    url: 'https://www.chapelhillopendata.org/page/home1/',
                  },
                  {
                    id: '129',
                    name: 'Data Stories — ToC Open Data',
                    url: 'https://data.townofcary.org/page/storydirectory/',
                  },
                ],
              },
              {
                id: '130',
                name: 'Handshake',
                url: 'https://unc.joinhandshake.com/',
              },
              {
                id: '131',
                name: 'My Print Center',
                url: 'https://mobileprint.unc.edu/myprintcenter/',
              },
              {
                id: '132',
                name: 'Apogee SSO',
                url: 'https://login.mystream2.com/cas/login?service=https%3A%2F%2Fenroll.mystream2.com%2Fapi%2F1.0%2Fcallback%3Fclient_name%3DCasClient',
              },
              {
                id: '133',
                name: 'Group Fitness Schedule',
                url: 'https://www.groupexpro.com/schedule/438/?view=calendar',
              },
              {
                id: '134',
                name: 'CCI Printing Stations - Maps - The University of North Carolina at Chapel Hill',
                url: 'https://maps.unc.edu/services/printers/',
              },
              {
                id: '135',
                name: 'Keep Learning',
                url: 'https://keeplearning.unc.edu/',
              },
              {
                id: '136',
                name: '2020 National Recreation Movement',
                url: 'https://2020recreationmovement.com/',
              },
            ],
          },
          {
            id: '137',
            name: 'Singularity',
            children: [
              {
                id: '138',
                name: 'SingularityU Singapore Chapter: A Bridge Between Worlds - Singularity',
                url: 'https://www.su.org/blog/singularityu-singapore-chapter-a-bridge-between-worlds',
              },
            ],
          },
        ],
      },
      {
        id: '139',
        name: 'UF Library - My Library Card - Overview',
        url: 'https://ufl-flvc.primo.exlibrisgroup.com/discovery/account?vid=01FALSC_UFL:UFL&section=overview&lang=en',
      },
      {
        id: '140',
        name: 'UF SNAP',
        url: 'https://spare-rider-ufsnap-production.vercel.app/Login?title=Login&authOrganization=%5Bobject%20Object%5D',
      },
      {
        id: '141',
        name: 'Deep-ML',
        url: 'https://www.deep-ml.com/',
      },
      {
        id: '142',
        name: 'WebLLM Chat',
        url: 'https://chat.webllm.ai/',
      },
      {
        id: '143',
        name: 'Le Chat - Mistral AI',
        url: 'https://chat.mistral.ai/chat/6967b8d1-8267-4645-a8e8-21feb6f34d20',
      },
      {
        id: '144',
        name: 'Courses & Curriculum | MS Information Systems | UF Warrington',
        url: 'https://warrington.ufl.edu/master-of-science-in-information-systems-and-operations-management/courses-and-curriculum/',
      },
      {
        id: '145',
        name: 'Study Hacks - Decoding Patterns of Success - Cal Newport',
        url: 'https://www.calnewport.com/blog/',
      },
      {
        id: '146',
        name: 'Zettelkasten knowledge and info management • Zettelkasten Method',
        url: 'https://zettelkasten.de/',
      },
      {
        id: '147',
        name: 'GRE Reading Comprehension Questions (For Test Takers)',
        url: 'https://www.ets.org/gre/revised_general/prepare/verbal_reasoning/reading_comprehension/question_types',
      },
      {
        id: '148',
        name: 'Prepare for the GRE General Test (For Test Takers)',
        url: 'https://www.ets.org/gre/revised_general/prepare/?WT.ac=grehome_greprepare_b_150213',
      },
      {
        id: '149',
        name: "Do I Need to Go to University? -- colah's blog",
        url: 'https://colah.github.io/posts/2020-05-University/',
      },
      {
        id: '150',
        name: 'The University of Texas at Austin',
        url: 'https://www.utexas.edu/',
      },
      {
        id: '151',
        name: 'Pomodoro Timer Online - Pomofocus',
        url: 'https://pomofocus.io/',
      },
      {
        id: '152',
        name: 'The GRE Tests',
        url: 'https://www.ets.org/gre/',
      },
      {
        id: '153',
        name: 'Login | Gradschoolmatch',
        url: 'https://www.mygradschoolmatch.com/users/sign_in',
      },
      {
        id: '154',
        name: 'About Farnam Street',
        url: 'https://fs.blog/about/',
      },
      {
        id: '155',
        name: 'Explainpaper',
        url: 'https://www.explainpaper.com/',
      },
      {
        id: '156',
        name: 'https://search.norton.com/',
        url: 'https://search.norton.com/',
      },
      {
        id: '157',
        name: 'StudyinEU — Find Your Degree in Europe with AI',
        url: 'https://www.studyineu.online/en',
      },
    ],
  },
  {
    id: '158',
    name: 'Entertainment',
    children: [
      {
        id: '159',
        name: 'Similar Song Finder: How to Find Similar Songs',
        url: 'https://www.cisdem.com/resource/find-similar-songs.html',
      },
      {
        id: '160',
        name: 'Films Now Showing on MUBI',
        url: 'https://mubi.com/showing',
      },
      {
        id: '161',
        name: '25 Movies To Watch On Netflix Right Now | HuffPost Life',
        url: 'https://www.huffpost.com/entry/good-movies-watch-netflix_l_5e2781c8c5b6164d76de6525?utm_source=main_fb&utm_campaign=hp_fb_pages&ncid=fcbklnkushpmg00000063&utm_medium=facebook',
      },
      {
        id: '162',
        name: 'Anupama Chopra Recommends 40 Movies To Binge During Lockdown',
        url: 'https://www.filmcompanion.in/anupama-chopra-recommends-40-movies-to-binge-during-lockdown/',
      },
      {
        id: '163',
        name: 'JustWatch - The Streaming Guide',
        url: 'https://www.justwatch.com/',
      },
      {
        id: '164',
        name: 'Watch Free Movies and TV Shows Online | Streaming Movies and TV | Tubi',
        url: 'https://tubitv.com/home',
      },
      {
        id: '165',
        name: 'Gartic Phone - The Telephone Game',
        url: 'https://garticphone.com/',
      },
      {
        id: '166',
        name: 'glif - WOJAK MEME GENERATOR by fab1an',
        url: 'https://glif.app/@fab1an/glifs/clxtc53mi0000ghv10g6irjqj',
      },
      {
        id: '167',
        name: 'Ah boy to man 1/2 - video dailymotion',
        url: 'https://www.dailymotion.com/video/x5y51dx',
      },
      {
        id: '168',
        name: 'MovieSaints',
        url: 'https://www.moviesaints.com/',
      },
    ],
  },
  {
    id: '169',
    name: 'Finance',
    children: [
      {
        id: '170',
        name: 'Common Cents',
        url: 'https://commoncents.org/',
      },
      {
        id: '171',
        name: 'Home — First Milli | Wealth Building Simplified',
        url: 'https://firstmilli.com/',
      },
      {
        id: '172',
        name: 'Varsity by Zerodha – Markets, Trading, and Investing Simplified.',
        url: 'https://zerodha.com/varsity/',
      },
      {
        id: '173',
        name: 'Welcome to Sure Dividend - Sure Dividend Sure Dividend',
        url: 'https://www.suredividend.com/',
      },
      {
        id: '174',
        name: 'About Us - Simply Wall St',
        url: 'https://simplywall.st/about',
      },
      {
        id: '175',
        name: 'My Money @ Campus',
        url: 'https://www.mymoneyatcampus.sg/welcome',
      },
      {
        id: '176',
        name: 'Seedly - Singapore’s Biggest Personal Finance Community',
        url: 'https://seedly.sg/',
      },
      {
        id: '177',
        name: 'Compare the Best Loans, Insurance & Credit Cards in Singapore|',
        url: 'https://www.moneysmart.sg/',
      },
      {
        id: '178',
        name: "The Penny Hoarder | More Money In People's Pockets",
        url: 'https://www.thepennyhoarder.com/',
      },
      {
        id: '179',
        name: 'Understand Your Risk Appetite | DBS Singapore',
        url: 'https://www.dbs.com.sg/personal/investments/unit-trusts/understand-your-risk-appetite',
      },
      {
        id: '180',
        name: 'I Will Teach You To Be Rich',
        url: 'https://www.iwillteachyoutoberich.com/',
      },
      {
        id: '181',
        name: 'I Will Teach You To Be Rich',
        url: 'https://www.iwillteachyoutoberich.com/',
      },
      {
        id: '182',
        name: "The Student's Guide to Budgeting in College | BestColleges",
        url: 'https://www.bestcolleges.com/resources/budgeting-in-college/',
      },
      {
        id: '183',
        name: 'Money',
        url: 'https://www.paypal.com/businesswallet/currencyConverter/SGD?flow=cmV0dXJuVXJsPS9teWFjY291bnQvbW9uZXkmY2FuY2VsVXJsPS9teWFjY291bnQvbW9uZXk=}',
      },
    ],
  },
  {
    id: '184',
    name: 'Food',
    children: [
      {
        id: '185',
        name: 'SAVEUR - Saveur',
        url: 'https://saveur.sg/',
      },
      {
        id: '186',
        name: 'https://perch.sg',
        url: 'https://perch.sg/',
      },
      {
        id: '187',
        name: 'https://tonito.sg',
        url: 'https://tonito.sg/',
      },
      {
        id: '188',
        name: 'Food prices in Singapore at cafes and restaurants',
        url: 'https://www.globalprice.info/en/?p=singapore/food-prices',
      },
      {
        id: '189',
        name: 'Time',
        url: 'https://asianfoodnetwork.com/en/recipes/time.html',
      },
      {
        id: '190',
        name: 'Asian Food Network | The Home Of Asian Recipes & Cuisine',
        url: 'https://asianfoodnetwork.com/',
      },
      {
        id: '191',
        name: 'Is Sushi Sacred?',
        url: 'https://sarahhuangbenjamin.com/home/2018/8/22/is-sushi-sacred',
      },
      {
        id: '192',
        name: 'World Food Atlas: Discover 13511 Local Dishes & Ingredients',
        url: 'https://www.tasteatlas.com/',
      },
    ],
  },
  {
    id: '193',
    name: 'Government',
    children: [
      {
        id: '194',
        name: 'Home | SGSecure',
        url: 'https://www.sgsecure.gov.sg/',
      },
    ],
  },
  {
    id: '195',
    name: 'Health',
    children: [
      {
        id: '196',
        name: 'COVID-19',
        children: [
          {
            id: '197',
            name: 'MOH | Updates on COVID-19 (Coronavirus Disease 2019) Local Situation',
            url: 'https://www.moh.gov.sg/covid-19',
          },
          {
            id: '198',
            name: 'Coronavirus: How to make your own hand sanitizer and cleaning wipes - Business Insider',
            url: 'https://www.businessinsider.com/coronavirus-how-to-make-hand-sanitizer-and-cleaning-wipes-2020-3?utm_campaign=sf-bi-ti&utm_source=facebook.com&utm_medium=social&fbclid=IwAR33b6j8f3F_F_Q7UfF-zWe7MT8tlQ1inxofEx43tupgFeIW8WAbG4qOcKE',
          },
          {
            id: '199',
            name: 'Novel coronavirus (COVID-19) situation',
            url: 'https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd',
          },
          {
            id: '200',
            name: 'COVID-19 Dashboard',
            url: 'https://trekhleb.github.io/covid-19/',
          },
          {
            id: '201',
            name: 'https://sgcovidcheck.com',
            url: 'https://sgcovidcheck.com/',
          },
          {
            id: '202',
            name: 'Can I go',
            url: 'https://canigo.sg/',
          },
          {
            id: '203',
            name: 'About — The Social Distancing Festival',
            url: 'https://www.socialdistancingfestival.com/about',
          },
          {
            id: '204',
            name: 'https://iamaccb.sg',
            url: 'https://iamaccb.sg/',
          },
          {
            id: '205',
            name: 'Stay Engaged',
            url: 'https://www.sgunited.gov.sg/stay-engaged/',
          },
          {
            id: '206',
            name: 'NUS Resilience Fund Claims Portal for SEP Students - Home',
            url: 'https://nusu.sharepoint.com/sites/StudentClaim/SitePages/Home.aspx',
          },
          {
            id: '207',
            name: 'COVID-19 Resources - Google Docs',
            url: 'https://docs.google.com/document/d/1-XnK37IgXZQWI2oY02Yea-fESR4xeyPdPy6qQ_-EbBk/edit#',
          },
          {
            id: '208',
            name: '10 Free Software Non-Profits Can Use During The COVID-19 Crisis (+ Links & Infographic) - bantu Blog — The Community Management & Engagement Blog for the Social Sector',
            url: 'https://blog.bantu.life/10-free-software-non-profits-can-use-during-the-covid-19-crisis/',
          },
          {
            id: '209',
            name: 'Layoffs.fyi Coronavirus Tracker - Layoffs.fyi',
            url: 'https://layoffs.fyi/tracker/',
          },
          {
            id: '210',
            name: 'SGPaySitForward | Send your love to fellow Singaporeans with Care Pack – #SGPAYSITFORWARD',
            url: 'https://www.sgpaysitforward.com/?utm_source=Tech+in+Asia+Main+List&utm_campaign=db72d57d40-20200422_Daily_nonsub_news&utm_medium=email&utm_term=0_7f08f27dbf-db72d57d40-52758197&goal=0_7f08f27dbf-db72d57d40-52758197&mc_cid=db72d57d40',
          },
          {
            id: '211',
            name: 'grocery stores near you in Singapore | pandamart | foodpanda',
            url: 'https://www.foodpanda.sg/contents/pandamart-grocery-stores',
          },
          {
            id: '212',
            name: 'Meh Go Where',
            url: 'https://www.mehgowhere.sg/',
          },
        ],
      },
      {
        id: '213',
        name: 'Denise Austin',
        url: 'https://www.deniseaustin.com/',
      },
      {
        id: '214',
        name: "EliteFit.AI - Workout with AI Don't settle for less",
        url: 'https://elitefitforyou.com/home',
      },
      {
        id: '215',
        name: 'Home | Olly Singapore| Unilever',
        url: 'https://www.olly.com.sg/',
      },
      {
        id: '216',
        name: 'Home Workout Videos',
        url: 'https://sites.google.com/shopee.com/shopeeintranet/Welfare/Wellness/gym-and-fitness-classes/home-workout-videos',
      },
      {
        id: '217',
        name: 'Katie Austin – Motivation For a Happy & Healthy Lifestyle',
        url: 'https://katieaustin.tv/',
      },
      {
        id: '218',
        name: 'Magnify Wellness',
        url: 'https://magnifywellness.org/',
      },
      {
        id: '219',
        name: 'Maria Kang - No Excuse Mom and Social Entrepreneur',
        url: 'http://www.mariakang.com/',
      },
      {
        id: '220',
        name: 'Megan Monahan',
        url: 'https://www.meganmonahan.com/',
      },
      {
        id: '221',
        name: 'Mindful Meetings',
        url: 'https://mindfulness.spill.chat/?ref=producthunt',
      },
      {
        id: '222',
        name: 'My Transformation: How I lost 66 pounds and gained a 6 pack in 8 months.',
        url: 'http://debarghyadas.com/writes/transformation/',
      },
      {
        id: '223',
        name: 'THE DAILY UNPLUG — Unplug Meditation',
        url: 'https://www.unplug.com/thedailyunplug',
      },
      {
        id: '224',
        name: 'Workouts - YouTube',
        url: 'https://www.youtube.com/playlist?list=PLwUbNm5nBwXlx7jRB4eX80-RrlnpsY--r',
      },
      {
        id: '225',
        name: 'User Login | Jefit - Best Android and iPhone Workout, Fitness, Exercise and Bodybuilding App | Best Workout Tracking Software',
        url: 'https://www.jefit.com/login/',
      },
    ],
  },
  {
    id: '226',
    name: 'Life',
    children: [
      {
        id: '227',
        name: "Mark Manson - Life Advice That Doesn't Suck",
        url: 'https://markmanson.net/',
      },
      {
        id: '228',
        name: 'Dating',
        children: [
          {
            id: '229',
            name: 'Welcome to Lunch Actually',
            url: 'https://www.lunchactually.com/love-begin/?source=LASG080',
          },
        ],
      },
    ],
  },
  {
    id: '230',
    name: 'News',
    children: [
      {
        id: '231',
        name: 'Good News, Inspiring, Positive Stories - Good News Network',
        url: 'https://www.goodnewsnetwork.org/',
      },
      {
        id: '232',
        name: 'Wellbeing Archives - Positive News - Positive News',
        url: 'https://www.positive.news/',
      },
      {
        id: '233',
        name: 'WION: Breaking News, Latest News, World, South Asia, India, Pakistan, Bangladesh News & Analysis',
        url: 'https://www.wionews.com/',
      },
      {
        id: '234',
        name: 'Media Bias/Fact Check - Search and Learn the Bias of News Media',
        url: 'https://mediabiasfactcheck.com/',
      },
      {
        id: '235',
        name: 'Snopes.com | The definitive fact-checking site and reference source for urban legends, folklore, myths, rumors, and misinformation.',
        url: 'https://www.snopes.com/',
      },
      {
        id: '236',
        name: 'Vox - Understand the News',
        url: 'https://www.vox.com/',
      },
    ],
  },
  {
    id: '237',
    name: 'Productivity',
    children: [
      {
        id: '238',
        name: 'Pomodoro Timer Online - Pomofocus',
        url: 'https://pomofocus.io/',
      },
      {
        id: '239',
        name: 'Master Boring Fundamentals 01: Boring is Fun | JamesStuber.com',
        url: 'https://jamesstuber.com/boring-is-fun/',
      },
    ],
  },
  {
    id: '240',
    name: 'Reading',
    children: [
      {
        id: '241',
        name: 'Chalchitra Talks',
        url: 'https://www.chalchitratalks.com/',
      },
      {
        id: '242',
        name: 'We Read Too',
        url: 'https://www.wereadtoo.com/',
      },
    ],
  },
  {
    id: '243',
    name: 'Research',
    children: [
      {
        id: '244',
        name: 'NUS Libraries Proxy Bookmarklet',
        url: "javascript:void(location.href='http://libproxy1.nus.edu.sg/login?url=%27+location.href);",
      },
      {
        id: '245',
        name: 'dblp: computer science bibliography',
        url: 'https://dblp.org/',
      },
      {
        id: '246',
        name: 'arXiv.org e-Print archive',
        url: 'https://arxiv.org/',
      },
      {
        id: '247',
        name: 'Google Scholar',
        url: 'https://scholar.google.com/',
      },
      {
        id: '248',
        name: 'CiteSeerX',
        url: 'http://citeseer.ist.psu.edu/index;jsessionid=E78B80BC8ACE38E916B40AD5CED2A88B',
      },
      {
        id: '249',
        name: 'ACM Digital Library',
        url: 'https://dl.acm.org/',
      },
      {
        id: '250',
        name: 'Collate, SoC style',
        url: 'https://nuscomputingdev.github.io/SoCollate/printing.html',
      },
      {
        id: '251',
        name: 'Money',
        url: 'https://www.paypal.com/businesswallet/currencyConverter/SGD?flow=cmV0dXJuVXJsPS9teWFjY291bnQvbW9uZXkmY2FuY2VsVXJsPS9teWFjY291bnQvbW9uZXk=%7D',
      },
      {
        id: '252',
        name: 'NUS Libraries Proxy Bookmarklet',
        url: "javascript:void(location.href='http://libproxy1.nus.edu.sg/login?url='+location.href);",
      },
      {
        id: '253',
        name: 'SoS',
        url: 'https://www.theseedsofscience.org/',
      },
      {
        id: '254',
        name: 'Semantic Scholar | AI-Powered Research Tool',
        url: 'https://www.semanticscholar.org/',
      },
    ],
  },
  {
    id: '255',
    name: 'Shopping',
    children: [
      {
        id: '256',
        name: 'Singapore Business Directory - Search Singapore Registered Companies',
        url: 'https://www.sgpbusiness.com/',
      },
      {
        id: '257',
        name: 'Yelp',
        url: 'http://www.yelp.com/',
      },
      {
        id: '258',
        name: 'Work from Home - Herman Miller',
        url: 'https://www.hermanmiller.com/en_eur/solutions/home/work-from-home/',
      },
      {
        id: '259',
        name: 'The Real Deal by RetailMeNot: Daily Savings, Buying Guides & Expert Reviews',
        url: 'https://www.retailmenot.com/blog/',
      },
    ],
  },
  {
    id: '260',
    name: 'Social',
    children: [
      {
        id: '261',
        name: '1880 – inspires conversations that change the world',
        url: 'https://www.1880.com.sg/',
      },
    ],
  },
  {
    id: '262',
    name: 'Spirituality',
    children: [
      {
        id: '263',
        name: 'The Law of One (The Ra Material)',
        url: 'https://www.lawofone.info/',
      },
      {
        id: '264',
        name: "Lion's Roar: Buddhist Wisdom for Our Time - Lion's Roar",
        url: 'https://www.lionsroar.com/',
      },
      {
        id: '265',
        name: 'KAIRA JEWEL LINGO',
        url: 'https://www.kairajewel.com/',
      },
    ],
  },
  {
    id: '266',
    name: 'Sports',
    children: [
      {
        id: '267',
        name: 'NBA Streams | Reddit NBA Streams - Watch NBA4FREE',
        url: 'http://nba-streams.xyz/schedule/',
      },
      {
        id: '268',
        name: 'ATP Tennis Streaming Online - Watch Tennis Live',
        url: 'https://www.tennistv.com/',
      },
    ],
  },
  {
    id: '269',
    name: 'Stock Images',
    children: [
      {
        id: '270',
        name: 'Beautiful Free Images & Pictures | Unsplash',
        url: 'https://unsplash.com/',
      },
      {
        id: '271',
        name: 'Royalty Free Stock Photos, Illustrations, Vector Art and Video Clips - Getty Images',
        url: 'https://www.gettyimages.in/',
      },
    ],
  },
  {
    id: '272',
    name: 'Technology',
    children: [
      {
        id: '273',
        name: 'Security',
        children: [
          {
            id: '274',
            name: 'Kali Linux',
            url: 'https://www.kali.org/',
          },
          {
            id: '275',
            name: 'Kali Training',
            url: 'https://kali.training/',
          },
          {
            id: '276',
            name: 'Kali Tools',
            url: 'https://tools.kali.org/',
          },
          {
            id: '277',
            name: 'Kali Forums',
            url: 'https://forums.kali.org/',
          },
          {
            id: '278',
            name: 'Kali Docs',
            url: 'https://www.kali.org/docs/',
          },
          {
            id: '279',
            name: 'GHDB',
            url: 'https://www.exploit-db.com/google-hacking-database',
          },
          {
            id: '280',
            name: 'NetHunter',
            url: 'https://www.kali.org/kali-linux-nethunter/',
          },
          {
            id: '281',
            name: 'Offensive Security',
            url: 'https://www.offensive-security.com/',
          },
          {
            id: '282',
            name: 'MSFU',
            url: 'https://www.offensive-security.com/metasploit-unleashed/',
          },
          {
            id: '283',
            name: 'Exploit-DB',
            url: 'https://www.exploit-db.com/',
          },
          {
            id: '284',
            name: 'Pentester Academy: Learn Pentesting Online',
            url: 'https://www.pentesteracademy.com/',
          },
          {
            id: '285',
            name: 'Home | Hacker101',
            url: 'https://www.hacker101.com/',
          },
          {
            id: '286',
            name: 'Two Factor Auth List',
            url: 'https://twofactorauth.org/',
          },
          {
            id: '287',
            name: 'OffSec',
            url: 'https://www.offsec.com/?utm_source=kali&utm_medium=os&utm_campaign=firefox',
          },
          {
            id: '288',
            name: 'Kali Linux',
            url: 'https://www.kali.org/',
          },
          {
            id: '289',
            name: 'Kali Tools',
            url: 'https://www.kali.org/tools/',
          },
          {
            id: '290',
            name: 'Kali Docs',
            url: 'https://www.kali.org/docs/',
          },
          {
            id: '291',
            name: 'Kali Forums',
            url: 'https://forums.kali.org/',
          },
          {
            id: '292',
            name: 'Kali NetHunter',
            url: 'https://www.kali.org/kali-nethunter/',
          },
          {
            id: '293',
            name: 'Exploit-DB',
            url: 'https://www.exploit-db.com/',
          },
        ],
      },
      {
        id: '294',
        name: 'Techieweed - Get High on Technology',
        url: 'https://techieweed.com/',
      },
      {
        id: '295',
        name: 'Product Hunt – The best new products in tech.',
        url: 'https://www.producthunt.com/',
      },
      {
        id: '296',
        name: 'Detexify LaTeX handwritten symbol recognition',
        url: 'http://detexify.kirelabs.org/classify.html',
      },
      {
        id: '297',
        name: 'WeWeb | The New Standard in Website Creation',
        url: 'https://www.weweb.io/?ref=producthunt',
      },
      {
        id: '298',
        name: 'CS3233 - Competitive Programming',
        url: 'http://www.comp.nus.edu.sg/~cs3233/',
      },
      {
        id: '299',
        name: 'Free Programming Books – GoalKicker.com',
        url: 'https://goalkicker.com/',
      },
      {
        id: '300',
        name: 'Green Tea Press – Free books by Allen B. Downey',
        url: 'https://greenteapress.com/wp/',
      },
      {
        id: '301',
        name: '17 Coding Challenges to Sharpen Your Thinking',
        url: 'https://geekflare.com/coding-challenges-to-sharpen-thinking/',
      },
      {
        id: '302',
        name: 'An Introduction to JavaScript',
        url: 'https://javascript.info/intro',
      },
      {
        id: '303',
        name: 'Packages - The Go Programming Language',
        url: 'https://golang.org/pkg/',
      },
      {
        id: '304',
        name: 'Byte by Byte',
        url: 'https://www.byte-by-byte.com/',
      },
      {
        id: '305',
        name: 'Tech Interview Pro',
        url: 'https://www.techseries.dev/',
      },
      {
        id: '306',
        name: 'GeeksforGeeks | A computer science portal for geeks',
        url: 'https://www.geeksforgeeks.org/',
      },
      {
        id: '307',
        name: '100+ Coding Interview Questions for Programmers - codeburst',
        url: 'https://codeburst.io/100-coding-interview-questions-for-programmers-b1cf74885fb7',
      },
      {
        id: '308',
        name: 'Tech Interview Handbook',
        url: 'https://yangshun.github.io/tech-interview-handbook/',
      },
      {
        id: '309',
        name: 'Habitify',
        url: 'https://app.habitify.me/',
      },
      {
        id: '310',
        name: 'YouTube',
        url: 'https://www.youtube.com/',
      },
      {
        id: '311',
        name: 'Python Tutorials – Real Python',
        url: 'https://realpython.com/',
      },
      {
        id: '312',
        name: 'Publications - Yuta Saito',
        url: 'https://usaito.github.io/publications/',
      },
      {
        id: '313',
        name: 'Flavio Copes',
        url: 'https://flaviocopes.com/',
      },
      {
        id: '314',
        name: 'Morning Brew | Archive',
        url: 'https://www.morningbrew.com/archive?newsletter=daily',
      },
      {
        id: '315',
        name: 'Google One',
        url: 'https://one.google.com/',
      },
      {
        id: '316',
        name: 'Startup Search — Accelerate your career at the world’s fastest-growing startups',
        url: 'https://startupsearch.com/',
      },
      {
        id: '317',
        name: 'Network Printer Monitor 5 | NUS School of Computing',
        url: 'https://www.comp.nus.edu.sg/~siglabs/pm/',
      },
      {
        id: '318',
        name: 'Command-Line Printing and Options',
        url: 'https://www.cups.org/doc/options.html',
      },
      {
        id: '319',
        name: 'Home - Skillshare',
        url: 'https://www.skillshare.com/home',
      },
      {
        id: '320',
        name: 'FlashType',
        url: 'http://theleanprogrammer.com/flashtype/',
      },
      {
        id: '321',
        name: 'TechTogether Atlanta',
        url: 'https://atlanta.techtogether.io/',
      },
      {
        id: '322',
        name: 'Food',
        url: 'https://changi.ezqr.sg/',
      },
      {
        id: '323',
        name: 'TED: Ideas Worth Spreading',
        url: 'https://www.ted.com/',
      },
      {
        id: '324',
        name: 'Centre for Strategic Futures',
        url: 'https://www.csf.gov.sg/',
      },
      {
        id: '325',
        name: "DoNotPay - The World's First Robot Lawyer",
        url: 'https://donotpay.com/',
      },
      {
        id: '326',
        name: 'Bodybuilding.com - Huge Online Supplement Store & Fitness Community!',
        url: 'https://www.bodybuilding.com/en-SG/index',
      },
      {
        id: '327',
        name: 'The Marginalian – Marginalia on our search for meaning.',
        url: 'https://www.themarginalian.org/',
      },
      {
        id: '328',
        name: 'Welcome to Giving.sg! | The one-stop platform for you to donate, volunteer or fundraise. - Giving.sg',
        url: 'https://www.giving.sg/',
      },
      {
        id: '329',
        name: 'GiveWell | Charity Reviews and Research',
        url: 'https://www.givewell.org/',
      },
      {
        id: '330',
        name: 'Bug Bounty',
        children: [
          {
            id: '331',
            name: 'Pentester Academy: Learn Pentesting Online',
            url: 'https://www.pentesteracademy.com/',
          },
          {
            id: '332',
            name: 'AttackDefense Labs: Pentester Academy',
            url: 'https://www.attackdefense.com/members',
          },
        ],
      },
      {
        id: '333',
        name: 'Find Open Source By Searching, Browsing and Combining 7,000 Topics',
        url: 'https://awesomeopensource.com/',
      },
      {
        id: '334',
        name: 'GitHub Student Developer Pack - GitHub Education',
        url: 'https://education.github.com/pack',
      },
      {
        id: '335',
        name: 'AwesomeTechStack - Website technology stack analysis, trends and rating',
        url: 'https://awesometechstack.com/',
      },
      {
        id: '336',
        name: 'Most active GitHub users',
        url: 'https://commits.top/',
      },
      {
        id: '337',
        name: "Google's Python Class  |  Python Education  |  Google Developers",
        url: 'https://developers.google.com/edu/python',
      },
      {
        id: '338',
        name: 'OpenTechSchool – Social Coding with GitHub',
        url: 'https://opentechschool.github.io/social-coding/',
      },
      {
        id: '339',
        name: 'Learn React from the creators of React Router',
        url: 'https://reacttraining.com/',
      },
      {
        id: '340',
        name: 'CharMap - Powered by OpenType.js',
        url: 'https://bluejamesbond.github.io/CharacterMap/',
      },
      {
        id: '341',
        name: 'Choose an open source license | Choose a License',
        url: 'https://choosealicense.com/',
      },
      {
        id: '342',
        name: 'JavaScript reference - JavaScript | MDN',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
      },
      {
        id: '343',
        name: 'ECMAScript® 2019 Language Specification',
        url: 'http://www.ecma-international.org/ecma-262/10.0/index.html#sec-numbers-and-dates',
      },
      {
        id: '344',
        name: 'Programming Interview Questions + Help Getting Job Offers | Interview Cake',
        url: 'https://www.interviewcake.com/',
      },
      {
        id: '345',
        name: 'SWE Careers | Ace your next coding interview',
        url: 'https://www.swecareers.com/',
      },
      {
        id: '346',
        name: 'InterviewBit: Coding Interview Questions',
        url: 'https://www.interviewbit.com/',
      },
      {
        id: '347',
        name: 'HackerEarth | Online coding platform and developer assessment software',
        url: 'https://www.hackerearth.com/',
      },
      {
        id: '348',
        name: 'Programming Interview Questions | CareerCup',
        url: 'https://careercup.com/',
      },
      {
        id: '349',
        name: 'Free Icons for Everything - Noun Project',
        url: 'https://thenounproject.com/',
      },
      {
        id: '350',
        name: 'Devhints — TL;DR for developer documentation',
        url: 'https://devhints.io/',
      },
      {
        id: '351',
        name: 'Most active GitHub users in Singapore',
        url: 'https://commits.top/singapore.html',
      },
      {
        id: '352',
        name: 'React Knowledgeable · Fun and friendly podium to share what we learn about React.',
        url: 'https://reactknowledgeable.org/',
      },
      {
        id: '353',
        name: 'Free Fridays by General Assembly: Our Favorite Online Workshops, Now Open to Everyone',
        url: 'https://generalassemb.ly/blog/free-fridays/',
      },
      {
        id: '354',
        name: 'First Contributions',
        url: 'https://firstcontributions.github.io/',
      },
      {
        id: '355',
        name: 'Unplug Meditation',
        url: 'https://www.unplug.com/',
      },
      {
        id: '356',
        name: 'StackShare - Software and technology stacks used by top companies',
        url: 'https://stackshare.io/',
      },
      {
        id: '357',
        name: 'Top Shelf Web Development Training ― Scotch.io',
        url: 'https://scotch.io/',
      },
      {
        id: '358',
        name: 'The Cost of Javascript Frameworks - Web Performance Consulting | TimKadlec.com',
        url: 'https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/',
      },
      {
        id: '359',
        name: 'Major League Hacking',
        url: 'https://mlh.io/',
      },
      {
        id: '360',
        name: 'Vue Mastery | The Ultimate Learning Resource for Vue.js Developers',
        url: 'https://www.vuemastery.com/',
      },
      {
        id: '361',
        name: 'Learn Vue.js from core-team members and industry experts at Vue School',
        url: 'https://vueschool.io/',
      },
      {
        id: '362',
        name: 'The Web framework for perfectionists with deadlines | Django',
        url: 'https://www.djangoproject.com/',
      },
      {
        id: '363',
        name: 'Markdown Guide',
        url: 'https://www.markdownguide.org/',
      },
      {
        id: '364',
        name: 'Your next business idea, delivered to your inbox | Trends by The Hustle',
        url: 'https://trends.co/?utm_source=pocket&utm_medium=fnl2',
      },
      {
        id: '365',
        name: 'Eloquent JavaScript',
        url: 'https://eloquentjavascript.net/',
      },
      {
        id: '366',
        name: 'HTTP Cats',
        url: 'https://http.cat/',
      },
      {
        id: '367',
        name: 'SEO Tools, Software and Articles | SEO Site Checkup',
        url: 'https://seositecheckup.com/',
      },
      {
        id: '368',
        name: 'GH Archive',
        url: 'https://www.gharchive.org/',
      },
      {
        id: '369',
        name: 'Turbo 360 | Learn Node, React, Redux with Real World Project Tutorials.',
        url: 'https://www.turbo360.co/',
      },
      {
        id: '370',
        name: 'Algo Muse',
        url: 'https://www.algomuse.net/',
      },
      {
        id: '371',
        name: 'Better API Penetration Testing with Postman – Part 2 – Professionally Evil Insights',
        url: 'https://blog.secureideas.com/2019/03/better-api-penetration-testing-with-postman-part-2.html',
      },
      {
        id: '372',
        name: 'Framer: The prototyping tool for teams',
        url: 'https://www.framer.com/',
      },
      {
        id: '373',
        name: 'GitBook - Document Everything!',
        url: 'https://www.gitbook.com/',
      },
      {
        id: '374',
        name: 'Home – Optimal Workshop',
        url: 'https://www.optimalworkshop.com/',
      },
      {
        id: '375',
        name: 'Miro | Free Online Collaborative Whiteboard Platform',
        url: 'https://miro.com/',
      },
      {
        id: '376',
        name: 'UX Design Courses & Global UX Community | Interaction Design Foundation',
        url: 'https://www.interaction-design.org/',
      },
      {
        id: '377',
        name: 'My Feed | Hackaday.io',
        url: 'https://hackaday.io/myFeed',
      },
      {
        id: '378',
        name: 'Hexo',
        url: 'https://hexo.io/',
      },
      {
        id: '379',
        name: 'OpenJS Foundation',
        url: 'https://openjsf.org/',
      },
      {
        id: '380',
        name: 'Go Resources',
        url: 'https://www.golang-book.com/',
      },
      {
        id: '381',
        name: 'Welcome to SecurityTube.net',
        url: 'http://www.securitytube.net/',
      },
      {
        id: '382',
        name: '👋 Welcome to UX Library - UX Library',
        url: 'https://www.uxlibrary.org/',
      },
      {
        id: '383',
        name: 'UI Design Daily | Weekly FREE UI resources straight to your inbox',
        url: 'https://uidesigndaily.com/',
      },
      {
        id: '384',
        name: 'OWASP Enterprise Security API (ESAPI)',
        url: 'https://owasp.org/www-project-enterprise-security-api/',
      },
      {
        id: '385',
        name: 'Responsinator',
        url: 'http://www.responsinator.com/',
      },
      {
        id: '386',
        name: 'Serveo: expose local servers to the internet using SSH',
        url: 'http://serveo.net/',
      },
      {
        id: '387',
        name: 'BetaList',
        url: 'https://betalist.com/',
      },
      {
        id: '388',
        name: 'hapi.dev - The simple, secure framework developers trust',
        url: 'https://hapi.dev/',
      },
      {
        id: '389',
        name: 'CodeSandbox: Online IDE for Rapid Web Development',
        url: 'https://codesandbox.io/index2',
      },
      {
        id: '390',
        name: 'Tania Rascia',
        url: 'https://www.taniarascia.com/',
      },
      {
        id: '391',
        name: 'Home | StrataScratch',
        url: 'https://www.stratascratch.com/',
      },
      {
        id: '392',
        name: 'Modern Site Generator for Vue.js - Gridsome',
        url: 'https://gridsome.org/',
      },
      {
        id: '393',
        name: 'https://colab.research.google.com',
        url: 'https://colab.research.google.com/',
      },
      {
        id: '394',
        name: 'Pragmatic Bookshelf: By Developers, For Developers',
        url: 'https://pragprog.com/',
      },
      {
        id: '395',
        name: 'Red-Green-Code - Deliberate practice techniques for software developers',
        url: 'https://www.redgreencode.com/',
      },
      {
        id: '396',
        name: 'deeplizard - Building Collective Intelligence',
        url: 'https://deeplizard.com/',
      },
      {
        id: '397',
        name: 'The best developer videos and tutorials from YouTube – on DevTube',
        url: 'https://dev.tube/',
      },
      {
        id: '398',
        name: 'Engineers.SG',
        url: 'https://engineers.sg/',
      },
      {
        id: '399',
        name: 'AI+ Training Platform',
        url: 'https://aiplus.odsc.com/',
      },
      {
        id: '400',
        name: 'Type Classes',
        url: 'https://typeclasses.com/',
      },
      {
        id: '401',
        name: 'Dive into Deep Learning — Dive into Deep Learning 0.15.1 documentation',
        url: 'http://d2l.ai/',
      },
      {
        id: '402',
        name: 'WildML – Artificial Intelligence, Deep Learning, and NLP',
        url: 'http://www.wildml.com/',
      },
      {
        id: '403',
        name: 'Startup School - The Best Resource for Founders',
        url: 'https://www.startupschool.org/?utm_source=yc&utm_campaign=ycdc_header',
      },
      {
        id: '404',
        name: 'Soft Skills Engineering Podcast',
        url: 'https://softskills.audio/',
      },
      {
        id: '405',
        name: 'Downdetector',
        url: 'https://downdetector.sg/',
      },
      {
        id: '406',
        name: "DevURLs – World's simplest developer news aggregator",
        url: 'https://devurls.com/',
      },
      {
        id: '407',
        name: 'TheCodex - Online, Engaging and Fun Programming Courses',
        url: 'https://thecodex.me/',
      },
      {
        id: '408',
        name: 'Sorry. My heart says yes, but my schedule says no.',
        url: 'https://www.onstartups.com/tabid/3339/bid/60758/Dear-Friend-Sorry-My-heart-says-yes-but-my-schedule-says-no.aspx',
      },
      {
        id: '409',
        name: 'StashAway | Investing like it should be',
        url: 'https://www.stashaway.sg/',
      },
      {
        id: '410',
        name: 'LIVE! Online certificate courses in Data Science, and AI',
        url: 'https://www.univ.ai/',
      },
      {
        id: '411',
        name: 'Stateoftheart AI',
        url: 'https://www.stateoftheart.ai/',
      },
      {
        id: '412',
        name: 'Linux Tips, Tricks and Tutorials | Linuxize',
        url: 'https://linuxize.com/',
      },
      {
        id: '413',
        name: 'AI Singapore | Accelerating AI for Singapore',
        url: 'https://www.aisingapore.org/',
      },
      {
        id: '414',
        name: 'Svelte Showcase - Made with Svelte',
        url: 'https://madewithsvelte.com/',
      },
      {
        id: '415',
        name: 'Glide',
        url: 'https://glidecv.com/report',
      },
      {
        id: '416',
        name: 'Basecamp: Project Management & Team Communication Software',
        url: 'https://basecamp.com/',
      },
      {
        id: '417',
        name: 'Data Science Prep',
        url: 'https://datascienceprep.com/',
      },
      {
        id: '418',
        name: 'Backyard',
        url: 'https://backyard.co/',
      },
      {
        id: '419',
        name: 'Tableau for Students',
        url: 'https://www.tableau.com/academic/students',
      },
      {
        id: '420',
        name: 'Learn Together Study Session Scheduling - When2meet',
        url: 'https://www.when2meet.com/?10838327-qyrce',
      },
      {
        id: '421',
        name: 'Homepage | developedbyed | Creative Programming and Design Courses',
        url: 'https://developedbyed.com/',
      },
      {
        id: '422',
        name: 'Pantheon',
        url: 'https://pantheon.world/',
      },
      {
        id: '423',
        name: 'Derek Chia',
        url: 'https://derekchia.com/',
      },
      {
        id: '424',
        name: 'Tech Lead Journal',
        url: 'https://techleadjournal.dev/',
      },
      {
        id: '425',
        name: 'Twilio - COVID-19 Digital Engagement Report',
        url: 'https://www.twilio.com/covid-19-digital-engagement-report?utm_source=nurture&utm_medium=event&utm_campaign=engage',
      },
      {
        id: '426',
        name: 'LearnTogether Hackathon: Team Formation — Icebreaker — Online events that build community',
        url: 'https://icebreaker.video/',
      },
      {
        id: '427',
        name: 'Home | Hacker101',
        url: 'https://www.hacker101.com/',
      },
      {
        id: '428',
        name: 'Two Factor Auth List',
        url: 'https://twofactorauth.org/',
      },
      {
        id: '429',
        name: '🎁 Emoji cheat sheet for GitHub, Basecamp, Slack & more',
        url: 'https://www.webfx.com/tools/emoji-cheat-sheet/',
      },
      {
        id: '430',
        name: 'SoloLearn: Learn to Code for Free!',
        url: 'https://www.sololearn.com/',
      },
      {
        id: '431',
        name: 'Streamlit',
        url: 'https://streamlit.io/',
      },
      {
        id: '432',
        name: 'Cloud Computing & Linux Servers | Alternative to AWS | Linode',
        url: 'https://www.linode.com/',
      },
      {
        id: '433',
        name: 'Domain Names, Websites, Hosting & Online Marketing Tools - GoDaddy SG',
        url: 'https://sg.godaddy.com/',
      },
      {
        id: '434',
        name: 'Vagrant by HashiCorp',
        url: 'https://www.vagrantup.com/',
      },
      {
        id: '435',
        name: 'Courses | The Odin Project',
        url: 'https://www.theodinproject.com/courses',
      },
      {
        id: '436',
        name: 'Home - Future of Life Institute',
        url: 'https://futureoflife.org/',
      },
      {
        id: '437',
        name: 'web.dev',
        url: 'https://web.dev/',
      },
      {
        id: '438',
        name: 'buildspace',
        url: 'https://buildspace.so/',
      },
      {
        id: '439',
        name: 'Web3 University - Your Guide to Blockchain Development',
        url: 'https://www.web3.university/',
      },
      {
        id: '440',
        name: 'TechCrunch | Startup and Technology News',
        url: 'https://techcrunch.com/',
      },
      {
        id: '441',
        name: 'WIRED - The Latest in Technology, Science, Culture and Business | WIRED',
        url: 'https://www.wired.com/',
      },
      {
        id: '442',
        name: 'The Verge',
        url: 'https://www.theverge.com/',
      },
      {
        id: '443',
        name: 'CNET: Product reviews, advice, how-tos and the latest news',
        url: 'https://www.cnet.com/',
      },
      {
        id: '444',
        name: 'Mashable',
        url: 'https://mashable.com/',
      },
      {
        id: '445',
        name: 'Gizmodo | The Future Is Here',
        url: 'https://gizmodo.com/',
      },
      {
        id: '446',
        name: 'ChatGPT - Poe',
        url: 'https://poe.com/ChatGPT',
      },
      {
        id: '447',
        name: "Google's Python Class  |  Python Education  |  Google Developers",
        url: 'https://developers.google.com/edu/python',
      },
      {
        id: '448',
        name: 'Python Cheatsheet - Python Cheatsheet',
        url: 'https://www.pythoncheatsheet.org/',
      },
      {
        id: '449',
        name: 'Preethi Kasireddy | Writer, Teacher, and forever Student',
        url: 'https://www.preethikasireddy.com/',
      },
      {
        id: '450',
        name: 'https://www.reddit.com/r/cs50/',
        url: 'https://www.reddit.com/r/cs50/',
      },
      {
        id: '451',
        name: 'Git',
        url: 'http://git-scm.com/',
      },
      {
        id: '452',
        name: 'Top10VPN: VPN Reviews You Can Trust',
        url: 'https://www.top10vpn.com/',
      },
      {
        id: '453',
        name: 'VirusTotal - Home',
        url: 'https://www.virustotal.com/gui/home/upload',
      },
      {
        id: '454',
        name: 'Non-Profit Working Group on AI (SG) | Non-Profit Working Group on AI',
        url: 'https://npwg-ai-sg.github.io/',
      },
      {
        id: '455',
        name: 'Open Broadcaster Software | OBS',
        url: 'https://obsproject.com/',
      },
      {
        id: '456',
        name: 'Forefront Chat',
        url: 'https://chat.forefront.ai/',
      },
      {
        id: '457',
        name: 'Templates - Journals, CVs, Presentations, Reports and More - Overleaf, Online LaTeX Editor',
        url: 'https://www.overleaf.com/latex/templates/tagged/cv',
      },
      {
        id: '458',
        name: 'Sudowrite',
        url: 'https://www.sudowrite.com/',
      },
      {
        id: '459',
        name: 'OpenAI Status',
        url: 'https://status.openai.com/',
      },
      {
        id: '460',
        name: 'http://Liquid.ai',
        url: 'https://t.co/rFUNzdYXuK',
      },
      {
        id: '461',
        name: 'Generative AI',
        url: 'https://genai.works/',
      },
      {
        id: '462',
        name: 'The Annotated Transformer',
        url: 'http://nlp.seas.harvard.edu/annotated-transformer/',
      },
      {
        id: '463',
        name: 'chat.dev',
        url: 'https://chat.dev/dashboard/models',
      },
      {
        id: '464',
        name: 'Napkins.dev – Screenshot to code',
        url: 'https://www.napkins.dev/',
      },
      {
        id: '465',
        name: 'AI Tools Directory - AI Scout | Home',
        url: 'https://aiscout.net/',
      },
      {
        id: '466',
        name: 'Audio House: Online Shopping - Best Deals on Home Appliances and more!',
        url: 'https://audiohouse.com.sg/',
      },
    ],
  },
  {
    id: '467',
    name: 'Travel',
    children: [
      {
        id: '468',
        name: 'Ready To Travel - Creating the best trips together',
        url: 'https://www.readytotravel.com/',
      },
      {
        id: '469',
        name: 'Trip Planner: Plan & manage your vacation itinerary on Inspirock • Inspirock',
        url: 'https://www.inspirock.com/',
      },
      {
        id: '470',
        name: 'TripAdvisor: Read Reviews, Compare Prices & Book',
        url: 'https://www.tripadvisor.com.sg/?fid=32505ab1-bc32-4d0f-a2ab-b8befd5c518f',
      },
      {
        id: '471',
        name: 'Booking.com | Official site | The best hotels & accommodations',
        url: 'https://www.booking.com/',
      },
      {
        id: '472',
        name: 'Cheap Hotels, Resorts, and Flights Booking | Travel with Expedia Singapore',
        url: 'https://www.expedia.com.sg/',
      },
      {
        id: '473',
        name: 'Visa',
        children: [
          {
            id: '474',
            name: 'Apply for a U.S. Visa | Home - Singapore (English)',
            url: 'http://cdn.ustraveldocs.com/sg/index.html?firstTime=No',
          },
          {
            id: '475',
            name: 'https://cgifederal.secure.force.com',
            url: 'https://cgifederal.secure.force.com/',
          },
        ],
      },
      {
        id: '476',
        name: 'Study Abroad Packing List - Guide - Packing for Study Abroad Programs',
        url: 'https://www.studyabroad.com/student-guide-study-abroad-packing',
      },
      {
        id: '477',
        name: 'Travel Safe - Abroad: Find the Safest Places for Your Travel',
        url: 'https://www.travelsafe-abroad.com/',
      },
      {
        id: '478',
        name: 'Do you need visa',
        url: 'https://www.doyouneedvisa.com/',
      },
      {
        id: '479',
        name: 'https://safearound.com',
        url: 'https://safearound.com/',
      },
      {
        id: '480',
        name: 'Cheap Flights, Airline tickets and Hotels - JustFly',
        url: 'https://www.justfly.com/',
      },
      {
        id: '481',
        name: 'Georgia Caney | Expat Living in Singapore',
        url: 'https://www.georgiacaney.com/',
      },
      {
        id: '482',
        name: 'Visit Singapore - Passion Made Possible - Visit Singapore Official Site',
        url: 'https://www.visitsingapore.com/en/',
      },
      {
        id: '483',
        name: 'MyLifeElsewhere.com: Worldwide Country and City Comparison',
        url: 'https://www.mylifeelsewhere.com/',
      },
      {
        id: '484',
        name: 'TripAdvisor',
        url: 'http://www.tripadvisor.com/',
      },
      {
        id: '485',
        name: 'How to Travel While Working: Hacks For Software Engineers and Freelancers | Toptal',
        url: 'https://www.toptal.com/freelance/the-traveling-engineers-survival-guide',
      },
      {
        id: '486',
        name: 'TripScout',
        url: 'https://tripscout.co/',
      },
      {
        id: '487',
        name: 'Meet and Stay with Locals All Over the World | Couchsurfing',
        url: 'https://www.couchsurfing.com/',
      },
      {
        id: '488',
        name: 'Couchers.org Beta',
        url: 'https://couchers.org/',
      },
      {
        id: '489',
        name: '20 Countries With Digital Nomad Visas (For Remote Workers)',
        url: 'https://expertvagabond.com/digital-nomad-work-visas/',
      },
    ],
  },
  {
    id: '490',
    name: 'Work',
    children: [
      {
        id: '491',
        name: 'Online Academy | JPMorgan Chase & Co.',
        url: 'https://careers.jpmorgan.com/global/en/students/programs/online-academy',
      },
      {
        id: '492',
        name: 'Home | Workology',
        url: 'https://workology.com/',
      },
      {
        id: '493',
        name: 'CS9: Problem-Solving for the CS Technical Interview',
        url: 'http://web.stanford.edu/class/cs9/',
      },
      {
        id: '494',
        name: "Google Recruiters Say Using the 'X-Y-Z Formula' on Your Resume Will Improve Your Odds of Getting Hired at Google | Inc.com",
        url: 'https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html?cid=sf01003',
      },
      {
        id: '495',
        name: 'Google Tech Dev Guide',
        url: 'https://techdevguide.withgoogle.com/',
      },
      {
        id: '496',
        name: 'AlgoExpert | 77 Video Explanations of Popular Interview Questions',
        url: 'https://www.algoexpert.io/joma?fbclid=IwAR1CiU-UEd4GciV6xm6SVbskKFA-vMvXSgJzsLY6fFzJ_iwZ_BkWv_A4rt8',
      },
      {
        id: '497',
        name: 'ResumeHub',
        url: 'https://resumehub.org/',
      },
      {
        id: '498',
        name: 'Tech Careers: New Year Gift - Curated List of Top 75 LeetCode Questions to Save Your Time - Blind',
        url: 'https://www.teamblind.com/article/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU?utm_source=share&utm_medium=ios_app',
      },
      {
        id: '499',
        name: 'Find email addresses in seconds • Hunter (Email Hunter)',
        url: 'https://hunter.io/',
      },
      {
        id: '500',
        name: 'meQulibrium + Goldman Sachs | meQuilibrium',
        url: 'https://www.mequilibrium.com/gsrecruiting/',
      },
      {
        id: '501',
        name: 'How I interviewed for 5 top companies in 5 days and got job offers from all of them',
        url: 'https://www.techinasia.com/talk/5-companines-5-days-5-offers',
      },
      {
        id: '502',
        name: 'Who Is Hiring | Levels.fyi',
        url: 'https://www.levels.fyi/hiring/',
      },
      {
        id: '503',
        name: 'FAANGPath Resources - Google Sheets',
        url: 'https://docs.google.com/spreadsheets/d/1BRIVbFf3PWYL5mxxzBHQGznU81IavMtGvHNLs_HxlXU/edit#gid=0',
      },
      {
        id: '504',
        name: "Startup Jobs at YC Companies in Engineering, Product, Design, Remote and more | Y Combinator's Work at a Startup",
        url: 'https://www.workatastartup.com/',
      },
      {
        id: '505',
        name: 'SilverKris | Your Singapore Airlines Travel Guide',
        url: 'https://www.silverkris.com/',
      },
      {
        id: '506',
        name: 'The Movie Database (TMDB)',
        url: 'https://www.themoviedb.org/',
      },
      {
        id: '507',
        name: 'International Hub',
        url: 'https://internationalhub.netlify.app/',
      },
      {
        id: '508',
        name: 'Browse Internships, Jobs, Companies & Content | Scholars',
        url: 'https://hirescholars.com/',
      },
      {
        id: '509',
        name: 'On Deck',
        url: 'https://www.beondeck.com/',
      },
      {
        id: '510',
        name: 'How to nail your engineering interview | Atlassian',
        url: 'https://www.atlassian.com/company/careers/resources/interviewing/how-to-nail-your-engineering-interview?utm_source=newsletter&utm_medium=email&utm_campaign=new_atlassian_partnership_attend_last_prehacks_session&utm_term=2022-02-01',
      },
      {
        id: '511',
        name: 'Upwork | The World’s Work Marketplace for Freelancing',
        url: 'https://www.upwork.com/',
      },
    ],
  },
  {
    id: '512',
    name: 'Writing',
    children: [
      {
        id: '513',
        name: 'JotterPad Blog',
        url: 'https://blog.jotterpad.app/',
      },
      {
        id: '514',
        name: 'Start Writing Online in 30 Days - Ship 30 for 30',
        url: 'https://www.ship30for30.com/',
      },
      {
        id: '515',
        name: 'Writing | Mark Koester',
        url: 'http://www.markwk.com/category/writing/',
      },
      {
        id: '516',
        name: 'Essays - David Perell',
        url: 'https://perell.com/essays/',
      },
      {
        id: '517',
        name: 'Zulie Writes',
        url: 'https://www.zuliewrites.com/',
      },
      {
        id: '518',
        name: 'How to Write Better: General Writing Class - The Minimalists',
        url: 'https://www.theminimalists.com/class/',
      },
      {
        id: '519',
        name: 'nik.art - I write for dreamers, doers, and unbroken optimists.',
        url: 'https://nik.art/',
      },
      {
        id: '520',
        name: 'The Marginalian – Marginalia on our search for meaning.',
        url: 'https://www.themarginalian.org/',
      },
      {
        id: '521',
        name: 'Aadit Kamat | Typeshare Gallery',
        url: 'https://typeshare.co/g/aaditkamat',
      },
      {
        id: '522',
        name: 'Ship 30 for 30 - Build an Online Writing Habit in 30 Days',
        url: 'https://www.ship30for30.com/',
      },
      {
        id: '523',
        name: 'CELC E-resources',
        url: 'https://blog.nus.edu.sg/celceresources/',
      },
      {
        id: '524',
        name: 'Anything You Want | Derek Sivers',
        url: 'about:reader?url=https%3A%2F%2Fsive.rs%2Fa',
      },
      {
        id: '525',
        name: 'Nat Eliason: Blog, Book Notes, Newsletter, and More',
        url: 'https://www.nateliason.com/',
      },
      {
        id: '526',
        name: 'Paraphrasing Tool - QuillBot AI',
        url: 'https://quillbot.com/?ref=producthunt',
      },
      {
        id: '527',
        name: 'Reword: Write Outstanding Articles with AI',
        url: 'https://reword.co/',
      },
    ],
  },
  {
    id: '529',
    name: 'Chapter 1 | Gita For Daily Living',
    url: 'https://neilbhatt.podbean.com/category/chapter-1',
  },
  {
    id: '530',
    name: 'Topics | Greater Good',
    url: 'https://greatergood.berkeley.edu/topic',
  },
  {
    id: '531',
    name: 'Career',
    children: [
      {
        id: '532',
        name: 'International Hub',
        url: 'https://internationalhub.netlify.app/',
      },
      {
        id: '533',
        name: 'Pomodoro Timer Online - Pomofocus',
        url: 'https://pomofocus.io/',
      },
      {
        id: '534',
        name: 'Browse Internships, Jobs, Companies & Content | Scholars',
        url: 'https://hirescholars.com/',
      },
      {
        id: '535',
        name: 'On Deck',
        url: 'https://www.beondeck.com/',
      },
      {
        id: '536',
        name: '80,000 Hours: How to make a difference with your career',
        url: 'https://80000hours.org/',
      },
      {
        id: '537',
        name: 'Effective Altruism Singapore',
        url: 'https://effectivealtruism.sg/',
      },
      {
        id: '538',
        name: 'Planning a high-impact career: a summary of everything you need to know in 7 points - 80,000 Hours',
        url: 'https://80000hours.org/career-planning/summary/',
      },
      {
        id: '539',
        name: 'Why you should consider applying for grad school right now - 80,000 Hours',
        url: 'https://80000hours.org/2017/11/consider-applying-for-a-phd-program-now/?source=email&uni_id=97&utm_source=80%2C000+Hours+mailing+list&utm_campaign=043f84adb4-RESEARCHNEWSLETTER_DEC_2021&utm_medium=email&utm_term=0_43bc1ae55c-043f84adb4-352526138',
      },
    ],
  },
  {
    id: '540',
    name: 'EA',
    children: [
      {
        id: '541',
        name: 'Compare your income - Perception of income inequality in OECD countries',
        url: 'https://www.compareyourincome.org/',
      },
      {
        id: '542',
        name: 'How Rich Am I? | Giving What We Can',
        url: 'https://howrichami.givingwhatwecan.org/how-rich-am-i',
      },
      {
        id: '543',
        name: 'Take a Giving What We Can Pledge: Join Our Community · Giving What We Can',
        url: 'https://www.givingwhatwecan.org/pledge/',
      },
      {
        id: '544',
        name: 'SOUTHEAST ASIA FARM ANIMAL WELFARE FELLOWSHIP',
        url: 'https://www.farmanimalwelfare.asia/',
      },
      {
        id: '545',
        name: 'EA VP: Participant Guide (Nov-Dec 2021) - Google Docs',
        url: 'https://docs.google.com/document/d/1oHyHYalgAxOrYzNe3M5hYiqqbI3mYNsEbdSyaDAwPN8/edit#heading=h.tfhjxt4fnhov',
      },
      {
        id: '546',
        name: 'CHARITY ENTREPRENEURSHIP - Charity Entrepreneurship',
        url: 'https://www.charityentrepreneurship.com/',
      },
      {
        id: '547',
        name: 'LessWrong',
        url: 'https://www.lesswrong.com/',
      },
      {
        id: '548',
        name: 'The Divide — Jason Hickel',
        url: 'https://www.jasonhickel.org/the-divide',
      },
    ],
  },
  {
    id: '549',
    name: 'Exercise',
    children: [
      {
        id: '550',
        name: 'Workouts playlist',
        url: 'https://www.youtube.com/playlist?list=PLwUbNm5nBwXlx7jRB4eX80-RrlnpsY--r',
      },
    ],
  },
  {
    id: '551',
    name: 'Movies',
    children: [
      {
        id: '552',
        name: 'The Criterion Channel',
        url: 'https://www.criterionchannel.com/',
      },
    ],
  },
  {
    id: '553',
    name: 'Apps » University of Florida',
    url: 'https://info.apps.ufl.edu/',
  },
  {
    id: '554',
    name: "Lil'Log",
    url: 'https://lilianweng.github.io/',
  },
  {
    id: '555',
    name: 'llama-3.2-90b-vision-instruct | NVIDIA NIM',
    url: 'https://build.nvidia.com/meta/llama-3.2-90b-vision-instruct',
  },
  {
    id: '556',
    name: 'bolt.new',
    url: 'https://bolt.new/',
  },
  {
    id: '557',
    name: 'PRUlink Funds | Prudential Singapore',
    url: 'https://www.prudential.com.sg/products/investment/funds/prulink-funds',
  },
  {
    id: '558',
    name: 'General Words for GRE and GMAT - Magoosh GRE',
    url: 'https://gre.magoosh.com/builder/vocabulary/app#/sections',
  },
  {
    id: '559',
    name: 'Test Preparation Ebooks and Services',
    url: 'https://ereg.ets.org/ereg/testPrep/viewEbooksSerives',
  },
  {
    id: '560',
    name: 'News: Latest News, India News, World News, Opinion, Politics, Governance, Defence, Economy, Education | ThePrint',
    url: 'https://theprint.in/',
  },
  {
    id: '561',
    name: 'Homepage - U.S. Embassy in Singapore',
    url: 'https://sg.usembassy.gov/',
  },
  {
    id: '562',
    name: 'Executive Coaching for Sensitive Strivers® — Melody Wilding',
    url: 'https://melodywilding.com/',
  },
  {
    id: '563',
    name: 'Ordinary/Associate Membership',
    url: 'https://www.nuss.org.sg/ordinaryassociate-membership',
  },
  {
    id: '564',
    name: 'National Library Board, Singapore',
    url: 'https://nlbsg.udemy.com/organization/home/',
  },
  {
    id: '565',
    name: 'eResources | National Library Board Singapore',
    url: 'https://eresources.nlb.gov.sg/main',
  },
  {
    id: '566',
    name: 'Global Citizen Forum - Involve. Evolve. Empower.',
    url: 'https://www.globalcitizenforum.org/',
  },
  {
    id: '567',
    name: 'Financial Charts and Data',
    url: 'https://www.slickcharts.com/',
  },
  {
    id: '568',
    name: 'Compare the Best Loans, Insurance & Credit Cards in Singapore|',
    url: 'https://www.moneysmart.sg/',
  },
  {
    id: '569',
    name: 'Not Overthinking',
    url: 'https://notoverthinking.com/',
  },
  {
    id: '570',
    name: 'Last Minute GRE Tips',
    url: 'https://magoosh.com/gre/last-minute-gre-tips/',
  },
  {
    id: '571',
    name: 'The South Asian stories you need to know | The Juggernaut',
    url: 'https://www.thejuggernaut.com/',
  },
  {
    id: '572',
    name: 'Brown Girl Magazine',
    url: 'https://browngirlmagazine.com/',
  },
  {
    id: '573',
    name: 'The Crypto Syllabus',
    url: 'https://the-crypto-syllabus.com/',
  },
  {
    id: '574',
    name: 'Big 7 Travel Home – Big 7 Travel',
    url: 'https://bigseventravel.com/',
  },
  {
    id: '575',
    name: 'Lonely Planet | Travel Guides & Travel Information - Lonely Planet',
    url: 'https://www.lonelyplanet.com/',
  },
  {
    id: '576',
    name: "Lexie Limitless – Lexie Alford's Journey Around the World",
    url: 'https://lexielimitless.com/',
  },
  {
    id: '577',
    name: 'TechTogether Atlanta',
    url: 'https://atlanta.techtogether.io/#schedule',
  },
  {
    id: '578',
    name: 'Black Travel Blog - Been Around The Globe',
    url: 'https://www.beenaroundtheglobe.com/',
  },
  {
    id: '579',
    name: 'Secure Your Digital Life - Surfshark',
    url: 'https://surfshark.com/',
  },
  {
    id: '580',
    name: 'Watch Free Movies and TV Shows Online | Streaming Movies and TV | Tubi',
    url: 'https://tubitv.com/home',
  },
  {
    id: '581',
    name: "Men's Health - Fitness, Nutrition, Health, Sex, Style & Weight Loss Tips for Men",
    url: 'https://www.menshealth.com/',
  },
  {
    id: '582',
    name: "GQ India - India's Leading Men's Magazine - Fashion, Style, Entertainment, Fitness, Lifestyle, Grooming | GQ India",
    url: 'https://www.gqindia.com/',
  },
  {
    id: '583',
    name: 'Rangr | Knowledge Worth Sharing',
    url: 'https://www.rangr.org/',
  },
  {
    id: '584',
    name: 'Tools for Thinking | Baronfig',
    url: 'https://baronfig.com/',
  },
  {
    id: '585',
    name: 'Internet Speed Test - Measure Network Performance | Cloudflare',
    url: 'https://speed.cloudflare.com/',
  },
  {
    id: '586',
    name: 'Sign up for Surfshark VPN account',
    url: 'https://order.surfshark.com/',
  },
  {
    id: '587',
    name: '⚡️ Luck as a System - by Michael Batko - Batko OS',
    url: 'https://batko.substack.com/p/-luck-as-a-system',
  },
  {
    id: '588',
    name: 'All Coursepacks | Harvard Business Publishing Education',
    url: 'https://hbsp.harvard.edu/coursepacks?cid=email%7Cwebsite%7Cstudent-cp-purchase-conf-email%7Cnone%7Cstudent-purchase%7Cstudents%7Cvarious%7Congoing',
  },
];
