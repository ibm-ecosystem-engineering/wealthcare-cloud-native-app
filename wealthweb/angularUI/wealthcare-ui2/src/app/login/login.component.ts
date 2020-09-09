import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NotifierService } from 'angular-notifier';

import { AuthenticationService } from '../services/authentication.service';
import { CommonUrlUtilService } from '../services/common-url-util.service';

@Component({
  selector: 'wealthcare-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  proForm: FormGroup;
  private readonly notifier: NotifierService;
  hostName : string;
  mainData:any = {loginId: 'sam', password: 'sam', returnMessage:''};

  constructor(
    public urlService : CommonUrlUtilService, public authService: AuthenticationService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.createForm();
    this.getHostName();
  }

  createForm() {
    this.proForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      role: [null, Validators.required]
    });
  }

  public onSubmit() {
    this.mainData.loginId = this.proForm.value.username ;
    this.mainData.password = this.proForm.value.password ;

    this.authService.doLogin(this.mainData).subscribe(data => {
        if (data) {
          console.log("LoginComponent : " + "login response sucess :"  + data);
          this.mainData = data;
          this.postLogin();
          this.routeAfterLogin();
        } else {
          this.notifier.notify('error', 'Wrong Credentials');
        }
      }, (err) => {
        console.log(err);
      }
    );
  }

  public postLogin() {

    let userDisplayRole = "";
    switch (this.mainData.userRole) {
      case 'BM': {
        userDisplayRole = "Business Manager";
        break;
      }
      case 'WM': {
        userDisplayRole = "Wealth Manager";
        break;
      }
      case 'CU': {
        userDisplayRole = "Customer";
        break;
      }
    }

    sessionStorage.setItem('userDisplayName', this.mainData.userDisplayName);
    sessionStorage.setItem('userDisplayId', this.mainData.userDisplayId);
    sessionStorage.setItem('userRole', this.mainData.userRole);
    sessionStorage.setItem('userDisplayRole', userDisplayRole);

    console.log("Role ----> " + this.mainData.userRole);
    console.log("userDisplayName ----> " + this.mainData.userDisplayName);
    console.log("userDisplayRole ----> " + userDisplayRole);
  }

  routeAfterLogin() {
    let userRole = sessionStorage.getItem('userRole')
    console.log("Role : " + userRole);
    switch (userRole) {
      case 'BM': {
        this.gotoBusinessmanager();
        break;
      }
      case 'WM': {
        this.gotoWealthmanager();
        break;
      }
      case 'CU': {
        this.gotoCustomer();
        break;
      }
    }
  }

  gotoLogout() {
    this.authService.logOut();
    this.router.navigate(["/logout"]);
  }
  
  gotoBusinessmanager() {
    this.router.navigate(['/businessmanager', {queryParams: true, skipLocationChange: true}]);
  }
  gotoWealthmanager() {
    this.router.navigate(['/wealthmanager', {queryParams: true, skipLocationChange: true}]);
  }
  gotoCustomer() {
    this.router.navigate(['/customer', {queryParams: true, skipLocationChange: true}]);
  }

  private getHostName() {
    console.log("LoginComponent  getHostName 1: " );
    this.urlService.fetchApiGatewayURLFromServer().subscribe( (data) => {
      this.hostName = data.value1;
      console.log("LoginComponent ----> getHostName 2: " + this.hostName);    
    });
  }

}
