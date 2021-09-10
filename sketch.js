function setup() {
    createCanvas(600, 600);
    background(255, 45, 34);
}

function draw() {
    fill(200, 50, 8);
    ellipse(50, 50, 20, 20);
    fill(20, 250, 8);
    ellipse(250, 250, 20, 20);
    fill(20, 150, 250);
    ellipse(450, 450, 20, 20);
    text("hello world!", 100, 50)
    drawEllip();
}


function drawEllip() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}