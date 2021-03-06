'use strict';

var studentList = [];
var groupList = [];
var groupForm = document.getElementById('group-form');

function StudentGroupProject (students, imgSrc, title, discription, repoURL, deployedURL) {
  this.students = students;
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

groupForm = document.getElementById('group-form');
groupForm.addEventListener('submit', groupFormHandleSubmit);
var groupFormStudents = document.getElementById('group-form-students');
var addStudent = document.getElementById('add-student');
addStudent.addEventListener('click', addAGroupMember);

function groupFormHandleSubmit(event) {
  event.preventDefault();

  var form = event.target;
  var title = form.title.value;
  var description = form.desc.value;
  var groupImg = form.groupImg.value;
  var repoURL = form.repoURL.value;
  var deployedURL = form.deployedURL.value;
  var students = [];

  for (var i = 0;i < groupFormStudents.children.length; i++) {
    var select = groupFormStudents.children[i];

    students.push(select.value);
  }
  var group = new StudentGroupProject(students,groupImg,title,description,repoURL,deployedURL);
  console.log(groupList);

  localStorage.groupList = JSON.stringify(groupList);
  groupForm.reset();
  window.location.href = 'groupAlbum.html';
}

function addAGroupMember() {
  var select = document.createElement('select');
  for(var i = 0; i < studentList.length; i++) {
    var option = document.createElement('option');
    option.textContent = studentList[i].firstName + ' ' + studentList[i].lastName;
    select.appendChild(option);
  }
  groupFormStudents.appendChild(select);
}
