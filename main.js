// Program Title
document.getElementById("btn").innerHTML.addEventListener("click", btnCLicked);

function btnCLicked() {
  getResponse();
}

function getResponse() {
  //let response = document.getElementById("response").value;
  let question = document.getElementById("question").value;

  if (question == "Does a magic 8 ball actually work?") {
    document.getElementById("response").innerHTML = "How dare you doubt me!";
  } else if (question == "Is Javascript awesome?") {
    document.getElementById("response").innerHTML = "Of course!";
  } else {
    randomResponse();
  }
}

function randomResponse() {
  let randResponse = Math.random();

  if (randResponse < 0.25) {
    document.getElementById("response").innerHTML = "Without a Doubt.";
  } else if (randResponse < 0.5) {
    document.getElementById("response").innerHTML = "As I see it, yes.";
  } else if (randResponse < 0.75) {
    document.getElementById("response").innerHTML =
      "Concentrate and ask again.";
  } else if (randResponse < 1) {
    document.getElementById("response").innerHTML = "Don't count on it.";
  } else if (randResponse < 1.25) {
    document.getElementById("response").innerHTML = "Outlook not so good.";
  } else {
    document.getElementById("response").innerHTML = "Please ask a question.";
  }
  return randResponse;
}
