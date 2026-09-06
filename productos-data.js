// productos-data.js — catálogo de juegos (simula la base de datos, todavía no existe backend)

const PRODUCTOS = [
  {
    id: "sombra-eterna",
    codigo: "JG-001",
    nombre: "Sombra Eterna",
    precio: 29990,
    categoria: "Terror",
    stock: 18,
    stockCritico: 5,
    imagen: "images/juego-sombra-eterna.svg",
    descripcion: "Terror y supervivencia en primera persona. Disponible para PC y consola."
  },
  {
    id: "cronicas-valyra",
    codigo: "JG-002",
    nombre: "Crónicas de Valyra",
    precio: 34990,
    categoria: "Aventura",
    stock: 12,
    stockCritico: 4,
    imagen: "images/juego-cronicas-valyra.svg",
    descripcion: "Aventura de fantasía con mundo abierto y modo cooperativo."
  },
  {
    id: "enigma-nocturno",
    codigo: "JG-003",
    nombre: "Enigma Nocturno",
    precio: 19990,
    categoria: "Misterio",
    stock: 25,
    stockCritico: 5,
    imagen: "images/juego-enigma-nocturno.svg",
    descripcion: "Misterio e investigación paso a paso, con final alternativo."
  },
  {
    id: "legado-imperios",
    codigo: "JG-004",
    nombre: "Legado de Imperios",
    precio: 24990,
    categoria: "Estrategia",
    stock: 9,
    stockCritico: 3,
    imagen: "images/juego-legado-imperios.svg",
    descripcion: "Estrategia histórica por turnos para PC."
  }
];

function buscarProducto(id) {
  return PRODUCTOS.find(function (p) { return p.id === id; });
}

function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-CL");
}
