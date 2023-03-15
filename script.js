const boxContainer = document.querySelector('.container');
const pixelColor = document.querySelector('#rgb');
const boxSize = document.querySelector('#gridsize');
createGrid(boxSize.value);
let mouseDown=false;


function draw() {
    pixelBox = document.querySelectorAll('.block');
    pixelBox.forEach((pixelBox) => {
        pixelBox.addEventListener('mouseenter',()=>{
            pixelBox.style.backgroundColor = pixelColor.value;
            console.log('Enter'+pixelColor.value);
        })
        
    });
    
    
    
 };





boxSize.addEventListener('change', () => {
    boxContainer.innerHTML='';
    createGrid(boxSize.value);
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
    box = document.querySelectorAll('.block');
    box.forEach((box) => {
        box.addEventListener('mouseenter',function(){
            box.style.backgroundColor = pixelColor.value;
        })
    })
    
};