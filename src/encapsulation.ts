class ContaBancaria {
    private _saldo: number = 0;

    // Método getter para obter o saldo
    public getSaldo() {
        return this._saldo;
    }

    // Método setter privado para definir o saldo
    private _setSaldo(valor: number) {
        this._saldo = valor;
    }

    public depositar(valor: number) {
        // Chama o método privado _setSaldo para definir o saldo
        this._setSaldo(this._saldo + valor);
        console.log(`Depósito de ${valor} feito com sucesso.`);
    }

    public verSaldo() {
        console.log(`Saldo atual: ${this._saldo}`);
    }
}

const minhaConta = new ContaBancaria();


// Tentativa de acessar o saldo diretamente resultará em undefined
// console.log(minhaConta._saldo); // Saída: undefined


// Tentativa de chamar _setSaldo diretamente resultará em um erro
// minhaConta._setSaldo(50);  // não permite porque o setSaldo só pode ser usado pelo metodo depositar


minhaConta.verSaldo(); // Saída: Saldo atual: 0
minhaConta.depositar(10); // Saída: Depósito de 10 feito com sucesso.
minhaConta.verSaldo(); // Saída: Saldo atual: 10

