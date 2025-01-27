<template>
  <div class="work-experience-container">
    <div class="job-block" v-for="(job, index) in workExperiences" :key="index">
      <div class="job-info">
        <div class="job-logo">
          <img :src="job.logo" alt="Company Logo" class="logo" />
        </div>
        <div class="job-details">
          <h3 class="job-title">{{ job.title }}</h3>
          <p class="company-name">{{ job.company }}</p>
          <p class="location">{{ job.location }}</p>
        </div>
        <div class="timeline-container">
          <div class="timeline"></div>
          <div class="timeline-info">
            <p class="year">{{ job.endDate }}</p>
            <p class="year">{{ job.startDate }}</p>
          </div>
        </div>
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
          startDate: "Oct 2022",
          endDate: "Jul 2023",
          logo: require('@/assets/lti.png'), // Example logo for the job
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
          company: "LTIMindtree Ltd.",
          location: "Hyderabad, India",
          startDate: "Jul 2022",
          endDate: "Oct 2023",
          logo: require('@/assets/lti.png'), // Example logo for the job
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
          startDate: "Apr 2022",
          endDate: "Jul 2022",
          logo: require('@/assets/cognizant.png'), // Example logo for the job
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
*{
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
/* Work Experience Section Styling */
.work-experience-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
}

.job-block {
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


.job-info {
  display: flex;
  justify-content:flex-start;
  align-items: flex-start; /* Align items to start */
  width: auto;
  height: auto;
  overflow: hidden;
}

.job-logo {
  flex-shrink: 0;
  margin-right: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.job-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.job-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #00152b;
}

.company-name {
  font-size: 16px;
  color: rgba(3, 31, 58, 1);
  margin: 5px 0;
}

.job-responsibilities {
  list-style-type:square;
  padding-left: 20px;
  margin: 0px;
}

.job-responsibilities li {
  margin: 5px 0;
  font-size: 16px;
}

.timeline-container {
  display: flex;
  justify-content: space-between;
}

.timeline {
  width: 2px;
  height: 90px;
  background-color: rgba(3, 31, 58, 1);;
  margin-right: 15px;
}
.year {
  font-size: 14px;
  color: #555;
  margin: 0;
}
.timeline-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 768px) {

  .year {
    font-size: 10px;
    color: #555;
    margin: 0;
  }
  .timeline-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .job-title {
    font-size: 14px;
  }
  .company-name, .job-responsibilities li, .location{
    font-size: 12px;
  }
}

</style>
