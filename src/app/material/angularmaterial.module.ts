import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
    imports:[
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatDividerModule,
        MatFormFieldModule,
        
        
    ],
    exports:[
        MatListModule,
        MatInputModule,
        MatTableModule,
        MatDividerModule,
        MatFormFieldModule
        
    ]
})
export class AngularMaterialModule {}