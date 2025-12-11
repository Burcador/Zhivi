const CACHE_NAME = 'zhivi-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './files/favicon-64.png',
  './files/icon-192.png',
  './files/icon-192.webp',
  './files/icon-512.png',
  './files/icon-512.webp',
  './files/Easy_Lemon_Kevin_MacLeod.mp3',
  './files/garuda1982__autumn-morning-in-pine-forest-with-red-deer-and-crows.mp3',
  './files/Sovereign_Quarter_Kevin_MacLeod.mp3',
  './files/Adam-Saunders-Mark-Cousins-An-Age-Of-Innocence-A_Klasha.opus',
  './files/alex-productions-ascend_Pickuper.opus',
  './files/alex-productions-lovely_Sonya.opus',
  './files/An-Epic-Story_Sonya.opus',
  './files/Carefree_Kevin-MacLeod.opus',
  './files/Carl-Utbult-Cloud-Flying_Sonya.opus',
  './files/Clair-Marlo-Cowboy-Trapper_Tanya.opus',
  './files/Cold_Funk-Funkorama-Kevin_MacLeod.opus',
  './files/Continue-Life_Kevin-MacLeod_Klasha.opus',
  './files/Cooking_Show_Polya.opus',
  './files/Dark_Ages_Klasha.opus',
  './files/Easy_Lemon_Kevin_MacLeod.opus',
  './files/Esli_b_garmoshka.opus',
  './files/Fretless_Kevin_MacLeod_Sonya.opus',
  './files/garuda1982__autumn-morning-in-pine-forest-with-red-deer-and-crows.opus',
  './files/giddster__forest-cabin-summer-rain-3.opus',
  './files/Good-Times_Alex-Productions_Klasha.opus',
  './files/Happy_and_Joyful_Children–Free_Music_Polya.opus',
  './files/Happy_Upbeat_Ukulele_Polya.opus',
  './files/Harmony-of-the-Earth_Alex-Productions_.opus',
  './files/Harmony-of-the-Earth_Alex-Productions.opus',
  './files/Heartbreaking_Kevin_MacLeod_Death.opus',
  './files/Impromptu_in_Blue_Kevin_MacLeod.opus',
  './files/Journey_Sonya.opus',
  './files/Love_Story_4_Klasha.opus',
  './files/Love-Story-part-5_Polya.opus',
  './files/Luminbird-Secret-Room_Sonya_.opus',
  './files/Marsh_entuziastov.opus',
  './files/Matrika-Dark-City_Tanya.opus',
  './files/Matti-Kankkonen-Harvest-Whim_Sonya.opus',
  './files/Max-van-Thun-Life-is-Good_Sonya.opus',
  './files/Michael-Garcia-Sebastian-Barnaby-Robertson-Digital-Dawn_Peschera.opus',
  './files/Midday_Dance_Kevin_MacLeod_Neutral_End.opus',
  './files/Monument-Music-Ambition_sonya.opus',
  './files/Monument-Music-Majestic-Whispers_Sonya.opus',
  './files/Music_for_Manatees_Kevin_MacLeod.opus',
  './files/Naama-Zafran-Earth_Tanya.opus',
  './files/Nature_MaxKoMusic_Klasha.opus',
  './files/Neozoic-How-You-Roll.opus',
  './files/Opus_One-Audionautix_Klasha.opus',
  './files/Pecan-Pie-Master-Of-Illusion.opus',
  './files/Phillip-John-Gregory-Power-Play.opus',
  './files/Playful_Mood_Sonya_.opus',
  './files/Powerful-Emotional-Trailer_Polya.opus',
  './files/Powerful-Trap_Tanya.opus',
  './files/Prelude_No.23-Chris_Zabriskie.opus',
  './files/Prelude_No.6-Chris_Zabriskie.opus',
  './files/roa-music-innocence-lo-fi-version_Klasha.opus',
  './files/roa-music-walk-around_Polya.opus',
  './files/Sovereign_Kevin_MacLeod_end.opus',
  './files/Sovereign_Quarter_Kevin_MacLeod.opus',
  './files/Two_Together_Kevin_MacLeod.opus',
  './files/Ukulele_and_Piano_Polya.opus',
  './files/Vesenniy_marsh.opus',
  './files/Vratar.opus',
  './files/Warm-Memories-Emotional-Inspiring-Piano_Sonya.opus'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
