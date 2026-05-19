# 🐾 Pelos & Patas - PetShop Project

## 📌 Sobre o projeto

O **Pelos & Patas** é um projeto Full Stack de um sistema web para pet shop desenvolvido com foco em aprendizado prático de desenvolvimento web moderno. O projeto possui interface responsiva, sistema de autenticação de usuários, integração com banco de dados MySQL e páginas informativas para apresentação dos serviços e produtos.

A aplicação foi desenvolvida utilizando tecnologias do ecossistema JavaScript tanto no front-end quanto no back-end.

---

## 🚀 Tecnologias utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript

### Back-end

* Node.js
* Express.js

### Banco de dados

* MySQL
* mysql2

### Outras bibliotecas

* express-session
* bcryptjs

---

## ✨ Funcionalidades

* ✅ Página inicial moderna e responsiva
* ✅ Sistema de cadastro de usuários
* ✅ Sistema de login com sessão
* ✅ Painel do usuário
* ✅ Página de produtos
* ✅ Página de novidades
* ✅ Página de contato
* ✅ Página sobre a empresa
* ✅ Integração com banco de dados MySQL
* ✅ Navegação dinâmica entre páginas

---

## 📂 Estrutura do projeto

```bash
petshop-project/
│
├── img/
├── pages/
│   ├── cadastro.html
│   ├── contato.html
│   ├── login.html
│   ├── novidades.html
│   ├── produtos.html
│   └── Sobre.html
│
├── index.html
├── painel.html
├── styles.css
├── script.js
├── server.js
├── package.json
└── package-lock.json
```

---

## ⚙️ Como executar o projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/Paulo-Vitor-dev/petshop-project.git
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd petshop-project
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Configure o banco de dados MySQL

Crie um banco chamado:

```sql
PETSHOP
```

Exemplo de tabela utilizada:

```sql
CREATE TABLE USUARIOS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    senha VARCHAR(255),
    email VARCHAR(255)
);
```

---

## ▶️ Executando o servidor

```bash
node server.js
```

Servidor disponível em:

```bash
http://localhost:3000
```

---

## 🌐 Deploy do projeto

🔗 GitHub Pages:

```bash
https://paulo-vitor-dev.github.io/petshop-project/
```

---

## 📸 Prévia do projeto

<img width="1350" height="599" alt="Captura de tela 2026-05-19 150615" src="https://github.com/user-attachments/assets/b64d9c3b-536f-4e3d-8cc9-c47724d18e83" />
<img width="1356" height="592" alt="petshop-fullstack" src="https://github.com/user-attachments/assets/43d65c97-58a6-4a1e-99c8-bd5a9c941126" />
<img width="1350" height="597" alt="Captura de tela 2026-05-19 151456" src="https://github.com/user-attachments/assets/ea00dc1e-bfd1-4828-baac-d35816653c5f" />

---

## 🎯 Objetivos do projeto

* Praticar desenvolvimento Full Stack
* Trabalhar integração entre front-end e back-end
* Aprender autenticação de usuários
* Utilizar banco de dados relacional
* Melhorar organização de código e estrutura de projeto

---

## 👨‍💻 Autor

### Paulo Vitor

* GitHub: [https://github.com/Paulo-Vitor-dev](https://github.com/Paulo-Vitor-dev)
* LinkedIn: [https://www.linkedin.com/in/paulovitor-dev-fullstack/](https://www.linkedin.com/in/paulovitor-dev-fullstack/)

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
