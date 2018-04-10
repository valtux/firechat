import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../providers/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit  {

  mensaje:string ="";
  elemento :any;

  constructor(public _cs:ChatService) {
    this._cs.cargarMensajes().subscribe( ()=>{
                setTimeout( ()=>{
                  console.log(this.elemento.scrollHeight);
                  this.elemento.scrollTop = this.elemento.scrollHeight;
                }, 200);
    });
  }


  ngOnInit(){
    this.elemento = document.getElementById('app-menajes');
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    if (this.mensaje.length == 0){
      return;
    }else{
      this._cs.agregarMensaje(this.mensaje)
                .then( ()=>this.mensaje="")
                .catch( (err)=> console.log('error al enviar', err));
    }

  }

}
