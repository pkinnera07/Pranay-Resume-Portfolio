<template>
  <div id="app" class="app-container">
    <!-- Floating options at the top -->
    <div class="floating-options">
      <button 
        @click="goToSection('home')" 
        :class="{ active: activeSection === 'home' }"
      >Home</button>
      <button 
        @click="goToSection('education')" 
        :class="{ active: activeSection === 'education' }"
      >Education</button>
      <button 
        @click="goToSection('projects')" 
        :class="{ active: activeSection === 'projects' }"
      >Projects</button>
      <button 
        @click="goToSection('workExperience')" 
        :class="{ active: activeSection === 'workExperience' }"
      >Experience</button>
      <button 
        @click="goToSection('contact')" 
        :class="{ active: activeSection === 'contact' }"
      >Contact</button>
    </div>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Profile Section -->
      <div class="profile-section" :class="{ 'column-layout': isProfileColumnLayout, 'home-layout': activeSection === 'home' }">
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
      </div>

      <!-- Dynamic Content with Transition -->
      <div class="content-section">
        <transition name="fade" mode="out-in">
          <component :is="currentComponent"></component>
        </transition>
      </div>
    </main>

    <!-- Skills Hive Section at the bottom -->
    <div class="skills-container">
      <SkillsHive />
    </div>
  </div>
</template>

<script>
import SkillsHive from "./components/SkillsHive.vue";
import Education from "./components/Education.vue"; // Import your content components
import Contact from "./components/Contact.vue"; // Import the Contact component
import Projects from "./components/Projects.vue"; // Import ProjectsComponent
import WorkExperience from "./components/WorkExperience.vue"; // Import WorkExperience

export default {
  components: {
    SkillsHive,
    Education,
    Contact,
    Projects,
    WorkExperience, // Register WorkExperience component
  },
  data() {
    return {
      isProfileColumnLayout: false,
      currentComponent: null,  // To dynamically load content
      activeSection: 'home',   // Track the currently active section
    };
  },
  methods: {
    goToSection(section) {
      console.log(`Navigating to ${section}`);
      
      // Set the profile layout and dynamic content based on the selected section
      if (section === 'home') {
        this.isProfileColumnLayout = false;
        this.currentComponent = null; // Clear content when on home
      } else {
        this.isProfileColumnLayout = true; // Set to column layout
        this.currentComponent = this.getComponentForSection(section); // Dynamically set content
      }

      this.activeSection = section; // Update the active section
    },
    getComponentForSection(section) {
      switch (section) {
        case 'education':
          return Education;
        case 'projects':
          return Projects; // Add your Projects component here
        case 'workExperience':
          return WorkExperience; // Add your WorkExperience component here
        case 'contact':
          return Contact; // Load the Contact component dynamically
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
  min-height: 100vh;
  background-image: url('@/assets/background1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: black;
  overflow-x: hidden; /* Prevent horizontal overflow */
}

/* Apply overflow-x:hidden to body */
body {
  overflow-x: hidden; /* Ensure there's no horizontal scrolling */
}

/* Floating options at the top */
.floating-options {
  display: flex;
  justify-content: center; /* Center the options horizontally */
  align-items: center; /* Vertically center the options within the container */
  gap: 20px;
  position: fixed;
  top: 10px;
  left: 50%; /* Move the container to the center horizontally */
  transform: translateX(-50%); /* Correct the position to truly center it */
  z-index: 10;
  background-color: rgba(3, 31, 58, 1); /* Background color for the options */
  padding: 10px 20px; /* Add some padding around the options */
  font-family: cursive;
  border-radius: 50px;
}
button {
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  color:azure;
  transition: background-color 0.3s, color 0.3s, border-bottom 0.3s;
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
}

/* Main content styling */
.main-content {
  display: flex;
  margin-top: 30px;
  padding: 50px;
  overflow-y: auto;
  font-family: cursive;
  justify-content: flex-start;  
  gap: 20px;
  width: 100%; /* Ensure full width is used */
  max-width: 100vw; /* Prevent content from exceeding the viewport width */
  box-sizing: border-box; /* Ensure padding doesn't affect width */
  height: 100%; /* Take full height for vertical centering */
}

/* Profile Section */
.profile-section {
  display: flex;
  align-items: center; /* Vertically center the profile content */
  justify-content: center; /* Horizontally center the profile content */
  text-align: center; 
  margin-bottom: 30px;
  transition: flex-direction 0.9s ease, width 0.9s ease, margin-top 0.9s ease;
  box-sizing: border-box; /* Ensure padding doesn't affect width */
  width: 100vw; /* Occupy full width in home mode */
  height: 80vh; /* Take full height for vertical centering */
}

/* Column layout for profile when selected */
.column-layout {
  flex-direction: column;
  width: 30%; /* Set width when column layout is active */
  margin-top: 0;
  align-items: flex-start;
  text-align: left;
}

/* Home layout (full width) */
.home-layout {
  width: 100vw; /* Ensure it spans the entire screen in home mode */
}

/* Profile Info Styling */
.profile-info {
  display: flex;
  flex-direction: column; /* Stack text vertically */
  align-items: flex-start;
  justify-content: center;
}

.hi-text {
  font-size: 3rem; /* Make Hi larger */
  color: #007bff; /* Different color for "Hi" */
  margin-right: 10px; /* Add some spacing between "Hi" and "I'm Pranay" */
}

.name-text {
  font-size: 2rem; /* Set a normal font size for "I'm Pranay" */
  color: black;
}

.about-me {
  margin-top: 20px; /* Add some space between the name and the about me text */
  font-size: 1.2rem;
  color: #333; /* Darker color for the about me text */
}

/* Content Section */
.content-section {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  padding: 20px;
  flex-grow: 1; 
  width: 80vw; /* Set content section width to 80% of viewport */
  max-width: 100%; /* Prevent content from exceeding the viewport width */
  box-sizing: border-box; /* Ensure padding doesn't affect width */
}

/* Profile Picture */
.profile-pic-container {
  margin-right: 30px;
}

.profile-pic {
  width: 100%;
  height: 100%;
}

/* Skills section fixed at the bottom */
.skills-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 5;
}

/* Transition styling */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
