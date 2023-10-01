const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const idProducto = urlParams.get('id');

function convertirAEstrellas(Puntuación) {
    const estrellasLlenas = Puntuación.length;
    const estrellasVacias = 5 - estrellasLlenas;

    const estrellasHTML = '<span class="estrella-llena">★</span>'.repeat(estrellasLlenas) +
        '<span class="estrella-vacia">☆</span>'.repeat(estrellasVacias);

    return `<p class="puntuacion-estrellas">${estrellasHTML}</p>`;
}



function buscarProducto(){
    let productos = localStorage.getItem("productos");
    
    if(productos != null){      
         
        productos = JSON.parse(productos);
        let producto ="";
        let html =""; 
        productos.forEach(function(prod){

            if(prod.id == idProducto){
                producto = prod;
            }
        })

        if(producto != ""){
          const imagen = producto.imagen ?? "pawel-szvmanski-oUOxOSPbcJk-unsplash.jpg";
            html += `
            <h1 class= "text-center" "fw-bold">${producto.nombre}</h1>
            <p class="text-center" >${producto.DescripcionLarga}</p>
            <div class="d-flex justify-content-center">
            
            <img src="img/${imagen} "class=foto" alt="${producto.codigo};">
            
            </div>
            <p>${convertirAEstrellas(producto.Puntuación)}</p>                     
            <div class="d-flex justify-content-center" >${producto.Precio}</div>
            
                                 
            `
            document.querySelector("#detalleProducto").innerHTML = html;

            
        }
    }
        
}






buscarProducto(); 