/*  
    Namratha Prabhu
    CS545 Fall 2017
    820868159
*/    


var proj4_data;

$(document).ready(function() {
	proj4_data = new Array();
	$.get('/perl/jadrn047/proj4/get_products.cgi', storeData);

	var cart = new shopping_cart("jadrn047");
 
	// $('#products').on('click', function() {
	// 	document.getElementById("products").innerHTML = 
       
	$('#milk').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {

            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img class='img-rounded' src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";
            tmpString += "<label class='quantity'>Quantity:&nbsp;</label><input type='number' value = '1' min='1' size='8'"+
            "id='"+proj4_data[i][0]+"'/>&nbsp; &nbsp;"; 
            tmpString += "<input class='atc' type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' value='Add to Cart'/><p id='cart_"+proj4_data[i][0]+"' class='cart_msg'></p><br>";
            tmpString += "<span id='error_message "+proj4_data[i][0]+"' class = 'error_'> &nbsp; </span></div>";
            }
			}
		var handle = document.getElementById('content');
		handle.innerHTML = tmpString;
		})
	
	$('#dark').on('click', function() {
		tmpString = "";
		for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Dark chocolate") {
			tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img class='img-rounded' src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";
            tmpString += "<label class='quantity'>Quantity:&nbsp;</label><input type='number' value = '1' min='1' size='8'"+
            "id='"+proj4_data[i][0]+"'/>&nbsp; &nbsp;"; 
            tmpString += "<input class='atc' type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' value='Add to Cart'/><p id='cart_"+proj4_data[i][0]+"' class='cart_msg'></p><br>";
            tmpString += "<span id='error_message "+proj4_data[i][0]+"' class = 'error_'> &nbsp; </span></div>";
            }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
		
	$('#nuts').on('click', function() {   
		tmpString = "";
		for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Nuts and chews") {  
			tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img class='img-rounded' src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";
            tmpString += "<label class='quantity'>Quantity:&nbsp;</label><input type='number' value = '1' min='1' size='8'"+
            "id='"+proj4_data[i][0]+"'/>&nbsp; &nbsp;"; 
            tmpString += "<input class='atc' type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' value='Add to Cart'/><p id='cart_"+proj4_data[i][0]+"' class='cart_msg'></p><br>";
            tmpString += "<span id='error_message "+proj4_data[i][0]+"' class = 'error_'> &nbsp; </span></div><br>";
            }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
		
	$('#brittle').on('click', function() {
		tmpString = "";
		for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Brittles and toffies") {
			tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img class='img-rounded' src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";
            tmpString += "<label class='quantity'>Quantity:&nbsp;</label><input type='number' value = '1' min='1' size='8'"+
            "id='"+proj4_data[i][0]+"'/>&nbsp; &nbsp;"; 
            tmpString += "<input class='atc' type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' value='Add to Cart'/><p id='cart_"+proj4_data[i][0]+"' class='cart_msg'></p><br>";
            tmpString += "<span id='error_message "+proj4_data[i][0]+"' class = 'error_'> &nbsp; </span></div><br>";
            }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

	$('#truffles').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img class='img-rounded' src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";
            tmpString += "<label class='quantity'>Quantity:&nbsp;</label><input type='number' value = '1' min='1' size='8'"+
            "id='"+proj4_data[i][0]+"'/>&nbsp; &nbsp;"; 
            tmpString += "<input class='atc' type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' value='Add to Cart'/><p id='cart_"+proj4_data[i][0]+"' class='cart_msg'></p><br>";
            tmpString += "<span id='error_message "+proj4_data[i][0]+"' class = 'error_'> &nbsp; </span></div>";
            }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

$('#gifts').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img class='img-rounded' src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";
            tmpString += "<label class='quantity'>Quantity:&nbsp;</label><input type='number' value = '1' min='1' size='8'"+
            "id='"+proj4_data[i][0]+"'/>&nbsp; &nbsp;"; 
            tmpString += "<input class='atc' type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' value='Add to Cart'/><p id='cart_"+proj4_data[i][0]+"' class='cart_msg'></p><br>";
            tmpString += "<span id='error_message "+proj4_data[i][0]+"' class = 'error_'> &nbsp; </span></div>";
            }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

$('#holiday').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img class='img-rounded' src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                "><br />";

            tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
            tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
            tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

            tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";
            tmpString += "<label class='quantity'>Quantity:&nbsp;</label><input type='number' value = '1' min='1' size='8'"+
            "id='"+proj4_data[i][0]+"'/>&nbsp; &nbsp;"; 
            tmpString += "<input class='atc' type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' value='Add to Cart'/><p id='cart_"+proj4_data[i][0]+"' class='cart_msg'></p><br>";
            tmpString += "<span id='error_message "+proj4_data[i][0]+"' class = 'error_'> &nbsp; </span></div><br>";
            }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

});
function isEmpty(fieldValue) {
        return $.trim(fieldValu.length == 0;    
        }
	
$(document).on('click',".atc", function(e) {
	
	var cart = new shopping_cart("jadrn047");
	var product = $(e.target).attr("name");
    var prodDetails = product.split(",");
    var quantity = $('#'+prodDetails[0]).val();

    var errorStatusHandle = $('#error_message' + prodDetails[0]);
    
    if(isEmpty($('#'+prodDetails[0]).val())) {
            $('#'+prodDetails[0]).addClass("error");
                     
            errorStatusHandle.text("Please enter the quantity"); 
            // alert("error");  
            return false;
            }
    if(!$.isNumeric($('#'+prodDetails[0]).val())) {
            $('#'+prodDetails[0]).addClass("error");
            errorStatusHandle.text("Numbers only");
            $('#'+prodDetails[0]).focus();            
            return false;
            }

            $(this).removeClass("error");
			$('#'+prodDetails[0]).removeClass("error");
			errorStatusHandle.text("");
            // alert("SKU: " + prodDetails[0] + " " +"PRICE:" + prodDetails[1] + "QTY:" + quantity);
            cart.add(prodDetails[0],prodDetails[1],quantity);
            cart = new shopping_cart("jadrn047");
		    $('#count').text(cart.size()); 
    });
// $(document).ready( function() {
//     proj4_data = new Array();
//     var cart = new shopping_cart("jadrn047");
//     var cartArray = cart.getCartArray();
//     update();

//     function update() {
//     	proj4_data = new Array();
// 	$.get('/perl/jadrn047/proj4/get_products.cgi', storeData);

// 	var cart = new shopping_cart("jadrn047");
        
//         var cartArray = cart.getCartArray();

//         tmpString = "";
//         for(var i=0; i < proj4_data.length; i++) {
//             if(proj4_data[i][1] == "Milk chocolate") {

//             tmpString += "<div class='col-sm-6 col-md-4'><br><br><br><img class='img-rounded' src=\"/~jadrn000/PROJ4_IMAGES/"+
//                 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
//                 "><br />";

//             tmpString += "<p class='title'><b>" +proj4_data[i][2] + "</b></p>" ;
//             tmpString += "<span class='sdescription'>" +proj4_data[i][3] + "</span>";
//             tmpString += "<p class='ldescription'>" +proj4_data[i][4] + "</p>";

//             tmpString += "<p class='retail'><b>$" +proj4_data[i][6] + "</b></p>";
//             tmpString += "<label class='quantity'>Quantity:&nbsp;</label><input type='number' value = '1' min='1' size='8'"+
//             "id='"+proj4_data[i][0]+"'/>&nbsp; &nbsp;"; 
//             tmpString += "<input class='atc' type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' value='Add to Cart'/><p id='cart_"+proj4_data[i][0]+"' class='cart_msg'></p><br>";
//             tmpString += "<span id='error_message "+proj4_data[i][0]+"' class = 'error_'> &nbsp; </span></div>";
//             }
// 			}
// 			$('#content').html(tmpString); 
//             $('#count').text(cart.size()); 
// 		var handle = document.getElementById('content');
// 		handle.innerHTML = tmpString;
// 		}
// 	});

$(document).ready( function() {
    proj4_data = new Array();
    var cart = new shopping_cart("jadrn047");
    var cartArray = cart.getCartArray();
    updateDisplay();
    
    // $('.atc').on('click', function() {
    //     cart.add($('#sku').val(),$('#retail').val(), $('#qty').val());
    //     updateDisplay();
    //     });

    $(document).on('click', "#deleteButton", function(e) { 
        var dProduct = $(e.target).attr("class");
        var skuu = dProduct.substr(0);
        // alert (skuu);
        cart.delete(skuu);
        updateDisplay();
        });
 
    function updateDisplay() {
        proj4_data = new Array();
        var cartArray = cart.getCartArray();
        var total = 0;
        var tax = 0;
        var shipping = 0;
        var itemQty = 0;
        var productPrice = 0;
        // var ProductPrice = 0;
        if(cart.size()==0){
            var toWrite = "<div class='container jumbotron'>";
            toWrite += "<hr/>";
            toWrite += "<div> There are no items in your cart. Shop Now!</div><br>";
            //toWrite += "<input type='button' class='buttonshop' id='buttonShop' value='Shop Now!'>";
            toWrite += "<a href='http://jadran.sdsu.edu/~jadrn047/proj4/products.html'><button class='buttonshop' type='button'>Shop Now!</button></a><br><br><br><br>";
            toWrite += "</div>";
            
            $('#cart').html(toWrite); 
            $('#count').text(cart.size());  
        }

        else {
        var toWrite = "<div class='container'>";
        toWrite += "<table class='table'>";
        toWrite += "<thead><tr><th>Product</th><th>SKU</th><th>Quantity</th><th>Price</th></tr></thead>";
        var cartArray = cart.getCartArray();
     
        for(i=0; i < cartArray.length; i++) {
        	proj4_data = new Array();
        	itemQty += parseInt(cartArray[i][2]);
            itemPrice = parseFloat(cartArray[i][1]);
            itemPrice = Math.round(itemPrice * 100)/100; 
            productPrice += parseFloat(cartArray[i][1]);
            productPrice = Math.round(productPrice * 100)/100;
            productTitle= $.trim(cartArray[i][3]);
        	
            toWrite += "<tbody>";
            toWrite += "<tr>";
            toWrite += "<td>"+"<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                    cartArray[i][0]+".jpg\" alt=\""+cartArray[i][0]+"\""+
                    " ></img>"+"</td>";
            toWrite += "<td>"+cartArray[i][0]+"</td>&nbsp;";
            // toWrite += "<td>"+ productTitle +"</td>";
            toWrite += "<td>"+cartArray[i][2]+"</td>";
            toWrite += "<td>"+cartArray[i][1]+"</td>"; 
             
            
            toWrite += "<td><input type='button' id='deleteButton' class='"+cartArray[i][0]+"' value='Remove'/></td>";
            
 }   
            // alert(productPrice);
            shipping = parseInt(itemQty * 2);
            tax = parseFloat(productPrice * 0.08);
            tax = Math.round(tax * 100)/100;
            total = parseFloat(productPrice)+  parseFloat(tax) + parseFloat(shipping);
            total = Math.round(total * 100)/100;
            // alert(total);
            toWrite += "</tr><br>";

            toWrite += "<thead><th><span>Shipping Charges: $" + shipping +"</span></th>";
            toWrite += "<th><span> Tax (8%): $"+tax+"</span></th>";
            toWrite += "<th><span> Total: $"+total+"</span></th></thead>";
            toWrite += "<tbody>";
            toWrite += "</table>"; 
            toWrite += "<div class='center'><a href='http://jadran.sdsu.edu/~jadrn047/proj4/products.html'><th><button type='button' class='button1' data-toggle='modal' data-target='#myModal'>Add more items</button></th</a>&nbsp;&nbsp;&nbsp;&nbsp;<th></button></a><button type='button' class='button1' data-toggle='modal' data-target='#myModal'>Proceed to Checkout</button></th></div>";
            // toWrite += "<a href='http://jadran.sdsu.edu/~jadrn047/proj4/products.html'><button class='buttonshop' type='button'>Continue Shopping</button></a>";
            // toWrite += "<th><button type='button' class='button1' data-toggle='modal' data-target='#myModal'>Proceed to Checkout</button></th></div>";
            toWrite += "</div><br><br>";

            $('#cart').html(toWrite); 
            $('#count').text(cart.size());     
        } 
}
});
























// $(document).ready( function() {
//     var cart = new shopping_cart("jadrn000");
    
//     $('#addButton').on('click', function() {
//         cart.add($('#sku').val(), $('#qty').val());
//         updateDisplay();
//         });
        
//     $('#deleteButton').on('click', function() {
//         cart.delete($('#sku').val());
//         updateDisplay();
//         });   
        
//     $('#quantityButton').on('click', function() {
//         cart.setQuantity($('#sku').val(), $('#qty').val());
//         updateDisplay();
//         });                
        
        
//     function updateDisplay() {
//         var cartArray = cart.getCartArray();
//         var toWrite = "<table>";
//         toWrite += "<tr><th>SKU</th><th>Quantity</th></tr>";
//         for(i=0; i < cartArray.length; i++) {
//             toWrite += "<tr>";
//             toWrite += "<td>"+cartArray[i][0]+"</td>";
//             toWrite += "<td>"+cartArray[i][1]+"</td>"; 
//             toWrite += "</tr>";
//             }
//         toWrite += "</table>"; 
//         $('#cart').html(toWrite); 
//         $('#count').text(cart.size());     
//         } 
        
//     $( "#dialog-modal" ).dialog({
//             height: 350,
//             width: 500,
//             modal: true,
//             autoOpen: false
//     });
    
//     $('#order_button').on('click', function($e) {       
//             $("#dialog-modal").dialog('open');
//             });                 
//     });


		
function storeData(response) {
	var tmpArray = explodeArray(response,';');
	for(var i=0; i < tmpArray.length; i++) {
		innerArray = explodeArray(tmpArray[i],'|');
		proj4_data[i] = innerArray;
		}
	}
		
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}     