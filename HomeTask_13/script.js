const SMALL_SIZE = { name: 'mini', price: 50, callories: 20 };
const MEDIUM_SIZE = { name: 'regular', price: 75, callories: 30 };
const BIG_SIZE = { name: 'huge', price: 100, callories: 40 };

const TOPPING_CHEEZE = { name: 'cheese', price: 10, callories: 20 };
const TOPPING_SALAD = { name: 'salad', price: 20, callories: 5 };
const TOPPING_POTATO = { name: 'potato', price: 15, callories: 10 };
const TOPPING_SPICE = { name: 'spice', price: 15, callories: 0 };
const TOPPING_MAYO = { name: 'mayo', price: 20, callories: 5 };

function Hamburger(size) {
  this._burgerSize = size;
  this._toppings = [];
}

Hamburger.prototype.getSize = function () {
  return this._burgerSize;
};

Hamburger.prototype.addTopping = function (newTopping) {
  this._toppings.push(newTopping);
  return this.getToppings();
};

Hamburger.prototype.getToppings = function () {
  return this._toppings;
};

Hamburger.prototype.getCallories = function () {
  return this.getToppings().reduce(
    (accum, { callories }) => (accum += callories),
    this.getSize().callories
  );
};

Hamburger.prototype.getPrice = function () {
  return this.getToppings().reduce(
    (accum, { price }) => (accum += price),
    this.getSize().price
  );
};

const hamburger = new Hamburger(SMALL_SIZE);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());
