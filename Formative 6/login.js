document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve input values
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        // Basic validation (you should implement proper authentication)
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

        // Simulate successful login (replace with actual authentication logic)
        alert("Logged In");

        // Redirect to welcome.html after successful login
        window.location.href = "login.html";
    });
});
