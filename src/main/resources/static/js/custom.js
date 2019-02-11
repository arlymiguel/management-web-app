/**
 * product controller
 */

function Producto() {
	this.lasAction = {
		type : "",
		value : 0,
		text : ""
	};
	this.dropProductbtn = $('#dropProduct');
	this.addProductbtn = $('#addProduct');
	this.undobtn = $('#undobtn');

	this.productModal = $('#productModal');
	this.closeModalButton = $('#productModal div .close');
}

Producto.prototype.init = function() {
	this.handler();
	this.testReactiveRest();
}

Producto.prototype.handler = function() {
	var obj = this;

	obj.dropProductbtn.click(function() {
		obj.deleteProduct();
	});

	obj.addProductbtn.click(function() {
		obj.openModal();
	});

	obj.undobtn.click(function() {
		obj.undo();
	});

	obj.closeModalButton.onclick = function() {
		obj.productModal.attr('style','display: none');
	}

	window.onclick = function(event) {
		if (event.target == obj.modal) {
			obj.productModal.attr('style','display: none');
		}
	}
}


Producto.prototype.deleteProduct = function() {
	var obj = this;
	obj.lasAction = {
		type : "DEL",
		value : $("#productList option:selected").val(),
		text : $("#productList option:selected").text()
	};
	$("#productList option:selected").remove();
}

Producto.prototype.undo = function() {
	var obj = this;
	if ("" != obj.lasAction.type) {

		if (obj.lasAction.type == "DEL") {
			var option = new Option(obj.lasAction.text, obj.lasAction.value);
			$('#productList').append($(option));
			obj.reset();
		}

	}
}

Producto.prototype.reset = function() {
	var obj = this;
	obj.lasAction = {
		type : "",
		value : "",
		text : ""
	};
}

Producto.prototype.openModal = function() {
	var obj = this;
	obj.productModal.attr('style','display: block');
}

// Producto.prototype.show = function () {
// this.productList("> option:selected").each(function() {
// console.log($(this).text() + ' ' + $(this).val());
// });
//	
// // $('#productList > option:selected').each(function() {
// // console.log($(this).text() + ' ' + $(this).val());
// // });
// }

// https://www.w3schools.com/howto/howto_css_modals.asp
