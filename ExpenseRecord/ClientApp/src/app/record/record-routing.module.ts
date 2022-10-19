import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecordComponent } from './new-record/new-record.component';
import { RecordComponent } from './record.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'items',
      },
      {
        path: 'items',
        component: RecordComponent,
      },
      {
        path: 'item/:id',
        component: NewRecordComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class RecordRoutingModule {}
