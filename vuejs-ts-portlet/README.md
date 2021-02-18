# Vue.js TypeScript Portlet
Plain Vue.js Portlet sample for Liferay >= 7.2 with configuration and localization support. 

## Project setup
### Install all dependencies
```shell script
npm i
```

### Define all environment specific variables
- Liferay directory in `.npmbuildrc` e.g. 
```json
{
  "liferayDir": "/opt/liferayPlayground/"
}
```

- Variables in `liferay.portlet.config` for hot reload functionality (see https://github.com/faragos/lfr-js-portlet-utils#config for all available options and defaults)

## Available Methods
### Compiles and hot-reloads for development
```shell script
npm run start
```

### Compiles and minifies for production
```shell script
npm run build
```

### Build and deploy the portlet to the defined Liferay instance
```shell script
npm run deploy
```

### Run ESLint over all files
```shell script
npm run lint
```
