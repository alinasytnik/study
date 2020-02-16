let userAge = prompt ("Enter your age, please:");
if (userAge <= 0){ 
  alert("Error: Your age is negative");
} 
if (userAge == 21){
 alert("Happy 21st birthday!!!")
} 
if(userAge % 2 === 0) {
 alert("Your age is odd");
} 
if(userAge % Math.sqrt(userAge) === 0 ){
 alert('Your age are "perfect squere"');
}
