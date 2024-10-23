const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October' , 'November' , 'December']



const subBtn = document.querySelector('#js-submit')



function validateName() {
    const cardName = document.querySelector('#cardName')
    // console.log(cardName.validity);
    if(cardName.validity.valueMissing){
        cardName.setCustomValidity('"Enter your name as it appears on the card')
    } else {
        cardName.setCustomValidity('')
    }
}

function validateCredit() {
    const options = document.querySelectorAll('input[name = "creditCard"]')
    // console.log(options);
    let isChecked = false
    options.forEach(option => {
        if(option.checked){
            isChecked = true
        }
        // Clear any previous custom validity
        option.setCustomValidity('')
    })
    if(!isChecked){
        // Set custom validity only on the first option if none are checked
        options[0].setCustomValidity('Please select a credit card')
    }
}


// Check if the card number is valid
function validateNumber() {
    const cardNumber = document.querySelector('#cardNumber')
    if(cardNumber.validity.valueMissing){
        cardNumber.setCustomValidity('Enter your card number')
    }else if(cardNumber.validity.patternMismatch) {
        cardNumber.setCustomValidity('Enter a valid card number')
    }else if(luhn(cardNumber.value) === false){
        cardNumber.setCustomValidity('Enter a legitimate card number')
    }else{
        cardNumber.setCustomValidity('')
    }
}


// Check that a month is selected for the expiration date
function validateMonth() {
    const monthSelectElement = document.querySelector('#js-month')
    // console.dir(monthselectElement)

    const monthIndex = monthSelectElement.selectedIndex
    
    if(monthIndex === 0){
        monthSelectElement.setCustomValidity('Select the expiration month')
    }else{
        monthSelectElement.setCustomValidity('')
    }
    
}


// Check that a year is selected for the expiration date
function validateYear() {
    const yearSelectElement = document.querySelector('#js-year')

    const yearIndex = yearSelectElement.selectedIndex

    if(yearIndex === 0){
        yearSelectElement.setCustomValidity('Select the expiration year')
    }else{
        yearSelectElement.setCustomValidity('')
    }
}



function validateCVC() {
    // Determine which card was selected
    const option = document.querySelector('input[name = "creditCard"]:checked')
    // console.log(option);
    const optValue = option.value
    //console.log(optValue);



    const cvcElement = document.querySelector('input[name = "cvc"]')
    // console.log(cvcElement);

    if (cvcElement.validity.valueMissing) {
        cvc.setCustomValidity("Enter your CVC number");
    }else if ((optValue === "amex") && !(/^\d{4}$/.test(cvc.value))) {
        cvc.setCustomValidity("Enter a 4-digit number");
    }else if ((optValue !== "amex") && !(/^\d{3}$/.test(cvc.value))) {
        cvc.setCustomValidity("Enter a 3-digit number");
    }else {
        cvc.setCustomValidity("");
    }

}


// NOTE: add luhn algoirthm
function luhn(creditCardNumber) {
    // Remove any non-digit characters from the credit card number
    const digits = creditCardNumber.replace(/\D/g, '');
    
    let sum = 0;
    let isEven = false;
    
    // Iterate through the digits from right to left
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = parseInt(digits[i], 10);
      
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      isEven = !isEven;
    }
    
    // Check if the sum is a multiple of 10
    return sum % 10 === 0;
}



subBtn.addEventListener('click', validateName)
subBtn.addEventListener('click', validateCredit)
subBtn.addEventListener('click', validateNumber)
subBtn.addEventListener('click', validateMonth)
subBtn.addEventListener('click', validateYear)
subBtn.addEventListener('click', validateCVC)




// for create dynamically list options year  
window.addEventListener('load', function(){
    const date = new Date()
    // console.log(date);
    const year = date.getFullYear()
    // console.log(year);
    const yearSelectElement = document.querySelector('#js-year')
    // console.dir(yearSelectElement.options)
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement('option')
        option.value = year + i
        option.textContent = year + i
        yearSelectElement.appendChild(option)
    }
})

// for create dynamically list options month 
window.addEventListener('load', function(){
    const monthList = document.querySelector('#js-month')
     for (let index = 0; index < 12; index++) {
        const option = document.createElement('option')
        option.value = index + 1
        option.textContent = months[index]
        monthList.appendChild(option)
     }
})
