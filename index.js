const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace("px", ""));
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  let left = parseInt(dodger.style.left.replace("px", ""));
  if (left < 360) {
    // Ensuring the dodger doesn't move past the right boundary
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener for keypresses
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
