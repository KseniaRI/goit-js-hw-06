const textInput = document.querySelector('#validation-input');
const exactLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", CheckInputLength);

function CheckInputLength() {
    const inputLengt = textInput.value.length;
    inputLengt === exactLength ? textInput.classList.add("valid") : textInput.classList.add("invalid");
}

