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


const stringy = size => "10".repeat(size).slice(0,size);


This is actually the solution that I like the most! Happy 1 liner.
use of repeat feature: The repeat() method returns a new string with a specified number of copies of the string it was called on.
It's a method of string. 

*/

/*
https://www.codewars.com/kata/area-of-a-square/

const squareArea = (A) => {
  let radius = 2 / Math.PI * A
  let area = Math.pow(radius, 2)
  return +area.toFixed(2)
}

Struggled to solve this a while ago, now I focused better and found the right mathematical / geometry concepts to solve the function.

*/

/*
Convert number to string with shortcut:
NumberObject + '' // output 'NumberObject'
12 + '' // output '12'
*/

/*
KATA: https://www.codewars.com/kata/training-js-number-14-methods-of-number-object-tostring-and-tolocalestring/train/javascript

const colorOf = (...args) => '#' + [...args].map(color => color.toString(16))
    .map(colorCode => colorCode.length == 1 ? '0' + colorCode : colorCode).join('')
  
This is a solution I quite enjoy actually. 
Because 1. I use rest syntax for function parameters (there where 3) and then use the same to spread in an array. And the 1 liner solution. 

*/

// This kata I remembered to spread a string in an array with spread syntax, quite handy indeed 
const doubleChar = str => [...str].map(l => l + l).join``

// Doing slice on an array [].slice() makes a copy of the array

// This is because we want immutability in our software:

var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};

// Take note of the spread syntax ^^