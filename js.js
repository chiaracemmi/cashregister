function Product(id, description, price){
  this.getId = function () {
    return id;
  };
  this.getDescription = function () {
    return description;
  };
  this.getPrice = function () {
    return price;
  };
}
function Cart(eventAggregator) {
  var items = [];
  this.addItem = function (item) {
    items.push(item);
  };
}
var products = [
  new Product(1, "shoes", 23.5),
  new Product(2, "skirt", 20.0),
  new Product(3, "pants", 10.0)
],
cart = new Cart();
(function () {
  function addToCart() {
    var productId = $(this).attr('id');
    var product = $.grep(products, function (x) {
      return x.getId() == productId;
    })[0];
    cart.addItem(product);
    var newItem = $('<li></li>')
    .html(product.getDescription() + " " + "<span class='price'>" + product.getPrice() + "</span>")
    .attr('id-cart', product.getId())
    .appendTo("#cart");
  }
  products.forEach(function (product) {
    $('<li></li>')
    .html(product.getDescription() + " " + "<span class='price'>" + product.getPrice() + "</span>")
    .attr('id', product.getId())
    .dblclick(addToCart)
    .appendTo("#products");
  });
})();



function Store(price){
  this.getPrice = function () {
    return price;
  };
  this.total += price;
}
var storeObj = new Store();
storeObj.register = products[2];
console.log(price);


var cashRegister = {
  total:0,
  lastTransactionAmount:0,
  add: function(itemCost) {
    this.total += itemCost;
    this.lastTransactionAmount = itemCost;
  },
  scan: function(item,quantity) {
    switch (item) {
      case "eggs": this.add(0.98 * quantity); break;
      case "milk": this.add(1.23 * quantity); break;
      case "magazine": this.add(4.99 * quantity); break;
      case "chocolate": this.add(0.45 * quantity); break;
    }
    return true;
  },
  voidLastTransaction: function(){
    this.total -= this.lastTransactionAmount;
  },
};
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);
console.log('Your bill is '+cashRegister.total);