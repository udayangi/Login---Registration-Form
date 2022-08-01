function allfill() {
    var err = document.getElementById("error");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob= document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    var cnf_pwd = document.getElementById("cnf-pwd").value;
    var ag= document.getElementById("ag").checked;
 if (
        fname == "" ||
        lname == "" ||
        dob == "" ||
        age == "" ||
        email == "" ||
        uname == "" ||
        pwd == "" ||
        cnf-pwd == "" ||
        check == false
    ) {
        err.innerHTML = "please fill all fields before submit";
        err.classList.remove("hide");
        err.classList.add("error");
        return false;
    } else {
        err.innerHTML = "";
        err.classList.add("hide");
        err.classList.remove("error");
        return true;
    }
}

 function Calage() {
    var dob = document.getElementById("dob");
    var age_in = document.getElementById("age");

    var today = new Date();
    var birthDate = new Date(dob.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    age_in.value = age;
}

	function maxChar() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var err = document.getElementById("error");
    if (fname.value.length > 30 || lname.value.length > 30) {
        err.innerHTML = "please limit your first name and last name to 30";
        err.classList.remove("hide");
        err.classList.add("error");
        return false;
    } else {
        err.innerHTML = "";
        err.classList.add("hide");
        err.classList.remove("error");
        return true;
    }
}

function validateForm() {
    if (!allfill() ||
        !maxChar() ||
        !validateEmail() ||
        !userName() ||
        !pwdValidation() ||
        !pwdMatch() ||
        !condition()
    ) {
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    var err = document.getElementById("error");
    var email = document.getElementById("email").value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var stat = re.test(String(email).toLowerCase());
    if (!stat) {
        err.innerHTML = "please Enter Valid Email";
        err.classList.remove("hide");
        err.classList.add("error");
        return false;
    } else {
        err.innerHTML = "";
        err.classList.add("hide");
        err.classList.remove("error");
        return true;
    }
}

function uname() {
    var err = document.getElementById("error");
    var username = document.getElementById("uname");
    val = username.value;
    if (!/^[a-z]+$/.test(val) || val.length > 10) {
        err.innerHTML =
            "Please use lowercase letters only and limit username to 10 characters";
        err.classList.remove("hide");
        err.classList.add("error");
        return false;
    } else {
        err.innerHTML = "";
        err.classList.add("hide");
        err.classList.remove("error");
        return true;
    }
}

function pwdValidation() {
    var err = document.getElementById("error");
    var pwd = document.getElementById("pwd");
    var val = pwd.value;
    if (val.length > 15 || val.length < 6 || !val.match(/[0-9]/g)) {
        err.innerHTML =
            "Please maintain password length in between 6-15 and add atleast one number";
        err.classList.remove("hide");
        err.classList.add("error");
        return false;
    } else {
        err.innerHTML = "";
        err.classList.add("hide");
        err.classList.remove("error");
        return true;
    }
}

function pwdMatch() {
    var err = document.getElementById("error");
    var pwd = document.getElementById("pwd");
    var cnf_pwd = document.getElementById("cnf-pwd");
    if (pwd.value.localeCompare(c-pwd.value) != 0) {
        err.innerHTML = "Password don't match";
        err.classList.remove("hide");
        err.classList.add("error");
        return false;
    } else {
        err.innerHTML = "";
        err.classList.add("hide");
        err.classList.remove("error");
        return true;
    }
}

function condition() {
    var err = document.getElementById("error");
    var ag = document.getElementById("ag");
    var bu = document.getElementById("su-button");
    console.log(ag.checked);
    if (!ag.checked) {
        err.innerHTML = "Please agree Conditions";
        err.classList.remove("hide");
        err.classList.add("error");
        bu.disabled = true;
        return false;
    } else {
        err.innerHTML = "";
        err.classList.add("hide");
        err.classList.remove("error");
        bu.disabled = false;
        return true;
    }
}