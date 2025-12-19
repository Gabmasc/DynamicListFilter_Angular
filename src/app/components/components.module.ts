import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../material/angularmaterial.module";
import { FilterComponent } from './filter/filter.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from "@angular/forms";
import { PipesModule } from "../pipe/pipes.module";
import { DatePipe } from "@angular/common";

@NgModule({
    declarations:[
    FilterComponent,
    UserDetailComponent,
    UserListComponent
  ],
    imports:[
      FormsModule,
      AngularMaterialModule,
      PipesModule,
      DatePipe
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