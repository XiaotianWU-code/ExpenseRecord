import { RecordModel } from './../models/Record';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {
  item = { description: 'new item' } as RecordModel;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.item = {
      description: 'new item',
    };
  }

  navToList() {
    this.router.navigate(['items'], {
      relativeTo: this.route.parent,
    });
  }

  saveItem() {
    console.log('save Item: ', this.item);
  }
}
