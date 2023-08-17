import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from "@env";import {DashboardUserComponent} from "../dashboard-user/dashboard-user.component";
import {UserSettingsComponent} from "./user-settings.component";
import {AccountComponent} from "./compte/account.component";
import {SignatureComponent} from "./signature/signature.component";
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";

const moduleRoutes = environment.constants.appRoutes.modulesRoutes;

const routes: Routes = [
  {
    path: "",
    component: UserSettingsComponent,
    children: [
      {
        path: "",
        redirectTo: "usersettingscomponnet",
        pathMatch: "full",
      },

      {
        path: "account",
        component: AccountComponent
      },
      {
        path: "signature-settings",
        component: SignatureComponent
      },
      {
        path: "profile-settings",
        component: ProfileSettingsComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSettingsRoutingModule { }
