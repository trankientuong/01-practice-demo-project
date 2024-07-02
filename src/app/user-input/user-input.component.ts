import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Investment } from '../investment-results/investment.model';
import { investmentResultService } from '../investment-results/investment-result.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  constructor(private investmentResultService: investmentResultService) {}

  onCalculate(calculateForm: NgForm) {
    this.investmentResultService.calculateInvestmentResults(
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
    calculateForm.resetForm({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 10,
    });
  }
}
