
let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");
let suggestion = document.querySelector(".suggestion");
let heightError = document.querySelector(".heightError");
let weightError = document.querySelector(".weightError");
let malebtn = document.querySelector(".malebtn");
let femalebtn = document.querySelector(".femalebtn");
let malefield = document.querySelector(".malefield");


let femalefield = document.querySelector(".femalefield");
let heightfield = document.querySelector(".heightfield");
let heightf = document.querySelector(".heightf");
let heightErrorf = document.querySelector(".heightErrorf");
let weightfieldf = document.querySelector(".weightfieldf");
let weightf = document.querySelector(".weightf");
let weightErrorf = document.querySelector(".weightErrorf");
let resultf = document.querySelector(".resultf");
let suggestionf = document.querySelector(".suggestionf");
let femalesubmit = document.querySelector(".femalesubmit");



malebtn.addEventListener("click", function (){
  malefield.style.display = "block"
  femalefield.style.display = "none"
})
femalebtn.addEventListener("click", function (){
  malefield.style.display = "none"
  femalefield.style.display = "block"
})






submit.addEventListener("click", function () {
  if (height.value == "") {
    heightError.innerHTML = "Height is required";
  } else{
    heightError.innerHTML = "";
  }

  if (weight.value == "") {
    weightError.innerHTML = "Weight is required";
  } else {
    weightError.innerHTML = "";
  }

  if (height.value != "" && weight.value != ""){

    let bmi = ((weight.value * 2.205) / (height.value * height.value)) * 703;
    
    result.innerHTML = bmi.toFixed(2);

    if (bmi >= 18.5 && bmi <= 24.9) {
      suggestion.innerHTML = "perfect";
    } else if (bmi < 18.5) {
      suggestion.innerHTML = "under weight";
    } else{
      suggestion.innerHTML = "over weight"
    }
  }
});










femalesubmit.addEventListener("click", function () {
  if (heightf.value == "") {
    heightErrorf.innerHTML = "Height is required";
  } else{
    heightErrorf.innerHTML = "";
  }

  if (weightf.value == "") {
    weightErrorf.innerHTML = "Weight is required";
  } else {
    weightErrorf.innerHTML = "";
  }

  if (heightf.value != "" && weightf.value != ""){

    let bmi = ((weightf.value * 2.205) / (heightf.value * heightf.value)) * 703;
    
    resultf.innerHTML = bmi.toFixed(2);

    if (bmi >= 18.5 && bmi <= 24.9) {
      suggestionf.innerHTML = "Good";
    } else if (bmi < 18.5) {
      suggestionf.innerHTML = "weight inrese need";
    } else{
      suggestionf.innerHTML = "weight loss need"
    }
  }
});
