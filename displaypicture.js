'use strict';
var studentList = [];

try{
  studentList = JSON.parse(localStorage.data);
} catch(error) {
  console.log(error);
}
for (var i = 0; i < studentList.length; i++){

  var addImage = document.createElement('img');
  addImage.src = studentList[i].imgSrc;
  app.appendChild(addImage);

  var studentInfoFName = document.createElement('p');
  studentInfoFName.textContent = studentList[i].firstName;
  app.appendChild(studentInfoFName);

  var studentInfoLName = document.createElement('p');
  studentInfoLName.textContent = studentList[i].lastName;
  app.appendChild(studentInfoLName);

  var studentInfoLink = document.createElement('p');
  studentInfoLink.textContent = studentList[i].linkdIn;
  app.appendChild(studentInfoLink);

  var studentInfoGit = document.createElement('p');
  studentInfoGit.textContent = studentList[i].gitHubURL;
  app.appendChild(studentInfoGit);

}
