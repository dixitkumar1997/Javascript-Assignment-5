// Ques-17:- Write a function that checks if an array of numbers is sorted in ascending order.
// Soln:- 


function CheckarrInAscending(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                return false;
            }
        }
    }
    return true;
}