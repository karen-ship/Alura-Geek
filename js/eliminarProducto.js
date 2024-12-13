import { conexionAPI } from "./conexionAPI.js";
import listarProductos from "./mostrarProductos.js";


async function prueba() {
    const listaAPI = await conexionAPI.listarProductos();

    const imgTrash = await document.querySelectorAll("[data-eliminar]");

    imgTrash.forEach(element => {
        element.addEventListener("click", () => {
            const card = ((element.parentElement).parentElement).id;
            conexionAPI.eliminarProducto(card);
            listarProductos();
        });
    });

}

await prueba();












// const producto = document.getElementById("1");
// const elemento = document.querySelectorAll(".img-trash");

// // console.log(producto);

// // console.log(elemento);

// function asignacion() {
//     elemento.forEach(elemento => {
//         elemento.addEventListener("click", ()=>{
//             console.log(elemento.id);
//         });
//     });
// }

// asignacion();