// Ques-33:- Write a function that reverses the words in a given string.
// Soln:-

function ReverseWordsInString(str){
    let split_array=str.split(" ");
    let new_arr=[];
    for(let i=0;i<split_array.length;i++){
        let word=split_array[i];
        let reversed_word="";
        for(let j=word.length-1;j>=0;j--){
            reversed_word+=word[j];
        }
        new_arr.push(reversed_word);
    }
    return new_arr.join(" ")
}