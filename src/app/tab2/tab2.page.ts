import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';  
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class Tab2Page implements ViewWillEnter {

  transactionHistory: any[] = [];

  constructor() {}

  ionViewWillEnter() {
    this.loadTransactionHistory();
  }

  loadTransactionHistory() {
    const savedHistory = localStorage.getItem('transactionHistory');
    if (savedHistory) {
      this.transactionHistory = JSON.parse(savedHistory);
    }
  }

  deleteTransaction(index: number) {
    this.transactionHistory = this.transactionHistory.filter((_, i) => i !== index);
    localStorage.setItem('transactionHistory', JSON.stringify(this.transactionHistory));
  }

  clearAllTransactions() {
    this.transactionHistory = [];
    localStorage.removeItem('transactionHistory');
  }
  
}


