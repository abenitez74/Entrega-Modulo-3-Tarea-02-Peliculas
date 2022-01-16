function guardar(){
    const nom=document.getElementById('nombreTxt').value;
    const ape=document.getElementById('apellidoTxt').value;
    const tel=document.getElementById('telefono').value;
    const dir=document.getElementById('direccion').value
    const obser=document.getElementById('observa').value

    const objeto={nom,ape,tel,dir,obser};
    localStorage.setItem('datos',JSON.stringify(objeto));
    document.getElementById('nombreTxt').value=""
    document.getElementById('apellidoTxt').value=""
    document.getElementById('telefono').value=""
    document.getElementById('direccion').value=""
    document.getElementById('observa').value=""
    
}


