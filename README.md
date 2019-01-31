# Instalación y configuración de Webpack & Webpack dev server
## local (recomendada)

Ademas de clonar este "pequeño proyecto" puedes hacerlo tu mismo haciendo esto:

0. Crear estructura de directorios:

```shell
mkdir example && cd example
mkdir src dist config
```

1. Iniciar git & npm (Node Package Manager) con valores por defecto:

```shell
# Se creara archivo package.json con valores por defecto en nuestro directorio raíz
npm init -y
```

2. Instalar webpack, webpack-cli y webpack-dev-server como dependencia de desarrollo local

```shell
npm i webpack webpack-cli webpack-dev-server --save-dev
```

3. Crear archivos basicos necesarios

```shell
# Archivos configuración
touch dist/inex.html src/app.js config/webpack.build.js config/webpack.server.js
```

Despues de rellenar los citados archivos con el contenido que puedes comprobar aquí mismo. Puedes ejecutar el comando:

```shell
node_modules/.bin/webpack --config=config/webpack.build.js
node_modules/.bin/webpack-dev-server --config=config/webpack.server.js

# Otra forma
npx webpack --config=config/webpack.build.js
npx webpack-dev-server --config=config/webpack.server.js
```

En la carpeta "dist" se creara un archivo llamado __[name]-bundle.js__

Para mayor facilidad se puede editar el archivo __package.json__ para añadir esto dentro de los scripts:

```javascript
"scripts": {
    "build": "node_modules/.bin/webpack --config=config/webpack.build.js",
    "server": "node_modules/.bin/webpack-dev-server --config=config/webpack.server.js"
},
```

Asi solo tenemos que ejecutar __npm run build__ o __npm run server__ para compilar nuestro archivo __app.js__