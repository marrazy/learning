let name = 'Mode'; // let is a way to declare dynamic vars
const name = 'John'; // const is a way for a constant that cannot change


console.log(name); //print

//make object here (its like a hashmap i think)
let person = {
    name: 'Mode',
    age: 20,
    isApproved: true
}

let selection = 'name'; //this is a dynamic way to access object properties

person.name = 'John'; //change object.name to John

person[selection] = 'Moug'; //change object.age to 21

console.log(person);