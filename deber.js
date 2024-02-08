'use strcit'

class Refrigerador {
    constructor() {
        this.frutas = ["manzana"];
        this.verduras = ["lechuga"];
        this.lacteos = ["leche"];
        this.carnes = ["jamon"];
    }
    agregarProducto(categoria, producto) {
        switch (categoria.toLowerCase()) {
            case 'frutas':
                this.frutas.push( producto );
                break;
            case 'verduras':
                this.verduras.push( producto );
                break;
            case 'lacteos':
                this.lacteos.push( producto );
                break;
            case 'carnes':
                this.carnes.push( producto );
                break;
            default:
                alert('Categoría no válida');
        }
    }
    quitarProducto(categoria, producto){
        switch (categoria.toLowerCase()){
            case 'frutas':
                this.frutas.splice(this.frutas.indexOf( producto ), 1);
                break;
            case 'verduras':
                this.verduras.splice(this.verduras.indexOf( producto ), 1);
                break;
            case 'lacteos':
                this.lacteos.splice(this.lacteos.indexOf( producto ), 1);
                break;
            case 'carnes':
                this.carnes.splice(this.carnes.indexOf( producto ), 1);
                break;
            default:
                alert('Categoría no válida');
        }
    }

    mostrarStock(categoria) {
        let lista
        switch (categoria.toLowerCase()) {
            case 'frutas':
                lista = this.frutas;
                break;
            case 'verduras':
                lista = this.verduras;
                break;
            case 'lacteos':
                lista = this.lacteos;
                break;
            case 'carnes':
                lista = this.carnes;
                break;
            default:
                alert('Categoría no válida');
                return;
        }
        alert(`El stock en ${categoria} es: ${lista.join(', ')}`);
    }
}
let refrigerador = new Refrigerador();

refrigerador.agregarProducto('frutas', 'pera');

refrigerador.agregarProducto('frutas', 'uvas');

refrigerador.mostrarStock('frutas');

refrigerador.quitarProducto('frutas', 'manzana');

refrigerador.mostrarStock('frutas');
