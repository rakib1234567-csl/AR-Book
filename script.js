function showPage(id) {
  document.querySelectorAll(".subpage").forEach(el => el.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function showSub(id) {
  document.querySelectorAll(".subpage").forEach(el => el.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function goBack() {
  document.querySelectorAll(".subpage").forEach(el => el.style.display = "none");
  document.getElementById("bangla").style.display = "block";
}

function playPoem(poemId) {
  const player = document.getElementById("poemPlayer");
  const poemSources = {
    poem1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    poem2: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  };
  player.src = poemSources[poemId];
  player.play();
}

const canvas = document.getElementById("drawCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let painting = false;

  function startDraw(e) {
    painting = true;
    draw(e);
  }
  function endDraw() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mouseup", endDraw);
  canvas.addEventListener("mousemove", draw);
}

function clearCanvas() {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}