/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Enis",
  logo_name: "enis.i()",
  nickname: "Enis",
  full_name: "Enis Ismail",
  subTitle:
    "Software Development Тechnical Lead @ AIOPSGROUP, Salesforce B2C Commerce Enthusiast.",
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
        "⚡ Backend development using SFCC, NodeJS, etc.",
        "⚡ Building responsive website front end",
        "⚡ CI/CD",
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
      certificate_link: "salesforce.com/trailblazer/eismail",
      alt_name: "Salesforce",
      color_code: "#0d9dda",
    },
    {
      title: "Salesforce B2C Commerce Developer",
      subtitle: "Salesforce B2C Commerce",
      logo_path: "sf_b2c_dev.png",
      certificate_link: "salesforce.com/trailblazer/eismail",
      alt_name: "Salesforce",
      color_code: "#0d9dda",
    },
    {
      title: "Learn and Understand NodeJS",
      subtitle: "Node.js",
      logo_path: "nodejs.png",
      certificate_link: "https://www.udemy.com/course/understand-nodejs",
      alt_name: "Node.js",
      color_code: "#edf2eb",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Below are some of my projects. My best experience is to create Salesforce B2C Commerce Cloud projects. Note that not all of the mentioned projects are public.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "enis2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@enis.89.ismail",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "eiPortfolio",
      url: "https://github.com/enis-ismail/eiPortfolio",
      description: "(This) A clean and full customizable portfolio template.",
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
      description: "Download, parse and analyze SFCC logs.",
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
