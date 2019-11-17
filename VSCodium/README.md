# Tutorial VSCodium

## Introducción

**VSCodium** es la versión *Open Source* del editos propiedad de Microsoft **VS Code**.

Microsoft distribuye su VS Code de manera libre y gratuita, pero su versión compilada contiene partes de código que no gustan a la comunidad de desarrolladores debido a su opacidad y cesión obligatoria de derechos de inspección a la que obliga la compañía.

VS Codium es la versión funcional de VS Code y que garantiza que su código, disponible públicamente, está libre de obligaciones contractuales con Microsoft

## Descarga

En [GitHub.com](https://github.com/VSCodium/vscodium) encontramos el repositorio oficial de **VSCodium**. En el README.md hay un enlace a la versión que necesites, disponibles para todos los sistemas operativos.

## Comenzando

Tras instalar y ejecutar la aplicación, **VSCodium** nos muestra una ventana de *Bienvenida* que contiene entre otras cosas, una utilidad para aprender rápidamente el funcionamiento de este editor con un recorrido por las funciones esenciales

### Interactive Playground

Este apartado te permite experimentar con fragmentos de código las funciones y características habituales en el editor. Entre otras cosas:

- Multi-cursor Editing
- IntelliSense
- Line Actions
- Rename Refactoring
- Formatting
- Code Folding
- Errors and Warnings
- Snippets
- Emmet
- JavaScript Type Checking

#### Multi-cursor Editing

Es posible crear desde el teclado múltiples cursores hacia arriba o abajo del punto de inserción para añadir código en varias líneas a la vez.
Para ello pulsa `Ctrl+Alt+UpArrow` o `Ctrl+Alt+DownArrow` para añadir cursores arriba o abajo respectivamente desde la posición actual del cursor

#### IntelliSense

Con esta funcionalidad se obtiene asistencia de código y/o sugerencias sobre los parámetros para los lenguajes de programación más conocidos

#### Line Actions

Con las *Line Actions* es posible realizar inserciones rápidas de código utilizando combinaciones de teclas. Por ejemplo, es posible mover una línea hacia arriba o abajo, seleccionadola y pulsando `Alt+UpArrow` o `Alt+DownArrow`

#### Rename Refactoring

Un función ideal para cambiar el nombre de una palabra (variable, contenido, etc) y que ese cambio se haga automáticamente para todas las instancias de esa variable. Funciona seleccionando la palabra a cambiar, pulsando `F2` y escribiendo el nuevo valor

#### Formatting

Simplemente pulsando la combinación `May+Alt+F` se consigue formatear el código para que pueda ser leído con mayor comprensión

#### Code Folding

Con las combinaciones `Ctrl+Alt+'` o `Ctrl+Alt+¡` es posible colapsar o desplegar partes del código entre dos etiquetas

#### Errors and Warnings

Pulsando `F8` el editor nos mostrará los errores de sintáxis u otros que haya detectado en nuestro código

#### Snippets

Con los Snippets obtenemos la ayuda para completar código con tan sólo teclear los primeros caracteres y seleccionado el resto de la lista desplegable

#### Emmet

Con esta función llevamos los Snippets al siguiente nivel. Se basa en el uso de abreviaturas utilizando una sintáxis especial

#### JavaScript Type Checking

Una ayuda concreta para cuando generamos código en Javascript. Si añadimos un comentario con el siguiente texto `// @ts-nocheck` VS Codium nos avisará y añadirá las importaciones y propiedades que hayamos olvidado de manera automática