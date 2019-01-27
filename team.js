var scribble = new Scribble();
var windowHeight = window.innerHeight*0.6;
var windowWidth = window.innerWidth*2/3;

let font;
var myCanvas;

function preload(){
	font = loadFont('avenir.otf');
}

function setup() {
	myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent("shake");
	stroke(0);
	fill(0);
}

function draw() {
	background(255);
	stroke(0);
	textFont(font);
	textSize(30);
	text("Angela, Jaya, Riley, Yichen",windowWidth/10, windowHeight/3);
}

