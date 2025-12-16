import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';





@NgModule({
    imports:[
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatDividerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        
        
    ],
    exports:[
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatDividerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        
    ]
})
export class AngularMaterialModule {}