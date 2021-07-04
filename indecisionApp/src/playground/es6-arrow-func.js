const square = function(x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
}

const squareArrowNw = (x) => x * x;

console.log(square(8));

console.log(squareArrow(8));

console.log(squareArrowNw(8));


const getFirstName = (fullName) => {
    let firstName = fullName.split(' ')[0];
    return firstName;
}

const getFirstNameNw = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Ron Swanson'));

console.log(getFirstNameNw('Ron Swanson'));

// arguments objects - no longer bound with arrow functions

const add = function(a,b) {
    console.log(arguments);
    return a + b;
}

console.log( add(5,3) )

const addArrow = (a, b) => {
    //console.log(arguments); arrow funcs not support arguments
}

// this keyword - no longer bound

console.log('______')

const user = {
    name: 'Ron',
    cities: ['New york', 'Dublin', 'Dubai'],
    printPlacesLived: function() {
        //console.log(this.name);
        //console.log(this.cities);

        const that = this;

        this.cities.forEach( (city) => {
            // this keyword is not work in this scope so we assinged val to that
            console.log(that.name + ' has lived ' + city);
        });
    },
    printPlacesLivedArrow(){
        this.cities.forEach((city) => {
            // this keyword is not work in this scope so we assinged val to that
            console.log(this.name + ' has lived ' + city);
        });
    },

    printPlacesLivedMap() {

        /*const cityMessages = this.cities.map((city) => {
            return city;
        });

        return cityMessages;*/

        return this.cities.map((city) => console.log(this.name + ' has lived in ' + city));

    }
}

user.printPlacesLivedMap();

console.log('End');

const multiplier = {
    numbers: [1,3,6,7],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((number) => (number * this.multiplyBy));
    }
};


console.log(multiplier.multiply());