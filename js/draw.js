


const Drawer = new function() {
	const This = this;
	const canvas = worldCanvas;
	const ctx = canvas.getContext('2d');

	this.trace = new function() {
		let arr = [];
		arr.add = (_vec) => {
			if (arr.length > 5000) arr.splice(0, arr.length - 5000);
			arr.push(_vec);

		}
		arr.draw = () => {
			if (arr.length < 2) return;
			ctx.beginPath();
			ctx.strokeStyle = '#f00';
			ctx.moveTo(arr[0].value[0], arr[0].value[1]);

			for (let point of arr)
			{
				ctx.lineTo(point.value[0], point.value[1]);
			}
			ctx.stroke();
		}
		return arr;
	}


	this.draw = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = '#222';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fill();


		World.chain.draw(ctx);
		this.trace.draw();
	}

	function drawLoop() {
		This.draw();
		requestAnimationFrame(drawLoop);
	}


	drawLoop();
}