import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecordComponent } from './record.component';
import { NewRecordComponent } from './new-record/new-record.component';

@NgModule({
  declarations: [RecordComponent, NewRecordComponent],
  imports: [
    CommonModule,
    RecordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class RecordModule {}
