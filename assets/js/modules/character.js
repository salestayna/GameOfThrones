export default function character(id) {
	fetch(`https://my-json-server.typicode.com/salestayna/API/characters/${id}`)
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		const charactersDetails = document.querySelector('.character__details');
		charactersDetails.classList.add('character__details--active');

		const character = document.querySelector('.character');
		character.querySelector('.character__image').src = json.imageURL;
		character.querySelector('.character__image').alt = json.fullName;
		character.querySelector('.character__name').innerHTML = json.fullName;
		character.querySelector('.character__title').innerHTML = json.title;
		const quotes = json.quotes;
		if (quotes.length == 0) {
			character.querySelector('.character__quote').innerHTML = 'Sem citação';
		} else {
			character.querySelector('.character__quote').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
		};
	});
};