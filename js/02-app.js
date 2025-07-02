//  Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Metodos
    mostrarInformación() {
        return `Cliente ${this.nombre}, tiene un saldo de ${this.saldo}`;
    }

    //Propiedades estáticas
    static bienvenida() {
        return `Bienvenidos`
    }
}

const santana = new Cliente('José', 500);
console.log(santana.mostrarInformación());
console.log(santana);
console.log(Cliente.bienvenida()); // Llamar la propiedad estática

// Class Expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformación() {
        return `Cliente ${this.nombre}, tiene un saldo de ${this.saldo}`;
    }
}

const santana2 = new Cliente2('Bolívar', 600);
console.log(santana2.mostrarInformación());
console.log(santana2);
