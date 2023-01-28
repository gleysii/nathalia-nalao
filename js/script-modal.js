
//seleções
let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";

//percorrendo em looping
for(let i = 0; i < imagens.length; i++){
    //criação de função anônima
    imagens[i].addEventListener('click', function(){
        srcVal = imagens[i].getAttribute('src');//o atributo é o endereço
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
})