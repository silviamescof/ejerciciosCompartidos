class Libro{
    constructor(titulo,autor,precio,genero,stock){

        this.ISBN=0;
        this.titulo=titulo;
        this.autor=autor;
        this.precio=precio<0 ? 0 : precio;
        this.genero=genero;
        this.stock=stock<0 ? 0: stock;
        
    };

    ///////////////GETTERS///////////
    tieneStock(){
        
        return this.stock>0 ? true : false;
    }
    getTituo(){
        return this.ISBN;
    }
    getAutor(){
        return this.ISBN;
    }
    getPrecio(){
        return this.ISBN;
    }
    getGenero(){
        return this.ISBN;
    }
    getStock(){
        return this.ISBN;
    }
    
//////////////////SETTERSS////////////////////////
    setIsbn(isbn){
        this.isbn=isbn;
    }
    setTitulo(titulo){
        this.titulo=titulo;
    };
    setPrecio(precio){
        this.precio= precio<0 ? 0 : precio;
    };
    setAutor(autor){
        this.autor=autor;
    };
    setGenero(genero){
        this.genero=genero;
    };
    setStock(stock){
        this.stock=stock<0 ? 0: stock;
    }

}