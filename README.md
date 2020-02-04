<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://i.ibb.co/C9Ppsnn/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio 2: FastFeet, o início
</h3>

<h3 align="center">
  :warning: Etapa 1/4 do Desafio Final :warning:
</h3>

<p>App para uma transportadora fictícia, o FastFeet - completo (back-end, front-end e mobile)</p>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>


## Version

<a href="https://nodejs.org/pt/"> NodeJS 12.14.1 </a>

## Installation

Clone the project with

```sh
git clone https://github.com/alexiakattah/fastfeet-api
```

Get in the path project, then install the dependencies with:

```sh
yarn
```

Then, you have to create your postgres database (Or another if you want) and fill your own fields in .env file.

Now, you have to create tables with the command:

```sh
yarn sequelize db:migrate
```

After database config, you can start the server with:

```sh
yarn start
```

If you are in development environment, you can use the development server:

```sh
yarn dev
```

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Docker](https://www.docker.com/docker-community)
- [Sequelize](http://docs.sequelizejs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [node-postgres](https://www.npmjs.com/package/pg)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Yup](https://www.npmjs.com/package/yup)
- [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/alexiakattah/gobarber-api/blob/master/LICENCE)

Made with ♥ by Alexia Kattah :wave: [Linkedin](https://www.linkedin.com/in/alexiakattah/)