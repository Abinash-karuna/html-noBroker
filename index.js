var signin=document.querySelector('.button2');
function verified(event){
    event.preventDefault();
    window.location.href='allready.html';

}
signin.addEventListener('click',verified);