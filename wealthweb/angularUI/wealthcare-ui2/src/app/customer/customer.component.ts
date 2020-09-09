import { UtilityService } from "../services/utility.service";
import { Component, OnInit } from "@angular/core";
import goalDetails from 'src/assets/goalDetails.json';
import customersList from 'src/assets/wealth_manager_custmers.json';
import { GoalService } from '../services/goal.service';
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "wealthcare-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"]
})
export class CustomerComponent implements OnInit {
  goalList: any;
  addUserEnabled: boolean = false;
  goals: any;
  customerDetails: any;
  state: string;
  customerId : any;
  userInfo:any = {userDisplayName: "", userDisplayRole : ""};

  constructor(private utility: UtilityService, private activatedRoute: ActivatedRoute, private customerService: CustomerService, private goalService: GoalService) {
    this.activatedRoute.queryParams.subscribe(params => {
      // this.userInfo = params;
    });
  }

  ngOnInit() {
    //this.goals = this.goalstList;
    // Test
    this.customerDetails = {};
    this.goalList = {};

    this.utility.currentState.subscribe(state => (this.state = state));

    this.customerId = sessionStorage.getItem('userDisplayId')
    this.loadCustomerById(this.customerId);
    this.loadGoalsByCustomerId(this.customerId);

    this.userInfo.userDisplayName =  sessionStorage.getItem("userDisplayName");
    this.userInfo.userDisplayRole =  sessionStorage.getItem("userDisplayRole");

  }

  addUser() {
    this.addUserEnabled = true;
    this.utility.addUser(true);
  }

  public loadCustomerById(id) {
    this.customerService.getById(id).subscribe((data: any) => {
      this.customerDetails = data;
    });
  }
  public loadGoalsByCustomerId(id) {
    this.goalService.getAllInfoByCustomerId(id).subscribe((data: any) => {
      this.goalList = data[0];
    });
  }
}
