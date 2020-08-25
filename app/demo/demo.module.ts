import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerPinComponent } from './buyer-pin/buyer-pin.component'
import {MatToolbarModule , MatButtonModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ContextPinServicesComponent } from './context-pin-services/context-pin-services.component';
import { ContextPinEmailsComponent } from './context-pin-emails/context-pin-emails.component';
import { ContextPinDetailsComponent } from './context-pin-details/context-pin-details.component';
import { BuyerPinDialogComponent } from './buyer-pin-dialog/buyer-pin-dialog.component';
import { ContextPinComponent } from './context-pin/context-pin.component';

const demoRoutes: Routes = [
  {
    path: 'demo',
    children: [
      {
        path: 'context-pin',
        component: ContextPinComponent,
        children: [
          {
            path: 'buyer-pin',
            component: BuyerPinComponent
          }
        ]
      }
    ]
  },
  { path: 'services', outlet: 'popupContent', component: ContextPinServicesComponent },
  { path: 'emails', outlet: 'popupContent', component: ContextPinEmailsComponent },
  { path: 'details', outlet: 'popupContent', component: ContextPinDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forChild(demoRoutes),
  ],
  declarations: [
    BuyerPinComponent,
    ContextPinServicesComponent, 
    ContextPinEmailsComponent,
     ContextPinDetailsComponent, 
     BuyerPinDialogComponent, ContextPinComponent
     ],
   entryComponents: [
    BuyerPinDialogComponent,
  ]
})
export class DemoModule { }