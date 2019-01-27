var scribble = new Scribble();
var windowHeight = window.innerHeight*0.7;
var windowWidth = window.innerWidth*2/3;
var originX = windowWidth/10;
var originY = windowHeight/2;
var pi = 3.1415926;
var img;
var scale;
var n = 250;
var count = 0;
var song0, song1, song2, song3, song4, song5, song6, song7;

var myMusic;

var options = {enableGestures: true};
var volume = 0.5;
var x,y,z;
var printString = "";
var output = document.getElementById('output');
var options = {enableGestures: true};
var frameString = "", handString = "", fingerString = "";
var hand, finger, position;
var r = 0;

function preload(){
	song0 = loadSound('audio/chickn0.m4a');
	song1 = loadSound('audio/chickn1.m4a');
	song2 = loadSound('audio/chickn2.m4a');
	song3 = loadSound('audio/chickn3.m4a');
	song4 = loadSound('audio/chickn4.m4a');
	song5 = loadSound('audio/chickn5.m4a');
	song6 = loadSound('audio/chickn6.m4a');
	song7 = loadSound('audio/chickn7.m4a');
}

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent("shake");
	frameRate(30);
	img = loadImage('png/chicken1betterlineweight.png');
	scale = 5;
	//myMusic = document.getElementById("mySong")
}

Leap.loop(options,function(frame) {
	
	for (var i = 0, len = frame.hands.length; i < len; i++) {
		hand = frame.hands[i];
		volume = hand.grabStrength;
		//myMusic.volume = volume;
	}
	function concatJointPosition(id,position) {
		return id + ": " + position[0] + ", " + position[1] + ", " + position[2] + "<br>";
	}
		for (var i = 0, len = frame.hands.length; i < len; i++) {
			hand = frame.hands[i];
			position = "";
			finger = hand.fingers[2];
			y = finger.dipPosition[1];

}
});

// function startMusic () {
// 	myMusic.
// }

function draw() {
	background(255);
	stroke(0);
	strokeWeight(1);
	// will later get replaced by actual coordinates
	var displacementChickenX=random(-2,2);
	var displacementChickenY=random(-2,2);
	var x = mouseX;
	//var y = abs((mouseY-originY)/100);
	var m = map(volume,0,1,0,2);
	var endX = map(y,0,500,originX,windowWidth*14/15);
	// create an instance of scribble and set a few parameters
	scribble.bowing = 0.1;
	scribble.roughness = 3;
	// draws x, y axis
	var lenOfCurve= (endX-originX)/5;
	scribble.scribbleLine(originX, originY, endX, originY );
	scribble.scribbleLine(originX, originY-windowHeight/2, originX, originY);
	scribble.scribbleRect(originX,originY,15,15);
	n = str(floor(map(y,0,500,0,8)));
	filepath = str('audio/chickn'+n+'.m4a');
	print(filepath);

	switch(n) {
		case 7:
			return song7;
		break;

		case 6:
			return song6;
		break;

		case 5:
			return song5;
		break;

		case 4:
			return song4;
		break;

		case 3:
			return song3;
		break;

		case 2:
			return song2;
		break;

		case 1:
			return song1;
		break;

		case 0:
			return song0;
		break;
	}

	music = switch(n);
	music.play();
	music.setVolume(volume);
	print(volume);
	print(y);
	image(img, mouseX-img.width/(2*scale)+displacementChickenX, originY-img.height/(scale*2)+displacementChickenY, img.width/scale, img.height/scale);
	for (let i=1; i<5; i+=4){
		scribble.scribbleCurve(originX+(lenOfCurve*(i-1)), originY, originX+lenOfCurve*i, originY-(2*lenOfCurve*m/pi), originX+(lenOfCurve*(i-1))+(0.3642*lenOfCurve), originY, originX+(lenOfCurve*(i-1))+lenOfCurve*0.6358, originY-(2*lenOfCurve*m/pi));
		scribble.scribbleCurve(originX+lenOfCurve*i, originY-(2*lenOfCurve*m/pi), originX+(lenOfCurve*(i+1)), originY, originX+lenOfCurve*i+(0.3642*lenOfCurve),originY-(2*lenOfCurve*m/pi),originX+(lenOfCurve*(i+1))-(0.3642*lenOfCurve),originY);
		scribble.scribbleCurve(originX+(lenOfCurve*(i+1)), originY, originX+(lenOfCurve*(i+2)), originY+(2*lenOfCurve*m/pi), originX+(lenOfCurve*(i+1))+(0.3642*lenOfCurve), originY, originX+(lenOfCurve*(i+2))-(0.3642*lenOfCurve),originY+(2*lenOfCurve*m/pi));
		scribble.scribbleCurve(originX+(lenOfCurve*(i+2)), originY+(2*lenOfCurve*m/pi),originX+(lenOfCurve*(i+3)),originY,originX+(lenOfCurve*(i+2))+(0.3642*lenOfCurve),originY+(2*lenOfCurve*m/pi),originX+(lenOfCurve*(i+3))-(0.3642*lenOfCurve),originY);
	}
	//(0.3642*2*lenOfCurve/pi)
}
