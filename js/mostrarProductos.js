import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");


function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("article");
    
    producto.className = "mis-productos__card";
    producto.id = id;
    producto.innerHTML = `
        <div class="container-img">
            <img class="item__img" src="${imagen}" alt="Figura Stormtrooper">
        </div>
        <p class="item__titulo">${nombre}</p>
        <div class="container-precio-eimg">
            <p class="item__precio">${precio}</p>
            <img id="${id}.1" data-eliminar class="img-trash" src="./img/icon_trash.png" alt="">
        </div>
    `;

    return producto;
}

export default async function listarProductos() {
    try {
        const listaAPI = await conexionAPI.listarProductos();
        listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)));

        if (listaAPI.length == 0) {
            lista.innerHTML = `<h2 class="mensaje__titulo">No se han agregado productos :(</h2>`;
        }

    }catch (error) {
        lista.innerHTML = `<h2 class="mensaje__titulo">No se han agregado productos :(</h2>`;
    }
}

listarProductos();