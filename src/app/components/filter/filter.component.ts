import { Component } from '@angular/core';
import { IFilterOptions } from '../../interface/filter-options/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name : undefined,
    startDate : undefined,
    endDate : undefined,
    Status: undefined
  }


  statusList = [
    {description: 'Ativo', value: true},
    {description: 'Inativo', value: false}
  ];

}
