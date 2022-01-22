<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title></title>
		<style>
			body {
				margin: 0;
				padding: 0;
			}
			#worldCanvas {
				background: #000;
				width: 100vw;
				height: auto;
			}
		</style>
	</head>
	<body>
		<canvas id='worldCanvas' width='500' height="500"></canvas>


		<script type="text/javascript" src='js/vector.js'></script>
		<script type="text/javascript" src='js/world.js'></script>
		<script type="text/javascript" src='js/draw.js'></script>
		<script>
			
			World.update();
		</script>

	</body>
</html>