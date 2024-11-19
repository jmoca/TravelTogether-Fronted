import {Usuario} from "./Usuario";


export class Grupo{
    id_grupo!: number;
    nombre?: string;
    descripcion?: string;
    multimedia?: string;
    integrantes?: number;
    fecha_creacion?: string;
    usuarios?: Usuario[];
    idUsuarioCreador?: number;


}
