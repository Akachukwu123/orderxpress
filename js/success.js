//script for suscess popup box
const success = document.querySelector('.success_message');
const form = document.querySelector('#taskForm'); 
success.style.display = 'none'; 

loadEventListeners();

function loadEventListeners(){
	form.addEventListener('submit', showSuccess);
}

function showSuccess(e){
	success.style.display = 'block';
	e.preventDefault();
}