

class Pessoa { 
    constructor(nome, idade ) { 
        this.nome = nome;
        this.idade = idade
    }
    saudacao() { 
        console.log(`Olá ${this.nome}`)
    }

  } 


  console.log(Pessoa)

  var p = new Pessoa("Mateus", 22); 
  p.saudacao(); 




