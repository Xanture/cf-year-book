'use strict';

var studentList = [];

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

}
try {
  studentList = JSON.parse(localStorage.data);
  console.log(studentList);
} catch (error) {
  console.log('no data');
}

try {
  var storeCreateFrom = document.getElementById('submit');
  storeCreateFrom.addEventListener('submit', handleStudentSubmit);
} catch (error) {
  console.log('error');
}
