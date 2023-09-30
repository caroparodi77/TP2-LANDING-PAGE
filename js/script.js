const listaProductos = document.querySelector("#list-group");
// const container = document.querySelector ("#descripcion")
let productos;

const cargarProductos = async () => {
  localStorage.clear();
  listaProductos.innerHTML = "";

  productos = localStorage.getItem("productos");

  if (productos == null) {
    const response = await fetch("json/productos.json");
    productos = await response.json();
    // esto me permite leer el archivo json

    localStorage.setItem("productos", JSON.stringify(productos));
    // con esto transformo el objeto js en un string json
  }

  if (typeof productos == "string") {
    productos = JSON.parse(productos);
  }

  productos.forEach(createProducts);
};

const createProducts = (producto) => {
    const imagen = producto.imagen ?? "pawel-szvmanski-oUOxOSPbcJk-unsplash.jpg";
    const productoHTML = `
      <article>
          <h2>${producto.nombre}</h2>
          <h3 >${producto.descripcionCorta}</h3>
         
          <a type="button" class="btn btn-primary" href="productos.html?id=${producto.id}"> VER</a>  
          <img src="img/${imagen}">
      </article>
    `;
  
    listaProductos.innerHTML += productoHTML;
  };

  cargarProductos();

  document.addEventListener("click", (event) => {
    if (event.target.tagName == "a") {
      console.log(event.target.dataset.id);
      sessionStorage.setItem("id", event.target.dataset.id);
      window.location = "productos.html";
    }
  });
















