function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainer = document.querySelector('#boxes');
const customerInput = document.querySelector('#controls > input'); 
const creatingBoxesButton = document.querySelector('[data-create]');
const destroyingBoxesButton = document.querySelector('[data-destroy]');


customerInput.addEventListener("input", () => {
  const amountOfBoxes = customerInput.value;
  creatingBoxesButton.addEventListener("click", () => {
    createBoxes(amountOfBoxes);
  });
})

destroyingBoxesButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxesArray = [];
  let boxWidth = 30;
  let boxHeight = 30;
  for (let i = 1; i <= amount; i += 1){
    const box = document.createElement("div");
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
    boxWidth += 10;
    boxHeight += 10;
  }
  boxesContainer.append(...boxesArray);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

