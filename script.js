let totalBill = document.querySelector(".totalbill");
let noOfPeople = document.querySelector(".noofpeople");
let tipPercentage = document.querySelectorAll(".tipperc");
let tipAmountPerPerson = document.getElementById("tipAmountPerPerson");
let totalBillPerPerson = document.getElementById("totalBillPerPerson");
let valueOfTip = document.querySelectorAll(".val");
let dollarIcon = document.querySelector(".d-sign");
let userIcon = document.querySelector(".u-sign");
let resetButton = document.querySelector(".reset");


noOfPeople.addEventListener("keyup", function(){
    totalBill.value / noOfPeople.value
});

for (let index = 0; index < tipPercentage.length; index++) {
    tipPercentage[index].addEventListener("click", function(){
        let tipPerPerson = index === 5 ? (20 / 100) :valueOfTip[index].textContent * (totalBill.value / noOfPeople.value);        
        let totalTip = tipAmountPerPerson.textContent = tipPerPerson
        totalBillPerPerson.textContent = totalTip + (totalBill.value / noOfPeople.value)
        dollarIcon.style.display = "none"
        userIcon.style.display = "none"
    });   
}

resetButton.addEventListener("click", function(){
    totalBillPerPerson.textContent = "0.00";
    tipAmountPerPerson.textContent = "0.00";
    noOfPeople.value = 0;
    totalBill.value = 0;
});