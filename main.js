// Magic 8 Ball
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  getResponse();
}

function getResponse() {
  let question = document.getElementById("question").value;
  let response = document.getElementById("response");

  if (question === "Does a magic 8 ball actually work?") {
    response.innerHTML = "How dare you doubt me!";
  } else if (question === "Is Javascript awesome?") {
    response.innerHTML = "Of course!";
  } else {
    randomResponse(response);
  }
}

function randomResponse(response) {
  let randResponse = Math.random();

  if (randResponse < 0.25) {
    response.innerHTML = "Without a Doubt.";
  } else if (randResponse < 0.5) {
    response.innerHTML = "As I see it, yes.";
  } else if (randResponse < 0.75) {
    response.innerHTML = "Concentrate and ask again.";
  } else if (randResponse < 1) {
    response.innerHTML = "Don't count on it.";
  } else if (randResponse < 1.25) {
    response.innerHTML = "Outlook not so good.";
  } else {
    response.innerHTML = "Please ask a question.";
  }
}