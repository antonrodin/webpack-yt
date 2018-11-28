# Configuración basica de webpack-dev-server

webpack-dev-server es una "preconfiguración" de webpack por llamarlo de alguna mamera que sirve nuestra aplicación desde la 
memoria. Es útil por que podemos ver los cambios en tiempo real, según cambiemos nuestro proyecto. Sin tener que recompilar constantemente
el código fuente.

Ademas de clonar este "pequeño proyecto" puedes hacerlo tu mismo haciendo esto:

1. Instalar webpack-dev-server

```shell
sudo npm i -g webpack-dev-server
```

1. Creamos otro archivo configuración (__config/server.dev.js__) con este código.

```javascript
const path = require('path');

module.exports = {

    mode: "development",

    entry: {
        app: ['./src/app.js']
    },
    
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },

    devServer: {
        contentBase: "dist"
    }

}
```

2. Ahora podemos ejecutar webpack-dev-server

```shell
webpack-dev-server --config=config/server.dev.js
```

3. Por ultimo modificamos el archivo package.json para añadir dentro de los script esta linea:

```javascript
"server": "webpack-dev-server --config=config/server.dev.js"
```

