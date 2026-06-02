// Autoplay confiável para mobile (iOS + Android)
(function() {
    'use strict';

    var v = document.querySelector('.form-bg-video');
    if (!v) return;

    // Garante muted (crítico para autoplay sem interação)
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    var retries = 0;

    function play() {
        v.muted = true;
        var p = v.play();
        if (p && p.catch) {
            p.catch(function() {
                // Retry até 20x com intervalo crescente
                if (retries < 20) {
                    retries++;
                    setTimeout(play, retries * 200);
                }
            });
        }
    }

    // Tenta em cada estágio de carregamento do vídeo
    v.addEventListener('loadeddata', play);
    v.addEventListener('canplay', play);
    v.addEventListener('canplaythrough', play);

    // Tenta quando a página carregar
    window.addEventListener('load', play);

    // Fallback: interação do usuário
    ['touchstart', 'click', 'scroll'].forEach(function(evt) {
        document.addEventListener(evt, play, { passive: true, once: true });
    });

    // Retoma ao voltar para a aba
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) play();
    });

    // Tentativa imediata
    play();

})();