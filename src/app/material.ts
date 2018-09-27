import { MatButtonModule, MatCheckboxModule, MatToolbar } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatToolbarModule, MatIconModule, MatMenuModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatToolbarModule, MatIconModule, MatMenuModule],
})

export class MaterialModule { }
