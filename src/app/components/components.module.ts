import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../material/angularmaterial.module";
import { FilterComponent } from './filter/filter.component';

@NgModule({
    declarations:[
    FilterComponent
  ],
    imports:[AngularMaterialModule],
    exports:[AngularMaterialModule]
})
export class ComponentsModule {

}