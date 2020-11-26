import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../../services/api/payment.service';
import {LanguageSelectorService} from '../../services/language-selector.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-customer-cost-payment',
  templateUrl: './customer-cost-payment.component.html',
  styleUrls: ['./customer-cost-payment.component.css']
})
export class CustomerCostPaymentComponent implements OnInit {
  public paymentAmount: number = undefined;

  constructor(
    private paymentService: PaymentService,
    private languageService: LanguageSelectorService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.setPaymentAmount();
  }

  public async onPayAsync(): Promise<void> {
    const paid = await this.paymentService.payAsync();

    this.setPaymentAmount();
    if (this.languageService.getPreferredLanguage() === 'ua') {
      this.notificationService.displayMessage(
'Оплата пройшла успішно ✅ Сплачено: ' + paid.toFixed(2) + ' $');
    } else {
      this.notificationService.displayMessage(
'The payment was successful ✅ Paid: ' + paid.toFixed(2) + ' $');
    }
  }

  private setPaymentAmount(): void {
    this.paymentService.getCustomerPaymentAmountAsync()
      .then(paymentAmount => this.paymentAmount = paymentAmount);
  }
}
