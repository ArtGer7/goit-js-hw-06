// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const input = document.querySelector(`#name-input`);
const spanName = document.querySelector(`#name-output`);

input.addEventListener(`input`, onInput);

function onInput(event) {
  spanName.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === ``) {
    spanName.textContent = `Anonymuos`;
  }
}