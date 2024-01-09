window.onload = function(){
    document.querySelector(".loader").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"; 
    }, 1000);

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



