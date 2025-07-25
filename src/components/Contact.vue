<!-- ContactComponent.vue -->
<template>
  <div class="contacts">
    <a href="https://www.linkedin.com/in/pranay-kk0707" target="_blank">
      <span class="contact">LinkedIn</span>
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/pkinnera07" target="_blank">
      <span class="contact">GitHub</span>
      <i class="fab fa-github"></i>
    </a>
    <a href="mailto:pranaykumark07072@gmail.com">
      <span class="contact">Email</span>
      <i class="fas fa-envelope"></i>
    </a>
    <a href="tel:+13128683526">
      <span class="contact">Phone</span>
      <i class="fas fa-phone"></i>
    </a>
    <a href="/Pranay_Kumar_K_Resume.pdf" target="_blank">
      <span class="contact">Resume</span>
      <i class="fa-solid fa-file-lines"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  data() {
    return {};
  }
};
</script>

<style scoped>
.contacts {
  display: flex;
  justify-content: space-between;
}
.contact{
  font-size: 15px;
  color: black;
  background-color: rgba(240, 248, 255, 0.386);
  opacity: 0;
  position: absolute;
  margin-top: 35px;
  transition: opacity 0.5s ease-in-out;
}
.contacts a:hover .contact{
  opacity: 1;
}

.contacts a {
  font-size: 30px; /* Icon size */
  margin: 0 15px; /* Spacing between icons */
  color: rgb(0, 22, 43); /* Icon color */
  transition: color 0.3s ease;
}

.contacts a:hover {
  color: rgba(3, 31, 58, 1); /* Color change on hover */
}

.fab, .fas {
  display: inline-block;
}

/* Dark Theme */
.app-container.dark .contact{
  color: azure;
  background-color: transparent;
}
.app-container.dark a{
  color: azure;
}

@media (max-width: 768px) {
  .contact{
    display: none;
  }
}
</style>
