// Select button and surprise section
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

// Button click event to toggle hidden surprise
surpriseBtn.addEventListener("click", () => {
    surprise.classList.toggle("hidden");
});
