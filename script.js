// Esse código faz com que um botão de rolagem pra home apareça quando navegamos pelo nosso site

document.addEventListener("DOMContentLoaded", function () {
    var botao_voltar_topo = document.querySelector('.botao-voltar-home');

    window.addEventListener('scroll', function () {

        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) { // 1000 são quantos pixels ocorrem quando rolamos pra baixo
        botao_voltar_topo.style.display = 'block';

        } else {

        botao_voltar_topo.style.display = 'none';
        }

    });

        botao_voltar_topo.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
