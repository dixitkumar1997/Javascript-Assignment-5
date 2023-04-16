// Ques-20:- Write a function that finds the product of all numbers in an array of numbers.
// Soln:-


function ProductOfNumInArr(arr){
    let product=1;
    for(let i=0;i<arr.length;i++){
        product*=arr[i];
    }
    return product;
}