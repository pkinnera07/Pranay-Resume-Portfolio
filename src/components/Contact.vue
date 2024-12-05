<!-- ContactComponent.vue -->
<template>
  <div class="contacts">
    <a href="https://www.linkedin.com/in/pranay-kumar-kinnera" target="_blank">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/your-github" target="_blank">
      <i class="fab fa-github"></i>
    </a>
    <a href="mailto:pkinnera@hawk.iit.edu">
      <i class="fas fa-envelope"></i>
    </a>
    <a href="tel:+13128683526">
      <i class="fas fa-phone"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
};
</script>

<style scoped>
.contacts {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Takes up 80% of the screen height */
}

.contacts a {
  font-size: 50px; /* Icon size */
  margin: 0 15px; /* Spacing between icons */
  color: rgba(3, 31, 58, 0.8); /* Icon color */
  transition: color 0.3s ease;
}

.contacts a:hover {
  color: rgba(3, 31, 58, 1); /* Color change on hover */
}

.fab, .fas {
  display: inline-block;
}
</style>
