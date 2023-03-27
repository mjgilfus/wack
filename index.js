const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const score = document.querySelector("#points");
//create 3x3 grid with divs and random mole


const makeField = () => {
//loop through rows and columns to make rows and columns
    for (let i = 0; i < 3; i++) {
        const theRow = document.createElement("div");
//made a row and called it row
        row.classList.add("row");
//this is columns now
        for (let j = 0; j < 3; j++) {
//make cells and holes with divs and img tags to start making them single elements
        const cell = document.createElement("div");
        const hole = document.createElement("img");
// the hole is a picture the element img get s a source for data
        hole.src = "hole.png";
//the cells are holes unless a mole they start as holes
        cell.appendChild(hole);
//think of cells as array of arrasy, x and y coordinate
        const cellId = `${i},${j}`;
        cell.classList.add("cell");
// cells are now cells and each cell is given an id and the id is the coordinates from nested loops
        cell.setAttribute("id", cellId);
        row.appendChild(cell);
    }
        container.appendChild(theRow);
}
    createMole();
};
  
// a function to place moles but like, lots of steps
const createMole = () => {
    // pick cells
    const cells = document.querySelectorAll(".cell");
    //math to pic a random coordinate
    const random = cells[Math.floor(Math.random() * cells.length)];
    //mole goes in on coorinat
    const mole = document.createElement("img");
    mole.src = "mole.png";
    //where the mole is is called mole, so we can remove mole when mole is clicked
    mole.classList.add("mole");
    //remove mold from the cell and at the same time move mole to another random hole
    random.removeChild(randomCell.firstChild);
    random.appendChild(mole);
};

const replace = (e) => {
// when a mole is click it turns to hole
// then mole moves to new xy coord
    const mole = e.target;
    const hole = document.createElement("img");
    hole.src = "hole.png";
// the clicked div changed from mole to hoel
    mole.parentNode.replaceChild(hole, mole);
    createMole();
};
  
container.addEventListener("click", (e) => {
//clicka mole to get a holle 
    if (e.target.classList.contains("mole")) {
    // change the element selected from abover
    replace(e);
    }
}
);

const resetGame = () => {
    //reset should stop game and start over with new mole for random hole
    const cells = document.querySelectorAll(".cell");
//not sure about for each quite but for ech cell a hole should appear then mole overrides random hole
//isn't this for arrays? 
    cells.forEach((cell) => {
    const hole = document.createElement("img");
    hole.src = "hole.png";
    cell.appendChild(hole);
}
);
    createMole();
};
  

makeField();
