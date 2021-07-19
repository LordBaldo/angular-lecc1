import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[//Invisible dentro del modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//Visible
        ListadoComponent
    ],
    imports:[
        CommonModule       

    ]

})
export class HeroesModule{

}