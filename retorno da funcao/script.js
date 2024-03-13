// o  return, retorna a função e termina a função

const soma = () => {
    return a + b
}

// document.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'Red'
// // muda a cor de funfo ao clicar em qualquer lugar!
// })



const criaMultipluicador = (multiplicador) => {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultipluicador(2)
const triplica = criaMultipluicador(3)
const quatriplica = criaMultipluicador(4)

console.log(quatriplica(2))