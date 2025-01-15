import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    console.log(nombre);
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await conectaAPI.enviarProductos(nombre,precio,imagen)
    
        formulario.innerHTML = "Producto enviado";}
        catch (e){
            alert(e);
        }

     
    
      


}

formulario.addEventListener("submit", evento => crearProducto(evento));