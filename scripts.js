// variable for the "circuit" section
let switchTurnedOn = false;

// starting screen
let openedSection = null;
const goToSection = (event) => {
  if (event.target.tagName === "A") {
    document.querySelector("#starting-screen").classList.add("hidden");
    document.querySelector("header").classList.remove("hidden");
    const regex = /#\w+/;
    openedSection = event.target.href.match(regex)[0];
    document.querySelector(`${openedSection}`).classList.add("visible");
  }
}
document.querySelector(".main-list").addEventListener("click", goToSection);

const returnToMainSection = () => {
  document.querySelector("#starting-screen").classList.remove("hidden");
  document.querySelector(`${openedSection}`).className = "hidden";
  // stop animation in "Circuit" section
  document.querySelector("#switch").className = "neutral";
  switchTurnedOn = false;
  document.querySelector("#charge-circuit").className = "paused zIndexLow";
}
document.querySelector("#main").addEventListener("click", returnToMainSection);

// circuit
const toggleTheSwitch = () => {
  if (switchTurnedOn === false) {
    document.querySelector("#switch").className = "switch-on";
    switchTurnedOn = true;
  } else {
    document.querySelector("#switch").className = "switch-off";
    switchTurnedOn = false;
  }
}
document.querySelector("#switch").addEventListener("click", toggleTheSwitch);

const startCurrentAnimation = () => {
  if (switchTurnedOn === true) {
    document.querySelector("#charge-circuit").className = "zIndexHigh";
  } else {
    document.querySelector("#charge-circuit").className = "paused zIndexLow";
  }
}
document.querySelector("#switch").addEventListener("animationend", startCurrentAnimation);
