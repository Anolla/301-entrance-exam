'use strict'

var array = [4,3,8,7];
var number = 5;
function greaterThan(array, number) {
     var j = 0;

     for (var i = 0; i < array.length; i++) {

          if (array[i] > number) {

          j++
          }

     }
    return j ; 
}


console.log(greaterThan(array, number));