let form=document.querySelector("#form");
let input=document.querySelector("#input");
let mt=document.querySelector("#movie_title")
// let res=fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=7d6c964a`)




function display(data){
        let{Poster,Actors,Title,Year,Runtime,Released}=data;
        mt.innerHTML="";
        let div1=document.createElement("div");
        div1.classList.add("edit");
        div1.innerHTML=`<img src="${Poster}">
        <h6>Title:-${Title}</h6>
        <h6>Year:-${Year}</h6>
        <h6>Realesed${Released}</h6>
        <h6>Runtime:-${Runtime}</h6>
        <h6>Actors:-${Actors}</h6>
         `
        mt.appendChild(div1);



}

async function getMovies(){
    let res=await fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=7d6c964a`)
    let data= await res.json();
    console.log(data);
    display(data);
}





form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getMovies();
})
   







