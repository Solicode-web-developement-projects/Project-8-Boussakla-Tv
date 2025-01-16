let params = new URLSearchParams(document.location.search)
let id = params.get("id");
fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=705ce0a7e4511975634bb68c9d679fe8")
.then(response => response.json())
.then(data => {
    console.log(data)
    let bacdrop = document.querySelector("main img");
    let title = document.querySelector(" main h1");
    let description = document.querySelector(" main .description");
    let date = document.querySelector(" main .date");
    bacdrop.setAttribute("src", "https://image.tmdb.org/t/p/w500/"+data.backdrop_path);
    title.innerHTML = data.title;
    description.innerHTML = data.overview;
    date.innerHTML += data.release_date;
    let genres = data.genres;
    let box = document.getElementById("genres");
    for(let genre of genres){
        let div = document.createElement("div");
        div.innerText = genre.name
        box.appendChild(div);
    }
});