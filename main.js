// Program Title
document.getElementById("btn").innerHTML.addEventListener("click", btnCLicked);

function btnCLicked() {}


function getResponse() {
  //let response = document.getElementById("response").value;
  let question = document.getElementById("question").value;

  if (question == "Does a magic 8 ball actually work?") {
    document.getElementById("response").innerHTML = "How dare you doubt me!";
  } else if (question == "Is Javascript awesome?") {
      document.getElementById("response").innerHTML = "Of course!";
  } else {
      
  }
}

function randomResponse() {
    
}