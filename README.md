# Portal privado Red Salud 👨‍⚕️

Repositorio Frontend del proyecto portal paciente Red Salud.

Tecnologias usadas :

- React
- Next JS
- Redux toolkit
- Typescript
- Axios
- MaterialUI

El flujo de trabajo sera a traves de Gitflow para el manejo de ramas, principales seran :

- main
- develop

De estas ramas surgiran otras, como lo son `/feature` `/release` y `/hotfix`

Como herramienta de analisis y optimizacion de codigo se configuro para el proyecto el linter(ESLint) y code formatter(Prettier)

Para ejecutar el proyecto de forma local, corremos el comando `npm run dev` o `yarn dev` en nuestra carpeta donde se encuentra el proyecto, luego de esto la aplicacion estara corriendo en el puerto 3000, abrimos una pestaña en nuestro navegador y apuntamos a `http://localhost:3000/`

Este proyecto contiene un archivo Dockerfile para el despliegue de la app al momento de hacer merge.
