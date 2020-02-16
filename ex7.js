let arr = [];

function toDoOperation(word){
    if (word === "new") { 
        arr.push(prompt("Add new ToDo")); // add value to array
        return toDoOperation(prompt("What operation to handle (new, list, quit)?"));
    } else if (word === "list"){
        console.log(arr); // array to screen
        return toDoOperation(prompt("What operation to handle (new, list, quit)?"));
    } else if (word === "quit"){
        return;
    }
    toDoOperation(prompt("You have to choose from operations 'new, list, quit'"));
}

toDoOperation(prompt("What operation to handle (new, list, quit)?")); // todoOperation(result of prompt)
