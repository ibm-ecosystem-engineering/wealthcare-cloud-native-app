import { Component, OnInit, Input, ViewChild } from '@angular/core';
import customerJSON from 'src/assets/wealth_manager_custmers.json';
import goalDetails from 'src/assets/goalDetails.json';
import rows from 'src/assets/tablerows.json';
import { CustomerService } from '../services/customer.service';
import { GoalService } from '../services/goal.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Color, BaseChartDirective, Label } from "ng2-charts";
import * as pluginAnnotations from "chartjs-plugin-annotation";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wealth-manager',
  templateUrl: './wealth-manager.component.html',
  styleUrls: ['./wealth-manager.component.scss']
})
export class WealthManagerComponent implements OnInit {

  @Input() customersGoalList;

  public customersList: any;
  public customerDetails:any;
  public goalList:any;
  public financialEnabled: boolean;
  public columnsForTable: any;
  public rowsForTable: any;

  userInfo:any = {userDisplayName: "", userDisplayRole : ""};

  public lineChartData: ChartDataSets[] = [
    { data: [11500, 13000 ], label: 'Stock' },
    { data: [15500, 18000], label: 'Mutual funds' },
    { data: [16500, 21000], label: 'Fixed deposit' }
  ];
  public lineChartLabels: Label[] = [
    // '12th June 2014', '30th June 2015', '30th June 2015', '30th June 2015'
    'Stocks', 'Mutual Funds', 'FIxed Deposit'

  ];

  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: "y-axis-0",
          position: "left"
        },
        {
          id: "y-axis-1",
          position: "right",
          gridLines: {
            color: "rgba(255,0,0,0.3)"
          },
          ticks: {
            fontColor: "red"
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: "March",
          borderColor: "orange",
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: "orange",
            content: "LineAnno"
          }
        }
      ]
    }
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "lightgreen",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "yellow",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    },
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "#5499c7",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    }
  ];

  public barChartColors = [
    {
      backgroundColor: '#5d6d7e',
      pointBackgroundColor: 'rgba(78, 180, 189, 1)',
      pointHoverBackgroundColor: 'rgba(151,187,205,1)',
      borderColor: 'rgba(0,0,0,0',
      pointBorderColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }, 
    {
      backgroundColor: '#aed6f1',
      pointBackgroundColor: 'rgba(78, 180, 189, 1)',
      pointHoverBackgroundColor: 'rgba(151,187,205,1)',
      borderColor: 'rgba(0,0,0,0',
      pointBorderColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [pluginAnnotations];

// Bar chart
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  
  public barChartLabels: Label[] = [ 'Stock', 'Mutual Fund', 'FIxed Deposit'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [4000, 2000, 4000, 3000], label: 'Investment Value' },
    { data: [22000, 5000, 2000, 0], label: 'Current Value' }
  ];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private goalService: GoalService,) { 
    this.columnsForTable = [ 'Goal #', 'Date', 'Invested Amount', 'Stocks(INR)', 'Mutual Funds(INR)', 'Fixed Deposit(INR)', 'Current Value(INR)'];

    // this.rowsForTable = rows;
    this.activatedRoute.queryParams.subscribe(params => {
      //this.userInfo = params;
    });
  }

  ngOnInit() {
    // this.customersList = customerJSON ;
    // this.goalList = goalDetails;
    this.loadCustomers();

    this.userInfo.userDisplayName =  sessionStorage.getItem("userDisplayName");
    this.userInfo.userDisplayRole =  sessionStorage.getItem("userDisplayRole");
  }

  public displayCustomerdetails(event) {
    this.customerDetails = event;
    this.financialEnabled = true;
    sessionStorage.setItem('customerId', this.customerDetails.id);
    
    this.loadGoalsByCustomerId(this.customerDetails.id);
  }

  public onFinancialPlanClick(event) {
    this.financialEnabled = true;
  }

  public openCustomers() {
    this.financialEnabled = false;
  }

  public loadCustomers() {
    this.customerService.getAll().subscribe((data: {}) => {
      this.customersList = data;
    });
  }

  public loadGoalsByCustomerId(id) {
    this.goalList = [];
    this.rowsForTable = [];
    this.goalService.getAllInfoByCustomerId(id).subscribe((data: any) => {
      this.goalList = data[0];
      this.rowsForTable = data[0];
        this.barChartData = data[1];
        this.lineChartData = data[2];
    });
  }

}
