const burgerOpen = document.querySelector('.burger-open');
const burgerclose = document.querySelector('.burger-close');
const nav = document.querySelector('.nav-bar');
const front = document.querySelectorAll('.front');
const back = document.querySelectorAll('.back');
const btnMore = document.querySelectorAll('.btn-cross');

btnMore.forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('btn-more');
        btn.classList.toggle('btn-back');
       front[i].classList.toggle('show-front');
       front[i].classList.toggle('hide-front');
       back[i].classList.toggle('show-back');
       back[i].classList.toggle('hide-back');
    });
});


gsap.fromTo('nav', 1, {y:'-100%'}, {y:'0%', ease: 'back.out(1.7)'}, '-=1');
gsap.fromTo('body',1,  {opacity: 0}, {opacity: 1}, '-=1');


burgerOpen.addEventListener('click', ()=>{
nav.style.transform = 'translateX(0%)';
burgerclose.style.display = 'block';
document.body.classList.add('hide');
});

burgerclose.addEventListener('click', ()=>{
    nav.style.transform = 'translateX(100%)';
    document.body.classList.remove('hide');
});