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

//below this line is new
// This is if we want to have multiple pizza orders:

PizzaManager = function (){
  this.pizzas = [];
  this.id = 0;
};

PizzaManager.prototype.addPizza = function (pizzaInput){
  pizzaInput.id = this.assignId();
  this.pizzas.push(pizzaInput);

};

PizzaManager.prototype.assignId = function(){
  this.id += 1;
  return this.id;

}
//this is new
PizzaManager.prototype.findPizza = function(id){
  for(i=0; i< this.pizzas.length; i++){
    if (this.pizzas[i].id == id){
      return this.pizzas[i];
    }

  }
  alert("sorry, that id doesn't exist");
}
//this is new ^
var pizzaManager = new PizzaManager();   //this is new

//above this line is new



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
  $("#pizzaFinderButton").click(function() {
    var pizzaId = $("#pizzaId").val();
    var currentPizza = pizzaManager.findPizza(pizzaId);
    console.log(pizzaId);
    console.log(currentPizza.price);
    $("#pizzaIdOutput").text("Pizza ID Number: " + currentPizza.id + " Was ordered for: " + currentPizza.name+ " and the price was: $" + currentPizza.price);

  });


    $("#pizzaOrder").submit(function(event){
      checkedToppings = [];
      var customerName = $("#name").val();
      var pizzaSize = parseInt($("input[name='size']:checked").val());


      var toppings = $('input[type=checkbox]:checked');
      toppingsValue(toppings);
      toppingTotal = sumToppings(checkedToppings);
      var myPizza = new Pizza(customerName,toppingTotal,pizzaSize);

      myPizza.calcPrice();

      pizzaManager.addPizza(myPizza);  //this is new
      console.log(pizzaManager.pizzas);

      $("#recipt").text("Thank you for your order " + myPizza.name+"!" + " your grand total is: $" + myPizza.price +"." + " Your pizza ID is: " + myPizza.id);

      $("#name").val(" ");
      $('input[type=checkbox]').prop('checked', false);
      $("input[name='size']").prop('checked', false);


        event.preventDefault();
    });
});
