import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
imports: [
  MatButtonModule,
  MatInputModule,
  MatCardModule
],
exports: [
  MatButtonModule,
  MatInputModule,
  MatCardModule
]
})
export class MaterialModule { }
