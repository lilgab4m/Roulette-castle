const depositar = document.getElementById('depositar');
const sacar = document.getElementById('sacar');
const pix = document.getElementById('pix');
const depos_btn = document.getElementById('depos_btn');
const sacar_btn = document.getElementById('sacar_btn');
const depos_span = document.getElementById('depos_span');
const sacar_span = document.getElementById('sacar_span');
const pix_btn = document.getElementById('pix_btn');
const copy_btn = document.getElementById('copy');
const copy = document.getElementById('copied');
const chave = document.getElementById('chave');
var mode_Sacar = 0;

function depos_open() {
    depos_span.style.transform = 'rotate(180deg)'
    depositar.style.height = '400px';
    mode_Sacar = 1;
};

function depos_close() {
    depos_span.style.transform = 'rotate(0deg)'
    depositar.style.height = '0px';
    mode_Sacar = 0;
};

function sacar_open() {
    sacar_span.style.transform = 'rotate(180deg)'
    sacar.style.height = '550px';
    mode_Sacar = 2;
};

function sacar_close() {
    sacar_span.style.transform = 'rotate(0deg)'
    sacar.style.height = '0px';
    mode_Sacar = 3;
}

function pix_open() {
    pix.style.height = '1000px';
    mode_Sacar = 4
}

function pix_close() {
    pix.style.height = '0px';
    mode_Sacar = 3
}

depos_btn.addEventListener('click', ()=>{
    if (mode_Sacar == 0) {
        depos_open();
    } else if (mode_Sacar == 1) {
        depos_close();
    } else if (mode_Sacar == 2) {
        setTimeout(function() {
            depos_open();
        }, 350);
        sacar_close();
    } else if (mode_Sacar == 4) {
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
    if (mode_Sacar == 0) {
        sacar_open();
    } else if (mode_Sacar == 1) {
        setTimeout(function() {
            sacar_open();
        }, 350);
        depos_close();
    } else if (mode_Sacar == 2) {
        sacar_close();
    } else if (mode_Sacar == 4) {
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
