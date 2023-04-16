// Ques-9:-Write a function that removes all vowels from a given string.
// Soln:- 


function RemoveVowels(str){
    let new_str="";
    for(let i=0;i<str.length;i++){
        if(str[i]==="a"|| str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
            continue;
        }
        else{
            new_str+=str[i];
        }
    }
    return new_str;
}