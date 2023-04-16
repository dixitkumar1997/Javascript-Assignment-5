// Ques-22:-Write a function that checks if a given number is a power of two.
// Soln:-



function CheckPowerOfTwo(num){
    if(num<0||num==0){
        return false;
    }
    else{while(num%2==0){
        num=num/2;
    }
    if(num==1){
        return true;
    }
}
return false;
}