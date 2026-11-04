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
    evidencias: "Instalación de Power BI, dashboards de monitoreo de mantenimiento y elaboración de plantillas SLA."
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
    evidencias: "Base de datos relacional normalizada con tablas vinculadas mediante llaves foráneas y diccionario de datos."
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
    evidencias: "Diccionario de datos completo y diagramas UML para la documentación del sistema informático."
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
    evidencias: "Manual de sistema, entregas periódicas del proyecto integrador y exposición final."
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
    evidencias: "Prácticas de POO (Herencia y Polimorfismo), gestor de acceso a datos y aplicación web Code First ASP Razor."
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
    evidencias: "Secuencia completa de prácticas móviles desarrolladas e instaladas en .NET MAUI."
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
    evidencias: "Práctica 10 sobre marco de trabajo Scrum y Práctica 11 con sistema CRUD enlazado a Inteligencia Artificial."
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
    evidencias: "Tienda de comercio electrónico PrestaShop, aplicación WinForms/ASPX, app .NET MAUI y proyecto tecnológico con Arduino."
  }
];