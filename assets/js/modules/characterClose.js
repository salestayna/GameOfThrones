export default function characterClose() {
	const characterClose = document.querySelector('.character__close');

	characterClose.addEventListener('click', (e) => {
		e.preventDefault();
		const charactersDetails = document.querySelector('.character__details');
		charactersDetails.classList.remove('character__details--active');
	});
};