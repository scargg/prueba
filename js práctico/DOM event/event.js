const a = document.querySelector('#calculo')
const b = document.querySelector('#calculo2')
const calcular = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')

calcular.addEventListener('click', calcularOperacion)

function calcularOperacion () {
    const num = a.value + b.value
    result.innerText = 'Resultado: '+num
}
a.value