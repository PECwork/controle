import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Imports do Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

// Bibliotecas externas
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HeaderComponent } from './components/header/header.component';
import { OrcamentoService } from './services/orcamento/orcamento.service';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { AcoesComponent } from './components/acoes/acoes.component';
import { AlterarProdutoComponent } from './components/alterar-produto/alterar-produto.component';

// Configuração para máscara de moeda para os INPUTS
const maskConfig: Partial<IConfig> = {
  validation: false,
  decimalMarker: ","
};

// Configuração para moeda Brasileira nas Interpolações
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrcamentoComponent,
    ProdutoComponent,
    AcoesComponent,
    AlterarProdutoComponent
  ],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    OrcamentoService,
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
