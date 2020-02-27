// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';
// let hi = function(){
// 	let str = 'Hi, ';
// 	return str + 'Dear!' ;
// }
// alert(hi());
// document.querySelector('html').onclick = function(){
// 	alert('Stop poking me,please!');
// 	if (myHeading.textContent === 'Hello World!') {
// 		myHeading.textContent = 'Firefox';
// 	}
// 	else
// 		myHeading.textContent = 'Hello World!';

//}
let myImg = document.querySelector('img');
myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/firefox1.png'){
		myImg.setAttribute('src','images/firefox2.png');
	}
	else
		myImg.setAttribute('src','images/firefox1.png')
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
	let myName = prompt('Enter Your Name :');
	if(!myName||myName === null){
		setUserName();
	}else{
       localStorage.setItem('name',myName);
       myHeading.innerHTML = 'Mozilla is Cool, ' + myName;
    }
}
if(!localStorage.getItem('name')){
	setUserName();
}
else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is Cool, ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}