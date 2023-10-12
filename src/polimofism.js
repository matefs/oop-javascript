
class Animal {
    fazerSom() {
        console.log('Animal fazendo som ')
    }
}


class Cachorro extends Animal {
    fazerSom() {
        console.log('au au')
    }
}



class Gato extends Animal {
    fazerSom() {
        console.log('miau miau')
    }
}

let cachorro = new Cachorro()
cachorro.fazerSom();

let gato = new Gato() 
gato.fazerSom() 

