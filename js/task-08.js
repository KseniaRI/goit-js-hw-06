
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", sendForm);

function sendForm(event) {
    event.preventDefault();

    const {elements: { email, password }
    } = event.currentTarget;
    
    
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены");
    } else {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
    }
}