const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Teste??")
})

app.get("/api", (req, res) => {
    res.json({message: "Este é a API"})
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}')
})