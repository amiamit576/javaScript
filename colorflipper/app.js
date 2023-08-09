const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnEl = document.getElementById('btn');
console.log(btnEl);
const colorEl = document.getElementsByClassName('color');
btnEl.addEventListener('click', function () {
    // genrate random number
    const randomNumber = getRandomNumber();
      document.body.style.backgroundColor = colors[randomNumber];
    colorEl.textContent = colors[randomNumber];

  
    
})
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

