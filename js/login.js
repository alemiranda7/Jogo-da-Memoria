var input = document.querySelector('.login-input')
var button = document.querySelector('.login-button')
var form = document.querySelector('.login-form')

var validarEntrada = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return
    }
    button.setAttribute('disabled', '')
}

var armazenarForm = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value)
    window.location = '../pages/games.html'
}

input.addEventListener('input', validarEntrada)
form.addEventListener('submit', armazenarForm)