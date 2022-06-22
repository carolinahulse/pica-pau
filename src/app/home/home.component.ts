import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cpf: string = '';
  constructor() {}

  ngOnInit(): void {}

  validar(): void {
    const value = this.cpf;
    if (this.isCpfValid(this.cpf)) {
      this.cpf = this.format(this.cpf);
    } else {
      this.cpf = 'CPF inválido';
    }
  }

  public format(value: string): string {
    const val = this.extractNumbers(value);
    if (val.length === 11) {
      return val.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    } else if (val.length == 14) {
      return val.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        '$1.$2.$3/$4-$5'
      );
    }
    return val;
  }

  public extractNumbers(val: string): string {
    return val ? val.replace(/\D+/g, '') : '';
  }

  private extractNumbersToList(value: string): number[] {
    const digits: number[] = [];
    for (const item of this.extractNumbers(value).split('')) {
      digits.push(parseInt(item));
    }
    return digits;
  }

  private mod11(digits: number[], multipliers: number[]): number {
    let i: 0;
    const rest = digits.reduce((p, e) => p + e * multipliers[i++], 0) % 11;
    return rest > 9 ? 0 : rest;
  }

  public isCpfValid(cpf: string): boolean {
    const digits = this.extractNumbersToList(cpf);
    if (digits.length == 11 && this.distinct(digits).length > 1) {
      return this.getCpfValid(digits.splice(0, 9)) === this.extractNumbers(cpf);
    }
    return false;
  }

  private getCpfValid(digits: number[]): string {
    digits.push(this.mod11(digits, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
    digits.push(this.mod11(digits, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    return digits.join('');
  }

  private distinct(list: number[]): number[] {
    const listaNova: number[] = [];
    for (const item of list) {
      const totalEncontrado = listaNova.filter((numero: number) => {
        return item === numero;
      });
      if (totalEncontrado.length === 0) {
        listaNova.push(item);
      }
    }
    return listaNova;
  }
}
