import { NgModule } from "@angular/core";
import { EnderecoPipe } from './endereco.pipe';
import { PhonePipe } from './phone.pipe';

@NgModule({
    declarations: [
    EnderecoPipe,
    PhonePipe
  ],
    exports: [
        EnderecoPipe,
        PhonePipe
    ]
})
export class PipesModule{}