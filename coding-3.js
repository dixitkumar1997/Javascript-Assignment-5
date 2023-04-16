// Ques-3:- Write a function that finds the sum of all numbers from 1 to a given number.
// Soln:- 


function SumToNum(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}