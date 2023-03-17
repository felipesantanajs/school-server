✅ School Server - Server em Node.JS 

## Api onde é possível:

- cadastrar turmas, os alunos de cada turma e as disciplinas de cada turma.
- cadastrar um professor e as disciplinas que ele leciona.
- buscar os dados de um professor com suas disciplinas.
- buscar um aluno com a sua turma, as disciplinas de sua turma e os professores de cada disciplina.
- remover um aluno e/ou professor.

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/felipesantanajs/school-server.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd school-server

# Instale as dependências
$ npm install

$ Banco de Dados utilziado foi o Postgresql
- Utilizei ele no https://railway.app/, lá tenho 200h gratuitas para testes.

OBS: 
Na questão do banco de dados necessario criar um arquivo .env na raiz do projeto colocar a seguinte varivel de ambiente:
DATABASE_URL="postgresql://postgres:...(Link de acesso ao banco de dados do postgresql)"

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>

Obs: Na pasta src/modules tem as pasta de cada ação, lá encontrará as rotas para serem testadas. 
```

### 🛠 Tecnologias 
- Node.Js
- Typescript
- Fastify 
- Prisma
- Zod
- DB PostgreSQL
