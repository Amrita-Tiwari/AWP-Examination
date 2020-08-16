function validation() {
    var user = document.getElementById(uname);
    var pass = document.getElementById(pwd);
    var email = document.getElementById(emailid);

    if (user == " ") {
        alert("username required !!");
        return false;
    }
    else if (pass == " ") {
        alert("password required !!");
        return false;
    }
    else if (email == " ") {
        alert("email required !!");
        return false;
    }
    else {
        return true;
    }
}

