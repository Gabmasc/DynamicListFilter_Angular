import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';





@NgModule({
    imports:[
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatDividerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        
        
    ],
    exports:[
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatDividerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        
    ]
})
export class AngularMaterialModule {}