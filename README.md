# Integración Babel & Webpack

Babel es un "transpilador" de archivos JavaScript de código moderno (ES2015, ES2018... etc) en código "antiguo" ES5 que entienden todos los
navegadores actuales...

Instrucciones basicas:

1. Instalar babel-loader, @babel/core y @babel/preset-env

```shell
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

2. Crear archivo de configuración __.babelrc__

```javascript
{
  "presets": ["@babel/preset-env"]
}
```

3. Añadir dentro del objeto __module: {}__ en las configuración de webpack la siguiente regla:

```javascript
module: {
  rules: [
    { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
    }
  ]
}
```

Es la configuración basica de integración, para especificar lo que tiene que hacer __babeljs__ se utiliza el citado __.babelrc__. En este caso se utiliza __preset-env__ una lista de plugins estandar.