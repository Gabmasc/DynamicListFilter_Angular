import { Component, EventEmitter, Output } from '@angular/core';
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
    status: undefined
  }


  statusList = [
    {description: 'Ativo', value: true},
    {description: 'Inativo', value: false}
  ];

  @Output('onfilter') onfilterEmitt = new EventEmitter<IFilterOptions>();
  onfilter(){
    this.onfilterEmitt.emit(this.filterOptions);
  }

}
