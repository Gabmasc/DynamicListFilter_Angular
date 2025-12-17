import { NgModule } from "@angular/core";
import { EnderecoPipe } from './endereco.pipe';
import { PhonePipe } from './phone.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
    declarations: [
    EnderecoPipe,
    PhonePipe,
    StatusPipe
  ],
    exports: [
        EnderecoPipe,
        PhonePipe,
        StatusPipe
    ]
})
export class PipesModule{}