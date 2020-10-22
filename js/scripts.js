$(document).ready(function(){
 $("form#insurance").submit(function(event) {
   const age = parseInt($("input#age").val());
   const gender = $("select#gencer").val();

   const quote = (100 - age) * 3;

   $("#rate").text(quote);
   $("#quote").show();

   event.preventDefault();

 });
});