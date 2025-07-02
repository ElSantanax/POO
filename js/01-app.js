//  Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const santana = new Cliente('José', 500);
console.log(santana);


// Class Expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const santana2 = new Cliente2('José', 500);
console.log(santana2);
