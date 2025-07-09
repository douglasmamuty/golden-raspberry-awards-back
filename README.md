---
## 📘 Golden Raspberry Awards API

API RESTful desenvolvida em Node.js com TypeScript para fornecer dados sobre os vencedores do Golden Raspberry Awards. O projeto suporta filtros, paginação, projeções personalizadas e segue boas práticas de arquitetura.
---

### 🚀 Features

- Paginação com filtros (por ano, vencedor, etc)
- Projeções especiais:
  - Anos com múltiplos vencedores
  - Estúdios com mais vitórias
  - Intervalos de vitórias de produtores (máximo/mínimo)

- Validação de entrada com Zod
- Documentação com Swagger
- Banco de dados em memória (LowDB)

---

### 🛠️ Tecnologias

- Node.js
- TypeScript
- Express
- LowDB (persistência local)
- Zod (validação de DTOs)
- Swagger (documentação automática)
- Husky + Commitizen (convenções de commits)

---

### 📦 Instalação

```bash
git clone https://github.com/seu-usuario/golden-raspberry-awards-api.git
cd golden-raspberry-awards-api
npm install
```

---

### ▶️ Rodando o Projeto

```bash
npm run dev
```

> A API estará disponível em: `http://localhost:3000`

---

### 📄 Documentação

Acesse: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

### 🧪 Testando Endpoints

```http
GET /movies?winner=true&year=2018
GET /movies?projection=studios-with-win-count
```

---

### 📁 Estrutura de pastas

```
src/
├── controllers/
├── services/
├── routes/
├── database/
├── utils/
├── dtos/
├── enums/
├── types/
```

### 🧪 Testes de Integração

Este projeto utiliza **Jest** para rodar os testes de integração com banco de dados em memória (`lowdb`).
Certifique-se de que você executou a instalação das dependências:

```bash
npm install
```

### ▶️ Rodar os testes

Para executar todos os testes (incluindo integração):

```bash
npm run test
```

Esse comando irá:

- Limpar o banco de dados em memória antes de cada teste.
- Carregar os dados da planilha `movielist.csv`.
- Executar os testes de integração do serviço `listMovieService`.
