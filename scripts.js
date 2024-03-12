
function makeGrid(edgeSize) {
    
    for (i = 1; i <= (edgeSize * edgeSize); i++) {
        console.log(edgeSize)
        const gridSquare = document.createElement('div')
        squareSide = (600 - (edgeSize*2)) / edgeSize
        
        gridSquare.style.height = squareSide + 'px';
        gridSquare.style.width = squareSide + 'px';
        gridSquare.style.border = '1px solid black'
        
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = 'green'
        })

        container.appendChild(gridSquare)
        
    }
}

function resetGrid() {
    edgeSize = prompt('enter your grid size')
    container.innerHTML = ''
    makeGrid(edgeSize)
}



const container = document.querySelector('.grid-container')

let edgeSize = prompt('enter your grid size')

makeGrid(edgeSize)



const button = document.getElementById('reset')

button.addEventListener('click', resetGrid);