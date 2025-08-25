//animação da tela de login
spanPapuu = document.querySelector('.greetings span');
setInterval(() => {
    if(spanPapuu.style.visibility == 'hidden'){
        spanPapuu.style.visibility = 'visible';
    }else{
        spanPapuu.style.visibility = 'hidden'
    }
}, 750);

//Mostrar tela de criação de conta ao clicar em registrar
registBtn = document.querySelector('.regist');
registBtn.addEventListener('click', ()=>{
    let createAccountSection = document.querySelector('section.create-account');
    createAccountSection.style.display = 'flex';
})
//Fechar tela de criação de conta ao clicar em fechar
var close = document.querySelector('.close');
close.addEventListener('click', ()=>{
    let createAccountSection = document.querySelector('section.create-account');
    createAccountSection.style.display = 'none';
})