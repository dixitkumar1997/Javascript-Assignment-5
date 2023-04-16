// Ques-15:- Write a function that finds the minimum number in an array of numbers.
// Soln:-



function MinmInArray(arr){
    let min=Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}