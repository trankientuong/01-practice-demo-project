import { Injectable, signal } from '@angular/core';
import { Investment, InvestmentInput } from './investment.model';

@Injectable({ providedIn: 'root' })
export class investmentResultService {
  investmentResults = signal<Investment[] | undefined>(undefined);

  calculateInvestmentResults(investmentInput: InvestmentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentInput; // destructuring
    const annualData: Investment[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.investmentResults.set(annualData);
  }
}
