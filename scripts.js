// starting screen
let openedSection = null;
const goToSection = (event) => {
  if (event.target.tagName === "A") {
    document.querySelector(".starting-screen").style.width = "0";
    document.querySelector("#lightning").style.display = "none";
    document.querySelector(".starting-screen h1").style.display = "none";
    document.querySelector(".starting-screen nav").style.display = "none";
    document.querySelector("header").classList.remove("hidden");
    const regex = /#\w+/;
    // hide previous section
    if (openedSection !== null) {
        document.querySelector(`${openedSection}`).classList.remove("visible");
        document.querySelector(`${openedSection}`).classList.add("hidden");
    }
    openedSection = event.target.href.match(regex)[0];
    document.querySelector(`${openedSection}`).classList.add("visible");
  }
}
document.querySelector(".main-list").addEventListener("click", goToSection);

const showSidebar = () => {
  if (window.screen.width < 500) {
      document.querySelector(".starting-screen").style.width = "90%";
  } else {
      document.querySelector(".starting-screen").style.width = "250px";
  }

  setTimeout(()=> {
    document.querySelector(".starting-screen nav").style.display = "block";
  },500);
}
document.querySelector("#hidden-nav").addEventListener("click", showSidebar);

// circuit
let switchTurnedOn = false;
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
