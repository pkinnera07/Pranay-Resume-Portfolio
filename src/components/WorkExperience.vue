<template>
  <div class="work-experience-container">
    <div class="job-block" v-for="(job, index) in workExperiences" :key="index">
      <div class="job-header">
        <h3>{{ job.title }}</h3>
        <p class="company-info">
          <span class="company-name">{{ job.company }}</span>,
          <span class="location">{{ job.location }}</span>,
          <span class="dates">{{ job.dates }}</span>
        </p>
      </div>
      <ul class="job-responsibilities">
        <li v-for="(responsibility, index) in job.responsibilities" :key="index">{{ responsibility }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workExperiences: [
        {
          title: "Senior Quality Engineer",
          company: "LTIMindtree Ltd",
          location: "Bengaluru, India",
          dates: "October 2022 - July 2023",
          responsibilities: [
            "Led quality assurance efforts for a key insurance domain project.",
            "Demonstrated a 20% increase in automation efficiency with TypeScript and Playwright.",
            "Debugged and improved automation testing framework for reliability.",
            "Optimized workflows using Agile Scrum methodology.",
            "Orchestrated weekly updates for a team of 36 members."
          ]
        },
        {
          title: "Graduate Engineer Intern",
          company: "LTIMindtree Ltd",
          location: "Hyderabad, India",
          dates: "July 2022 - October 2022",
          responsibilities: [
            "Worked on data warehousing & integration with ETL processes.",
            "Implemented Slowly Changing Dimensions (SCDs) for improved data integrity.",
            "Designed databases using Star and Snowflake schema models.",
            "Automated tasks with Selenium for multiple websites.",
            "Learned Agile methodologies for efficient project management."
          ]
        },
        {
          title: "Programmer Analyst Intern",
          company: "Cognizant Technology Solutions",
          location: "Hyderabad, India",
          dates: "April 2022 - July 2022",
          responsibilities: [
            "Created web applications using JDBC for database connectivity.",
            "Enhanced SQL skills for efficient data manipulation.",
            "Gained experience in SDLC models for structured development."
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Work Experience Section Styling */
.work-experience-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: cursive;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.job-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  position: relative;
  width: 100%;
  border-radius: 8px;
}

.job-block::before {
  content: "";
  position: absolute;
  top: 0;
  left: -2px; /* Position the left border */
  width: 2px;
  height: 50%; /* Only cover half of the block vertically */
  background-color: rgba(3, 31, 58, 1); /* Blue border */
}

.job-block::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: -2px; /* Position the right border */
  width: 2px;
  height: 50%; /* Only cover half of the block vertically */
  background-color: rgba(3, 31, 58, 1); /* Blue border */
}

.job-header {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.job-header h3 {
  font-size: 1.5rem;
  margin: 0;
  padding:5px;
  color:azure;
  border-radius: 15px;
  background-color: rgba(3, 31, 58, 1);
}

.company-info {
  font-size: 1rem;
  color: rgba(3, 31, 58, 1);
}

.company-name {
  font-weight: bold;
}

.dates {
  font-style: italic;
}

.job-responsibilities {
  list-style-type: disc;
  padding-left: 20px;
}

.job-responsibilities li {
  margin: 5px 0;
}
</style>
