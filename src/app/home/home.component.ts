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

  format(): string {
    let val = extractNumbers();
    if (val.length() == 11) {
      return val.replace('(\\d{3})(\\d{3})(\\d{3})(\\d{2})', '$1.$2.$3-$4');
    }
    return val;
  }

  isCpfValid(): boolean {
    List<Integer> digits = extractNumbersToList(cpf);
    if (digits.size() == 11 && digits.stream().distinct().count() > 1) {
        return getCpfValid(digits.subList(0, 9)).equals(extractNumbers(cpf));
    }
    return false;
  }
}
