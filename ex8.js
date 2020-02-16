const commands = {
    new: "new",
    show: "dupa123",
    exit: "exit",
}

const alina = {
    name: "Alina",
    surname: "Sytnik",
    age: 20,
    sex: "Female",
    country: "Poland",
    city: "Warsaw"
}

const maksym = {
    name: "Maksym",
    surname: "Boytsov",
    age: [20, [20, 21]],
    sex: "Male",
    country: "Poland",
    city: "Warsaw"
}

const users = [alina, maksym, alina, maksym, alina, maksym];



// const availableCommands = `(${commands.new}, ${commands.show}, ${commands.exit})`
// // const availableCommands2 = '(' + commands.new + ', ' + commands.show + ', ' + commands.exit + ')';

// function start(command){
//     if (command === commands.new){
//         const toDo = prompt("Add new ToDo:");
//         arr.push(toDo);
//         start(prompt(`Choose another command ${availableCommands}`));
//     } else if (command === commands.show){
//         console.log(arr);
//         start(prompt(`Choose another command ${availableCommands}`));
//     } else if (command === commands.exit){
//         return;
//     } else {
//         start(prompt(`You entered wrong command,choose another command ${availableCommands}`));
//     }  
// }

// start(prompt(`Choose command ${availableCommands}:`));

// const arr = [1, 2, 3, 4, 5, 6];

// function mapArray(item, index) {
//     return item * 2 + index;
// }

// const newArr = arr.map(mapArray).reverse()

// console.log(newArr);

// function sumArr(arr){
//     let result = 0;
//     arr.forEach(function(item){
//         result += item;     
//     }) 
//     return result;
// }

// const array = [5, 44, 99, 100];
// console.log(sumArr(array));

// const arr = [20, true, "Alina"];

// const obj = {
//     age: 20,
//     isFemale: true,
//     name: "Alina"
// };

// let age = obj["name"]
// age = obj.name