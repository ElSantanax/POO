// Propiedades privadas
class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const jose = new Cliente('José', 200);
jose.setNombre('José');
console.log(jose.getNombre());