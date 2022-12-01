import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Disposable income', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Disposable income', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Debt factor', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Debt factor', weight: 9.0122, symbol: 'Be' },
];

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class DataSummaryComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'name', 'space', 'weight'];
  dataSource = ELEMENT_DATA;
  expandedElement: PeriodicElement | null | undefined;
  isExpand = false;
  INNER_TABLE_DATA = [
    {
      salary: 'Salary',
      monthio_Assessment: '14.027Kr',
      user_Assessment: '14.027Kr',
      decision: '14027',
    },
    {
      salary: 'Bonus & gross income',
      monthio_Assessment: '0Kr',
      user_Assessment: '0Kr',
      decision: '0',
    },
    {
      salary: 'Bonus & gross income',
      monthio_Assessment: '0Kr',
      user_Assessment: '0Kr',
      decision: '0',
    },
  ];
  constructor() {}
  expandFunc(element: any) {
    if (element) {
      this.isExpand = true;
    } else {
      this.isExpand = false;
    }
    console.log('expandFunc', element);
  }
  ngOnInit(): void {}

  /** Gets the total cost of all transactions. */
}
