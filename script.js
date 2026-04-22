function validateForm() {

    // Username
    var uname = document.getElementById("uname").value;
    if (uname == "") {
        alert("Please enter User Name");
        return false;
    }

    // Address
    var address = document.getElementById("address").value;
    if (address == "") {
        alert("Please enter Address");
        return false;
    }

    // DOB
    var dob = document.getElementById("dob").value;
    if (dob == "") {
        alert("Please select Date of Birth");
        return false;
    }

    // Email
    var email = document.getElementById("email").value;
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter valid Email ID");
        return false;
    }

    // PAN
    var pan = document.getElementById("pan").value;
    var panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!pan.match(panPattern)) {
        alert("Please enter valid PAN Number");
        return false;
    }

    // Aadhaar
    var aadhar = document.getElementById("aadhar").value;
    if (aadhar.length != 12 || isNaN(aadhar)) {
        alert("Please enter valid 12-digit Aadhaar Number");
        return false;
    }

    // Education
    var education = document.getElementById("education").value;
    if (education == "") {
        alert("Please select Education");
        return false;
    }

    // Contact
    var contact = document.getElementById("contact").value;
    if (contact.length != 10 || isNaN(contact)) {
        alert("Please enter valid 10-digit Contact Number");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}
