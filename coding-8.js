// Ques-8:- Write a function that checks if a given string contains a given substring.
// Soln:- 


function StrContainsSubstr(str,substr){
    let count_length=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===substr[count_length]){
            count_length++;
        }
        else{
            count_length=0;
        }
        if(count_length===substr.length){
            return true
        }
    }
    
    return false;
}