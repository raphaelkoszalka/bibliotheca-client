import { Component, HostListener, Input } from '@angular/core';
import { FadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
  animations: [FadeAnimation]
})
export class PaymentGatewayComponent {

  public paymentType: string;
  // @todo: generic modal component
  public modalVisible: boolean = false;
  public paymentNotSelected: boolean = false;
  @Input()
  public total: string;

  constructor() {
    this.paymentType = '0';
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { this.userModalLoginVisibility(false); }
  }

  public doCheckout(): void {
    // payment type not selected
    if (this.paymentType === '0') {
      this.paymentNotSelected = true;
      return;
    }
    this.paymentNotSelected = false;
    // payment type equal to credit card
    if (this.paymentType === '1') {
      //@ todo: validation on credit card
      this.modalVisible = true;
      return;
    }
    // payment type equal to invoice
    // @todo: node pdf generator @ backend
    alert('Will post to PDF Invoice generator API endpoint.');
  }

  public userModalLoginVisibility(isVisible: boolean): void {
    this.modalVisible = isVisible;
  }

}