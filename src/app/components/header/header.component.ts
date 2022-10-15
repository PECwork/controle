import { Router } from '@angular/router';
import { OrcamentoService } from './../../services/orcamento/orcamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  orcamento!: number; // Exclamação permite iniciar a variável com NULL (sem valor)

  constructor(
    private orcamentoService: OrcamentoService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.orcamentoService.getValor().subscribe(
      valor => {
        this.orcamento = valor
      }
    )
  }

  irParaOrcamento(): void {
    this.route.navigate(['/'])
  }

}
