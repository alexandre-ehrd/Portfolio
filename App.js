const hamburger = document.getElementById("hamburger");
const header = document.getElementsByTagName("header")[0];
const blurScreen = document.getElementById("blur");

const mesProjetsButton = document.getElementById("mes-projets-button");


hamburger.addEventListener("click", function(){
	header.classList.toggle("open");
	hamburger.classList.toggle("active");
	blurScreen.classList.toggle("active");
});

blurScreen.addEventListener("click", function(){
	header.classList.toggle("open");
	hamburger.classList.toggle("active");
	blurScreen.classList.toggle("active");
});

mesProjetsButton.addEventListener("click", function(){
	header.classList.remove("open");
	hamburger.classList.remove("active");
	blurScreen.classList.remove("active");
});