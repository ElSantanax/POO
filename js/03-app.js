class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Metodos
    mostrarInformación() {
        return `Cliente ${this.nombre}, tiene un saldo de $ ${this.saldo}`;
    }

    //Propiedades estáticas
    static bienvenida() {
        return `Bienvenidos`
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // Se usa para heredar
        this.telefono = telefono;
        this.categoria = categoria;
    }

    // Se reescribe
    static bienvenida() {
        return `Bienvenidos a la empresa`
    }
}

const santana = new Cliente('José', 500);
const empresa = new Empresa('TradePass', 5000)

console.log(empresa.mostrarInformación());
console.log(Cliente.bienvenida()); // Bienvenida de cliente
console.log(Empresa.bienvenida()); // Bienvenida de empresa