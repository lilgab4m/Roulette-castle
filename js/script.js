var sidebar = document.getElementById('sidebar');
var leftbody = document.getElementById('leftbody');
var trigger = document.getElementById('trigger');

trigger.addEventListener('mouseover', ()=> {
    sidebar.style.transform = 'translateX(0)';
    leftbody.style.marginLeft = '20%';
    trigger.style.width = '20%';
});

trigger.addEventListener('mouseout', ()=> {
    sidebar.style.transform = 'translateX(-100%)';
    leftbody.style.marginLeft = '0';
    trigger.style.width = '50px';
});