// Ques-35:-Write a function that finds the median of an array of numbers.
// Soln:-


function MedianOfNumInArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
               let tmp=arr[i];
               arr[i]=arr[j];
               arr[j]=tmp;
            }
         }
    }
    if(arr.length%2==0){
        let position1=(arr.length/2)-1;
      let position2=(arr.length/2);
        let median=(arr[position1]+arr[position2])/2;
        return median;
    }
    else{
        let median =arr[((arr.length+1)/2)-1];
        return median;
    }
}