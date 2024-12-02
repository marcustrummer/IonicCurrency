import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';  

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
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
