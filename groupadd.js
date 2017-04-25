'use strict';

var studentList = [];
var groupList = [];
var wrap = document.getElementById('test');
var studentGroupButton = document.getElementById('student-group-button');
var data;
var form = document.getElementById('submit')

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

var box = document.createElement('select');


for(var i = 0; i < studentList.length; i++) {
  var opt = document.createElement('option');
  opt.text = studentList[i].firstName + ' ' + studentList[i].lastName;
  console.log(opt.innerHTML);
  opt.value = studentList[i].firstName;
  sel.appendChild(opt);
}

var addGroup = document.getElementById('submit-group');
addGroup.addEventListener('click', addAGroup);
var addStudent = document.getElementById('add-student');
addStudent.addEventListener('click', addAGroupMember);

function addAGroup() {
  console.log('worksgroup');
}
function addAGroupMember() {
  for(var i = 0; i < studentList.length; i++) {
    var opt1 = document.createElement('select');
    var opt2 = document.createElement('option');
    form.appendChild(opt1);
  //  opt1.text = studentList[i].firstName + ' ' + studentList[i].lastName;
  //   console.log(opt.innerHTML);
  //   opt.value = studentList[i].firstName;
  //   sel.appendChild(opt1);
  }
}
