import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../material/angularmaterial.module";
import { FilterComponent } from './filter/filter.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    declarations:[
    FilterComponent,
    UserDetailComponent,
    UserListComponent
  ],
    imports:[
      AngularMaterialModule
    ],
    exports:[
      AngularMaterialModule,
      FilterComponent,
      UserDetailComponent,    
      UserListComponent
    ]
})
export class ComponentsModule {

}