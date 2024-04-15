console.log('Hola mundo');

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

let btnMostrar = document.getElementById("btnMostrar");

let arrReq = [];
let req = {};


btnMostrar.addEventListener("click", function(e){
    e.preventDefault();

    let nombreValor = nombre.value;
    let apellidoValor = apellido.value;

    req = {
        nombreValor,
        apellidoValor
    };

    arrReq.push(req);
    // for(let i =0;i<arrReq.length;i++){
    //     console.log(arrReq[i]);
    // }

    arrReq.forEach(function(obj){
        console.log(obj);
    });
});

