export interface Mensaje{
  nombre:string;
  mensaje:string;
  fecha?:number;
  // uid es el id del usuario que mando el mensaje
  uid?:string;

}
