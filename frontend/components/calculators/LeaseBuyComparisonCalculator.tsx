import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LeaseBuyComparisonCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [loanRate, setLoanRate] = useState('');
  const [downPaymentBuy, setDownPaymentBuy] = useState('');
  const [leaseTerm, setLeaseTerm] = useState('');
  const [leasePayment, setLeasePayment] = useState('');
  const [downPaymentLease, setDownPaymentLease] = useState('');
  const [result, setResult] = useState<{
    buyTotalCost: number;
    buyMonthlyPayment: number;
    leaseTotalCost: number;
    difference: number;
    recommendation: string;
  } | null>(null);

  const calculate = () => {
    if (!vehiclePrice || !loanTerm || !loanRate || !leaseTerm || !leasePayment) {
      return;
    }

    const price = parseFloat(vehiclePrice);
    const buyTerm = parseInt(loanTerm);
    const rate = parseFloat(loanRate) / 100 / 12;
    const buyDown = downPaymentBuy ? parseFloat(downPaymentBuy) : 0;
    const leaseTermMonths = parseInt(leaseTerm);
    const monthlyLease = parseFloat(leasePayment);
    const leaseDown = downPaymentLease ? parseFloat(downPaymentLease) : 0;

    // Calculate buy scenario
    const loanAmount = price - buyDown;
    let buyMonthlyPayment: number;
    
    if (rate === 0) {
      buyMonthlyPayment = loanAmount / buyTerm;
    } else {
      buyMonthlyPayment = loanAmount * (rate * Math.pow(1 + rate, buyTerm)) / 
                         (Math.pow(1 + rate, buyTerm) - 1);
    }
    
    const buyTotalCost = (buyMonthlyPayment * buyTerm) + buyDown;

    // Calculate lease scenario
    const leaseTotalCost = (monthlyLease * leaseTermMonths) + leaseDown;

    const difference = buyTotalCost - leaseTotalCost;
    const recommendation = difference > 0 ? 'Leasing is cheaper' : 'Buying is cheaper';

    setResult({
      buyTotalCost: Math.round(buyTotalCost * 100) / 100,
      buyMonthlyPayment: Math.round(buyMonthlyPayment * 100) / 100,
      leaseTotalCost: Math.round(leaseTotalCost * 100) / 100,
      difference: Math.round(Math.abs(difference) * 100) / 100,
      recommendation,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lease vs Buy Comparison Calculator</CardTitle>
        <CardDescription>
          Compare the total costs of leasing versus buying a vehicle
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Buying Scenario</h3>
            <div className="space-y-2">
              <Label htmlFor="vehiclePrice">Vehicle Price ($)</Label>
              <Input
                id="vehiclePrice"
                type="number"
                value={vehiclePrice}
                onChange={(e) => setVehiclePrice(e.target.value)}
                placeholder="Enter vehicle price"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loanTerm">Loan Term (months)</Label>
              <Input
                id="loanTerm"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                placeholder="Enter loan term"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loanRate">Interest Rate (%)</Label>
              <Input
                id="loanRate"
                type="number"
                step="0.01"
                value={loanRate}
                onChange={(e) => setLoanRate(e.target.value)}
                placeholder="Enter interest rate"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="downPaymentBuy">Down Payment ($) - Optional</Label>
              <Input
                id="downPaymentBuy"
                type="number"
                value={downPaymentBuy}
                onChange={(e) => setDownPaymentBuy(e.target.value)}
                placeholder="Enter down payment"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Leasing Scenario</h3>
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
              <Label htmlFor="leasePayment">Monthly Lease Payment ($)</Label>
              <Input
                id="leasePayment"
                type="number"
                value={leasePayment}
                onChange={(e) => setLeasePayment(e.target.value)}
                placeholder="Enter monthly payment"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="downPaymentLease">Down Payment ($) - Optional</Label>
              <Input
                id="downPaymentLease"
                type="number"
                value={downPaymentLease}
                onChange={(e) => setDownPaymentLease(e.target.value)}
                placeholder="Enter down payment"
              />
            </div>
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Compare Lease vs Buy
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-4">Comparison Results:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Buying</h4>
                <p>Monthly Payment: <span className="font-bold">${result.buyMonthlyPayment}</span></p>
                <p>Total Cost: <span className="font-bold">${result.buyTotalCost}</span></p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Leasing</h4>
                <p>Total Cost: <span className="font-bold">${result.leaseTotalCost}</span></p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-lg font-bold text-blue-700">{result.recommendation}</p>
              <p>Difference: <span className="font-bold">${result.difference}</span></p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
