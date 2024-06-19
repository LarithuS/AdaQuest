document.addEventListener('DOMContentLoaded', function() {
  const darkWaves = document.querySelectorAll('.wave.dark');
  const middleWaves = document.querySelectorAll('.wave.middle');
  const topWaves = document.querySelectorAll('.wave.top');
  
  let darkIndex = 0;
  let middleIndex = 0;
  let topIndex = 0;
  
  function changeDarkWave() {
    darkWaves.forEach(wave => wave.style.opacity = 0); // Hide all dark waves
    darkWaves[darkIndex].style.opacity = 1; // Show current dark wave
    darkIndex = (darkIndex + 1) % darkWaves.length; // Move to the next dark wave
  }
  
  function changeMiddleWave() {
    middleWaves.forEach(wave => wave.style.opacity = 0); // Hide all middle waves
    middleWaves[middleIndex].style.opacity = 1; // Show current middle wave
    middleIndex = (middleIndex + 1) % middleWaves.length; // Move to the next middle wave
  }
  
  function changeTopWave() {
    topWaves.forEach(wave => wave.style.opacity = 0); // Hide all top waves
    topWaves[topIndex].style.opacity = 1; // Show current top wave
    topIndex = (topIndex + 1) % topWaves.length; // Move to the next top wave
  }
  
  setInterval(changeDarkWave, 6000); // Change dark wave every 5 seconds (adjust as needed)
  setInterval(changeMiddleWave, 6000); // Change middle wave every 6 seconds (adjust as needed)
  setInterval(changeTopWave, 6000); // Change top wave every 7 seconds (adjust as needed)
});