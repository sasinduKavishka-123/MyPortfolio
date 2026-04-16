

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


const skillBtn = document.querySelectorAll('.skillLinkScrollBtn');
const target2 = document.querySelector('#skill');

for(let i=0; i<skillBtn.length; i++){
    skillBtn[i]?.addEventListener('click', () => {
        target2.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


const footerBtn = document.querySelectorAll('.footerLinkScrollBtn');
const target3 = document.querySelector('#footer');

for(let i=0; i<footerBtn.length; i++){
    footerBtn[i]?.addEventListener('click', () => {
        target3.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


const homeBtn = document.querySelectorAll('.homeLinkScrollBtn');
const target4 = document.querySelector('#hero');

for(let i=0; i<homeBtn.length; i++){
    homeBtn[i]?.addEventListener('click', () => {
        target4.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

const aboutMeBtn = document.querySelectorAll('.aboutMeLinkScrollBtn');
const target5 = document.querySelector('#aboutME');

for(let i=0; i<aboutMeBtn.length; i++){
    aboutMeBtn[i]?.addEventListener('click', () => {
        target5.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

const myProjectsBtn = document.querySelectorAll('.myProjectLinkScrollBtn');
const target6 = document.querySelector('#myProjects');

for(let i=0; i<myProjectsBtn.length; i++){
    myProjectsBtn[i]?.addEventListener('click', () => {
        target6.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

const myExerciseBtn = document.querySelectorAll('.myExercisesLinkScrollBtn');
const target7 = document.querySelector('.cssSections');
const target8 = document.querySelector('#cssSmoothScrollPoint');

for(let i=0; i<myExerciseBtn.length; i++){
    myExerciseBtn[i]?.addEventListener('click', () => {
        target7?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

for(let i=0; i<myExerciseBtn.length; i++){
    myExerciseBtn[i]?.addEventListener('click', () => {
        target8?.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    });
}