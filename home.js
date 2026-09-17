const observer = new IntersectionObserver((entries, currentObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      currentObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
window.addEventListener('scroll', () => document.querySelector('#siteNav').classList.toggle('scrolled', window.scrollY > 24));
document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  const menu = document.querySelector('#navMenu');
  if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));

document.querySelectorAll('video[autoplay]').forEach((video) => {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  const startVideo = () => {
    if (!video.paused) return;
    video.play().catch(() => {});
  };

  video.addEventListener('loadedmetadata', startVideo, { once: true });
  video.addEventListener('canplay', startVideo, { once: true });
  startVideo();
});

const homeAudio = document.querySelector('#homeAudio');
const audioToggle = document.querySelector('#audioToggle');
if (homeAudio && audioToggle) {
  const setAudioState = (isPlaying) => {
    audioToggle.classList.toggle('is-on', isPlaying);
    audioToggle.setAttribute('aria-pressed', String(isPlaying));
    audioToggle.querySelector('i').className = isPlaying ? 'bi bi-volume-up-fill' : 'bi bi-volume-mute-fill';
  };
  homeAudio.volume = .28;
  homeAudio.play().then(() => setAudioState(true)).catch(() => setAudioState(false));
  audioToggle.addEventListener('click', () => {
    if (homeAudio.paused) homeAudio.play().then(() => setAudioState(true)).catch(() => setAudioState(false));
    else { homeAudio.pause(); setAudioState(false); }
  });
}

const hobbyText = document.querySelector('#hobbyText');
const hobbyLanguageToggle = document.querySelector('#hobbyLanguageToggle');
if (hobbyText && hobbyLanguageToggle) {
  const translations = {
    english: 'I do not have one specific hobby. I simply seek experiences and turn them into hobbies.',
    indonesian: 'Saya tidak memiliki hobi spesifik. Saya hanya ingin mencari pengalaman dan memanfaatkan pengalaman itu sebagai hobi.'
  };
  let language = 'english';
  hobbyLanguageToggle.addEventListener('click', () => {
    language = language === 'english' ? 'indonesian' : 'english';
    hobbyText.textContent = translations[language];
    hobbyLanguageToggle.setAttribute('aria-label', language === 'english' ? 'Change to English' : 'Ubah ke bahasa Indonesia');
    hobbyLanguageToggle.title = language === 'english' ? 'Change to English' : 'Ubah ke bahasa Indonesia';
  });
}
