import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';

@NgModule({
  declarations: [FornecedorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FornecedorModule {}
