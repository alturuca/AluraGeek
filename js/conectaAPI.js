async function listarProductos(){
    const conexion = await fetch(" http://localhost:3001/productos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
   
   
    return conexionConvertida;
}

async function enviarProductos(nombre,precio,imagen){
    const conexion= await fetch("http://localhost:3001/productos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        nombre:nombre,
        precio:precio,       
        imagen:imagen
    })
    })

    if(!conexion.ok){
        throw new Error("No fue posible enviar el producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) { 
    const conexion = await fetch(`http://localhost:3001/productos/`, { 
    method: "DELETE", 
    headers: { 
        "Content-type": "application/json" } 
    }); 
    if (!conexion.ok) { 
        throw new Error("No fue posible eliminar el producto"); 
    } 
}



  export const conectaAPI={
    listarProductos,enviarProductos,eliminarProducto  
}

/*async function listarProductos(){
    const conexion = await fetch(" http://localhost:3001/productos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
    console.log(conexion);
    console.log(conexionConvertida); 
    return conexionConvertida;
}

async function crearProductos(titulo,descripcion,url,imagen){
    const conexion= await fetch("http://localhost:3001/productos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        nombre:nombre,
        precio:precio,
       
        imagen:imagen
    })
    })
    if(!conexion.ok){
        throw new Error("No fue posible enviar el video");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscarProducto(referencia){
    const conexion=await fetch(`http://localhost:3001/videos?q=${referencia}`)
    const conexionConvertida=conexion.json();

    return conexionConvertida;
}

export const conectaAPI={
    listarProductos,crearVideo,buscarVideo
}*/
