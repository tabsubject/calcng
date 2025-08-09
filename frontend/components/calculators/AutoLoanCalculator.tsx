import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function AutoLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTermMonths, setLoanTermMonths] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [tradeInValue, setTradeInValue] = useState('');
  const [salesTax, setSalesTax] = useState('');
  const [fees, setFees] = useState('');
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalCost: number;
    totalLoanAmount: number;
  } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!loanAmount || !interestRate || !loanTermMonths) {
      toast({
        title: "Missing Values",
        description: "Please enter loan amount, interest rate, and loan term.",
        variant: "destructive",
      });
      return;
    }

    const vehiclePrice = parseFloat(loanAmount);
    const downPaymentAmount = downPayment ? parseFloat(downPayment) : 0;
    const tradeInAmount = tradeInValue ? parseFloat(tradeInValue) : 0;
    const salesTaxAmount = ((salesTax ? parseFloat(salesTax) : 0) / 100) * vehiclePrice;
    const feesAmount = fees ? parseFloat(fees) : 0;
    
    const totalLoanAmount = vehiclePrice + salesTaxAmount + feesAmount - downPaymentAmount - tradeInAmount;
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseInt(loanTermMonths);
    
    let monthlyPayment: number;
    if (monthlyRate === 0) {
      monthlyPayment = totalLoanAmount / termMonths;
    } else {
      monthlyPayment = totalLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                     (Math.pow(1 + monthlyRate, termMonths) - 1);
    }
    
    const totalCost = monthlyPayment * termMonths;
    const totalInterest = totalCost - totalLoanAmount;
    
    setResult({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalCost: Math.round(totalCost * 100) / 100,
      totalLoanAmount: Math.round(totalLoanAmount * 100) / 100
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Auto Loan Calculator</CardTitle>
        <CardDescription>
          Calculate monthly payments and total costs for your auto loan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Vehicle Price ($)</Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter vehicle price"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter annual interest rate"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanTermMonths">Loan Term (months)</Label>
            <Input
              id="loanTermMonths"
              type="number"
              value={loanTermMonths}
              onChange={(e) => setLoanTermMonths(e.target.value)}
              placeholder="Enter loan term in months"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="downPayment">Down Payment ($) - Optional</Label>
            <Input
              id="downPayment"
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              placeholder="Enter down payment"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tradeInValue">Trade-in Value ($) - Optional</Label>
            <Input
              id="tradeInValue"
              type="number"
              value={tradeInValue}
              onChange={(e) => setTradeInValue(e.target.value)}
              placeholder="Enter trade-in value"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="salesTax">Sales Tax (%) - Optional</Label>
            <Input
              id="salesTax"
              type="number"
              step="0.01"
              value={salesTax}
              onChange={(e) => setSalesTax(e.target.value)}
              placeholder="Enter sales tax rate"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fees">Additional Fees ($) - Optional</Label>
            <Input
              id="fees"
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              placeholder="Enter additional fees"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Loan
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monthly Payment:</span>
                <span className="font-bold text-2xl text-blue-700">${result.monthlyPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Loan Amount:</span>
                <span className="font-bold">${result.totalLoanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest:</span>
                <span className="font-bold">${result.totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Cost:</span>
                <span className="font-bold">${result.totalCost.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
