# Pipeline CI Practice Project

## Descripción
Este proyecto es una práctica de CI/CD con Azure DevOps utilizando un **agente self-hosted**.  
El pipeline construye y prueba una aplicación compuesta por frontend en React y backend en Node.js.

## Estructura del Proyecto
- `/front`: Aplicación React
- `/back`: API Node.js
- `azure-pipelines.yml`: Definición del pipeline
- `decisiones.md`: Justificación de diseño

## Requisitos del Agente
El agente self-hosted debe tener instalado:
- Node.js 18.x
- Git
- (Opcional) .NET SDK 8.0 si se usa backend en .NET

## Ejecución Local

### Frontend
```bash
cd front
npm install
npm start   # Inicia en http://localhost:3000
