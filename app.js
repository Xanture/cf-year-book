'use strict';

var studentList = [];
var wrap = document.getElementById('test');
var data;

console.log('hello world');

function Student (firstName, lastName, imgSrc, linkdIn, gitHubURL) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.imgSrc = imgSrc;
  this.linkdIn = linkdIn;
  this.gitHubURL = gitHubURL;
  studentList.push(this);
  this.studentID = studentID();
}
var studentID = function() {
  return Math.random() + '' + Math.random();
};

function StudentGroupProject (students, imgSrc, title, discription, repoURL, deployedURL) {
  this.students = studentList;
  this.imgSrc = imgSrc;
  this.title = title;
  this.discription = discription;
  this.repoURL = repoURL;
  this.deployedURL = deployedURL;

}

function handleStudentSubmit(event){
  // stop the browser from reloading
  event.preventDefault();
  var form = event.target;

  var studentFName = form.firstName.value;
  var studentLname = form.lastName.value;
  var studentImage = form.studentImg.value;
  var studentLink = form.linkdIn.value;
  var studentGitHub = form.gitHub.value;

  form.firstName.value = '';
  form.lastName.value = '';
  form.studentImg.value = '';
  form.linkdIn.value = '';
  form.gitHub.value = '';

  var studentUpload = new Student (studentFName, studentLname, studentImage, studentLink, studentGitHub);
  console.log(studentList);
  localStorage.data = JSON.stringify(studentList);
  console.log(localStorage.data);

  // var addImage1 = document.createElement('div');
  var addImage = document.createElement('img');
  addImage.src = studentImage;
  app.appendChild(addImage);
  localStorage.data = JSON.stringify(studentList);

}
try {
  var storeCreateFrom = document.getElementById('submit');
  storeCreateFrom.addEventListener('submit', handleStudentSubmit);
} catch (error) {
  console.log('error');
}

studentList = JSON.parse(localStorage.data);
console.log(studentList);
