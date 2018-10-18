import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../articulos.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
	articulos:Array<any>;

  constructor(private servicioArticulos:ArticulosService) { 
  	this.articulos=[
	{
		titulo:"",
		contenido:""
	}
  	];
  }

  ngOnInit() {
  	this.servicioArticulos.traerArticulos().
  	subscribe(respuesta=>{
  		this.articulos=respuesta;
  	}, error=>{
  		alert("No se ha puede traer los articulos");
  	});
  }

}
  eliminarArticulo(id){
    this.servicioArticulos.eliminarArticulos(id).subscribe.(respuesta=>{
  this.servicioArticulos.traerArticulos().
    subscribe(respuestaEliminar=>{
      this.articulos=respuesta;
    }, error=>{
      alert("No se ha puede Eliminar");
    });

    }, errror=>{})
  }