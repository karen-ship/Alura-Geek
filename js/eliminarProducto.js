import { conexionAPI } from "./conexionAPI.js";


async function prueba() {
    const listaAPI = await conexionAPI.listarProductos();

    const imgTrash = await document.querySelectorAll("[data-eliminar]");

    imgTrash.forEach(element => {
        element.addEventListener("click", () => {
            const card = ((element.parentElement).parentElement).id;
            
            alert("Card con el id " + card + " ha sido eliminada");
            conexionAPI.eliminarProducto(card);
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