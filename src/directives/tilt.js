// src/directives/tilt.js
export default {
    mounted(el) {
      // Define the event handler functions here
      const handleMouseMove = (event) => {
        const rect = el.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const centerX = width / 2;
        const centerY = height / 2;
  
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
  
        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (mouseY - centerY) / centerY;
  
        const tiltX = deltaY * -15;
        const tiltY = deltaX * 15;
  
        const depth = 20;
  
        el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(${depth}px)`;
      };
  
      const resetTilt = () => {
        el.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
      };
  
      // Attach the event listeners
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', resetTilt);
  
      // Store the event handlers in the element so that they can be accessed later
      el._handleMouseMove = handleMouseMove;
      el._resetTilt = resetTilt;
    },
  
    unmounted(el) {
      // Use the stored event handlers to remove the event listeners
      if (el._handleMouseMove && el._resetTilt) {
        el.removeEventListener('mousemove', el._handleMouseMove);
        el.removeEventListener('mouseleave', el._resetTilt);
  
        // Clean up by deleting the stored functions
        delete el._handleMouseMove;
        delete el._resetTilt;
      }
    }
  };
  