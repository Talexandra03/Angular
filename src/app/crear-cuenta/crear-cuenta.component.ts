import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service'; //Importar servicio
import {Router} from '@angular/router';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

	formulario:any;
  constructor(private servicioUsuarios:UsuariosService,
  	private reouter:Router) { 

  	this.formulario={
  		user:{
  			name:"",
  			email:'',
  			password:'',
  			password_confirmation:""
  		}
  	}
  }

  ngOnInit() {
  }
  crearCuenta(){
  	this.servicioUsuarios.crearCuenta(this.formulario).subscribe(respuesta=>{	
  		let autenticacion={
  			auth:{
  				email: this.formulario.user.email,
  				password: this.formulario.user.password
  			}
  		};
  			this.servicioUsuarios.iniciarSesion(autenticacion).subscribe(respuestaAuth=>{
  				localStorage.setItem("sessionToken",respuestaAuth.jwt);
  				this.router.navigate(['/articulos']);
  				alert("Usuario creado")
  			},error=>{alert("Fallo de autheticación")});

  		},error=>{
  			alert("No se ha podido crear el usuario, revisar consola")
  		}
  		}
  }
}
