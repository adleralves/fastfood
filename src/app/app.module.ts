import { LancheService } from './cardapio/lanche.service';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { LancheItemComponent } from './cardapio/lanche-lista/lanche-item/lanche-item.component';
import { LancheListaComponent } from './cardapio/lanche-lista/lanche-lista.component';
import { CarrinhoItemComponent } from './carrinho/carrinho-item/carrinho-item.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CarrinhoService } from './carrinho/carrinho.service';

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
    MatProgressBarModule
  ],
  providers: [
    [LancheService],
    [CarrinhoService],
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
