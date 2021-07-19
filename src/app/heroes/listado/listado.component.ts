import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes:string[] = ['Spiderman','hulk','Thor','Ironman','Capitan América'];

  heroe_borrado:string = '';

  borrarHeroe(){
    this.heroe_borrado = this.heroes.shift() || '';
    
  }


}


