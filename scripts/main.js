
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Ottar-1.jpg') {
      myImage.setAttribute('src','images/Aksel-1.jpg');
    } else {
      myImage.setAttribute('src','images/Ottar-1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name:');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Hello there, ' + myName;
    }
  }
  myButton.onclick = function() {
    setUserName();
  }  