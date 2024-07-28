const amountInput = document.querySelector("#mortgage--amount");
const termInput = document.querySelector("#mortgage--term");
const interestRateInput = document.querySelector("#interest--rate");
const repaymentOption = document.querySelector("#repayment");
const interestOption = document.querySelector("#interest");

const calculateBtn = document.querySelector(".button--container");

const emptyContainer = document.querySelector(".empty--container");
const resultContainer = document.querySelector(".result--container");
const monthlyDisplay = document.querySelector(".monthly--display");
const totalDisplay = document.querySelector(".total--display");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  calculateMortgage();
});

const calculateMortgage = function () {
  const mortgageAmount = amountInput.value;
  const mortgageTerm = termInput.value;
  const interestRate = interestRateInput.value;

  const monthlyInterest = interestRate / (100 * 12);
  const months = mortgageTerm * 12;

  const monthlyPayment =
    (mortgageAmount *
      (monthlyInterest * Math.pow(1 + monthlyInterest, months))) /
    (Math.pow(1 + monthlyInterest, months) - 1);

  const totalPayment = monthlyPayment * months;

  emptyContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  if (repaymentOption.checked) {
    monthlyDisplay.textContent = monthlyPayment.toFixed(2);
    totalDisplay.textContent = totalPayment.toFixed(2);
  } else {
    monthlyDisplay.textContent = (
      monthlyPayment -
      mortgageAmount / months
    ).toFixed(2);
    totalDisplay.textContent = (totalPayment - mortgageAmount).toFixed(2);
  }
};

const clearBtn = document.querySelector(".clear--all");
clearBtn.addEventListener("click", () => {
  emptyContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");

  amountInput.value = "";
  termInput.value = "";
  interestRateInput.value = "";

  repaymentOption.checked = false;
  interestOption.checked = false;
});
