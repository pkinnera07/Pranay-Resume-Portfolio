<template>
  <div class="projects-container">
    <div class="project-card" v-for="(project, index) in projects" :key="index">
      <img :src="project.image" alt="Project Image" class="project-image" />
      <div class="project-info">
        <h3 class="project-name">{{ project.name }}</h3>
        <div class="project-status">
          <a :href="project.github" target="_blank" class="github-link">
            <img src="@/assets/github.png" alt="GitHub Icon" class="github-icon" />
          </a>
          <!-- Status icons -->
          <img 
            v-if="project.status === 'completed'" 
            src="@/assets/completed-icon.png" 
            alt="Completed Icon" 
            class="status-icon completed"
          />
          <img 
            v-if="project.status === 'in-progress'" 
            src="@/assets/in-progress-icon.png" 
            alt="In Progress Icon" 
            class="status-icon in-progress"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Dairy Business Web Application',
          image: require('@/assets/dairyProject.png'),  // Use relative path here
          github: 'https://github.com/username/project1',
          status: 'in-progress', // Set status
        },
        {
          name: 'Bank Transaction Mgmt App',
          image: require('@/assets/BankProject.png'),  // Use relative path here
          github: 'https://github.com/username/project2',
          status: 'completed', // Set status
        },
        {
          name: 'Level-2 EV Charging Point',
          image: require('@/assets/chargingStation.png'),  // Use relative path here
          github: 'https://github.com/username/project3',
          status: 'completed', // Set status
        },
        // Add more projects here as needed
      ],
    };
  },
};
</script>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns, responsive */
  gap: 20px;
  justify-items: center;
  padding: 20px;
}

.project-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.4); /* Slightly transparent white background */
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.project-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}

.project-name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.github-link {
  display: inline-block;
}

.github-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px; /* Space between the GitHub icon and status icons */
}

/* Styling for the status icons */
.status-icon {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

.completed {
  border: 2px solid green;
  border-radius: 50%;
}

.in-progress {
  border: 2px solid orange;
  border-radius: 50%;
}
</style>
