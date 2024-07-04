import { Component, computed, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { investmentResultService } from './investment-result.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentResultService = inject(investmentResultService);

  investmentResults = computed(() => this.investmentResultService.investmentResults());
}
