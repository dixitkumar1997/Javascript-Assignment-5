// Ques-6:- Write a function that finds the reverse of a given string.
// Soln:-


function ReverseOfString(str){
    let reverse_str="";
    for(let i=str.length-1;i>=0;i--){
        reverse_str+= str[i];
    }
    return reverse_str
}