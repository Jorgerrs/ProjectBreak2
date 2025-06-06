const { put } = require("../routes/productRoutes");

module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          Task: "Crear una tarea",
        },
        description: "Crear una tarear con los parametros requeridos",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Tarea creada correctamente",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/": {
      get: {
        tags: {
          Task: "Devuelve todas las tareas",
        },
        description: "Devuelve todas las tareas en la base de datos",
        operationId: "getTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Tareas devueltas correctamente",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/id/:_id": {
      get: {
        tags: {
          Task: "Devolver tarea id",
        },
        description: "devuelve una tarea mediante un identificador",
        operationId: "getIdTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Tarea con identificador devuelta correctamente",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/markAsCompleted/:_id": {
      put: {
        tags: {
          Task: "Completar tarea",
        },
        description: "Cambiar estado de completo a una tarea",
        operationId: "completeTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Tarea completada correctamente",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/delete/:_id": {
      delete: {
        tags: {
          Task: "Borrar una tarea con Id",
        },
        description: "Borrar una tarear con los parametros requeridos",
        operationId: "deleteTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Tarea borrada correctamente",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
  },
}; 

