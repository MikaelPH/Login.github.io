const loginForm = document.getElementById("loginform");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {	//an onclick function basically
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
	
	localStorage.setItem('username', username);	//saves name locally
	
    if (username === "UniqueUsername" && password === "123") {
        alert("Logged in.");	//Logged in "alert box" appears
        window.location.href="rooms.html";	//Redericts you to rooms.html if you succesfully login
    } else {
        loginErrorMsg.style.opacity = 1;	//make error-msg visible
    }
})