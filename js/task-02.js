const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  return ingredientEl;
});

ingredientsList.append(...ingredientsItems);