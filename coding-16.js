// Ques-16:-Write a function that calculates the average of an array of numbers.
// Soln:-



function AvgOfArray(arr){
    let sum=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        count++;
    }
    return (sum/count);
}