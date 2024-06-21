document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let cpassword = document.getElementById("cpassword").value;

        if (email === "") {
            alert("Please enter your email.");
            return false; 
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false; 
        }

        if (username === "") {
            alert("Please enter a username.");
            return false; 
        }

        if (password === "") {
            alert("Please enter a password.");
            return false; 
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false; 
        }

        if (password !== cpassword) {
            alert("Passwords do not match.");
            return false; 
        }

        
        alert("Account Created Successfully");

        
        window.location.href = "login.html"; 
    });

    
    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
