
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    
    if (email === "user@example.com" && password === "password") {
      
      alert("Login successful!");
      
      window.location.href = "dashboard.html";
    } else {
      
      document.getElementById("error-msg").textContent = "Invalid email or password. Please try again.";
    }
  });
  
