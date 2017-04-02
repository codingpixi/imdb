// https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1

    function placeInTemplate (movieUsers) {
      var html   = movieUsers.results.map(user => template(user)).join('');
      //the original, when context was just an object...
      //var html = template(context);
      var destination = document.querySelector('.handlebars-demo');
      destination.innerHTML = html;
    }
    // the html array will get joined by commas, unless you have the call to .join('') at the end

// ==============================
let source = document.querySelector('#movieListing-template').innerHTML;
let template = Handlebars.compile(source);

    fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
    .then (response => response.json())
    .then(placeInTemplate)
    // .then(object => console.log(object))
