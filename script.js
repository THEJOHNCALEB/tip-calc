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

tipPercentage[0].addEventListener("click", function(){
    let tipPerPerson = (valueOfTip[0].textContent / 100) * totalBill.value / noOfPeople.value
    let totalTip = tipAmountPerPerson.textContent = tipPerPerson
    totalBillPerPerson.textContent = totalTip + (totalBill.value / noOfPeople.value)
    dollarIcon.style.display = "none"
    userIcon.style.display = "none"
});

tipPercentage[1].addEventListener("click", function(){
    let tipPerPerson = (valueOfTip[1].textContent / 100) * totalBill.value / noOfPeople.value
    let totalTip = tipAmountPerPerson.textContent = tipPerPerson
    totalBillPerPerson.textContent = totalTip + (totalBill.value / noOfPeople.value)
    dollarIcon.style.display = "none"
    userIcon.style.display = "none"
});

tipPercentage[2].addEventListener("click", function(){
    let tipPerPerson = (valueOfTip[2].textContent / 100) * totalBill.value / noOfPeople.value
    let totalTip = tipAmountPerPerson.textContent = tipPerPerson
    totalBillPerPerson.textContent = totalTip + (totalBill.value / noOfPeople.value)
    dollarIcon.style.display = "none"
    userIcon.style.display = "none"
});
tipPercentage[3].addEventListener("click", function(){
    let tipPerPerson = (valueOfTip[3].textContent / 100) * totalBill.value / noOfPeople.value
    let totalTip = tipAmountPerPerson.textContent = tipPerPerson
    totalBillPerPerson.textContent = totalTip + (totalBill.value / noOfPeople.value)
    dollarIcon.style.display = "none"
    userIcon.style.display = "none"
});

tipPercentage[4].addEventListener("click", function(){
    let tipPerPerson = (valueOfTip[4].textContent / 100) * totalBill.value / noOfPeople.value
    let totalTip = tipAmountPerPerson.textContent = tipPerPerson
    totalBillPerPerson.textContent = totalTip + (totalBill.value / noOfPeople.value)
    dollarIcon.style.display = "none"
    userIcon.style.display = "none"
});

tipPercentage[5].addEventListener("click", function(){
    let tipPerPerson = (20 / 100) * (totalBill.value / noOfPeople.value)
    let totalTip = tipAmountPerPerson.textContent = tipPerPerson
    totalBillPerPerson.textContent = totalTip + (totalBill.value / noOfPeople.value)
    dollarIcon.style.display = "none"
    userIcon.style.display = "none"
})

resetButton.addEventListener("click", function(){
    location.reload();
});