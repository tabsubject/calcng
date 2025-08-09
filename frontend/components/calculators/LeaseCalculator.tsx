import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LeaseCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState('');
  const [residualValue, setResidualValue] = useState('');
  const [leaseTerm, setLeaseTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [salesTax, setSalesTax] = useState('');
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalCost: number;
    totalTax: number;
  } | null>(null);

  const calculate = () => {
    if (!vehiclePrice || !residualValue || !leaseTerm || !interestRate) {
      return;
    }

    const price = parseFloat(vehiclePrice);
    const residual = parseFloat(residualValue);
    const term = parseInt(leaseTerm);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const down = downPayment ? parseFloat(downPayment) : 0;
    const tax = salesTax ? parseFloat(salesTax) / 100 : 0;

    // Depreciation portion
    const depreciationPayment = (price - residual) / term;
    
    // Finance portion (rent charge)
    const financePayment = (price + residual) * rate;
    
    // Base monthly payment before tax
    const basePayment = depreciationPayment + financePayment;
    
    // Monthly tax
    const monthlyTax = basePayment * tax;
    
    // Total monthly payment
    const monthlyPayment = basePayment + monthlyTax;
    
    const totalCost = (monthlyPayment * term) + down;
    const totalTax = monthlyTax * term;

    setResult({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalCost: Math.round(totalCost * 100) / 100,
      totalTax: Math.round(totalTax * 100) / 100,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Car Lease Calculator</CardTitle>
        <CardDescription>
          Calculate monthly lease payments and total lease costs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="vehiclePrice">Vehicle Price ($)</Label>
            <Input
              id="vehiclePrice"
              type="number"
              value={vehiclePrice}
              onChange={(e) => setVehiclePrice(e.target.value)}
              placeholder="Enter vehicle MSRP"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="residualValue">Residual Value ($)</Label>
            <Input
              id="residualValue"
              type="number"
              value={residualValue}
              onChange={(e) => setResidualValue(e.target.value)}
              placeholder="Enter residual value"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="leaseTerm">Lease Term (months)</Label>
            <Input
              id="leaseTerm"
              type="number"
              value={leaseTerm}
              onChange={(e) => setLeaseTerm(e.target.value)}
              placeholder="Enter lease term"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interestRate">Money Factor (as APR %)</Label>
            <Input
              id="interestRate"
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter interest rate"
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
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Lease Payment
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monthly Payment:</span>
                <span className="font-bold text-2xl text-blue-700">${result.monthlyPayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Lease Cost:</span>
                <span className="font-bold">${result.totalCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Tax:</span>
                <span className="font-bold">${result.totalTax}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
