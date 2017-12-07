var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

var song;
var amp;

var babbo;

function preload() {
	locationData = getCurrentPosition();
	song = loadSound('./assets/ADDICT_SOUND_-_Happy_Christmas_2017.mp3');
	babbo = loadImage('./assets/babbo.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	song.loop();
	amp = new p5.Amplitude();

	distance = calcGeoDistance(locationData.latitude, locationData.longitude, 64.7548669, -147.3453627, 'km');
	print(distance);

	b1 = color(255);
	b2 = color(0);
	c1 = color(255, 255, 255);
	c2 = color(144, 26, 26);

	//noLoop();

}

function draw() {

	// Background
	setGradient(0, 0, windowWidth / 2, windowHeight, b1, b2, X_AXIS);
	setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
	// Foreground
	setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
	setGradient(0, 0, windowWidth, windowHeight, c2, c1, X_AXIS);


	//text1-3
	fill(144, 26, 26);
	noStroke();
	textFont('Mountains of Christmas');
	textAlign(CENTER);
	textSize(windowWidth / 15);
	text('How far are you from Santa?', windowWidth / 2, windowHeight / 3);
	textSize(windowWidth / 30);
	fill(255, 255, 255);
	textAlign(CENTER);
	text('You are', windowWidth / 6 * 2, windowHeight / 5 * 3);
	text('km distance to Santa Claus!', windowWidth / 6 * 2, windowHeight / 5 * 4);

	//text2
	fill('white');
	noStroke();
	textFont('Playfair Display');
	textSize(windowWidth / 40);
	text(distance, windowWidth / 6 * 2, windowHeight / 5 * 3.5);


	image(babbo, windowWidth / 3.8 * 2, windowHeight / 2.4, windowWidth / 4, windowHeight / 1.5);

	var vol = amp.getLevel();
	var dim = map(vol, 0, 1, width / 110, width / 20);
	noStroke();
	fill(226, 150, 153);
	ellipse(windowWidth / 7 * 4.68, windowHeight / 7 * 4.47, dim);


}

function setGradient(x, y, w, h, c1, c2, axis) {

	noFill();

	if (axis == Y_AXIS) { // Top to bottom gradient
		for (var i = y; i <= y + h; i++) {
			var inter = map(i, y, y + h, 0, 1);
			var c = lerpColor(c1, c2, inter);
			stroke(c);
			line(x, i, x + w, i);
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);

}
