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

  var linkdInLink = document.createElement('a');
  linkdInLink.setAttribute('class', 'styleLink');
  var linkText = document.createTextNode(studentList[i].linkdIn);
  linkdInLink.appendChild(linkText);
  linkdInLink.title = studentList[i].linkdIn;
  linkdInLink.href = studentList[i].linkdIn;
  app.appendChild(linkdInLink);

  var gitHubLink = document.createElement('a');
  gitHubLink.setAttribute('class', 'styleLink');
  var linkText = document.createTextNode(studentList[i].gitHubURL);
  gitHubLink.appendChild(linkText);
  gitHubLink.title = studentList[i].gitHubURL;
  gitHubLink.href = studentList[i].gitHubURL;
  app.appendChild(gitHubLink);
  //app.appendChild(element);

}
