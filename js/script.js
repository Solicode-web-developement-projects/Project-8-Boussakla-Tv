let section = document.querySelector("section");
let pages = document.querySelectorAll("footer div");
let page = 1
let endPoints =["popular","now_playing","top_rated"];
let choises = document.querySelectorAll("li");
let endPoint = "popular";
let favoris = document.querySelector("p");
let navLinks = document.querySelectorAll("li,p");
let title = document.querySelector("span");


fetch("https://api.themoviedb.org/3/movie/popular?api_key=705ce0a7e4511975634bb68c9d679fe8&page=1")
.then(response => response.json())
.then(moviesData => api(moviesData))


for(let li of choises){
    li.addEventListener("click", () =>{
    pagesClear()
    pagesDecoration()
    pages[0].style.background="#005B41"
    navLinksDecoration()
    li.style.border="2px solid #2caa86"
    removeAllCards()
    let index = li.value;
    endPoint = endPoints[index]
    title.innerText = li.innerText.toUpperCase()
    fetch("https://api.themoviedb.org/3/movie/"+endPoint+"?api_key=705ce0a7e4511975634bb68c9d679fe8&page=1")
    .then(response => response.json())
    .then(moviesData => api(moviesData)) 
});  
}


for(let number of pages){
    number.addEventListener("click", () =>{
        pagesDecoration()
        number.style.background="#005B41"
        page = number.innerText
        removeAllCards()
        fetch("https://api.themoviedb.org/3/movie/"+endPoint+"?api_key=705ce0a7e4511975634bb68c9d679fe8&page="+page+"")
        .then(response => response.json())
        .then(moviesData => api(moviesData))
    });
}


favoris.addEventListener("click", ()=>{
    title.innerText = favoris.innerText.toUpperCase()
    navLinksDecoration()
    favoris.style.border="2px solid #2caa86"
    removeAllCards()
    let data = JSON.parse(localStorage.getItem("favoris"));
    for(let div of data){
        section.innerHTML += div 
    }
    pagesRemove()
});

function api(moviesData){
    let movies = moviesData.results;
    for(let movie of movies){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h3 = document.createElement("h5");
        let title = document.createElement("h1");
        let rate = document.createElement("div");
        let star = document.createElement("i");
        let button = document.createElement("button");
        star.setAttribute("class", "fa fa-star");
        rate.classList.add("rate");
        rate.innerHTML = movie.vote_average.toFixed(1);
        img.setAttribute("src",'https://image.tmdb.org/t/p/w500/'+movie.poster_path);
        h3.innerText=movie.release_date;
        title.innerText = movie.title;
        title.classList.add("cardTitle");
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(h3);
        section.appendChild(div);
        button.appendChild(star)
        div.appendChild(button);
        div.appendChild(rate);
        img.addEventListener("click" ,function(){
            window.location.href="details.html?id="+ movie.id;
        });
        button.addEventListener("click", () =>{
            star.style.color="yellow";
            if (localStorage.getItem("favoris")) {
            let arr = JSON.parse(localStorage.getItem("favoris"));
            let fav = div.innerHTML;
            arr.push(`<div>${fav}</div>`);
            localStorage.setItem("favoris",JSON.stringify(arr));
            }else{
            let fav = `<div>${div.innerHTML}</div>`;
            localStorage.setItem("favoris",JSON.stringify([fav]));
            }
        });
    };
};
function removeAllCards(){
    let filmCards = document.querySelectorAll("section div");
    for(let card of filmCards){
        card.remove();
    };
}
function navLinksDecoration(){
    for (let link of navLinks){
        link.style.border="none"
    }
}
function pagesDecoration(){
    for(let one of pages){
        one.style.background="#10141e"
    }
}
function pagesRemove(){
    for(let page of pages){
        page.style.display="none"
    }
}
function pagesClear(){
    for(let page of pages){
        page.style.display="block"
    }
}

function titleChange(){
    title.innerText = li.innerText
}