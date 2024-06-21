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
    darkIndex = (darkIndex + (Math.floor(Math.random() * 5))) % darkWaves.length; //Index increased randomly
  }
  
  function changeMiddleWave() {
    middleWaves.forEach(wave => wave.style.opacity = 0);
    middleWaves[middleIndex].style.opacity = 1;
    middleIndex = (middleIndex + ((Math.floor(Math.random() * 5)))) % middleWaves.length;
  }
  
  function changeTopWave() {
    topWaves.forEach(wave => wave.style.opacity = 0);
    topWaves[topIndex].style.opacity = 1;
    topIndex = (topIndex + ((Math.floor(Math.random() * 5)))) % topWaves.length; 
  }
  
  setInterval(changeDarkWave, 6000);
  setInterval(changeMiddleWave, 6000);
  setInterval(changeTopWave, 6000); 
});