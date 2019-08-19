import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IRouteInventory } from 'src/app/shared/models/route-inventory.model';
import { RoutesInventoryService } from 'src/app/admin/__services__/routes-inventory.service';
import { AppEventService } from 'src/app/shared/app-events.service';
import { AlertService } from 'src/app/shared/alert.service';
import { UpdatePageContentService } from 'src/app/shared/update-page-content.service';
import { ProviderService } from '../../../__services__/providers.service';

@Component({
  templateUrl: './routes-inventory-edit-modal.component.html',
  styleUrls: ['./routes-inventory-edit-modal.component.scss']
})
export class RoutesInventoryEditModalComponent implements OnInit {
  public loading: boolean;
  providers: [] = [];

  constructor(
    public dialogRef: MatDialogRef<RoutesInventoryEditModalComponent>,
    public alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: IRouteInventory,
    public routeService: RoutesInventoryService,
    private updatePage: UpdatePageContentService,
    private providerService: ProviderService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.getProviders();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getProviders() {
    this.providerService.getProviders().subscribe((res) => {
      if (res.success) {
        this.providers = res.data.providers;
      }
    });
  }

  editRoute(data): void {
    this.loading = true;
    const { id, name, takeOff, capacity, batch, status } = this.data;
    const { providerId } = data;

    const routeDetails: IRouteInventory = { name, takeOff, providerId, capacity, batch, status };
    this.routeService.changeRouteStatus(id, routeDetails).subscribe((res) => {
      if (res.success) {
        this.updatePage.triggerSuccessUpdateActions('updateRouteInventory', res.message);
        this.dialogRef.close();
      }
    }, (err: any) => {
      this.alert.error('Something went wrong');
      this.dialogRef.close();
    });
  }
}



