import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ninetybottom,
  anglebottomright,
  angletopleft,
  angletopright,
  arrowbottomdetailed,
  arrowdowndetailed,
  arrow,
  cross,
  invertedtriangle,
  rombo,
  square,
  triangle,
  twocolumns,
  twocolumnsprox,
  verticalcross,
  widecolumn,
  datavisualization,
  artsoundlogo,
  attackforgelogo,
  onepointlogo,
  playsidelogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Engineering",
    icon: triangle,
  },
  {
    title: "UI / UX Design",
    icon: cross,
  },
  {
    title: "Information Design",
    icon: datavisualization,
  },
  {
    title: "Technical Writing",
    icon: twocolumns,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  // Icon Backgrounds Colors: Grey:#14110f | Hard-White:#F7F7F2 | white:#E6DEDD;
  {
    title: "Technical Writer ",
    company_name: "Freelance",
    icon: twocolumns,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Created detailed system documentation, including architecture diagrams, data flow diagrams, and technical specifications.",
      "Translated technical documents, user manuals, and online help systems from English to Spanish, ensuring accurate and culturally appropriate content for Spanish-speaking users.",
    ],
  },
  {
    title: "XR Front-End Developer",
    company_name: "Playside - Short term contract",
    icon: playsidelogo,
    iconBg: "#14110f",
    date: "Dec 2023 - April 2024",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Crafted Virtual Reality User Interfaces utilising TypeScript",
      "Conducted thorough testing and code reviews",
      "Collaborated closely with UX designers and UI designers",
    ],
  },
  {
    title: "Front-End Engineer",
    company_name: "AttackForge - Long term contract",
    icon: attackforgelogo,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Oct 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Engaged in the development of Angular-based web applications",
      "Migrated an enterprise codebase from AngularJS to Angular v2",
      "Lead the user interface and user experience development for a desktop application",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Onepoint AU - Short term contract",
    icon: onepointlogo,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Mar 2022",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed web and mobile applications using React and Electron.",
    ],
  },
  {
    title: "Website Engineer",
    company_name: "Art Sound FM - Volunteer",
    icon: artsoundlogo,
    iconBg: "#14110f",
    date: "Jul 2021 - Dec 2021",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Participated in e-commerce development and backend consulting",
    ],
  },
  {
    title: "Web Developer + UI / UX Designer",
    company_name: "Freelance",
    icon: invertedtriangle,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Jan 2019",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",

      "Developed and maintained multiple websites using HTML, CSS, JavaScript, and PHP.",

      "Created wireframes, prototypes, and mockups using tools like Sketch, Figma, and Adobe XD to visualize and iterate design concepts.",

      "Conducted user research through interviews, surveys, and usability testing to gather insights and inform design decisions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nisi risus. Duis feugiat commodo convallis. Ut at ante elementum quam facilisis pretium. Integer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "remark-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nisi risus. Duis feugiat commodo convallis. Ut at ante elementum quam facilisis pretium.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "remark-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nisi risus. Duis feugiat commodo convallis. Ut at ante elementum quam facilisis pretium.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "remark-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
