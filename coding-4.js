// Ques-4:- Write a function that finds the product of all numbers from 1 to a given number.
// Soln:- 



function ProductToNum(num){
    let product=1;
    for(let i=1;i<=num;i++){
        product=product*i;
    }
    return product;
}