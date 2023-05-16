export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    sobreMi: string;
    img: string;
    banner: string;
    

    constructor(nombre: string, apellido: string, titulo:string, sobreMi:string, img: string, banner:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.sobreMi = sobreMi
        this.img = img;
        this.banner = banner;        
    }
}