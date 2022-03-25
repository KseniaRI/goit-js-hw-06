const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const minFontSize = Number(fontSizeControl.min);
fontSizeControl.value = minFontSize;

fontSizeControl.addEventListener("input", () => {
    text.style.fontSize = `${fontSizeControl.value}px`
});

