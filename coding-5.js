// Ques-5:- Write a function that checks if a given string is a palindrome.
// Soln:-


function CheckPalindrome(str){
    let new_str="";
    for(let i=str.length-1;i>=0;i--){
        new_str+=str[i];
    }
    if(new_str===str){
        return true;
    }
    return false;
}