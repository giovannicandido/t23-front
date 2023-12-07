import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-carro-form',
  standalone: true,
  imports: [InputTextModule, HttpClientModule, CommonModule, FormsModule, ButtonModule, InputNumberModule],
  templateUrl: './carro-form.component.html',
  styleUrl: './carro-form.component.css'
})
export class CarroFormComponent {
  carro = {} as any

  constructor(private http: HttpClient, private messageService: MessageService) {}

  save() {
    this.http.post("http://localhost:8080/carros", this.carro)
    .subscribe((_) => this.messageService.add({
      summary: "Carro adicionado com sucesso",
      severity: "info"
    }))
  }
}
