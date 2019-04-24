/*

This trick is nice, because I often forget that Math.max and Math.min can be used as a sort of filter on a spreadable array. And of course, to use the ES6 
array spread. 
The kick comes as a nice addition, which in fact here is a substraction :) 

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}

*/

/*
Good trick to use a module.exports utility function for ip checks & initialize a constant with a boolean value (set to true/false) to determine if the IP check will be applied or not. 
*/

// Get data about users: window.universal_variable.user 


// wrapper for native app for coral   https://oxynative.coral.co.uk/

/*

      function getUserInfo() {
        const userCheck = setInterval(() => {
          if(
            window.localStorage.getItem('userId')
            && window.localStorage.getItem('lbruser')
            && ($('body').attr('authenticated') === 'true') || ($('body').attr('authenticated') === 'false')
            ) {
            authenticated = $('body').attr('authenticated') === 'true'
            userId = window.localStorage.getItem('userId')
            username = window.localStorage.getItem('lbruser')
            clearInterval(userCheck)
            console.log(2.25)
            applySegmentation()
          } 
        }, 10)
      }

      A good trick to use setInterval(myTimer, 1000) and a way to stop the counter with clearInterval(myVar)
*/
// katas?

/*
KATA: https://www.codewars.com/kata/stringy-strings/
In so many cases where the solution is not evident, adding an outside
configuration parameter is often the ideal way to chip at the solution.
Like here, adding an array with our values 0, 1 from which the function
can loop the values and push them in the array. 

const stringy = size => {
  const binary = [0, 1]
  let string = []
  for (let i = 1; i <= size; i++) {
    i % 2 === 0 ? string.push(binary[0]) : string.push(binary[1])
    
    
  }
  return string.join('')
}

Also a really good solution:
function stringmy(size) {
  var str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;
}

The basic assumption is that the remainder is always 1 when we have an odd number.
And 0 if the number is even.
Clever indeed, it bypasses the need for the initial values (0, 1) whatsoever.
*/