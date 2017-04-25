'use strict';

var studentList = [];
var groupList = [];
var wrap = document.getElementById('test');
var studentGroupButton = document.getElementById('student-group-button');
var data;
var addMoreStudents = true;

console.log('hello world');


function StudentGroupProject (students, imgSrc, title, discription, repoURL, deployedURL) {
  this.students = studentList;
  this.imgSrc = imgSrc;
  this.title = title;
  this.discription = discription;
  this.repoURL = repoURL;
  this.deployedURL = deployedURL;
  groupList.push(this);

}

try {
  studentList = JSON.parse(localStorage.data);
  console.log(studentList);
} catch (error) {
  console.log('no data');
}

var sel = document.getElementById('group-form');
console.log(studentList);


for(var i = 0; i < studentList.length; i++) {
  var opt = document.createElement('option');
  opt.text = studentList[i].firstName + ' ' + studentList[i].lastName;
  console.log(opt.innerHTML);
  opt.value = studentList[i].firstName;
  sel.appendChild(opt);
}

try {
  var storeCreateFrom = document.getElementById('submit');
  storeCreateFrom.addEventListener('submit', handleStudentSubmit);
} catch (error) {
  console.log('error');
}

try {
  var addGroup = document.getElementById('submit-group');
  addGroup.addEventListener('submit', addAGroup)
}  catch (error) {
  console.log('error');
}
try {
  var addStudent = document.getElementById('add-student');
  addStudent.addEventListener('click', addAGroupMemeber)
}  catch (error) {
  console.log('error');
}
function addAGroup() {
console.log('works');
}
function addAGroupMember() {
  var opt = document.createElement('option');
  opt.text = studentList[i].firstName + ' ' + studentList[i].lastName;
  console.log(opt.innerHTML);
  opt.value = studentList[i].firstName;
  sel.appendChild(opt);
}
