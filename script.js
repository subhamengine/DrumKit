function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('play');
    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('play');
}
function playOnClick(e){
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    const key = document.querySelector(`.key[data-key="${e}"]`);
    if (!audio) return;

    key.classList.add('play');
    audio.currentTime = 0;
    audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);