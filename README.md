# Currículum Vitae Digital - Miqueas Drovetta

Este repositorio contiene mi currículum vitae digital, concebido como una Single Page Application (SPA) interactiva. El objetivo es ofrecer una presentación moderna, atractiva y funcional de mis habilidades, experiencia y formación académica, utilizando tecnologías web estándar.

## ✨ Características Principales

*   **Single Page Application (SPA):** Toda la información se presenta en una sola página con scroll vertical para una navegación fluida e ininterrumpida.
*   **Diseño Adaptable (Responsive):** La interfaz se adapta perfectamente a cualquier tamaño de pantalla, desde dispositivos móviles hasta monitores de escritorio.
*   **Navegación Intuitiva:** Una barra de navegación inferior fija permite un acceso rápido a todas las secciones.
*   **Controles de UI Modernos:**
    *   **Cambio de Tema:** Botón para alternar entre un modo oscuro (por defecto) y un modo claro.
    *   **Multi-idioma:** Soporte para Español (ES) e Inglés (EN) con un solo clic.
*   **Componentes Interactivos:**
    *   Timeline de experiencia con secciones desplegables.
    *   Carrusel de proyectos con scroll horizontal.
*   **Animaciones y Efectos Visuales:** Elementos con animaciones de entrada (`fade-in`) y un sutil efecto de "scroll snap" para una experiencia de usuario pulida.
*   **Descarga de CV:** Acceso directo para descargar la versión completa del CV en formato PDF.

## 🚀 Tecnologías Utilizadas

*   **HTML5:** Para la estructura semántica del contenido.
*   **CSS3:** Para el diseño, layout y animaciones, utilizando características modernas como:
    *   Flexbox y Grid Layout
    *   Variables CSS (Custom Properties) para temado
    *   Consultas de medios para el diseño adaptable
*   **JavaScript (ES6+):** Para toda la lógica de interactividad, incluyendo:
    *   Manipulación del DOM
    *   Gestión de eventos
    *   Intersection Observer API para animaciones al hacer scroll
    *   LocalStorage para persistir las preferencias del usuario (tema e idioma).

## 💻 Uso Local

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  Clona el repositorio:
    ```sh
    git clone https://github.com/MiqueasDrovetta/CV-Miqueas-Drovetta.git
    ```
2.  Navega al directorio del proyecto:
    ```sh
    cd CV-Miqueas-Drovetta
    ```
3.  Inicia un servidor web local. Una forma sencilla es usando `http-server` con Node.js:
    ```sh
    npx http-server -o
    ```
4.  El sitio se abrirá automáticamente en tu navegador en `http://127.0.0.1:8080`.
