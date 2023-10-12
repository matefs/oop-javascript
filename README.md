
# POOO README

A **Programação Orientada a Objetos (POO)** é um paradigma de programação que modela programas baseados no mundo real, usando conceitos como objetos, classes, herança e polimorfismo. No contexto da POO, existem princípios SOLID que são um conjunto de regras e práticas para orientar a implementação desse paradigma.

## **Características**

### **Programação Orientada a Objetos**

- **Definição:** Paradigma de programação
- **Objetivo:** Criar software modelado a partir do mundo real
- **Escopo:** Linguagens de programação orientadas a objetos
- **Aplicação:** Todas as fases do desenvolvimento de software

### **Princípios SOLID**

- **Definição:** Regras e práticas
- **Objetivo:** Criar software robusto, flexível e fácil de manter
- **Escopo:** Fases de design e implementação

## **Conceitos Fundamentais**

### **1. Objetos:**

Representam dados e comportamentos, contendo propriedades e métodos.

```jsx

let pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
    }
};

pessoa.saudacao();

```

### **2. Classes:**

São modelos para criar objetos, definindo estrutura, propriedades e métodos compartilhados.

```jsx
 
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
    }
}

let pessoa = new Pessoa("João", 30);
pessoa.saudacao(); // Saída: "Olá, meu nome é João e eu tenho 30 anos."

```

### **3. Diferença entre Objeto Literal e Objeto de Classe:**

### Objeto Literal:

- **Sintaxe:** **`{}`**
- **Comportamento:** Não possui
- **Reutilização:** Não é possível
- **Testabilidade:** Mais difícil
- **Escalabilidade:** Mais difícil

### Objeto de Classe:

- **Sintaxe:** **`class`**
- **Comportamento:** Pode ter
- **Reutilização:** É possível
- **Testabilidade:** Mais fácil
- **Escalabilidade:** Mais fácil

### **4. Herança:**

Permite que classes herdem propriedades/métodos de outras, estabelecendo relações superclasse e subclasse.

```jsx

class Animal {
    falar() {
        console.log("Este animal faz um som.");
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro late.");
    }
}

let cachorro = new Cachorro();
cachorro.falar(); // Saída: "O cachorro late."

```

### **5. Polimorfismo:**

Permite que objetos de diferentes classes sejam tratados como da mesma classe, permitindo a substituição de métodos específicos.

```jsx

class Animal {
    fazerSom() {
        console.log("Este animal faz um som.");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("O cachorro late.");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("O gato mia.");
    }
}

let cachorro = new Cachorro();
let gato = new Gato();

cachorro.fazerSom(); // Saída: "O cachorro late."
gato.fazerSom(); // Saída: "O gato mia."

```

### **6. Encapsulamento:**

Restringe acesso direto a propriedades/métodos, permitindo controle sobre a manipulação dos dados.

```jsx

function ContaBancaria() {
    let saldo = 0;

    this.depositar = function(valor) {
        saldo += valor;
    };

    this.verSaldo = function() {
        console.log("Saldo: " + saldo);
    };
}

let conta = new ContaBancaria();
conta.depositar(100);
conta.verSaldo(); // Saída: "Saldo: 100"

```

### **7. Extends vs. Implements:**

- **extends:** Estabelece uma relação de herança, alterando a classe pai.
- **implements:** Estabelece uma relação de implementação, não alterando a classe pai e exigindo uma implementação na classe filha.

**Nota:** Extends proporciona uma relação mais forte, enquanto Implements proporciona uma relação mais fraca.

---

Compreender a Programação Orientada a Objetos e os princípios SOLID é essencial para criar software robusto e flexível. Utilize esses conceitos de acordo com as necessidades do seu projeto para desenvolver aplicações mais eficientes e de fácil manutenção.


