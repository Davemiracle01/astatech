/**
 * ╔══════════════════════════════════════════════╗
 * ║   A.S.T.A.™ PLAYER — YouTube embed engine   ║
 * ║   Do not edit unless you know JS.           ║
 * ╚══════════════════════════════════════════════╝
 */

window.PLAYER = (function () {

  let curIdx    = 0;
  let isPlaying = true;
  let isMuted   = true;

  function src(id, autoplay, muted) {
    return `https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&rel=0&modestbranding=1&enablejsapi=1`;
  }

  function getFrame()   { return document.getElementById("yt-frame"); }
  function getNpTitle() { return document.getElementById("np-title"); }
  function getNpArtist(){ return document.getElementById("np-artist"); }
  function getNpThumb() { return document.getElementById("np-thumb"); }
  function getDot()     { return document.getElementById("vid-dot"); }
  function getStatusTxt(){ return document.getElementById("vid-status-text"); }
  function getPPBtn()   { return document.getElementById("btn-playpause"); }

  function setActive(idx) {
    const tracks = window.MUSIC.PLAYLIST;
    document.querySelectorAll(".pl-track").forEach((t, i) => {
      t.classList.toggle("active", i === idx);
      if (i !== idx) t.classList.remove("paused");
    });
    const t = tracks[idx];
    if (getNpTitle())  getNpTitle().textContent  = t.title;
    if (getNpArtist()) getNpArtist().textContent = t.artist;
    if (getNpThumb())  getNpThumb().src = `https://i.ytimg.com/vi/${t.id}/mqdefault.jpg`;
    curIdx = idx;
  }

  function switchTo(idx) {
    setActive(idx);
    getFrame().src = src(window.MUSIC.PLAYLIST[idx].id, isPlaying, isMuted);
  }

  function next() { switchTo((curIdx + 1) % window.MUSIC.PLAYLIST.length); }
  function prev() { switchTo((curIdx - 1 + window.MUSIC.PLAYLIST.length) % window.MUSIC.PLAYLIST.length); }

  function togglePlay() {
    isPlaying = !isPlaying;
    const btn  = getPPBtn();
    const dot  = getDot();
    const stxt = getStatusTxt();
    const activeTrack = document.querySelector(".pl-track.active");

    if (isPlaying) {
      if (btn)  btn.textContent = "⏸";
      if (dot)  dot.classList.remove("stopped");
      if (stxt) stxt.textContent = "Playing";
      if (activeTrack) activeTrack.classList.remove("paused");
    } else {
      if (btn)  btn.textContent = "▶";
      if (dot)  dot.classList.add("stopped");
      if (stxt) stxt.textContent = "Stopped";
      if (activeTrack) activeTrack.classList.add("paused");
    }
    getFrame().src = src(window.MUSIC.PLAYLIST[curIdx].id, isPlaying, isMuted);
  }

  function toggleMute() {
    isMuted = !isMuted;
    const btn   = document.getElementById("btn-unmute");
    const icon  = document.getElementById("unmute-icon");
    const label = document.getElementById("unmute-label");
    if (icon)  icon.textContent  = isMuted ? "🔇" : "🔊";
    if (label) label.textContent = isMuted ? "TAP FOR SOUND" : "MUTE";
    if (btn)   btn.classList.toggle("muted-off", !isMuted);
    getFrame().src = src(window.MUSIC.PLAYLIST[curIdx].id, isPlaying, isMuted);
  }

  function init() {
    const tracks = window.MUSIC.PLAYLIST;
    const frame  = getFrame();
    if (!frame || !tracks.length) return;

    // Build playlist sidebar rows
    const sidebar = document.getElementById("pl-sidebar-rows");
    if (sidebar) {
      sidebar.innerHTML = "";
      tracks.forEach((t, i) => {
        const row = document.createElement("div");
        row.className = "pl-track" + (i === 0 ? " active" : "");
        row.id = `vt-${i}`;
        row.onclick = () => switchTo(i);
        row.innerHTML = `
          <div class="pl-thumb-wrap">
            <img class="pl-thumb" src="https://i.ytimg.com/vi/${t.id}/mqdefault.jpg" alt="${t.title}">
            <div class="pl-thumb-play">▶</div>
          </div>
          <div class="pl-info">
            <div class="pl-track-title">${t.title}</div>
            <div class="pl-track-sub">${t.artist}</div>
          </div>
          <div class="pl-bars" id="pb-${i}">
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="pl-num">${String(i + 1).padStart(2, "0")}</div>
        `;
        sidebar.appendChild(row);
      });
      document.getElementById("pl-count").textContent = `${tracks.length} TRACKS`;
    }

    // Set initial player
    frame.src = src(tracks[0].id, true, true);
    setActive(0);

    // Update top pick crown
    const tp = tracks[window.MUSIC.TOP_PICK_INDEX];
    const tpTitle  = document.getElementById("top-pick-title");
    const tpArtist = document.getElementById("top-pick-artist");
    const tpGenre  = document.getElementById("top-pick-genre");
    const tpThumb  = document.getElementById("top-pick-thumb");
    const tpPlay   = document.getElementById("top-pick-play");
    if (tpTitle)  tpTitle.textContent  = tp.title;
    if (tpArtist) tpArtist.textContent = tp.artist;
    if (tpGenre)  tpGenre.textContent  = tp.genre;
    if (tpThumb)  tpThumb.src = `https://i.ytimg.com/vi/${tp.id}/mqdefault.jpg`;
    if (tpPlay)   tpPlay.onclick = () => switchTo(window.MUSIC.TOP_PICK_INDEX);
  }

  return { init, switchTo, next, prev, togglePlay, toggleMute, getCurIdx: () => curIdx };
})();
