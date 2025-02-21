<template>
  <div class="page-wrapper">
    <div class="education-container">
      <!-- First University Details -->
      <div class="university-info">
        <div class="university-logo">
          <img :src="logoSrc1" alt="University Logo" class="logo" />
        </div>
        <div class="education-details">
          <h2 class="university-name">{{ universityName1 }}</h2>
          <p class="degree">Degree: {{ degree1 }}</p>
          <p class="major">Major: {{ major1 }}</p>
          <p class="concentration">Concentration: {{ concentration1 }}</p>
        </div>
        <div class="timeline-container">
          <div class="timeline"></div>
          <div class="timeline-info">
            <p class="year">{{ StartYear1 }}</p>
            <p class="year">{{ EndYear1 }}</p>
          </div>
        </div>
      </div>

      <!-- Second University Details -->
      <div class="university-info">
        <div class="university-logo">
          <img :src="logoSrc2" alt="University Logo" class="logo" />
        </div>
        <div class="education-details">
          <h2 class="university-name">{{ universityName2 }}</h2>
          <p class="degree">Degree: {{ degree2 }}</p>
          <p class="major">Major: {{ major2 }}</p>
        </div>
        <div class="timeline-container">
          <div class="timeline"></div>
          <div class="timeline-info">
            <p class="year">{{ StartYear2 }}</p>
            <p class="year">{{ EndYear2 }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Certification Section -->
    <div class="certifications-container">
      <div class="certifications-heading">
        <h2>Certifications</h2>
      </div>
      <div class="certifications-list">
        <div v-for="(certification, index) in certifications" :key="index" class="certification-item">
          <img :src="certification.icon" alt="Certificate Icon" class="certification-icon" />
          <span class="certification-name">{{ certification.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // First University
      logoSrc1: require('@/assets/illinois-logo.png'), // Path to the first university's logo
      universityName1: 'Illinois Institute of Technology, Chicago, IL',
      degree1: "Master of Information Technology & Management",
      major1: 'Information Technology & Management',
      gpa1: '4/4',
      concentration1: 'Software Development',
      StartYear1: '2023',
      EndYear1: '2025',

      // Second University
      logoSrc2: require('@/assets/jntuh.png'), // Path to the second university's logo
      universityName2: 'Jawaharlal Nehru Technological University Hyderabad, India',
      degree2: 'Bachelor of Technology',
      major2: 'Electrical & Electronics Engineering',
      StartYear2: '2018',
      EndYear2: '2022',    
    
      // Certifications Data
      certifications: [
        { 
          name: "JavaScript Algorithms and Data Structures", 
          icon: require('@/assets/certificate-icon.png') 
        },
        { 
          name: "PCAP: Programming Essentials in Python", 
          icon: require('@/assets/certificate-icon.png') 
        },
        { 
          name: "CCNAv7: Introduction to Networks", 
          icon: require('@/assets/certificate-icon.png') 
        },
        { 
          name: "CCNAv7: Switching, Routing, and Wireless Essentials", 
          icon: require('@/assets/certificate-icon.png') 
        }
      ]
    };
  },
};
</script>

<style scoped>
*{
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.page-wrapper{
  width: 100%;
}
.education-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin: 0px;
}

.university-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align items to start */
  background-color: rgba(255, 255, 255, 0.4); /* Slightly transparent white background */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: auto;
  height: auto;
  overflow: hidden;
}

.university-logo {
  flex-shrink: 0;
  margin-right: 20px;
}

.logo {
  width: 100px;
  height: 100px;
}

.education-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.university-name {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #00152b;
}

.degree,
.major,
.concentration{
  font-size: 14px;
  margin: 5px 0;
  color: #555;
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

.timeline-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.year {
  font-size: 14px;
  color: #555;
  margin: 0;
}

/* Certifications Section */
.certifications-container {
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.4); /* Slightly transparent white background */
  padding: 20px;
  width: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.certifications-heading{
  background-color: rgba(3, 31, 58, 1);
  color: azure;
  text-align: center;
  border-radius: 20px;
}
.certifications-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.certification-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

.certification-name {
  margin-right: 10px;
  font-weight: bold;
}

.certification-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
@media (max-width: 768px) {
  .university-name {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    color: #00152b;
  }
  .degree,
  .major,
  .gpa {
    font-size: 12px;
    margin: 5px 0;
    color: #555;
  }
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
  .certification-item {
    font-size: 12px;
    color: #333;
  }
  .certifications-heading{
    background-color: rgba(3, 31, 58, 1);
    color: azure;
    text-align: center;
    border-radius: 20px;
    font-size: 12px;
  }
}

</style>
