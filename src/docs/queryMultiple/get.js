module.exports = {
    get: {
        tags: ["Query Muliple"],
        parameters: {
            $ref:"#/header/parameters/XIBMClientIdParam",
            in: query,
            name: typeData,
            required : true,
            schema:{
                type: String
            },
            description: "El tipo de busqueda que se va a realizar",
            in : query,
            name : text,
            required : true,
            schema:{
                type: String
            },
            description: "Dependiendo del tipo de busqueda el text puede ser DNI,MAC,ID,Telefono"
        }

    }
}