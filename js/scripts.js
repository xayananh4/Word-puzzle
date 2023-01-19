// Business logic
function isVowel(letter) {
  return 'aeiou'.includes(letter.toLowerCase());
}

//business logic
function handleSubmission(userInput) {
  let outputArray = "";
  const textArray1 = userInput.split("");
  textArray1.forEach(function (element){
    if(isVowel(element)){
      outputArray += "-";
    }
    else {
       outputArray += element.toString();
    }
  });
  return outputArray;
}

//UI logic
window.addEventListener("load", function(){
let userInput = document.getElementById("userInput");
let paraElement = document.getElementById("results");

document.querySelector("form#formWord").addEventListener("submit", function(event){
  paraElement.innerText = handleSubmission(userInput.value);
  event.preventDefault();
});
});