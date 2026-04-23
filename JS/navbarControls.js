

let sidebar = document.getElementById('sideBar');
let barIcon = document.getElementById('navBarIcon');
let closeIcon = document.getElementById('sidebarCloseIcon');

closeIcon.addEventListener('click', ()=>{
    sidebar.style.animation = 'slidOutRight 0.7s ease-out';
    setTimeout(()=>{
        sidebar.style.display = 'none';
    },1000);
});

barIcon.addEventListener('click', ()=>{
    sidebar.style.display = 'flex';
    sidebar.style.animation = 'slidInRight 0.7s ease-out';
});