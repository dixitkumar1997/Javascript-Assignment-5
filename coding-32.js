// Ques-32:- Write a function that finds the length of the longest word in a given string.
// Soln:-



function LongestWord(str){
    let split_array=str.split(" ");
    let longest_length=0;
    for(let i=0;i<split_array.length;i++){
        if(split_array[i].length>longest_length){
            longest_length=split_array[i].length;
        }
    }
    return longest_length;
}