module.exports = {
    components: {
        schemas: {
            Task: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: "identificador",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    nombre: {
                        type: 'string',
                        description: "nombre del producto",
                        example: "Zapatillas azules"
                    },

                    descripcion: {
                        type: 'string',
                        description: "Descripcion del producto",
                        example: "Unas zapatillas azules normales"
                    },
                    imagen: {
                        type: 'string',
                        description: "Imagen del producto",
                        example: ""
                    },
                    categoria: {
                        type: 'string',
                        description: "categoria del producto",
                        example: "Zapatos"
                    },
                    
                    talla: {
                        type: 'boolean',
                        description: "Talla del producto",
                        example: "XL"
                    },
                    precio: {
                        type: 'double',
                        description: "Precio del producto",
                        example: "15"
                    }
                }
            }
        }
    }
}