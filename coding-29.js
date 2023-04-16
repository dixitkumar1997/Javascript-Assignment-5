// Ques-29:- Write a function that converts a string to uppercase.
// Soln:-


function ConvertToUpperCase(str){
    let new_str="";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<str.length;i++){
        for(let j=0;j<26;j++){
          if(str[i]===upper[j]){
            new_str+=str[i];
          }
           else if(str[i]===lower[j]){
                new_str+=upper[j];
            }
        }
    }
    return new_str;
}