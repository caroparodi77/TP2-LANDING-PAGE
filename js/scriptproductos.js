const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const idProducto = urlParams.get('id');


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
            <div>${producto.nombre}</div>
            <div >${producto.DescripcionLarga}</div>
            <img src="img/${imagen}" alt="${producto.codigo};">                         
            <div class="precio" >${producto.Precio}</div>                      
            `
            document.querySelector("#detalleProducto").innerHTML = html;

            estrellada(producto.Puntuacion);
        }
    }
        
}



function estrellada(Puntuacion){
    const numero = Puntuacion.length;
    const estrellasOscuras = 5 - numero;
    html ="";
    for(i = 0; i<numero; i++){
        html += "⭐";
    }
    for(i =0; i<estrellasOscuras;i++){
        html += "⚪";
    }
    document.querySelector("#estrellas").innerHTML = html;

}


buscarProducto(); 