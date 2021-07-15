class Productos {
    nombre = '';
    precio = 0.0;
    descripcion = '';
    tipo = "";
    foto = "";

    constructor(nombre, precio, descripcion, tipo, foto){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.foto = foto;
    }

}

module.exports = Productos;