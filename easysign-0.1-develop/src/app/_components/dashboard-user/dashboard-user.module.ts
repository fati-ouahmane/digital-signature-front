import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {NgxSpinnerModule} from "ngx-spinner";
import {ChartsModule} from "ng2-charts";
import {FormsModule} from "@angular/forms";
import {DashboardUserComponent} from "./dashboard-user.component";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    TranslateModule,
    NgxSpinnerModule,
    ChartsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],

})
export class DashboardUserModule { }
