
/////////////////////////////////////////
// Random quote display and audio link //
/////////////////////////////////////////
function quote() {
  // Select html objects
  const quoteDisplay = document.querySelector(".quote-display");
  const audio = document.querySelector(".audio");
  // Select random num based on number of quotes
  let randomNum = Math.floor(Math.random() * quotes.length);
  // Display the random quote text and link audio file
  quoteDisplay.textContent = quotes[randomNum].text;
  audio.setAttribute("src", `${quotes[randomNum].sound}`);
}

// New quote button setup
const newQuoteButton = document.querySelector(".new-quote");
newQuoteButton.addEventListener("click", () => quote());

quote();

