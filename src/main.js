import "@fortawesome/fontawesome-free/css/all.css";
import { createApp } from 'vue';  // Vue 3
import App from './App.vue';
import tiltDirective from './directives/tilt'; // Importing the custom directive for tilt effect

const app = createApp(App);

app.directive('tilt', tiltDirective);

app.mount('#app');

//createApp(App).mount('#app');  // This connects your Vue app to the HTML DOM

