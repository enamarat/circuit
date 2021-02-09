// starting screen
let openedSection = null;
const goToSection = (event) => {
  if (event.target.tagName === "A") {
    document.querySelector("#starting-screen").classList.add("hidden");
    document.querySelector("header").classList.remove("hidden");
    const regex = /#\w+/;
    //console.log(event.target.href.match(regex));
    openedSection = event.target.href.match(regex)[0];
    document.querySelector(`${openedSection}`).classList.add("visible");
  }
}
document.querySelector(".main-list").addEventListener("click", goToSection);

const returnToMainSection = () => {
  document.querySelector("#starting-screen").classList.remove("hidden");
  document.querySelector(`${openedSection}`).className = "hidden";
}
document.querySelector("#main").addEventListener("click", returnToMainSection);

// closed circuit
let animationStarted = false;
const startAnimation = () => {
  if (animationStarted === false) {
    document.querySelector("#start").textContent = "Pause";
    animationStarted = true;
    document.querySelector("#charge-circuit").className = "";
  } else {
    document.querySelector("#start").textContent = "Start";
    animationStarted = false;
    document.querySelector("#charge-circuit").className = "paused";
  }
}
document.querySelector("#start").addEventListener("click", startAnimation);
//.addEventListener("animationend"
