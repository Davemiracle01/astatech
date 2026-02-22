/**
 * ╔══════════════════════════════════════════════════╗
 * ║   A.S.T.A.™ MUSIC CONFIG — edit only this file  ║
 * ║   to update songs, top pick, artists, anything  ║
 * ╚══════════════════════════════════════════════════╝
 *
 * HOW TO ADD / CHANGE A SONG:
 *  1. Get the YouTube video ID  (the part after ?v= in the URL)
 *     e.g.  https://youtube.com/watch?v=ZMlA2qtyUhc  →  "ZMlA2qtyUhc"
 *  2. Edit the entry in PLAYLIST below
 *  3. To change the TOP PICK, update TOP_PICK_INDEX (0 = first song)
 *  4. Save. Done.
 *
 * THUMBNAIL is auto-fetched from YouTube — you don't need to host images.
 */

window.MUSIC = {

  // ── INDEX OF THE "TOP 1" / CROWN PICK (0-based) ──────────────────────
  TOP_PICK_INDEX: 0,

  // ── PLAYLIST ──────────────────────────────────────────────────────────
  // Add as many tracks as you want. Casino will pick randomly from these.
  PLAYLIST: [
    {
      id:     "ZMlA2qtyUhc",          // YouTube video ID
      title:  "Song 1",               // Track name shown in player
      artist: "Artist 1",             // Artist / label
      genre:  "RONG RENDE",            // Shows as tag in casino reel
    },
    {
      id:     "qQ2DZEnVL3k",
      title:  "Song 2",
      artist: "Artist 2",
      genre:  "MARIA",
    },
    {
      id:     "mHc4r7ZUgT4",
      title:  "Song 3",
      artist: "Artist 3",
      genre:  "R&B",
    },
    {
      id:     "DrJ2yPlBTq8",
      title:  "Song 4",
      artist: "Artist 4",
      genre:  "Drill",
    },
    {
      id:     "dQw4w9WgXcQ",
      title:  "Song 5",
      artist: "Artist 5",
      genre:  "Dril",
    },
  ],

  // ── SECTION LABEL (shown above the music section) ────────────────────
  SECTION_LABEL: "NOW PLAYING — A.S.T.A.™ PICKS",

  // ── CASINO SPIN BUTTON TEXT ───────────────────────────────────────────
  SPIN_BUTTON_TEXT: "SPIN THE DIAL",
  SPIN_RESULT_TEXT: "LOCKED IN",

};
