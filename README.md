
# Registro de Test

Excel para el registro y numeración de los test
https://docs.google.com/spreadsheets/d/1pYdJjR58lmwqqO5R1yz4-PEHuGUF1YtLa0KE9LE6rfY/edit?usp=sharing

# Planet Salud

Esto es un repositorio de muestra para el testeo de Planet Salud en Cypress.

- [Iniciar la app](#iniciar-la-app)
- [Scripts](#scripts)
- [Control de versiones (Git)](#control-de-versiones)
- [Entorno de desarrollo](#entorno-de-desarrollo)
- [Buenas prácticas](#buenas-practicas)

## Iniciar la app

Decargar/clonar proyecto.

```
git clone https://github.com/SayJaviCano/planet-salud.git
```

Abrir carpeta `planet-salud` en Visual Studio Code y abrir terminal dentro de Visual Studio Code.

Instalar dependencias

```
npm i
```

## Scripts

Abrir ventana de Cypress

Abre ventana con todos los tests de la aplicación para poder ejecutarlos en el navegador.

```
npm run open
```

Ejecutar tests en terminal.

Ejecuta todos los test en el terminal sin que se vean en un navegador.

```
npm run test:run
```

## Control de Versiones

En este proyecto hay dos ramas destacadas.

- `main`: Rama en la que tendremos el código más estable y que actualizaremos semanal/mensualmente.
- `develop`: Rama desde la que crearemos todas nuestras ramas a la hora de crear nuevos tests.

A la hora de publicar nuestro código en una rama tendremos que hacerlo localmente desde `develop` y, de igual forma, al abrir la Pull Request en Github deberemos apuntarla también a `develop`.

Para sincronizar los cambios localmente lo haremos cambiandonos a la rama `develop` y la actualizaremos con el siguiente comando. Antes de usar este comando hay que tener en cuenta que no se pueden tener cambios sin guardar.

```
git pull --rebase
```

## Entorno de desarrollo

| Aplicación | Descripción                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jira       | Desde esta aplicación gestionaremos todo lo que hay por hacer en cuestion de trabajo. Nos ayudará a controlar que cosas están pendientes por hacer, cuales están en proceso y cuales han sido terminadas                                       |
| Github     | En esta aplicación tendremos todo el código en el que se encuentran los tests                                                                                                                                                                  |
| QA Touch   | En esta aplicación tendremos la definición de los tests que vamos a automatizar. Una descripción de los mismos y los pasos manuales que debe uno seguir para reporducirlos. Se especificará también cuál es el resultado esperado de cada test |
