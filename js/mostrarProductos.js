import { conectaAPI } from "./conectaAPI.js";


const lista = document.querySelector("[data-lista]");

function crearCard(nombre,precio,imagen){
   
    const producto= document.createElement("li");
    producto.className = "card";
    producto.innerHTML = `<img src="${imagen}" alt="Producto 1"> 
                <h3>${nombre}</h3> 
                <div class="price-container"> 
                    <p>$ ${precio} </p> 
                    <button onclick =("borrarProducto") class ="delete-btn" data-btn><img src="/assets/basurero.png" alt="Borrar"></button> 
                </div>`;
    
    return producto;
}

async function listarProductos(){
     
    try {
        const listaAPI = await conectaAPI.listarProductos();
         

        listaAPI.forEach(producto => {
            const card = crearCard(producto.nombre, producto.precio, producto.imagen);
            
            lista.appendChild(card); 
        });

    } catch (error) {
        console.error("Error al obtener productos:", error);
        lista.innerHTML = "Hubo un error al cargar los productos.";
    }
    
async function borrarDatos(id) { 
        try { 
            await conectaAPI.eliminarProducto(id); 
            document.getElementById(`card-${id}`).remove(); 
            alert('El producto ha sido borrado con éxito'); 
        } 
        catch (error) { 
            console.error('Error al borrar el producto:', error); 
            alert('Hubo un problema al borrar el producto'); 
        } 
    }
    
    
    
}

listarProductos();

