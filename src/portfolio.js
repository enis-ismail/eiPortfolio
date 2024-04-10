/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Welcome!",
  title2: "Enis",
  logo_name: "enis.dev()",
  nickname: "Enis",
  full_name: "Enis Ismail",
  subTitle:
    "A dedicated Technical Lead at AIOPSGROUP with a keen interest in Salesforce B2C Commerce. I enjoy creating solutions that make a difference.",
  mail: "mailto:enis89ismail@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/enis-ismail",
  linkedin: "https://www.linkedin.com/in/enis-ismail-05192044/",
  gmail: "enis89ismail@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Implementing solid backend systems with SFCC and NodeJS, focusing on reliability and maintainability.",
        "⚡ Crafting user-friendly website frontends that perform well across all devices.",
        "⚡ Applying CI/CD practices to improve code quality and deployment efficiency.",
      ],
      softwareSkills: [
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "logos:salesforce",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "skill-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "skill-icons:nodejs-light",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Salesforce B2C Commerce Architect",
      subtitle: "Salesforce B2C Commerce",
      logo_path: "sf_b2c_arch.png",
      certificate_link: "https://www.salesforce.com/trailblazer/eismail",
      alt_name:
        "Official Salesforce B2C Commerce Architect Certification Badge",
      color_code: "#0d9dda",
    },
    {
      title: "Salesforce B2C Commerce Developer",
      subtitle: "Salesforce B2C Commerce",
      logo_path: "sf_b2c_dev.png",
      certificate_link: "https://www.salesforce.com/trailblazer/eismail",
      alt_name:
        "Official Salesforce B2C Commerce Developer Certification Badge",
      color_code: "#0d9dda",
    },
    {
      title: "Learn and Understand NodeJS",
      subtitle: "Node.js",
      logo_path: "nodejs.png",
      certificate_link: "https://www.udemy.com/course/understand-nodejs",
      alt_name: "Completed Node.js Course Badge",
      color_code: "#edf2eb",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects Showcase",
  description:
    "Presented here are a selection of my projects, with a special emphasis on Salesforce B2C Commerce Cloud creations. Please be aware that some of these projects are confidential and not publicly accessible.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Get in Touch",
    profile_image_path: "enis-ismail.png",
    description:
      "Feel free to reach out through any of the channels listed below. I'm committed to responding promptly.",
  },
  blogSection: {
    title: "Insights & Musings",
    subtitle:
      "While I don't blog regularly, I make it a point to share insightful posts about my most compelling work.",
    link: "https://medium.com/@enis.89.ismail",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "eiPortfolio",
      url: "https://github.com/enis-ismail/eiPortfolio",
      description:
        "A sleek, fully customizable portfolio template for your professional needs.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "sfcc-logs",
      url: "https://github.com/enis-ismail/sfcc-logs",
      description:
        "A tool designed to download, parse, and analyze SFCC logs for efficient troubleshooting.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  certifications,
  projectsHeader,
  contactPageData,
  projects,
};
