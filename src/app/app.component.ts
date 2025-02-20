import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

import { Investment } from './investment-results/investment.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    CommonModule,
  ],
})
export class AppComponent {
  annualData = signal<Investment[] | undefined>(undefined);

  onCalculate(investmentData: Investment[]) {
    this.annualData.set(investmentData);
  }
}
