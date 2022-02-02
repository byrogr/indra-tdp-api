class Errors extends Error {
    constructor(error){
        super();
        this.codigo = error.codigo
        this.mensaje = error.mensaje
    }

    responseJson(){
        return {
            codigo : this.codigo,
            mensaje : this.mensaje
        }
    }
}

module.exports = Errors