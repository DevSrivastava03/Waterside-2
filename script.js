// Get references to the character element
const character = document.getElementById('character');

// Initial position and speed
let xPos = window.innerWidth / 2; // Start in the center horizontally
let yPos = window.innerHeight - 50; // Start at the bottom
let speed = 25; // Movement speed of the character

// Set the initial position of the character
character.style.left = `${xPos}px`;
character.style.bottom = `${yPos}px`; // Ensure it starts at the bottom

// Function to move the character
function moveCharacter() {
  // Update character's position
  character.style.left = `${xPos}px`;
  character.style.bottom = `${yPos}px`;

  // Get the current page
  const currentPage = window.location.pathname;

  // Check if the character reaches the left or right side based on the page
  if (xPos <= 0) {
    if (currentPage === '/index.html') {
      // Move to about.html if at index.html and character goes left
      window.location.href = 'about.html';
    } else if (currentPage === '/about.html') {
      // Move to postcard.html if at about.html and character goes left
      window.location.href = 'postcard.html';
    } else if (currentPage === '/postcard.html') {
      // Move to game.html if at postcard.html and character goes left
      window.location.href = 'game.html';
    }
  } else if (xPos >= window.innerWidth - 48) {
    if (currentPage === '/index.html') {
      // Move to postcard.html if at index.html and character goes right
      window.location.href = 'game.html';
    } else if (currentPage === '/about.html') {
      // Move to index.html if at about.html and character goes right
      window.location.href = 'index.html';
    } else if (currentPage === '/postcard.html') {
      // Move to about.html if at postcard.html and character goes right
      window.location.href = 'about.html';
    }
  }
}

// Listen for keydown events to move the character
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      xPos -= speed; // Move left
      character.style.transform = "scaleX(-1)"; // Flip character to face left
      break;

    case 'ArrowRight':
      xPos += speed; // Move right
      character.style.transform = "scaleX(1)"; // Face right
      break;
  }

  // Call the moveCharacter function to update the position and check for page transitions
  moveCharacter();
});
