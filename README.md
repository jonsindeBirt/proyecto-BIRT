# Trabajando con GIT

Esto es un pequeño resumen de GIT y los comandos que seguramente más utilizaremos durante el desarrollo de la aplicación. Este proyecto es un trabajo en equipo y fácilmente podemos encontrar conflictos en el código, pero con una pequeña organización y siguiente unas pautas sencillas limitaremos todos los posibles problemas.

## Primeros conceptos

Como vamos a ser 4 personas trabajando sobre el mismo proyecto, es muy importante que cada uno trabajemos de manera separada del resto. Para ello vamos a intentar trabajar, en la medida de lo posible, con diferentes ramas.

- Por una parte, tenemos la rama principal **main**. Aquí estará el código ya desarrollado. Idealmente refleja la aplicación en su estado _funcional_ más nuevo.
- Por otra parte, tendremos nuestras ramas de desarrollo. Estas serán en las ramas en las que desarrollaremos el código. Una vez terminada una funcionalidad, pasaremos estos cambios a la rama \*_main_.

Por lo tanto, el proceso es sencillo: trabajo en mi rama y una vez terminado con lo que tengo entre manos lo paso a la rama principal. Esta rama principal intentaremos no tocarla para asegurar que tenemos la última versión de nuestra aplicación funcional.

## Principales problemas que nos encontraremos

Al trabajar en nuestras ramas personales y actualizar la rama principal únicamente cuando terminemos una funcionalidad, el principal problema que tendremos es que nuestra rama no estará actualizada respecto a la rama principal. ¿Y qué quiere decir esto? Que, mientras estemos en nuestra rama, todos los cambios introducidos en la rama principal no se verán reflejados en la nuestra, por lo que estaremos trabajando en una versión desactualizada de la aplicación.

Esto es normal, ya que no todas las partes de una aplicación se desarrollan a la misma velocidad (y más en este proyecto, en el que cada uno tendremos nuestro propio horario). Para evitar (o minimizar) problemas o conflictos en el código, ya sea a nosotros mismos o a quien venga detrás, antes de pasar nuestros cambios a la rama principal nos aseguraremos de TRAER los cambios de la rama principal a la nuestra propia. Una vez incluídos, pasaremos los cambios a la rama principal.

### ¿Cómo haremos esto?

¿Cómo haremos todo lo comentado: Crear una rama, desarrollar, traer los cambios de la rama **principal**, pasar nuestros cambios a dicha rama **principal**...? Es más sencillo de lo que parece. Solo necesitaremos unos cuantos comandos y perder el miedo a GIT. (Los IDEs actuales traen integración con **git**, por lo que no siquiera haría falta conocer los comandos)

1. Para crear una rama, primero nos tenemos que colocar en la rama **de la que queremos hacer una copia**. Es decir, crearemos una rama nueva cogiendo TODO lo que hay en la rama en la que estamos actualmente. Si no hemos creado ninguna rama hasta ahora estaremos en la rama **main** así que ejecutaremos el siguiente comando:

- `git branch *nombre de la rama nueva* `. Con esto creamos la nueva rama con el nombre indicado.

2. Una vez creada la nueva rama, nos tendremos que mover a ella. Para ello utilizaremos:

- `git checkout *nombre de la rama*`

3. Ya estamos en la rama en la que trabajaremos. En este punto escribiremos el código necesario.
4. Una vez escrito nuestro código es necesario, primero, "guardarlo" en nuestra rama. Haremos _add_,_commit_ y _push_ de los cambios:

- `git add .` "Preparamos" los cambios para ser guardados.
- `git commit -m *mensaje explicativo*`. Con esto lo que haremos será guardar en el repositorio los cambios añadidos en el paso anterior. Junto con los cambios se guardará el mensaje que hemos indicado, por lo que trataremos de que sea lo más explicativo posible.
- `git push origin main`. Con este comando subiremos los cambios al repositorio online (en este caso Github).

5. En este punto, nuestra rama tiene los cambios aplicados pero aún faltaría actualizar la rama principal. Para ello, nos tendremos que colocar en la rama principal y descargarnos los cambios. Una vez hecho esto, nos moveremos a nuestra rama y traeremos los cambios que nos hemos descargado. Luego, haremos lo mismo que hemos hecho en el punto **4**: _add_,_commit_ y _push_:
   - `git checkout main`. Nos movemos a la rama principal.
   - `git pull`. Descargamos todos los cambios que hay en la rama principal (si los hubiera).
   - `git checkout *nombre de nuestra rama*`. Nos movemos a nuestra rama.
   - `git merge main`. Traemos y combinamos los cambios que había en la rama principal con nuestra rama.
   - `git add .`, `git commit -m *mensaje explicativo*`,`git push origin main`. Igual que en el paso 4.
6. Ya tenemos nuestra rama actualizada con nuestros cambios y los que había en la rama principal. El siguiente paso será crear un Pull Request en Github para poder incorporar nuestros cambios a la rama principal.
