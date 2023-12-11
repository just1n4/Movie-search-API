document.querySelector('section').style.display = "none"
document.querySelector('.error-message').style.display = "none"

document.querySelector('form').addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log("Paspaustas ieskoti mygtukas");

    let searchQuery = document.querySelector('input').value
    fetch(`https://www.omdbapi.com/?t=${searchQuery}&apikey=e4db3ced`)
    .then((response)=>data=response.json())
    // .then((data)=>console.log(data))
    .then((data)=>{
        console.log(data)
        if (data.Response == "True"){
            document.querySelector('section').style.display = "block"
            document.querySelector('.error-message').style.display = "none"

            document.querySelector('.title').textContent = data.Title
            document.querySelector('.runtime').textContent = data.Runtime
            document.querySelector('.director').textContent = data.Director
            document.querySelector('.year').textContent = data.Year
            document.querySelector('.imdb').textContent = data.imdbRating
            document.querySelector('.plot').textContent = data.Plot
            if (data.Poster){
                document.querySelector('.poster img').src = data.Poster
            }
        }else{
            document.querySelector('section').style.display = "none"
            document.querySelector('.error-message').style.display = "block"
            document.querySelector('.error-message').textContent = "Filmas nerastas"
        }
    })
})