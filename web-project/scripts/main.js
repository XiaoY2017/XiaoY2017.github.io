let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'resource/image/swift_logo.png') {
    myImage.setAttribute('src', 'resource/image/swift_logo1.jpg');
  } else {
    myImage.setAttribute('src', 'resource/image/swift_logo.png');
  }
}



function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName) {
    // setUserName()
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '我要开始学习Swift，' + myName;
  }
  
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '我要开始学习Swift，' + storedName;
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}