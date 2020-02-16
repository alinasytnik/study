function isEven(num){
    if (num % 2 === 0){
         return true;
    }
    else{
       return false; 
    }
}

function isEven2(num){
    return num % 2 === 0;
}

function factorial(num){
    var result = 2;
    for(i = 1; i >= num; i++){
        result = i * result;
    }
}

function functionWithReturn() {
    return 
};

const result = functionWithReturn();