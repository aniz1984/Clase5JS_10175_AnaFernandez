/* let miNuevoObjeto = new Object ();
miNuevoObjeto.nombre = "Computadora";
miNuevoObjeto.sponsor = "HyperX";
miNuevoObjeto.

console.log(miNuevoObjeto.nombre); */


/* function Auto(nombreDeMarca){
    this.marca = nombreDeMarca;
}

let Auto1 = new Auto('Ferrari');
let Auto2 = new Auto('Ford');
let Auto3 = new Auto('Audi');

console.log(Auto1); */

/* function Producto(nombreProducto, precioProducto, stockProducto);
    this.nombre = nombreProducto;
    this.precio = precioProducto;
    this.stock = stockProducto;

let productoUno = new Producto ("Zapas", 2700, 9);
console.log(productoUno);

document.getElementById("carrito").innerHTML = `
<div>
    <h2>${productoUno.nombre}</h2>
</div>
` */

/* class Producto {
    constructor(nombreMarca, precioProducto, stockProducto, cantidadVentas){
        this.marca = nombreMarca;
        this.precio = precioProducto;
        this.stock = stockProducto;
        this.cantidad = cantidadVentas;
    }
}

let productoUno = new Producto("Nike", 500, 47, 13);

console.log(productoUno); */

/* class Kiosko {
    constructor(chiclesMarca, chiclesSabor, chiclesStock){
        this.marca = chiclesMarca;
        this.sabor = chiclesSabor;
        this.stock = chiclesStock;
    }
}

let chicles = new Kiosko("Bubbaloo", "Banana", 559); 

console.log(chicles); */

class Kiosko {
    constructor(chiclesMarca, chiclesSabor, chiclesStock){
        this.marca = chiclesMarca;
        this.sabor = chiclesSabor;
        this.stock = chiclesStock;
    }

    saludar(){ //a esta funcion adentro de un objeto se le llama METODO
        alert("Hola tarolas");
    }


    mostrarProducto(){ //a esta funcion adentro de un objeto se le llama METODO
        document.getElementById("botoncito").innerHTML = `
        <div>
            <h1>${this.marca}</h1>
            <h2>${this.sabor}</h2>
            <h3>${this.stock}</h3>
        </div>
        `
    }
}

let chicles = new Kiosko("Bubbaloo", "Banana", 559); //esto "llama" al objeto.

console.log(chicles);

chicles.saludar(); //por eso para llamar a la funcion que escribi adentro, tengo que poner primero "chicles."

chicles.mostrarProducto();