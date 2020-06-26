let myImage;
let walkers = [];
let t = 10;

function preload() {
  myImage = loadImage('./img/starrynight.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(245, 245, 245);
}

function draw() {
	for(w of walkers){
		w.walk();
		w.show();
	}
}

function mousePressed() {
	let w = new Walker(mouseX,mouseY);
	walkers.push(w);
}

class Walker {
	constructor(x, y) {
    this.x = x;
    this.y = y;
	}
	
	walk() {
		let choice = random(0,4);	
	
		if(choice < 1){
			this.x += t;
		}		
		else if(choice < 2){
			this.x -= t;	
		}
		else if(choice < 3){
			this.y -= t;
		}
		else if(choice < 4){
			this.y += t;
		}	

		this.x = constrain(this.x,100,myImage.width);
		this.y = constrain(this.y,100,myImage.height);
	}
	
	show() {
		let x1 = map(this.x, 0, width, 0, myImage.width);
		let y1 = map(this.y, 0, height, 0, myImage.height);
		
		let c = myImage.get(x1, y1);
		//noStroke();
  	fill(c);
		
  	rect(this.x,this.y,20,20);
	}
}