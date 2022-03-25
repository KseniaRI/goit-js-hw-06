const mainCategories = document.querySelectorAll('.item');
console.log('Number of categories:', mainCategories.length);
console.log("");

for (const category of mainCategories) {
    const categoryTitle = category.querySelector('h2');
    console.log('Category:', categoryTitle.textContent);

    const categoryList = category.querySelector('ul');
    console.log('Elements:', categoryList.children.length);

    console.log("");
}

