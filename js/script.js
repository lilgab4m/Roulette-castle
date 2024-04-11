var sidebar = document.getElementById('sidebar');
var leftbody = document.getElementById('leftbody');
var span = document.getElementById('menu');
var mode = 0;

span.addEventListener('click', ()=> {
    if (mode == 0) {
            sidebar.style.transform = 'translateX(0)';
            leftbody.style.marginLeft = '20%';
            span.style.transform = 'rotate(90deg)';
            document.getElementById('menu').textContent = "close";
            mode = 1;
    } else {
            sidebar.style.transform = 'translateX(-100%)';
            leftbody.style.marginLeft = '0';
            span.style.transform = 'rotate(0deg)';
            document.getElementById('menu').textContent = "menu";
            mode = 0;
    };
});

var nav = document.get