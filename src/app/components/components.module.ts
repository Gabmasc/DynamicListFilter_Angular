import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../material/angularmaterial.module";
import { FilterComponent } from './filter/filter.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations:[
    FilterComponent,
    UserDetailComponent
  ],
    imports:[AngularMaterialModule],
    exports:[
      AngularMaterialModule,
      FilterComponent,
      
    ]
})
export class ComponentsModule {

}