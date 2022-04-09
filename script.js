
const container = document.querySelector('#container')
const btn = document.querySelector('#clear')


createGrid(16)


/*Event listener for button*/
btn.addEventListener('click', () => {
    clearGrid()
    createGrid(getSize())
})


function createGrid(size) {

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {      
        container.appendChild(document.createElement('div'))      
    }

    const squares = document.querySelectorAll('#container div')

    /*Event listener for grid
    Needs to be here because grid divs are created anew each time*/
    squares.forEach( (sqr) => {
        sqr.addEventListener('mouseenter', () => {
        sqr.classList.add('square')
        })
    })
}


function getSize() {
    console.log('Get size')
    return window.prompt('Enter grid size (number of squares per side) - max 100:')
    
}


function clearGrid() {
    container.innerHTML = ''
    console.log('Clear grid')
}




