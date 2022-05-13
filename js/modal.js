let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

for (let i = 0; i<imagenes.length; i++){
    imagenes[i].addEventListener('click', function(e){ //cuando le de click a alguna imagen abre el modal
        modal.classList.toggle("modal--open");
        let src = e.target.src;
        img.setAttribute("src", src);

    });
}
boton.addEventListener('click', function(){
    modal.classList.toggle("modal--open");//le quitamos la clase al modal para que se ponga invisible
});
