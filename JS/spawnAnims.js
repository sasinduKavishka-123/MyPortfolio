
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
    rootMargin: "-150px 0px -70px 0px"
});

subTopics.forEach((subTopic)=>{
    subTopicObserver.observe(subTopic);
});


/////////////////////////////////////////////////////////////////////////

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
    rootMargin: "-30px 0px -70px 0px"
});

contactTopics.forEach((conTopic)=>{
    contactTopicsObserver.observe(conTopic);
});
