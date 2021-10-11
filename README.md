## Como rodar o projeto

1. Para rodar o servidor do Back-end é essencial que tenha **Docker** e **Docker Compose** instalado, passo a passo da instalação nos links abaixos: <br />
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Composer](https://docs.docker.com/compose/install/)

1.1 (Opcional) Caso opte pela não utilização do docker será necessário ter instalado no seu computador NodeJS e MongoDB, passo a passo nos links:
- [NodeJS](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)


2. Clone repositório: 
```
git clone https://github.com/EvandroRBR/Crud-user-client.git
```

3. Para a instalação das dependencias do projeto, execute: 
```
yarn
```
ou 
```
npm install
```

3. Crie um arquivo .env para para a conexão do Mongo na raiz do projeto:
```
MONGO_DB_URL=mongodb://root:carson@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false

```


4. Para iniciar o servidor, agora execute: 
```
docker-compose up
```
