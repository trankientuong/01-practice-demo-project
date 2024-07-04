import { Component, computed, inject } from '@angular/core';
import { investmentResultService } from './investment-result.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentResultService = inject(investmentResultService);

  investmentResults = computed(() => this.investmentResultService.investmentResults());
}
