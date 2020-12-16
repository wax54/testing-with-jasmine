window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");


  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setCurrentUIValues(amount, years, rate){
// Get the inputs from the DOM and set there values to the ones passed it
document.getElementById("loan-amount").value = amount;
document.getElementById("loan-years").value = years;
document.getElementById("loan-rate").value = rate;
}

function setupIntialValues() {

  // Put some default values in the inputs
  setCurrentUIValues(600000, 10, 1.2);

  // Call a function to calculate the current monthly payment
  update();
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  
  //checking if all the values are numbers
  if(values.amount && values.rate && values.years){
    //calculates the monthly payments
    const payment = calculateMonthlyPayment(values);
    //update the UI
    updateMonthly(payment);
  }else {
    //I'd love to do something different here...
    updateMonthly('Invalid Input');
  }

}
/*
* Given an object of values (a value has amount, years and rate ),
* calculate the monthly payment.  The output should be a string
* that always has 2 decimal places.
*/
function calculateMonthlyPayment(values) {
  //loading the amount into the principle variable for the equation.
  const p = values.amount;
  //to make in num of months instead of years
  const n = values.years * 12;
  //to make yearly rate a percentage and also per month instead of per year
  const i = (values.rate / 100) / 12;
  //the Magic Equation
  let payment = (p * i)/(1 - Math.pow((1+i),-n));
  //if payment is NaN, return false
  if(!payment){
    return false;
  }

  //round the payment to 2 decmal places 
  //  and convert it to a string
  payment = payment.toFixed(2);
  return payment;
}

/* 
* Given a string representing the monthly payment value,
* update the UI to show the value.
*/
function updateMonthly(monthly) {
  const monthlyspan = document.getElementById('monthly-payment');
  monthlyspan.innerText = "$"+monthly; 
}
