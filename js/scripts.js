//Business Logic

var checkedToppings = [];
var toppingTotal;



Pizza = function(name, toppings, size){
  this.name = name,
  this.size = size,
  this.toppings = toppings,
  this.price = 0;

};

Pizza.prototype.calcPrice = function(){
  this.price = this.size + this.toppings;

}
//This is if we want to have multiple pizza orders:

// PizzaManager = function (){
//   this.pizzas = [];
// };
//
// PizzaManager.prototype.addPizza = function (pizzaInput){
//   this.pizzas.push(pizzaInput);
// };



function toppingsValue(toppings){
  for(i=0; i < toppings.length; i++){
    checkedToppings.push(parseFloat(toppings[i].value));
  }
};

function sumToppings(checkedToppingsArray){
  var total = 0;
  for (i=0 ; i < checkedToppingsArray.length; i++){
    total += checkedToppingsArray[i];
  }
    return total;

}

//User Logic
$( document ).ready(function() {
    $("#pizzaOrder").submit(function(event){
      checkedToppings = [];
      var customerName = $("#name").val();
      var pizzaSize = parseInt($("input[name='size']:checked").val());


      var toppings = $('input[type=checkbox]:checked');
      toppingsValue(toppings);
      toppingTotal = sumToppings(checkedToppings);
      var myPizza = new Pizza(customerName,toppingTotal,pizzaSize);
      myPizza.calcPrice();
      $("#recipt").text("Thank you for your order " + myPizza.name+"!" + " your grand total is: $" + myPizza.price);

      $("#name").val(" ");
      $('input[type=checkbox]').prop('checked', false);
      $("input[name='size']").prop('checked', false);


        event.preventDefault();
    });
});
