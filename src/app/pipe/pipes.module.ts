import { NgModule } from "@angular/core";
import { EnderecoPipe } from './endereco.pipe';

@NgModule({
    declarations: [
    EnderecoPipe
  ],
    exports: [
        EnderecoPipe,
    ]
})
export class PipesModule{}