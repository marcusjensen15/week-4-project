Pizza = function(name, toppings, size){
  this.name = name,
  this.size = size,
  this.toppings = toppings,
  this.price = 0

};

PizzaManager = function (){

  this.pizzas = [];

};

PizzaManager.prototype.addPizza = function (pizzaInput){

  this.pizzas.push(pizzaInput);

};

var myPizza = new Pizza("Marcus",["tomato","olive","pep"], "large");
var pizzaManager = new PizzaManager();

pizzaManager.addPizza(myPizza);

console.log(pizzaManager);






$( document ).ready(function() {
    $("#pizzaOrder").submit(function(event){

      var pizzaSize = parseInt($("input[name='size']:checked").val());
      console.log(pizzaSize);


        event.preventDefault();
    });
});
