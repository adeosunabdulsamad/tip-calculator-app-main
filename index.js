let bill = document.getElementById('number-bill');
let people = document.getElementById('number-people');
let tipAmountPerson = document.getElementById('tip-amount-person');
let totalAmountPerson = document.getElementById('total-amount-person');
let tipPercentage = document.getElementById('custom'); 
let stringAmountPerPerson = '0.00';
let stringTotalAmountPerson = '0.00';
let resetButton = document.getElementById('button');
const radios = document.querySelectorAll('.general');
console.log(radios);
const selectedRadio = Array.from(radios).find(radio => radio.checked);

radios.forEach(radio => {radio.addEventListener('change', () => {
    if (radio.checked) {
        tipPercentage.value='';
        calculateTip();
    }
});
});
tipPercentage.addEventListener('input', () => {
    radios.forEach(radio => radio.checked = false);
    calculateTip();
});
bill.addEventListener('input', calculateTip);
people.addEventListener('input', calculateTip);

resetButton.addEventListener('click', function ()
{
    tipAmountPerson.textContent="$0.00";
    totalAmountPerson.textContent="$0.00";
});

function calculateTip() {
    const selectedRadio = Array.from(radios).find(radio => radio.checked);
    let tipPercentageValue

    if (selectedRadio) {
        tipPercentageValue = selectedRadio.value/100;
        console.log(selectedRadio);
    }
    else if (tipPercentage.value !=='') {
        tipPercentageValue = tipPercentage.value/100;
    };
    let tipAmountPerPerson = bill.value * tipPercentageValue/people.value;
    let totalamountPerPerson = bill.value * (1+tipPercentageValue)/people.value;

    if (isFinite(tipAmountPerPerson)) {
        stringAmountPerPerson = tipAmountPerPerson.toFixed(2);
    }
    else {
        stringAmountPerPerson = "0.00"
    };
    if (isFinite(totalamountPerPerson)) {
        stringTotalAmountPerson = totalamountPerPerson.toFixed(2);
    }
    else {
        stringTotalAmountPerson = "0.00"
    };
    tipAmountPerson.textContent = "$" + stringAmountPerPerson;
    totalAmountPerson.textContent = "$" + stringTotalAmountPerson;
}