function clawDown() {
  console.log("ClawDown");
  let clawGrab = document.getElementById("claw-grab");
  clawGrab.style.display = "block";

  let clawDown = document.getElementById("claw-down");
  clawDown.style.display = "none";

  document.getElementById("yellow-btn").style.opacity = 0;
}
function clawUp() {
  console.log("Claw Up");
  let clawGrab = document.getElementById("claw-down");
  clawGrab.style.display = "block";

  let clawDown = document.getElementById("claw-grab");
  clawDown.style.display = "none";
  document.getElementById("yellow-btn").style.opacity = 1;
}

function randomPage() {
  var pages = [
    "bear.html",
    "corgi.html",
    "kuchi.html",
    "pig.html"
  ];
  var page = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = page;
}
