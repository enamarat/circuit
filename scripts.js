//console.log("Hello!");
let animationStarted = false;
const startAnimation = () => {
  if (animationStarted === false) {
    document.querySelector("#start").textContent = "Pause";
    animationStarted = true;
    document.querySelector("#charge").className = "";
  } else {
    document.querySelector("#start").textContent = "Start";
    animationStarted = false;
    document.querySelector("#charge").className = "paused";
  }


}
//.addEventListener("animationend"
document.querySelector("#start").addEventListener("click", startAnimation);
