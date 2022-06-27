var input = document.querySelector('.login-input')
var button = document.querySelector('.login-button')

var validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return
    }
    button.setAttribute('disabled', '')
}

input.addEventListener('input', validateInput)