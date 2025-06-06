const Product = require("../models/Product");
const { put, post } = require("../routes/productRoutes");

module.exports = {
  paths: {
    "/dashboard": {
      get: {
        tags: {
          Product: "Devolver productos",
        },
        description: "esta ruta devuelve los productos de la web",
        operationId: "dashboard products",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Products",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Devuelve la pagina web",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/dashboard/new": {
      get: {
        tags: {
          Product: "Devuelve formularios alta producto",
        },
        description: "devuelve el formulario para crear un producto",
        operationId: "dashboard form",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Products",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Devuelve el formulario apra subir un producto",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/products/:_id": {
      get: {
        tags: {
          Product: "Devolver producto id",
        },
        description: "Devuelve el producto mediante un id",
        operationId: "dashboard products id",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Products",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Devuelve el producto en detalle",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/dashboard/:_id/edit": {
      put: {
        tags: {
          Product: "Devolver producto modificar",
        },
        description: "Devuelve el producto mediante un id para modificar",
        operationId: "dashboard products modify",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Products",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Devuelve el formulario para modificar",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/dashboard/_:id": {
      post: {
        tags: {
          Product: "actualizar productos",
        },
        description: "actualizar un producto",
        operationId: "update products",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Products",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Devuelve la pagina web",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    
    
    "/:_id/delete": {
      delete: {
        tags: {
          Product: "Borrar un Producto con Id",
        },
        description: "Borrar un producto con los parametros requeridos",
        operationId: "deleteProduct",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Producto borrado correctamente",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
  },
}; 

