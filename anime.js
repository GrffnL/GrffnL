const username = 'LeodythsGrffnlrd';
const charactersGrid = document.querySelector('#charactersGrid');
const animeCarouselInner = document.querySelector('#animeCarouselInner');
const animeCarouselIndicators = document.querySelector('#animeCarouselIndicators');
const syncState = document.querySelector('#animeSyncState');
const fallbackAnime = [
  { mal_id: 31240, title: 'Re:Zero kara Hajimeru Isekai Seikatsu', score: '10.0', image: 'https://cdn.myanimelist.net/images/anime/11/79410l.jpg' },
  { mal_id: 56653, title: 'BanG Dream! Ave Mujica', score: '10.0', image: 'https://cdn.myanimelist.net/images/anime/1181/148235.jpg' },
  { mal_id: 38826, title: 'Tenki no Ko', score: '9.0', image: 'https://cdn.myanimelist.net/images/anime/1880/101146.jpg' },
  { mal_id: 28851, title: 'Koe no Katachi', score: '9.0', image: 'https://cdn.myanimelist.net/images/anime/1122/96435l.jpg' },
  { mal_id: 55888, title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2', score: '9.0', image: 'https://cdn.myanimelist.net/images/anime/1876/141251.jpg' },
  { mal_id: 48583, title: 'Shingeki no Kyojin: The Final Season Part 2', score: '9.0', image: 'https://cdn.myanimelist.net/images/anime/1948/120625.jpg' },
  { mal_id: 52215, title: 'Chi Chikyuu no Undou ni Tsuite', score: '9.0', image: 'https://cdn.myanimelist.net/images/anime/1749/145922.jpg' },
  { mal_id: 19, title: 'Monster', score: '9.0', image: 'https://cdn.myanimelist.net/images/anime/10/18793.jpg' },
  { mal_id: 55791, title: 'Oshi no Ko 2nd Season', score: '9.0', image: 'https://cdn.myanimelist.net/images/anime/1006/143302.jpg' },
  { mal_id: 1735, title: 'Naruto: Shippuden', score: '9.0', image: 'https://cdn.myanimelist.net/images/anime/1565/111305.jpg' }
];
const fallbackCharacters = [
  { name: 'Misumi Uika', wiki: 'bandori', page: 'Misumi Uika', image: 'https://i.pinimg.com/236x/be/76/e3/be76e3cddbe80ff96ae521deb037ffad.jpg' }, { name: 'Heero Yuy', wiki: 'gundam', page: 'Heero Yuy', image: 'https://i.pinimg.com/236x/01/55/a2/0155a26956f631c492c5a4464912ba5f.jpg' }, { name: 'Itachi Uchiha', wiki: 'naruto', page: 'Itachi Uchiha', image: 'https://i.pinimg.com/236x/c8/eb/ef/c8ebef1fabc21dd3d4f4d6191eb90ae1.jpg' }, { name: 'Shouya Ishida', wiki: 'koenokatachi', page: 'Shoya Ishida', image: 'https://i.pinimg.com/236x/f1/c9/9c/f1c99c9510f4713b2f0175581a17eb8a.jpg' }, { name: 'Yato', wiki: 'noragami', page: 'Yato', image: 'https://i.pinimg.com/236x/2d/4e/a4/2d4ea4aa63b0e330f6cc32c9495a2c64.jpg' },
  { name: 'Eren Yeager', wiki: 'attackontitan', page: 'Eren Yeager', image: 'https://i.pinimg.com/236x/f7/c2/44/f7c24438accf812d572fa3c7fb7f1dee.jpg' }, { name: 'Chihaya Anon', wiki: 'bandori', page: 'Chihaya Anon', image: 'https://i.pinimg.com/236x/72/10/82/721082710de7b05d9d787be9ca863695.jpg' }, { name: 'Krai Andrey', wiki: 'strange-grief-wants-to-retire', page: 'Krai Andrey', image: 'https://i.pinimg.com/236x/73/de/c2/73dec250168e508e513d3c7832a757ab.jpg' }, { name: 'Makoto Yuki', wiki: 'megamitensei', page: 'Makoto Yuki', image: 'https://i.pinimg.com/236x/cc/89/d1/cc89d1dc36917addf71f03268bf973c1.jpg' }, { name: 'Johan Liebert', wiki: 'obluda', page: 'Johan Liebert', image: 'https://i.pinimg.com/236x/7b/e0/76/7be0762529e4fe852cc2a73d1ab68283.jpg' }
];
const characterAssets = {
  'Misumi Uika': 'assets/characters/misumi-uika.jpg', 'Heero Yuy': 'assets/characters/heero-yuy.jpg', 'Itachi Uchiha': 'assets/characters/itachi-uchiha.jpg', 'Shouya Ishida': 'assets/characters/shouya-ishida.jpg', 'Yato': 'assets/characters/yato.jpg',
  'Eren Yeager': 'assets/characters/eren-yeager.jpg', 'Chihaya Anon': 'assets/characters/chihaya-anon.jpg', 'Krai Andrey': 'assets/characters/krai-andrey.jpg', 'Makoto Yuki': 'assets/characters/makoto-yuki.jpg', 'Johan Liebert': 'assets/characters/johan-liebert.jpg'
};
const characterSources = Object.fromEntries(fallbackCharacters.map((character) => [character.name, character]));

function renderCharacters(characters) {
  charactersGrid.innerHTML = characters.slice(0, 10).map((character) => { const source = characterSources[character.name] || character; const image = characterAssets[character.name] || character.image; return `<a class="character-card" href="https://${source.wiki || 'fandom'}.fandom.com/wiki/${encodeURIComponent(source.page || character.name)}" target="_blank" rel="noreferrer"><div class="character-image${image ? '' : ' image-missing'}">${image ? `<img src="${image}" alt="${character.name}" onerror="this.remove();this.parentElement.classList.add('image-missing');this.parentElement.innerHTML='<span>${character.name.charAt(0)}</span>'">` : `<span>${character.name.charAt(0)}</span>`}</div><div class="character-name">${character.name}</div></a>`; }).join('');
}

function renderAnime(anime) {
  const slides = [];
  for (let index = 0; index < anime.length; index += 3) slides.push(anime.slice(index, index + 3));
  animeCarouselInner.innerHTML = slides.map((slide, slideIndex) => `<div class="carousel-item${slideIndex === 0 ? ' active' : ''}"><div class="anime-slide-row">${slide.map((item, itemIndex) => `<a class="anime-favorite-card" href="https://myanimelist.net/anime/${item.mal_id}" target="_blank" rel="noreferrer"><div class="anime-favorite-cover${item.image ? '' : ' image-missing'}">${item.image ? `<img src="${item.image}" alt="Cover ${item.title}" onerror="this.remove();this.parentElement.classList.add('image-missing');this.parentElement.insertAdjacentHTML('afterbegin','<span>${item.title}</span>')">` : `<span>${item.title}</span>`}<span class="anime-rank">0${slideIndex * 3 + itemIndex + 1}</span></div><div class="anime-favorite-info"><p class="mono-label">MAL FAVORITE</p><h3>${item.title}</h3><div class="anime-score"><i class="bi bi-star-fill"></i> ${item.score || '—'} / 10</div></div></a>`).join('')}</div></div>`).join('');
  animeCarouselIndicators.innerHTML = slides.map((_, index) => `<button type="button" data-bs-target="#animeCarousel" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-label="Slide ${index + 1}"></button>`).join('');
}

async function loadCharacterImage(character) {
  try {
    const response = await fetch(`https://${character.wiki}.fandom.com/api.php?action=query&titles=${encodeURIComponent(character.page)}&prop=pageimages&pithumbsize=400&format=json&origin=*`);
    const pages = (await response.json()).query?.pages || {};
    const page = Object.values(pages)[0];
    return { ...character, image: characterAssets[character.name] || character.image || page?.thumbnail?.source };
  } catch (error) { return character; }
}

async function loadCharacterImages(characters) {
  return Promise.all(characters.map(loadCharacterImage));
}

async function syncFavorites() {
  syncState.textContent = 'SYNCING...';
  try {
    const response = await fetch(`https://api.jikan.moe/v4/users/${username}/favorites`);
    if (!response.ok) throw new Error('Could not load favorites');
    const favorites = (await response.json()).data;
    const anime = (favorites.anime || []).map((item) => ({ mal_id: item.mal_id, title: item.title, score: item.score, image: item.images?.jpg?.large_image_url || item.images?.jpg?.image_url }));
    const characters = (favorites.characters || []).map((item) => ({ mal_id: item.mal_id, name: item.name, image: item.images?.jpg?.image_url || item.images?.jpg?.small_image_url }));
    const selectedAnime = anime.length ? anime : fallbackAnime;
    renderAnime(selectedAnime);
    renderCharacters(await loadCharacterImages(characters.length ? characters : fallbackCharacters));
    syncState.textContent = 'LIVE FROM MYANIMELIST';
  } catch (error) {
    renderAnime(fallbackAnime);
    renderCharacters(await loadCharacterImages(fallbackCharacters));
    syncState.textContent = 'CURATED FROM MAL FAVORITES';
  }
}

document.querySelector('#year').textContent = new Date().getFullYear();
window.addEventListener('scroll', () => document.querySelector('#siteNav').classList.toggle('scrolled', window.scrollY > 24));
document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  const menu = document.querySelector('#navMenu');
  if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));

renderAnime(fallbackAnime);
renderCharacters(fallbackCharacters);
syncFavorites();
