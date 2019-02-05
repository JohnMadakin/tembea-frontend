import { NgModule } from '@angular/core';
import {
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatBadgeModule,
  MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoutModalComponent } from './auth/logout-modal/logout-modal.component';
import { RouteApproveDeclineModalComponent } from './admin/routes/route-approve-decline-modal/route-approve-decline-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule,
    MatGridListModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule,
    MatGridListModule
  ],
  declarations: [
    LogoutModalComponent,
    RouteApproveDeclineModalComponent
  ]
})
export class AngularMaterialModule {}
