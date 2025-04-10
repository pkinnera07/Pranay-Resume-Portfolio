<template>
  <div class="projects-container">
    <div class="project-block" v-for="(project, index) in projects" :key="index" @click="toggleDetails(index)">
      <div class="project-info">
        <!-- Project Image Section -->
        <div class="project-logo">
          <img :src="project.image" alt="Project Image" class="logo" />
        </div>
        <div class="project-details">
          <h3 class="project-title">
            {{ project.name }}
            <!-- GitHub Icon -->
            <a v-if="project.github" :href="project.github" target="_blank" class="github-link">
              <i class="fab fa-github"></i>
            </a>
            <!-- Status Icons and Text -->
            <div class="status-container">
              <img 
                v-if="project.status === 'completed'" 
                src="@/assets/projects/completed-icon.png" 
                alt="Completed Icon" 
                class="status-icon completed"
                title="completed"
              />
              <span v-if="project.status === 'completed'" class="status-text">Completed</span>
              
              <img 
                v-if="project.status === 'in-progress'" 
                src="@/assets/projects/in-progress-icon.png" 
                alt="In Progress Icon" 
                class="status-icon in-progress"
                title="in-progress"
              />
              <span v-if="project.status === 'in-progress'" class="status-text">In Progress</span>
              <a v-if="project.live === 'live'" :href="project.website" target="_blank" class="github-link">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>              
              </a>
            </div>
          </h3>
          <div class="skills-used">
            <!-- Loop through skills array and display corresponding icons -->
            <img
              v-for="(skill, skillIndex) in project.skills"
              :key="skillIndex"
              :src="getSkillLogo(skill)"
              :alt="skill"
              class="skill-icon"
            />
          </div>
        </div>
        <div class="expand-toggle">
          <img 
            :src="project.showDetails ? upArrow : downArrow" 
            alt="Expand/Collapse" 
            class="expand-icon"
          />
        </div>
      </div>
      <div v-if="project.showDetails" class="project-details-expanded">
        <ul>
          <li v-for="(sentence, index) in project.details" :key="index">
            {{ sentence }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import upArrow from '@/assets/projects/upArrow.png';
import downArrow from '@/assets/projects/downArrow.png';
import '@fortawesome/fontawesome-free/js/all.js';
export default {
  data() {
    return {
      skillLogos: [
        { src: require('@/assets/skills/python.png'), alt: "Python", category: "Languages" },
        { src: require('@/assets/skills/java.png'), alt: "Java", category: "Languages" },
        { src: require('@/assets/skills/ruby.png'), alt: "Ruby", category: "Languages" },
        { src: require('@/assets/skills/c.png'), alt: "C", category: "Languages" },
        { src: require('@/assets/skills/c#.png'), alt: "C#", category: "Languages" },
        { src: require('@/assets/skills/embeddedc.png'), alt: "Embedded C", category: "Languages" },

        { src: require('@/assets/skills/html.png'), alt: "HTML", category: "Frontend" },
        { src: require('@/assets/skills/css.png'), alt: "CSS", category: "Frontend" },
        { src: require('@/assets/skills/js.png'), alt: "JavaScript", category: "Frontend" },
        { src: require('@/assets/skills/vue.png'), alt: "Vue Js", category: "Frontend" },
        { src: require('@/assets/skills/react.png'), alt: "React", category: "Frontend" },
        { src: require('@/assets/skills/bootstrap.png'), alt: "Bootstrap", category: "Frontend" },
        { src: require('@/assets/skills/typescript.png'), alt: "TypeScript", category: "Frontend" },
        { src: require('@/assets/skills/tailwind.png'), alt: "Tailwind CSS", category: "Frontend" },

        { src: require('@/assets/skills/nodejs.png'), alt: "Node.js", category: "Backend" },
        { src: require('@/assets/skills/expressjs.png'), alt: "Express.js", category: "Backend" },
        { src: require('@/assets/skills/rails.png'), alt: "Ruby on Rails", category: "Backend" },
        { src: require('@/assets/skills/mongodb.png'), alt: "MongoDB", category: "Backend" },
        { src: require('@/assets/skills/mysql.png'), alt: "MySQL", category: "Backend" },
        // { src: require('@/assets/skills/postgresql.png'), alt: "PostgreSQL", category: "Backend" },
        { src: require('@/assets/skills/graphql.png'), alt: "GraphQL", category: "Backend" },
        { src: require('@/assets/skills/springboot.png'), alt: "SpringBoot", category: "Backend" },


        { src: require('@/assets/skills/docker.png'), alt: "Docker", category: "Tools" },
        { src: require('@/assets/skills/kubernetes.png'), alt: "Kubernetes ", category: "Tools" },
        { src: require('@/assets/skills/git.png'), alt: "Git", category: "Tools" },
        { src: require('@/assets/skills/github.png'), alt: "GitHub", category: "Tools" },
        { src: require('@/assets/skills/azure.png'), alt: "Azure", category: "Tools" },
        { src: require('@/assets/skills/selenium.png'), alt: "Selenium ", category: "Tools" },
        { src: require('@/assets/skills/simulink.png'), alt: "Simulink", category: "Tools" },
        { src: require('@/assets/skills/matlab.png'), alt: "Matlab", category: "Tools" },
      ],
      projects: [
        {
          name: 'IgnitED',
          image: require('@/assets/projects/olp.png'),
          status: 'completed',
          website: 'https://game-dimension.netlify.app/',
          skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'GraphQL'],
          showDetails: false,
          details:["Built an online learning platform with React.js, achieving a 20% improvement in page load times by utilizing React Router for efficient navigation and dynamic component rendering. Designed reusable, modern UI elements styled for intuitive UX.", 
                   "Constructed backend with Node.js and Express.js, fabricating REST and GraphQL APIs, MongoDB for data storage, and Gmail SMTP for email notifications. Crafted a custom Course Recommendations API, increasing suggestion accuracy by 30%."]
        },
        {
          name: 'Game Dimension',
          image: require('@/assets/projects/gameDimension.png'),
          github: 'https://github.com/pkinnera07/games-website',
          status: 'completed',
          live: 'live',
          website: 'https://game-dimension.netlify.app/',
          skills: ['React', 'CSS'],
          showDetails: false,
          details:["Developed an interactive gaming platform using React, integrating multiple puzzle and strategy games (e.g., Sudoku, Kakuro, Slide & Sort, and more).", 
                   "Implemented dynamic routing, React hooks, custom components, and responsive design to enhance usability and performance."]
        },
        {
          name: 'Dairy Business Web Application',
          image: require('@/assets/projects/dairyProject.png'),
          github: 'https://github.com/username/project1',
          status: 'in-progress',
          skills: ['MySQL', 'Java', 'Bootstrap', 'HTML', 'CSS'],
          showDetails: false,
          details:["Designing and developing a comprehensive Dairy Business Web application using Java EE and JSF, incorporating reusable templates and composite components to ensure maintainability and code reusability.", 
                   "Implemented robust admin functionality for user creation and role assignment, including secure management of user roles and entity operations based on assigned permissions.", 
                   "Crafting intuitive navigation, comprehensive validation, and Bootstrap-enhanced styling to ensure a user-friendly and visually appealing interface."]
        },
        {
          name: 'Personal Resume Webpage',
          image: require('@/assets/projects/portfolio.png'),
          github: 'https://github.com/pkinnera07/Pranay-Resume-Portfolio',
          status: 'completed',
          skills: ['Vue Js', 'Azure', 'CSS'],
          showDetails: false,
          details:["Created a responsive portfolio website using Vue.js, featuring dynamic navigation and smooth transitions across sections like home, projects, education, and work experience.", 
                   "Implemented mobile-first design with modular components, ensuring seamless adaptation across devices with distinct styling for both mobile and desktop views."]
        },
        {
          name: 'Bank Transaction Management App',
          image: require('@/assets/projects/BankProject.png'),
          github: 'https://github.com/pkinnera07/Bank-Transaction-Mgmt-App',
          status: 'completed',
          skills: ['Java', 'MySQL'],
          showDetails: false,
          details:["Developed a secure & user-friendly JavaFX application using MVC architecture for managing financial transactions in a banking system. Implemented role-specific functionalities for administrators, staff, and users.",
                   "Included cloud database integration for authentication and storage, responsive GUI for seamless navigation, comprehensive transaction tracking, and real-time balance updates."]
        },
        {
          name: 'Net Banking Dashboard Design',
          image: require('@/assets/projects/netbanking.png'),
          github: 'https://github.com/pkinnera07/NetBanking-Dashboard',
          status: 'completed',
          live: 'live',
          website: 'https://pkinnera07.github.io/NetBanking-Dashboard',
          skills: ['HTML', 'CSS', 'JavaScript'],
          showDetails: false,
          details:["This is a styled web dashboard for a net banking application. The page serves as a visual layout, simulating a banking portal with sections such as account details, transactions, transfers, and more."]
        },
        {
          name: 'Link In Bio Page',
          image: require('@/assets/projects/linkinbio.png'),
          github: 'https://github.com/pkinnera07/link-in-bio',
          status: 'completed',
          live: 'live',
          website: 'https://pkinnera07.github.io/link-in-bio/',
          skills: ['HTML', 'CSS', 'JavaScript'],
          showDetails: false,
          details:["This is a styled Link-In-Bio page that can be used as personal bio page."]
        },
        {
          name: 'EV Charging Point Monitoring',
          image: require('@/assets/projects/chargingStation.png'),
          github: 'https://github.com/username/project3',
          status: 'completed',
          skills: ['Embedded C', 'Simulink', 'HTML'],
          showDetails: false,
          details:["Designed and Built a user-centric Level-2 electric vehicle charging point with a response time of less than 100 milliseconds for any operation, integrating a seamless QR code-based activation process.", 
                   "Users scan QR code to access a web interface, input required charging duration, and receive confirmation. The system automatically activates and terminates charging based on user's selection, enhancing convenience and efficiency of EV charging."]
        }
      ]
    };
  },
  methods: {
    // Get the logo for a given skill
    getSkillLogo(skill) {
      const skillLogo = this.skillLogos.find(logo => logo.alt === skill);
      return skillLogo ? skillLogo.src : ''; // Return the src if found, otherwise return an empty string
    },
    toggleDetails(index) {
      this.projects[index].showDetails = !this.projects[index].showDetails;
    }
  },
  computed: {
    // Add up and down arrow images for each project
    upArrow() {
      return upArrow;
    },
    downArrow() {
      return downArrow;
    }
  }
};
</script>

