import {Component, Input, OnInit} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {environment} from "@env";
import {firstNameKey, idKey, lastNameKey} from "../../../_shared/config/app-config";

type ISomeType = {[key: string]: any};
const defaultDateFormat = environment.defaultDateFormat;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userId=localStorage.getItem(idKey);
  firstName=localStorage.getItem(firstNameKey);
  lastName=localStorage.getItem(lastNameKey);





  constructor() { }

  ngOnInit(): void {
  }
}
