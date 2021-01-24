class Remera {
    constructor(olaTalle, olaColor, olaColor2, olaStock){
        this.marca = olaTalle;
        this.sabor = olaColor;
        this.color2 = olaColor2;
        this.stock = olaStock;
    }
       
    bienvenida(){
        alert("Remeras de Mujer");
    }


    mostrarProducto(){
        document.getElementById("datosRemera").innerHTML = `
        <div>
            <p>${this.marca}</p>
            <p>${this.sabor}</p>
            <p>${this.color2}</p>
            <p>${this.stock}</p>
        </div>
        <div>
            <h2>La Gran Ola de Kanagawa</h2>
        </div>
        <div>
            <p id="parrafito">La gran ola de Kanagawa​, también conocida simplemente como La ola o La gran ola, </br>
            es una famosa estampa japonesa del pintor especialista en ukiyo-e, </br>
            Katsushika Hokusai, publicada entre 1830 y 1833, ​ durante el período Edo de la historia de Japón.</p>
    </div>
        `
    }
}

let remeraMujer = new Remera("S, M y XL", "Blanco", "Gris", 7);

console.log(remeraMujer);

remeraMujer.bienvenida();

remeraMujer.mostrarProducto();