<style scoped>
*{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
/* Project Section Styling */
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.project-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  position: relative;
  width: auto;
  background-color: rgba(255, 255, 255, 0.4); /* Transparent white background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-block:hover{
  transform: scale(1.01);
  transition: 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

}

.expand-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.expand-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-block:hover .expand-icon {
  transform: scale(1.1);
}

/* Expanded project details section */
.project-details-expanded {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  color: #333;
}

/* Project Info Section */
.project-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;
  overflow: hidden;
}

.project-logo {
  flex-shrink: 0;
  margin-right: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.project-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #00152b;
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-container {
  display: flex;
  align-items: center;
}

.status-icon {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}

.status-text {
  margin-left: 10px;
  font-size: 14px;
  color: #333;
}

/* Skills Icons */
.skills-used {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.skill-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

/* GitHub Link */
.github-link {
  display: inline-block;
  color: black;
}

.github-icon {
  width: 25px;
  height: 25px;
  margin-left: 10px;
}


/* Dark Theme */
.app-container.dark .project-block {
  background-color: rgba(255, 255, 255, 0.215); /* Transparent white background */
}
.app-container.dark .project-details-expanded {
  color: azure;
}
.app-container.dark .project-title{
  color: azure;
}
.app-container.dark .status-text{
  color: azure;
}

.app-container.dark .github-link {
  color: azure;
}

.tilt {
  perspective: 1500px; /* Adds a 3D perspective effect */
  transform-style: preserve-3d;
  transition: transform 0.1s ease-in-out;
}

@media (max-width: 768px) {
  .projects-container {
    width:100%;
  }
  .project-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    position: relative;
    width: auto;
    background-color: rgba(255, 255, 255, 0.4); /* Transparent white background */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .logo {
    height: 60px;
    width: 60px;
  }
  .project-info {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto;
    height: auto;
    overflow: hidden;
  }
  .skill-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  .project-title {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    gap: 0px;
  }
  .status-text {
  opacity: 0;
  }
}
</style>
