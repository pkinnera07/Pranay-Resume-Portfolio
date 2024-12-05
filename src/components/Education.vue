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
          <p class="gpa">GPA: {{ gpa1 }}</p>
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
          <p class="gpa">GPA: {{ gpa2 }}</p>
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
          <span class="certification-name">{{ certification.name }}</span>
          <img :src="certification.icon" alt="Certificate Icon" class="certification-icon" />
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
      StartYear1: '2023',
      EndYear1: '2025',

      // Second University
      logoSrc2: require('@/assets/bvrju-logo.png'), // Path to the second university's logo
      universityName2: 'B V Raju Institute of Technology, Telangana, India',
      degree2: 'Bachelor of Technology',
      major2: 'Electrical & Electronics Engineering',
      gpa2: '3.42/4', // GPA not provided for the second university
      StartYear2: '2018',
      EndYear2: '2022',    
    
      // Certifications Data
      certifications: [
        { 
          name: "CCNAv7: Introduction to Networks", 
          icon: require('@/assets/certificate-icon.png') 
        },
        { 
          name: "CCNAv7: Switching, Routing, and Wireless Essentials", 
          icon: require('@/assets/certificate-icon.png') 
        },
        { 
          name: "PCAP: Programming Essentials in Python", 
          icon: require('@/assets/certificate-icon.png') 
        }
      ]
    };
  },
};
</script>

<style scoped>
.education-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 100%; /* Make the container occupy 70% of the page width */
  max-height: 400px; /* Ensure the container doesn't exceed a certain height */
  overflow-y: auto; /* Add scrolling if content exceeds the container's height */
  box-sizing: border-box;
  margin-left: auto; /* Align the container to the right side */
}

.university-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align items to start */
  background-color: rgba(255, 255, 255, 0.4); /* Slightly transparent white background */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  height: auto;
  overflow: hidden;
}

.university-logo {
  flex-shrink: 0;
  margin-right: 20px;
}

.logo {
  width: 80px;
  height: 80px;
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
  color: #333;
}

.degree,
.major,
.gpa {
  font-size: 14px;
  margin: 5px 0;
  color: #555;
}

.timeline-container {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.timeline {
  width: 2px;
  height: 90px;
  background-color: #3498db;
  margin-right: 15px;
}

.timeline-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.start-year,
.end-year {
  font-size: 12px;
  color: #555;
  margin: 0;
}

/* Certifications Section */
.certifications-container {
  margin-top: 40px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.4); /* Slightly transparent white background */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 50px;

}
.certifications-heading{
  background-color: rgba(3, 31, 58, 1);
  color: azure;
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
</style>
