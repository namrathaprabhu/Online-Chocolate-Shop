// $(document).ready( function() {
//     proj4_data = new Array();
//     var cart = new shopping_cart("jadrn047");
//     var cartArray = cart.getCartArray();
//     updateDisplay();
    
//     // $('.atc').on('click', function() {
//     //     cart.add($('#sku').val(),$('#retail').val(), $('#qty').val());
//     //     updateDisplay();
//     //     });

//     $(document).on('click', "#deleteButton", function(e) { 
//         var dProduct = $(e.target).attr("class");
//         var skuu = dProduct.substr(0);
//         // alert (skuu);
//         cart.delete(skuu);
//         updateDisplay();
//         }); 

// // $('.buttonshop').on('click', function() {
// //         location.href='http://jadran.sdsu.edu/~jadrn047/proj4/products.html';
// //         return false;
// //     }); 
//     function updateDisplay() {
//         proj4_data = new Array();
//         var cartArray = cart.getCartArray();
//         if(cart.size()==0){
//             var toWrite = "<div class='container jumbotron'>";
//             toWrite += "<hr/>";
//             toWrite += "<div> There are no items in your cart. Shop Now!</div><br>";
//             //toWrite += "<input type='button' class='buttonshop' id='buttonShop' value='Shop Now!'>";
//             toWrite += "<a href='http://jadran.sdsu.edu/~jadrn047/proj4/products.html'><button class='buttonshop' type='button'>Shop Now!</button></a>";
            
//             toWrite += "</div>";
            
//             $('#cart').html(toWrite); 
//             $('#count').text(cart.size());  
//         }
//         else {
//         var toWrite = "<div class='container'>";
//         toWrite += "<table class='table'>";
//         toWrite += "<thead><tr><th>Product</th><th>SKU</th><th>Price</th><th>Quantity</th><th>Sub Total</tr></thead>";
//         var cartArray = cart.getCartArray();
//         // var qty = parseInt(cartArray[i][2]);
//         //     var shipping = 2;
//         //     alert(shipping);
//         //     var tax = parseFloat((cartArray[i][2])*0.08);
//         //     var total = Math.round(shipping+tax);
//         //     alert(total); 
//         for(i=0; i < cartArray.length; i++) {


//             toWrite += "<tbody>";
//             toWrite += "<tr>";
//             toWrite += "<td>"+"<img src=\"/~jadrn000/PROJ4_IMAGES/"+
//                     cartArray[i][0]+".jpg\" alt=\""+cartArray[i][0]+"\""+
//                     " ></img>"+"</td>";
//             toWrite += "<td>"+cartArray[i][0]+"</td>&nbsp;";
//             toWrite += "<td>"+cartArray[i][1]+"</td>"; 
//             toWrite += "<td>"+cartArray[i][2]+"</td>";
//             toWrite += "<td>"+Math.round((cartArray[i][1] * cartArray[i][2])*100)/100+"</td>"; 
//             toWrite += "<td><input type='button' id='deleteButton' class='"+cartArray[i][0]+"' value='Delete'/></td>";

//         }
//             toWrite += "</tr>";
//             // toWrite += "<tr><th><span>Shipping Charges: $" + parseInt((cartArray[i][2]),10) * 2 +"</span></th></tr>";
//             toWrite += "<tbody>";
//             toWrite += "</table>"; 
//             toWrite += "<a href='http://jadran.sdsu.edu/~jadrn047/proj4/products.html'><button class='buttonshop' type='button'>Continue Shopping</button></a>";
//             toWrite += "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Proceed to Checkout</button>";
//             toWrite += "</div><br><br>";
//             $('#cart').html(toWrite); 
//             $('#count').text(cart.size());     
//         } 
// }
// });
























// // $(document).ready( function() {
// //     var cart = new shopping_cart("jadrn000");
    
// //     $('#addButton').on('click', function() {
// //         cart.add($('#sku').val(), $('#qty').val());
// //         updateDisplay();
// //         });
        
// //     $('#deleteButton').on('click', function() {
// //         cart.delete($('#sku').val());
// //         updateDisplay();
// //         });   
        
// //     $('#quantityButton').on('click', function() {
// //         cart.setQuantity($('#sku').val(), $('#qty').val());
// //         updateDisplay();
// //         });                
        
        
// //     function updateDisplay() {
// //         var cartArray = cart.getCartArray();
// //         var toWrite = "<table>";
// //         toWrite += "<tr><th>SKU</th><th>Quantity</th></tr>";
// //         for(i=0; i < cartArray.length; i++) {
// //             toWrite += "<tr>";
// //             toWrite += "<td>"+cartArray[i][0]+"</td>";
// //             toWrite += "<td>"+cartArray[i][1]+"</td>"; 
// //             toWrite += "</tr>";
// //             }
// //         toWrite += "</table>"; 
// //         $('#cart').html(toWrite); 
// //         $('#count').text(cart.size());     
// //         } 
        
// //     $( "#dialog-modal" ).dialog({
// //             height: 350,
// //             width: 500,
// //             modal: true,
// //             autoOpen: false
// //     });
    
// //     $('#order_button').on('click', function($e) {       
// //             $("#dialog-modal").dialog('open');
// //             });                 
// //     });