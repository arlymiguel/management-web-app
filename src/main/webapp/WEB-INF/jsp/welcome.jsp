<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Welcome</title>
<link href="css/custom.css" rel="stylesheet" />
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
	integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
	crossorigin="anonymous" />
<script src="js/custom.js"></script>

</head>
<body>
	<div class="container">

		<select id="productList" multiple="multiple">
			<option value="1">One</option>
			<option value="2">two</option>
			<option value="3">three</option>
		</select>

		<button type="button" class="btn btn-primary" id="addProduct">+</button>
		<button type="button" class="btn btn-danger" id="dropProduct">-</button>

		<button type="button" class="btn btn-primary" id="undobtn">Undo</button>
		<button type="button" class="btn btn-primary" id="showbtn">Show</button>

	</div>

	<div id="productModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<p>Enter some text in the field</p>
			<input id="producttxt" type="text" />
		</div>
	</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
		integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
		integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
		integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
		crossorigin="anonymous"></script>

</body>
<script type="text/javascript">
	var producto = new Producto();
	producto.init();
</script>
</html>