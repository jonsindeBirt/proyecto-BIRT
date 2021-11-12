Tendremos varias carpetas para organizar el proyecto.

- assets: la usaremos para guardar imágenes, archivos de vídeo o archivos que usaremos en nuestra aplicación
- components: pondremos los componentes que serán reutilizables en toda la aplicación. cada componente irá en su propia carpeta
- carpetas propias por cada componente. cada componente que NO será reutilizable irá en su propia carpeta. estos componentes serán más grandes que los que se encuentran en la carpeta _components_ ya que serán, normalmente, componentes que agrupen a otros componentes más pequeños y, además, serán las pantallas completas que verán un usuario.
  -Por ejemplo, la pantalla de login será un componente _Login_ con su propia carpeta en la que pondremos sus propios ficheros _css_ . En este componente _Login_ podremos usar componentes de la carpeta _components_ (o no), así como también funcionalidades únicas para este componente.
