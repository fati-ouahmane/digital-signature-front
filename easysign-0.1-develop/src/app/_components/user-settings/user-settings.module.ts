import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {AccountComponent} from "./compte/account.component";
import {UserSettingsRoutingModule} from "./user-settings-routing.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SharedModule} from "../../_shared/shared.module";
import { SignatureComponent } from './signature/signature.component';
import {UserSettingsComponent} from "./user-settings.component";
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';



@NgModule({
  declarations: [ AccountComponent, SignatureComponent,  ProfileSettingsComponent],

  imports: [
    CommonModule,
    TranslateModule,
    NgxSpinnerModule,
    ChartsModule,
    FormsModule,
    UserSettingsRoutingModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatSlideToggleModule,
    MatTooltipModule,
    SharedModule,
  ]
})
export class UserSettingsModule { }
