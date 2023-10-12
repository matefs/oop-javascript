let pessoa  = { 
    nome : "Mateus",
    idade : 22 ,
    saudacao : function ()  { console.log( ` Olá ${this.nome} `) } 
}

console.log(pessoa )

pessoa.saudacao() ;

