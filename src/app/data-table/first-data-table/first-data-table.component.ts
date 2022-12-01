import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-first-data-table',
  templateUrl: './first-data-table.component.html',
  styleUrls: ['./first-data-table.component.css'],
})
export class FirstDataTableComponent implements OnInit {
  constructor() {}
  panelOpenState = true;
  ngOnInit(): void {}
  accordions = [
    {
      title: 'Disposable income',
      description: '-1.000 kr.',
      subAccordion: [
        {
          title: 'Required Disposable income',
          description: '6.800 kr.',
          content: 'Excess disposable income',
        },
        // {
        //   title: 'item 2',
        //   description: '',
        //   content: 'Content of subpanel 02',
        // },
      ],
    },
    {
      title: 'Debt factor',
      description: '1.63',
      subAccordion: [
        {
          title: 'Total debt',
          description: '980.261 kr.',
          content: 'Content of subpanel 01',
        },
      ],
    },
    // {
    //   title: '3',
    //   description: "You will see, it's very easy!",
    //   subAccordion: [
    //     {
    //       title: 'item 1',
    //       description: 'description',
    //       content: 'Content of subpanel 01',
    //     },
    //   ],
    // },
    // {
    //   title: '4',
    //   description: 'Try it now, go ahead',
    //   subAccordion: [
    //     {
    //       title: 'item 1',
    //       description: 'description',
    //       content: 'Content of subpanel 01',
    //     },
    //   ],
    // },
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.accordions, event.previousIndex, event.currentIndex);
  }
}
