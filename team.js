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
	text("We created an instrument that uses finger positions from Leap Motion to determine the volume of the Chicken Song, as well as a live visualization. The right hand controls the volume of the sound according to pinch strength, the spreadbetween thumb and other fingers.",windowWidth/10, windowHeight/3, windowWidth*2/5,windowHeight/3);
}

