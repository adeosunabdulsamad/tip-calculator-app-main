let query = document.getElementsByName("query");
let bill = document.getElementById("number-bill");
let people = document.getElementById("number-people");
let tipAmountPerson = document.getElementById("tip-amount-person");
let totalAmountPerson = document.getElementById("total-amount-person");
let tipPercentage = document.getElementById("custom"); 
let stringAmountPerPerson = "0.00";
let stringTotalAmountPerson = "0.00";
let resetButton = document.getElementById("button");
tipPercentage.addEventListener("keypress", function(event) 
{
    if (event.key === "Enter") {
        event.preventDefault();
        let tipPercentageValue = tipPercentage.value/100;
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
});

/*query.addEventListener("keypress", function(event){
    if (event.key === "")
        for (i = 0; i < bill.length; i++) {
            if (bill[i].checked) {
                console.log(tipPercent.value);
                }
}});*/
bill.addEventListener("keypress", function(event) 
{
    if (event.key === "Enter") {
        event.preventDefault();
        let tipPercentageValue = tipPercentage.value/100;
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
});
people.addEventListener("keypress", function(event) 
{
    if (event.key === "Enter") {
        event.preventDefault();
        let tipPercentageValue = tipPercentage.value/100;
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
});

resetButton.addEventListener('click', function ()
{
    tipAmountPerson.textContent="$0.00";
    totalAmountPerson.textContent="$0.00";
});