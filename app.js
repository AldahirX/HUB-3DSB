// --- ESTADO GLOBAL LOCALSTORAGE ---
let repasados = JSON.parse(localStorage.getItem('repasados_3dsb') || '[]');
let quizData = JSON.parse(localStorage.getItem('quiz_data_3dsb') || '{}');
let temaActual = localStorage.getItem('theme_3dsb') || 'dark';

// Elementos DOM
const bodyElement = document.body;
const btnTheme = document.getElementById('btn-theme');
const contenedor = document.getElementById('contenedor-modulos');
const inputBusqueda = document.getElementById('input-busqueda');
const botonesFiltro = document.querySelectorAll('.chip');
const txtProgreso = document.getElementById('txt-progreso');
const barraProgreso = document.getElementById('barra-progreso');
const btnResetProgreso = document.getElementById('btn-reset-progreso');

const modal = document.getElementById('modal-modulo');
const btnCerrar = document.getElementById('btn-cerrar-modal');
const tabFichaBtn = document.getElementById('tab-ficha-btn');
const tabQuizBtn = document.getElementById('tab-quiz-btn');
const tabFichaContent = document.getElementById('tab-ficha-content');
const tabQuizContent = document.getElementById('tab-quiz-content');

let filtroDocente = 'todos';
let textoBusqueda = '';
let moduloActivo = null;

// Variables de control del Quiz Paso a Paso
let quizIndexActual = 0;
let quizRespuestasActuales = [];

// --- MODO CLARO / OSCURO ---
function aplicarTema(tema) {
  if (tema === 'light') {
    bodyElement.classList.remove('dark-theme');
    bodyElement.classList.add('light-theme');
    btnTheme.innerHTML = '☀️ Modo Claro';
  } else {
    bodyElement.classList.remove('light-theme');
    bodyElement.classList.add('dark-theme');
    btnTheme.innerHTML = '🌙 Modo Oscuro';
  }
  localStorage.setItem('theme_3dsb', tema);
}

btnTheme.addEventListener('click', () => {
  temaActual = (temaActual === 'dark') ? 'light' : 'dark';
  aplicarTema(temaActual);
});
aplicarTema(temaActual);

// --- PROGRESO EN LOCALSTORAGE ---
function actualizarProgresoUI() {
  const total = modulos.length;
  const completados = repasados.length;
  const pct = Math.round((completados / total) * 100);

  txtProgreso.textContent = `${completados} de ${total} módulos repasados (${pct}%)`;
  barraProgreso.style.width = `${pct}%`;
}

window.toggleRepasado = function(id, event) {
  if (event) event.stopPropagation();

  if (repasados.includes(id)) {
    repasados = repasados.filter(item => item !== id);
  } else {
    repasados.push(id);
  }
  localStorage.setItem('repasados_3dsb', JSON.stringify(repasados));
  actualizarProgresoUI();
  renderizarModulos();

  if (moduloActivo && moduloActivo.id === id) {
    renderFichaModal(moduloActivo);
  }
}

btnResetProgreso.addEventListener('click', () => {
  if (confirm('¿Deseas reiniciar tu progreso de repaso y borrar los puntajes del quiz?')) {
    repasados = [];
    quizData = {};
    localStorage.setItem('repasados_3dsb', JSON.stringify(repasados));
    localStorage.setItem('quiz_data_3dsb', JSON.stringify(quizData));
    actualizarProgresoUI();
    renderizarModulos();
    if (moduloActivo) {
      renderFichaModal(moduloActivo);
      renderQuizInicio(moduloActivo);
    }
  }
});

// --- RENDERIZAR TARJETAS EN PANTALLA PRINCIPAL ---
function renderizarModulos() {
  contenedor.innerHTML = '';

  const filtrados = modulos.filter(mod => {
    const esRepasado = repasados.includes(mod.id);
    let coincideDocente = true;
    if (filtroDocente === 'Javier') coincideDocente = mod.docente.toLowerCase().includes('javier');
    if (filtroDocente === 'Arcides') coincideDocente = mod.docente.toLowerCase().includes('arcides');
    if (filtroDocente === 'repasados') coincideDocente = esRepasado;

    const coincideTexto = mod.nombre.toLowerCase().includes(textoBusqueda) ||
                          mod.codigo.toLowerCase().includes(textoBusqueda) ||
                          mod.descripcion.toLowerCase().includes(textoBusqueda) ||
                          mod.docente.toLowerCase().includes(textoBusqueda);

    return coincideDocente && coincideTexto;
  });

  if (filtrados.length === 0) {
    contenedor.innerHTML = `<p class="sin-resultados">No se encontraron módulos que coincidan con la búsqueda.</p>`;
    return;
  }

  filtrados.forEach(mod => {
    const esRepasado = repasados.includes(mod.id);
    const card = document.createElement('article');
    card.className = `card-modulo ${esRepasado ? 'card-repasado' : ''}`;
    card.onclick = () => abrirModal(mod.id);

    card.innerHTML = `
      <div class="card-header-top">
        <span class="badge">${mod.codigo}</span>
        <button class="btn-check ${esRepasado ? 'check-active' : ''}" 
                title="${esRepasado ? 'Marcado como repasado' : 'Marcar como repasado'}"
                onclick="toggleRepasado('${mod.id}', event)">
          ${esRepasado ? '✔ Repasado' : '○ Por repasar'}
        </button>
      </div>
      <h3>${mod.nombre}</h3>
      <p class="docente"><strong>Docente:</strong> ${mod.docente}</p>
      <p class="desc">${mod.descripcion}</p>
      <span class="btn-ver-ficha">Ver Ficha y Quiz &rarr;</span>
    `;
    contenedor.appendChild(card);
  });
}

