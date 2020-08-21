<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h1 align="center">
    <img alt="Foodfy" src="https://res.cloudinary.com/lukemorales/image/upload/v1562696000/readme_logos/react-rocketshoes_jy1lze.png" />
    <br>
    Foodfy
</h1

<h3 align="center">
  Projeto Desafio do Bootcamp Launchbase da [Rocketseat](https://rocketseat.com.br)
</h3>

<blockquote align="center">“Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.”</blockquote>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lukemorales/react-rocketshoes.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lukemorales/react-rocketshoes.svg">

  <a href="https://www.codacy.com/app/lukemorales/react-rocketshoes?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=lukemorales/react-rocketshoes&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/1b577a07dda843aba09f4bc55d1af8fc.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lukemorales/react-rocketshoes.svg">
  <a href="https://github.com/lukemorales/react-rocketshoes/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lukemorales/react-rocketshoes.svg">
  </a>

  <a href="https://github.com/lukemorales/react-rocketshoes/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lukemorales/react-rocketshoes.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/lukemorales/react-rocketshoes.svg">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Bruno Weber" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Desenvolver uma aplicação completa de receitas para uma empresa fictícia chamada "Foodfy", incluindo o Admin para o gerenciamento dessas receitas.

### Show

Crie uma rota para lidar com a apresentação dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `show` para buscar e retornar o professor a partir do `id` fornecido na rota. Os seguintes dados precisam ser formatados:

- Idade: Crie um arquivo `utils.js` que exporta uma função chamada `age`. Essa função deve retornar a idade a partir do parâmetro (data de nascimento) informado;
- Grau de escolaridade: crie uma função `graduation` no arquivo `utils.js`. Essa função deve retornar o grau de escolaridade formatado a partir do valor do select informado (ex.: **Ensino Médio Completo** para o valor **medio** do `select`);
- Acompanhamento: Utilize o método `split` da string para gerar um array com as matérias que o professor leciona;
- Desde: Utilize o constructor `Intl` e seus métodos para gerar uma data no formato `dia/mes/ano`.

Ao fim da apresentação dos dados, crie um link que irá redirecionar para a rota de edição dos dados cadastrados.

### Edição

Crie uma rota para lidar com a edição dos dados cadastrados de um professor. Dentro do arquivo `teachers.js`, crie um método `edit` para buscar e retornar o professor a partir do `id` fornecido na rota. Utilize a mesma interface da rota de apresentação dos dados do professor (lembrando de fazer o reaproveitamento do form com um arquivo `fields.njk`). Por fim, crie uma função chamada `date` no arquivo `utils.js`. Essa função deve retornar a data no formato `yyyy-mm-dd` para a correta exibição no input do tipo `date` no HTML (lembre de tratar os dias e meses menores que 10 utilizando o método `splice` da string).

### Estilização

A estilização 

## :calendar: Entrega e Aprovação

Esse desafio está **em andamento** e receberá correção da Rocketseat.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Bruno Weber](https://brunoweber.com.br) :wave:
