import { Component, OnInit, Input } from '@angular/core';
import { GoalService } from '../../../services/goal.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rowsForTable;
  @Input() columnsForTable;

  constructor(private goalService: GoalService) { }

  ngOnInit() {
  }

}
