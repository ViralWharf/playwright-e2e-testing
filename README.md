# Playwright E2E Testing

Proyecto de automatización de pruebas End-to-End (E2E) utilizando **Playwright** con **TypeScript**, aplicando el patrón **Page Object Model (POM)** y buenas prácticas de testing moderno.

---

## Arquitectura del Framework

El framework está organizado para ser **escalable y mantenible**, separando responsabilidades.

```
playwright-e2e-testing
├── src
|   ├── config 
│   ├── fixtures
│   ├── pages
│   ├── test
│   └── utils
├── package.json
├── package-lock.json
├── pom.xml
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

### Descripción de capas

- **pages**  
  Contiene los Page Objects, donde se encapsulan las acciones de interacción con la UI de cada pantalla, utilizando selectores centralizados.

- **tests**  
  Contiene los **casos de prueba E2E**, enfocados únicamente en validar comportamientos y flujos funcionales, sin lógica de UI directa.

- **fixtures**  
  Define **fixtures personalizados de Playwright** para reutilizar lógica común.

- **utils**  
  Contiene utilidades reutilizables.
---

## Librerías Utilizadas

| Librería | Descripción |
|----------|-------------|
| **@playwright/test** | Framework principal para pruebas E2E automatizadas |
| **TypeScript** | Lenguaje con tipado estático para mayor mantenibilidad |
| **Node.js** | Runtime de ejecución y gestión del ecosistema Playwright |
| **Playwright HTML Reporter** | Generación de reportes visuales |

### ¿Por qué estas librerías?

- **@playwright/test** Es un framework moderno con auto-waiting y soporte multi-navegador
- **TypeScript** Ayuda con la prevención de errores en tiempo de desarrollo y mejor mantenibilidad del código
- **Node.js** Es el ecosistema base requerido por Playwright y gestión de dependencias
- **Playwright HTML Reporter** Permite generar automaticamente evidencias visuales
---

## Ejecución de Módulos

### Requisitos previos

- Node.js
- npm

```
Ejecutar todas las pruebas:
npx playwright test

Ejecutar con navegador visible:
npx playwright test --headed

Ejecutar un test específico:
npx playwright test NombreDeLaClaseTest.ts

Ejecutar tests y generar reporte:
npx playwright test --reporte=html
npx playwright show-report

Los reportes y resultados se generan en:

playwright-report/index.html
```

### Evidencias y Reportes
<img width="1919" height="957" alt="image" src="https://github.com/user-attachments/assets/9e04c26d-0671-42d2-be73-b17cc4c5c0f6" />
<img width="1915" height="958" alt="image" src="https://github.com/user-attachments/assets/6eef42d3-ae48-45a2-9635-68df2978a840" />

