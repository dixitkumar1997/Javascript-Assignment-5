// Ques-18:- Write a function that checks if an array of numbers is sorted in descending order.
// Soln:-



function CheckarrInDescending(arr){
       for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                return false;
            }
        }
       }
       return true;
}