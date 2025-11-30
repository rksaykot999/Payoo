document.getElementById('add-money-section').style.display = 'none';
document.getElementById('cash-out-section').style.display = 'none';

//Veriable diclaretion
let latestPaymentSection = document.getElementById('latest-payment-section');
let addMoneySection = document.getElementById('add-money-section');
let cashOutSection = document.getElementById('cash-out-section');

//Add Money button
document.getElementById('add-money').addEventListener('click', function () {
    latestPaymentSection.style.display = 'none';
    cashOutSection.style.display = 'none';
    addMoneySection.style.display = 'block';
})

//Cash Out button
document.getElementById('cash-out').addEventListener('click', function () {
    latestPaymentSection.style.display = 'none';
    addMoneySection.style.display = 'none';
    cashOutSection.style.display = 'block';
})

//Add Money System
document.getElementById('add-btn').addEventListener('click', function () {
    let number = parseInt(document.getElementById('ac-number').value);
    let pin = parseInt(document.getElementById('pin').value);
    let mainAmount = parseInt(document.getElementById('main-amount').textContent);
    let addAmount = parseInt(document.getElementById('add-amount').value);
    if (number.length = 11 || pin === 123) {
        mainAmount = mainAmount + addAmount;
        document.getElementById('main-amount').textContent = mainAmount;
        alert("Money added successfully.")
    }
    else {
        alert("The number or pin is wrong.")
    }
})

//Withdraw Money System
document.getElementById('withdraw-btn').addEventListener('click', function () {
    let number = parseInt(document.getElementById('ac-number').value);
    let pin = parseInt(document.getElementById('pin').value);
    let witdhdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    let mainAmount = parseInt(document.getElementById('main-amount').textContent);
    if (number.length = 11 || pin === 123) {
        if (witdhdrawAmount <= mainAmount) {
            document.getElementById('main-amount').textContent = mainAmount - witdhdrawAmount;
            alert("Money withdraw successfully.")
        }
        else {
            alert("Insufficient balance.")
        }
    }
    else {
        alert("The number or pin is wrong.")
    }
})