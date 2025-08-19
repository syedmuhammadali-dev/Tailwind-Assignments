// js/script.js
function setupMobileSearch() {
  const header = document.querySelector("header");
  const searchInput = document.querySelector("#searchInput");

  // When search input is focused (clicked)
  searchInput.addEventListener("focus", (event) => {
    if (window.innerWidth <= 450) {
      console.log("Focus event triggered, hiding header");
      event.stopPropagation(); // Stop event propagation
      header.classList.add("hidden"); // Hide header
      searchInput.classList.remove("max-w-xl", "px-4"); // Remove conflicting width constraints
      searchInput.classList.add(
        "fixed",
        "top-2",
        "left-0",
        "right-0",
        "z-50",
        "w-full",
        "p-2",
        "rounded-3xl"
      ); // Full width input
    }
  });

  // When clicking outside the input
  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 450) {
      console.log("Click detected, target:", event.target);
      if (
        !searchInput.contains(event.target) &&
        !header.contains(event.target)
      ) {
        console.log("Click outside, showing header");
        event.stopPropagation(); // Stop event propagation
        header.classList.remove("hidden"); // Show header back
        searchInput.classList.remove(
          "fixed",
          "top-2",
          "left-0",
          "right-0",
          "z-50",
          "w-full",
          "p-2",
          "rounded-3xl"
        );
        searchInput.classList.add("max-w-xl", "px-4"); // Restore original styling
        searchInput.blur(); // Remove focus from input
      }
    }
  });

  // Additional blur event to handle focus loss
  searchInput.addEventListener("blur", (event) => {
    if (window.innerWidth <= 450) {
      console.log("Blur event triggered, showing header");
      event.stopPropagation(); // Stop event propagation
      header.classList.remove("hidden"); // Show header back
      searchInput.classList.remove(
        "fixed",
        "top-2",
        "left-0",
        "right-0",
        "z-50",
        "w-full",
        "p-2",
        "rounded-3xl"
      );
      searchInput.classList.add("max-w-xl", "px-4"); // Restore original styling
    }
  });
}

// Run on page load
window.addEventListener("DOMContentLoaded", setupMobileSearch);
