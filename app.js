// Exercise 1
// Get the user's input term
const searchSubmit = document.getElementById("submitSearch");
const searchTerm = document.getElementById("searchWord");
const feedbackPara = document.getElementById("feedback");
const imageGif = document.getElementById("gifImage");
const apiKey = "JbkxtB8Z6kJFW8WN8p1EC43liPcoFR3L";

document.getElementById("inputContainer").addEventListener("submit", (event) => {
    event.preventDefault();
    const apiUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm.value}`;
  // Fetch the GIF from Giphy
  fetch(apiUrl)
    .then((response) => response.json()) // First then: Parse response to JSON
    .then((res) => {
      // Second then: Handle the parsed JSON data
      imageGif.src = res.data.images.original.url;
      searchTerm.value = ""; // Reset search input
      feedbackPara.textContent = ""; // Reset feedback
    })
    // Catch any Errors
    .catch((error) => {
      console.error("Error fetching or parsing data:", error);
      feedbackPara.textContent = error.message;
    });
});
