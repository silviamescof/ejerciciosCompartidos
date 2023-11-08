class Libreria{
    constructor(){
        this.libros=[];
        this.ganancias=0
    };

    agregarLibro(libro){

        let existe=this.libros.find(param=>param.isbn==libro.isbn);
        if(!existe){
            this.libros.push(libro);
        }  
    }
    eliminar(isbn){
        let posicion = (this.libros.findIndex(isbn));
        if(posicion==0){
            this.libros.splice(posicion,1);
        }            
        
    }
    buscarPorId(isbn){
        
    }
    buscarPorTitulo(titulo){

    }
    filtrarPorAutor(Autor){

    }
    

}
    
    
