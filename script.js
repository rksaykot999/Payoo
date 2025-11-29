document.getElementById('login-btn').addEventListener('click', function(event){
event.preventDefault();
    let phone = document.getElementById('phone-number').value;
    let password = document.getElementById('password').value;
    password = parseInt(password);
    if(phone.length == 11){
        if(password == 123){
           window.location.href = "main.html";
        }
        else{
            alert("Incorrect password.");
        }
    }
    else{
        alert("Phone number must be 11 digits long.");
    }
})