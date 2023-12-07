import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ToastModule, MenubarModule, ButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 't23-front';

  items = [
    {
      label: "Carro",
      items: [
        {
          label: "Listar Carro",
          routerLink: ['/carros']
        }, {
          label: "Criar um carro",
          routerLink: ['/carros/adicionar']
        }
      ]
    }, {
      label: "Segundo item menu"
    }
]
}
