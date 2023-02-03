fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4a54ab11d3721dac3c7f819587e24e14')
.then(res => res.json())
.then(data => {
    console.log(data); 

    data.results.map(movie => {
        return displayMovies(movie); 
    }); 
});