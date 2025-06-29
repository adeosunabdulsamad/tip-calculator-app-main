let query = document.getElementsByName("query");
let bill = document.getElementById("number-bill");
let people = document.getElementById("number-people");
let tipAmountPerson = document.getElementById("tip-amount-person");
let totalAmountPerson = document.getElementById("total-amount-person");
let tipPercentage = document.getElementById("custom"); 
tipPercentage.addEventListener("keypress", function(event) 
{
    if (event.key === "Enter") {
        event.preventDefault;
        let tipPercentageValue = tipPercentage.value/100;
        let tipAmountPerPerson = bill.value * tipPercentageValue/people.value;
        let stringAmountPerPerson = tipAmountPerPerson.toFixed(2);
        tipAmountPerson.innerHTML = "$" + stringAmountPerPerson;
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
        event.preventDefault;
        let tipPercentageValue = tipPercentage.value/100;
        let tipAmountPerPerson = bill.value * tipPercentageValue/people.value;
        let stringAmountPerPerson = tipAmountPerPerson.toFixed(2);
        tipAmountPerson.innerHTML = "$" + stringAmountPerPerson;
    }
});
people.addEventListener("keypress", function(event) 
{
    if (event.key === "Enter") {
        event.preventDefault;
        let tipPercentageValue = tipPercentage.value/100;
        let tipAmountPerPerson = bill.value * tipPercentageValue/people.value;
        let stringAmountPerPerson = tipAmountPerPerson.toFixed(2);
        tipAmountPerson.innerHTML = "$" + stringAmountPerPerson;
    }
});