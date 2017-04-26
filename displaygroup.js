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

  addImage.setAttribute('class', 'group-img');
  addImage.src = groupList[i].imgSrc;
  groupprojects.appendChild(addImage);
  groupprojects.appendChild(addGroupInfo);

  var addTitle = document.createElement('li');
  addTitle.setAttribute('class', 'title-description');
  addTitle.textContent = groupList[i].title;
  var addStudents = document.createElement('li');
  addStudents.setAttribute('class', 'student-name-list');
  addStudents.textContent = (groupList[i].students);
  var addDiscription = document.createElement('li');
  addDiscription.setAttribute('class', 'group-description');
  addDiscription.textContent = groupList[i].discription;

  addGroupInfo.appendChild(addTitle);
  addGroupInfo.appendChild(addStudents);
  addGroupInfo.appendChild(addDiscription);

  var addRepoURLLI= document.createElement('li');
  addRepoURLLI.setAttribute('class', 'repo-URL');
  addGroupInfo.appendChild(addRepoURLLI);
  var addRepoURL = document.createElement('a');
  var addRepoURLDesc = document.createTextNode(groupList[i].repoURL);
  addRepoURL.appendChild(addRepoURLDesc);
  addRepoURL.title = groupList[i].repoURL;
  addRepoURL.href = groupList[i].repoURL;
  addRepoURL.textContent = groupList[i].repoURL;

  var addDeployedURLLI = document.createElement('li');
  addDeployedURLLI.setAttribute('class', 'deployed-page-URL')
  addGroupInfo.appendChild(addDeployedURLLI);
  var addDeployedURL = document.createElement('a');
  var addDeployedURLDesc = document.createTextNode(groupList[i].deployedURL);
  addDeployedURL.appendChild(addDeployedURLDesc);
  addDeployedURL.title = groupList[i].deployedURL;
  addDeployedURL.href = groupList[i].deployedURL;
  addDeployedURL.textContent = groupList[i].deployedURL;

  addRepoURLLI.appendChild(addRepoURL);
  addDeployedURLLI.appendChild(addDeployedURL);
}
