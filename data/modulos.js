const modulos = [
  // --- Profesor Javier Arturo García Mineros ---
  {
    id: "m32",
    codigo: "Módulo 3.2",
    nombre: "Mantenimiento y aseguramiento de la operación del sistema informático",
    docente: "Profesor Javier Arturo García Mineros",
    descripcion: "Monitoreo de mantenimiento, dashboards en Power BI, plantillas SLA y planes de contingencia.",
    resumen: "Ejecución de planes de contingencia, monitoreo y registro de mantenimiento, creación de dashboards analíticos en Power BI, acuerdos de nivel de servicio (SLA) y modelado UML.",
    instrumentos: ["Plantilla SLA", "Guías de actividades de contingencia y monitoreo", "Evaluación de dashboards en Power BI"],
    programas: ["Power BI Desktop", "Power BI Service", "Microsoft Excel", "Herramientas de diagnóstico"],
    herramientas: ["Dashboards analíticos", "Plantillas SLA", "Modelado UML", "Planes de contingencia"],
    recursos: [
      { titulo: "Documentación Oficial de Power BI", url: "https://learn.microsoft.com/es-es/power-bi/" },
      { titulo: "Soporte Técnico de Microsoft", url: "https://support.microsoft.com/es-es" }
    ],
    evidencias: "Instalación de Power BI, dashboards de monitoreo de mantenimiento y elaboración de plantillas SLA.",
    quiz: [
      {
        pregunta: "¿Qué significa la sigla SLA en gestión de servicios de TI?",
        opciones: ["Service Level Agreement", "System Logic Architecture", "Software Licensing Authorization", "Server Load Analysis"],
        correcta: 0,
        explicacion: "SLA (Service Level Agreement) es el acuerdo de nivel de servicio entre el proveedor de TI y el cliente."
      },
      {
        pregunta: "¿Cuál es la función principal de Power BI en este módulo?",
        opciones: ["Editar código en C#", "Crear dashboards visuales para monitorear datos", "Diseñar logotipos", "Gestionar redes locales"],
        correcta: 1,
        explicacion: "Power BI se utiliza para transformar datos en reportes interactivos y dashboards analíticos."
      },
      {
        pregunta: "¿Qué objetivo tiene un plan de contingencia informático?",
        opciones: ["Aumentar la velocidad de internet", "Garantizar la continuidad del sistema ante fallas", "Instalar antivirus gratuitos", "Formatear discos siempre"],
        correcta: 1,
        explicacion: "El plan de contingencia define las acciones a seguir para restaurar la operación del sistema ante emergencias o fallas."
      }
    ]
  },
  {
    id: "m33",
    codigo: "Módulo 3.3",
    nombre: "Administración de Bases de Datos",
    docente: "Profesor Javier Arturo García Mineros",
    descripcion: "Diseño relacional, consultas SQL, relaciones (PK/FK) y gestión de motores de bases de datos.",
    resumen: "Diseño y normalización de bases de datos relacionales, ejecución de consultas DDL y DML, definición de llaves primarias/foráneas y administración con phpMyAdmin.",
    instrumentos: ["Guías prácticas de consultas SQL", "Rúbrica de diagramas Entidad-Relación", "Examen práctico de bases de datos"],
    programas: ["XAMPP", "MySQL Workbench", "phpMyAdmin"],
    herramientas: ["SQL", "MySQL Server", "Relaciones PK/FK", "Normalización"],
    recursos: [
      { titulo: "Documentación de MySQL", url: "https://dev.mysql.com/doc/" },
      { titulo: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/" }
    ],
    evidencias: "Base de datos relacional normalizada con tablas vinculadas mediante llaves foráneas y diccionario de datos.",
    quiz: [
      {
        pregunta: "¿Cuál es la función de una Foreign Key (Llave Foránea)?",
        opciones: ["Encriptar la base de datos", "Vincular dos tablas mediante la Primary Key de otra", "Acelerar las descargas de imágenes", "Crear copias de seguridad"],
        correcta: 1,
        explicacion: "La llave foránea (FK) garantiza la integridad referencial relacionando una fila de una tabla con la Primary Key de otra."
      },
      {
        pregunta: "¿Qué comando SQL se utiliza para recuperar datos de una tabla?",
        opciones: ["UPDATE", "INSERT", "SELECT", "DELETE"],
        correcta: 2,
        explicacion: "SELECT es el comando de DML utilizado para realizar consultas y filtrar información en SQL."
      },
      {
        pregunta: "¿En qué consiste la primera forma normal (1FN)?",
        opciones: ["Eliminar duplicados de tablas enteras", "Asegurar valores atómicos sin grupos repetidos", "Crear índices automáticos", "Usar solo texto en minúsculas"],
        correcta: 1,
        explicacion: "La 1FN exige que cada celda de la tabla contenga un solo valor atómico e indivisible."
      }
    ]
  },
  {
    id: "m34",
    codigo: "Módulo 3.4",
    nombre: "Elaboración de documentación de Sistemas informáticos",
    docente: "Profesor Javier Arturo García Mineros",
    descripcion: "Modelado UML, diagramas de flujo/secuencia, manuales de usuario y diccionarios de datos.",
    resumen: "Documentación estandarizada de proyectos de software mediante diagramas de casos de uso, diagramas de secuencia UML, diccionarios de datos y manuales de sistema.",
    instrumentos: ["Lista de cotejo para diccionario de datos", "Rúbrica de diagramación UML", "Guía para elaboración de manual de usuario"],
    programas: ["StarUML", "Draw.io", "Microsoft Word", "Excalidraw"],
    herramientas: ["UML 2.5", "Casos de Uso", "Diagramas de Secuencia", "Markdown"],
    recursos: [
      { titulo: "UML Org Docs", url: "https://www.uml.org/" },
      { titulo: "Guía de Markdown", url: "https://www.markdownguide.org/" }
    ],
    evidencias: "Diccionario de datos completo y diagramas UML para la documentación del sistema informático.",
    quiz: [
      {
        pregunta: "¿Para qué sirve un diagrama de Secuencia en UML?",
        opciones: ["Mostrar el diseño gráfico de botones", "Representar el orden cronológico del intercambio de mensajes entre objetos", "Calcular el costo del proyecto", "Escribir consultas SQL"],
        correcta: 1,
        explicacion: "El diagrama de secuencia modela la interacción temporal y secuencial entre objetos o componentes."
      },
      {
        pregunta: "¿Qué contiene un diccionario de datos?",
        opciones: ["Traducciones de inglés a español", "Nombres de los programadores", "Definiciones detalladas de campos, tipos de datos y restricciones", "Historial de descargas"],
        correcta: 2,
        explicacion: "Un diccionario de datos describe las características, tipos de datos, longitud y reglas de cada atributo de las tablas."
      },
      {
        pregunta: "¿Quién es el actor principal en un diagrama de Casos de Uso?",
        opciones: ["La base de datos", "El usuario o sistema externo que interactúa con las funciones", "El procesador de la PC", "El lenguaje de programación"],
        correcta: 1,
        explicacion: "Un actor representa el rol que desempeña un usuario o sistema externo al ejecutar un caso de uso."
      }
    ]
  },
  {
    id: "m38",
    codigo: "Módulo 3.8",
    nombre: "Proyecto innovador de Desarrollo de Software",
    docente: "Profesor Javier Arturo García Mineros",
    descripcion: "Desarrollo e integración de proyectos tecnológicos completos con soluciones emergentes e IA.",
    resumen: "Desarrollo de proyectos de software innovadores con entregas progresivas de avances (10% y 15%), elaboración del manual de sistema y presentación/exposición final.",
    instrumentos: ["Rúbrica de evaluación de avances de proyecto (10% y 15%)", "Guía de manual de sistema", "Lista de cotejo para exposición final"],
    programas: ["Visual Studio Code", "Node.js", "Git / GitHub", "Postman"],
    herramientas: ["JavaScript", "Express.js", "React + Vite", "Tailwind CSS", "Gemini API"],
    recursos: [
      { titulo: "Google AI Studio Docs", url: "https://ai.google.dev/docs" },
      { titulo: "React Documentation", url: "https://react.dev/" }
    ],
    evidencias: "Manual de sistema, entregas periódicas del proyecto integrador y exposición final.",
    quiz: [
      {
        pregunta: "¿Qué arquitectura permite conectar un frontend en React con un modelo de IA?",
        opciones: ["API REST / Servicios Web", "Conexión directa por cable VGA", "Archivos TXT compartidos", "Servidor FTP sin autenticación"],
        correcta: 0,
        explicacion: "Una API REST permite enviar solicitudes HTTP desde el cliente frontend hacia el servidor backend que procesa la IA."
      },
      {
        pregunta: "¿Qué significa RAG en aplicaciones modernas con IA?",
        opciones: ["Rapid Application Graphics", "Retrieval-Augmented Generation", "Random Access Gateway", "Real-time Array Group"],
        correcta: 1,
        explicacion: "Retrieval-Augmented Generation combina búsqueda de información propia con modelos generativos de IA."
      },
      {
        pregunta: "¿Cuál es el propósito del manual de sistema?",
        opciones: ["Promocionar el software en redes sociales", "Documentar la arquitectura técnica, instalación y configuración para mantenedores", "Lista de precios de hardware", "Certificado de notas"],
        correcta: 1,
        explicacion: "El manual de sistema le permite a otros desarrolladores comprender la infraestructura interna y realizar mantenimiento."
      }
    ]
  },

  // --- Profesor Arcides Canales Sorto ---
  {
    id: "m31",
    codigo: "BTVDS 3.1",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Profesor Arcides Canales Sorto",
    descripcion: "POO (Herencia y Polimorfismo), acceso a datos y arquitectura Code First con ASP.NET Razor.",
    resumen: "Programación Orientada a Objetos en C#, aplicación de conceptos de herencia y polimorfismo, gestión de acceso a datos y desarrollo web con ASP.NET Razor mediante enfoque Code First.",
    instrumentos: ["Guías Prácticas 01 y 02 (POO Herencia y Polimorfismo)", "Guía Práctica 03 (Acceso a datos)", "Guía Práctica 05 (Code First ASP Razor)"],
    programas: ["Visual Studio 2022", "SQL Server / MySQL", "Git"],
    herramientas: ["C#", "POO (Herencia/Polimorfismo)", "ASP.NET Razor Pages", "Entity Framework Code First"],
    recursos: [
      { titulo: "Microsoft Learn C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { titulo: "ASP.NET Core Razor Pages Docs", url: "https://learn.microsoft.com/es-es/aspnet/core/razor-pages/" }
    ],
    evidencias: "Prácticas de POO (Herencia y Polimorfismo), gestor de acceso a datos y aplicación web Code First ASP Razor.",
    quiz: [
      {
        pregunta: "¿En qué consiste el Polimorfismo en POO?",
        opciones: ["En duplicar código en todas las clases", "En permitir que métodos con el mismo nombre se comporten distinto según la clase", "En borrar la base de datos al cerrar", "En usar HTML dentro de C#"],
        correcta: 1,
        explicacion: "El polimorfismo permite responder a un mismo mensaje ejecutando comportamientos diferentes en subclases derivadas."
      },
      {
        pregunta: "¿Qué caracteriza al enfoque Code First de Entity Framework?",
        opciones: ["Se crea la base de datos manualmente antes de programar", "Se definen primero las clases en C# y EF genera la base de datos", "No se usa base de datos", "Solo sirve para celulares"],
        correcta: 1,
        explicacion: "Code First permite escribir modelos de clases en C# y migrar automáticamente la estructura hacia la base de datos."
      },
      {
        pregunta: "¿Qué extensión usan las vistas dinámicas en ASP.NET Razor?",
        opciones: [".cshtml", ".php", ".py", ".jsx"],
        correcta: 0,
        explicacion: "Las páginas Razor combinan C# y HTML dentro de archivos con extensión .cshtml."
      }
    ]
  },
  {
    id: "m_movil",
    codigo: "Módulo 2",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    docente: "Profesor Arcides Canales Sorto",
    descripcion: "Desarrollo de componentes de interfaz y lógica móvil con .NET MAUI.",
    resumen: "Construcción de aplicaciones móviles dinámicas con .NET MAUI, maquetación de interfaces en XAML, desarrollo de prácticas progresivas (Prácticas 6 a 9) y guías de autoevaluación.",
    instrumentos: ["Guías de Prácticas 6 a 9 de Net MAUI", "Instrumento de autoevaluación de Práctica 9", "Guía de nivelación o recuperación"],
    programas: ["Visual Studio 2022", "Android Emulator", ".NET SDK"],
    herramientas: [".NET MAUI", "XAML", "C#", "Controles de Interfaz Móvil"],
    recursos: [
      { titulo: "Documentación de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { titulo: "Android Developers", url: "https://developer.android.com/" }
    ],
    evidencias: "Secuencia completa de prácticas móviles desarrolladas e instaladas en .NET MAUI.",
    quiz: [
      {
        pregunta: "¿Para qué se utiliza el lenguaje XAML en .NET MAUI?",
        opciones: ["Para configurar bases de datos", "Para definir y maquetar la interfaz gráfica de usuario", "Para conectar Wi-Fi", "Para escribir estilos CSS"],
        correcta: 1,
        explicacion: "XAML es un lenguaje basado en XML diseñado para declarar elementos visuales y layouts en aplicaciones .NET."
      },
      {
        pregunta: "¿Qué significa la sigla MAUI en .NET?",
        opciones: ["Multi-platform App UI", "Mobile Advanced User Integration", "Main Android Universal Interface", "Modern Application Unified System"],
        correcta: 0,
        explicacion: ".NET MAUI (Multi-platform App UI) permite crear apps nativas para Android, iOS, macOS y Windows desde un solo proyecto."
      },
      {
        pregunta: "¿Cómo se llama el componente que permite organizar elementos vertical u horizontalmente?",
        opciones: ["Grid / StackLayout", "CanvasSQL", "WebBrowser", "HttpButton"],
        correcta: 0,
        explicacion: "StackLayout y Grid son los contenedores de diseño principales para organizar vistas en .NET MAUI."
      }
    ]
  },
  {
    id: "m_ing",
    codigo: "Módulo 3",
    nombre: "Conversación de inglés sobre mantenimiento de sistemas informáticos",
    docente: "Profesor Arcides Canales Sorto",
    descripcion: "Metodología Agile Scrum e integración de bases de datos con operaciones CRUD e IA.",
    resumen: "Aplicación de metodologías ágiles con Scrum, gestión de proyectos de desarrollo e integración de operaciones CRUD en bases de datos potenciadas con Inteligencia Artificial.",
    instrumentos: ["Guía de Práctica 10 (Scrum)", "Guía de Práctica 11 (Base de datos CRUD-IA)"],
    programas: ["Visual Studio Code / Visual Studio", "Git / GitHub", "Gestor de Base de Datos"],
    herramientas: ["Metodología Scrum", "Operaciones CRUD", "Integración de IA", "Vocabulario Técnico en Inglés"],
    recursos: [
      { titulo: "Scrum Guide Official", url: "https://scrumguides.org/" },
      { titulo: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" }
    ],
    evidencias: "Práctica 10 sobre marco de trabajo Scrum y Práctica 11 con sistema CRUD enlazado a Inteligencia Artificial.",
    quiz: [
      {
        pregunta: "¿Qué significa las siglas de las operaciones CRUD?",
        opciones: ["Compile, Run, Undo, Delete", "Create, Read, Update, Delete", "Copy, Replace, Upload, Download", "Code, Refactor, Use, Deploy"],
        correcta: 1,
        explicacion: "CRUD representa las cuatro operaciones fundamentales sobre datos persistententes: Crear, Leer, Actualizar y Eliminar."
      },
      {
        pregunta: "¿En qué consiste un 'Sprint' dentro del marco Scrum?",
        opciones: ["Una carrera de atletismo", "Un ciclo de trabajo de tiempo fijo donde se entrega un incremento de software funcional", "Un examen oral en inglés", "Un reporte de virus"],
        correcta: 1,
        explicacion: "Un Sprint es un periodo de 1 a 4 semanas donde el equipo trabaja para completar las tareas comprometidas del backlog."
      },
      {
        pregunta: "¿Cómo se llama la reunión diaria corta de sincronización en Scrum?",
        opciones: ["Daily Standup / Daily Scrum", "Final Exam", "Sprint Review", "Project Closing"],
        correcta: 0,
        explicacion: "El Daily Scrum es una reunión de máximo 15 minutos para inspeccionar el progreso diario e identificar bloqueos."
      }
    ]
  },
  {
    id: "m_coop",
    codigo: "Módulo 4",
    nombre: "Puesta en marcha de la empresa en asociatividad cooperativa",
    docente: "Profesor Arcides Canales Sorto",
    descripcion: "Implementación de 4 proyectos evaluados al 25%: PrestaShop, .NET MAUI, WinForms/ASPX y Agustine-Arduino.",
    resumen: "Desarrollo de proyectos tecnológicos integrales divididos en 4 evaluaciones del 25%: e-commerce con PrestaShop, sistema de escritorio y web con WinForms y ASPX, app móvil con .NET MAUI y prototipo físico con Arduino.",
    instrumentos: ["Rúbrica de evaluación PrestaShop (25%)", "Rúbrica de Proyecto Final .NET MAUI (25%)", "Rúbrica de Proyecto WinForms y ASPX (25%)", "Rúbrica de Proyecto Agustine-Arduino (25%)"],
    programas: ["PrestaShop", "Visual Studio 2022", "Arduino IDE"],
    herramientas: ["PrestaShop / PHP", "C# WinForms", "ASP.NET (ASPX)", ".NET MAUI", "Arduino / C++"],
    recursos: [
      { titulo: "Odoo Documentation", url: "https://www.odoo.com/documentation" },
      { titulo: "Arduino Official Docs", url: "https://www.arduino.cc/en/Guide" }
    ],
    evidencias: "Tienda de comercio electrónico PrestaShop, aplicación WinForms/ASPX, app .NET MAUI y proyecto tecnológico con Arduino.",
    quiz: [
      {
        pregunta: "¿Qué tipo de solución tecnológica es PrestaShop?",
        opciones: ["Un editor de imágenes", "Un gestor de contenidos e-commerce para tiendas virtuales", "Un sistema operativo", "Un lenguaje de base de datos"],
        correcta: 1,
        explicacion: "PrestaShop es una plataforma CMS de comercio electrónico en PHP utilizada para crear tiendas virtuales."
      },
      {
        pregunta: "¿Qué plataforma de desarrollo de hardware libre se utilizó para el prototipo físico?",
        opciones: ["Arduino", "Power BI", "Visual Studio Code", "Docker"],
        correcta: 0,
        explicacion: "Arduino integra microcontroladores y sensores programados desde su IDE en código C/C++."
      },
      {
        pregunta: "¿Cuál es el valor porcentual de cada proyecto en la nota final del Módulo 4?",
        opciones: ["10 %", "25 %", "50 %", "100 %"],
        correcta: 1,
        explicacion: "El módulo se dividió formalmente en 4 entregas del 25 % cada una (PrestaShop, MAUI, WinForms/ASPX y Arduino)."
      }
    ]
  }
];