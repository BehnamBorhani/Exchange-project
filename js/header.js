const highlightElem = document.querySelector("#highlight");
const words = [
   { word: "Blockchain", color: "#03ca9b" },
   { word: "Token", color: "#A06EEB" },
   { word: "Dex", color: "#ef14c3" },
   { word: "AMM", color: "#FC7F44" },
];

window.addEventListener("load", () => {
   let index = 0;
   setInterval(() => {
      highlightElem.innerText = words[index].word;
      highlightElem.style.color = words[index].color;
      // highlightElem.style.color = "var(--color-secondary)";
      index++;

      if (index >= words.length) {
         index = 0;
      }
   }, 2000);
});
