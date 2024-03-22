import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  empleadoarray : Empleado[] = [
    { id:1,nombre:"Miguel",pais: "Colombia"},
    { id:2,nombre:"Melanny",pais: "Brasil"},
    { id:3,nombre:"Cindy",pais: "Canada"}
  ];
  //Es el nombre de la variable donde se guardan los datos del formulario
  selectedEmployee:Empleado = new Empleado();

  registrar(){
    if(this.selectedEmployee.id === 0){
     //Toma el valor de un nuevo empleado y le agrega un id + 1 al arreglo de empleados
    this.selectedEmployee.id = this.empleadoarray.length + 1;
    //Agrega el nuevo empleado al arreglo de empleados
    this.empleadoarray.push(this.selectedEmployee);
    //Limpia el formulario
    this.selectedEmployee = new Empleado ();
    }
  }

  openForEdit(empleado:Empleado){
    //Al formulario le indicamos que se llene con el valor del empleado que recibe. *Asi se llama la variable del *ngFor
    this.selectedEmployee = empleado
  }

  delete(){
    //Ejecuta una ventana de confirmacion si es correcto se ejecuta el true del condicional
    if(confirm("Estas seguro de eliminar a esta persona")){
    //Toma el listado de empleados y lo recorre si la variable x es diferente del empleado seleccinado lo dejara tal cual
    this.empleadoarray = this.empleadoarray.filter( x => x != this.selectedEmployee);
    //Limpia el formulario
    this.selectedEmployee = new Empleado();
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}
