const {Schema, model} = require("mongoose")

const ProductosSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
})


module.exports = model("Productos", ProductosSchema);