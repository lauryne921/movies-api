fetch('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-12-25&primary_release_date.lte=2023-02-28&api_key=4a54ab11d3721dac3c7f819587e24e14')
.then(res => res.json()) 
.then(data => {
    data.results.map(movie => {
        return displayMovies(movie); 
    });
}); 