const imagem = document.querySelector('.header__img');

function changePiada(piada){
	const blockquote = document.querySelector('.main__quote');
	blockquote.innerText = piada;
}

function fetchPiadas(url){
	fetch(url)
		.then(response => response.json())
		.then(piada => changePiada(piada.value));
}

imagem.addEventListener('click', () => {
	fetchPiadas('https://api.chucknorris.io/jokes/random');
	imagem.classList.add('move');
	setTimeout(() => imagem.classList.remove('move') ,1000);
});
