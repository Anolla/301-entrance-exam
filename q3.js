'use strict'

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var dateTime = date;
// console.log(dateTime);

function ToDo (whatToDo,date){

this.whatToDo=whatToDo;
this.date=date;
ToDo.all.push(this);
// console.log(ToDo.all);
}


ToDo.all=[];


var form = document.getElementById('myForm');
var label =document.getElementById('currentDate');
label.textContent=dateTime; 
form.addEventListener('submit',submitting);
function submitting (event){

    event.preventDefault();

var task =event.target.txt.value ;

var when =event.target.dt.value;

var newTask = new ToDo (task,when);
// console.log(newTask); 
newTask.renderList();


}

var div = document.getElementById('list');

ToDo.prototype.renderList =function() {

var ol = document.createElement('ol');
div.appendChild(ol);
var li = document.createElement('li');
ol.appendChild(li);

// for(var j=0; j<ToDo.all.length ; j++ ){

li.textContent = `${this.whatToDo} on ${this.date}`

// }

}


