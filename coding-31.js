// Ques-31:- Write a function that converts a string to title case (capitalizes the first letter of each word).
// Soln:-



function CapitalizeFirstWord(str){
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let split_array=str.split(" ");
    let new_arr=[];
    for(let i=0;i<split_array.length;i++){
        let word=split_array[i];
        let Capitalized_word="";
        for(let j=0;j<word.length;j++){
            if(j===0){
            for(let k=0;k<26;k++){
            if(word[j]===lower[k]){
                Capitalized_word+=upper[k]
            }
                
            }
        }
        else{
            Capitalized_word+=word[j];
        }
        }
        new_arr.push(Capitalized_word);
    }
    return new_arr.join(" ");
}