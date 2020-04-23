let grids = 2; let change;
let gridItem = document.querySelector("#grid-item");  
let clear = document.querySelector("#clear");
let n = document.querySelector("#new");
let gridContainer = document.querySelector("#grid-container");

window.onLoad = gridcreate(grids);

function gridcreate(pixel){
   gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${pixel}, 1fr)`;
   gridContainer.style.gridTemplateRows = `repeat(${pixel}, 1fr)`;
    gridContainer.style.border = '4px black solid';
   let pixels = pixel*pixel; 
   grid(pixels);
}
   
function grid(pixeld){
    reset();
    for(let i=0; i < pixeld; i++){
       
       let width = gridContainer.style.width;
       let height = gridContainer.style.height;
 let clone = gridItem.cloneNode();
       let color = Math.floor(Math.random()*16777215).toString(16);
         clone.addEventListener('mouseover', function(){
           if(select.value == "Color"){
        color = Math.floor(Math.random()*16777215).toString(16);}
          if(select.value == "Black"){color = "000000";}
              this.style.backgroundColor = "#" + color;
            });
        gridContainer.appendChild(clone); 
        
   }
  
    
}
 n.addEventListener('click', (e) => { 
   reset(); 
   change = Number(prompt("Enter number of grids"));
   gridcreate(change);  });     

  clear.addEventListener('click', (e) => { 
        resetColor(); 
      });
function resetColor(){
    let pixel = document.querySelectorAll('#grid-item');
    pixel.forEach((e)=>{
        e.style.background = 'white';
    })
    
}
function reset(){
        while (gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    };
};
