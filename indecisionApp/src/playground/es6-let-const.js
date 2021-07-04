var nameVar = 'Taha';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = 'Jen';
// let nameLet = 'Julie'; redefine in let not allowed
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//const nameConst = 'Gunter'; redefine in const not allowed
// nameConst = 'Gunter'; re-assing is not working with const

console.log('nameConst', nameConst);

function getPetName(){
    var petname = 'Hal';
    return petname;
}

var petName = getPetName();
console.log(petName);

// Block scoping

var fullName = 'Ragnar HasanKeyf';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

//console.log(firstName); black level scpoing



