// Functionize Minecraft Fishing Start Code

//HTML variables

// Fish Count Variables

// Fish Button Event Listener
document.getElementById("magic8").addEventListener("click", Clicked);

let OutputEl = document.getElementById("result");
let work = document.getElementById("search").value.toLowerCase();

function Clicked() {
  let randNum = Math.random();
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

  let work = document.getElementById("search").value.toLowerCase();

  if (work === "does a magic 8 ball actually work") {
    OutputEl.innerHTML = "How dare you doubt me";
  }
  if (work === "is javascript awesome") {
    OutputEl.innerHTML = "Of Course";
  }
  if (work === "whats the best class") {
    OutputEl.innerHTML = "Computor Science";
  }
}
