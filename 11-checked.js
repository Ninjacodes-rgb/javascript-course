const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = 'You are subscribed.';
    }else{
        subResult.textContent = 'You are not subscribed.';
    }
    if(visaBtn.checked){
        paymentResult.textContent = 'You have selected Visa for payment.';
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = 'You have selected MasterCard for payment.';
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = 'You have selected PayPal for payment.';
    }
    else{
        paymentResult.textContent = 'You must select a payment method.';
    }
}