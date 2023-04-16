// Ques-19:- Write a function that finds the sum of all numbers in an array of numbers.
// Soln:-



function SumOfNumInArr(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}