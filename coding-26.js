// Ques-26:- Write a function that checks if a given number is a perfect cube.
// Soln:-




function CheckForPerfectCube(num){
    let new_num=num**(1/3);
    if(Math.round(new_num)**3==num){
        return true;
    }
    return false;
}