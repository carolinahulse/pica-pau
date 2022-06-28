import { Produto } from './produto';
import { Farmaceutico } from './farmaceutico';
import { Cliente } from './cliente';

export interface Pedido {
  id: string;
  cliente: Cliente;
  farmaceutico: Farmaceutico;
  produtos: Produto[];
  valor: number;
  valorPago: number;
  troco: number;
  data: Date;
  dataPagamento: Date;
  status: string;
}
