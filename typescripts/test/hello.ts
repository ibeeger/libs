class ClassName {
	x: number = 10;
	y: number = 10;
	constructor(a:number,b:number) {
		console.log(a * this.x, b*this.y);


	}
};


class C extends ClassName{
	m = 11;
	n = 11;
	super(argument) {
		console.log(this.m * this.y, this.n * this.x);
	}
}


