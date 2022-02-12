const billInput = document.getElementById('bill-input');
const peopleInput = document.getElementById('people-input');
const tipCustom = document.getElementById('tip-custom');
const tipPerPerson = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total-amount');
const tips = document.querySelectorAll('.tips');
const error = document.querySelector('.error');
const peopleInputGroup = document.querySelector('.people-input-group');
const resetBtn = document.getElementById('reset');

billInput.addEventListener('input', billInputFun);
peopleInput.addEventListener('input', peopleInputFun);
tipCustom.addEventListener('input', tipInputFun);

tips.forEach(function (val) {
    val.addEventListener('click', handleClick)
})

billInput.value = '0.00';
peopleInput.value = '1';

tipPerPerson.innerHTML = '$' + (0.0).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun() {
    billValue = parseFloat(billInput.value);
    calculateTip();
}

function tipInputFun() {
    tipValue = parseFloat(tipCustom.value / 100);
    tips.forEach(function (val) {
        val.classList.remove('active-tip');
    });
    console.log(tipCustom.value);
    calculateTip();
}

function peopleInputFun() {
    peopleValue = parseInt(peopleInput.value);
    if (peopleValue < 1) {
        error.style.display = 'inline';
        peopleInputGroup.style.border = '3px solid red';
    } else {
        error.style.display = 'none';
        peopleInputGroup.style.border = 'none';
        calculateTip();
    }

}

function handleClick(event) {
    tips.forEach(function (val) {
        val.classList.remove('active-tip');
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add('active-tip');
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculateTip();
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = '$' + total.toFixed(2);
    }
}

resetBtn.addEventListener('click', function () {
    billInput.value = '0.00';
    billInputFun();
    peopleInput.value = '1';
    peopleInputFun();
    tipCustomValue = '';
})