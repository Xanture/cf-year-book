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
}
