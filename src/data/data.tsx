import {FaGithub, FaLinkedin, FaStackOverflow, FaXTwitter} from 'react-icons/fa6';
import {
  HiAcademicCap,
  HiArrowDownTray,
  HiBuildingOffice2,
  HiCalendar,
  HiFlag,
  HiMap,
  HiSparkles,
} from 'react-icons/hi2';

import heroImage from '../images/Bukit Batok.jpg';
import blueShieldConsulting from '../images/portfolio/BlueShield Consulting.jpg';
import echoChat from '../images/portfolio/EchoChat.png';
import marketResearchExternship from '../images/portfolio/Happy Sneeze Market Research Externship.jpg';
import jeaTechnologyDashboard from '../images/portfolio/JEA Technology Dashboard.png';
import leapDashboard from '../images/portfolio/Leap Dashboard.png';
import legalLingo from '../images/portfolio/Legal Lingo.jpg';
import rmsBAPracticuum from '../images/portfolio/RMS Business Analytics Practicuum.png';
import weCareJaxAutomation from '../images/portfolio/WeCareJax Automation.png';
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
  TimelineItem,
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
        working with <strong className="text-stone-100">Florida Community Innovation</strong> to build a mobile app that
        would empower residents within the Miami-Dade county with knowledge about recycleable materials, curbside
        programs and drop off locations in their vicinity, as well as sustainability related events organized in the
        area.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: HiArrowDownTray,
    },
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
  description: `Hey there! I’m Aadit—a problem-solver at heart who loves turning complex challenges into clear, actionable solutions. My journey’s been all about connecting the dots: I started as an engineer, then pivoted to business to understand how technology and strategy intersect.

  I’m the kind of person who thrives in collaborative spaces—whether I’m automating app tests at Shopee, building payment systems at Visa, or helping nonprofits like WeCareJax streamline their operations. What drives me? Seeing how data and systems can create real impact—like designing cash flow models to help struggling businesses or benchmarking restaurant finances to unlock growth.

  Outside of spreadsheets and code, I’m a lifelong learner who believes in growth through curiosity and teamwork.`,
  aboutItems: [
    {label: 'Location', text: 'Bukit Batok, Singapore', Icon: HiMap},
    {label: 'Age', text: '28', Icon: HiCalendar},
    {label: 'Nationality', text: 'Singaporean', Icon: HiFlag},
    {label: 'Interests', text: 'Effective Altruism, Spirituality, Podcasts, Music (Hindi/English)', Icon: HiSparkles},
    {label: 'Education', text: 'University of Florida', Icon: HiAcademicCap},
    {label: 'Employment', text: 'Florida Community Innovation', Icon: HiBuildingOffice2},
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
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
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
        level: 9,
      },
      {
        name: 'Spring Boot',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 8,
      },
      {
        name: 'Expo',
        level: 8,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Jupyter (Python)',
        level: 9,
      },
      {
        name: 'SQL',
        level: 8,
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
    title: 'LEAP Dashboard',
    description:
      "Obtained data from LEAP's Monday.com account to create a dashboard showcasing the metrics that highlight the impact that LEAP has created through its programs",
    url: 'https://dashboard-leap.netlify.app/',
    image: leapDashboard,
  },
  {
    title: 'JEA Technology Scorecard',
    description:
      "Used ETL to get the data from the original Excel sheet for JEA's employee performance-related metrics into PowerBI and created visuals to help the executives better understand the business metrics",
    url: 'https://docs.google.com/presentation/d/1yCiyHcRhLLPspg4zvtwjgle7KtiDqY71_t7CVwZrdmA/',
    image: jeaTechnologyDashboard,
  },
  {
    title: 'Automating Client Feedback Mechanism - WeCareJax',
    description:
      'I created a workflow in Microsoft Power Apps that would allow WeCareJax to  automatically populate their Salesforce dashboard with feedback data from surveys sent to patients post-visit via Microsoft Forms and also investigated ways to improve survey response rates using Mogli, a Salesforce native app that provides bulk messaging capabilities.',
    url: 'https://drive.google.com/file/d/1ckWJeYl6TEJGMoUiwejcnQj58yc9I6zM/edit?pli=1',
    image: weCareJaxAutomation,
  },
  {
    title: 'BlueShield Consulting',
    description:
      'Conducted market analysis and competitive overview to help BlueShield - a Gainesville based Therapeutics startup - to understand the market for its novel immunotherapy based treatment for Depression',
    url: 'https://www.science.org/doi/full/10.1126/science.add7150?casa_token=lngchMBZQ2oAAAAA%3AMiX-hHddparHoLFBXhszlQu4YdhiKR9XoqpFa85i6-sZmcDfvJCqDkcfFGwGe79X-89pTHNj6oPZ',
    image: blueShieldConsulting,
  },
  {
    title: 'LegalLingo',
    description: `LegalLingo is a Chrome Extension that allows users to highlight the objectionable sections of their terms of service document and translates the document into different target languages. The aim is to allow users, especially those from minority communities whose primary language is not English, to better understand the documents so that they can make decisions more easily.

    Our goal is to help users, especially those from minority communities, better understand these documents and make more informed decisions.`,
    url: 'https://github.com/lchin21/Legal-Lingo',
    image: legalLingo,
  },
  {
    title: 'Echo Chat App',
    description:
      'Designed and implemented a messaging module for the mobile app to improve user communication, integrating it seamlessly into the platform. Additionally, I improved code quality and streamlined the development process.',
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
    description: `Performed EDA on 6000+ records to establish relationships between different key metrics such as and leveraged Data Envelopment Analysis (DEA) algorithm to benchmark efficiency based on costs and sales, enabling stakeholders to identify underperforming restaurants`,
    url: 'https://github.com/aaditkamat/QMB6945-RMS-Project',
    image: rmsBAPracticuum,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2024',
    location: 'Warrington College of Business, University of Florida',
    title: 'Masters in Information Systems and Operations Research (MSISOM)',
    content: (
      <p>
        As a graduate student under the Data Science track, I learnt how to apply <strong>data science </strong>
        techniques to solve real-world business problems. I took courses on
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

export const experience: TimelineItem[] = [
  {
    date: 'April 2024 - Present',
    location: 'Florida Community Innovation',
    title: 'Lead Software Engineer',
    content: (
      <>
        <p>
          I am currently leading the development of a mobile app called Recyclepedia that Florida Community Innovation
          (FCI) is building in partnership with Dream in Green (DiG) to empower residents of the Miami Dade county area
          - which has one of the lowest recycling rates within the state - with the knoweldge that would help them adopt
          better recycling practices. <br />
        </p>
        <br />
        <p>Some of the features planned for the mobile app as part of its roadmap:</p>
        <ol>
          <li>
            The home page with a calendar of community events related to recycling organized by Dream in Green (with an
            ad space to allow sponsors to air environmental sustainability related content that helps create revenue for
            the app while keeping it free for users){' '}
          </li>
          <li>
            Curbside/Drop off page that allows users to select the categories of items they wish to recycle and suggest
            them the nearest curbside pickup/drop off location(s) where they can keep their recyclable materials{' '}
          </li>
          <li>Barcode scanner that provides information about whether the material is recyclable or not</li>
          <li>
            Authentication that allows users to create accounts so that they can specifically keep track of which events
            they are attending as well as points and rewards earned from games
          </li>
          <li>
            Chatbot that answers questions from users about recycling and other environmental sustainability initiatives
          </li>
          <li>Mobile games that highlight effective recycling practices</li>
        </ol>
      </>
    ),
  },
  {
    date: 'June 2024 - August 2024',
    location: 'Getzler Henrich & Associates LLC',
    title: 'Data Analyst Intern',
    content: (
      <>
        <p>
          I teamed up with senior analysts to create a customized 13-week cash flow model, which improved our
          forecasting accuracy and helped with strategic planning. I also put together a detailed data dictionary for an
          Excel model to improve data consistency and accessibility.
        </p>
        <br />
        <p>
          Using <strong>Microsoft Fabric</strong>, I prototyped a data pipeline to process client financial data from
          ERP systems. After data cleaning, ingestion, and processing, the pipeline creates a 13-week cash flow model
          with increased forecasting accuracy and reduced <strong>FP&amp;A</strong> time.
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
        I collaborated with Dr. Xiao Fan - the head of the Fan Lab at the University of Florida - on research
        investigating the relationship between variant pathogenicity and protein characteristics. I conducted
        bioinformatics analysis and interpreted the results of the analysis, enabling publication of an analysis on the
        Pediatrics Cardiomyopathy Genes Study
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
          I engineered the backend APIs within a microservices based architecture in <strong>Spring Boot</strong> used
          by major India banks with over 100 thousand customers enrolled with VisaNet Accounts Based Payment Solutions.
        </p>
        <br />
        <p>
          I also built the <strong>Next.js and ChakraUI based </strong>frontend interface for an internal portal that
          streamlined the process of dynamically accessing and manipulating data used by mobile apps in the Singapore
          Innovation Centre, demonstrating real-time payment processing capabilities to clients.
        </p>
      </>
    ),
  },
  {
    date: 'June 2024 - August 2024',
    location: 'Shopee Singapore Pte Ltd',
    title: 'Quality Assurance Engineer',
    content: (
      <>
        <p>
          I helped develop and maintain over 100 test cases for the Promotion modules (Flash Sale/Bundle Deal/Add on
          Deal) for the Android App, significantly enhancing the user experience for more than a million customers.
        </p>
        <br />
        <p>
          I also worked closely with QA Engineers from other departments to refresh our training syllabus and guide new
          engineers in automation tools like <strong>Espresso and UiAutomator</strong>.
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
      name: 'Caroline Nickerson',
      text: `Aadit is the best! Not only does he have technical know-how, but he is also kind, considerate, and a great mentor to younger students. He’s currently building an app that will improve recycling education in Florida, and he’s deftly able to communicate with expert and nonexpert audiences to create tech that serves social good. Anyone would be lucky to work with Aadit!`,
      image:
        'https://media.licdn.com/dms/image/v2/C5603AQH9_myyvM332A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1626871195696?e=1753920000&v=beta&t=PGSv4DqQdbOKaIXyu4IMGmVx3vCy5N8lJJt4WXbtZ-w',
    },
    {
      name: 'Xiao Fan',
      text: `Aadit is an independent, self-disciplined, diligent student. When he expressed a strong interest in pursuing data science projects, I introduced him to a bioinformatics project. Despite not having formal training in biology, he quickly grasped the main concepts of the project and data representation of the biology entities. Showing great enthusiasm, Aadit thoroughly explored the datasets and successfully extracted the required information for his project. I am confident that Aadit will excel in his career pursuits and make meaningful contributions to his chosen field of study.`,
      image:
        'https://media.licdn.com/dms/image/v2/C4D03AQFKBnZAEnGmAQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1526922137987?e=1753920000&v=beta&t=jTdMq-5QMSGipM-JFVd4NqGaFRFh4JZEdCgBsIqgZ-s',
    },
    {
      name: 'Shwetha Ravi',
      text: 'Aadit is a talented software engineer and picks up new skills at an impressive rate. He is also responsible, communicative and passionate about self development. Would highly recommend having him on your team.',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQGUyWeNIALDxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686740577700?e=1753920000&v=beta&t=4ISXB0Vi5Eor863Q62IIiUgvX_S7HcACOavv6WhF9HQ',
    },
    {
      name: 'Robin Loh',
      text: `I was Aadit's mentor during NUS Orbital 2018, which is a self-directed module offered every summer by NUS School of Computing. Together with his teammate, both of them worked on the PlanItRight project, which is a web application that plans itineraries based on the user's travel plans and preferences.
      Aadit demonstrated great enthusiasm in learning software development skills relevant to his project. He successfully defined the functionalities suitable for the intended users in this project and he crafted simple user and developer guides for the web application. There were also many clear and useful illustrations implemented in the web application, such as the use of timeline to visualise the itineraries in a chronological order.
      Throughout the 3 months of mentorship, he displayed good analytical and interpersonal skills. He comprehended new concepts very quickly and he structured his approaches clearly to accomplish his outcomes. I strongly believe that he has the capability to work independently on tough challenges given his inquisitiveness for self-improvement and for developing his technical expertise further.`,
      image:
        'https://media.licdn.com/dms/image/v2/C5603AQGLf9kumkR6Xw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1590974862235?e=1753920000&v=beta&t=ro_lYyuNA9Tlod9z4S9GTgRBf8xXZPDBy4kvzxo_als',
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
      text: 'aadit.kamat@floridainnovation.org',
      href: 'mailto:aadit.kamat@floridainnovation.org',
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
