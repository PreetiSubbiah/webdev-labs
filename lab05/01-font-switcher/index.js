const makeBigger = () => {
   document.querySelector("h1").style.fontSize =  "2.5em"; 
   document.querySelector("p").style.fontSize =  "1.25em";
   
   

};

const makeSmaller = () => {
	
   document.querySelector("h1").style.fontSize =  "25px"; 
   document.querySelector("p").style.fontSize =  "20px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

