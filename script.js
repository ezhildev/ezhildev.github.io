if('dark.css' == localStorage.getItem('theme')) {
	document.getElementById('theme').href = 'dark.css'
	document.getElementById('toggle').checked = true;
}
else {
	document.getElementById('theme').href = 'light.css'
	document.getElementById('toggle').checked  = false;
}

window.onscroll = function() {
	if (window.pageYOffset > 560) {
		document.getElementById('back-to-top').style.display = 'initial';
	} else {
		document.getElementById('back-to-top').style.display = 'none';
	}
}

const ckbox = document.getElementById('toggle');
ckbox.addEventListener('change', function(){
	let theme = document.getElementById('theme');
	let stylesheet = ckbox.checked ? 'dark.css' : 'light.css'
	theme.href = stylesheet;
	localStorage.setItem('theme', stylesheet);
});