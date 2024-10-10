document.addEventListener("DOMContentLoaded", function () {
    const crt = document.querySelector(".crt");
  
    function randomFlicker() {
      const delay = Math.random() * 300 + 100; // Random delay
      setTimeout(() => {
        const randomOpacity = Math.random() * 0.05 + 0.95; // Random opacity
        crt.style.opacity = randomOpacity;
  
        // Reset opacity
        setTimeout(() => {
          crt.style.opacity = 1;
          randomFlicker(); // Schedule the next flicker randomly
        }, Math.random() * 100 + 50); // Duration of flicker 
      }, delay);
    }
  
    randomFlicker();
  });
  