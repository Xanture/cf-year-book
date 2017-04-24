'use strict';

var studentList = [];



function Student (firstName, lastName, imgSrc, linkdIn, gitHubURL) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.imgSrc = imgSrc;
  this.linkdIn = linkdIn;
  this.gitHubURL = gitHubURL;
  studentList.push(this);
}

function StudentGroupProject (students, imgSrc, title, discription, repoURL, deployedURL) {
  this.students = studentList;
  this.imgSrc = imgSrc;
  this.title = title;
  this.discription = discription;
  this.repoURL = repoURL;
  this.deployedURL = deployedURL;
}

Student.prototype.studentID = function() {
  Math.random() + '' + Math.random();
  return;
};
