import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsuContableComponent } from './consu-contable/consu-contable.component';
import { ConsuTributariaComponent } from './consu-tributaria/consu-tributaria.component';
import { ReinCostosComponent } from './rein-costos/rein-costos.component';
import { EvalFinanciComponent } from './eval-financi/eval-financi.component';
import { LavaActivosComponent } from './lava-activos/lava-activos.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { ServLegalesComponent } from './serv-legales/serv-legales.component';
import { AudiExtIntComponent } from './audi-ext-int/audi-ext-int.component';
import { ServiciosComponent } from './servicios.component';

export const routes: Routes = [
  {
    path:'',
    data:{
      title:'servicios'
    },
    children:[
      {
        path:'consContable',
        component:ConsuContableComponent,
        data:{
          title:'Consulta Contable'
        }
      },
      {
        path:'consTributaria',
        component:ConsuTributariaComponent,
        data:{
          title:'Consulta Tributaria'
        }
      },
      {
        path:'reinCostos',
        component:ReinCostosComponent,
        data:{
          title:'Reingeniería de costos de producción'
        }
      },
      {
        path:'audiExtInt',
        component:AudiExtIntComponent,
        data:{
          title:'Auditoría externa e interna'
        }
      },
      {
        path:'evalFinancieras',
        component:EvalFinanciComponent,
        data:{
          title:'Evaluaciones financieras'
        }
      },
      {
        path:'lavaActivos',
        component:LavaActivosComponent,
        data:{
          title:'Lavado de activos'
        }
      },
      {
        path:'capacitaciones',
        component:CapacitacionesComponent,
        data:{
          title:'Capacitaciones y desarrollo profesional'
        }
      },
      {
        path:'servLegales',
        component:ServLegalesComponent,
        data:{
          title:'Servicios legales societarios'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
