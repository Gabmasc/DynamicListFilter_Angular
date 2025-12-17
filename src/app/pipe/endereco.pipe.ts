import { Pipe, PipeTransform } from '@angular/core';
import { IEndereco } from '../interface/endereco.interface';

@Pipe({
  name: 'endereco'
})
export class EnderecoPipe implements PipeTransform {

  transform(endereco: IEndereco): string {
    const INVALID_ENDERECO = 
    !endereco || 
    !endereco.rua ||
    !endereco.cidade || 
    !endereco.estado ||
    endereco.numero === null || endereco.numero === undefined;

    if(INVALID_ENDERECO){
      return 'Endereco Invalido';
    }

    return `${endereco.rua}, ${endereco.numero}, ${endereco.cidade}, ${endereco.estado}, ${endereco.pais}`;
  }

}
