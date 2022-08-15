import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { LancheItemComponent } from './cardapio/lanche-lista/lanche-item/lanche-item.component';
import { LancheListaComponent } from './cardapio/lanche-lista/lanche-lista.component';
import { LancheService } from './cardapio/lanche.service';
import { CarrinhoItemComponent } from './carrinho/carrinho-item/carrinho-item.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoService } from './carrinho/carrinho.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PedidoService } from './pedidos/pedido.service';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardapioComponent,
    CarrinhoComponent,
    HomeComponent,
    LancheListaComponent,
    LancheItemComponent,
    CarrinhoItemComponent,
    PedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    [LancheService,
    CarrinhoService,
    PedidoService,
    CdkColumnDef],
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
