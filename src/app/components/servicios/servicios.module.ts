import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ConsuContableComponent } from './consu-contable/consu-contable.component';
import { ConsuTributariaComponent } from './consu-tributaria/consu-tributaria.component';
import { ReinCostosComponent } from './rein-costos/rein-costos.component';
import { AudiExtIntComponent } from './audi-ext-int/audi-ext-int.component';
import { EvalFinanciComponent } from './eval-financi/eval-financi.component';
import { LavaActivosComponent } from './lava-activos/lava-activos.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { ServLegalesComponent } from './serv-legales/serv-legales.component';
import { ServiciosComponent } from './servicios.component';


@NgModule({
  declarations: [
    ConsuContableComponent,
    ConsuTributariaComponent,
    ReinCostosComponent,
    AudiExtIntComponent,
    EvalFinanciComponent,
    LavaActivosComponent,
    CapacitacionesComponent,
    ServLegalesComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule, WavesModule, ButtonsModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
