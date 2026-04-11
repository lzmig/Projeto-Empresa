function toggleMenu() {
  document.getElementById('menu').classList.toggle('aberto');
  document.getElementById('overlay').classList.toggle('ativo');
}

const slides = [
  { img: "assets/images/imgRestaurante/salao-principal.png", label: "Salão Principal" },
  { img: "assets/images/imgRestaurante/bar.png",             label: "Bar" },
  { img: "assets/images/imgRestaurante/area-kids.png",       label: "Area Kids" },
  { img: "assets/images/imgRestaurante/recepcao.png",        label: "Recepção" },
  { img: "assets/images/imgRestaurante/cozinha.png",         label: "Cozinha" },
  { img: "assets/images/imgRestaurante/banheiros.png",       label: "Banheiros" },
];

const track = document.getElementById("slideTrack");
let position = 0;

/*Para deixar as imagens infinitas*/
[...slides, ...slides].forEach(({ img, label }) => {
  track.innerHTML += `
    <div class="slide-card">
      <img src="${img}" alt="${label}" />
      <div class="label">${label}</div>
    </div>
  `;
});

/*animação para que o carrosel funcione*/
function animate() {
  position += 0.2;
  if (position >= track.scrollWidth / 2) position = 0;
  track.style.transform = `translateX(-${position}px)`;
  requestAnimationFrame(animate);
}

animate();
