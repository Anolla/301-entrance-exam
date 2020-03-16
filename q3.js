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
localStore();


}

var div = document.getElementById('list');

ToDo.prototype.renderList =function() {

var ol = document.createElement('ol');
div.appendChild(ol);
var li = document.createElement('li');
ol.appendChild(li);

for(var j=0; j<ToDo.all.length ; j++ ){

li.textContent = `${ToDo.all[j].whatToDo} on ${ToDo.all[j].date}`


}

}


function localStore(){
var string =JSON.stringify(Todo.all);
localStorage.setItem('newItem',string);

}

function get(){

    var string=localStorage.getItem('newItem');
    ToDo.all=JSON.parse(string);

}

get();