const form = document.querySelector(".formulario-")
const masc = document.querySelector(".mascara-formulario")


function showForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    masc.style.visibility = "visible"
}

function hiddenmasc() {
    masc.style.visibility = "hidden"
    form.style.left = "-320px"
}   


// // Seleciona todos os botões com a classe .button-services
// const buttons = document.querySelectorAll('.button-services');

// // Adiciona o evento de clique a cada botão
// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         // Obtém o ID do parágrafo correspondente ao botão
//         const targetId = button.getAttribute('data-target');
//         const targetText = document.getElementById(targetId);

//         // Alterna a visibilidade do parágrafo (texto)
//         if (targetText.style.display === 'none' || targetText.style.display === '') {
//             targetText.style.display = 'block';
//         } else {
//             targetText.style.display = 'none';
//         }
//     });
// });

// Inicializando o carrossel
$('.carousel').carousel({
    interval: 5000,  // Tempo de transição automática (5 segundos)
});

// Função de navegação manual
$('.carousel-control-prev').click(function() {
    $('.carousel').carousel('prev');
});

$('.carousel-control-next').click(function() {
    $('.carousel').carousel('next');
});


// Função para abrir o popup com as informações
function openPopup(serviceName) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");

    // Mapeamento dos serviços com as informações
    const services = {
        "servico-portaria": "Informações sobre o serviço de Portaria 24h.",
        "servico-vigias": "Informações sobre o serviço de Vigilantes.",
        "controlador-acesso": "Informações do controlador de acesso",
        "servico-monitoramento": "Informações sobre o serviço de Monitoramento de Alarmes.",
        "servico-cftv": "Informações sobre o serviço de CFTV (câmeras).",
        "rondas-ostensivas": "Informações de Rondas Ostensivas do Gordinho FODA",
        "atendimento-24h": "Informações e atendimento 24-horas",
        "respostas-rapidas": "Informações de respostas altamente rápidas da galera de plantão",
        "servico-personalizado": "Não enccontrou o que procurava? Nós personalizamos um serviço especicamente para sua necessidade, montamos um projeto de acordo com a necessiddade de cada cliente, trazendo sempre uma solução de confiança com um preço justo de verdade!"
    };

    // Definir o texto do popup
    popupText.textContent = services[serviceName];

    // Exibir o popup
    popup.style.display = "flex";
}

// Função para fechar o popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Seleciona todos os botões de serviço
const buttons = document.querySelectorAll('.button-services');

// Adiciona o evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const serviceName = button.getAttribute('data-target');
        openPopup(serviceName);
    });
});
