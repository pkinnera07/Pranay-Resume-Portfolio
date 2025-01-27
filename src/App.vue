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
          <p class="about-me">I am a curious software developer with experience in various technologies. I love solving problems and building impactful solutions!</p>
        </div>
        <contact></contact>
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
    };
  },
  methods: {
    goToSection(section) {
      console.log(`Navigating to ${section}`);
      this.currentComponent = this.getComponentForSection(section);
      this.activeSection = section;
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
  z-index: 10;
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
  padding: 50px;
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
  align-items: center;
  justify-content: flex-start; /* Align profile content to the top */
  text-align: left;
  width: 30%; /* Occupy 30% of the width */
  height: 80vh; /* Limit the height */
  z-index: 5; /* Keep it above other content */
}

/* Profile Info Styling */
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.hi-text {
  font-size: 3rem;
  color: #007bff;
  margin-right: 10px;
}

.name-text {
  font-size: 2rem;
  color: black;
}

.about-me {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
}

/* Content Section */
.content-section {
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Allow scrolling in the content section */
  align-items: center;
  padding: 10px;
  width: 65%; /* Occupy 60% of the width */
  height: 80vh; /* Limit the height */
  box-sizing: border-box;
}

/* Profile Picture */
.profile-pic-container {
  height: 40vh;
  margin-right: 30px;
}

.profile-pic {
  width: 100%;
  height: 100%;
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

  /* Profile section */
  .profile-section {
    position: relative;
    width: fit-content;
    height: auto; /* Allow the height to adjust */
    margin-bottom: 30px; /* Add some space between profile and content */
  }

  /* Content section */
  .content-section {
    width: 100%; /* Occupy the full width */
    height: auto; /* Allow the height to adjust */
  }

  /* Floating options should stay at the top */
  .floating-options {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 15;
    width: 90vw; /* Ensure it fits within the screen */
  }
  button {
  padding: 5px 10px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  text-decoration-thickness: 2px;
  border: none;
}
}
</style>
