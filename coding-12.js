// Ques-12:-Write a function that sorts an array of numbers in ascending order.
// Soln:-



function SortInAscendingOrder(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
       if(arr[i]>arr[j]){
           let tmp=arr[i];
           arr[i]=arr[j];
           arr[j]=tmp;
       }
   }
}
return arr;
}