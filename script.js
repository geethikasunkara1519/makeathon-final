
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == "" || email == "" || message == "") {
    alert("Please fill all required fields.");
    return false;
    } else {
    alert("form fields submitted successful for email!");
    window.open('https://mail.google.com/', '_blank');
    return false; 
    }
}
