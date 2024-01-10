window.onload = function(){
    document.querySelector(".loader").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"; 
    }, 1000);

// Evento de clique para copiar a chave PIX
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText('00020126330014BR.GOV.BCB.PIX0111060474669585204000053039865802BR5918JAIR WILLIAN CLASS6009SAO PAULO622605221TYBUtq3sexyHmJIzAKPQa6304E7A9');
    customAlert('Chave PIX copiada com sucesso!');
});

// Função para exibir um alerta personalizado
function customAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.style.position = 'fixed';
    alertBox.style.bottom = '20px';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
    alertBox.style.color = 'white';
    alertBox.style.padding = '10px 20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    alertBox.style.zIndex = '1000';
    alertBox.style.animation = 'fadeout 2s ease forwards';
    alertBox.style.animationDelay = '2s';
    document.body.appendChild(alertBox);
    
    // Remover alerta após a animação
    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 2000);
}

// Estilos para animação fadeout
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeout {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
`;
document.head.appendChild(style);

     // Seleciona o vídeo e o botão
    const video = document.querySelector("video");
    const videoControlButton = document.getElementById("videoControl");

     // Função para alternar o estado de reprodução do vídeo
    function toggleVideoPlayback() {
        if (video.paused) {
            video.play();
            videoControlButton.textContent = 'Pausar';
        } else {
            video.pause();
            videoControlButton.textContent = 'Reproduzir';
        }
    }

     // Adiciona o evento de clique no botão
    videoControlButton.addEventListener('click', toggleVideoPlayback);
};
