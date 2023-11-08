//Do the below programs in anonymous function & IIFE
//Print odd numbers in an array
//var arr =[1,2,3,4,5,6,7,8,9,10,11,12,13];
/*var result=[]
var a=function (arr){
    for(var i=0; i<arr.length;i=i+1){
        if(arr[i]%2 !==0){
            result.push(arr[i]); 
        }
    } 
    return result;

} 
console.log(a([1,2,3,4,5,6,7,8,9,10,12,13,]))*/

/*var result =[]
(function (arr){
    for(var i=0; i<arr.length;i=i+1){
        if(arr[i]%2 !==0){
            result.push(arr[i])
        }
    } 
    console.log(result);

} )([1,2,3,4,5,6,7,8,9])*/



var result =[];
var odd= (arr)=>{
    for(var i=0; i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    } 
    return result;

} 
odd([1,2,3,4,5,6,7,8,9]



//question1 b.Convert all the strings to title caps in a string array
