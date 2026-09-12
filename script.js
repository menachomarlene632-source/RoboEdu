let productosLista = [

    {
        nombre: "Sensor ultrasónico",
        categoria: "Sensores",
        precio: 35,
        imagen: "📡"
    },

    {
        nombre: "Arduino UNO",
        categoria: "Microcontroladores",
        precio: 95,
        imagen: "💻"
    },

    {
        nombre: "Motor DC",
        categoria: "Motores",
        precio: 28,
        imagen: "⚙️"
    },

    {
        nombre: "Servo SG90",
        categoria: "Actuadores",
        precio: 32,
        imagen: "🔧"
    },

    {
        nombre: "Kit de Robótica",
        categoria: "Kits",
        precio: 180,
        imagen: "🤖"
    },

    {
        nombre: "Protoboard",
        categoria: "Otros",
        precio: 25,
        imagen: "🔌"
    }

];

let carrito = [];


/* MOSTRAR PRODUCTOS */

function mostrarProductos(lista = productosLista) {

    const contenedor = document.getElementById("listaProductos");

    contenedor.innerHTML = "";

    if (lista.length === 0) {

        contenedor.innerHTML = `
            <div class="sin-resultados">
                <h3>🔎 No se encontraron productos</h3>
                <p>Prueba con otro nombre o categoría.</p>
            </div>
        `;

        return;
    }

    lista.forEach((producto) => {

        const indiceReal = productosLista.indexOf(producto);

        contenedor.innerHTML += `

        <div class="producto">

            <div class="producto-imagen">
                ${producto.imagen}
            </div>

            <h3>${producto.nombre}</h3>

            <p class="categoria">
                ${producto.categoria}
            </p>

            <p class="precio">
                Bs ${producto.precio}
            </p>

            <button onclick="agregarCarrito(${indiceReal})">
                Agregar al carrito
            </button>

        </div>

        `;

    });

}


/* AGREGAR AL CARRITO */

function agregarCarrito(indice) {

    carrito.push(productosLista[indice]);

    document.getElementById("contador").innerText =
        carrito.length;

    alert("Producto agregado al carrito 🛒");

}


/* MOSTRAR CARRITO */

function mostrarCarrito() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;
    }

    let total = 0;

    let mensaje = "🛒 TU CARRITO\n\n";

    carrito.forEach((producto, indice) => {

        mensaje +=
            (indice + 1) + ". " +
            producto.nombre +
            " - Bs " +
            producto.precio +
            "\n";

        total += producto.precio;

    });

    mensaje +=
        "\nTOTAL: Bs " + total;

    alert(mensaje);

}


/* BUSCADOR */

function buscarProductos() {

    const input = document.getElementById("buscar");

    const texto = input.value
        .trim()
        .toLowerCase();

    if (texto === "") {

        mostrarProductos(productosLista);

        return;
    }

    const resultados = productosLista.filter(producto => {

        const nombre =
            producto.nombre.toLowerCase();

        const categoria =
            producto.categoria.toLowerCase();

        return (
            nombre.includes(texto) ||
            categoria.includes(texto)
        );

    });

    mostrarProductos(resultados);

}


/* FILTRAR CATEGORÍA */

function filtrar(categoria) {

    const resultados =
        productosLista.filter(producto =>
            producto.categoria === categoria
        );

    mostrarProductos(resultados);

    document.getElementById("productos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* MOSTRAR TODOS LOS PRODUCTOS */

function mostrarTodosProductos() {

    document.getElementById("buscar").value = "";

    mostrarProductos(productosLista);

    document.getElementById("productos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* CATEGORÍAS */

function mostrarTodasCategorias() {

    alert(
        "Categorías disponibles:\n\n" +
        "📡 Sensores\n" +
        "💻 Microcontroladores\n" +
        "⚙️ Motores\n" +
        "🔧 Actuadores\n" +
        "🤖 Kits\n" +
        "🔌 Otros"
    );

}


/* MENÚ */

function abrirMenu() {

    document.getElementById("menu")
        .classList.add("abierto");

}


function cerrarMenu() {

    document.getElementById("menu")
        .classList.remove("abierto");

}


/* NAVEGACIÓN */

function inicio() {

    cerrarMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function categorias() {

    cerrarMenu();

    document.getElementById("categorias")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function productos() {

    cerrarMenu();

    document.getElementById("productos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* FAVORITOS */

function mostrarFavoritos() {

    alert(
        "❤️ Favoritos\n\n" +
        "Aquí podrás guardar tus productos favoritos."
    );

}


/* PERFIL */

function mostrarPerfil() {

    alert(
        "👤 PERFIL\n\n" +
        "Bienvenido a RoboEdu.\n\n" +
        "Tu perfil aparecerá aquí."
    );

}


/* INICIAR PÁGINA */

mostrarProductos(); 
