class Libreria{
    constructor(){
        this.libros=[];
        this.ganancias=0
    };

    agregarLibro(libro){

        let isbn=Math.floor(Math.random()+9999999999999+1);

        let existe=this.libros.find(param=>param.isbn==isbn);

        while(existe!=undefined){
            
            isbn=Math.floor(Math.random()+9999999999999+1);

            existe=this.libros.find(param=>param.isbn===isbn);
        };

        libro.setIsbn(isbn);
           
        this.libros.push(libro);

        } ;
    
    eliminar(isbn){
        let posicion = (this.libros.findIndex(isbn));
        if(posicion==0){
            this.libros.splice(posicion,1);
        }            
        
    }
    buscarPorId(isbn){

    };

    filtrarPorGenero(genero){

        let arrayGenero=this.libros.filter(param=>param.genero==genero);

        return arrayGenero;
    };
    comprarLibros(array){


    };
};
    


    
    


    
    

