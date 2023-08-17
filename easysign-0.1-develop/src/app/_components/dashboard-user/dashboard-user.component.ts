import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {firstNameKey, idKey, lastNameKey} from "../../_shared/config/app-config";
import {AuthenticationService} from "@service/authentication.service";
import {AdminsService} from "@service/admins.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ConfirmService} from "@service/confirm.service";
import {Router} from "@angular/router";
import {ToasterService} from "@service/ToasterService";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {
  completionPercentage = 65;
  userId=localStorage.getItem(idKey);
  firstName=localStorage.getItem(firstNameKey);
  lastName=localStorage.getItem(lastNameKey);
  collapse: boolean = true;
  selectLang: string='en';
  TransLang:string[]=[];

  constructor(public auth:AuthenticationService,private adminsService:AdminsService,private SpinnerService: NgxSpinnerService,private dialogService: ConfirmService , private router: Router,private toaster: ToasterService,private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'fr']);
    translate.use('en');
  }

  ngOnInit(): void {
    this.getTransLanguage();
  }
  setTransLanguage(lg:any){
    this.selectLang=lg;
    this.translate.use(this.selectLang);
  }
  getTransLanguage(){
    this.TransLang=[...this.translate.getLangs()];
  }
  logout(){
    this.auth.logout();
  }
  navigateTo(path:any){
    this.router.navigateByUrl(path);

  }

  getFlag(lg:any){
    if('en'==lg){
      return "flag-icon flag-icon-gb flag-icon-squared";
    }
    else if('fr'==lg){
      return "flag-icon flag-icon-fr flag-icon-squared";
    }
    else{
      return "flag-icon flag-icon-gb flag-icon-squared";
    }
  }
}
