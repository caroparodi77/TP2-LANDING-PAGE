const listaProductos = document.querySelector("#cards");
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
   
      <div>
      <div class="card mt-5"style="width: 18rem;">
        <img src="img/${imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcionCorta}</p>
        <a href="productos.html?id=${producto.id}" class="btn btn-primary">Ver más</a>
      </div>
      </div>
      </div>
    


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
















