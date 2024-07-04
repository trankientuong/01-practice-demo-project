import { Component, output, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Investment } from '../investment-results/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<Investment[]>();

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onCalculate(calculateForm: NgForm) {
    const annualData: Investment[] = [];
    let investmentValue = +this.initialInvestment();

    for (let i = 0; i < +this.duration(); i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (+this.expectedReturn() / 100);
      investmentValue += interestEarnedInYear + +this.annualInvestment();
      const totalInterest =
        investmentValue - +this.annualInvestment() * year - +this.initialInvestment();
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: +this.annualInvestment(),
        totalInterest: totalInterest,
        totalAmountInvested:
          +this.initialInvestment() + +this.annualInvestment() * year,
      });
    }
    this.calculate.emit(annualData);
    calculateForm.resetForm({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 10,
    });
  }
}
