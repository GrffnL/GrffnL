const animeAudio = document.querySelector('#animeAudio');
const animeAudioToggle = document.querySelector('#animeAudioToggle');

if (animeAudio && animeAudioToggle) {
  const setAnimeAudioState = (isPlaying) => {
    animeAudioToggle.classList.toggle('is-on', isPlaying);
    animeAudioToggle.setAttribute('aria-pressed', String(isPlaying));
    animeAudioToggle.querySelector('i').className = isPlaying ? 'bi bi-volume-up-fill' : 'bi bi-volume-mute-fill';
  };
  animeAudio.volume = .12;
  animeAudio.play().then(() => setAnimeAudioState(true)).catch(() => setAnimeAudioState(false));
  animeAudioToggle.addEventListener('click', () => {
    if (animeAudio.paused) animeAudio.play().then(() => setAnimeAudioState(true)).catch(() => setAnimeAudioState(false));
    else { animeAudio.pause(); setAnimeAudioState(false); }
  });
}
