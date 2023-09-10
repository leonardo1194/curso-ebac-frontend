let form = document.getElementById('form')

function validaNumero(n1, n2) {
    
    if (n1 >= n2) {
        return false
    } else {
        return true
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault()

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let resultadoValidaNumero = false
    resultadoValidaNumero = validaNumero(num1, num2)

    let divResultado = document.getElementById('resultado')

    if (resultadoValidaNumero === false) {
        divResultado.style.backgroundColor = '#a12727'
        divResultado.innerHTML = '<p>Errou, não pode entrar</p>'
    } else {
        divResultado.style.backgroundColor = '#1c771c'
        divResultado.innerHTML = '<p>Acertou, pode entrar</p'
    }

    divResultado.style.display = 'block'
})