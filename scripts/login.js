const username = 'tinkiwinki'
const password = 'akiro'

const pistas = ["" , "", "Uno de los datos es el nombre de tu gato", "", "", "", "", "Uno de tus datos es tu apodo", "", "", ""]

const errorMessage = document.querySelector('.errorMessage')

const login = (username, password) => {
  let i = Math.floor(Math.random() * pistas.length)

  if (username === 'tinkiwinki' && password === 'akiro') {
    window.location.href = 'carta.html'
  } else {
    errorMessage.textContent = pistas[i]
  }
}

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  const userInput = document.querySelector('#username')
  const passInput = document.querySelector('#password')
  e.preventDefault()
  login(userInput.value, passInput.value)
})