const textos = {
  en: {
/* ===== SECCIÓN 1 (Ingles)===== */
    "intro-titulo": "Hello, I'm Paz.",
    "intro-parrafo": "I'm learning web development and I love creating websites that are accessible, clear and meaningful.",
    "intro-boton": "Explore projects",

    /* ===== SECCIÓN 2 (Ingles)===== */
    "enfoque-titulo": "My Approach",
    "enfoque-sub1": "<strong>Design for Everyone</strong>",
    "enfoque-texto1": "I enjoy creating clean, well-structured websites designed for everyone. I care deeply about the details, making sure navigation feels clear, intuitive, and barrier-free.",
    "enfoque-sub2": "<strong>Learning by Doing</strong>",
    "enfoque-texto2": "I get involved in every project with curiosity and dedication. I love exploring ideas, finding practical solutions, and creating websites with a clear message that truly connect with people.",

    /* ===== SECCIÓN 3 (Ingles)===== */
    "contacto-titulo": "Contact me",
    "contacto-texto": "Interested in my professional profile? Take a look at my CV to learn more about my experience and background.",
    "contacto-boton": "View CV",
},

  es: {
/* ===== SECCIÓN 1 (español)===== */
    "intro-titulo": "Hola, soy Paz.",
    "intro-parrafo": "Estoy aprendiendo desarrollo web y me encanta crear sitios accesibles, claros y con sentido.",
    "intro-boton": "Explorar proyectos",

    /* ===== SECCIÓN 2 (español)===== */
    "enfoque-titulo": "Mi Enfoque",
    "enfoque-sub1": "<strong>Diseño para Todos</strong>",
    "enfoque-texto1": "Disfruto creando páginas limpias y bien estructuradas, pensadas para todas las personas. Cuido los detalles para que la navegación sea clara, intuitiva y sin barreras.",
    "enfoque-sub2": "<strong>Aprender Haciendo</strong>",
    "enfoque-texto2": "Me implico en cada proyecto con curiosidad y dedicación. Me encanta explorar ideas, encontrar soluciones prácticas y crear webs con un mensaje claro que conecten de verdad con su público.",

    /* ===== SECCIÓN 3 (español)===== */
    "contacto-titulo": "Contacto",
    "contacto-texto": "¿Te interesa mi perfil profesional? Consulta mi CV para conocer mi experiencia y formación.",
    "contacto-boton": "Ver CV",
}
};

/* ===== TEXTOS EN SUECO ===== */
textos.sv = {
  "intro-titulo": "Hej, jag heter Paz.",
  "intro-parrafo": "Jag studerar webbutveckling och älskar att skapa tillgängliga, tydliga och meningsfulla webbplatser.",
  "intro-boton": "Utforska projekten",
  "enfoque-titulo": "Mitt arbetssätt",
  "enfoque-sub1": "<strong>Design för alla</strong>",
  "enfoque-texto1": "Jag tycker om att skapa tydliga och välstrukturerade webbplatser för alla. Jag lägger stor vikt vid detaljerna så att navigeringen känns tydlig, intuitiv och tillgänglig.",
  "enfoque-sub2": "<strong>Att lära genom att göra</strong>",
  "enfoque-texto2": "Jag engagerar mig i varje projekt med nyfikenhet och omsorg. Jag älskar att utforska idéer, hitta praktiska lösningar och skapa webbplatser med ett tydligt budskap som verkligen når fram till människor.",
  "contacto-titulo": "Kontakta mig",
  "contacto-texto": "Vill du veta mer om min yrkesbakgrund? Ta en titt på mitt CV för att läsa om min erfarenhet och utbildning.",
  "contacto-boton": "Visa CV"
};

