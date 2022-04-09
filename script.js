const square = []
const container = document.querySelector('#container')
const size = 16
//const squares = document.querySelectorAll('.square')

/*Create grid divs*/
for (let i = 0; i < size*size; i++) {
    square[i] = document.createElement('div')
    
    container.appendChild(square[i])
}
console.log(square)

square.forEach( (sqr) => {
    console.log('hey')
    sqr.addEventListener('mouseenter', () => {
        console.log('mouse over')
        sqr.classList.add('square')
    })
})
