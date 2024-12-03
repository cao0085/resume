//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImageUrl = 'https://images.wallpaperscraft.com/image/single/man_photographer_roof_146991_3840x2400.jpg';


// Enter here your first and last name
const name = {
  firstname: 'Tony',
  lastname: 'Ko',
  // Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://drive.google.com/drive/folders/1pTxQXyGbzh9UJNwKrgaiP7BWd82gg4GA?usp=drive_link',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Front-End Developer',
];

// Social media profiles buttons
const socialProfiles = [
  // {
  //   name: 'LinkedIn',
  //   icon: 'lni lni-linkedin',
  //   url: 'https://www.linkedin.com/in/christoph-pfrommer',
  // },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://cao0085.github.io/',
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  //   {
  //     name: 'Twitter',
  //     icon: 'lni lni-twitter',
  //     url: 'https://twitter.com/your-username',
  //   },
  //   {
  //     name: 'Facebook',
  //     icon: 'lni lni-facebook',
  //     url: 'https://facebook.com/your-username',
  //   },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Concepts & Tools ',
    icon: 'lni lni-code',
    title: 'Concepts & Tools',
    description: [
      " > Clean Code & Design Patterns、Algorithms(Basics)",
      " > Docker、VM、Shell Command、Jekyll、GitHub Pages、CloudFlare、Azure、OAuth2.0",

      // "Development：Docker、VM、Shell Command",
      // "Deployment：GitHub Pages、CloudFlare、Azure、OAuth2.0"
    ],
    skills: [
      // {
      //   icon: 'lni lni-camera',
      //   title: 'HTML5',
      // },
      // {
      //   icon: 'lni lni-certificate',
      //   title: 'CSS3',
      // },
      // {
      //   icon: 'lni lni-instagram',
      //   title: 'JavaScript',
      // },
    ],
  },
  {
    name: 'Programming Languages',
    icon: 'lni lni-code',
    title: 'Programming Languages',
    description: [
      " > JavaScript：TS、Webpack、React、Vue3",
      " > Python：Selenium、Flask",
      " > JAVA：Leetcode & Algorithm",
    ],
    skills: [
      // {
      //   icon: 'lni lni-adobe',
      //   title: 'adobe',
      // },
      // {
      //   icon: 'lni lni-code',
      //   title: 'Code',
      // },
      // {
      //   icon: 'lni lni-sketch',
      //   title: 'Sketch'
      // },


    ],
  },
  {
    name: 'Communication & Growth',
    icon: 'lni lni-graduation',
    title: 'Soft Skills & Drive',
    description: [
      ">Developed strong communication skills through B2B sales and project management", ">with a passion for self-learning and embracing new technologies."
    ],


    skills: [
      // {
      //   icon: 'lni lni-pinterest',
      //   title: 'Pinterest',
      // },
      // {
      //   icon: 'lni lni-crop',
      //   title: 'Crop',
      // },

    ],
  },

];

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: 'Prompting ChatGPT', value: 100, unit: '%' },
  { word: 'Debugging Code', value: 88, unit: '%' },
  { word: 'Coffee Consumed Daily', value: 3, unit: ' Cups' },
];



// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'Project 1 - Music Notion',
    cardDescription: 'A web-based music notation application designed to simplify and enhance the music creation process.',
    details: [
      {
        label: 'Problem Solved',
        value: 'Manual music notation tools were inefficient and lacked real-time collaboration. This project aimed to streamline music notation creation and sharing.'
      },
      {
        label: 'Key Features',
        value: 'Easy chord progression recording, dual player integration for real-time playback, JSON-based project saving, and PDF export.'
      },
      {
        label: 'Tools Used',
        value: 'TypeScript, Webpack, Spotify API, Web Audio API'
      },
      {
        label: 'Architecture',
        value: 'Implemented Singleton for global state management, Observer Pattern for efficient DOM updates, and Strategy Pattern for modular audio playback.'
      },
      {
        label: 'Live Demo',
        value: <a href="https://www.chord-snap.com/" target="_blank" rel="noopener noreferrer">Music Notion</a>
      },
      {
        label: 'Development Log & Review',
        value: (
          <>
            <a href="https://cao0085.github.io/setup-basics/2024/11/30/music-notion-01.html" target="_blank" rel="noopener noreferrer">Development Log (I)</a>,
            <a href="https://cao0085.github.io/setup-basics/2024/11/30/music-notion-02.html" target="_blank" rel="noopener noreferrer">Development Log (II)</a>,
            <a href="https://cao0085.github.io/setup-basics/2024/11/30/music-notion-03.html" target="_blank" rel="noopener noreferrer">Development Log (III)</a>
          </>
        )
      }
    ],
  },
  {
    title: 'Project 2 - From Open-Source to Custom Website',
    cardDescription: 'A personalized React-based website built from an open-source template, customized to fit specific needs and goals.',
    details: [
      {
        label: 'Problem Solved',
        value: 'Starting with an open-source React template, I customized it to match my specific requirements, saving time and effort while achieving a high-quality result.'
      },
      {
        label: 'Tools Used',
        value: 'React'
      },
      {
        label: 'Understanding and Improving Code',
        value: 'Able to read and understand others\' code, decipher logic, and adapt solutions to fit my needs while maintaining code efficiency and clarity.'
      },
      {
        label: 'Outcome',
        value: 'Successfully customized the open-source template to create a unique website that meets specific needs, all while maintaining efficiency and avoiding redundant work.'
      },
      {
        label: 'Live Demo',
        value: 'Current Web'
      },
    ],
  },
  {
    title: 'Project 3 - Scrapy, Redis, WebSocket, React (In Progress)',
    cardDescription: 'A real-time data pipeline that combines distributed web scraping, instant data updates, and dynamic UI rendering using Scrapy, Redis, WebSocket, and React.',
    details: [
      {
        label: 'Selenium + Scrapy (o)',
        value: 'Completed the scraping pipeline, integrating Selenium for dynamic content rendering and Scrapy for efficient data extraction. Fully functional for the target use case.'
      },
      {
        label: 'Redis (x)',
        value: 'Set up Redis as a task queue and deduplication layer.'
      },
      {
        label: 'WebSocket (x)',
        value: 'Developing the WebSocket server to push real-time updates from Redis to the React frontend.'
      },
      {
        label: 'React (x)',
        value: 'Started the frontend development using React. Integrated WebSocket for real-time data updates and working on rendering dynamic tweet content.'
      }
    ],
  }
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there, I'm Tony. With experience in B2B sales and project management, I have developed strong communication skills and a knack for problem-solving. I am currently seeking front-end/full-stack developer opportunities. Feel free to contact me at codeing0085@gmail.com`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_XXXXXXX',
  templateID: 'template_XXXXXXXX',
  userID: 'XXXXXXXXXXXX',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
