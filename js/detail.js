const imagePath = 'https://image.tmdb.org/t/p/w500'; 
const localMovie = localStorage.getItem('idMovie');
const intMovie = parseInt(localMovie);
console.log(intMovie.toString());

const firstUrlMovie = 'https://api.themoviedb.org/3/movie/'; 
const lastUrlMovie = '?api_key=4a54ab11d3721dac3c7f819587e24e14'; 


fetch(`${firstUrlMovie + localMovie + lastUrlMovie}`)
.then(res => res.json())
.then(data => {
    console.log(data); 
    console.log(data.title); 
    displayDetailMovies(data);
});



/*const firstUrlReview = 'https://api.themoviedb.org/3/movie/'; 
const secondUrlReview = '/reviews?api_key=4a54ab11d3721dac3c7f819587e24e14'


function getReviews() {
    fetch(`${firstUrlReview + localMovie + secondUrlReview}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.results.map(review => {
            return displayDetailMovies(review);
        });
    }); 
}


function displayReviews(review) {
    document.getElementById('reviews').textContent = review.content;
    console.log(review); 
}*/



function nameVoteContent(movieSelected) {
    const movieName = document.getElementById('name'); 
    const vote = document.getElementById('vote');
    const numberVote = document.getElementById('number-vote'); 

    movieName.textContent = movieSelected.original_title; 
    vote.textContent = Math.round(movieSelected.vote_average * 100) / 100;
    numberVote.textContent = movieSelected.vote_count + ' votes'; 

    styleVote(vote);
}


function releaseContent(movieSelected) {
    const releaseDate = document.getElementById('release-date');
    const status = document.getElementById('status'); 
    const langue = document.getElementById('langue');
    const runtime = document.getElementById('runtime');

    status.textContent = movieSelected.status;
    releaseDate.textContent = movieSelected.release_date;
    langue.textContent = movieSelected.spoken_languages.name;
    movieSelected.spoken_languages.map(language => {
        langue.textContent = language.name;
    });
    runtime.textContent = movieSelected.runtime + 'min';
}


function displayDetailMovies(movieSelected) {
    const bannerImage = document.getElementById('poster'); 
    const overview = document.getElementById('overview');
    
    nameVoteContent(movieSelected);
    releaseContent(movieSelected);

    bannerImage.style.backgroundImage = `url('${imagePath + movieSelected.poster_path}')`;
    bannerImage.style.backgroundSize = 'cover';   
    overview.textContent = movieSelected.overview; 

    //wrapperBackground(movieSelected);
 
    const revenue = document.getElementById('revenue');  
    const homepage = document.getElementById('homepage');  

    const revenueNumber = movieSelected.revenue;
    const decimalRevenueNumber = new Intl.NumberFormat('de-DE', { style: 'decimal', maximumFractionDigits: 0 }).format(revenueNumber);

    revenue.textContent = '$' + decimalRevenueNumber;

    const buttonHomepage = document.createElement('a'); 
    buttonHomepage.href = `${movieSelected.homepage}`;
    buttonHomepage.innerText = 'More'; 
    buttonHomepage.target = '_blank';
    buttonHomepage.style.textDecoration = 'none';
    buttonHomepage.style.color = 'white';
    homepage.append(buttonHomepage); 

    /*movieSelected.production_companies.map(companie => {
        console.log(companie);
        return displayCompanies(companie);
    }); 



    console.log(movieSelected.production_companies)*/
}


/*function displayCompanies(companie) {
    const productionCompanies = document.getElementById('production-companies');

    productionCompanies.textContent = companie.name;
}*/


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
