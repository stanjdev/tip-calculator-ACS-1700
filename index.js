const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const numPeople = document.querySelector('#num-people');
const tipTotal = document.querySelector('#tip-total');
const total = document.querySelector('#total');

const leftColumn = document.querySelector('.column-left');

const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll('button');
const nudgeInputs = document.querySelectorAll('.nudge-input');


// Functions:
function handleBill(e) {
  let tipAmount = Number(bill.value * (tip.value / 100));
  let totalPrice = Number(tipAmount) + Number(bill.value);
  tipTotal.textContent = "$" + (tipAmount / numPeople.value).toFixed(2);
  total.textContent = "$" + (totalPrice / numPeople.value).toFixed(2);
};

function nudgeValue(inputName, action) {
  let val = parseInt(document.querySelector(`#${inputName}`).value);
  val = action == "increment" ? val + 1 : val - 1;
  document.querySelector(`#${inputName}`).value = val;
}


// When typing numbers into inputs:
inputs.forEach(input => {
  input.addEventListener('input', e => {
    handleBill();
  })
})

// // Doing each input individually:
// bill.addEventListener('input', e => {
//   handleBill();
// });

// tip.addEventListener('input', e => {
//   handleBill();
// });

// numPeople.addEventListener('input', e => {
//   handleBill();
// });

// When pressing + or - buttons:
nudgeInputs.forEach(element => {
  element.onclick = function(e) {
    if (e.target && e.target.classList.contains('decrement')) {
      nudgeValue(e.target.dataset.name, 'decrement')
    } else if (e.target && e.target.classList.contains('increment')) {
      nudgeValue(e.target.dataset.name, 'increment')
    }
    handleBill();
  }
})