let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

incrementButton.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

// Styles:

decrementButton.style.height = "50px"
decrementButton.style.width = "80px";
decrementButton.style.borderRadius = "4px";
decrementButton.style.fontSize = "24px";

incrementButton.style.height = "50px";
incrementButton.style.width = "80px";
incrementButton.style.borderRadius = "4px";
incrementButton.style.fontSize = "24px"

value.style.fontSize = "24px";