/**
 * product controller
 */

function Producto(){
	this.productList = $('#productList');
	this.dropProduct = $('#dropProduct');
	this.showbtn = $('#showbtn');
}

Producto.prototype.init = function () {
	this.handler();
}

Producto.prototype.handler = function () {
	var obj = this;
	
	this.dropProduct.click(function () {
		obj.deleteProduct();
    });
	
	this.showbtn.click(function () {
		obj.deleteProduct();
	});
	
}

Producto.prototype.deleteProduct = function () {
	$("#productList option:selected").remove();
}

Producto.prototype.undo = function () {
	
}

Producto.prototype.show = function () {
	this.productList("> option:selected").each(function() {
		console.log($(this).text() + ' ' + $(this).val());
		});
	
//	$('#productList > option:selected').each(function() {
//		console.log($(this).text() + ' ' + $(this).val());
//	});
}

//https://www.w3schools.com/howto/howto_css_modals.asp