import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',

})
export class UncommonPageComponent {



// i18n Select
public name: string = 'Fernando';
public gender: 'male' | 'female' = 'male';

public invitationMap = {
  male: 'invitarlo',
  female: 'invitarla'
}

changeClient(): void {
 this.name = 'Melissa';
 this.gender = 'female';
}

//i18Plural
public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia']
public clientsMap = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos 1  cliente esperando',
  'other': ' tenemos # clientes esperando',

}

deleteClient() {
    this.clients.pop();
  }

//KeyValuePipe
public person = {
  name:'Fernando',
  age:36,
  adress:'Otawwa, Canada'
}

//AsyncPipe

public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) ),
);



public promiseValue:Promise<string> = new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve('Tenemos datos en la promesa');
    console.log('Tenemos datos en la promesa');
  }, 3500)

})

}
