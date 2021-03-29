export class contacto{
    id:number;
    nombre:string;
    apellido:string;
    cargo:string;
    correo:string;
    telefono:string;
    empresa:string;

constructor(obj: any){
    this.id = obj && obj.id || null;
    this.nombre = obj && obj.nombre || null;
    this.apellido = obj && obj.apellido || null;
    this.cargo = obj && obj.cargo || null;
    this.correo = obj && obj.correo || null;
    this.telefono = obj && obj.telefono || null;
    this.empresa = obj && obj.empresa || null;
}
}