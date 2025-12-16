import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  statusList = [
    {description: 'Ativo', value: true},
    {description: 'Inativo', value: false}
  ];

}