// Etiquetas compartidas: los mismos botones tienen el mismo texto en cada página.
const interfaz = {
  "en": {
    "skip": "Skip to content",
    "student": "Web development student",
    "focus": "Accessibility · Inclusive design · Learning by doing",
    "cv": "View CV",
    "work": "Selected work",
    "all": "Explore projects",
    "detail": "A personal portfolio built from scratch with HTML, CSS and JavaScript. An ongoing exploration of responsive design, accessibility and multilingual experiences.",
    "projectLink": "About the project",
    "live": "Live website",
    "source": "Source code",
    "status": "Personal project · In progress",
    "projectIntro": "Projects, with people in mind.",
    "projectLead": "A growing collection of what I build, learn and improve. Each project is a chance to make the web a little clearer and more accessible.",
    "pending": "Documentation in preparation",
    "pendingText": "Project details, technologies, screenshots and links will be added after they have been confirmed.",
    "pendingImage": "Project image not yet available",
    "pendingLabel": "Details coming soon",
    "projectNote": "This collection is growing. Projects without confirmed details are clearly marked, and links are added only when they are available.",
    "projectEyebrow": "My learning, in practice",
    "approachLabel": "How I work",
    "contactLabel": "My background",
    "footerLabel": "Social profiles",
    "projectsTitle": "Projects | Paz Castillo Rocha",
    "homeTitle": "Paz Castillo Rocha | Web development student",
    "cvTitle": "CV | Paz Castillo Rocha"
  },
  "es": {
    "skip": "Saltar al contenido",
    "student": "Estudiante de desarrollo web",
    "focus": "Accesibilidad · Diseño inclusivo · Aprender haciendo",
    "cv": "Ver CV",
    "work": "Proyectos destacados",
    "all": "Explorar proyectos",
    "detail": "Un portfolio personal creado desde cero con HTML, CSS y JavaScript. Un proyecto en evolución para explorar el diseño responsive, la accesibilidad y las experiencias multilingües.",
    "projectLink": "Sobre el proyecto",
    "live": "Ver la web",
    "source": "Código fuente",
    "status": "Proyecto personal · En desarrollo",
    "projectIntro": "Proyectos pensados para las personas.",
    "projectLead": "Una colección que crece con lo que construyo, aprendo y mejoro. Cada proyecto es una oportunidad para hacer la web un poco más clara y accesible.",
    "pending": "Documentación en preparación",
    "pendingText": "Los detalles, las tecnologías, las capturas y los enlaces se añadirán cuando estén confirmados.",
    "pendingImage": "Imagen del proyecto aún no disponible",
    "pendingLabel": "Próximamente, más detalles",
    "projectNote": "Esta colección está creciendo. Los proyectos sin datos confirmados se indican claramente y los enlaces se añaden solo cuando están disponibles.",
    "projectEyebrow": "Mi aprendizaje, en la práctica",
    "approachLabel": "Cómo trabajo",
    "contactLabel": "Mi trayectoria",
    "footerLabel": "Perfiles sociales",
    "projectsTitle": "Proyectos | Paz Castillo Rocha",
    "homeTitle": "Paz Castillo Rocha | Estudiante de desarrollo web",
    "cvTitle": "CV | Paz Castillo Rocha"
  },
  "sv": {
    "skip": "Hoppa till innehållet",
    "student": "Studerande inom webbutveckling",
    "focus": "Tillgänglighet · Inkluderande design · Lära genom att göra",
    "cv": "Visa CV",
    "work": "Utvalda projekt",
    "all": "Utforska projekten",
    "detail": "En personlig portfolio byggd från grunden med HTML, CSS och JavaScript. Ett pågående projekt där jag utforskar responsiv design, tillgänglighet och flerspråkiga upplevelser.",
    "projectLink": "Om projektet",
    "live": "Besök webbplatsen",
    "source": "Källkod",
    "status": "Personligt projekt · Under utveckling",
    "projectIntro": "Projekt med människan i centrum.",
    "projectLead": "En växande samling av det jag bygger, lär mig och förbättrar. Varje projekt är en möjlighet att göra webben lite tydligare och mer tillgänglig.",
    "pending": "Dokumentation förbereds",
    "pendingText": "Projektinformation, tekniker, skärmbilder och länkar läggs till när de har bekräftats.",
    "pendingImage": "Projektbild finns ännu inte",
    "pendingLabel": "Mer information kommer snart",
    "projectNote": "Samlingen växer. Projekt utan bekräftad information är tydligt markerade, och länkar läggs till först när de finns tillgängliga.",
    "projectEyebrow": "Mitt lärande i praktiken",
    "approachLabel": "Så arbetar jag",
    "contactLabel": "Min bakgrund",
    "footerLabel": "Sociala profiler",
    "projectsTitle": "Projekt | Paz Castillo Rocha",
    "homeTitle": "Paz Castillo Rocha | Studerande inom webbutveckling",
    "cvTitle": "CV | Paz Castillo Rocha"
  }
};
