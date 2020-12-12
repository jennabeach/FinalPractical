//validate the profile form
function validate(e){

    e.preventDefault();

    var valid = true;

    //display warning if First Name is not entered
    if(contact.firstName.value === ""){
    document.querySelector('#fnameWarning').innerHTML="*Enter First Name";
    document.getElementById('firstName').style.borderColor = 'red';
        valid = false;
    }

    //display warning if Last Name is not entered
    if(contact.lastName.value == ""){
    document.querySelector('#lnameWarning').innerHTML="*Enter Last Name";
    document.getElementById('lastName').style.borderColor = 'red';
        valid = false;
    }

    //display warning if Birthday is not entered
    if(contact.birth.value == ""){
    document.querySelector('#birthWarning').innerHTML="*Enter date of birth";
    document.getElementById('birth').style.borderColor = 'red';
        valid = false;
    }

    //display warning if gender is not entered
    if(contact.genderID.value == ""){
    document.querySelector('#genderWarning').innerHTML="*Please Choose One";
    document.getElementById('genderID').style.borderColor = 'red';
        valid = false;
    }

    //display warning if email is not entered
    if(contact.email.value == ""){
    document.querySelector('#emailWarning').innerHTML="*Enter Email";
    document.getElementById('email').style.borderColor = 'red';
        valid = false;
    }


    //display warning if Address is not entered
    if(contact.address1.value == ""){
    document.querySelector('#address1Warning').innerHTML="*Enter address";
    document.getElementById('address1').style.borderColor = 'red';
        valid = false;
    }

    //display warning if City is not entered
    if(contact.city.value == ""){
    document.querySelector('#cityWarning').innerHTML="*Enter city";
    document.getElementById('city').style.borderColor = 'red';
        valid = false;
    }

    //display warning if Province is not entered
    if(contact.province.value == ""){
    document.querySelector('#provinceWarning').innerHTML="*Select province";
    document.getElementById('province').style.borderColor = 'red';
        valid = false;
    }

    //display warning if Country is not entered
    if(contact.country.value == ""){
      document.querySelector('#countryWarning').innerHTML="*Select country";
      document.getElementById('country').style.borderColor = 'red';
      valid = false;
    }

    //display warning if phone is not entered
    if(contact.num.value == ""){
      document.querySelector('#numWarning').innerHTML="*Enter Phone Number";
      document.getElementById('num').style.borderColor = 'red';
      document.getElementById('phoneType').style.visibility = 'hidden';
      valid = false;
    }

    //display warning if credit card is not entered
    if(contact.payment.value == ""){
      document.querySelector('#cardWarning').innerHTML="*Choose Credit Card";
      document.getElementById('payment').style.borderColor = 'red';
      valid = false;
    }

  //display store if valid
    if(valid){
      document.getElementById('contactForm').style.opacity = '0.5';
      document.getElementById('shop').style.display = 'block';
    }

    return valid;

};
