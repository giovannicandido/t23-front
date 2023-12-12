import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
export class CarroFormComponent implements OnInit {
  carro = {} as any

  placa: string | null = null

  constructor(private http: HttpClient, private messageService: MessageService,
    private activeRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.placa = this.activeRoute.snapshot.paramMap.get("placa")
    this.loadCarro();
  }

  save() {
    if(this.placa) {
      this.http.put(`http://localhost:8080/carros/${this.placa}`, this.carro)
      .subscribe((_) => this.messageService.add({
        summary: "Carro editado com sucesso",
        severity: "info"
      }))
    }else {
      this.http.post("http://localhost:8080/carros", this.carro)
      .subscribe((_) => this.messageService.add({
        summary: "Carro adicionado com sucesso",
        severity: "info"
      }))
    }
    
    console.log("saved")
  }

  loadCarro() {
    if(this.placa) {
      this.http.get<any>(`http://localhost:8080/carros/${this.placa}`)
      .subscribe(carro => this.carro = carro)
    }
  }
}
