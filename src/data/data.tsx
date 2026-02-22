import {FaGithub, FaLinkedin, FaStackOverflow, FaXTwitter} from 'react-icons/fa6';
import {HiAcademicCap, HiBuildingOffice2, HiCalendar, HiFlag, HiMap, HiSparkles} from 'react-icons/hi2';

import heroImage from '../images/Bukit Batok.jpg';
import blueShieldConsulting from '../images/portfolio/BlueShield Consulting.jpg';
import echoChat from '../images/portfolio/EchoChat.png';
import marketResearchExternship from '../images/portfolio/Happy Sneeze Market Research Externship.jpg';
import jeaTechnologyDashboard from '../images/portfolio/JEA Technology Dashboard.png';
import leapDashboard from '../images/portfolio/Leap Dashboard.png';
import legalLingo from '../images/portfolio/Legal Lingo.jpg';
import rmsBAPracticuum from '../images/portfolio/RMS Business Analytics Practicuum.png';
import weCareJaxAutomation from '../images/portfolio/WeCareJax Automation.png';
import qinetChurnAnalysis from '../images/portfolio/QiNet Churn Analysis.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
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
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
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
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> based in Singapore, currently
        working for <strong className="text-stone-100">Tata Consultancy Services</strong> on enterprise-level Java
        projects, leveraging Spring Boot to build scalable and efficient solutions.
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
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hey there! As a seasoned full-stack developer with over 2 years of experience, I've had the opportunity to work across various technical domains within the IT sector, including test automation, mobile and web application development, and data analytics. Currently, I'm working on enterprise-level Java projects for the Singapore Land Authority at Tata Consultancy Services.
  Before starting my career afresh in Singapore, I earned a Master's in Information Systems from the University of Florida. My graduate studies equipped me with core competencies in data analytics and provided a comprehensive understanding of how businesses can leverage data and systems to drive success.
  I feel fulfilled when I apply my technical expertise to address critical business problems: whether it's developing a mobile app for a Miami-based environmental non-profit to educate residents on recycling initiatives or creating a dashboard for a Virginia-based non-profit to showcase energy-saving KPIs to its stakeholders.`,
  aboutItems: [
    {label: 'Location', text: 'Bukit Batok, Singapore', Icon: HiMap},
    {label: 'Age', text: '29', Icon: HiCalendar},
    {label: 'Nationality', text: 'Singaporean', Icon: HiFlag},
    {label: 'Interests', text: 'Effective Altruism, Spirituality, Podcasts, Music (Hindi/English)', Icon: HiSparkles},
    {label: 'Education', text: 'National University of Singapore', Icon: HiAcademicCap},
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
        name: 'Spring Boot',
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
    url: 'https://drive.google.com/file/d/1AJldMg0LWAQifHqeJUuyFWCU6q1zxbBF/view',
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
    title: 'Software Engineer',
    content: (
      <p>
        I oversaw the deployment and production support for an{' '}
        <u>
          <a href="https://struts.apache.org/"> Apache Struts MVC framework </a>
        </u>{' '}
        based intranet platform used by a Singapore Governmental agency to serve multiple business critical documents
        for secure storage and processing. I also charted a comprehensive migration plan for transitoning from the
        legacy Struts to a modern Angular & Spring Boot based tech stack in alignment with GovTech modernization
        initiatives. Furthermore, I collaborated cross functionally with Business Analyst, IT Admins and Middleware to
        patch critical application issues, improving application reliability and user satisfaction.
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
export const socialLinks: Social[] = [
  {label: 'Github', Icon: FaGithub, href: 'https://github.com/aaditkamat'},
  {label: 'Stack Overflow', Icon: FaStackOverflow, href: 'https://stackoverflow.com/users/10334485/aadit-kamat'},
  {label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/aaditkamat/'},
  {label: 'X', Icon: FaXTwitter, href: 'https://x.com/aaditkamat'},
];
