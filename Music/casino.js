/**
 * ╔══════════════════════════════════════════╗
 * ║   A.S.T.A.™ CASINO — slot reel engine   ║
 * ║   Do not edit unless you know JS.       ║
 * ╚══════════════════════════════════════════╝
 */

window.CASINO = (function () {

  let spinning = false;
  let resolveIdx = null;

  // Build the reel strip — repeats all tracks several times for scroll illusion
  function buildReel(reelEl) {
    const tracks = window.MUSIC.PLAYLIST;
    reelEl.innerHTML = "";
    // 4 full loops + the final landing item
    for (let loop = 0; loop < 4; loop++) {
      tracks.forEach((t, i) => {
        const item = document.createElement("div");
        item.className = "casino-item";
        item.innerHTML = `
          <img class="casino-thumb" src="https://i.ytimg.com/vi/${t.id}/mqdefault.jpg" alt="${t.title}">
          <div class="casino-info">
            <div class="casino-genre">${t.genre}</div>
            <div class="casino-track-name">${t.title}</div>
            <div class="casino-track-artist">${t.artist}</div>
          </div>
        `;
        reelEl.appendChild(item);
      });
    }
  }

  // Animate the reel, land on targetIdx
  function spin(reelEl, targetIdx, onComplete) {
    if (spinning) return;
    spinning = true;

    const tracks   = window.MUSIC.PLAYLIST;
    const itemH    = reelEl.querySelector(".casino-item")?.offsetHeight || 90;
    const totalItems = tracks.length * 4; // items before we insert landing

    // Insert the landing item at the very end
    const landing = document.createElement("div");
    landing.className = "casino-item casino-landing";
    const t = tracks[targetIdx];
    landing.innerHTML = `
      <img class="casino-thumb" src="https://i.ytimg.com/vi/${t.id}/mqdefault.jpg" alt="${t.title}">
      <div class="casino-info">
        <div class="casino-genre">${t.genre}</div>
        <div class="casino-track-name">${t.title}</div>
        <div class="casino-track-artist">${t.artist}</div>
      </div>
    `;
    reelEl.appendChild(landing);

    // Target Y: scroll so landing item is centred in viewport
    const targetY = totalItems * itemH;

    // Reset to top instantly (no transition)
    reelEl.style.transition = "none";
    reelEl.style.transform  = "translateY(0)";

    // Force reflow
    reelEl.getBoundingClientRect();

    // Kick off spin
    const duration = 2200 + Math.random() * 600; // ms
    reelEl.style.transition = `transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`;
    reelEl.style.transform  = `translateY(-${targetY}px)`;

    setTimeout(() => {
      spinning = false;
      if (onComplete) onComplete(targetIdx);
    }, duration + 60);
  }

  return { buildReel, spin, isSpinning: () => spinning };
})();
