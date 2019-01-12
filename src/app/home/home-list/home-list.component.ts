import { Component, OnInit } from '@angular/core';

import { BaseHttpClientService } from '../../core/services/base-http-client.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
  constructor(
      public dialog: MatDialog,
    private baseHttpClient: BaseHttpClientService
  ) { }

  ngOnInit(): void {

  }

  onOpen(): void {
    let config = new MatDialogConfig();
    config = {
      position: {
        top: '10px',
        right: '10px'
      },
      height: '98%',
      width: '100vw',
      panelClass: 'full-screen-modal',
    };
    const dialogRef = this.dialog.open(ImageDialogComponent);
  }
}
