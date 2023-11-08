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
    buscarPorId(isbn) {
        let libro = this.libros.find(libro => libro.isbn === isbn);
        if (libro) {
            return libro.toString();
        }else{
             return "No se ha encontrado el libro";
        }
    }
    
    buscarPorTitulo(titulo){
        let libro = this.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            return libro.toString();
        }else{
             return "No se ha encontrado el libro";
        }
    }
    filtrarPorAutor(Autor){
        let autor = this.libros.filter(Autor=> Autor===li)
    }


}
    
    
