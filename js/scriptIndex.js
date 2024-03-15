function FacaParte() {
    window.location.href = "formulario.html";
}

// FUNÇÃO PARA DARK E LIGHT MODE

var modoEscuroAtivado = false;

function Modos() {
    var body = document.body;
    var header = document.querySelector('.header');
    var imagemModos = document.querySelector('.modos');
    var tagsA = document.getElementsByTagName('a');
    var logoModos = document.querySelector('.logo');
    var liTags = document.querySelectorAll('.texto_principal_banner li, .texto_menor_banner li, .bloco_areas, .header_tecnologias');

    // Função para adicionar a classe fadeIn
    function adicionarFadeIn(elemento) {
        // Verifica se a opacidade não é 0 antes de aplicar a transição
        if (elemento.style.opacity !== '0') {
            elemento.style.transition = 'opacity 0.5s ease-in-out';
        }
        elemento.style.opacity = 1;
    }

    // Função para adicionar a classe fadeOut
    function adicionarFadeOut(elemento) {
        elemento.style.transition = 'opacity 0.5s ease-in-out';
        elemento.style.opacity = 0;
    }

    // Função para trocar a imagem e aplicar a animação de fadeIn e fadeOut
    function trocarImagemComFade(elemento, novoSrc) {
        adicionarFadeOut(elemento);
        setTimeout(function () {
            elemento.src = novoSrc;
            adicionarFadeIn(elemento);
        }, 500);
    }

    if (!modoEscuroAtivado) {
        // Mudanças para o modo escuro
        body.style.backgroundColor = "#212121";
        header.style.backgroundColor = "#424242";

        for (var i = 0; i < tagsA.length; i++) {
            tagsA[i].style.color = 'white';
        }

        for (var j = 0; j < liTags.length; j++) {
            liTags[j].style.color = 'white';
        }

        // Troca a imagem e aplica fadeIn e fadeOut
        trocarImagemComFade(imagemModos, './imagens/mododark.png');
        trocarImagemComFade(logoModos, './imagens/logoDark.png');
    } else {
        // Restaurar ao modo original
        body.style.backgroundColor = "";
        header.style.backgroundColor = "";

        for (var i = 0; i < tagsA.length; i++) {
            tagsA[i].style.color = ''; // Voltar à cor original ou remova esta linha
        }

        for (var j = 0; j < liTags.length; j++) {
            liTags[j].style.color = '';
        }

        // Troca a imagem e aplica fadeIn e fadeOut
        trocarImagemComFade(imagemModos, './imagens/modolight.png');
        trocarImagemComFade(logoModos, './imagens/logolight.png');
    }

    modoEscuroAtivado = !modoEscuroAtivado;
}

// FIM DA FAUNÇÃO DE DARK E LIGHT MODE

// Função para mostrar/ocultar elementos e ajustar o font-weight dos <li>
function toggleElements(classesAMostrar, selectedLiId) {
    // Iterar sobre todos os elementos
    document.querySelectorAll('.html_img, .js_img, .css_img, .kotlin_img, .mysql_img, .bootstrap_img, .sqlserver, .python_img')
        .forEach(function (elemento) {
            // Mostrar elementos com classes específicas, ocultar os outros
            elemento.style.display = classesAMostrar.includes('.' + elemento.className) ? 'block' : 'none';
        });

    // Ajustar o font-weight para os elementos do <li> com base no ID fornecido
    var liFrontend = document.getElementById('frontendLi');
    var liBackend = document.getElementById('backendLi');
    var liBanco = document.getElementById('bancoLi');

    // Define o estilo do elemento com ID 'liFrontend' com base na condição.
    liFrontend.style.fontWeight = (selectedLiId === 'frontendLi') ? '600' : '400';

    // Define o estilo do elemento com ID 'liBackend' com base na condição.
    liBackend.style.fontWeight = (selectedLiId === 'backendLi') ? '600' : '400';

    // Define o estilo do elemento com ID 'liBanco' com base na condição.
    liBanco.style.fontWeight = (selectedLiId === 'bancoLi') ? '600' : '400';

}

// Função para filtrar e destacar elementos relacionados ao Back-end
function ChamarBack() {
    var classesAMostrar = ['.kotlin_img', '.bootstrap_img', '.python_img'];
    toggleElements(classesAMostrar, 'backendLi'); // Passa o ID do <li> correspondente
}

// Função para filtrar e destacar elementos relacionados ao Front-end
function ChamarFront() {
    var classesAMostrar = ['.html_img', '.js_img', '.css_img'];
    toggleElements(classesAMostrar, 'frontendLi'); // Passa o ID do <li> correspondente
}

// Função para filtrar e destacar elementos relacionados ao Banco de Dados
function ChamarBanco() {
    var classesAMostrar = ['.mysql_img', '.sqlserver'];
    toggleElements(classesAMostrar, 'bancoLi'); // Passa o ID do <li> correspondente
}
