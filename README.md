# ArcGIS API for JavaScript Template Application

## Propósito

This demo app shows to use to `i18n` locales with the [`@arcgis/webpack-plugin`](https://github.com/Esri/arcgis-webpack-plugin). The [dojo-webpack-plugin](https://github.com/OpenNTF/dojo-webpack-plugin) already handles `i18n` requests for webpack, but to use it properly in a TypeScript app, you need to do a couple of things.

### Add typings

Add a typing for the `i18n` loader plugin into your app. I do this via an extra `index.d.ts` file.

```ts
declare module "dojo/i18n!*" {
  const i18n: any;
  export = i18n;
}
```

### Update `tsconfig.json`

Update the `tsconfig.json` to point to use the added typings file.

```json
...
  "include": [
    "typings/index.d.ts",
    "src/**/*"
  ]
...
```

You also want to add a compiler option to read the locale JavaScript files.

```js
  "compilerOptions": {
    ...
    "allowJs": true,
    ...
  },
```

### Add nls

Now you can add nls files and use them in your app.

```js
// widgets/nls/Header.js
define({
  root: ({
    label: "Hello"
  }),
  "es": 1
});

// widgets/nls/es/Header.js
define({
  root: ({
    label: "Hello"
  }),
  "es": 1
});
```

Then consume it in TypeScript.

```ts
import i18n from "dojo/i18n!./nls/Header";

export const Header = (props: HeaderProperties) => (
  <header class={CSS.base}>
    <span class={CSS.title}>{i18n.label} - ArcGIS {props.appName}</span>
  </header>
);
```

## Usage

This application is written in [TypeScript](http://www.typescriptlang.org/) and utilizes the [`@arcgis/webpack-plugin`](https://github.com/Esri/arcgis-webpack-plugin).

You can develop, test, and build the application using various commands.

Run the application in development mode with a local development server.
```sh
npm start
```

Run the unit tests for the application. Unit tests are written with [Intern](https://theintern.io/).
```sh
npm test
```

Build the application for deployment.
```sh
npm run build
```

Run a production build of the application, but serve it up locally to see how the built app will behave.
```sh
npm run serve
```

Use `npm run serve` to full test that Service Workers are working correctly with `webpack-dev-server` self signed certifcates. Refer to [this article](https://deanhume.com/testing-service-workers-locally-with-self-signed-certificates/) on how to run Chrome with proper flags enabled for development purposes.
