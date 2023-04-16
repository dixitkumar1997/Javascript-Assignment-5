// Ques-25:- Write a function that checks if a given number is a perfect square.
// Soln:-



function CheckForPerfectSquare(num){
    let new_num=num**(1/2);
    if(Math.round(new_num)**2==num){
        return true;
    }
    return false;
}