const form = document.querySelector("form");
//this usecase will give you empty
// const height= parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent default action
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //formula for bmi
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML += `<p>BMI is ${bmi}, you are underweight.</p>`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
        results.innerHTML+=`<p>BMI is ${bmi} , you are in normal range.</p>`
    }
    else{
        results.innerHTML+=`<p>BMI is ${bmi}, you are overweight.</p>`
    }
  }
});
