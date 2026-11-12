# Portfolio-Paz

This repository contains my personal portfolio website.

The portfolio is built using HTML and CSS and showcases my learning process in web development, focusing on clean structure, accessibility, and responsive design.

The project is a work in progress and will be continuously updated as I improve my skills and add new projects.

Live version:
https://paz8341.github.io/Portfolio-Paz/

## Segunda versión: Portfolio-Paz-v2

Esta versión conserva el diseño, las imágenes y los comentarios personales del portfolio original. Los cambios se realizan únicamente en este repositorio.

### Cambios y archivos

- `script.js`: un único control para el scroll, los menús y el idioma. Inglés por defecto en inicio; se recuerda la selección manual. Los enlaces directos a un CV o proyectos traducidos respetan su idioma cuando no hay una preferencia guardada.
- `translations.js`: textos de inicio en inglés, español y sueco, conservando los comentarios de las traducciones originales.
- `index.html` y `backup-index.html`: carga única de scripts y selector con los tres idiomas.
- `cv-en.html`, `cv-es.html`, `projects-en.html` y `projects-es.html`: navegación compartida para poder volver a inicio y cambiar de idioma.
- `cv-sv.html` y `projects-sv.html`: traducciones suecas; se conservan la experiencia, fechas, formación y niveles de idiomas del CV.
- `home.css`, `cv.css` y `projects.css`: estilos originales separados del HTML para compartirlos entre idiomas sin duplicarlos.
- `styles.css` y `navigation.css`: correcciones de menús, foco visible, responsive y movimiento reducido. My Approach conserva su imagen completa, con un ancho flexible y proporcionado al texto.

### Cómo comprobarlo

1. Descarga esta versión y abre la carpeta con VS Code y Live Server. También puedes ejecutar `python -m http.server 8000` y visitar `http://localhost:8000`.
2. Abre inicio en una ventana privada: debe aparecer en inglés. Elige español o sueco, visita CV y proyectos, vuelve con el enlace Paz y recarga: debe mantenerse el idioma.
3. Desplázate hacia abajo y hacia arriba: la barra se oculta y reaparece; al llegar arriba siempre se muestra.
4. Revisa My Approach y las tarjetas en las herramientas responsive del navegador. Pruebas realizadas en Chromium con anchos de 320, 390, 768, 1024 y 1440 px, sin desbordamiento horizontal.
5. Usa Tab, Enter y Escape para abrir y cerrar los menús. El foco debe permanecer visible; el botón hamburguesa permite cerrar el menú.

Las tarjetas de proyectos siguen siendo ejemplos pendientes de contenido, como en el original. Las imágenes, fuentes e iconos mantienen sus servicios externos originales.

Para publicar esta copia en GitHub Pages, utiliza **Settings → Pages** de **Portfolio-Paz-v2**, rama `main`, carpeta raíz. Su dirección será `https://paz8341.github.io/Portfolio-Paz-v2/` cuando Pages esté activado. La dirección del apartado original anterior corresponde a la primera versión.
