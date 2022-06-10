const header = document.getElementsByTagName("header")[0];
const hamburger = document.getElementById("hamburger");
const blurScreen = document.getElementById("blur");


hamburger.addEventListener("click", function(){
	header.classList.toggle("open");
	hamburger.classList.toggle("active");
	blurScreen.classList.toggle("active");
});