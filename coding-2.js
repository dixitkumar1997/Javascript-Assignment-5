// Ques-2:- Write a function that checks if a given number is prime.
// Soln:-


function Prime(num){
    let factors=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            factors++;
        }
    }
    if(factors==2){
        return true;
    }
    return false;
}