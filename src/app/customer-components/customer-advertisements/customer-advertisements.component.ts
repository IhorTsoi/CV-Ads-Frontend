import {Component, OnInit} from '@angular/core';
import {Advertisement} from '../../domain/Advertisement';
import {AdvertisementService} from '../../services/api/advertisement.service';
import {AdvertisementStatus} from '../../domain/constants/AdvertisementStatus';
import {PaymentService} from '../../services/api/payment.service';
import {LanguageSelectorService} from '../../services/language-selector.service';
import {NotificationService} from '../../services/notification.service';
import {MatDialog} from '@angular/material/dialog';
import {AdvertisementDetailsComponent} from '../advertisement-details/advertisement-details.component';

@Component({
  selector: 'app-customer-advertisements',
  templateUrl: './customer-advertisements.component.html',
  styleUrls: ['./customer-advertisements.component.css']
})
export class CustomerAdvertisementsComponent implements OnInit {
  public advertisements: Advertisement[];

  public AdvertisementStatus = AdvertisementStatus;

  constructor(
    private advertisementService: AdvertisementService,
    private languageService: LanguageSelectorService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.advertisementService.getCustomerAdvertisementsAsync()
      .then(advertisements => {
        this.advertisements = advertisements;
        console.log(this.advertisements);
      });
  }

  public async onStatusToggleAsync(index: number): Promise<void> {
    this.toggleAdvertisementStatus(index);
    await this.advertisementService.updateAdvertisementStatusAsync(
      this.advertisements[index]);

    this.displayLocalizedSuccessfulMessage();
  }

  public onOpenDetails(index: number): void {
    const ad = this.advertisements[index];
    this.dialog.open<AdvertisementDetailsComponent, Advertisement>(
      AdvertisementDetailsComponent, {data: ad, width: '80%'}
    );
  }

  private toggleAdvertisementStatus(index: number): void {
    if (this.advertisements[index].status === AdvertisementStatus.Published) {
      this.advertisements[index].status = AdvertisementStatus.Draft;
    } else {
      this.advertisements[index].status = AdvertisementStatus.Published;
    }
  }

  private displayLocalizedSuccessfulMessage(): void {
    if (this.languageService.getPreferredLanguage() === 'ua') {
      this.notificationService.displayMessage(
        'Статус рекламного оголошення було успішно змінено ✅');
    } else {
      this.notificationService.displayMessage(
        'The advertisement status was updated successfully ✅');
    }
  }
}
