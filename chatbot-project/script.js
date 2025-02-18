function signup() {
    let email = document.getElementById("Email").value;
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    if (!email || !username || !password) {
        alert("All fields are required!");
        return;
    }

    // Check if the username or email already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert("Username or Email already exists!");
    } else {
        // Store user data as an object
        users.push({ email, username, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! You can now login.");
        window.location.href = "login.html";
    }
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }
}

function resetPassword() {
    let username = document.getElementById("reset-username").value;
    let newPassword = document.getElementById("new-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userIndex = users.findIndex(user => user.username === username);

    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password reset successful!");
        window.location.href = "login.html";
    } else {
        alert("Username not found.");
    }
}
