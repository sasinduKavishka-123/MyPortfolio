

const contactBtn = document.querySelectorAll('.contactLinkScrollBtn');
const target1 = document.querySelector('#contact');

for(let i=0; i<contactBtn.length; i++){
    contactBtn[i].addEventListener('click', () => {
        target1.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Aligns the top of the element to the top of the viewport
        });
    });
}

const skillBtn = document.querySelector('.skillLinkScrollBtn');
const target2 = document.querySelector('#skill');

skillBtn.addEventListener('click', () => {
   target2.scrollIntoView({
       behavior: 'smooth',
       block: 'start'
   });
});