
let cards = document.querySelectorAll('.projectCards');
let nextBtn = document.querySelector('#projectNextBtn');
let prevBtn = document.querySelector('#projectPrevBtn');

let activeNum = 1;

function loadCards(){
    let stt = 0;

    cards[activeNum].style.transform = 'none';
    cards[activeNum].style.zIndex = '20';           // given in projectStylesCss
    cards[activeNum].style.filter = 'none';
    cards[activeNum].style.opacity = '1';

    for(let i=(activeNum+1); i < cards.length; i++){
        stt++;
        cards[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        cards[i].style.zIndex = 20-stt + "";
        cards[i].style.filter = 'blur(2px)';
        cards[i].style.opacity = stt>2 ? 0: 0.5;
    }

    stt = 0;
    for(let i=(activeNum-1); i >= 0; i--){
        stt++;
        cards[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        cards[i].style.zIndex = 20-stt + "";
        cards[i].style.filter = 'blur(2px)';
        cards[i].style.opacity = stt>2 ? 0: 0.5;
    }
}

loadCards();

nextBtn.onclick = function (){
    activeNum = ((activeNum+1) < cards.length)? activeNum+1 : activeNum;
    loadCards();
}

prevBtn.onclick = function (){
    activeNum = ((activeNum-1) >= 0)? activeNum-1 : activeNum;
    loadCards();
}
