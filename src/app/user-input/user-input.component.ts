import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { investmentResultService } from '../investment-results/investment-result.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentResultService: investmentResultService) {}

  onCalculate(calculateForm: NgForm) {
    this.investmentResultService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });
    calculateForm.resetForm({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 10,
    });
  }
}
