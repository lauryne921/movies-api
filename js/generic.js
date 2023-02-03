const imagePath = 'https://image.tmdb.org/t/p/w500'; 

function displayMovies(movie) {
    const moviesTemplate = document.getElementById('movies-template'); 
    const movieCard = moviesTemplate.content.cloneNode(true).children[0];

    const poster = movieCard.querySelector('#poster'); 
    const movieName = movieCard.querySelector('#name');
    const date = movieCard.querySelector('#date'); 
    const vote = movieCard.querySelector('#vote'); 

    const voteAverage = Math.round(movie.vote_average * 100) / 100;
 

    poster.style.backgroundImage = `url('${imagePath + movie.poster_path}')`; 
    poster.style.backgroundSize = 'cover';
    movieName.textContent = movie.title || movie.name; 
    date.textContent = movie.release_date || movie.first_air_date;
    vote.textContent = voteAverage; 

    styleVote(vote);

    movieCard.addEventListener('click', () => {
        window.location.href = '../html/detail.html'; 
        localStorage.setItem('movieTitle', movie.title); 
        localStorage.setItem('movieName', movie.name);
        localStorage.setItem('idMovie', movie.id);
    });

    document.getElementById('wrapper').append(movieCard); 
} 


function styleVote(vote) {
    if (vote.textContent >= 7.5) {
        vote.style.backgroundColor = 'green'; 
    } else if (vote.textContent >= 5) {
        vote.style.backgroundColor = 'orange'; 
        vote.style.color = 'black'; 
    } else {
        vote.style.backgroundColor = 'red'; 
    }
}



document.getElementById('select-filter').addEventListener('change', (event) => {
    if (event.target.value === '2022') {
        window.location.href = "../html/movies-of-2022.html"; 
    } else if (event.target.value === 'trending') {
        window.location.href = "../";
    } else {
        window.location.href = `../html/${event.target.value}.html`; 
    }
});