# Desafio de API DUFF

Desenvolvi como forma de desafio tecnico uma plataforma com base na temperatura é retornado uma sugestao de cerveja e uma playlist de músicas do spotify

## Recursos

- Listagem de cervejas
- Detalhes de uma cerveja
- Atualização de uma cerveja
- Cadastro de uma cerveja
- Documentação com swagger
- Sugestão de cerveja e playlist com base na temperatura
- integração com Spotify

## Installation

Vamos executar o sistema

##### On-line

[https://duff.onrender.com/docs/v1/](https://duff.onrender.com/docs/v1/)
O link acima disponibilzei afim de vermos o swagger de forma mais rápida
[https://www.postman.com/bold-meadow-65414/workspace/duffapi/request/10998459-ca9c5b85-968e-4db1-b130-9fd7f1143b09](Playground (Teste os end-points))
O link acima disponibilzei afim de vermos o Playground e os end-points e testa-los de forma mais rápida

Abaixo veremos outros métodos de executar a aplicação, nesse caso será necessario criar um banco de dados no mysql localmente ou remoto, mas se caso opte por fazer o deploy é necessario que o banco eseteja remotamente.

##### Via docker

Primeiro passo e clonar esse repositório, posteriomente editamos o arquivo .env presente nele informando as informaçoes necessarias, e depois raiz do projeto é só executar os comandos:

```sh
docker build -t jarder_aplication  .
docker run -p 3333:3333 jarder_aplication
```

E a aplicaçao irá executar em: [http://localhost:3333/](http://localhost:3333/)

##### Tradicional

Primeiro passo e clonar esse repositório, posteriomente editamos o arquivo .env presente nele informando as informaçoes necessarias, e depois raiz do projeto é só executar os comandos:

```sh
npm install // ou yarn install
npm run dev // ou yarn dev
```

E a aplicaçao irá executar em: [http://localhost:3333/](http://localhost:3333/)

##### Deploy

Para um exemplo de deploy iremos usar a plataforma [https://render.com/](Render) que nos disponibiliza formas de fazer deploys de forma gratiuta, vamos para os passos

- Entre no site e faça seu cadastro ou login
- Na dashboard clique em new WebService
- Na pagina seguinte vá até Public Git repository e cole o link desse repositorio e clique em continuar
- No campo nome fique a vontade a dar um nome para a aplicaçao
- No campo Runtime selecione Node
- No campo Build Command coloque o seguinte conteudo: npm i && npx yarn build && npx sequelize db:create && npx sequelize db:migrate
- No campo Start Command coloque: npm run start
- Busque um botao chamado Advenced e clique nele
- E clique no botao Add environment variables
- Coloque as variaveis de ambiente (As mesmas presente no .env do repositorio)
- E por fim clique em Create web Service e aguarde o processo terminar (pode demorar um pouco)

##### Testes unitários

Essa aplicação foi realizado alguns testes unitário com a lib Jest, e para executar:

```sh
npm run test // ou yarn test
```

Nesse projeto utilizei:

- NodeJS

---
