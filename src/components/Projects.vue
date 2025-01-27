<template>
  <div class="projects-container">
    <div class="project-block" v-for="(project, index) in projects" :key="index">
      <div class="project-info">
        <!-- Project Image Section -->
        <div class="project-logo">
          <img :src="project.image" alt="Project Image" class="logo" />
        </div>
        <div class="project-details">
          <h3 class="project-title">
            {{ project.name }}
            <!-- GitHub Icon -->
            <a :href="project.github" target="_blank" class="github-link">
              <img src="@/assets/github.png" alt="GitHub Icon" class="github-icon" />
            </a>
            <!-- Status Icons and Text -->
            <div class="status-container">
              <img 
                v-if="project.status === 'completed'" 
                src="@/assets/completed-icon.png" 
                alt="Completed Icon" 
                class="status-icon completed"
                title="completed"
              />
              <span v-if="project.status === 'completed'" class="status-text">Completed</span>
              
              <img 
                v-if="project.status === 'in-progress'" 
                src="@/assets/in-progress-icon.png" 
                alt="In Progress Icon" 
                class="status-icon in-progress"
                title="in-progress"
              />
              <span v-if="project.status === 'in-progress'" class="status-text">In Progress</span>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillLogos: [
        { src: require('@/assets/js.png'), alt: "JavaScript", category: "Languages" },
        { src: require('@/assets/python.png'), alt: "Python", category: "Languages" },
        { src: require('@/assets/java.png'), alt: "Java", category: "Languages" },
        { src: require('@/assets/embeddedc.png'), alt: "Embedded C", category: "Languages" },
        { src: require('@/assets/html.png'), alt: "HTML", category: "Languages" },
        { src: require('@/assets/c.png'), alt: "C", category: "Languages" },
        { src: require('@/assets/css.png'), alt: "CSS", category: "Languages" },
        { src: require('@/assets/ruby.png'), alt: "Ruby", category: "Languages" },
        { src: require('@/assets/vue.png'), alt: "Vue Js", category: "Frameworks" },
        { src: require('@/assets/cn.png'), alt: "Computer Networks", category: "Others" },
        { src: require('@/assets/mysql.png'), alt: "MySQL", category: "Tools" },
        { src: require('@/assets/git.png'), alt: "Git", category: "Tools" },
        { src: require('@/assets/github.png'), alt: "GitHub", category: "Tools" },
        { src: require('@/assets/simulink.png'), alt: "Simulink", category: "Tools" },
        { src: require('@/assets/matlab.png'), alt: "Matlab", category: "Tools" }
      ],
      projects: [
        {
          name: 'Dairy Business Web Application',
          image: require('@/assets/dairyProject.png'),
          github: 'https://github.com/username/project1',
          status: 'in-progress',
          skills: ['MySQL', 'Java', 'HTML', 'CSS'],
        },
        {
          name: 'Bank Transaction Management App',
          image: require('@/assets/bankProject.png'),
          github: 'https://github.com/username/project2',
          status: 'completed',
          skills: ['Java', 'HTML', 'MySQL'],
        },
        {
          name: 'EV Charging Point Monitoring',
          image: require('@/assets/chargingStation.png'),
          github: 'https://github.com/username/project3',
          status: 'completed',
          skills: ['Embedded C', 'Simulink', 'HTML'],
        }
      ]
    };
  },
  methods: {
    // Get the logo for a given skill
    getSkillLogo(skill) {
      const skillLogo = this.skillLogos.find(logo => logo.alt === skill);
      return skillLogo ? skillLogo.src : ''; // Return the src if found, otherwise return an empty string
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
  width: 20px;
  height: 20px;
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
}

.github-icon {
  width: 25px;
  height: 25px;
  margin-left: 10px;
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
