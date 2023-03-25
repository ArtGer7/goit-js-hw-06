const input = document.querySelector(`#name-input`);
const spanName = document.querySelector(`#name-output`);

input.addEventListener(`input`, onInput);

function onInput(event) {
  spanName.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === ``) {
    spanName.textContent = `Anonymuos`;
  }
}