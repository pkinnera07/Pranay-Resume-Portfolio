<template>
  <main class="wrapper">
    <div class="badge-container">
      <article 
        class="badge" 
        v-for="(skill, index) in skillLogos" 
        :key="index" 
        :class="['badge-' + skill.category, 'badge-item']">
        
        <!-- Skill name appears above the icon on hover -->
        <span class="skill-name">{{ skill.alt }}</span>
        
        <div class="rounded">
          <img :src="skill.src" :alt="skill.alt" class="skill-icon" />
        </div>
      </article>
    </div>
    <div class="divider"></div>
    <div class="guide">
      <p class="languages">Programming Languages</p>
      <p class="tools">Development Tools</p>
      <p class="frameworks">Frameworks</p>
      <p class="others">Others</p>
    </div>
  </main>
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
      ]
    };
  }
};
</script>

<style scoped>
/* Base */
* { 
  box-sizing: border-box; 
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  background: darkslategrey;
}

/* Wrapper */
.wrapper {
  width: 100%;
  max-width: 100%;
  margin: 0px;
  text-align: center;
}

/* Container for all badges */
.badge-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-height: 80vh; /* Limit the scrolling area height */
}

/* Badge */
.badge {
  margin: 10px 10px;
  width: 90px;
  height: 90px;
  border-radius: 20%;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.43);
  flex-shrink: 0;
}

.rounded {
  width: 70px;
  height: 70px;
  background: white;
  position: absolute;
  margin: 10px 10px auto;
  z-index: 10;
  border-radius: 50%;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.23);
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-name {
  position: absolute;
  top: -20px; /* Position the name above the icon */
  text-align: center;
  transform: translateX(-50%);
  color: rgb(2, 48, 71);
  font-size: 14px;
  font-weight: bold;
  opacity: 0;
  width: max-content;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
}

/* Show the skill name when hovering */
.badge:hover .skill-name {
  opacity: 1;
}
.badge :hover {
  transition: 0.3s ease;
  border-radius: 20%;
}

.skill-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

/* Badge Layout */
.badge-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 icons per row */
  gap: 5px;
}

.divider {
  background-color: rgb(0, 29, 42, 0.6);
  height: 1px;
}

.guide {
  display: flex;
  justify-content: space-between;
  height: fit-content;
}

.tools, .languages, .frameworks, .others {
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.43);
}

/* Colors */
.badge-Tools, .tools {
  background-color: rgb(0, 31, 63, 0.7);
}

.badge-Languages, .languages {
  background: rgb(191, 219, 247, 0.7);
}

.badge-Frameworks, .frameworks {
  background: rgb(4, 150, 255, 0.7);
}

.badge-Others, .others {
  background: #fffb024c;
}

@media (max-width: 768px) {
  .wrapper {
    width: 100%;
    max-width: 100%;
    margin: 1em;
    text-align: center;
  }
  .badge-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 5 icons per row */
    gap: 0px;
    align-items: center;
    }

  .guide {
    display: flex;
    justify-content: space-between;
    height: fit-content;
    font-size: 6pt;
  }

  .tools, .languages, .frameworks, .others {
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.43);
  }
  .badge {
    width: 70px;
    height: 70px;
  }
  .rounded {
    width: 60px;
    height: 60px;
    margin: 5px 5px auto;
  }
  .skill-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
