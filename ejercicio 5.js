//ejercicio 5
function GeneradorDeUsuarios(nombreCompleto){
    if ((nombreCompleto) && (typeof nombreCompleto === 'string')){
        let nombre = nombreCompleto.split(' ')[0];
        let apellido = nombreCompleto.split(' ')[1];
        let usuario = (nombre + apellido).toLowerCase();
        return usuario;
    }
}