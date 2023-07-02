let form = document.getElementById("form")

let nameField = document.getElementById("nameTextField")
let emailField = document.getElementById("emailTextField")
let countryField = document.getElementById("countryDropDown")
let phoneField = document.getElementById("phoneTextField")
let checkboxField = document.getElementById("tosCheckbox")

let emailMsg = [
    "Email must contain @",
    "Email domain must contain dot symbol(.)",
    "Email must not end with dot symbol(.)"
]


function validateCheckBox(checkbox){
    return checkbox.checked
}


function validatePhone(phone){

    if(phone.length == 0){
        return false
    }

    let nanCheck = true
    for(let i = 0; i<phone.length; i++){
        if(isNaN(phone[i])){
            nanCheck = false
            // if there is other char than numbers
        }
    }

    return nanCheck
}


function validateCountry(country){

    if(country.selectedIndex == 0){
        return false
    }else{
        return true
    }
}


function validateEmail(email){
    let atCheck = email.split("@")
    if(atCheck.length == 1){
        // showAlert("Email must contain @")
        return 0;
    }

    let dotCheck = atCheck[atCheck.length-1].split('.')
    if(dotCheck.length == 1){
        // showAlert("Email domain must contain dot symbol(.)")
        return 1
    }
    
    let dotCheck2 = dotCheck[dotCheck.length-1]
    // console.log(dotCheck)

    if(dotCheck2 == ''){
        // showAlert("Email must not end with dot symbol(.)")
        return 2
    }

    return -2
}


function validateName(name){
    let res = name.length >=5 && name.length <= 20
    return res
}


function showAlert(msg){
    alert(msg)
}

function validations(){
    if(!validateName(nameField.value)){
        showAlert("Name must be 5-20 characters long")
        return
    }

    let emailNum = validateEmail(emailField.value)

    if(emailNum != -2){
        showAlert(emailMsg[emailNum])
        return
    }

    if(!validateCountry(countryField)){
        showAlert("You must select a country")
        return
    }

    if(!validatePhone(phoneField.value)){
        showAlert("Phone number should only consist of numbers [0-9]")
        return
    }

    if(!validateCheckBox(checkboxField)){
        showAlert("You must agree to terms and condition")
        return
    }

    alert("Thankyou for subscribing to our newsletter")
    
}

if(form){
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        validations()
    }) 
}




// ONCHANGE VALIDATIONS



function nameOnChanged(){
    let val = document.getElementById("nameTextField");
    if(!validateName(val.value)){
        val.className = "incorrect-text"
    }else{
        val.className = val.className.replace("incorrect-text", "form-text-field")
    }
}

function emailOnChanged(){
    let val = document.getElementById("emailTextField")
    let res = validateEmail(val.value)
    if(res != -2){
        val.className = "incorrect-text"
    }else{
        val.className = val.className.replace("incorrect-text", "form-text-field")
    }
}

function onCountryChanged(){
    let val = document.getElementById("countryDropDown")
    if(!validateCountry(val)){
        val.className = "incorrect-drop-down"
    }else{
        val.className = val.className.replace("incorrect-drop-down", "form-drop-down")
    }
}

function onPhoneChanged(){
    let val = document.getElementById("phoneTextField")
    if(!validatePhone(val.value)){
        val.className = "incorrect-text"
    }else{
        val.className = val.className.replace("incorrect-text", "form-text-field")
    }
}