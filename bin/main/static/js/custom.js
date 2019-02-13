/**
 * product controller
 */

function Producto() {
	this.lasAction = {
		type : "",
		options : []
	};

	this.option = {
		value : 0,
		text : ""
	};
	this.dropProductbtn = $('#dropProduct');
	this.addProductbtn = $('#addProduct');
	this.addProductNamebtn = $('#addProductName');
	this.undobtn = $('#undobtn');
	this.productModal = $('#productModal');
}

Producto.prototype.init = function() {
	this.handler();
	this.loadData();
}

Producto.prototype.handler = function() {
	var obj = this;

	obj.dropProductbtn.click(function() {
		obj.deleteProduct();
	});

	obj.undobtn.click(function() {
		obj.undo();
	});

	obj.addProductNamebtn.click(function() {
		obj.addToList();
	});

}

Producto.prototype.loadData = function() {
	
	$.ajax({
        url: "https://productservices.herokuapp.com/api/armifella/product-managment/v1/product"
    }).then(function(data) {
      console.log('>data:' + JSON.stringify(data));
      
      	data.forEach(function(obj) {
      		var o = new Option(obj.product, obj.id);
      		$("#productList").append(o);
      	});
      
    });
	
}

Producto.prototype.addToList = function() {
	var obj = this;

	var maxValue = 0;
	$("#productList > option").each(function() {
		if ($(this).val() > maxValue) {
			maxValue = $(this).val();
		}
	});
	
	maxValue = maxValue + 1;
	
	var o = new Option($('#producttxt').val(), maxValue);
	$("#productList").append(o);

	obj.lasAction = {
		type : "INS",
		options : {
			value : maxValue,
			text : $('#producttxt').val()
		}
	};

	$('#productModal').modal('hide');

}

Producto.prototype.deleteProduct = function() {
	var obj = this;
	obj.reset();
	
	var options = [];
	var i = 0;
	$("#productList > option:selected").each(function() {
		options[i] = {
			value : $(this).val(),
			text : $(this).text()
		};
		i++;
	});

	obj.lasAction = {
		type : "DEL",
		options : options
	};
	$("#productList option:selected").remove();
}

Producto.prototype.undo = function() {
	var obj = this;
	if ("" != obj.lasAction.type) {

		if (obj.lasAction.type == "DEL") {

			obj.lasAction.options.forEach(function(arrayItem) {
				var option = new Option(arrayItem.text, arrayItem.value);
				$('#productList').append($(option));
			});

			obj.reset();
		}

		if (obj.lasAction.type == "INS") {
			console.log('>obj.lasAction::'+ JSON.stringify( obj.lasAction ) );
			$("#productList option[value='" + obj.lasAction.options.value+ "']").remove();
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
