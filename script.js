var typed = new Typed('#Meta', {
    strings: ["Criando soluções web que unem inovação, design e performance."], // texto
    typeSpeed: 20, // velocidade digitando
    backSpeed: 20, // velocidade apagando
    loop: true // fica repetindo

});


//efeito aparecer e desaparecer e trocar desen.web por enge.sof
let titulo = document.getElementById("MinhaProf");
setInterval(() => {
    // Faz desaparecer
    titulo.style.opacity = 0;

    // Depois de meio segundo, troca o texto e reaparece
    setTimeout(() => {
        titulo.textContent = titulo.textContent === "Desenvolvedor Web"
            ? "Analista de Sistemas" //Se sim → troca para "Engenheiro de Software".
            : "Desenvolvedor Web";  //Se não → troca para "Desenvolvedor Web".
        titulo.style.opacity = 1;
    }, 500); // tempo igual ao transition do CSS
}, 3000);



//funcao para menu hamburguer
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close_white_36dp.svg";
    }
}