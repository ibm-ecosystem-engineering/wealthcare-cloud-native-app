import { Component, OnInit, Input } from '@angular/core';
import rows from 'src/assets/tablerows.json';
import { NotifierService } from 'angular-notifier';
import { GoalService } from '../../services/goal.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'financial-plan',
  templateUrl: './financial-plan.component.html',
  styleUrls: ['./financial-plan.component.scss']
})
export class FinancialPlanComponent implements OnInit {

  @Input() customersGoalList;
  @Input() financialEnabled;

  public addGoalPageEnabled: boolean;
  public deleteUserEnabled: boolean;

  public openGoalDetailsPageEnabled: boolean;
  public selectedGoal: any;
  public selectedIndex: any;
  public columnsForTable:any;
  public rowsForTable:any;
  public customerGoals:any;
  public deleteSelectedGoal:any;

  public doughnutChartLabels = [ 'Investment % ', 'Pending investment %'];
  public doughnutChartData: MultiDataSet = [ [60, 40]  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutColors:any[] = [
    { backgroundColor: ["#a9dfbf", "#aeb6bf"] },
    { borderColor: ["#FEFFC9", "#AEEBF2"] }];

  constructor(private notifierService: NotifierService, private goalService: GoalService ) { 

  }
  ngOnChanges(){
    this.customerGoals = this.customersGoalList;
  }

  ngOnInit() {
  }

  public openGoalDetails(goal,index) {
    // this.customerGoals = [goal];
    this.selectedGoal = [goal];
    this.selectedIndex  = index + 1;
    this.openGoalDetailsPageEnabled = true;
    this.addGoalPageEnabled = false;
    this.financialEnabled = false;
    this.columnsForTable = [ 'Goal #', 'Date', 'Invested Amount', 'Stocks(INR)', 'Mutual Funds(INR)', 'Fixed Deposit(INR)', 'Current Value(INR)'];
//    this.rowsForTable = rows;
    
    //Added by Gandhi
    this.rowsForTable = [goal];
  }
  public addGoal(goalItem?){
    this.selectedIndex  = -1;

    this.addGoalPageEnabled = true;
    this.openGoalDetailsPageEnabled = false;
    this.financialEnabled =false;
    this.selectedGoal ='';
  }

  public addInvestment(goal, index) {
    this.selectedIndex  = index+1;

    console.log('add investemnt' + goal + index);
    this.addGoal(goal);
    console.log(goal);
    this.selectedGoal = goal;

  }
  public deleteGoal(goal, action) {
    console.log('Delete goal' + goal + action);
    this.deleteSelectedGoal = goal;
    this.deleteUserEnabled = true;

    this.goalService.delete(goal.id).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });

    this.notifierService.notify('success','Goal deleted Successfully');
  }
  public closeGoalOverView(event) {
    this.customerGoals = this.customersGoalList;
    this.openGoalDetailsPageEnabled = false;
    this.addGoalPageEnabled = false;
    this.financialEnabled = true;
    this.deleteUserEnabled = event;

  }
  //donut events

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  saveGoal() {

  }

}
