import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-data-table',
  styleUrls: ['./data-table.component.css'],
  templateUrl: './data-table.component.html',
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
export class DataTableComponent {
  constructor() {}

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['MonthioAssessment', 'weight', 'symbol'];
  columnsToDisplayWithExpand = ['expand', 'income', ...this.columnsToDisplay];
  expandedElement: PeriodicElement | null | undefined;
  ELEMENT = [
    {
      income: 'Salary',
      monAssessment: '14.07kr.',
      userAssessment: '14.07kr.',
      Decision: '14.07kr.',
    },
    {
      income: 'Salary',
      monAssessment: '14.07kr.',
      userAssessment: '14.07kr.',
      Decision: '14.07kr.',
    },
    {
      income: 'Bonus & gross income',
      monAssessment: '0kr.',
      userAssessment: '0kr.',
      Decision: '0kr.',
    },
    {
      income: 'Salary',
      monAssessment: '14.07kr.',
      userAssessment: '0kr.',
      Decision: '14.07kr.',
    },
    {
      income: 'Salary',
      monAssessment: '14.07kr.',
      userAssessment: '14.07kr.',
      Decision: '14.07kr.',
    },
  ];
}

export interface PeriodicElement {
  MonthioAssessment: string;
  weight: string;
  symbol: string;
  income: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    MonthioAssessment: '14.027 kr.',
    weight: '14.027 kr.',
    symbol: '14.027 kr.',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Helium',
    weight: '14.027 kr.',
    symbol: 'He',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Lithium',
    weight: '14.027 kr.',
    symbol: 'Li',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Beryllium',
    weight: '14.027 kr.',
    symbol: 'Be',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Boron',
    weight: '14.027 kr.',
    symbol: 'B',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Carbon',
    weight: '14.027 kr.',
    symbol: 'C',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Nitrogen',
    weight: '14.027 kr.',
    symbol: 'N',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Oxygen',
    weight: '14.027 kr.',
    symbol: 'O',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Fluorine',
    weight: '14.027 kr.',
    symbol: 'F',
    income: 'Total income after tax',
  },
  {
    MonthioAssessment: 'Neon',
    weight: '14.027 kr.',
    symbol: 'Ne',
    income: 'Total income after tax',
  },
];
