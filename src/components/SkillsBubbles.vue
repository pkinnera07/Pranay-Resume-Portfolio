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
    <div class="guide">
      <p class="languages">Programming Languages</p>
      <p class="frontend">Frontend Development</p>
      <p class="backend">Backend Development</p>
      <p class="tools">Development Tools</p>
    </div>
  </main>
</template>

<script>
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

          // { src: require('@/assets/skills/html.png'), alt: "HTML", category: "Frontend" },
          // { src: require('@/assets/skills/css.png'), alt: "CSS", category: "Frontend" },
          { src: require('@/assets/skills/js.png'), alt: "JavaScript", category: "Frontend" },
          { src: require('@/assets/skills/vue.png'), alt: "Vue Js", category: "Frontend" },
          { src: require('@/assets/skills/react.png'), alt: "React", category: "Frontend" },
          { src: require('@/assets/skills/bootstrap.png'), alt: "Bootstrap", category: "Frontend" },
          { src: require('@/assets/skills/typescript.png'), alt: "TypeScript", category: "Frontend" },
          { src: require('@/assets/skills/tailwind.png'), alt: "Tailwind CSS", category: "Frontend" },

          { src: require('@/assets/skills/nodejs.png'), alt: "Node.js", category: "Backend" },
          { src: require('@/assets/skills/expressjs.png'), alt: "Express.js", category: "Backend" },
          // { src: require('@/assets/skills/rails.png'), alt: "Ruby on Rails", category: "Backend" },
          { src: require('@/assets/skills/mongodb.png'), alt: "MongoDB", category: "Backend" },
          { src: require('@/assets/skills/mysql.png'), alt: "MySQL", category: "Backend" },

          { src: require('@/assets/skills/docker.png'), alt: "Docker", category: "Tools" },
          { src: require('@/assets/skills/kubernetes.png'), alt: "Kubernetes", category: "Tools" },
          { src: require('@/assets/skills/git.png'), alt: "Git", category: "Tools" },
          // { src: require('@/assets/skills/github.png'), alt: "GitHub", category: "Tools" },
          // { src: require('@/assets/skills/azure.png'), alt: "Azure", category: "Tools" },
          { src: require('@/assets/skills/selenium.png'), alt: "Selenium", category: "Tools" },
          // { src: require('@/assets/skills/simulink.png'), alt: "Simulink", category: "Tools" },
          // { src: require('@/assets/skills/matlab.png'), alt: "Matlab", category: "Tools" },
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
  margin: 0px;
  text-align: center;
}
/* Badge */
.badge {
  margin: 10px 10px;
  width: 80px;
  height: 80px;
  margin-inline: 15px;
  border-radius: 20%;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.43);
  flex-shrink: 0;
}

.rounded {
  width: 66px;
  height: 66px;
  background: white;
  position: absolute;
  margin: 7px 7px auto;
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
  margin-inline: auto;
  align-self: center;
  width: fit-content;
  margin-bottom: 10px;
}

.guide {
  display: flex;
  bottom: 0;
  position: fixed;
  width: 60%;
  justify-content: space-between;
  height: fit-content;
}

.tools, .languages, .frontend, .backend {
  padding: 3px;
  padding-inline: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.43);
}

/* Colors */
.badge-Tools, .tools {
  background-color: rgba(22, 234, 216, 0.737);
}

.badge-Languages, .languages {
  background: rgb(191, 219, 247, 0.7);
}

.badge-Frontend, .frontend {
  background: rgb(4, 150, 255, 0.7);
}

.badge-Backend, .backend {
  background: #fffb024c;
}

@media (max-width: 768px) {
  .wrapper {
    width: 100%;
    max-width: 100%;
    margin: 0;
    text-align: center;
  }
  .badge-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 5 icons per row */
    gap: 0px;
    align-items: center;
    }

  .guide {
    display: flex;
    position: relative;
    width: 100%;
    margin: 0px;
    justify-content: space-between;
    height: fit-content;
    font-size: 6pt;
    gap: 5px;
  }

  .tools, .languages, .frontend, .backend {
    padding: 3px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.43);
  }
  .badge {
    width: 60px;
    height: 60px;
  }
  .rounded {
    width: 50px;
    height: 50px;
    margin: 5px 5px auto;
  }
  .skill-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
