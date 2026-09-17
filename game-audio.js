const gameAudio = document.querySelector('#gameAudio');
const gameAudioToggle = document.querySelector('#gameAudioToggle');

if (gameAudio && gameAudioToggle) {
  const setGameAudioState = (isPlaying) => {
    gameAudioToggle.classList.toggle('is-on', isPlaying);
    gameAudioToggle.setAttribute('aria-pressed', String(isPlaying));
    gameAudioToggle.querySelector('i').className = isPlaying ? 'bi bi-volume-up-fill' : 'bi bi-volume-mute-fill';
  };
  gameAudio.volume = .24;
  gameAudio.play().then(() => setGameAudioState(true)).catch(() => setGameAudioState(false));
  gameAudioToggle.addEventListener('click', () => {
    if (gameAudio.paused) gameAudio.play().then(() => setGameAudioState(true)).catch(() => setGameAudioState(false));
    else { gameAudio.pause(); setGameAudioState(false); }
  });
}
