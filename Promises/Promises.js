/*
Promise is for "eventual" completion of task. it is an object in JS.
it is a solution to callback hell.


let promise = new Promise((resolve, reject) => {.....})


resolve & reject are callback provided by JS

:- Promises
:: A javascript Promises object can be.

. Pending:- The result is undefined
. Resolved:- The result is a value (fulfilled)
. Rejected:- The result is an error object

:: There are two type of handler in promises 
       . resolve (result)
       . reject (error)


* Promises has state (pending, fulfilled) & some result (result for resolve & error for reject).       
            
*/


// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promises");
// })


function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}