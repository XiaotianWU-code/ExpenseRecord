import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordModel } from './models/Record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  displayItems: RecordModel[] | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.displayItems = [{ description: 'first record' }];
  }

  navToNew() {
    this.router.navigate(['item', 'new'], {
      relativeTo: this.route.parent,
    });
  }
}
