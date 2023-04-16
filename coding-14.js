// Ques-14:-Write a function that finds the maximum number in an array of numbers.
// Soln:-


function MaxmNumInArray(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}