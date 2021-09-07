import { Component, OnInit } from '@angular/core';

type objServ = {
  nombre?: string;
  img?: string;
  ruta?: string;
};

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  lisServicios: objServ[] = [];

  constructor() {
    this.lisServicios = [
      {
        nombre: 'Consultoría contable',
        img: '../../../assets/images/servicios/contable.jpg',
        ruta: 'consContable'
      },
      {
        nombre: 'Consultoría tributaria',
        img: '../../../assets/images/servicios/tributaria.jpg',
        ruta: 'consTributaria'
      },
      {
        nombre: 'Reingeniería de costos de producción',
        img: '../../../assets/images/servicios/reingenieria.jpeg',
        ruta: 'reinCostos',
      },
      {
        nombre: 'Auditoría externa e interna',
        img: '../../../assets/images/servicios/auditoria.jpg',
        ruta: 'audiExtInt',
      },
      {
        nombre: 'Evaluaciones financieras',
        img: '../../../assets/images/servicios/evaluaciones.jpg',
        ruta: 'evalFinancieras',
      },
      {
        nombre: 'Lavado de activos',
        img: '../../../assets/images/servicios/lavado.jpg',
        ruta: 'lavaActivos',
      },
      {
        nombre: 'Capacitaciones y desarrollo profesional',
        img: '../../../assets/images/servicios/capacitaciones.jpeg',
        ruta: 'capacitaciones',
      },
      {
        nombre: 'Servicios legales societarios',
        img: '../../../assets/images/servicios/legales.jpg',
        ruta: 'servLegales',
      }
    ];
  }

  ngOnInit(): void {}
}
