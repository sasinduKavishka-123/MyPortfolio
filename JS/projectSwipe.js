
const container = document.querySelector('.projectCardContainer');
const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        entries[0].target.style.cssText = 'translate: 0 0; opacity: 100%;';
        setTimeout(()=>{
            loadCards();
        }, 250);
    }
    else{
        entries[0].target.style.cssText = 'translate: 0 50px; opacity: 0;';
    }
}, {
    threshold: 0.6
});

observer.observe(container);


let cards = document.getElementsByClassName('projectCards');
let nextBtn = document.querySelector('#projectNextBtn');
let prevBtn = document.querySelector('#projectPrevBtn');

let activeNum = cards.length / 2;

function loadCards(){
    let stt = 0;

    cards[activeNum].style.transform = 'none';
    cards[activeNum].style.zIndex = '20';               // given in projectStylesCss
    cards[activeNum].style.filter = 'none';
    cards[activeNum].style.opacity = '1';
    cards[activeNum].style.pointerEvents = 'auto';
    cards[activeNum].addEventListener('mouseenter', ()=>{
        cards[activeNum].style.top= '45px';
        cards[activeNum].style.background = 'linear-gradient(rgb(31 3 49), rgb(31 3 49)) padding-box,\n' +
            '            linear-gradient(to bottom, #0EA2E7, #AF05ED) border-box';
    });
    cards[activeNum].addEventListener('mouseleave', ()=>{
        cards[activeNum].style.top= '55px';
        cards[activeNum].style.background = 'linear-gradient(#11021b, #11021b) padding-box,\n' +
            '            linear-gradient(to bottom, #0EA2E7, #AF05ED) border-box';
    });

    for(let i=(activeNum+1); i < cards.length; i++){
        stt++;
        cards[i].style.transform = `translateX(${180*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        cards[i].style.zIndex = 20-stt + "";
        cards[i].style.filter = 'blur(2px)';
        cards[i].style.opacity = stt>2 ? 0: 0.5;
        cards[i].style.pointerEvents = 'none';
    }

    stt = 0;
    for(let i=(activeNum-1); i >= 0; i--){
        stt++;
        cards[i].style.transform = `translateX(${-180*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        cards[i].style.zIndex = 20-stt + "";
        cards[i].style.filter = 'blur(2px)';
        cards[i].style.opacity = stt>2 ? 0: 0.5;
        cards[i].style.pointerEvents = 'none';
    }
}

nextBtn.onclick = function (){
    activeNum = ((activeNum+1) < cards.length)? activeNum+1 : activeNum;
    loadCards();
}

prevBtn.onclick = function (){
    activeNum = ((activeNum-1) >= 0)? activeNum-1 : activeNum;
    loadCards();
}
