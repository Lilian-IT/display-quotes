var QUOTES = [{
  "quote": "Success is not final; failure is not fatal: It is the courage to  continue that counts.",
  "author": "(Winston S. Churchill)"
}, {
  "quote": "Don't be afraid to give up the good to go for the great.",
  "author": "(John D. Rockefeller)"
}, {
  "quote": "I find that the harder I work, the more luck I seem to have.",
  "author": "(Thomas Jefferson)"
}, {
  "quote": "Try not to become a man of success. Rather become a man of value.",
  "author": "(Albert Einstein)"
}, {
  "quote": "Do one thing every day that scares you.",
  "author": "(Anonymous)"
}, {
  "quote": "If you really look closely, most overnight successes took a long time.",
  "author": "(Steve Jobs)"
}, {
  "quote": "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
  "author": "(Barack Obama)"
}, {
  "quote": "The successful warrior is the average man, with laser-like focus.",
  "author": "(Bruce Lee)"
}, {
  "quote": "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
  "author": "(Jim Rohn)"
}, {
  "quote": "Be the type of person that when your feet hit the floor in the morning the devil says,aww shit.. they are up",
  "author": "Dwayne (The Rock) Johnson"
}, {
  "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up",
  "author": "(Thomas Edison)"
}, {
  "quote": "Opportunities don't happen. You create them",
  "author": "(Chris Grosser)"
}, {
  "quote": "I would rather risk wearing out than rusting out.",
  "author": "(Theodore Roosevelt)"
}, {
  "quote": "When you play, play hard; when you work, don't play at all.",
  "author": "(Theodore Roosevelt)"
}];




var pageCount = 1;
var i = 0;
var quotePara = document.getElementById("quotePara");
var getQuote = document.getElementById("getQuote");

getQuote.addEventListener("click", function() {
  renderHTML(QUOTES);
  pageCount++;
  if (pageCount===QUOTES.length) pageCount=0;
});



function renderHTML(data) {
  var htmlString = "";
  var htmlAuthor = "";

  htmlString = data[i].quote;
  htmlAuthor = data[i].author;
  i++;
  quotePara.innerHTML= ["<h2>", htmlString, "</h2>", htmlAuthor].join("");

}