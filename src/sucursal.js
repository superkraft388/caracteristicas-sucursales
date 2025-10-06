class Sucursal {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    obtenerInformacion() {
        return `Sucursal: ${this.nombre}, Dirección: ${this.direccion}`;
    }
}

module.exports = Sucursal;