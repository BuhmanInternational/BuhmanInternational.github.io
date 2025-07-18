# 🌐 Bühman International – Sitio Web Estático

Este proyecto publica un sitio web estático en **Azure Static Web Apps** desde el repositorio GitHub [`BuhmanInternational.github.io`](https://github.com/BuhmanInternational/BuhmanInternational.github.io).

> 🔗 Sitio publicado: [https://buhman-static-web01.z13.web.core.windows.net/](https://buhman-static-web01.z13.web.core.windows.net/)

---

## 📁 Estructura del Proyecto

---

## 🚀 Publicación en Azure Static Web Apps

### 🧾 1. Crear el repositorio en GitHub

Inicializar y subir contenido estático:

```bash
git init
git remote add origin https://github.com/BuhmanInternational/BuhmanInternational.github.io.git
git add .
git commit -m "🚀 Primera versión del sitio Bühman"
git push -u origin main

🖥️ 2. Crear el recurso en Azure
Desde el Portal de Azure:
Crear recurso → Static Web App
Completar:
Nombre: buhman-static-web01
Fuente: GitHub
Repositorio: BuhmanInternational/BuhmanInternational.github.io
Rama: main
App location: /
Output location: /
API location: (vacío)
Esto generará automáticamente un workflow GitHub Actions para el despliegue. !!!!!!!!!!!

3. Modificar el Workflow para sitios HTML puros
.github/workflows/azure-static-web-apps-*.yml
Agregar skip_app_build: true para evitar compilación innecesaria:
with:
  azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_XXXX }}
  action: "upload"
  app_location: "/"
  output_location: "/"
  skip_app_build: true
  github_id_token: ${{ steps.idtoken.outputs.result }}

 4. Hacer commit y push

 Consideraciones Futuras
Si deseas migrar el sitio a tecnologías como Vite, React, Vue, etc.:

🔧 Cambios necesarios:
El proyecto tendrá un package.json con scripts build

Azure debe compilar con:

yaml
Copiar
Editar
app_location: "/"
output_location: "dist"
app_build_command: "npm install && npm run build"
skip_app_build: false  # o simplemente eliminarlo
La carpeta dist contendrá el sitio compilado.
