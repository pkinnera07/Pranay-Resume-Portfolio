<template>
  <div id="app" class="app-container">
    <!-- Floating options at the top -->
    <div class="floating-options">
      <button 
        @click="goToSection('home')" 
        :class="{ active: activeSection === 'home' }"
      >Home</button>
      <button 
        @click="goToSection('projects')" 
        :class="{ active: activeSection === 'projects' }"
      >Projects</button>
      <button 
        @click="goToSection('education')" 
        :class="{ active: activeSection === 'education' }"
      >Education</button>
      <button 
        @click="goToSection('workExperience')" 
        :class="{ active: activeSection === 'workExperience' }"
      >Experience</button>
    </div>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Profile Section -->
      <div class="profile-section">
        <div class="profile-pic-container">
          <img src="@/assets/profile.png" alt="Profile Picture" class="profile-pic" />
        </div>
        <div class="profile-info">
          <h1>
            <span class="hi-text">Hi!</span> 
            <span class="name-text">I'm Pranay</span>
          </h1>
          <p class="about-me">I’m a curious full-stack developer with over 4 years of experience in software development. I love solving challenges and building impactful, user-driven applications that make a difference!</p>
        </div>
        <contact></contact>
      </div>
      <!--scroll down arrow for mobile view-->
      <div class="arrow_container">
        <div>
          <p class="chevron"></p>
          <p class="chevron"></p>
          <p class="chevron"></p>
        </div>
        <span class="text">Scroll down</span>
      </div>
      <!-- Mobile Content Sections -->
      <div class="mobile-content">
        <div class="mobile-section" id="home">
          <SkillsBubbles></SkillsBubbles>
        </div>
        <div class="mobile-section" id="projects">
          <Projects></Projects>
        </div>
        <div class="mobile-section" id="education">
          <Education></Education>
        </div>
        <div class="mobile-section" id="workExperience">
          <WorkExperience></WorkExperience>
        </div>
      </div>

      <!-- Static Content Section -->
      <div class="content-section">
        <!-- Load the relevant section component statically without transition -->
        <skills-bubbles v-if="activeSection === 'home'"></skills-bubbles>
        <component :is="currentComponent"></component>
      </div>
    </main>
  </div>
</template>

<script>
import Education from "./components/Education.vue";
import Contact from "./components/Contact.vue";
import Projects from "./components/Projects.vue";
import WorkExperience from "./components/WorkExperience.vue";
import SkillsBubbles from "./components/SkillsBubbles.vue"; // Import the SkillsBubbles component

export default {
  components: {
    Education,
    Contact,
    Projects,
    WorkExperience,
    SkillsBubbles,
  },
  data() {
    return {
      currentComponent: null,  // Static content to load
      activeSection: 'home',   // Track the currently active section
      selectedOption: 'home'
    };
  },
  methods: {
    goToSection(section) {
      console.log(`Navigating to ${section}`);
      this.currentComponent = this.getComponentForSection(section);
      this.activeSection = section;
      // Find the target section and scroll to it
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    },
    getComponentForSection(section) {
      switch (section) {
        case 'education':
          return Education;
        case 'projects':
          return Projects;
        case 'workExperience':
          return WorkExperience;
        default:
          return null;
      }
    },

    setupIntersectionObserver() {
      // Intersection Observer to track when sections come into view
      const observerOptions = {
        root: null, // observing from the viewport
        rootMargin: '0px',
        threshold: 0.5 // 50% visibility to consider section "in view"
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id; // Set the active section
          }
        });
      }, observerOptions);

      // Target all sections that should trigger highlighting
      const sections = document.querySelectorAll('.mobile-section');
      sections.forEach(section => {
        observer.observe(section); // Observe each section
      });
    }
  },

  mounted() {
    this.setupIntersectionObserver();
  },
};
</script>

<style scoped>
/* Overall layout of the app */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url('@/assets/background1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: black;
  overflow-x: hidden;
  overflow-y: hidden;
}
.arrow_container{
  visibility: hidden;
}
.mobile-content{
  display: none;
}
.dropdown{
  display: none;
}
/* Floating options at the top */
.floating-options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  background-color: rgba(3, 31, 58, 1);
  padding: 10px 10px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 50px;
}

