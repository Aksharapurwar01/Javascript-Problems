let secondMax = (input) =>{
    
    let max = Math.max.apply(null,input)
    input.splice(input.indexOf(max),1)
    max=Math.max.apply(null,input);
    return max;
}
   
   console.log(secondMax([10,20,30,40,50]));

   //min

let secondMin = (input) =>{
    
    let min = Math.min.apply(null,input)
    input.splice(input.indexOf(min),1)
    min=Math.min.apply(null,input);
    return min;
}
   
   console.log(secondMin([10,20,30,40,50]));