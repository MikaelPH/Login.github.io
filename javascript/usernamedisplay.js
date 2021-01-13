window.onload = (event) => {
	const nme = localStorage.getItem('username');
	console.log(nme);
	
	document.getElementById("username").innerHTML = nme;	//print out username on pages linked to this javascript
};