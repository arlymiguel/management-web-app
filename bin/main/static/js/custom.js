/**
 * product controller
 */

function show(){
	
	$('#productList > option:selected').each(function() {
		console.log($(this).text() + ' ' + $(this).val());
	});
	
	//https://productservices.herokuapp.com/api/armifella/product-managment/v1/product
}