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

//IIFE

/*var result =[]
(function (arr){
    for(var i=0; i<arr.length;i=i+1){
        if(arr[i]%2 !==0){
            result.push(arr[i])
        }
    } 
    console.log(result);

} )([1,2,3,4,5,6,7,8,9])*/

//Arrow function
/*var result=[]

var odd= (arr)=>{
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }
    } 
return result
} 
odd([1,2,3,4,5,6,7,8,9])*/



//question1 b.Convert all the strings to title caps in a string array

//Annonymous function;
/*function str (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
}
console.log(str("sam sundar"));*/


//IIFE;

/*(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');

  })
  ("sam sundar");

//Arrow function;

function titleCase=(str)=> {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
console.log(titleCase("sam sundar"));

//question c. Sum of all numbers in an array 
//Annonymous function;
/*function array(){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }*/

  //IIFE ;

  /*(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4]);*/


//Arrow function;

   /* sum = (array)=>{
        var sum = 0;
             for(var i = 0 ; i< array.length ; i++){
                sum = sum + array[i];
              }
              return sum;
              }*/
//question d Return all the prime numbers in an array

//Anonymous Function:
              /*function numArray(){
                numArray = numArray.filter((number) => {
                    for (var i = 2; i <= Math.sqrt(number); i++) {
                      if (number % i === 0) return false;
                    }
          
                    return true;
          
                  });
                  console.log(numArray);
              }*/
                

              //IIFE ;

              /*(  
                function(numArray){
                   numArray = numArray.filter((number) => {
                     for (var i = 2; i <= Math.sqrt(number); i++) {
                       if (number % i === 0) return false;
                     }
                     return true;
                   });
                   console.log(numArray);
               })([1,2,3,4])*/

               //Arrow Function :

               /*const number = [2, 3, 5, 7, 9, 11, 13, 17,];
               primeNumber = (numArray) => {
                numArray = numArray.filter((number) => {
                  for (var i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) return false;
                  }
                  return true;
                });
                console.log(numArray);
            }
            primeNumber(number)*/
//question e. Return all the palindromes in an array

/*function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }



//Anonymous Function;

       function isPalindrome(arr, n)
    {
       
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    

    
    IIFE : 

    (  function (arr, n)
{
  
  for (let i = 0; i < n; i++)
  {
      let ans = isPalindrome(arr[i]);
      if (ans == false)
          return false;
  }
  return true;
})([1,2,3], 3)


//Arrow function;

Palindrome = (arr, n) =>
    {
        
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }*/

    //question f.Return median of two sorted arrays of the same size.
   
// median of two sorted arrays

// This function returns median of ar1[] and ar2[].
// Assumption in this function:
// Both ar1[] and ar2[] are sorted arrays 
/*function getMedian(ar1, ar2, n, m)
{
	
	// Current index of input array ar1[] 
	let i = 0; 
	
	// Current index of input array ar2[] 
	let j = 0; 
	let count;
	let m1 = -1, m2 = -1;

	// Since there are (n+m) elements,
	// There are following two cases
	// if n+m is odd then the middle
	// index is median i.e. (m+n)/2
	if ((m + n) % 2 == 1)
	{
		for(count = 0; 
			count <= (n + m) / 2; 
			count++)
		{
			if (i != n && j != m)
			{
				m1 = (ar1[i] > ar2[j]) ? 
					ar2[j++] : ar1[i++];
			}
			else if(i < n)
			{
				m1 = ar1[i++];
			}
			
			
			else
			{
				m1 = ar2[j++];
			}
		}
		return m1;
	}

	// Median will be average of elements
	// at index ((m+n)/2 - 1) and (m+n)/2
	// in the array obtained after merging
	// ar1 and ar2
	else
	{
		for(count = 0; 
			count <= (n + m) / 2; 
			count++)
		{
			m2 = m1;
			if (i != n && j != m)
			{
				m1 = (ar1[i] > ar2[j]) ? 
					ar2[j++] : ar1[i++];
			}
			else if(i < n)
			{
				m1 = ar1[i++];
			}
			

			else
			{
				m1 = ar2[j++];
			}
		}
		return (m1 + m2) / 2;
	}
}
	

let ar1 = [900];
let ar2 = [5, 8, 10, 20];

let n1 = ar1.length;
let n2 = ar2.length;
console.log(getMedian(ar1, ar2, n1, n2));*/



//question G.Remove duplicates from an Array
//Anonymous Function : 
      /*    function dup (array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                      }
IIFE :                (function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                       })([1,1,2,3,4])*/




// question h.Rotate an array by K times

/*function reverse(array , li , ri){
 while(li < ri){
       let temp = a[li];
      a[li]= a[ri];
      a[ri] = temp;
      
      li++;
      ri--;
    }
}



//anonymous function ;
       /*function rotateArray (array,k){
                          k= k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          }
                          
   IIFE :   (function(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          })([1,2,3,4] , 2)*/
                          

