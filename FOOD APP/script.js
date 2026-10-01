// SIGNUP

function signup() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name == "" || email == "" || password == "") {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = {
        name: name,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");

    window.location.href = "login.html";
}


// LOGIN

function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // Admin Login

    if (email == "admin@gmail.com" && password == "admin123") {

        localStorage.setItem("loggedUser", "admin");

        alert("Admin Login Successful");

        window.location.href = "admin.html";

        return;
    }

    // User Login

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function(u) {
        return u.email == email && u.password == password;
    });

    if (user) {

        localStorage.setItem("loggedUser", JSON.stringify(user));

        alert("Login Successful");

        window.location.href = "user.html";

    } else {

        alert("Invalid email or password");

    }
}


// LOGOUT

function logout() {

    localStorage.removeItem("loggedUser");

    alert("Logged out successfully");

    window.location.href = "index.html";
}