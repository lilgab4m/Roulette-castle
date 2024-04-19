var depositar = document.getElementById('depositar');
var sacar = document.getElementById('sacar');
var pix = document.getElementById('pix');
var depos_btn = document.getElementById('depos_btn');
var sacar_btn = document.getElementById('sacar_btn');
var depos_span = document.getElementById('depos_span');
var sacar_span = document.getElementById('sacar_span');
var pix_btn = document.getElementById('pix_btn');
var copy_btn = document.getElementById('copy');
var copy = document.getElementById('copied');
var chave = document.getElementById('chave')
var mode = 0;

function depos_open() {
    depos_span.style.transform = 'rotate(180deg)'
    depositar.style.height = '400px';
    mode = 1;
};

function depos_close() {
    depos_span.style.transform = 'rotate(0deg)'
    depositar.style.height = '0px';
    mode = 0;
};

function sacar_open() {
    sacar_span.style.transform = 'rotate(180deg)'
    sacar.style.height = '550px';
    mode = 2;
};

function sacar_close() {
    sacar_span.style.transform = 'rotate(0deg)'
    sacar.style.height = '0px';
    mode = 3;
}

function pix_open() {
    pix.style.height = '1000px';
    mode = 4
}

function pix_close() {
    pix.style.height = '0px';
    mode = 3
}

depos_btn.addEventListener('click', ()=>{
    if (mode == 0) {
        depos_open();
    } else if (mode == 1) {
        depos_close();
    } else if (mode == 2) {
        setTimeout(function() {
            depos_open();
        }, 350);
        sacar_close();
    } else if (mode == 4) {
        setTimeout(function() {
            depos_open();
        }, 350);
        sacar_close();
        pix_close();
    } else {
        depos_open();
    };
});

sacar_btn.addEventListener('click', ()=>{
    if (mode == 0) {
        sacar_open();
    } else if (mode == 1) {
        setTimeout(function() {
            sacar_open();
        }, 350);
        depos_close();
    } else if (mode == 2) {
        sacar_close();
    } else if (mode == 4) {
        sacar_close();
        pix_close();
    }
    else {
        sacar_open();
    };
});

pix_btn.addEventListener('click', ()=>{
    pix_open();
});

copy_btn.addEventListener('click', ()=> {
    setTimeout(function() {
        copy.style.height = '0px';
    }, 2000);
    copy.style.height = '30px';
    navigator.clipboard.writeText(chave.textContent);
});