inputBusqueda.addEventListener('input', (e) => {
  textoBusqueda = e.target.value.toLowerCase().trim();
  renderizarModulos();
});

botonesFiltro.forEach(btn => {
  btn.addEventListener('click', () => {
    botonesFiltro.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filtroDocente = btn.getAttribute('data-filtro');
    renderizarModulos();
  });
});

// --- MODAL Y TABS ---
function abrirModal(id) {
  moduloActivo = modulos.find(m => m.id === id);
  if (!moduloActivo) return;

  tabFichaBtn.classList.add('active');
  tabQuizBtn.classList.remove('active');
  tabFichaContent.classList.add('active');
  tabQuizContent.classList.remove('active');

  const qLength = moduloActivo.quiz ? moduloActivo.quiz.length : 0;
  tabQuizBtn.innerHTML = `❓ Quiz de Repaso (${qLength})`;

  renderFichaModal(moduloActivo);
  renderQuizInicio(moduloActivo); // Carga la pantalla de inicio del quiz

  modal.showModal();
}

tabFichaBtn.addEventListener('click', () => {
  tabFichaBtn.classList.add('active');
  tabQuizBtn.classList.remove('active');
  tabFichaContent.classList.add('active');
  tabQuizContent.classList.remove('active');
});

tabQuizBtn.addEventListener('click', () => {
  tabQuizBtn.classList.add('active');
  tabFichaBtn.classList.remove('active');
  tabQuizContent.classList.add('active');
  tabFichaContent.classList.remove('active');
});

