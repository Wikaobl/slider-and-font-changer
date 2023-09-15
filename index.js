document.addEventListener("DOMContentLoaded", () => {
  const inputRange = document.querySelector(".rangeInput");
  const sampleText = document.querySelector(".sampleText");
  const fontSelector = document.querySelector(".fontSelector");

  inputRange.addEventListener("input", function () {
    sampleText.style.fontSize = this.value + "px";
  });
  fontSelector.addEventListener("change", () => {
    sampleText.style.fontFamily = fontSelector.value;
  });
});
