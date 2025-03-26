const nombre = document.querySelector('#nombre')

let i = 0
let nombreArray = ["Rosmely", "Tinkiwinki"]

setInterval(() => {
  nombre.style.opacity = "0";
  setTimeout(() => {
    nombre.innerHTML = nombreArray[i]
    i = (i + 1) % nombreArray.length
    nombre.style.opacity = "1"
  }, 500);
}
, 5000);

const touchBtn = document.querySelector('.touch-btn');
const hiddenText = document.querySelector('#hidden-text');

touchBtn.addEventListener('click', () => {
  hiddenText.classList.toggle('hidden');
  touchBtn.classList.toggle('hidden');
})