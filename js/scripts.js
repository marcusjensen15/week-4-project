// var checkedToppings = [];
// var toppingsValue = 0;
// var pizzaSize = 0;
// var customerName= "";


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
      var checkedToppings = [];
      var toppingsValue = 0;
      var pizzaSize = 0;
      var customerName= "";


      customerName = $("#name").val();
      pizzaSize = parseInt($("input[name='size']:checked").val());

      var toppings = $('input[type=checkbox]:checked');
      toppingsValue = toppingsValue(toppings);
      var myPizza = new Pizza(customerName,toppingsValue, pizzaSize);
      var pizzaManager = new PizzaManager();
      console.log(myPizza);


      console.log(sumToppings(checkedToppings));



        event.preventDefault();
    });
});
