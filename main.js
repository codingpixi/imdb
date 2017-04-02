// https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1

// let classGitHub = ['conshus', 'tyjdavis', 'chrislebbano', 'filusmarvin', 'wjwjr', 'ddsheard', 'ochanya', 'jcr08'];


    // var source   = document.querySelector("#movieListing-template").innerHTML;
    // var template = Handlebars.compile(source);
    // let moviePromises = classGitHub.map(user => {
    //   return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
    //    .then(object => object.json())
    //    .then(object => console.log(object))
    // })
    // Promise.all(moviePromises).then(placeInTemplate);
    //
    // function placeInTemplate (movieUsers) {
    //   var html   = movieUsers.map(user => template(user)).join('');
    //   //the original, when context was just an object...
    //   //var html = template(context);
    //   var destination = document.querySelector('.handlebars-demo');
    //   destination.innerHTML = html;
    // }
    // the html array will get joined by commas, unless you have the call to .join('') at the end

  
    fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
    .then (response => response.json())
    .then(object => console.log(object))
