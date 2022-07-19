let fotosEl = document.querySelectorAll(".foto");

fotosEl.forEach(foto => {
    foto.addEventListener('click', alternaClasse);
});

function alternaClasse(e) {
    let fotoClicada = e.currentTarget;
    console.log(fotoClicada);
    fotoClicada.classList.toggle('girando');
}