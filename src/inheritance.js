

class Animal { 
   falar() { 
    console.log('Este animal faz som ')
   } 
}


class Cachorro extends Animal { 
    constructor (name) { //não funciona sem super 
        super()
        this.name = name;
    }
}


const doguinho = new Cachorro('dogezinho');

doguinho.falar(); 
console.log(doguinho.name)



class Cachorrinho extends Animal{ 
    falar() {  // substituindo o metodo da classe pai. 
        console.log("cacchorrinho falando ")
    }
}

const pincher = new Cachorrinho();

pincher.falar(); //cachorrinho falando 





