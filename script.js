var halfButton = document.getElementById("half-button");
var halfInput = document.getElementById("half-input");

halfButton.addEventListener("click", halfNumber);

function halfNumber(){
  var num1 = halfInput.value;
  if (num1 == ""){
    alert("Where is the number?");
  } else {
    var num2 = num1 / 2;
    alert("Half of " + num1 + " is " +num2);
    console.log("Half of " + num1 + " is " + num2 + ".");
  }
}





var fortuneButton = document.getElementById("fortune-button");
fortuneButton.addEventListener("click", fortune);
fortuneButton.addEventListener("click", restyle);

var fortuneInput = document.getElementById("fortune-input");
var fortuneOutput = document.getElementById("fortune-output");

function fortune() {
  var fortunes = ["Next step is going to be better",
  "I am your cookie",
"I love the world",
"The fortune you seek is right there.",
"What's up princess.",];
  var i = Math.floor(Math.random() * fortunes.length);
  var names = fortuneInput.value;
  if (names == ""){
    fortuneOutput.innerHTML = "Please enter your name.";
  } else {
    fortuneOutput.innerHTML = "To " + names + ": " + fortunes[i];
  }
}


function restyle() {
  fortuneOutput.addEventListener("click", restyle);

  var font = ["san-serif", "fantacy","cursive"];
  var background = ["white", "grey", "red"];
  var size = ["1vmin", "2vmin", "4vmin", "6vmin"];

  var random1 = Math.floor(Math.random() * font.length);
  var random2 = Math.floor(Math.random() * background.length);
  var random3 = Math.floor(Math.random() * size.length);

  document.body.style.fontFamily = font[random1];
  document.body.style.backgroundColor = background[random2];
  document.body.style.fontSize = size[random3];

}
