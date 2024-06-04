



let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");
let suggestion = document.querySelector(".suggestion");
let heightError = document.querySelector(".heightError");
let weightError = document.querySelector(".weightError");






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
