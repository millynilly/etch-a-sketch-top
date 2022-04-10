
const container = document.querySelector('#container')
const btn = document.querySelector('#clear')


createGrid(16)


/*Event listener for button*/
btn.addEventListener('click', () => {
    
    let size = getSize()

    if (size !== null) {
        clearGrid()
        createGrid(size) }
})


function createGrid(size) {
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {      
        container.appendChild(document.createElement('div'))     
    }
    document.q

    const squares = document.querySelectorAll('#container div')

    /*Event listener for grid
    Needs to be here because grid divs are created anew each time*/
    squares.forEach( (sqr) => {
        sqr.addEventListener('mouseenter', () => {
            const effect = document.querySelector('input[name="effect"]:checked').value
            
            switch (effect) {
                case 'grey':
                    colour = 'darkgrey'
                    break
                case 'random':
                    colour = getRandomColour()
                    break
                case 'grey-scale':
                    colour = getGreyScale()
                    break
            }
            sqr.style.backgroundColor = colour
        })
    })
}


function getSize() {
    
    let size = window.prompt('Enter grid size (number of squares per side) - max 100:')

    if (size > 0 && size <= 100 || size === null) { return size }
    
    window.alert('Size must be a number between 1 and 100.')
    return null
}


function clearGrid() {
    container.innerHTML = ''
}


function getRandomColour() {
    let rgb = 'rgb('
    
    for (let i = 0; i < 3; i++) {
        rgb += Math.floor((Math.random() * 256)).toString() + ', '
    }
    rgb = rgb.slice(0, -2) + ')'
    
    return rgb
}


function getGreyScale() {
    return 'blue'
}




