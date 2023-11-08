class Autor {
    constructor(nombre,nacionalidad){
        this.nombre=nombre;
        this.nacionalidad=nacionalidad;
    }

    getNombre(){
        return this.nombre;
    }
    getNacionalidad(){
        return this.nacionalidad;
    }
    toString(){
        return "Nombre: " + this.nombre + " " + "Nacionalidad: " + this.nacionalidad;
    }
}