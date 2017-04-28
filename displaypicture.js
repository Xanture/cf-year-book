'use strict';
var studentList = [];

try{
  studentList = JSON.parse(localStorage.data);
} catch(error) {
  console.log(error);
}

for (var i = 0; i < studentList.length; i++){
  var divTag = document.createElement('div');
  divTag.id = 'div' + i;
  divTag.className = 'all-style';
  //divTag.innerHTML = Date();
  document.body.appendChild(divTag);

  var addImage = document.createElement('img');
  //addImage.setAttribute('class', 'style-all');
  addImage.setAttribute('class', 'style-image');
  addImage.src = studentList[i].imgSrc;
  divTag.appendChild(addImage);

  var studentInfoFName = document.createElement('p');
  studentInfoFName.setAttribute('class', 'style-all');
  studentInfoFName.textContent = studentList[i].firstName;
  divTag.appendChild(studentInfoFName);

  var studentInfoLName = document.createElement('p');
  studentInfoLName.setAttribute('class', 'style-all');
  //studentInfoLName.setAttribute('class', 'style-link');
  studentInfoLName.textContent = studentList[i].lastName;
  divTag.appendChild(studentInfoLName);

  var linkdInLink = document.createElement('a');
  //linkdInLink.setAttribute('class', 'style-all');
  linkdInLink.setAttribute('class', 'style-link');
  var linkText = document.createTextNode(studentList[i].linkdIn);
  linkdInLink.appendChild(linkText);
  linkdInLink.title = studentList[i].linkdIn;
  linkdInLink.href = 'http://' + studentList[i].linkdIn;
  divTag.appendChild(linkdInLink);

  var gitHubLink = document.createElement('a');
  //gitHubLink.setAttribute('class', 'style-all');
  gitHubLink.setAttribute('class', 'style-link');
  var linkText = document.createTextNode(studentList[i].gitHubURL);
  gitHubLink.appendChild(linkText);
  gitHubLink.title = studentList[i].gitHubURL;
  gitHubLink.href = 'http://' + studentList[i].gitHubURL;
  divTag.appendChild(gitHubLink);

}
