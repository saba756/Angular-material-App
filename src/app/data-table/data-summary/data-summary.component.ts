import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.css'],
})
export class DataSummaryComponent implements OnInit {
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}

  /** Gets the total cost of all transactions. */
}
