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
