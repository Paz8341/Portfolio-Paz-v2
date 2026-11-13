// ===== NAVEGACIÓN SEGÚN IDIOMA =====
const idiomas = ["en", "es", "sv"];
const pagina = location.pathname.match(/(cv|projects)-(en|es|sv)\.html$/);
let idiomaGuardado;
try { idiomaGuardado = localStorage.getItem("lang"); } catch (error) {
  // Si el navegador bloquea el almacenamiento, los enlaces conservan el idioma.
}
const idiomaEnlace = new URLSearchParams(location.search).get("lang");
let idiomaActual = idiomas.includes(idiomaGuardado) ? idiomaGuardado :
  idiomas.includes(idiomaEnlace) ? idiomaEnlace : pagina ? pagina[2] : "en";

const etiquetas = {
  en: ["Projects", "Languages ▾", "Change language", "Navigation", "Open menu", "Close menu"],
  es: ["Proyectos", "Idiomas ▾", "Cambiar idioma", "Navegación", "Abrir menú", "Cerrar menú"],
  sv: ["Projekt", "Språk ▾", "Byt språk", "Navigering", "Öppna menyn", "Stäng menyn"]
};

// ===== MENÚ MÓVIL (HAMBURGUESA) =====
const headerEl = document.querySelector("header"); // Selecciona el header completo (contenedor del menú)
const toggleBtn = document.querySelector(".nav-toggle"); // Selecciona el botón hamburguesa.
const navLinks = document.querySelector(".nav-links"); // Contenedor de los enlaces de navegación
const desktopDropdown = document.querySelector(".nav-links .dropdown");
const desktopDropdownBtn = document.querySelector(".dropdown-btn");
const mobileDropdown = document.querySelector(".mobile-dropdown");
const langToggleMobile = document.querySelector(".lang-toggle");

function abrirMenu(abierto) {
  if (!headerEl || !toggleBtn) return;
  headerEl.classList.toggle("open", abierto); // Añade o quita la clase "open" al header (CSS abre/cierra menú)
  toggleBtn.setAttribute("aria-expanded", abierto);
  toggleBtn.setAttribute("aria-label", etiquetas[idiomaActual][abierto ? 5 : 4]);
}
function abrirIdiomas(contenedor, boton, abierto) {
  if (!contenedor || !boton) return;
  contenedor.classList.toggle("open", abierto);
  boton.setAttribute("aria-expanded", abierto);
}
function cerrarIdiomas() {
  abrirIdiomas(desktopDropdown, desktopDropdownBtn, false);
  abrirIdiomas(mobileDropdown, langToggleMobile, false);
}
if (toggleBtn && navLinks) { // Comprueba que ambos existen antes de usarlo (evita errores)
  navLinks.id = "navigation";
  toggleBtn.setAttribute("aria-controls", navLinks.id);
  abrirMenu(false);
  toggleBtn.addEventListener("click", () => { // Al hacer click en la hamburguesa…
    cerrarIdiomas();
    abrirMenu(!headerEl.classList.contains("open"));
  });
}
// ===== DROPDOWN DE IDIOMAS · DESKTOP Y MÓVIL =====
[[desktopDropdown, desktopDropdownBtn], [mobileDropdown, langToggleMobile]].forEach(([contenedor, boton], indice) => {
  if (!contenedor || !boton) return;
  const menu = contenedor.querySelector(".dropdown-menu");
  menu.id = `languages-${indice}`;
  boton.setAttribute("aria-controls", menu.id);
  abrirIdiomas(contenedor, boton, false);
  boton.addEventListener("click", () => {
    const abierto = !contenedor.classList.contains("open");
    cerrarIdiomas();
    abrirIdiomas(contenedor, boton, abierto);
  });
});
// Cerrar dropdowns al hacer click fuera
 document.addEventListener("click", (evento) => {
  if (!evento.target.closest(".dropdown, .lang-toggle")) cerrarIdiomas();
  if (!evento.target.closest("header")) abrirMenu(false);
});
document.addEventListener("keydown", (evento) => {
  if (evento.key !== "Escape") return;
  const boton = mobileDropdown?.classList.contains("open") ? langToggleMobile :
    desktopDropdown?.classList.contains("open") ? desktopDropdownBtn :
    headerEl?.classList.contains("open") ? toggleBtn : null;
  cerrarIdiomas();
  abrirMenu(false);
  boton?.focus();
});
headerEl?.addEventListener("focusout", () => {
  requestAnimationFrame(() => {
    if (!headerEl.contains(document.activeElement)) { cerrarIdiomas(); abrirMenu(false); }
  });
});
matchMedia("(max-width: 768px)").addEventListener("change", () => { cerrarIdiomas(); abrirMenu(false); });

