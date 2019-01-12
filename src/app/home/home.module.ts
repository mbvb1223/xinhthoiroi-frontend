import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeListComponent } from './home-list/home-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@NgModule({
  declarations: [
    HomeListComponent,
    ImageDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ImageDialogComponent
  ]
})
export class HomeModule {
}
