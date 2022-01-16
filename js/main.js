// API information.
const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const items = document.getElementById('items')
const templatedC = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


//Modal
const modalPelicula = document.getElementById('modal-content');

let cont=0;

document.addEventListener('DOMContentLoaded', () => {
    Mostrar(url)
})


//pintar las Tarjetas

function Mostrar(url){
    
     fetch(url).then(res => res.json())
    .then(function(data){
    data.results.forEach(pelicula => {
        const {id,  title, poster_path } = pelicula;
        templatedC.querySelector('h5').textContent = title;
        templatedC.querySelector('img').setAttribute('src', IMGPATH+poster_path);
        templatedC.querySelector('button').setAttribute('id', id);
        const clone = templatedC.cloneNode(true)
        fragment.appendChild(clone);
    })
    items.appendChild(fragment)
})
}

// Pelicula Detalle
items.addEventListener('click', (e) => {
     if (e.target.classList.contains('mostrar')) {
        console.log(e)
    }
    Modal(e.srcElement.id)
})


const Modal = async (id2) => {
    
    const res = await fetch(url);
    const data = await res.json();
    modalPelicula.innerHTML = '';
    console.log(data);    

    data.results.forEach(result => {
        const { id, title,poster_path,overview,popularity,release_date} = result;

        if (id == id2) {
            modalPelicula.innerHTML += `
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
             </div>
             <div class="modal-body">
              <img src="${IMGPATH+poster_path}" width="30%" height="30%"  alt="">
             </div>
             <h3 class="titulo-descripcion">Descripción</h3> <br/>
             <h4>${overview}</h4>
             <h4>Popularidad:${popularity}</h4> 
             <h4>Fecha Lanzamiento :${release_date}</h4>`
        }
    })
}






