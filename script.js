spanPapuu = document.querySelector('.greetings span');



setInterval(() => {
    if(spanPapuu.style.visibility == 'hidden'){
        spanPapuu.style.visibility = 'visible';
    }else{
        spanPapuu.style.visibility = 'hidden'
    }
}, 750);