const shoModal = document.querySelector('#show')
const closeModal = document.querySelector('#close')
const openModal = document.querySelector('#open')
const iconClose = document.querySelector('#iconClose')

shoModal.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    modal.classList.toggle('hidden')
})

closeModal.addEventListener('click', () => {
    const modal = document.querySelector("#modal");
    modal.classList.add('hidden')
})

openModal.addEventListener("click", () => {
  const modal = document.querySelector("#modal");
  modal.classList.add("hidden");
});

iconClose.addEventListener("click", () => {
  const modal = document.querySelector("#modal");
  modal.classList.add("hidden");
});