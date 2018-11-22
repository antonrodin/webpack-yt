# Configuración basica de webpack

Ademas de clonar este "pequeño proyecto" puedes hacerlo tu mismo haciendo esto:

0. Crear estructura de directorios:

```shell
mkdir example-webpack
cd example-webpack

# Directorio donde estara guardado nuestro código fuente
mkdir src

# Directorio donde estara guardada nuestra app o archivos compilados
mkdir dist

# Aquí guardaremos nuestros archivos de configuración de webpack
mkdir config
```

1. Iniciar git & npm (Node Package Manager) con valores por defecto:

```shell
# Se creara archivo package.json con valores por defecto en nuestro directorio raíz
npm init -y

# Opcional. iniciar repositorio de git
git init

# Opcional. Si hemos iniciado repo, ignoramos la carpeta node_modules, para que no se añada al proyecto
echo "node_modules" > .gitignore
```

2. Instalar webpack y webpack-cli

```shell
npm i -g webpack webpack-cli
```

La opcion __-g__ significa globalmente, es posible que necesites ejecutaro con permisos de administrador.

3. Crear archivos basicos necesarios

```shell
# Archivo HTML
touch dist/inex.html

# Crear nuestro archivo app.js
touch src/app.js

# Crear archivo de configuración
touch config/webpack.dev.js
```

Despues de rellenar los citados archivos con el contenido que puedes comprobar aquí mismo. Puedes ejecutar el comando:

```shell
webpack --config=config/webpack.dev.js
```

En la carpeta "dist" se creara un archivo llamado __bundle.js__

Para mayor facilidad se puede editar el archivo __package.json__ para añadir esto dentro de los scripts:

```javascript
"scripts": {
    "build": "webpack --config=config/webpack.dev.js"
},
```

Asi solo tenemos que ejecutar __npm run build__ para compilar nuestro archivo __app.js__