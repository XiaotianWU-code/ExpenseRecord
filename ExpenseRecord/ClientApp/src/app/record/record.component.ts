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

  delete(id: string | undefined) {
    if (id) {
      this.recordService.deleteOne(id).subscribe((_) => {
        console.log('delete one: ', id);
        this.loadData();
      });
    } else {
      console.log('id is undefine');
    }
  }

  private loadData() {
    this.recordService
      .getAll()
      .pipe(
        takeUntil(this.destroy),
        catchError(() => {
          this.displayItems = [];
          return EMPTY;
        })
      )
      .subscribe((res) => {
        if (res.length <= 0) {
          this.displayItems = [];
        } else {
          this.displayItems = [...res];
        }
      });
  }
}
