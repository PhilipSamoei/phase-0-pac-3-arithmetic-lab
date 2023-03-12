let a = 9;
let b = 7;
function beforeEach(){
    let MA = Math.floor(Math.random(a)*1000)
    return(MA);
}
function beforeEach(){
    let MB = Math.floor(Math.random(b)*1000)
    return(MB);
}

add();
subtract();
multiply();
divide();

function add(a,b){
    let sum = a + b;
    return(sum);
}
function subtract(a,b){
    let difference = a - b;
    return(difference);
}
function multiply(a,b){
    let product = a * b;
    return(product);
}
function divide(a,b){ 
    let division = a / b;
    return(division);
}

function increment(a){
    return(++a);
}
function decrement(a){
    return(--a);
}
function makeInt(n){
    (parseInt(n,10))
    return(parseInt(n,10));
}

function preserveDecimal(n){
    (parseFloat(n,10))
    return(parseFloat(n,10));
}
