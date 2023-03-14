const boxContainer = document.querySelector('.container');
const pixelColor = document.querySelector('#rgb');
const boxSize = document.querySelector('#gridsize');
createGrid(16);
let pixelBox = document.querySelectorAll('.block');


boxSize.addEventListener('change', () => {
    boxContainer.innerHTML='';
    createGrid(boxSize.value);
});


pixelBox.forEach((pixelBox) => {
    pixelBox.addEventListener('click', () => {
        console.log(pixelColor.value);
        pixelBox.style.backgroundColor = pixelColor.value;
    });
});

function createGrid(number){
    let box;
    let gridcolumns="auto";
    for(let x=1;x<number;x++){
        gridcolumns = gridcolumns.concat(" auto");
    };
    boxContainer.style.gridTemplateColumns=gridcolumns;
    for(let i=1;i<=number;i++){
        for(let j=1;j<=number;j++){
            box = document.createElement('div');
            box.className = `block ${i}x${j}`;
            boxContainer.appendChild(box);
        }
    }
};