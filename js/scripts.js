var checkedToppings = [];
var toppingTotal;



Pizza = function(name, toppings, size){
  this.name = name,
  this.size = size,
  this.toppings = toppings
  // this.price = 0

};

PizzaManager = function (){

  this.pizzas = [];

};

PizzaManager.prototype.addPizza = function (pizzaInput){

  this.pizzas.push(pizzaInput);

};

// var myPizza = new Pizza("Marcus",["tomato","olive","pep"], "large");
// var pizzaManager = new PizzaManager();

function toppingsValue(toppings){
  for(i=0; i < toppings.length; i++){
    checkedToppings.push(parseInt(toppings[i].value));
  }
};

function sumToppings(checkedToppingsArray){
  var total = 0;
  for (i=0 ; i < checkedToppingsArray.length; i++){
    total += checkedToppingsArray[i];
  }
    return total;

}


$( document ).ready(function() {
    $("#pizzaOrder").submit(function(event){
      checkedToppings = [];
      var customerName = $("#name").val();
      var pizzaSize = parseInt($("input[name='size']:checked").val());

      
      var toppings = $('input[type=checkbox]:checked');
      toppingsValue(toppings);
      toppingTotal = sumToppings(checkedToppings);
      console.log(toppingTotal);








      // customerName = $("#name").val();
      // pizzaSize = parseInt($("input[name='size']:checked").val());
      // var toppings = $('input[type=checkbox]:checked');
      // toppingsValue(toppings); //this is pushing the string value of the toppings into the checkedToppings array. left with an array of numbers.
      // toppingsValue = sumToppings(checkedToppings); //this is adding everything in the now populated checkedToppings Array and assigning it to toppingsValue.
      // console.log(toppingsValue);
      //
      // // var myPizza = new Pizza(customerName,toppingsValue, pizzaSize);
      // // var pizzaManager = new PizzaManager();
      // // console.log(myPizza);
      // //
      // //
      // // console.log(sumToppings(checkedToppings));



        event.preventDefault();
    });
});
