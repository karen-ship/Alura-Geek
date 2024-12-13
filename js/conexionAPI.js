
async function listarProductos() {
    const conexion = await fetch("http://localhost:3000/productos");

    const conexionConvertida = await conexion.json();

    // console.log(conexionConvertida);

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al eliminar el producto");
    }
}



async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:`$ ${precio}`,
            imagen:`http://127.0.0.1:5500/img/${imagen}`
        })
    });

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al registrar el producto");
    }

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}


export const conexionAPI = {
    listarProductos, enviarProducto, eliminarProducto
};