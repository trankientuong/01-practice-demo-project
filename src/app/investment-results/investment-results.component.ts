import { Component, input } from '@angular/core';
import { Investment } from './investment.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentResults = input<Investment[]>();
}
