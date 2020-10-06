
const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const container = document.getElementById('container');


btn.addEventListener('click', () => {
	var setnav = nav.classList.toggle('active');
	btn.classList.toggle('active');
	

	if (setnav) {
	 container.style.left='120px';
	}else{
	 container.style.left='220px';
	}
});