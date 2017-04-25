'use strict';
studentList = [];

try{
  studentList = JSON.parse(localStorage.data);
} catch(error) {
  console.log(error);
}
for (var i = 0; i < studentList.length; i++){

  // var addImage1 = document.createElement('div');
  var addImage = document.createElement('img');
  addImage.src = studentList[i].imgSrc;
  app.appendChild(addImage);
}
