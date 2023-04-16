// Ques-23:- Write a function that checks if a given number is a power of three.
// Soln:-



function CheckPowerOfThree(num){
    if(num<0||num==0){
        return false;
    }
    else{while(num%3==0){
        num=num/3;
    }
    if(num==1){
        return true;
    }
}
return false;
}