
---

## 📄 `decisiones.md`

```markdown
# Decisiones de Diseño - Pipeline CI

## Stack elegido
- **Frontend:** React (Create React App)
  - Justificación: ecosistema maduro, tooling integrado, rápido para prototipar
- **Backend:** Node.js con Express
  - Justificación: simple de implementar, ligero, fácil de integrar en pipelines

## Organización del repositorio
- **Mono-repo** con `/front` y `/back`
- Justificación: simplifica el versionado y permite CI coordinado en un único pipeline

## Diseño del pipeline
- **Jobs en paralelo:** frontend y backend se construyen de forma independiente
- **Artefactos separados:** se generan `frontend-build` y `backend-build`
- **Agente Self-Hosted:** 
  - Control del entorno y versiones
  - Cacheo de dependencias entre builds
  - Uso educativo para aprender cómo funciona el agente

## Seguridad
- Autenticación del agente con **Personal Access Token (PAT)**
- Scope mínimo: `Agent Pools (Read & manage)`
- Token almacenado de forma segura, no incluido en el repositorio

## Evidencias
- Creación del pool y configuración del agente en Azure DevOps
- Ejecución de pipeline exitosa con logs
- Publicación de artefactos (frontend y backend)
