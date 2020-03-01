<p align="center">
    <img width="200" src="https://raw.githubusercontent.com/sgraewe/nuxt-tailwind/master/_assets/img/nuxt-tailwind.png">
</p>

<p align="center">
    A <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt.js</a> starter project template using <a href="https://github.com/tailwindcss/tailwindcss" target="_blank">Tailwind CSS</a> without the distraction of a complicated development environment.
</p>

---

## Prerequisites

Make sure to have `node 8.0+` and `npm 5.0+` installed

## TailwindCSS

We have updated to version `1.X`.
Check out the new docs [TailwindCSS](https://next.tailwindcss.com/)

## Storybook
Storybook was already installed preconfigured, using Ferdi the storyfile is created automatically. Storybook uses its own CSS file, so that by means of a NPM command is generated.

```bash
npm run storybook:css
```

## Ferdi
To make it easier to start with a new Vue component, there are ready-made Ferdi templates in the `.ferdi` directory. Ferdi is a node-based file generator, which is installed as a global node module.

```bash
npm install -g ferdi
```

Afterwards you can create new components with Ferdi.

```bash
ferdi basic/BasicComponent
```

Ferdi then creates four files in the directory `/components/basic/BasicComponent/`. Once the Vue File, a Story, a Nodes and a Testfile.

If you need a Store module file:

```bash
ferdi testStore --store --flat
```

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
$ vue init gisu/nuxt-tailwind-storybook my-project
$ cd my-project
# install dependencies
$ npm install # yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (`vue -V`).

## Usage

### Development

```bash
# serve with hot reloading at localhost:3000
$ npm run dev # yarn dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

```bash
# build for production and launch the server
$ npm run build # yarn build
$ npm start # yarn start
```

### Generate

```bash
# generate a static project
$ npm run generate # yarn generate
```
