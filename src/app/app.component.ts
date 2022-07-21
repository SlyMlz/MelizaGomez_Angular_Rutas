import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  //definir propiedades variables q van ha ser usadas en las vistas de la aplicaion 


  //Algunos tipos de datos
  name: string = 'Meliza Gomez';
  age: number = 35;
  phone: null = null;
  otrotipo: undefined = undefined;
  cualquierdato: any;
  variostipos: string | number = 'Esto es un dato';
  variostipos1: string | number = 10;
  listCars:Array<any> = [1,'cadena',null]; //Definimos un array o vector 
  //nombre, tipo de variable y tipo de datos, contenido
  listCars2: Array<CarModel> = [
    {
      marca: 'Ford',
      modelo: 'Ranger',
      year: 2021
    },
    {
      marca: 'Chevrolet',
      modelo:'Aveo',
      year:2020
    }
  ];

  listProducts1: Array<Productos> = [
    {
      codigo_interno: '212458',
      nombre:'Leche Alqueria',
      valor:1200,
      cantidad: 2,
      t_embalaje: 'Bolsa',
      p_costo: '$ 1.200'
    },

    {
      codigo_interno: '212788',
      nombre:'Jabon',
      valor:1200,
      cantidad: 2,
      t_embalaje: 'Caja',
      p_costo: '$ 1.200'
    },
    
  ]

  listProducts2: Array<Productos> = [
    {
      codigo_interno: '212458',
      nombre:'Pan',
      valor:200,
      cantidad: 2,
      t_embalaje: 'Bolsa',
      p_costo: '$ 1.000'
    },

    {
      codigo_interno: '212788',
      nombre:'Jabon Barrigon',
      valor:2000,
      cantidad: 2,
      t_embalaje: 'Caja',
      p_costo: '$ 2.200'
    },
    
  ]

  listProducts3: Array<Productos> = [
    {
      codigo_interno: '212458',
      nombre:'Leche Purace',
      valor:1200,
      cantidad: 2,
      t_embalaje: 'Bolsa',
      p_costo: '$ 1.200'
    },

    {
      codigo_interno: '212788',
      nombre:'Arroz Carolina',
      valor:3000,
      cantidad: 2,
      t_embalaje: 'Caja',
      p_costo: '$ 3.500'
    },
    
  ]
  //Definición de objetos 
  car: any = {
    marca: 'Chavrolet',
    modelo: 'Spark',
    year: 2000
  }

  car2: CarModel ={
    marca:'BMW',
    modelo:'Porche',
    year:2022
  }

  wiki1: Wiki ={
    nombre:'Wikipedia',
    Tipo:'Modalidad virtual',
    year:2001,
    Founder: 'Jimmy Wales '
  }

  Ingeniero1: Ingeniero={
    nombre:'Sthephen Job',
    Profesion:'Ingenieria cientifica y ciencias',
    edad:28,
    titulo: 'Ingeniero en ciencias de la computación'
  }

}


//interfaces: Es definir un contrato de operacion, que condiciona a las 
//las variables a comportarse de una manera determiinada

interface CarModel{
    marca:string;
    modelo:string;
    year:number;
}

interface Wiki{
  nombre:string;
  Tipo:string;
  year:number;
  Founder: string;

}

interface Ingeniero{
  nombre:string;
  Profesion:string;
  edad:number;
  titulo: string;
}

interface Productos{
  codigo_interno:string;
  nombre:string;
  valor:number;
  cantidad: number;
  t_embalaje: string;
  p_costo: any;
}

//definir tres listas que dependan de la definicion de datos
//de una interface denominada productos en cada lista definir 2 objetos 
//dependientes de la interface

//codigo interno, nombre, valor, cantidad, tipo de embalaje, precio de costo