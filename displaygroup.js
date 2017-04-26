'use strict';
var groupList = [];
var groupprojects = document.getElementById('group-projects');
try{
  groupList = JSON.parse(localStorage.groupList);
} catch(error) {
  console.log(error);
}
for (var i = 0; i < groupList.length; i++){

  var addImage = document.createElement('img');
  var addGroupInfo = document.createElement('ul');
  addImage.src = groupList[i].imgSrc;
  groupprojects.appendChild(addImage);
  groupprojects.appendChild(addGroupInfo);
  var addTitle = document.createElement('li');
  addTitle.textContent = groupList[i].title;
  var addStudents = document.createElement('li');
  addStudents.textContent = groupList[i].students;
  var addDiscription = document.createElement('li');
  addDiscription.textContent = groupList[i].discription;
  var addRepoURL = document.createElement('li');
  addRepoURL.textContent = groupList[i].repoURL;
  var addDeployedURL = document.createElement('li');
  addDeployedURL.textContent = groupList[i].deployedURL;

  addGroupInfo.appendChild(addTitle);
  addGroupInfo.appendChild(addStudents);
  addGroupInfo.appendChild(addDiscription);
  addGroupInfo.appendChild(addRepoURL);
  addGroupInfo.appendChild(addDeployedURL);
}
