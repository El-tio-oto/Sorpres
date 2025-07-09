//Tiempo de estar juntos
const inicio = new Date(2022, 6, 9, 12, 0, 0);

//Calculando tiempo
function calcularTiempo() {
  const inicio = new Date(2022, 6, 9, 12, 0, 0); // 9 julio 2022, 12:00:00 pm
  const ahora = new Date();

  let diff = ahora - inicio; // diferencia en ms

  if (diff < 0) {
    return "Aún no ha llegado el momento.";
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= dias * (1000 * 60 * 60 * 24);

  const horas = Math.floor(diff / (1000 * 60 * 60));
  diff -= horas * (1000 * 60 * 60);

  const minutos = Math.floor(diff / (1000 * 60));
  diff -= minutos * (1000 * 60);

  const segundos = Math.floor(diff / 1000);

  return `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}
//Canciones
const canciones = [
  "../imagenes/Reik - Sabes (Letra  Lyrics)_1752039888160.m4a",
  "../imagenes/New West - Those Eyes (Lyrics)_1739809024076.m4a",
  "../imagenes/Te Amo Bebé_1740143636884.m4a",
  "../imagenes/Jay Wheeler - Me Enamoré (Cover Audio)_1739809011669.m4a"
];

const duracionCorte = 30; // segundos por canción
let actual = 0;
const player = document.getElementById("player");

function reproducirCancion() {
  player.src = canciones[actual];
  player.currentTime = 0;
  player.volume = 0.5;
  player.play();

  setTimeout(() => {
    actual = (actual + 1) % canciones.length;
    reproducirCancion();
  }, duracionCorte * 1000);
}

reproducirCancion();

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

function calcularTiempo() {
  const inicio = new Date(2022, 6, 9, 12, 0, 0); // 9 julio 2022, 12:00:00 pm
  const ahora = new Date();

  let diff = ahora - inicio; // diferencia en ms

  if (diff < 0) {
    return "Aún no ha llegado el momento.";
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= dias * (1000 * 60 * 60 * 24);

  const horas = Math.floor(diff / (1000 * 60 * 60));
  diff -= horas * (1000 * 60 * 60);

  const minutos = Math.floor(diff / (1000 * 60));
  diff -= minutos * (1000 * 60);

  const segundos = Math.floor(diff / 1000);

  return `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

function actualizarContador() {
  document.getElementById('contador').textContent = "Tiempo que llevamos juntos: " + calcularTiempo();
}

actualizarContador();
setInterval(actualizarContador, 1000);
