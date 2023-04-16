// Ques-1:- 1	Write a function that checks if a given number is a multiple of both 3 and 5.
// Soln:-

function MultipleOfThreeAndFive(num){
    if(num%3==0 && num%5==0){
        return true;
    }
    return false;
}