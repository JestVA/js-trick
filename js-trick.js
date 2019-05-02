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

// Unlike the array push() method you might be more familiar with, the concat() method doesn’t mutate the original array, so we prefer it.

// in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);

// Basic example
21 > 3 && 1 + 2
3
21 < 3 && 1 + 2
false


// Want to finish this kata tomorrow, it does not pass the random tests which start with a Capital letter already
String.prototype.capitalize = function () { 
   
    return this.split(``)[0].replace(/[a-z]/g, String.fromCharCode(this.split(``)[0].charCodeAt() - 32))
   
       
} 

// So the regex was not working before because I forgot to put the [] for the dictionary lookup 

// What I learned: that using the split to create an array so that I can "pop" the first value is a bit redundant 
// Instead, I could use native method charCodeAt() and specify the index for the char from the string:
'dorin'.charCodeAt(4) || 'dorin'.charCodeAt(0) // first one returns char code of 'n' (last letter) and second one returns char code of 'd'
// If you try to specify an index "outside of the string range" it returns NaN:
'dorin'.charCodeAt(5)
NaN
// IF you do not specify an index, default first index is returned (charCodeAt() is similar to charCodeAt(0))
// If I wanted to further simplify my solution, I would introduce a function:
String.prototype.capitalize = function () { 
  return this.replace(/[a-z]/g, x => String.fromCharCode(x.charCodeAt(0) - 32))
}

// And a solution which does not use the above methods:
String.prototype.capitalize = function()
{
  var searchArray = 'abcdefghijklmnopqrstuvwxyz';
  var replaceArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  var array = this.split('');
  var index = searchArray.indexOf(array[0]);
  if (index > -1) array[0] = replaceArray[index];
  
  return array.join('');
}
// Whilst I do not enjoy this solution (1st one is more functional), this illustrates the mechanism well enough. 
// To define an array and use a lookup with index in another array to solve it. But this one as an added afterthought uses mutation and mutates the initial array. Not pure.

// =========================================================================

/* I started this new lvl 4 kyu Kata
https://www.codewars.com/kata/nesting-structure-comparison/train/javascript
Start to solve below...
Patchy code that brings me 50 pts and a lvl 4 completed kata :D 

*/

Array.prototype.sameStructureAs = function (other) {
 
    if (isArray(other)) {
         
    const myMap = this.map(element => typeof element === 'object' ? element.map(newNest => typeof newNest === 'object' ?  newNest.map(newNewNest => 0) : 'x') : 'x')
//     console.log(myMap)
    const myNewMap = other.map(element => typeof element === 'object' ? element.map(newNest => typeof newNest === 'object' ? newNest.map(newNewNest => 0) : 'x') : 'x')
//     console.log(myNewMap)
    
    
    const myMapReduce = myMap.reduce((a,c) => a + c)
    const myNewMapReduce = myNewMap.reduce((a,c) => a + c)
    
    console.log(myMapReduce[0])
    console.log(myNewMapReduce[0])
    
    
    return  myMapReduce[0].length == 0 && myNewMapReduce[0].length == 0 ? true : myMap.reduce((a,c) => a + c) === myNewMap.reduce((a,c) => a + c)
    }
    
    return false
};

// ==========================================================================

// Remember, "\" is used for escaping next characters so that they do not break the sequence
// Remember the lvl 2 kata you solved
// Learn that you can create a function using the []['map']['constructor'] subscript notation. Cool for tricks !!