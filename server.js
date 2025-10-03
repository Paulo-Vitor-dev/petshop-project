const express = require("express");
const session = require("express-session");
const mysql = require("mysql2");
const path = require("path");

const app = express();  
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "segredo-petshop", 
    resave: false,
    saveUninitialized: false
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "PETSHOP"
});

db.connect(err => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
        return;
    }
    console.log("Conectado ao MySQL");
});

app.use(express.static(path.join(__dirname)));

app.post("/cadastro", (req, res) => {
    const { username, password, email} = req.body;

    db.query(
        "INSERT INTO USUARIOS (nome, senha, email) VALUES (?, ?, ?)",
        [username, password, email],
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao cadastrar!");
            }
            res.redirect("/pages/login.html?status=created_alert");
        }
    );
});


app.post("/login", (req, res) => {
    const { username, password} = req.body;

    db.query("SELECT * FROM USUARIOS WHERE nome = ?", [username], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro no servidor!");
        }
        if (results.length === 0) {
            return res.status(404).send("Usuário não encontrado.");
        }

        const user = results[0];

        if (password === user.senha) {
            req.session.user = user.nome;
            res.redirect("/index.html?status=loggedin");
        } else {
            res.status(401).send("Senha incorreta.");
        }
    });
});


app.get("/painel", (req, res) => {
    if (!req.session.user) return res.redirect("/pages/login.html");
    res.sendFile(path.join(__dirname, "painel.html"));
});

app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect("/painel");
        }
        res.clearCookie('connect.sid');
        res.redirect("/");
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});