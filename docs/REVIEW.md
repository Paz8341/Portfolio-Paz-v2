# Evolución visual del portfolio

La primera versión `Portfolio-Paz` permanece intacta. Este trabajo parte de la versión 2 existente: conserva las fotografías, los textos personales, los comentarios que describen elementos vigentes y todos los datos del CV. El README personal no se ha modificado.

## Dirección visual

Se mantiene la familia de colores: lavanda en la portada, beige en My Approach, rosa en las acciones principales y azul oscuro en texto y footer. Playfair Display y Open Sans siguen siendo las tipografías.

- **Portada:** título más contenido, fotografía proporcionada, presentación explícita como estudiante y dos acciones claras: proyectos y CV.
- **Navegación:** barra de 76 px en escritorio y 68 px en móvil, enlaces discretos y selector de tres idiomas. Mantiene ocultación al bajar, reaparición al subir y persistencia de idioma.
- **My Approach:** Grid de dos mitades exactas en escritorio. La fotografía cubre toda la columna con `object-fit: cover`; el padding pertenece solo al texto. Hasta 900 px se apila, sin parches ni `!important` de layout.
- **Proyectos:** una tarjeta real del portfolio con una captura generada en Chromium, HTML/CSS/JavaScript y enlaces comprobados. Tryssen es una ficha pendiente de documentación: sin tecnologías, capturas o enlaces inventados. Se retiran los antiguos botones `#`.
- **CV:** títulos laterales, separadores y lectura cómoda; se apila en móvil. El correo es un enlace y hay estilos de impresión. Una comparación del contenido de todas sus secciones confirma que los datos originales se conservan en EN, ES y SV.
- **Footer:** fondo `#18284a`, iconos blancos centrados y hover original `#ff8fa3`, compartidos entre las páginas.

## Organización

- `styles.css`: paleta, tipografía, botones, accesibilidad y footer.
- `navigation.css`: cabecera y desplegables.
- `home.css`, `projects.css`, `cv.css`: composición de cada tipo de página.
- `script.js`: se conserva el control de navegación e idioma, con etiquetas compartidas mediante `data-ui` y enlaces traducidos mediante `data-link`.
- `translations.js`: textos de inicio y etiquetas nuevas en los tres idiomas.
- `assets/`: copias locales de las mismas fotografías y captura real del portfolio. No se han añadido imágenes ficticias. La foto principal tiene prioridad de carga; las secundarias se cargan según se necesitan.

## Capturas reales

Capturadas con Chromium, con fuentes e imágenes cargadas: 1440 × 1000 en escritorio y 390 × 844 en móvil. Son capturas de página completa, no montajes. La captura de `assets/portfolio-preview.jpg` es una vista de 1440 × 900 de esta misma implementación; su interfaz está en inglés aunque la tarjeta se traduzca.

| Página | Escritorio | Móvil |
| --- | --- | --- |
| Inicio | [Ver captura](preview/home-desktop.jpg) | [Ver captura](preview/home-mobile.jpg) |
| Proyectos | [Ver captura](preview/projects-desktop.jpg) | [Ver captura](preview/projects-mobile.jpg) |
| CV | [Ver captura](preview/cv-desktop.jpg) | [Ver captura](preview/cv-mobile.jpg) |

## Comprobaciones

- Inicio, proyectos y CV en EN/ES/SV a 320, 390, 600, 768, 900, 901, 1024, 1440 y 1920 px: sin desbordamientos horizontales.
- Medición de las dos columnas de My Approach: 50/50 y foto llegando a ambos bordes verticales en escritorio.
- Inglés predeterminado incluso con navegador en sueco; selección, navegación entre páginas y recarga con idioma persistente.
- Menús con clic, Tab, Enter y Escape; enlace para saltar al contenido; foco visible y movimiento reducido.
- Cabecera que se oculta al bajar y aparece al subir.
- Sin errores JavaScript ni respuestas locales 4xx/5xx durante las pruebas.
- axe-core 4.10.3: sin infracciones automáticas de las reglas WCAG A/AA seleccionadas, incluidas WCAG 2.2, en los tres tipos de página y tres idiomas, a 390 y 1440 px. Esto es una comprobación automática, no una certificación de conformidad completa.
- Sintaxis JavaScript y `git diff --check` correctos.

## Cómo revisar

Abre `index.html` con Live Server o ejecuta `python -m http.server 8000` en la carpeta. Visita `http://localhost:8000`. Revisa los tres idiomas y cambia el tamaño de pantalla. Las páginas son estáticas: no necesitan instalación, compilación, base de datos ni CMS. Las fuentes e iconos mantienen sus proveedores externos originales.

La PR queda abierta para revisión. No se ha fusionado con `main`.
