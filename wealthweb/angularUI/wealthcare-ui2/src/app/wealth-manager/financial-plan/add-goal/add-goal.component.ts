import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GoalService } from '../../../services/goal.service';
import { InvestmentService } from '../../../services/investment.service';
import { CustomerService } from '../../../services/customer.service';

import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent implements OnInit {
  @Input() selectedGoal;
  @Input() mainDataGoal:any = {wcCustomerId: 0, wcWealthManagerId : 0, goalReference: '', goalDesc: '', targetDate: '2025-12-25', targetAmount:100, };
  @Input() mainDataInvestment :any = {wcGoalId: 0, investmentDate: '2019-09-17', investmentAmount:100, gender : '', age : 0, avgIncome : 0, married : true,  spouseAge : 0 , spouseAvgIncome: 0, noOfChildren: 0  };
  @Output() closeAddContainer = new EventEmitter();

  wealthManagerId : any;

  constructor(private notifierService: NotifierService,private customerService: CustomerService,  private goalService: GoalService, private investmentService: InvestmentService) { }

  ngOnInit() {
  }

  onChange(event) {
    console.log(event.value);
  }
  
  closeAddBlock(message) {
    this.closeAddContainer.emit(message);
  }

  saveGoal() {
    this.mainDataGoal.wcWealthManagerId = sessionStorage.getItem('userDisplayId');
    this.mainDataGoal.wcCustomerId = sessionStorage.getItem('customerId');

    this.goalService.add(this.mainDataGoal).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });

    this.notifierService.notify('success','Goal added Successfully');
    this.closeAddBlock(false);
  }

  saveInvestment() {
    this.mainDataInvestment.wcGoalId = this.selectedGoal.id;
    this.mainDataInvestment.wcCustomerId = this.selectedGoal.wcCustomerId;

      this.customerService.getById(this.mainDataInvestment.wcCustomerId).subscribe((data: any) => {
        this.mainDataInvestment.gender = data.gender;
        this.mainDataInvestment.age = data.age;
        this.mainDataInvestment.avgIncome = data.avgIncome;
        this.mainDataInvestment.married = data.married;
        this.mainDataInvestment.spouseAge = data.spouseAge;
        this.mainDataInvestment.spouseAvgIncome = data.spouseAvgIncome;
        this.mainDataInvestment.noOfChildren = data.noOfChildren;

        this.investmentService.add(this.mainDataInvestment).subscribe((result) => {

        }, (err) => {
          console.log(err);
        });
      });

    this.notifierService.notify('success','Investment added Successfully');
    this.closeAddBlock(false);
  }
}