// ===== CAMBIO DE IDIOMA =====
function aplicarIdioma(idioma) {
  document.documentElement.lang = idioma; // Ajusto el atributo lang del HTML
  const textosMenu = etiquetas[idioma];
  const navProjects = document.getElementById("nav-projects"); // Enlace del menú "Projects"
  const navLanguage = document.getElementById("nav-language"); // Botón "Languages"
  if (navProjects) navProjects.textContent = textosMenu[0];
  if (navLanguage) navLanguage.textContent = textosMenu[1];
  navLinks?.setAttribute("aria-label", textosMenu[3]);
  langToggleMobile?.setAttribute("aria-label", textosMenu[2]);
  // Las etiquetas con data-ui se comparten sin repetir funciones por página.
  document.querySelectorAll('[data-ui]').forEach(elemento => {
    const texto = interfaz[idioma][elemento.dataset.ui];
    if (texto) elemento.textContent = texto;
  });
  document.querySelectorAll('[data-link]').forEach(enlace => {
    enlace.href = `${enlace.dataset.link}-${idioma}.html`;
  });
  document.querySelectorAll('.dropdown-menu button').forEach(boton => {
    boton.setAttribute('aria-pressed', boton.getAttribute('onclick').includes(`'${idioma}'`));
  });
  const tipo = pagina ? pagina[1] === 'cv' ? 'cv' : 'projects' : 'home';
  document.title = interfaz[idioma][`${tipo}Title`];
  // 1) Cambio los textos visibles según idioma
  if (typeof textos !== "undefined") {
    for (const id in textos[idioma]) {
      const elemento = document.getElementById(id);
      if (elemento) elemento.innerHTML = textos[idioma][id];
    }
    const descripciones = {
      en: ["Paz's portfolio introduction", "Desk with notebooks and coffee", "Plant beside office supplies"],
      es: ["Imagen principal del portfolio de Paz", "Mesa con cuadernos y café", "Planta junto a material de oficina"],
      sv: ["Introduktionsbild i Paz portfolio", "Skrivbord med anteckningsböcker och kaffe", "Växt bredvid kontorsmaterial"]
    };
    // Solo las tres fotografías personales reciben estas descripciones.
    document.querySelectorAll('.portrait img, .enfoque-img img, .contact-section img').forEach((imagen, i) => { imagen.alt = descripciones[idioma][i]; });
  }
  // 2) Cambio enlaces según idioma (CV y Projects)
  for (const id of ["nav-projects", "intro-boton", "nav-cv", "contacto-boton"]) {
    const enlace = document.getElementById(id);
    if (enlace) enlace.href = `${id === "nav-projects" || id === "intro-boton" ? "projects" : "cv"}-${idioma}.html`;
  }
  const inicio = document.querySelector(".logo");
  if (inicio) inicio.href = `index.html?lang=${idioma}`;
  abrirMenu(false);
}
function cambiarIdioma(idioma) { // Función que se ejecuta al elegir idioma
  if (!idiomas.includes(idioma)) return;
  idiomaActual = idioma;
  // 3) Guardo el idioma elegido para próximas visitas
  try { localStorage.setItem("lang", idioma); } catch (error) { /* Los enlaces siguen funcionando. */ }
  cerrarIdiomas();
  // Solo navego si necesito otra versión del CV o de proyectos: así evito bucles.
  if (pagina && pagina[2] !== idioma) {
    location.assign(`${pagina[1]}-${idioma}.html`);
    return;
  }
  aplicarIdioma(idioma);
}
// Al cargar la página: aplico el idioma guardado (si existe)
// Si no hay ninguno, uso inglés por defecto
if (pagina && pagina[2] !== idiomaActual) {
  location.replace(`${pagina[1]}-${idiomaActual}.html`);
} else {
  aplicarIdioma(idiomaActual);
}

// ====== SCRIPT PARA OCULTAR HEADER AL DESPLAZAR HACIA ABAJO ======
let lastScroll = window.scrollY;
window.addEventListener("scroll", () => {
  const currentScroll = Math.max(0, window.scrollY); // La página es la que realmente hace scroll.
  if (!headerEl || Math.abs(currentScroll - lastScroll) < 6 && currentScroll > 0) return;
  const menuAbierto = headerEl.classList.contains("open") || headerEl.querySelector(".dropdown.open");
  const tieneFoco = headerEl.contains(document.activeElement);
  headerEl.classList.toggle("hide-header", currentScroll > headerEl.offsetHeight && currentScroll > lastScroll && !menuAbierto && !tieneFoco);
  lastScroll = currentScroll;
}, { passive: true });
