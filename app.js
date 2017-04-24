'use strict';

var studentList = [];

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
