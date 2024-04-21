# CRUD de Usuarios  <img src="https://img.icons8.com/color/32/000000/javascript--v1.png"/><img src="https://img.icons8.com/color/32/000000/react-native.png"/>

Este es un proyecto desarrollado en [React](https://reactjs.org) que interactuar con una API de Users, a través de todos los métodos http (GET, POST, PATCH y DELETE).
El propósito de esta aplicación es LEER, CREAR, ACTUALIZAR y ELIMINAR usuarios como practica de un CRUD.

[![App de CRUD de Usuarios](/public/screen-user-crud-app.webp)](https://weatherapp-jsx.netlify.app)

## Características principales

- **Diseño Responsive:** La aplicación está diseñada para adaptarse a diferentes dispositivos y tamaños de pantalla.
  
- **Interactividad:** He implementado elementos interactivos y animaciones suaves para mejorar la experiencia del usuario.
    - Pantalla de carga para indicar que esta cargando el listado de usuarios. 
    - Un modal con un formulario para crear y editar usuarios.  
    - Una alerta personalizada para indicar cuando un usuario a sido eliminado.
    - Implementé la librería [sonner](https://sonner.emilkowal.ski) para mostrar un toast cuando un usuario es creado o actualizado.
    - Subida de imágenes a [Cloudinary](https://cloudinary.com) para añadir una fotografía a cada usuario desde el ordenador.

- **Tecnologías utilizadas:**
    - <img src="https://img.icons8.com/color/32/000000/html-5--v1.png"/> HTML5 (Con estructura semántica y buenas practicas de accesibilidad)
    - <img src="https://img.icons8.com/color/32/000000/css3.png"/> CSS3 (Con Flexbox y Grid para diseño responsivo)
    - <img src="https://img.icons8.com/color/32/000000/javascript--v1.png"/>Javascript (Como lenguaje de programación del proyecto)
    - <img src="https://img.icons8.com/color/32/000000/react-native.png"/> React (Para añadir funcionalidad e interactividad)
    - <img src="https://svgl.vercel.app/library/cloudinary.svg" width="32" /> Coudinary (Para la subida de imágenes)



## Ejecución local

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:** Ejecuta el siguiente comando en tu terminal para clonar este repositorio en tu máquina local:
```
git clone https://github.com/tonatiujsanchez/user-crud-app.git
```

2. **Ingresa las variables de entorno:** Modifica en archivo .env.template a .env y llena las variables correspondientes:
```
VITE_CLOUDINARY_CLOUD_NAME==
```

3. **Installa la dependencias:** Navega hasta la carpeta del proyecto clonado y ejecuta el siguiente comando para instalar los node_modules:
```
npm install
```

4. **Corre el proyecto:** Ejecuta el siguiente comando para correr el proyecto de modo desarrollo:
```
npm run dev
```

5. **Explora:** ¡Explora y diviértete creando, editando y eliminando usuarios!

## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir una __issue__ para discutir nuevas características o problemas, o enviar un __pull request__ con tus mejoras propuestas.


## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme en https://tsx-dev.netlify.app/#contacto.

¡Gracias por visitar este proyecto! Espero que disfrutes explorando mi trabajo. 🤗
