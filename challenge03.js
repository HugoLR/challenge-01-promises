/**
* Let's code some things:
*
*
* Define the 'getSum' function that uses the 'sum' promise and chaining
* to get the next result in browser:
*
* Example 1 --> getSum(1)
*
* 1
* 3
* 5
* 7
*
* Example 2 --> getSum(2)
*
* 2
* 4
* 6
* 8
*
* Restrictions:
*
* - The 'sum' promise should resolve whatever num and reject when is not number.
* - Catch error and display in browser:
*
* Example getSum('car')
*
* It failed! Error: Not number.
*
**/

function sum(num) {
  return new Promise(function(resolve, reject){
    if(typeof num === "number"){
      // console.log(num)//1
      resolve(num)
    } else {
      reject(Error("Not number"))
    }
  })
}

function getSum(num) {
  sum(num).then(function(result){
    console.log(result)//1 || 2
    return result + 2 ;
  }).then(function(result){
    console.log(result)//3 || 4
    return result + 2 ;
  }).then(function(result){
    console.log(result)//5 || 6
    return result + 2 ;
  }).then(function(result){
    console.log(result)//7 || 8
    return result + 2 ;
  }).catch(function(err){
    console.log("It failed! Error",err)
  })
}




/*-------------------Driver Code-------------------------*/

console.log("==== challenge03 : Driver code ====");

//when argument is a number: 1
// getSum(1);
//when argument is a number: 2
// getSum(2);
//when argument is not a number
getSum('car');
