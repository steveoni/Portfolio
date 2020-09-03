
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Stephen Oni",
  title: "Hi all, I'm Steveoni",
  subTitle: emoji("The musing of a curious being. Software/Machine learning Engineer by skills. A design Fanatic. Physics was my first step to the intellectual world. 🚀"),
  resumeLink: "https://drive.google.com/file/d/1z8yIruYj5simoHOo4abrdZQjfkUZgBLq/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/steveoni",
  linkedin: "http://www.linkedin.com/in/stephen-oni-189488123",
  gmail: "stephenoni2@gmail.com",
  medium: "https://medium.com/@steveoni",
  twitter: "https://twitter.com/steveoni"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY SOFTWARE/MACHINE LEARNING ENGINEER, BUILDING DATA DRIVEN PRODUCT(SOFTWARE)",
  skills: [
    emoji("⚡ Develop scalable data driven software."),
    emoji("⚡ Infusing Deep learning algorithm into Software (especially web app)"),
    emoji("⚡ Integration of third party services such as GCP / Firebase")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "fab fa-tumblr"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fab fa-kickstarter-k"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist / Researcher",  
      company: "DataScienceNigeria",
      companylogo: require("./assets/images/dsn.png"),
      date: "Feb 2018 – Present",
      desc: "Researching how to infuse Machine/Deep learning algorithms into industries in Nigeria. Alongside enforcing the largest AI community in Nigeria to raise 1million AI talent in the next 10years",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Machine Learning Engineer",   
      company: "Demz Analytics",
      companylogo: require("./assets/images/demzanalytics.jpeg"),
      date: "Oct 2019 – Feb 2020",
      desc: "Contract Base",
      descBullets: [
        "Automate the data curation(gathering) process using twitter bot, scheduled custom google api using cron jobs and amazon s3 bucket and docker",
        "Develop an object detection model for security proposed to prevent leakage of official document using yolov3 in pytorch",
        "Work with a team of python Developers, to build a smart editor, to convert pdf containing table (financial report) to editbale form for banks"
      ]
    },
    {
      role: "Data Scientist / Python Developer",  
      company: "iQube Lab",
      companylogo: require("./assets/images/iqube.png"),
      date: "April 2019 – Oct 2019",
      desc: "Contract Base",
      descBullets: [
        "Built a data driven web app for analyzing user twitter profile",
        "The app was built using Flask, pandas, mysql, dimple.js, memcachier, textblob, and deployed on heroku"
      ]
    },
    {
      role: "Software Engineer Intern",  
      company: "Longbridge Technologies",
      companylogo: require("./assets/images/long.jpeg"),
      date: "Jun 2018 – Dec 2018",
      desc: "Java Developer",
      descBullets: [
        "Develop scalable multi-tenant app using hibernate and spring framework",
        "Also implement the app frontend using javascript, jquery and DataTable."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "steveoni", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Tensorflow Open source",
      subtitle: "One of my co-created opensource project (Danfojs) got featured on Tensorflow Blog, as a new tool in pioneering Data science project in Javascript",
      image: require("./assets/images/tf.png"),
      footerLink: [
        // { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Tensorflow Blog", url: "https://blog.tensorflow.org/2020/08/introducing-danfo-js-pandas-like-library-in-javascript.html?linkId=98080391" }
      ]
    },
    {
      title: "Traffic Jam: Predicting People's Movement into Nairobi",
      subtitle: "Led a team of three to win the 3rd Place.",
      image: require("./assets/images/zindi2.png"),
      footerLink: [{ name: "Zindi.Africa", url: "https://zindi.africa/competitions/traffic-jam-predicting-peoples-movement-into-nairobi/leaderboard" }]
    },

    {
      title: "Sustainable Development Goals (SDGs): Text Classification Challenge",
      subtitle: "Create a text classification model that won the 3rd place using machine learning",
      image: require("./assets/images/zindi2.png"),
      footerLink: [
        { name: "Certification", url: "https://zindi.africa/users/steveoni/competitions/certificate" }
      ]
    },
    {
      title: "ICLR Workshop Challenge #1: CGIAR Computer Vision for Crop Disease",
      subtitle: "Create an image classification for plant diseases. 18th position out of 338 on leaderboard, top 1%",
      image: require("./assets/images/zindi2.png"),
      footerLink: [
        { name: "Certification", url: "https://zindi.africa/competitions/iclr-workshop-challenge-1-cgiar-computer-vision-for-crop-disease/leaderboard" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://heartbeat.fritz.ai/exploring-language-models-for-neural-machine-translation-part-one-from-rnn-to-transformers-3e53b7d8a01f?source=---------8------------------",
      title: "Exploring Language Models for Neural Machine Translation (Part One): From RNN to Transformers",
      description: "Explain in full details the Transformer model and how to implement Neural Machine Translation"
    },
    {
      url: "https://heartbeat.fritz.ai/exploring-language-models-for-neural-machine-translation-part-two-from-transformers-to-gpt-2-7f045c95dc1e",
      title: "Exploring Language Models for Neural Machine Translation (Part Two): From Transformers to GPT-2",
      description: "Shows how to implement GPT-2 from scratch inorder to understand the working principle of the model"
    },
    {
      url: "https://medium.com/analytics-vidhya/fast-customer-care-response-with-deep-learning-and-twitter-bot-9d7e4a2ec390?source=---------12------------------",
      title: "Fast Customer Care Response with Deep Learning and Twitter Bot.",
      description: "The article illustrates how to build a full data-driven application. Using Banks customer care as a case study"
    },
    {
      url: "https://heartbeat.fritz.ai/facial-recognition-system-with-javascript-f9659c381434?source=---------9------------------",
      title: "Facial Recognition System with JavaScript",
      description: "The article illustrates how to build a facial recognition in javascript using faceapi and tensorflowjs"
    },
    {
      url: "https://becominghuman.ai/introduction-to-recommendation-system-in-javascript-74209c7ff2f7?source=---------18------------------",
      title: "Introduction To Recommendation system In Javascript",
      description: "the articles explains how to build a recommendation system (collaborative filter) in javascript"
    },
    {
      url: "https://heartbeat.fritz.ai/create-a-deep-learning-library-in-javascript-from-scratch-part-2-11fc5e94a8a?source=---------4------------------",
      title: "Create a Deep Learning Library in JavaScript from Scratch (Part 2)",
      description: "The article illustrates how to build a Deep learning linrary in javacript from scratch"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDG😅"),

  talks: [
    {
      title: "Convolutional Neural Network",
      subtitle: "DataScience Nigera Webinar: Intuition behind CNN 2020",
      slides_url: "https://docs.google.com/presentation/d/1FQD9KqQtzlLtAFRBLRjtorXznjefx0tG7GA6tZ-OCzk/edit?usp=sharing",
      event_url: "https://twitter.com/DataScienceNIG/status/1249786456136187904"
    },
    {
      title: "AI Roadmap ",
      subtitle: "How to get into Machine learning, AI+FUTA (Undergraduate) 2020",
      slides_url: "https://docs.google.com/presentation/d/1XieigBarMSC2W6GI52ZK_MF32NjL1V9R4wpQxG5uoRE/edit?usp=sharing",
      event_url: "https://twitter.com/AiPlus_FUTA/status/1281540171465396224"
    },
    {
      title: "Introduction to Deep Learning",
      subtitle: "Bitgrit campus bootcamp 2019",
      slides_url: "",
      event_url: "https://twitter.com/bitgritfuta/status/1147002748585553926"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2349032728196",
  email_address: "stephenoni2@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "steveoni"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
