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

  // var studentInfoGit = document.createElement('a');
  // var linkText = document.createTextNode(studentList[i].gitHubURL);
  // studentInfoGit.appendChild = (linkText);
  // studentInfoGit.href = studentList[i].gitHubURL;
  // studentInfoGit.title = studentList[i].gitHubURL;
  var link = studentList[i].gitHubURL;
  var element = document.createElement('a');
  element.setAttribute('href', link);
  element.innerHTML = 'your text';
  app.appendChild(element);

}
