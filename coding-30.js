// Ques-30:- Write a function that converts a string to lowercase.
// Soln:-


function ConvertToLowerCase(str){
    let new_str="";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<str.length;i++){
        for(let j=0;j<26;j++){
          if(str[i]===lower[j]){
            new_str+=str[i];
          }
           else if(str[i]===upper[j]){
                new_str+=lower[j];
            }
        }
    }
    return new_str;
}