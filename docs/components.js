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
                    title: {
                        type: 'string',
                        description: "titulo de la tarea",
                        example: "Pruebas de test"
                    },
                    completed: {
                        type: 'boolean',
                        description: "estado de la tarea",
                        example: "true"
                    },
                }
            }
        }
    }
}