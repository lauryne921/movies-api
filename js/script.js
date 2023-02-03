/*const apiKey = 'api_key=4a54ab11d3721dac3c7f819587e24e14'; 
const baseURL = 'https://api.themoviedb.org/3'; 
const apiURL = baseURL + '/discover/movie?sort_by=popularity.desc&' + apiKey; */ 

/*fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4a54ab11d3721dac3c7f819587e24e14')
.then(res => res.json())
.then(data => {
    console.log(data); 

    data.results.map(movie => {
        return displayMovies(movie); 
    }); 
});*/

fetch('https://api.themoviedb.org/3/trending/all/day?api_key=4a54ab11d3721dac3c7f819587e24e14')
.then(res => res.json())
.then(data => {
    console.log(data); 

    data.results.map(movie => {
        return displayMovies(movie); 
    }); 
});

