let wcont = document.querySelector('.welcome-cont');
document.querySelector('.wc-play').addEventListener('click',function () {
    audio.play();
    playPauseButton.classList.add('paused');
    document.querySelector('.wc-play').classList.add('out');
    document.querySelector('.wc-title').classList.add('out');
    bottom = document.querySelector('.wc-text').classList.add('out');
    document.querySelector('.main-content').style.opacity = '1';
    setTimeout(function () {
        wcont.style.display = "none";
    },900)
    /* temporary script by ani */
    document.querySelector('.part-1').classList.add('active');
});
