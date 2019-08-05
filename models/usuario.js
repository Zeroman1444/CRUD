const {Schema, model} = require('mongoose');

const usuarioSchema = new Schema({
    nombre: { type: String},
    correo: { type: String},
    tiene_hijos: { type: String},
    telefono: { type: String},
    estado_civil: { type: String},
    intereses: [{ type: String}],
    create_at: { type: Date, default: Date.now()}
});

module.exports = model('Usuario', usuarioSchema);