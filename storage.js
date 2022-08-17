
 
$(document).ready(function(){
    let amountFruits = localStorage.getItem("amountFruits") ? JSON.parse(localStorage.getItem("amountFruits")) : [];
    let row;
    let j=1;
    for(let i=0; i < amountFruits.length; i++){
      
     row= "<tr><td>"+ j++ + "</td><td>"+ amountFruits[i].fruits+ "</td><td>"+ amountFruits[i].quantity+"</td><td>"+ amountFruits[i].pakingDate+"</td><td>"+amountFruits[i].expiryDate+"</td><td>"+amountFruits[i].price+"</td></tr>";
     $("#tbody").append(row);

}


    $("#button").click(function(){

        let fruits = $("#fruits").val();
        let quantity = $("#quantity").val();
        let pakingDate = $("#paking-date").val();
        let expiryDate = $("#expiry-date").val();
        let price = $("#price").val();

        row = "<tr><td>"+fruits+"</td><td>"+quantity+"</td><td>"+pakingDate+"</td><td>"+expiryDate+"</td><td>"+price+"</td></tr>";
        $("#tbody").append(row);
        let results = {fruits:fruits, quantity:quantity,pakingDate:pakingDate,expiryDate:expiryDate,price:price};
        amountFruits.push(results);
        console.log(amountFruits);
       localStorage.setItem("amountFruits",JSON.stringify(amountFruits));
    });
});