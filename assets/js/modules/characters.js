import character from './character.js';
export default function characters(id) {
	fetch(`https://my-json-server.typicode.com/salestayna/API/families/${id}/characters`)
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		const charactersSection = document.querySelector('.characters');
		charactersSection.classList.add('characters--active');
		
		const characters = json;

		const charactersList = document.querySelector('.characters__list');
		charactersList.innerHTML = '';
		charactersList.innerHTML = characters.map((character) => {
			return '<li id='+ character.id +'><img src="'+ character.imageURL +'" alt="'+ character.fullName +'"><span><span class="characters__name">' + character.fullName + '</span><span class="characters__title">' + character.title + '</span></span></li>';
		}).join('');

		function activateCharacter(item) {
			charactersItens.forEach((i) => {
				i.classList.remove('active')
			});
			item.classList.add('active');
			character(item.id);
		};

		const charactersItens = document.querySelectorAll('.characters__list li');
		charactersItens.forEach((item) => {
			item.addEventListener('click', () => {
				activateCharacter(item);
			});
		});
	});
};