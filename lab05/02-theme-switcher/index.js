/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const setTheme = (ev) => {
  
	const elementClicked = ev.currentTarget;
	if(elementClicked.id == "desert"){
		
	   document.querySelector("header").style.backgroundColor = "#A8651E";
	   document.querySelector("header").style.color = "#EFDEC2";
	   document.querySelector("header").style.borderBottom = "solid 1px #774713";

	   document.querySelector(".content").style.backgroundColor = "#EFDEC2";
	   document.querySelector(".content").style.color = "#A8651E";
	   
	   document.querySelector("nav").style.color = "#A8651E";
	   document.querySelector("nav").style.borderBottom = "solid 1px #774713";
	}
	
	else if(elementClicked.id == "ocean"){
		
		document.querySelector("header").style.backgroundColor = "#434a6c";
		document.querySelector("header").style.color = "white";
		document.querySelector("header").style.borderBottom = "solid 1px #434a6c";
		document.querySelector("header").style.fontFamily = "Montserrat";

		document.querySelector(".content").style.backgroundColor = "#99cccc";
		document.querySelector(".content").style.color = "#434a6c";
		document.querySelector(".content").style.lineHeight = "1.6em";

		document.querySelector("nav").style.color = "#A8651E";
		document.querySelector("nav").style.borderBottom = "solid 1px #434a6c";
	}
	
	else if(elementClicked.id == "high-contrast") {
	
		document.querySelector("header").style.backgroundColor = "black";
		document.querySelector("header").style.color = "white";
		document.querySelector("header").style.borderBottom = "solid 1px black";

		document.querySelector(".content").style.backgroundColor = "white";
		document.querySelector(".content").style.color = "black";

		document.querySelector("nav").style.color = "black";
		document.querySelector("nav").style.borderBottom = "solid 1px black";
	}
	else {
		document.querySelector("body").classList.remove('container');
	}
};
  

document.querySelector("#default").addEventListener('click', setTheme);
document.querySelector("#desert").addEventListener('click', setTheme);
document.querySelector("#ocean").addEventListener('click', setTheme);
document.querySelector("#high-contrast").addEventListener('click', setTheme);