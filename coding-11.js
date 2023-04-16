// Ques-11:-	Write a function that removes duplicate characters from a given string.
// Soln:-


function RemoveDupicates(str){
    let new_str="";
    for(let i=0;i<str.length;i++){
        let flag=false;
        for(let j=0;j<new_str.length;j++){
            if(str[i]===new_str[j]){
               flag=true;
               break;
            }
        }
        if(flag===false){
            new_str+=str[i];
        }
    }
    return new_str;
}