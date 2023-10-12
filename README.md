
# Object Oriented Programming   

A **Programação Orientada a Objetos (POO)** é um paradigma de programação que modela programas baseados no mundo real, usando conceitos como objetos, classes, herança e polimorfismo. No contexto da POO, existem princípios SOLID que são um conjunto de regras e práticas para orientar a implementação desse paradigma.

##### Como rodar os codigos: 
 
- `npx tsx nomearquivo.js `  ou 
- `npx tsx nomearquivo.ts`
- Compilar o código: `tsc` 
 


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


### **2. Classes:**

São modelos para criar objetos, definindo estrutura, propriedades e métodos compartilhados.

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

### **5. Polimorfismo:**

Permite que objetos de diferentes classes sejam tratados como da mesma classe, permitindo a substituição de métodos específicos.

### **6. Encapsulamento:**

Restringe acesso direto a propriedades/métodos, permitindo controle sobre a manipulação dos dados. 

- Basicamente criar metodos ou atributos privados em uma classe. Só poderão ser modificados por métodos internos daquela classe. 

```diff
- Observação: Os métodos e atributos das privados das classes devem começar com "_" para identifica-los.

```

### **7. Extends vs. Implements:**

- **extends:** Estabelece uma relação de herança, alterando a classe pai.
- **implements:** Estabelece uma relação de implementação, não alterando a classe pai e exigindo uma implementação na classe filha.

**Nota:** Extends proporciona uma relação mais forte, enquanto Implements proporciona uma relação mais fraca.

---

Compreender a Programação Orientada a Objetos e os princípios SOLID é essencial para criar software robusto e flexível. Utilize esses conceitos de acordo com as necessidades do seu projeto para desenvolver aplicações mais eficientes e de fácil manutenção.


