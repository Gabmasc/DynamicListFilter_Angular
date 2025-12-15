import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    imports:[
        MatListModule,
        MatDividerModule,
        MatTableModule
        
    ],
    exports:[
        MatListModule,
        MatDividerModule,
        MatTableModule
    ]
})
export class AngularMaterialModule {}