let form=document.querySelector("#form");
let input=document.querySelector("#input");
let mt=document.querySelector("#movie_title")




function display(data){
    if (data.Search) {
      mt.innerHTML="";
    data.Search.forEach((movie) => {
      let { Poster, Title, Year } = movie;
      let div1 = document.createElement("div");
      div1.classList.add("edit");
      div1.innerHTML = `
        <img src="${Poster}">
        <h6>Title: ${Title}</h6>
        <h6>Year: ${Year}</h6>
      `;
      mt.appendChild(div1);
    });
  } else {
    mt.innerHTML = "No results found.";
  }
}

async function getMovies(){
    let res=await fetch(`https://www.omdbapi.com/?s=${input.value}&page=2&apikey=7d6c964a`)
    let data= await res.json();
    console.log(data);
    display(data);
}





form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getMovies();
})
   
