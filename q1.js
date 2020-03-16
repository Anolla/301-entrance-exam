'use strict'

function greaterThan(array,number){

array = [];
number= number;
if ((array[0] || array[1] || array[2] || array[3]) >= number ){
return 1;

}
else{
     return 0 ;
}
}

greaterThan([1,8,3,9],6);
console.log(greaterThan([1,8,3,9],6));