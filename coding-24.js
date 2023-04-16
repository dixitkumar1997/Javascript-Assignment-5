// Ques-24:- Write a function that checks if a given number is a power of 10.
// Soln:-


function CheckPowerOfTen(num){
    if(num<0||num==0){
        return false;
    }
    else{while(num%10==0){
        num=num/10;
    }
    if(num==1){
        return true;
    }
}
return false;
}