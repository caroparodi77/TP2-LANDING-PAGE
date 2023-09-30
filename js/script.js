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
      <div class=container>
        <div class= "text-center mt-5" >
            <h3 >${producto.nombre}</h3>
            <p >${producto.descripcionCorta}</p>
        </div>  
        <div class="d-flex justify-content-center"> 
            <img src="img/${imagen}">
        </div>
        <div class="d-flex justify-content-center">
            <a type="button" class="btn btn-secondary mt-3 mb-5" href="productos.html?id=${producto.id}"> Ver más</a>
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
















