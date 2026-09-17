const games = {
  'persona-3-reload': {
    title: 'Persona 3 Reload', type: 'JRPG / SOCIAL SIM', score: '9.4', cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2161700/library_600x900_2x.jpg', fallbackCover: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2161700/library_600x900.jpg', youtube: 'https://www.youtube.com/results?search_query=Persona+3+Reload', description: 'A stylish midnight hour, a tower that reaches the sky, and friendships that make an impossible year feel human.', tags: ['story rich', 'turn-based', 'melancholic'], source: 'https://store.steampowered.com/app/2161700/Persona_3_Reload/'
  },
  arknights: {
    title: 'Arknights', type: 'TACTICAL RPG / ANIME', score: '9.1', cover: 'https://webusstatic.yo-star.com/web-cms-test/upload/content/2026/08/17/1xyKqHLR.jpg?x-oss-process=image/resize,p_50', youtube: 'https://www.youtube.com/results?search_query=Arknights', description: 'Operators, dystopian cities, and a soundtrack that turns every tactical decision into a little piece of theatre.', tags: ['strategy', 'tower defense', 'operators'], source: 'https://www.arknights.global/'
  },
  'silent-hill-2-remake': {
    title: 'Silent Hill 2 Remake', type: 'SURVIVAL HORROR / REMAKE', score: '9.7', cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2124490/library_600x900_2x.jpg', youtube: 'https://www.youtube.com/results?search_query=Silent+Hill+2+Remake', description: 'Fog, guilt, rust, and the strange intimacy of a town that always seems to know exactly why you came.', tags: ['psychological', 'horror', 'fogbound'], source: 'https://store.steampowered.com/app/2124490/SILENT_HILL_2/'
  },
  'magical-girl-witch-trials': {
    title: 'Magical Girl Witch Trials', type: 'VISUAL NOVEL / MYSTERY', score: '8.8', cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3101040/library_600x900_2x.jpg', youtube: 'https://www.youtube.com/results?search_query=Magical+Girl+Witch+Trials', description: 'Bright transformations meet dark verdicts in a mystery where every promise, spell, and smile may be evidence.', tags: ['mystery', 'visual novel', 'witchy'], source: 'https://store.steampowered.com/app/3101040/Magical_Girl_Witch_Trials/'
  },
  'nier-replicant': {
    title: 'Nier Replicant', type: 'ACTION RPG / EXISTENTIAL', score: '9.5', cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1113560/library_600x900_2x.jpg', youtube: 'https://www.youtube.com/results?search_query=NieR+Replicant', description: 'A beautiful, aching journey about names, bodies, memory, and the impossible lengths we go to for someone we love.', tags: ['emotional', 'action', 'music'], source: 'https://store.steampowered.com/app/1113560/NieR_Replicant_ver122474487139/'
  },
  'shadow-of-the-colossus': {
    title: 'Shadow of the Colossus', type: 'ADVENTURE / COLOSSAL', score: '9.6', cover: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2621/Nn4IUORGlwf1p6NSbBqINU8j.png?w=940&thumb=false', youtube: 'https://www.youtube.com/results?search_query=Shadow+of+the+Colossus', description: 'An empty kingdom, a forbidden wish, and sixteen impossible silhouettes waiting at the edge of the world.', tags: ['exploration', 'minimal', 'mythic'], source: 'https://www.playstation.com/en-us/games/shadow-of-the-colossus/'
  },
  'fatal-frame-2': {
    title: 'Fatal Frame II: Crimson Butterfly REMAKE', type: 'SURVIVAL HORROR / REMAKE', score: '9.4', cover: 'assets/fatal.jpg', videoCover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3920610/f0ca97688410ecb4effbde0b77431443a5172cf8/header.jpg?t=1782174544', youtube: 'https://www.youtube.com/results?search_query=Fatal+Frame+II+Crimson+Butterfly+REMAKE', description: 'Twin sisters, a forgotten village, and a camera that reveals what the living world refuses to show.', tags: ['ghost story', 'japanese horror', 'exploration'], source: 'https://store.steampowered.com/app/3920610/FATAL_FRAME_II_Crimson_Butterfly_REMAKE/'
  }
};

const key = new URLSearchParams(window.location.search).get('game');
const game = games[key] || games['persona-3-reload'];
const detail = document.querySelector('#gameDetail');
document.title = `${game.title} // GrffnL`;
detail.innerHTML = `<section class="detail-hero container"><a class="back-link" href="games.html"><i class="bi bi-arrow-left"></i> back to library</a><div class="detail-grid"><div class="detail-cover-wrap"><img class="detail-cover" src="${game.cover}" alt="${game.title} cover" onerror="this.onerror=null;this.src='${game.fallbackCover || game.cover}'"><span class="detail-index">GAME / ${String(Object.keys(games).indexOf(key || 'persona-3-reload') + 1).padStart(2, '0')}</span></div><div class="detail-copy"><p class="kicker"><span class="pulse"></span> ${game.type}</p><div class="detail-heading"><h1>${game.title}</h1><span class="detail-score">${game.score}<small>/ 10</small></span></div><p class="detail-description">${game.description}</p><div class="detail-tags">${game.tags.map((tag) => `<span>${tag}</span>`).join('')}</div><a class="steam-link" href="${game.source}" target="_blank" rel="noreferrer">open official page <i class="bi bi-arrow-up-right"></i></a></div></div></section><section class="detail-video-section"><div class="container"><div class="detail-section-label"><span>TRAILER / GAMEPLAY</span><span>OFFICIAL YOUTUBE</span></div><a class="video-link" href="${game.youtube}" target="_blank" rel="noreferrer"><img src="${game.videoCover || game.cover}" alt="${game.title} video thumbnail" onerror="this.onerror=null;this.src='${game.cover}'"><span><i class="bi bi-youtube"></i> watch official videos on YouTube <i class="bi bi-arrow-up-right"></i></span></a></div></section>`;
document.querySelector('#year').textContent = new Date().getFullYear();
window.addEventListener('scroll', () => document.querySelector('#siteNav').classList.toggle('scrolled', window.scrollY > 24));
