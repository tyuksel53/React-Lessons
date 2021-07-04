'use strict';

var square = function square(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

var squareArrowNw = function squareArrowNw(x) {
    return x * x;
};

console.log(square(8));

console.log(squareArrow(8));

console.log(squareArrowNw(8));

var getFirstName = function getFirstName(fullName) {
    var firstName = fullName.split(' ')[0];
    return firstName;
};

var getFirstNameNw = function getFirstNameNw(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Ron Swanson'));

console.log(getFirstNameNw('Ron Swanson'));

// arguments objects - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(5, 3));

var addArrow = function addArrow(a, b) {}
//console.log(arguments); arrow funcs not support arguments


// this keyword - no longer bound

;console.log('______');

var user = {
    name: 'Ron',
    cities: ['New york', 'Dublin', 'Dubai'],
    printPlacesLived: function printPlacesLived() {
        //console.log(this.name);
        //console.log(this.cities);

        var that = this;

        this.cities.forEach(function (city) {
            // this keyword is not work in this scope so we assinged val to that
            console.log(that.name + ' has lived ' + city);
        });
    },
    printPlacesLivedArrow: function printPlacesLivedArrow() {
        var _this = this;

        this.cities.forEach(function (city) {
            // this keyword is not work in this scope so we assinged val to that
            console.log(_this.name + ' has lived ' + city);
        });
    },
    printPlacesLivedMap: function printPlacesLivedMap() {
        var _this2 = this;

        /*const cityMessages = this.cities.map((city) => {
            return city;
        });
         return cityMessages;*/

        return this.cities.map(function (city) {
            return console.log(_this2.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLivedMap();

console.log('End');

var multiplier = {
    numbers: [1, 3, 6, 7],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (number) {
            return number * _this3.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
