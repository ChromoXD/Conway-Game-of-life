const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');
const buttons = new Audio('src/buttons2.mp3');
const place_cell = new Audio('src/place_cell.mp3');
let Start = false;

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
cvs.style.backgroundColor = '#352F44';

let GridValues = new Map();

let rectSize = 15;

class DrawCalls {
    DrawGridCells(c, r) {
        ctx.fillStyle = "#B9B4C7";
        ctx.fillRect(c * (rectSize), r * (rectSize), (rectSize), (rectSize));
    }

    DrawGrid(x, y, s) {
        ctx.strokeStyle = '#5C5470';
        ctx.beginPath();
        ctx.rect(x, y, s, s);
        ctx.stroke();
    }
}

let DC = new DrawCalls();

window.addEventListener('mousedown', (e) => {
    if (e.target !== cvs) return;


    let x = Math.trunc(e.x / rectSize);
    let y = Math.trunc(e.y / rectSize);

    let pos = `${x},${y}`;

    if (!(GridValues.has(pos))) GridValues.set(pos, [x, y]);
    else GridValues.delete(pos);

    place_cell.play()

})

function UnPopulated_CellUpdates(pos) {
    let neighbour = 0;

    if (GridValues.has(`${pos[0] - 1},${pos[1] + 1}`)) neighbour += 1;
    if (GridValues.has(`${pos[0]},${pos[1] + 1}`)) neighbour += 1;
    if (GridValues.has(`${pos[0] + 1},${pos[1] + 1}`)) neighbour += 1;
    if (GridValues.has(`${pos[0] - 1},${pos[1]}`)) neighbour += 1;
    if (GridValues.has(`${pos[0] + 1},${pos[1]}`)) neighbour += 1;
    if (GridValues.has(`${pos[0] - 1},${pos[1] - 1}`)) neighbour += 1;
    if (GridValues.has(`${pos[0]},${pos[1] - 1}`)) neighbour += 1;
    if (GridValues.has(`${pos[0] + 1},${pos[1] - 1}`)) neighbour += 1;

    return neighbour;
}

function run() {
    buttons.play();
    if (Start) {
        Start = false
        document.getElementById('PA').textContent = 'play_arrow';
    } else {
        Start = true;
        document.getElementById('PA').textContent = 'pause';
    }
}

function NextStep() {
    Populated_CellUpdates();
    buttons.play();
}

window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        NextStep();
    }
})


function Clear() {
    GridValues.clear()
    buttons.play();
}

function Populated_CellUpdates() {
    let new_GridValues = new Map(GridValues);

    GridValues.forEach((element, key) => {
        let neighbour = 0;

        if (GridValues.has(`${element[0] - 1},${element[1] + 1}`)) neighbour += 1;
        else if (UnPopulated_CellUpdates([element[0] - 1, element[1] + 1]) == 3) new_GridValues.set(`${element[0] - 1},${element[1] + 1}`, [element[0] - 1, element[1] + 1])

        if (GridValues.has(`${element[0]},${element[1] + 1}`)) neighbour += 1;
        else if (UnPopulated_CellUpdates([element[0], element[1] + 1]) == 3) new_GridValues.set(`${element[0]},${element[1] + 1}`, [element[0], element[1] + 1])

        if (GridValues.has(`${element[0] + 1},${element[1] + 1}`)) neighbour += 1;
        else if (UnPopulated_CellUpdates([element[0] + 1, element[1] + 1]) == 3) new_GridValues.set(`${element[0] + 1},${element[1] + 1}`, [element[0] + 1, element[1] + 1])

        if (GridValues.has(`${element[0] - 1},${element[1]}`)) neighbour += 1;
        else if (UnPopulated_CellUpdates([element[0] - 1, element[1]]) == 3) new_GridValues.set(`${element[0] - 1},${element[1]}`, [element[0] - 1, element[1]])

        if (GridValues.has(`${element[0] + 1},${element[1]}`)) neighbour += 1;
        else if (UnPopulated_CellUpdates([element[0] + 1, element[1]]) == 3) new_GridValues.set(`${element[0] + 1},${element[1]}`, [element[0] + 1, element[1]])

        if (GridValues.has(`${element[0] - 1},${element[1] - 1}`)) neighbour += 1;
        else if (UnPopulated_CellUpdates([element[0] - 1, element[1] - 1]) == 3) new_GridValues.set(`${element[0] - 1},${element[1] - 1}`, [element[0] - 1, element[1] - 1])

        if (GridValues.has(`${element[0]},${element[1] - 1}`)) neighbour += 1;
        else if (UnPopulated_CellUpdates([element[0], element[1] - 1]) == 3) new_GridValues.set(`${element[0]},${element[1] - 1}`, [element[0], element[1] - 1])

        if (GridValues.has(`${element[0] + 1},${element[1] - 1}`)) neighbour += 1;
        else if (UnPopulated_CellUpdates([element[0] + 1, element[1] - 1]) == 3) new_GridValues.set(`${element[0] + 1},${element[1] - 1}`, [element[0] + 1, element[1] - 1])

        if (neighbour <= 1 || neighbour >= 4) new_GridValues.delete(key);
    });

    GridValues = new_GridValues;

}

function render() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    GridValues.forEach(element => {DC.DrawGridCells(element[0], element[1]);});

    for (let i = 0; i < cvs.height / rectSize; i++) {
        for (let o = 0; o < cvs.width / rectSize; o++) DC.DrawGrid(o * rectSize, i * rectSize, rectSize)
    }

    if (Start) Populated_CellUpdates();


    requestAnimationFrame(render);
}

render()

window.addEventListener('resize', (e) => { location.reload() })