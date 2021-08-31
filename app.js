
const listaDeProductos = [
    { nombre: "Medias", precio: 100 },
    { nombre: "Gorro", precio: 250 },
    { nombre: "Remera", precio: 1000 },
]

function filtarProductos(valor) {
    const productosFiltrados = listaDeProductos.filter(unElemento => unElemento.precio <= valor)
    // agrega un nuevo nodo HTML
    productosFiltrados.forEach(producto => {
        const elemento = document.createElement('p')
        elemento.innerText  = producto.nombre
        document.getElementById("lista").appendChild(elemento)
    })
}