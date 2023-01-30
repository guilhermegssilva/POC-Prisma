# POC-Prisma

Uma aplicação para gerenciar suas notas de videogames.

## Endpoints

  `GET /games`: Recebe uma lista com todos os jogos registrados.
  
  `POST /games`: Cria um novo registro de um jogo.
  
  ```json

 {
    "imgUrl": "https://images3.alphacoders.com/608/thumbbig-608887.webp",
    "title": "The Witcher 3: Wild Hunt",
    "platform": "Xbox One",
    "genre": "RPG"
  }
```

  `DELETE /game/:id`: Deleta um jogo.

  `GET /games/reviews`: Recebe uma lista com todas as review feitas.

  `GET /games/platform`:Recebe todas as plataformas e quantidade de jogos cadastrados.
  
  `GET: /games/genres`: Recebe uma lista com todos os gêneros e os jogos que estão classificados.
  
  `GET: /games/reviews`: Recebe uma lista com todas as reviews feitas.
  
   `PUT: /games/:id`: Altera a nota de um jogo.

 ```json
 {
    "score": 5
  }
```

 ## Instalação
  Clone o repositório: https://github.com/guilhermegssilva/POC-Prisma.git
  
  Instale as dependências: ```npm install```

  Coloque no seu arquivo .env a url do banco do postgres `ex: postgres://postgres:password@localhost:5432/database_name`
  
  Instale todas as migrações: `npx prisma migrate dev`

  Inicie o server: ```npm run dev```
  
