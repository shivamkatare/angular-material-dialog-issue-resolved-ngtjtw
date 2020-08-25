import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BuyerPinDialogComponent } from '../buyer-pin-dialog/buyer-pin-dialog.component';

@Component({
  selector: 'app-context-buyer-pin',
  template: ''
})
export class BuyerPinComponent implements OnInit {

  constructor(
        private matDialog: MatDialog
  ) {
    const config: MatDialogConfig = {
      width: '400px',      
    };
    const res = this.matDialog.open(BuyerPinDialogComponent, config);
   }

  ngOnInit() {
  }

}