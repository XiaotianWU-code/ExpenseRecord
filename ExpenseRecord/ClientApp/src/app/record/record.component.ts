import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { RecordModel } from './models/Record';
import { RecordService } from './service/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  displayItems: RecordModel[] | undefined;
  private destroy = new Subject();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recordService: RecordService
  ) {}

  ngOnInit(): void {
    this.loadData();
    console.log('display: ', this.displayItems);
  }

  navToNew() {
    this.router.navigate(['item', 'new'], {
      relativeTo: this.route.parent,
    });
  }

  private loadData() {
    this.recordService
      .getAll()
      .pipe(
        takeUntil(this.destroy),
        catchError(() => {
          console.log('in catch error: ');
          this.displayItems = [];
          return EMPTY;
        })
      )
      .subscribe((res) => {
        console.log('in subscribe: ');
        console.log('res.lenght: ', res.length);
        if (res.length <= 0) {
          this.displayItems = [];
        } else {
          this.displayItems = [...res];
        }
        console.log('this.displayItems: ', this.displayItems);
        console.log('this.res: ', res);
      });
  }
}
