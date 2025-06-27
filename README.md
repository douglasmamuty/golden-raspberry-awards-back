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

