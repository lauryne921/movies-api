fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&sort_by=vote_average&sort_by=popularity.desc&api_key=4a54ab11d3721dac3c7f819587e24e14')
.then(res => res.json()) 
.then(data => {
    data.results.map(movie => {
        return displayMovies(movie); 
    });
}); 