function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainer = document.querySelector('#boxes');
const customerInput = document.querySelector('#controls > input'); 
const creatingBoxesButton = document.querySelector('[data-create]');
const destroyingBoxesButton = document.querySelector('[data-destroy]');

creatingBoxesButton.addEventListener("click", () => {
   const amountOfBoxes = customerInput.value;
   createBoxes(amountOfBoxes);
  });

destroyingBoxesButton.addEventListener("click", destroyBoxes);

let boxWidth = 30;
let boxHeight = 30;
 
function createBoxes(amount) {
  let boxesArray = [];
  
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
  customerInput.value = "";
  boxWidth = 30;
  boxHeight = 30;
}

