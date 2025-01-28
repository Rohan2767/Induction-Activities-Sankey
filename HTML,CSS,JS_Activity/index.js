
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector("button");
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";  
    document.querySelector(".text").appendChild(errorMessage);  

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();  
        
        const email = emailInput.value;
        const password = passwordInput.value;

        errorMessage.textContent = "";

        if (email === "sankey901@solutions.com" && password === "mindset") {
            window.location.href = "html2.html";  
        } else if (email !== "sankey901@solutions.com") {
            errorMessage.textContent = "Invalid username/email";
        } else if (password !== "mindset") {
            errorMessage.textContent = "Invalid password";
        }
    });