function renderFichaModal(mod) {
  const esRepasado = repasados.includes(mod.id);
  tabFichaContent.innerHTML = `
    <div class="modal-header">
      <div class="card-header-top">
        <span class="badge">${mod.codigo}</span>
        <button class="btn-check ${esRepasado ? 'check-active' : ''}" onclick="toggleRepasado('${mod.id}', event)">
          ${esRepasado ? '✔ Repasado' : '○ Marcar como repasado'}
        </button>
      </div>
      <h2>${mod.nombre}</h2>
      <p class="docente"><strong>Docente:</strong> ${mod.docente}</p>
    </div>
    <div class="modal-section">
      <h4>Resumen de lo Aprendido</h4>
      <p>${mod.resumen}</p>
    </div>
    <div class="modal-grid">
      <div class="modal-box">
        <h4>📋 Instrumentos Evaluativos</h4>
        <ul>${mod.instrumentos.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
      <div class="modal-box">
        <h4>💻 Programas e Instalables</h4>
        <ul>${mod.programas.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
      <div class="modal-box">
        <h4>🛠️ Herramientas y Lenguajes</h4>
        <ul>${mod.herramientas.map(h => `<li>${h}</li>`).join('')}</ul>
      </div>
      <div class="modal-box">
        <h4>📂 Evidencia Destacada</h4>
        <p>${mod.evidencias}</p>
      </div>
    </div>
    <div class="modal-section">
      <h4>🔗 Recursos para Seguir Aprendiendo</h4>
      <div class="recursos-links">
        ${mod.recursos.map(r => `<a href="${r.url}" target="_blank" rel="noopener">${r.titulo} &#8599;</a>`).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// NUEVA LÓGICA DEL QUIZ: WIZARD PASO A PASO
// ==========================================

// 1. Pantalla de Inicio del Quiz
function renderQuizInicio(mod) {
  if (!mod.quiz || mod.quiz.length === 0) {
    tabQuizContent.innerHTML = `<p class="sin-resultados">No hay preguntas de quiz disponibles para este módulo.</p>`;
    return;
  }

  const mejorPuntaje = quizData[mod.id] ? quizData[mod.id].highScore : 0;
  
  tabQuizContent.innerHTML = `
    <div class="quiz-wizard-intro">
      <h3>Quiz: ${mod.codigo}</h3>
      <p>Este quiz tiene <strong>${mod.quiz.length} preguntas</strong>. Obtén todas correctas para completarlo automáticamente.</p>
      ${mejorPuntaje > 0 ? `<p style="color:var(--emerald); font-weight:600;">🏆 Tu mejor récord: ${mejorPuntaje} / ${mod.quiz.length}</p>` : ''}
      <button class="btn-accion-quiz" onclick="iniciarQuiz()">¡Empezar Quiz! 🚀</button>
    </div>
  `;
}

// 2. Iniciar el recorrido
window.iniciarQuiz = function() {
  quizIndexActual = 0;
  quizRespuestasActuales = new Array(moduloActivo.quiz.length).fill(null);
  mostrarPreguntaActual();
}

// 3. Renderizar solo UNA pregunta
window.mostrarPreguntaActual = function() {
  const q = moduloActivo.quiz[quizIndexActual];
  const progresoPct = (quizIndexActual / moduloActivo.quiz.length) * 100;

  tabQuizContent.innerHTML = `
    <div class="quiz-wizard-header">
      <span>Pregunta ${quizIndexActual + 1} de ${moduloActivo.quiz.length}</span>
      <div class="pista-progreso">
        <div class="linea-progreso" style="width: ${progresoPct}%;"></div>
      </div>
    </div>
    <div class="quiz-card" style="margin-top:0;">
      <p class="quiz-pregunta">${q.pregunta}</p>
      <div class="quiz-opciones">
        ${q.opciones.map((opt, i) => `
          <button class="quiz-opcion" onclick="seleccionarOpcion(${i})">${opt}</button>
        `).join('')}
      </div>
    </div>
  `;
}

// 4. Procesar la opción elegida y dar feedback
window.seleccionarOpcion = function(oIndex) {
  const q = moduloActivo.quiz[quizIndexActual];
  quizRespuestasActuales[quizIndexActual] = oIndex;
  const esCorrecta = oIndex === q.correcta;
  const progresoPct = ((quizIndexActual + 1) / moduloActivo.quiz.length) * 100;

  // Re-renderizamos la tarjeta bloqueando botones y mostrando feedback
  tabQuizContent.innerHTML = `
    <div class="quiz-wizard-header">
      <span>Pregunta ${quizIndexActual + 1} de ${moduloActivo.quiz.length}</span>
      <div class="pista-progreso">
        <div class="linea-progreso" style="width: ${progresoPct}%;"></div>
      </div>
    </div>
    <div class="quiz-card" style="margin-top:0;">
      <p class="quiz-pregunta">${q.pregunta}</p>
      <div class="quiz-opciones">
        ${q.opciones.map((opt, i) => {
          let cls = "quiz-opcion";
          if (i === q.correcta) cls += " opcion-correcta";
          else if (i === oIndex) cls += " opcion-incorrecta";
          return `<button class="${cls}" disabled>${opt}</button>`;
        }).join('')}
      </div>
      <div class="quiz-feedback ${esCorrecta ? 'feedback-correcto' : 'feedback-incorrecto'}">
         <strong>${esCorrecta ? '¡Correcto! 🎉' : 'Incorrecto. ❌'}</strong> ${q.explicacion}
      </div>
      <button class="btn-siguiente-quiz" onclick="avanzarQuiz()">
        ${quizIndexActual === moduloActivo.quiz.length - 1 ? 'Ver Resultados Finales 📊' : 'Siguiente Pregunta &rarr;'}
      </button>
    </div>
  `;
}

// 5. Botón Siguiente
window.avanzarQuiz = function() {
  quizIndexActual++;
  if (quizIndexActual >= moduloActivo.quiz.length) {
    mostrarResultadosFinales();
  } else {
    mostrarPreguntaActual();
  }
}

// 6. Pantalla de Resultados
window.mostrarResultadosFinales = function() {
  let correctas = 0;
  moduloActivo.quiz.forEach((q, i) => {
    if (quizRespuestasActuales[i] === q.correcta) correctas++;
  });

  // Guardar puntaje maximo en LocalStorage
  if (!quizData[moduloActivo.id]) quizData[moduloActivo.id] = { highScore: 0 };
  if (correctas > quizData[moduloActivo.id].highScore) {
    quizData[moduloActivo.id].highScore = correctas;
    localStorage.setItem('quiz_data_3dsb', JSON.stringify(quizData));
  }

  const puntajePerfecto = correctas === moduloActivo.quiz.length;

  if (puntajePerfecto && !repasados.includes(moduloActivo.id)) {
    repasados.push(moduloActivo.id);
    localStorage.setItem('repasados_3dsb', JSON.stringify(repasados));
    actualizarProgresoUI();
    renderizarModulos();
    renderFichaModal(moduloActivo); // Actualiza check en ficha
  }

  tabQuizContent.innerHTML = `
    <div class="quiz-resultados">
      <h3>Resultados del Quiz</h3>
      <div class="score-circle ${puntajePerfecto ? 'perfect' : ''}">
        <span>${correctas}</span> / ${moduloActivo.quiz.length}
      </div>
      <p style="font-size: 16px;">
        ${puntajePerfecto 
          ? '<strong>¡Perfecto!</strong> El módulo ha sido marcado como repasado. ✔️' 
          : 'Puedes mejorar. ¡Inténtalo de nuevo para marcar el módulo como repasado!'}
      </p>
      <button class="btn-accion-quiz" onclick="iniciarQuiz()">Reintentar Quiz 🔄</button>
    </div>
  `;
}

// Eventos de Cierre
btnCerrar.addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
});

// Inicialización
actualizarProgresoUI();
renderizarModulos();