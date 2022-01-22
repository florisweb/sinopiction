



class Chain {
	segments = [];
	get angle() {
		return 0;
	}
	get position() {
		return new Vector(250, 250);
	}

	draw(_ctx) {
		for (let segment of this.segments) segment.draw(_ctx);
	}
	update() {
		for (let segment of this.segments) segment.update();	
	}

	constructor(_chainCount) {
		for (let n = 0; n < _chainCount; n++)
		{
			let segment = new Segment(n, this);
			segment.previous = n > 0 ? this.segments[n - 1] : this;
			if (n > 0) this.segments[n - 1].next = segment;
			this.segments.push(segment);
		}
	}

}
let x = (1 - 2 * Math.random()) * .01;
class Segment {
	relativeAngle = Math.random() * 2 * Math.PI;
	angularVelocity = (.1 - .2 * Math.random()) * .2;
	previous;
	next;
	length = 100;
	#index = 0;
	#parent;

	get position() {
		let dPos = new Vector(
			this.length * Math.cos(this.angle),
			this.length * Math.sin(this.angle),
		);

		return this.previous.position.copy().add(dPos);
	}


	draw(_ctx) {
		// _ctx.strokeStyle = 'rgb(' + 255 * (this.#index / this.#parent.segments.length) + ", 128, 128)";

		_ctx.strokeStyle = '#fff';
		_ctx.beginPath();
		_ctx.moveTo(this.previous.position.value[0], this.previous.position.value[1]);
		_ctx.lineTo(this.position.value[0], this.position.value[1]);
		_ctx.closePath();
		_ctx.stroke();
	}
	
	update() {
		this.relativeAngle += this.angularVelocity;
		if (this.next || World.updates % 1 != 0) return;
		Drawer.trace.add(this.position);
	}


	get angle() {
		return this.previous.angle + this.relativeAngle;
	}


	constructor(_index, _parent) {
		this.length = 50 * Math.pow(.8, _index);
		this.#index = _index;
		this.#parent = _parent;
		this.angularVelocity = x / (this.#index + 1);
	}
}









const World = new function() {
	this.chain = new Chain(5);
	this.updates = 0;
	this.update = () => {
		this.updates++;
		this.chain.update();
		setTimeout(() => {World.update()}, 1);
	}
}



