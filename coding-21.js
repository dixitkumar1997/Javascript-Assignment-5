// Ques-21:-Write a function that finds the factorial of a given number using recursion.
// Soln:-



function FactorialByRecursion(num){
    if(num===0){
        return 1;
    }
    else{
        return num*FactorialByRecursion(num-1);
    }
}