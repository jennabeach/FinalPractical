/* EVENTS */

//remove warning if firstName has input
document.querySelector('#firstName').addEventListener("blur", function(){
    if(this.value !== ""){
        fnameWarning.innerHTML = "";
        document.getElementById('firstName').style.borderColor = 'black';
    }
});

//remove warning if lastName has input
document.querySelector('#lastName').addEventListener("blur", function(){
    if(this.value !== ""){
        lnameWarning.innerHTML = "";
        document.getElementById('lastName').style.borderColor = 'black';
    }
});

//remove warning if birth has input
document.querySelector('#birth').addEventListener("blur", function(){
    if(this.value !== ""){
        birthWarning.innerHTML = "";
        document.getElementById('birth').style.borderColor = 'black';
    }
});

//remove warning if gender has input
document.querySelector('#genderID').addEventListener("blur", function(){
    if(this.value !== ""){
        genderWarning.innerHTML = "";
        document.getElementById('genderID').style.borderColor = 'black';
    }
});

//remove warning if email has input
document.querySelector('#email').addEventListener("blur", function(){
    if(this.value !== ""){
        emailWarning.innerHTML = "";
        document.getElementById('email').style.borderColor = 'black';
    }
});

//remove warning if address1 has input
document.querySelector('#address1').addEventListener("blur", function(){
    if(this.value !== ""){
        address1Warning.innerHTML = "";
        document.getElementById('address1').style.borderColor = 'black';
    }
});

//remove warning if city has input
document.querySelector('#city').addEventListener("blur", function(){
    if(this.value !== ""){
        cityWarning.innerHTML = "";
        document.getElementById('city').style.borderColor = 'black';
    }
});

//remove warning if province has input
document.querySelector('#province').addEventListener("blur", function(){
    if(this.value !== ""){
        provinceWarning.innerHTML = "";
        document.getElementById('province').style.borderColor = 'black';
    }
});

//remove warning if country has input
document.querySelector('#country').addEventListener("blur", function(){
    if(this.value !== ""){
        countryWarning.innerHTML = "";
        document.getElementById('country').style.borderColor = 'black';
    }
});

//remove warning if phone has input
document.querySelector('#num').addEventListener("blur", function(){
    if(this.value !== ""){
        numWarning.innerHTML = "";
        document.getElementById('num').style.borderColor = 'black';
        document.getElementById('phoneType').style.visibility = "visible";
    }
});

//remove warning if country has input
document.querySelector('#payment').addEventListener("blur", function(){
    if(this.value !== ""){
        cardWarning.innerHTML = "";
        document.getElementById('payment').style.borderColor = 'black';
    }
});


// Add an event to the form on submit to validate input
document.contact.addEventListener("submit", validate);
