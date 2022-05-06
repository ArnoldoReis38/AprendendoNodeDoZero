//Criando uma variável constante para salvar a chamada do módulo File System
const fs = require('fs')
// Fazendo o fs ler o arquivo "arquivo.txt" com o modulo "readFile" passando 3 parametros
// e executando uma arrow-function, e dentro dela, usando a estrutura de seleção "if" 
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data)
})



