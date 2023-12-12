import { Routes } from '@angular/router';
import { CarroListComponent } from './carro-list/carro-list.component';
import { CarroFormComponent } from './carro-form/carro-form.component';

export const routes: Routes = [
    {
        path: "carros",
        component: CarroListComponent 
    }, {
        path: "carros/adicionar",
        component: CarroFormComponent  
    }, {
        path: "carros/:placa",
        component: CarroFormComponent
    }
];
