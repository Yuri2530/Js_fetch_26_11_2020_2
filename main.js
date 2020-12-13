document.write("<em>Conexión exitosa</em>")

fetch('https://jsonplaceholder.typicode.com/comments?postId=2')
.then(respondio_el_servidor=>{
    return respondio_el_servidor.json();
}).then(converti_los_datos_en_mi_script=>{
    document.write(JSON.stringify(converti_los_datos_en_mi_script));
    
})