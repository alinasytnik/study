let masiw = ["Alina", 1999, true];
masiw.push("Maksim");
masiw.unshift(1999);
masiw.pop();
masiw.shift();
masiw[1] = 2000;
masiw.splice(masiw.length/2, 0 , "Privet", 2020);
// masiw = masiw.join("-");
let animals = ["Cat", "Dog", "Cow", "Snake", "Rabbit", "Shark"];
// animals = animals.slice(-2);
let wmeste = masiw.concat(animals);
console.log(animals.indexOf("Dog"));



function alinasFunction(x, y) {
    return x + y + 1;
}
const alinasFunction2 = (x, y) => x + 1;
let zero = [];
animals.forEach(animal => zero.push(animal))
// zero = animals.map(animal => animal);
// animals.forEach(animal => zero += animal + ", ")
let per2 = animals.map(item => item)

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i])
// }
