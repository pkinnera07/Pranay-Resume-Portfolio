<template>
  <div class="skills-hive-container">
    <div class="skills-hive">
      <div class="skills-grid">
        <!-- Duplicate the skill logos for continuous scrolling effect -->
        <div
          v-for="(logo, index) in skillLogos"
          :key="`left-${index}`"
          class="logo-container"
        >
          <div class="logo-wrapper">
            <img :src="logo.src" :alt="logo.alt" class="logo" />
            <span class="skill-name">{{ logo.alt }}</span>
          </div>
        </div>
        <div
          v-for="(logo, index) in skillLogos"
          :key="`right-${index}`"
          class="logo-container"
        >
          <div class="logo-wrapper">
            <img :src="logo.src" :alt="logo.alt" class="logo" />
            <span class="skill-name">{{ logo.alt }}</span>
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
        { src: require('@/assets/html.png'), alt: "HTML" },
        { src: require('@/assets/css.png'), alt: "CSS" },
        { src: require('@/assets/js.png'), alt: "JavaScript" },
        { src: require('@/assets/python.png'), alt: "Python" },
        { src: require('@/assets/java.png'), alt: "Java" },
        { src: require('@/assets/c.png'), alt: "C" },
        { src: require('@/assets/vue.png'), alt: "Vue Js" },
        { src: require('@/assets/mysql.png'), alt: "MySQL" },
        { src: require('@/assets/cn.png'), alt: "Computer Networks" },
        { src: require('@/assets/git.png'), alt: "Git" },
        { src: require('@/assets/github.png'), alt: "GitHub" },
        { src: require('@/assets/embeddedc.png'), alt: "Embedded C" },
        { src: require('@/assets/simulink.png'), alt: "Simulink" },
        { src: require('@/assets/matlab.png'), alt: "Matlab" }
      ],
      scrollSpeed: 1, // Scroll speed
      scrollInterval: null, // Scroll interval reference
      isScrolling: false, // Flag to check if scrolling is active
    };
  },
  mounted() {
    this.startScroll(); // Start scrolling when component is mounted
  },
  beforeDestroy() {
    // Ensure the scroll is stopped when the component is destroyed
    this.stopScroll();
  },
  methods: {
    startScroll() {
      if (!this.isScrolling) {
        this.isScrolling = true; // Indicate that scrolling is active
        this.startScrolling();
      }
    },
    startScrolling() {
      // Clear any previous interval
      if (this.scrollInterval) {
        clearInterval(this.scrollInterval);
      }

      const skillsHive = document.querySelector('.skills-hive');
      const skillsGrid = document.querySelector('.skills-grid');

      this.scrollInterval = setInterval(() => {
        if (skillsHive && skillsGrid) {
          skillsHive.scrollLeft += this.scrollSpeed;

          // When the scroll reaches the end, reset the scroll position to create a loop effect
          if (skillsHive.scrollLeft >= skillsGrid.scrollWidth / 2) {
            skillsHive.scrollLeft = 0; // Reset to the beginning
          }
        }
      }, 15); // Smooth ~60 FPS (16ms per frame)
    },
    stopScroll() {
      clearInterval(this.scrollInterval); // Stop the scroll when mouse leaves
      this.scrollInterval = null; // Reset the interval
      this.isScrolling = false; // Reset scrolling flag
    }
  }
};
</script>

<style scoped>
/* Make sure SkillsHive stretches to take up the width */
.skills-hive-container {
  width: 100%; /* Take up full available width */
  display: flex;
  background-color:azure;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.skills-hive {
  width: 100%; /* Ensure full width of available space */
  overflow-x: hidden; /* Allow horizontal scrolling */
  overflow-y: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.skills-grid {
  display: flex;
  gap: 40px;
  flex-wrap: nowrap;
}

.logo-container {
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

.logo {
  max-width: 60px;
  max-height: 60px;
}

.skill-name {
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 2px 5px;
  margin-top: 5px;
}

.logo-container:hover .logo {
  transform: scale(1.2);
}

.logo-container:hover .skill-name {
  display: block;
}
</style>
