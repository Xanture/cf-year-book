'use strict';

var studentNames = [];



function Student (firstName, lastName, imgSrc, linkdIn, gitHubURL) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.imgSrc = imgSrc;
  this.linkdIn = linkdIn;
  this.gitHubURL = gitHubURL;

}

function StudentGroupProject(){

}

Student.prototype.studentID = function() {
  Math.random() + '' + Math.random();
  return;
};
