var express = require('express');//Modulo express retorna uma function para a variavel
var app = express();

//ROta

app.get("/", function (req, res) //chamo minha variavel app - rota principal representada pela 
{ res.send("sSeja bem vindo a ao meu app, Devs!") }); //chamo parametro de resposta e send serve para


app.get("/sobre", function (req, res) {res.send("Aqui voce encontra informacoes sobre o app")});



app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao meu blog");
});
//req = requisicao que recebe  e res a resposta ao cliente


app.listen(8095, function () {
    console.log("Servidor rodando no localhost:8095");
});




























app.listen(8095, function () {
    console.log('Server rodamdo ma porta localhost:8095');

});