button {
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  text-decoration-thickness: 2px;
  color: azure;
  border: none;
}

button:hover {
  background-color: azure;
  color: rgba(3, 31, 58, 1);
}

/* Active button styling */
button.active {
  background-color: azure;
  color: rgba(3, 31, 58, 1);
  text-decoration: underline;
}

/* Main content styling */
.main-content {
  display: flex;
  margin-top: 30px;
  padding-top: 50px;
  padding-left: 30px;
  flex-direction: row; /* Default layout with horizontal rows */
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between; /* Distribute space between profile and content */
}

/* Profile Section */
.profile-section {
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:flex-start; /* Align profile content to the top */
  text-align: left;
  width: 30vw; /* Occupy 30% of the width */
  height: auto; /* Limit the height */
  z-index: 5; /* Keep it above other content */
  overflow:auto;
}

/* Profile Info Styling */
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h1 {
  margin: 0px;
  align-self: center;
}
.hi-text {
  font-size: 45px;
  color: #007bff;
  margin-right: 10px;
}

.name-text {
  font-size: 35px;
  color: black;
}

.about-me {
  margin-top: 0px;
  font-size:19px;
  color: #333;
}

/* Content Section */
.content-section {
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Allow scrolling in the content section */
  align-items: center;
  padding: 10px;
  width: 65vw; /* Occupy 60% of the width */
  height: 85%; /* Limit the height */
  box-sizing: border-box;
}

/* Profile Picture */
.profile-pic-container {
  height:200px;
}

.profile-pic {
  width: auto;
  height: 200px;  
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  /* Stack the sections vertically on mobile */
  .app-container{
    height: auto;
  }
  .main-content {
    flex-direction: column; /* Stack profile and content sections vertically */
    padding: 20px; /* Add some padding for mobile */
  }
  .dropdown{
    display: block;
    margin-top: 0px;
    z-index: 15;
  }
  .dropdown select {
    width: 100%;
    padding: 6px;
    font-size: 14px;
    background-color: rgba(3, 31, 58, 1);
    text-decoration-thickness: 2px;
    color: azure;
    position: fixed;

  }
  .mobile-content{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 30px;
  }

  .mobile-section{
    padding-top: 70px;
    height: auto;
    z-index: 10;
    width: auto;
    border-color: rgba(3, 31, 58, 1);
    font-family: Arial, Helvetica, sans-serif;
  }
  .arrow_container{
    visibility:visible;
    position: relative;
    width: 24px;
    height: 24px;
    margin:30px;
    align-self: center;
  }
  .chevron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }
  .chevron:before,
  .chevron:after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: rgba(3, 31, 58, 1);
  }
  
  .chevron:before {
    left: 0;
    transform: skew(0deg, 30deg);
  }
  
  .chevron:after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }
  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }
  
  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }
  .text {
    display: block;
    margin-top: 75px;
    margin-left: -30px;
    font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 12px;
    color: rgba(3, 31, 58, 1);
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.5;
    animation: pulse 2s linear alternate infinite;
  }

  @keyframes pulse { 
  to {
      opacity: 1;
    }
  }
  @keyframes move {
    25% {
      opacity: 1;
  
    }
    33% {
      opacity: 1;
      transform: translateY(30px);
    }
    67% {
      opacity: 1;
      transform: translateY(40px);
    }
    100% {
      opacity: 0;
      transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
  }
  /* Profile section */
  .profile-section {
    flex-grow: 1;
    justify-content: space-between;
    width: fit-content;
    height: auto; /* Allow the height to adjust */
    margin-bottom: 30px; /* Add some space between profile and content */
  }

  /* Content section */
  .content-section {
    display:none;
  }

  /* Floating options should stay at the top */
  .floating-options {
    position: fixed;
    top: 0px;
    gap: 0px;
    z-index: 15;
    background-color: rgba(3, 31, 58, 1);
    padding: 5px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 50px;
    width: 90vw;
    justify-content: space-between;
  }
  button {
    padding: 10px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    background-color: transparent;
    text-decoration-thickness: 2px;
    color: azure;
    border: none;
  }
  button:hover {
    color: azure;
    background-color: rgba(3, 31, 58, 1);
  }
  button.active:hover {
    background-color: azure;
    color: rgba(3, 31, 58, 1);
  }
}
</style>
