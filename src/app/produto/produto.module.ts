import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ProdutoModule {}
