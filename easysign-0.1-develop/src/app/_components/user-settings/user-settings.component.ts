import { Component, OnInit } from '@angular/core';
import {firstNameKey, idKey, lastNameKey} from "../../_shared/config/app-config";
import {AuthenticationService} from "@service/authentication.service";
import {AdminsService} from "@service/admins.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ConfirmService} from "@service/confirm.service";
import {Router} from "@angular/router";
import {ToasterService} from "@service/ToasterService";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {


  userId=localStorage.getItem(idKey);
  firstName=localStorage.getItem(firstNameKey);
  lastName=localStorage.getItem(lastNameKey);

  constructor(public auth:AuthenticationService) {}


    ngOnInit(): void {

  }
  logout(){
    this.auth.logout();
  }


}
