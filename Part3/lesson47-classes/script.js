'use strict';

class Rectangle {
	constructor(height, weidth) {
		this.height = height;
		this.weidth = weidth;
	}
	
	calcArea() {
		return this.height * this.weidth;
	}
}

class ColoredRectangleWithText extends Rectangle {
	constructor(height, weidth, text, bgColor) {
		super(height, weidth);
		this.text = text;
		this.bgColor = bgColor;
	}
	
	showMyProps() {
		console.log(`Text: ${this.text}, color: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(long.calcArea());
// console.log(square.calcArea());