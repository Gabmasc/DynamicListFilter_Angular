import { NgModule } from "@angular/core";
import { EnderecoPipe } from './endereco.pipe';
import { PhonePipe } from './phone.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
    declarations: [
    EnderecoPipe,
    PhonePipe,
    StatusPipe,
    DashIfEmptyPipe
  ],
    exports: [
        EnderecoPipe,
        PhonePipe,
        StatusPipe,
        DashIfEmptyPipe
    ]
})
export class PipesModule{}