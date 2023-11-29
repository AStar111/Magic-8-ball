// 8 Ball

document.getElementById("magic8").addEventListener("click", Clicked);
//Variables
let OutputEl = document.getElementById("result");
let Search = document.getElementById("search").value.toLowerCase();
let randNum = Math.random();
//Funtions
function Clicked() {
  if (randNum < 0.2) {
    OutputEl.innerHTML = "Without a Doubt.";
  } else if (randNum < 0.4) {
    OutputEl.innerHTML = "As I see it, yes.";
  } else if (randNum < 0.6) {
    OutputEl.innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    OutputEl.innerHTML = "Don't count on it.";
  } else {
    OutputEl.innerHTML = "Outlook not so good.";
  }
//Percise search function

  if (Search === "does a magic 8 ball actually Search") {
    OutputEl.innerHTML = "How dare you doubt me";
  }
  if (Search === "is javascript awesome") {
    OutputEl.innerHTML = "Of Course";
  }
  if (Search === "whats the best class") {
    OutputEl.innerHTML = "Computor Science";
  }
}
