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
