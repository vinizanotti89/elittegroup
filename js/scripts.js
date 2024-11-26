// Trás a tela do formulário oculta por padrão e quando chamado aparece
const form = document.querySelector(".formulario-");
const masc = document.querySelector(".mascara-formulario");
const closeButtonForm = document.getElementById("close-form");

if (closeButtonForm) {
    closeButtonForm.addEventListener("click", function() {
        hiddenmasc(); // Função para esconder o formulário
    });
}

function showForm() {
    masc.style.visibility = "visible"; // Mostra a máscara
    form.style.transition = "left 1.5s ease-in-out"; // Anima a entrada
    form.style.left = "50%"; // Centraliza o formulário horizontalmente
    form.style.transform = "translateX(-50%)"; // Centraliza efetivamente, considerando a largura
}

function hiddenmasc() {
    masc.style.visibility = "hidden"; // Esconde a máscara
    form.style.transition = "none"; // Remove a transição
    form.style.left = "-100%"; // Move o formulário para fora da tela (escondido)
}

// Garantir que o formulário comece oculto ao carregar a página
window.addEventListener('load', () => {
    form.style.left = "-100%";  // Começa fora da tela
});

// Função para fechar o formulário ao clicar fora
masc.addEventListener('click', (e) => {
    // Verifica se o clique foi fora do conteúdo do formulário
    if (!form.contains(e.target)) {
        hiddenmasc(); // Fecha o formulário
    }
});




// Função para inicializar ou destruir o carrossel com base no tamanho da tela
function adjustCarousel() {
    console.log("Carregado adjustCarousel")
    const width = $(window).width();

        if (!$('.carousel').hasClass('initialized')) {
            $('.carousel').carousel({
                interval: 5000,  // Tempo de transição automática (5 segundos)
            }).addClass('initialized');
        }

        // Função de navegação manual
        $('.carousel-control-prev').click(function() {
            $('.carousel').carousel('prev');
        });

        $('.carousel-control-next').click(function() {
            $('.carousel').carousel('next');
        });
        
        // Garante que o carrossel seja visível
        $('#carouselExampleControls').show();

    }

// Chama a função de ajuste do carrossel na inicialização da página
$(document).ready(function() {
    console.log("Carousel foi chamado")
    adjustCarousel(); // Ajuste no carregamento da página

});



// Função para abrir o popup com as informações
function openPopup(serviceId) {
    console.log("Abrindo popup para o serviço:", serviceId); // Log para verificar o serviceId

    // Função para esconder todos os textos de serviços
    const allServices = document.querySelectorAll('.service-text');
    console.log("Escondendo todos os textos de serviços...", allServices); // Log para ver os serviços que serão ocultados
    
    allServices.forEach(service => {
        service.classList.add('hidden'); // Adiciona a classe hidden para esconder todos os textos
    });

    // Mostra o texto do serviço no popup
    const service = document.getElementById(serviceId);
    if (service) {
        console.log("Serviço encontrado:", service);

        // Exibe o conteúdo do serviço apenas no popup, não na página
        const popup = document.getElementById("popup");
        const popupText = document.getElementById("popup-text");

        // Limpa o conteúdo anterior do popup (se houver)
        popupText.innerHTML = ''; 

        // Pega o conteúdo da descrição do serviço
        const serviceContent = service.innerHTML;

        // Adiciona o conteúdo do serviço no popup
        popupText.innerHTML = serviceContent;

        // Exibe o popup
        popup.style.display = 'flex';
        console.log("Popup exibido");
    }
}
 
// Função para fechar o popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Fecha o popup
}

// Adiciona o evento de clique a cada botão de serviço
const buttons = document.querySelectorAll('.button-services');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const serviceId = e.target.closest('button').getAttribute('data-target');
        openPopup(serviceId); // Chama a função passando o ID do serviço
    });
});

// Adiciona evento ao botão de fechar do popup
const closeButtonPopup = document.getElementById("close-popup");
if (closeButtonPopup) {
    closeButtonPopup.addEventListener("click", closePopup); // Ao clicar no botão de fechar, chama a função closePopup
}

// Função para fechar o popup quando clicar fora do conteúdo
const popup = document.getElementById("popup");
if (popup) {
    popup.addEventListener("click", (e) => {
        // Verifica se o clique foi no fundo (não no conteúdo)
        if (e.target === popup) {
            closePopup(); // Fecha o popup
        }
    });
}




// Função para alternar o vídeo
function alternarVideos(videoElement) {
    const fontes = videoElement.getElementsByTagName('source');
    let currentSourceIndex = -1;

    // Encontrar o índice da fonte atual
    for (let i = 0; i < fontes.length; i++) {
        if (fontes[i].src === videoElement.currentSrc) {
            currentSourceIndex = i;
            break;
        }
    }

    // Se o índice da fonte atual for encontrado, altere para a próxima
    if (currentSourceIndex >= 0) {
        // Alterna para o próximo vídeo
        const nextSourceIndex = (currentSourceIndex + 1) % fontes.length; // Alterna para o próximo vídeo

        // Atualiza o src do vídeo diretamente (sem mexer nas fontes)
        videoElement.src = fontes[nextSourceIndex].src;

        // Recarrega o vídeo e começa a reprodução
        videoElement.load();   // Força o carregamento da nova fonte
        videoElement.play();   // Reproduz o próximo vídeo
    }
}

// Adicionar ouvintes de evento aos vídeos
document.querySelectorAll('.video-mobile').forEach((video) => {
    video.addEventListener('ended', () => {
        alternarVideos(video);
    });
});

document.querySelectorAll('.video').forEach((video) => {
    video.addEventListener('ended', () => {
        alternarVideos(video);
    });
});

