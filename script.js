
const container = document.querySelector('#container')
const btnNew = document.querySelector('#new')
const btnClear = document.querySelector('#clear')



/*Event listeners for buttons*/
btnNew.addEventListener('click', () => {
    
    let size = getSize()

    if (size !== null) {
        clearSquares()
        createGrid(size) }
})

btnClear.addEventListener('click', clearSquares)


function createGrid(size) {
    
    container.innerHTML = ''
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {      
        container.appendChild(document.createElement('div'))     
    }
    
    /*Explicitly set background-color of divs to white.
    For use with shading effect*/
    clearSquares()

    /*Event listener for grid
    Needs to be here because grid divs are created anew each time*/
    const squares = document.querySelectorAll('#container div')
    squares.forEach( (sqr) => sqr.addEventListener('mouseenter', changeColour))
}


function changeColour() {

    const effect = document.querySelector('input[name="effect"]:checked').value
    const current = this.style.backgroundColor

    switch (effect) {
        case 'grey':
            colour = 'darkgrey'
            break
        case 'random':
            colour = getRandomColour()       
            break
        case 'grey-scale':
            colour = getGreyScale(current)
            break
    }
    this.style.backgroundColor = colour
}


function getSize() {
    
    let size = window.prompt('Enter grid size (number of squares per side) - max 100:')

    if (size > 0 && size <= 100 || size === null) { return size }
    
    window.alert('Size must be a number between 1 and 100.')
    return null
}


function clearSquares() {
    /*Sets background-color of all divs to white*/
    
    let divs = document.querySelectorAll('#container div')

    divs.forEach( (div) => {
        div.style.backgroundColor = 'rgb(255, 255, 255'
    })
}


function getRandomColour() {
    let rgb = 'rgb('

    for (let i = 0; i < 3; i++) {
        rgb += Math.floor((Math.random() * 256)).toString() + ', '
    }
    rgb = rgb.slice(0, -2) + ')'
    
    return rgb
}


function getGreyScale(shade) {
    
    let greys = [255, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0]


    /*Get first rgb value. It's greyscale so r = g = b*/
    let rgb = shade.slice(4, 7)

    /*If black, return black.*/
    if(rgb[0] == 0) { return 'rgb(0, 0, 0)' }
    
    /*If under 100 (2 digits) remove comma.*/
    rgb = rgb[rgb.length - 1] === ',' ? +rgb.slice(0, 2) : +rgb
    
    /*Get next value in greys array. ie. increase the shade.*/
    rgb = greys[greys.indexOf(rgb) + 1]
    
    /*Put back into rgb string*/
    return `rgb(${rgb}, ${rgb}, ${rgb})`
}



createGrid(16)
