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
            "Collaborated with cross-functional teams to lead the development of a critical insurance domain project for a prominent US-based insurance company.",
            "Developed a proof of concept showcasing a 20% increase in automation efficiency by implementing TypeScript and Playwright, enhancing automation workflows as alternatives to C# and Selenium.",
            "Debugged and optimized a complex automation framework based on the Singleton pattern, improving the overall reliability and resilience of the project’s core infrastructure.",
            "Actively contributed to the adoption of Agile Scrum methodologies, streamlining development cycles and enhancing team collaboration for more responsive and iterative software delivery.",
            "Led the organization of weekly project updates, gathering input from a diverse team of 36 members, and delivering concise technical summaries during Scrum meetings to ensure alignment across stakeholders.",
            "Played a key role in developing detailed functional mapping documents, ensuring accurate and comprehensive specifications for software development and system integration."
          ]
        },
        {
          title: "Graduate Engineer Intern",
          company: "LTIMindtree Ltd.",
          location: "Hyderabad, India",
          startDate: "Jul 2022",
          endDate: "Oct 2022",
          logo: require('@/assets/lti.png'),
          responsibilities: [
            "Honed advanced skills in data warehousing, ETL processes, and DBMS, optimizing data integration and management to enhance decision-making capabilities.",
            "Implemented three types of Slowly Changing Dimensions (SCDs) to ensure data integrity and optimize querying efficiency, supporting accurate historical data analysis.",
            "Independently designed and created three databases utilizing both Star and Snowflake schema models, ensuring scalability and performance for complex data warehousing solutions.",
            "Leveraged Selenium to automate operations across 10+ websites, streamlining processes like account creation, form validation, logins, e-commerce orders, and travel bookings (buses, hotels, movies).",
            "Gained comprehensive expertise in various Agile methodologies, including Scrum, Kanban, XP (Extreme Programming), Lean, and Crystal, to foster adaptable and efficient project workflows."
          ]
        },
        {
          title: "Programmer Analyst Intern",
          company: "Cognizant Technology Solutions",
          location: "Hyderabad, India",
          startDate: "Mar 2022",
          endDate: "Jul 2022",
          logo: require('@/assets/cognizant.png'),
          responsibilities: [
            "Received hands-on training in Java-based web applications using JDBC, gaining practical experience in database connectivity, Java development, and web application integration.",
            "Developed strong SQL querying skills, optimizing data retrieval and manipulation from relational databases to ensure efficiency and accuracy in data operations.",
            "Gained a thorough understanding of various Software Development Life Cycle (SDLC) models, applying structured and efficient methodologies to enhance software development processes."
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
.job-block:hover{
  transform: scale(1.01);
  transition: 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

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
.app-container.dark .job-block{
  background-color: rgba(255, 255, 255, 0.215); /* Transparent white background */
  color: azure;
}
.app-container.dark .job-title,
.app-container.dark .company-name,
.app-container.dark .year{
  color: azure;
}
.app-container.dark .timeline{
  background-color: azure;
}

.tilt {
  perspective: 1500px; /* Adds a 3D perspective effect */
  transform-style: preserve-3d;
  transition: transform 0.1s ease-in-out;
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
