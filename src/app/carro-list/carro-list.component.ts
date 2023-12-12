import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
const URL = "http://localhost:8080"
@Component({
  selector: 'app-carro-list',
  standalone: true,
  imports: [DataViewModule, HttpClientModule, ButtonModule, TagModule,CommonModule, RatingModule, FormsModule],
  templateUrl: './carro-list.component.html',
  styleUrl: './carro-list.component.css',

})
export class CarroListComponent implements OnInit {

  carros = [
    {
      placa: "hhh-000",
      cor: "AZUL",
      marca: "Fiat",
      ano: 2000
    }
  ]

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private router: Router
    ) {}

  getSeverity(item: any): string {
    return "warning"
  }

  ngOnInit() {
    this.load()
  }

  load() {
    this.http.get<any[]>(`${URL}/carros`)
    .subscribe(data => this.carros = data)
  }

  deletar(placa: string) {
    this.http.delete(`${URL}/carros/${placa}`)
    .pipe(
      catchError(error => {
        this.messageService.add({
          severity: "error",
          summary: "Ocorreu um erro ao deletar"
        })
        return throwError("Error ao deletar")
      })
    )
    .subscribe((_) => {
      this.load()
      this.messageService.add({
        severity: "info",
        summary: "Carro deletado com sucesso"
      })
    })
  }

  editar(placa: string) {
    this.router.navigate([`carros/${placa}`])
  }

}
