const h1 = document.querySelector("#text"); 
const button = document.querySelector("#btn h1");
const inputt = document.querySelector("input");
let inputValue = "";

inputt.addEventListener("change", function(event){
    event.preventDefault()
    inputValue = event.target.value;
})
button.addEventListener("click", function(e){
    e.preventDefault()
    h1.innerHTML = inputValue;
})



//querySelector("h1 .class #id")
//getElementById("id")
//getElementByClassName("class")
//getElementByTagName("tagName")
// function buttonClick(){
//     h1.innerHTML = "ButtonClick";
//     console.log("1, 2, 3");
// }
