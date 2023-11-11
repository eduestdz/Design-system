Administración de componentes de Presentación

Al estar trabajando con la librería de Material UI de fondo nos veremos en la necesidad de editar y personalizar los componentes que la librería me provee.

Existen dos maneras de hacerlo

- A traves de la API del componente
- A través de los estilos del componente

Dependiendo que componente estemos tratando, la estrategia será distinta.

En esta carpeta mantendremos :

- Componentes con una estructura agnóstica a negocio con su css correspondiente en caso de necesitarlo
- Los CSS de custom de ciertos componentes, que no requieran una estructura extra.
- Agrupaciones de componentes ( moléculas ) que puedan ser reutizadas dentro del flujo.

Todo será exportado desde un archivo index, para poder ser provisto a todo el proyecto.

Todo componente de presentación debe ser almacenado y distribuido desde esta carpeta.

### Estructura de Carpeta

Styles

- ui-components
  -- index.tsx
  -- Button
  ---- MuiButton.css.ts
  -- Accordeon
  ---- AccordeonItem
  ---- Accodeon.css.ts
