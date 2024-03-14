import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
    selector: 'products-order',
    templateUrl: './order.component.html',
    styles: []

})
export class OrderComponent {

public isUpperCase: boolean = false;

public orderBy?: keyof Hero |'';
public heroes: Hero[] = [
  {
    name: 'Superman',
    canFly: true,
    color: Color.blue
  },
  {
    name: 'Spider-Man',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Dare-Devil',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Robin',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Linterna-Verde',
    canFly: false,
    color: Color.green
  },
]


toggleUpperCase():void {
  this.isUpperCase = !this.isUpperCase;
}

changeOrder (value: keyof Hero) {
  this.orderBy = value

}

}
