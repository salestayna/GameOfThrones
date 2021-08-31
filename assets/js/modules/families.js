import characters from './characters.js';
export default function families() {
	fetch(`https://my-json-server.typicode.com/salestayna/API/families`)
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		const families = json;

		const familiesList = document.querySelector('.families__list');
		familiesList.innerHTML = families.map((item) => {
			return '<li id="'+ item.id +'"><img src="assets/images/'+ item.symbol +'" alt="'+ item.name +'">' + item.name + '</li>';
		}).join('');

		function activateFamily(item) {
			const charactersSection = document.querySelector('.character__details');
			charactersSection.classList.remove('character__details--active');

			familiesItens.forEach((i) => {
				i.classList.remove('active')
			});
			item.classList.add('active');
			characters(item.id);
		};

		const familiesItens = document.querySelectorAll('.families__list li');
		familiesItens.forEach((item) => {
			item.addEventListener('click', () => {
				activateFamily(item);
			});
		});
	});
};
