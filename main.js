// https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1

function placeInTemplate(movieUsers) {
    var html = movieUsers.map(user => template(user)).join('');
    //the original, when context was just an object...
    //var html = template(context);
    var destination = document.querySelector('.handlebars-demo');
    destination.innerHTML = html;
}
// the html array will get joined by commas, unless you have the call to .join('') at the end

// ==============================
let source = document.querySelector('#movieListing-template').innerHTML;
let template = Handlebars.compile(source);

fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(response => response.results.map(getMovieId))
    .then(waitPromises => Promise.all(waitPromises))
    .then(placeInTemplate);
//.then(object => console.log(object))

function getMovieId(object) {
    console.log(object.id);

    return fetch(`https://api.themoviedb.org/3/movie/${object.id}?api_key=${key}&language=en-US`)
        .then(response => response.json())
    // .then(object => console.log(object))
}
