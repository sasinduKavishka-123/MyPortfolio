
//******    sub topics spawn    **************

const subTopics = document.querySelectorAll('.subTopics');
const subTopicObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('subtopicShow');
        }
        else{
            entry.target.classList.remove('subtopicShow');
        }
    })
},{
    // threshold: 0,
    rootMargin: "0px 0px -100px 0px"
});

subTopics.forEach((subTopic)=>{
    subTopicObserver.observe(subTopic);
});


//******    contact topics spawn    **************

const contactTopics = document.querySelectorAll('.contactTopics');
const contactTopicsObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('contactTopicShow');
        }
        else{
            entry.target.classList.remove('contactTopicShow');
        }
    })
},{
    // threshold: 0,
    rootMargin: "-80px 0px -70px 0px"
});

contactTopics.forEach((conTopic)=>{
    contactTopicsObserver.observe(conTopic);
});


//******    special card spawn    **************

const specialCards = document.querySelectorAll('.spCards');
const specialCardsObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('spCardShow');
        }
        else{
            entry.target.classList.remove('spCardShow');
        }
    })
},{
    // threshold: 1,
    rootMargin: "-100px 0px -200px 0px"
});

specialCards.forEach((card)=>{
    specialCardsObserver.observe(card);
});


//******    skill card spawn    **************

const skillCards = document.querySelectorAll('.skCard');
const skillCardsObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('skCardShow');
        }
        else{
            entry.target.classList.remove('skCardShow');
        }
    })
},{
    rootMargin: "10px 0px -110px 0px"
});

skillCards.forEach((card)=>{
    skillCardsObserver.observe(card);
});