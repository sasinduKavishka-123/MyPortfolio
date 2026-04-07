

const contactBtn = document.querySelectorAll('.contactLinkScrollBtn');
const target1 = document.querySelector('#contact');

for(let i=0; i<contactBtn.length; i++){
    contactBtn[i]?.addEventListener('click', () => {
        target1.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


const skillBtn = document.querySelector('.skillLinkScrollBtn');
const target2 = document.querySelector('#skill');

skillBtn?.addEventListener('click', () => {
   target2.scrollIntoView({
       behavior: 'smooth',
       block: 'start'
   });
});


const footerBtn = document.querySelector('.footerLinkScrollBtn');
const target3 = document.querySelector('#footer');

footerBtn?.addEventListener('click', () => {
    target3.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


const homeBtn = document.querySelector('.homeLinkScrollBtn');
const target4 = document.querySelector('#hero');

homeBtn?.addEventListener('click', () => {
    target4.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

