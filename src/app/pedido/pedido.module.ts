import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PedidoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class PedidoModule {}
