class Pessoa {
  constructor(nome) {
    this._nome = nome;
  }

  // Getter para obter o nome
  get nome() {
    return this._nome;
  }

  // Setter para definir o nome
  set nome(novoNome) { 
    console.log('It called the set  method');
    this._nome = novoNome;
  }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa('João');

// Chamando o getter para obter o nome
console.log(pessoa1.nome); // Saída: João

// Chamando o setter para definir um novo nome
pessoa1.nome = 'Maria';

// Chamando o getter novamente para obter o novo nome
console.log(pessoa1.nome); // Saída: Maria

