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
            "Engineered end-to-end scalable web applications in an insurance domain project, leveraging React, Node.js, and Express, cutting down re-renders by 30% through efficient Redux state management.",
            "Designed and deployed microservices with Node.js and Docker, enhancing system scalability by 40%, improving fault tolerance, and upgrading RESTful APIs and GraphQL endpoints to facilitate 30,000+ concurrent users.",
            "Boosted database query performance by 50% with PostgreSQL optimizations, advanced SQL techniques, and Redis caching, decreasing response times and enabling efficient real-time data processing.",
            "Streamlined the CI/CD pipeline through Jenkins and GitHub Actions, cutting deployment cycles by 60% and created a TypeScript-based PoC with Playwright to automate web testing, simplifying QA efforts by 40%."
          ]
        },
        {
          title: "Graduate Engineer Intern",
          company: "LTIMindtree Ltd.",
          location: "Remote",
          startDate: "Jul 2022",
          endDate: "Oct 2022",
          logo: require('@/assets/lti.png'),
          responsibilities: [
            "Assisted in the development of server-side rendered (SSR) and static web applications with Next.js and React, achieving a 25% reduction in page load times and improving SEO, while escalating UX through dynamic routing and pre-rendering.",
            "Collaborated on backend development with Node.js/Express, implementing RESTful APIs, deploying MongoDB for data storage, and incorporating JWT-based user authentication, supporting 500+ active users with robust security and scalability.",
            "Leveraged Docker for containerization, optimizing deployment processes and simplifying error rates by 20% through building middleware to manage API requests."
          ]
        },
        {
          title: "Programmer Analyst Intern",
          company: "Cognizant Technology Solutions",
          location: "Remote",
          startDate: "Mar 2022",
          endDate: "Jul 2022",
          logo: require('@/assets/cognizant.png'),
          responsibilities: [
            "Teamed with senior developers to hone RESTful APIs using Java and Spring Boot, decreasing response times by 30% through database integration with PostgreSQL and JDBC.",
            "Refined query performance by 25% through advanced SQL queries and Spring Data JPA, reducing database load and enhancing application speed.",
            "Enforced security protocols by incorporating Spring Security for user authentication and authorization, ensuring secure access for over 1,000+ users across multiple services."
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
