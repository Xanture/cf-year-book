'use strict';
var groupList = [];
var groupprojects = document.getElementById('group-projects')
try{
  groupList = JSON.parse(localStorage.groupList);
} catch(error) {
  console.log(error);
}
for (var i = 0; i < groupList.length; i++){

  var addImage = document.createElement('img');
  addImage.src = groupList[i].imgSrc;
  groupprojects.appendChild(addImage);
}
