import { ProdutoModule } from './produto/produto.module';
import { FarmaceuticoModule } from './farmaceutico/farmaceutico.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ClienteModule } from './cliente/cliente.module';
import { MenuModule } from './menu/menu.module';
import { SobreModule } from './sobre/sobre.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SobreModule,
    MenuModule,
    ClienteModule,
    FornecedorModule,
    FarmaceuticoModule,
    ProdutoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
